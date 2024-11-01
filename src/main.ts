import {
  Hume,
  HumeClient,
  convertBlobToBase64,
  convertBase64ToBlob,
  ensureSingleValidAudioTrack,
  getAudioStream,
  getBrowserSupportedMimeType,
  MimeType,
} from "hume";
import "./styles.css";

(async () => {
  // DOM Elements
  const startBtn = document.querySelector<HTMLButtonElement>("button#start-btn");
  const stopBtn = document.querySelector<HTMLButtonElement>("button#stop-btn");
  const chat = document.querySelector<HTMLDivElement>("div#chat");
  const textInput = document.getElementById("message-input") as HTMLInputElement;
  const sendTextButton = document.getElementById("send-btn") as HTMLButtonElement;
  const muteBtn = document.querySelector<HTMLButtonElement>('button#mute-btn'); // Mute button
  const fileInput = document.getElementById("file-input") as HTMLInputElement;

  // Event Listeners
  startBtn?.addEventListener("click", connect);
  stopBtn?.addEventListener("click", disconnect);
  sendTextButton?.addEventListener("click", handleSendText);
  textInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
          handleSendText();
      }
  });
  muteBtn?.addEventListener('click', toggleMute); // Mute button listener
  fileInput.addEventListener("change", handleSendFile);


  // State variables
  let client: HumeClient | null = null;
  let socket: Hume.empathicVoice.chat.ChatSocket | null = null;
  let connected = false;
  let recorder: MediaRecorder | null = null;
  let audioStream: MediaStream | null = null;
  let currentAudio: HTMLAudioElement | null = null;
  let isPlaying = false;
  let resumeChats = true;
  let chatGroupId: string | undefined;
  let muted = false; // Muted state
  const audioQueue: Blob[] = [];
  const mimeType: MimeType = (() => {
      const result = getBrowserSupportedMimeType();
      return result.success ? result.mimeType : MimeType.WEBM;
  })();

  async function connect(): Promise<void> {
      if (!client) {
          client = new HumeClient({
              apiKey: import.meta.env.VITE_HUME_API_KEY || "",
              secretKey: import.meta.env.VITE_HUME_SECRET_KEY || "",
          });
      }

      socket = await client.empathicVoice.chat.connect({
          configId: import.meta.env.VITE_HUME_CONFIG_ID || null,
          resumedChatGroupId: chatGroupId,
      });

      socket.on("open", handleWebSocketOpenEvent);
      socket.on("message", handleWebSocketMessageEvent);
      socket.on("error", handleWebSocketErrorEvent);
      socket.on("close", handleWebSocketCloseEvent);

      toggleBtnStates();
  }

  async function handleToolCallMessage(
    toolCallMessage: Hume.empathicVoice.ToolCallMessage,
    socket: Hume.empathicVoice.chat.ChatSocket
): Promise<void> {
    if (toolCallMessage.name === "send_message") {
        try {
            const args = JSON.parse(toolCallMessage.parameters) as {
                message: string;
            };
            const { message } = args;

            // Create a new ChatCard for streaming response
            const chatCard = new ChatCard({
              role: "assistant",
              timestamp: new Date().toLocaleTimeString(),
              content: "", // Initially empty content
              scores: [],
            });
            chat?.appendChild(chatCard.render());

            // Stream the response
            await sendMessageToEndpoint(message, (chunk: string) => {
                // Update the chat card's content with each chunk
                chatCard.updateContent(chunk);
                if (chat) chat.scrollTop = chat.scrollHeight; // Scroll to bottom
            });

            const toolResponseMessage = {
                type: "tool_response",
                toolCallId: toolCallMessage.toolCallId,
                content: JSON.stringify({
                    status: "success",
                    // response: response, // No longer need to send entire response back
                }),
            };
              socket.sendToolResponseMessage(toolResponseMessage);

          } catch (error) {
              socket.sendToolErrorMessage({
                  toolCallId: toolCallMessage.toolCallId,
                  error: error instanceof Error ? error.message : "Unknown error",
                  code: "SEND_MESSAGE_ERROR",
                  level: "warn",
                  content: "Failed to send message to endpoint",
              });
          }
      }
  }


  async function handleWebSocketMessageEvent(message: Hume.empathicVoice.SubscribeEvent): Promise<void> {
      switch (message.type) {
          case "chat_metadata":
              chatGroupId = message.chatGroupId;
              break;
          case "user_message":
          case "assistant_message":
              const { role, content } = message.message;
              const topThreeEmotions = extractTopThreeEmotions(message);
              appendMessage(role, content ?? "", topThreeEmotions);
              break;
          case "audio_output":
              if (!muted) {
                  const audioOutput = message.data;
                  const blob = convertBase64ToBlob(audioOutput, mimeType);
                  audioQueue.push(blob);
                  if (audioQueue.length >= 1) playAudio();
              }
              break;
          case "tool_call":
              await handleToolCallMessage(message, socket!);
              break;
          case "user_interruption":
              stopAudio();
              break;
      }
  }

  async function sendMessageToEndpoint(message: string, onChunk: (chunk: string) => void): Promise<void> {
    const url = new URL("http://localhost:8004/agent/general_agent/run");
    url.searchParams.append("message", message);
    url.searchParams.append("stream", "true");
    url.searchParams.append("monitor", "false");

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'text/event-stream' // Important for SSE
        },
        redirect: "follow",
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // This is how to properly read a streaming response
    const reader = response.body?.getReader();
    if (!reader) {
        throw new Error("Failed to get reader from response body");
    }

    let partialChunk = "";
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder("utf-8").decode(value);

        // Split the chunk by double newlines to get complete JSON objects
        const lines = (partialChunk + chunk).split("\n\n");
        partialChunk = lines.pop() || ""; // Store the last (potentially incomplete) chunk

        for (const line of lines) {
            try {
                const data = JSON.parse(line);
                onChunk(data.content); // Process the content of each streamed response
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        }
    }
}

  function disconnect(): void {
      toggleBtnStates();
      stopAudio();
      recorder?.stop();
      recorder = null;
      audioStream = null;
      connected = false;

      if (!resumeChats) {
          chatGroupId = undefined;
      }

      socket?.close();
  }

  async function captureAudio(): Promise<void> {
      if (!muted) { // Only capture audio if not muted
          audioStream = await getAudioStream();
          ensureSingleValidAudioTrack(audioStream);

          recorder = new MediaRecorder(audioStream, { mimeType });

          recorder.ondataavailable = async ({ data }) => {
              if (data.size < 1) return;
              const encodedAudioData = await convertBlobToBase64(data);
              const audioInput: Omit<Hume.empathicVoice.AudioInput, "type"> = {
                  data: encodedAudioData,
              };
              socket?.sendAudioInput(audioInput);
          };

          const timeSlice = 100;
          recorder.start(timeSlice);
      }
  }

  function handleWebSocketErrorEvent(error: Error): void {
      console.error(error);
  }

  async function handleWebSocketCloseEvent(): Promise<void> {
      if (connected) await connect();
      console.log("Web socket connection closed");
  }

  function appendMessage(
      role: Hume.empathicVoice.Role,
      content: string,
      topThreeEmotions: { emotion: string; score: any }[]
  ): void {
      const chatCard = new ChatCard({
          role,
          timestamp: new Date().toLocaleTimeString(),
          content,
          scores: topThreeEmotions,
      });
      chat?.appendChild(chatCard.render());
      if (chat) chat.scrollTop = chat.scrollHeight;
  }

  function toggleBtnStates(): void {
      if (startBtn) startBtn.disabled = !startBtn.disabled;
      if (stopBtn) stopBtn.disabled = !stopBtn.disabled;
  }
  function handleSendText() {
      const message = textInput.value;
      if (message && socket) {
          socket.sendUserInput(message);
          appendMessage("user", message, []);
          textInput.value = "";
      }
  }

  function extractTopThreeEmotions(
      message: Hume.empathicVoice.UserMessage | Hume.empathicVoice.AssistantMessage
  ): { emotion: string; score: string }[] {
      const scores = message.models.prosody?.scores;
      const scoresArray = Object.entries(scores || {});
      scoresArray.sort((a, b) => b[1] - a[1]);
      const topThreeEmotions = scoresArray.slice(0, 3).map(([emotion, score]) => ({
          emotion,
          score: (Math.round(Number(score) * 100) / 100).toFixed(2),
      }));
      return topThreeEmotions;
  }
  function toggleMute(): void {
    muted = !muted;
    if (muted) {
      stopAudio();
      recorder?.stop();  // Stop recording if muted
      // Update mute button to indicate muted state (e.g., change icon, color)
      muteBtn!.innerHTML = '<i class="fas fa-microphone-slash"></i>'; // Example: Show microphone-slash icon
      muteBtn!.style.backgroundColor = 'grey'; // Example: Grey out the button
    } else {
      if (connected) captureAudio(); // Restart recording if unmuted and connected
      // Update mute button to indicate unmuted state
      muteBtn!.innerHTML = '<i class="fas fa-microphone"></i>'; // Example: Show microphone icon
      muteBtn!.style.backgroundColor = 'red'; // Example: Restore red background
    }
  }


  async function handleWebSocketOpenEvent(): Promise<void> {
      connected = true;
      await captureAudio();
      console.log("Web socket connection opened");
  }
  async function handleSendFile(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        try {
            const fileData = await readFileAsBase64(file);

            const response = await fetch("/updateContext", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ context: fileData }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(
                    `Failed to update context: ${response.status} ${response.statusText} - ${errorText}`
                );
            }

            console.log("File sent as context:", file.name);
        } catch (error) {
            console.error("Error sending file:", error);
        }
    }
}


    function readFileAsBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64String = (reader.result as string).split(",")[1]; // remove the data prefix
            resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}


  async function playAudio(): Promise<void> {
      if (isPlaying || audioQueue.length === 0) return;

      isPlaying = true;
      const blob = audioQueue.shift();

      if (blob) {
          const url = URL.createObjectURL(blob);
          currentAudio = new Audio(url);
          currentAudio.onended = () => {
              isPlaying = false;
              URL.revokeObjectURL(url);
              playAudio();
          };
          currentAudio.play();
      }
  }


  function stopAudio(): void {
      if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
          currentAudio = null;
      }
      audioQueue.length = 0;
      isPlaying = false;
  }
})();

interface Score {
  emotion: string;
  score: string;
}

interface ChatMessage {
  role: Hume.empathicVoice.Role;
  timestamp: string;
  content: string;
  scores: Score[];
}

class ChatCard {
  private message: ChatMessage;
  private contentElement!: HTMLElement; // Reference to the content div

  constructor(message: ChatMessage) {
      this.message = message;
  }

  private createScoreItem(score: Score): HTMLElement {
      const scoreItem = document.createElement("div");
      scoreItem.className = "score-item";
      scoreItem.innerHTML = `${score.emotion}: <strong>${score.score}</strong>`;
      return scoreItem;
  }

  public render(): HTMLElement {
      const card = document.createElement("div");
      card.className = `chat-card ${this.message.role}`;

      const role = document.createElement("div");
      role.className = "role";
      role.textContent = this.message.role.charAt(0).toUpperCase() + this.message.role.slice(1);

      const timestamp = document.createElement('div');
      timestamp.className = 'timestamp';
      timestamp.innerHTML = `<strong>${this.message.timestamp}</strong>`;


      const content = document.createElement("div");
      content.className = "content";
      this.contentElement = content; // Store the reference
      content.textContent = this.message.content;

      const scores = document.createElement('div');
      scores.className = 'scores';
      this.message.scores.forEach(score => {
        scores.appendChild(this.createScoreItem(score));
      });

      card.appendChild(role);
      card.appendChild(timestamp);
      card.appendChild(content);
      card.appendChild(scores);


      return card;
  }

  // Method to update the content of the ChatCard
  public updateContent(newContent: string): void {
      this.contentElement.textContent += newContent;
  } 
}

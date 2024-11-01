# Repository: hume-typescript-sdk

# File Tree

```
hume-typescript-sdk/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── workflows/
├── .mock/
│   ├── definition/
│   │   ├── empathic-voice/
│   │   ├── expression-measurement/
│   │   │   ├── batch/
│   │   │   ├── stream/
│   └── fern.config.json
├── src/
│   ├── api/
│   │   ├── resources/
│   │   │   ├── empathicVoice/
│   │   │   │   ├── client/
│   │   │   │   │   ├── Client.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── errors/
│   │   │   │   │   ├── BadRequestError.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── resources/
│   │   │   │   │   ├── chat/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── Client.ts
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   └── Socket.ts
│   │   │   │   │   │   ├── types/
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   ├── PublishEvent.ts
│   │   │   │   │   │   │   └── SubscribeEvent.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── chatGroups/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── ChatGroupsGetChatGroupRequest.ts
│   │   │   │   │   │   │   │   ├── ChatGroupsListChatGroupEventsRequest.ts
│   │   │   │   │   │   │   │   ├── ChatGroupsListChatGroupsRequest.ts
│   │   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   │   ├── Client.ts
│   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── chats/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── ChatsListChatEventsRequest.ts
│   │   │   │   │   │   │   │   ├── ChatsListChatsRequest.ts
│   │   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   │   ├── Client.ts
│   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── configs/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── ConfigsListConfigsRequest.ts
│   │   │   │   │   │   │   │   ├── ConfigsListConfigVersionsRequest.ts
│   │   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   │   ├── PostedConfig.ts
│   │   │   │   │   │   │   │   ├── PostedConfigName.ts
│   │   │   │   │   │   │   │   ├── PostedConfigVersion.ts
│   │   │   │   │   │   │   │   └── PostedConfigVersionDescription.ts
│   │   │   │   │   │   │   ├── Client.ts
│   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── customVoices/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── CustomVoicesListCustomVoicesRequest.ts
│   │   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   │   └── PostedCustomVoiceName.ts
│   │   │   │   │   │   │   ├── Client.ts
│   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── prompts/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   │   ├── PostedPrompt.ts
│   │   │   │   │   │   │   │   ├── PostedPromptName.ts
│   │   │   │   │   │   │   │   ├── PostedPromptVersion.ts
│   │   │   │   │   │   │   │   ├── PostedPromptVersionDescription.ts
│   │   │   │   │   │   │   │   ├── PromptsListPromptsRequest.ts
│   │   │   │   │   │   │   │   └── PromptsListPromptVersionsRequest.ts
│   │   │   │   │   │   │   ├── Client.ts
│   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── tools/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   │   ├── PostedUserDefinedTool.ts
│   │   │   │   │   │   │   │   ├── PostedUserDefinedToolName.ts
│   │   │   │   │   │   │   │   ├── PostedUserDefinedToolVersion.ts
│   │   │   │   │   │   │   │   ├── PostedUserDefinedToolVersionDescription.ts
│   │   │   │   │   │   │   │   ├── ToolsListToolsRequest.ts
│   │   │   │   │   │   │   │   └── ToolsListToolVersionsRequest.ts
│   │   │   │   │   │   │   ├── Client.ts
│   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── types/
│   │   │   │   │   ├── AssistantEnd.ts
│   │   │   │   │   ├── AssistantInput.ts
│   │   │   │   │   ├── AssistantMessage.ts
│   │   │   │   │   ├── AudioConfiguration.ts
│   │   │   │   │   ├── AudioInput.ts
│   │   │   │   │   ├── AudioOutput.ts
│   │   │   │   │   ├── BuiltInTool.ts
│   │   │   │   │   ├── BuiltinToolConfig.ts
│   │   │   │   │   ├── ChatMessage.ts
│   │   │   │   │   ├── ChatMessageToolResult.ts
│   │   │   │   │   ├── ChatMetadata.ts
│   │   │   │   │   ├── Context.ts
│   │   │   │   │   ├── ContextType.ts
│   │   │   │   │   ├── EmotionScores.ts
│   │   │   │   │   ├── Encoding.ts
│   │   │   │   │   ├── ErrorLevel.ts
│   │   │   │   │   ├── ErrorResponse.ts
│   │   │   │   │   ├── ExtendedVoiceArgs.ts
│   │   │   │   │   ├── FunctionCallResponseInput.ts
│   │   │   │   │   ├── HttpValidationError.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Inference.ts
│   │   │   │   │   ├── JsonMessage.ts
│   │   │   │   │   ├── MillisecondInterval.ts
│   │   │   │   │   ├── PauseAssistantMessage.ts
│   │   │   │   │   ├── PostedBuiltinTool.ts
│   │   │   │   │   ├── PostedBuiltinToolName.ts
│   │   │   │   │   ├── PostedConfigPromptSpec.ts
│   │   │   │   │   ├── PostedCustomVoice.ts
│   │   │   │   │   ├── PostedCustomVoiceBaseVoice.ts
│   │   │   │   │   ├── PostedCustomVoiceParameters.ts
│   │   │   │   │   ├── PostedEllmModel.ts
│   │   │   │   │   ├── PostedEventMessageSpec.ts
│   │   │   │   │   ├── PostedEventMessageSpecs.ts
│   │   │   │   │   ├── PostedLanguageModel.ts
│   │   │   │   │   ├── PostedLanguageModelModelProvider.ts
│   │   │   │   │   ├── PostedPromptSpec.ts
│   │   │   │   │   ├── PostedTimeoutSpec.ts
│   │   │   │   │   ├── PostedTimeoutSpecs.ts
│   │   │   │   │   ├── PostedTimeoutSpecsInactivity.ts
│   │   │   │   │   ├── PostedTimeoutSpecsMaxDuration.ts
│   │   │   │   │   ├── PostedUserDefinedToolSpec.ts
│   │   │   │   │   ├── PostedVoice.ts
│   │   │   │   │   ├── ProsodyInference.ts
│   │   │   │   │   ├── ResumeAssistantMessage.ts
│   │   │   │   │   ├── ReturnActiveChatCount.ts
│   │   │   │   │   ├── ReturnActiveChatCountPerTag.ts
│   │   │   │   │   ├── ReturnBuiltinTool.ts
│   │   │   │   │   ├── ReturnBuiltinToolToolType.ts
│   │   │   │   │   ├── ReturnChat.ts
│   │   │   │   │   ├── ReturnChatEvent.ts
│   │   │   │   │   ├── ReturnChatEventRole.ts
│   │   │   │   │   ├── ReturnChatEventType.ts
│   │   │   │   │   ├── ReturnChatGroup.ts
│   │   │   │   │   ├── ReturnChatGroupPagedChats.ts
│   │   │   │   │   ├── ReturnChatGroupPagedChatsPaginationDirection.ts
│   │   │   │   │   ├── ReturnChatGroupPagedEvents.ts
│   │   │   │   │   ├── ReturnChatGroupPagedEventsPaginationDirection.ts
│   │   │   │   │   ├── ReturnChatPagedEvents.ts
│   │   │   │   │   ├── ReturnChatPagedEventsPaginationDirection.ts
│   │   │   │   │   ├── ReturnChatPagedEventsStatus.ts
│   │   │   │   │   ├── ReturnChatStatus.ts
│   │   │   │   │   ├── ReturnConfig.ts
│   │   │   │   │   ├── ReturnConfigSpec.ts
│   │   │   │   │   ├── ReturnCustomVoice.ts
│   │   │   │   │   ├── ReturnCustomVoiceBaseVoice.ts
│   │   │   │   │   ├── ReturnCustomVoiceParameters.ts
│   │   │   │   │   ├── ReturnEllmModel.ts
│   │   │   │   │   ├── ReturnEventMessageSpec.ts
│   │   │   │   │   ├── ReturnEventMessageSpecs.ts
│   │   │   │   │   ├── ReturnLanguageModel.ts
│   │   │   │   │   ├── ReturnLanguageModelModelProvider.ts
│   │   │   │   │   ├── ReturnPagedChatGroups.ts
│   │   │   │   │   ├── ReturnPagedChatGroupsPaginationDirection.ts
│   │   │   │   │   ├── ReturnPagedChats.ts
│   │   │   │   │   ├── ReturnPagedChatsPaginationDirection.ts
│   │   │   │   │   ├── ReturnPagedConfigs.ts
│   │   │   │   │   ├── ReturnPagedCustomVoices.ts
│   │   │   │   │   ├── ReturnPagedPrompts.ts
│   │   │   │   │   ├── ReturnPagedUserDefinedTools.ts
│   │   │   │   │   ├── ReturnPrompt.ts
│   │   │   │   │   ├── ReturnPromptVersionType.ts
│   │   │   │   │   ├── ReturnTimeoutSpec.ts
│   │   │   │   │   ├── ReturnTimeoutSpecs.ts
│   │   │   │   │   ├── ReturnUserDefinedTool.ts
│   │   │   │   │   ├── ReturnUserDefinedToolToolType.ts
│   │   │   │   │   ├── ReturnUserDefinedToolVersionType.ts
│   │   │   │   │   ├── ReturnVoice.ts
│   │   │   │   │   ├── Role.ts
│   │   │   │   │   ├── SessionSettings.ts
│   │   │   │   │   ├── TextInput.ts
│   │   │   │   │   ├── Tool.ts
│   │   │   │   │   ├── ToolCallMessage.ts
│   │   │   │   │   ├── ToolErrorMessage.ts
│   │   │   │   │   ├── ToolResponseMessage.ts
│   │   │   │   │   ├── ToolType.ts
│   │   │   │   │   ├── TtsInput.ts
│   │   │   │   │   ├── UserInput.ts
│   │   │   │   │   ├── UserInterruption.ts
│   │   │   │   │   ├── UserMessage.ts
│   │   │   │   │   ├── ValidationError.ts
│   │   │   │   │   ├── ValidationErrorLocItem.ts
│   │   │   │   │   ├── VoiceArgs.ts
│   │   │   │   │   ├── VoiceNameEnum.ts
│   │   │   │   │   └── WebSocketError.ts
│   │   │   │   └── index.ts
│   │   │   ├── expressionMeasurement/
│   │   │   │   ├── client/
│   │   │   │   │   ├── Client.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── resources/
│   │   │   │   │   ├── batch/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── BatchListJobsRequest.ts
│   │   │   │   │   │   │   │   ├── BatchStartInferenceJobFromLocalFileRequest.ts
│   │   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   │   ├── Client.ts
│   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   ├── types/
│   │   │   │   │   │   │   ├── Alternative.ts
│   │   │   │   │   │   │   ├── Bcp47Tag.ts
│   │   │   │   │   │   │   ├── BoundingBox.ts
│   │   │   │   │   │   │   ├── BurstPrediction.ts
│   │   │   │   │   │   │   ├── Classification.ts
│   │   │   │   │   │   │   ├── CompletedEmbeddingGeneration.ts
│   │   │   │   │   │   │   ├── CompletedInference.ts
│   │   │   │   │   │   │   ├── CompletedState.ts
│   │   │   │   │   │   │   ├── CompletedTlInference.ts
│   │   │   │   │   │   │   ├── CompletedTraining.ts
│   │   │   │   │   │   │   ├── CustomModel.ts
│   │   │   │   │   │   │   ├── CustomModelId.ts
│   │   │   │   │   │   │   ├── CustomModelPrediction.ts
│   │   │   │   │   │   │   ├── CustomModelRequest.ts
│   │   │   │   │   │   │   ├── CustomModelsInferenceJob.ts
│   │   │   │   │   │   │   ├── CustomModelsTrainingJob.ts
│   │   │   │   │   │   │   ├── CustomModelVersionId.ts
│   │   │   │   │   │   │   ├── Dataset.ts
│   │   │   │   │   │   │   ├── DatasetId.ts
│   │   │   │   │   │   │   ├── DatasetVersionId.ts
│   │   │   │   │   │   │   ├── DescriptionsScore.ts
│   │   │   │   │   │   │   ├── Direction.ts
│   │   │   │   │   │   │   ├── EmbeddingGenerationBaseRequest.ts
│   │   │   │   │   │   │   ├── EmbeddingGenerationJob.ts
│   │   │   │   │   │   │   ├── EmotionScore.ts
│   │   │   │   │   │   │   ├── Error_.ts
│   │   │   │   │   │   │   ├── EvaluationArgs.ts
│   │   │   │   │   │   │   ├── Face.ts
│   │   │   │   │   │   │   ├── FacemeshPrediction.ts
│   │   │   │   │   │   │   ├── FacePrediction.ts
│   │   │   │   │   │   │   ├── FacsScore.ts
│   │   │   │   │   │   │   ├── Failed.ts
│   │   │   │   │   │   │   ├── FailedState.ts
│   │   │   │   │   │   │   ├── File_.ts
│   │   │   │   │   │   │   ├── Granularity.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsBurstPrediction.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsFacemeshPrediction.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsFacePrediction.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsLanguagePrediction.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsNerPrediction.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsProsodyPrediction.ts
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   ├── InferenceBaseRequest.ts
│   │   │   │   │   │   │   ├── InferenceJob.ts
│   │   │   │   │   │   │   ├── InferencePrediction.ts
│   │   │   │   │   │   │   ├── InferenceRequest.ts
│   │   │   │   │   │   │   ├── InferenceResults.ts
│   │   │   │   │   │   │   ├── InferenceSourcePredictResult.ts
│   │   │   │   │   │   │   ├── InProgress.ts
│   │   │   │   │   │   │   ├── InProgressState.ts
│   │   │   │   │   │   │   ├── JobEmbeddingGeneration.ts
│   │   │   │   │   │   │   ├── JobId.ts
│   │   │   │   │   │   │   ├── JobInference.ts
│   │   │   │   │   │   │   ├── JobTlInference.ts
│   │   │   │   │   │   │   ├── JobTraining.ts
│   │   │   │   │   │   │   ├── Language.ts
│   │   │   │   │   │   │   ├── LanguagePrediction.ts
│   │   │   │   │   │   │   ├── Models.ts
│   │   │   │   │   │   │   ├── ModelsPredictions.ts
│   │   │   │   │   │   │   ├── Ner.ts
│   │   │   │   │   │   │   ├── NerPrediction.ts
│   │   │   │   │   │   │   ├── Null.ts
│   │   │   │   │   │   │   ├── PositionInterval.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalNullBurstPrediction.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalNullFacemeshPrediction.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalNullFacePrediction.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalTranscriptionMetadataLanguagePrediction.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalTranscriptionMetadataNerPrediction.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalTranscriptionMetadataProsodyPrediction.ts
│   │   │   │   │   │   │   ├── Prosody.ts
│   │   │   │   │   │   │   ├── ProsodyPrediction.ts
│   │   │   │   │   │   │   ├── Queued.ts
│   │   │   │   │   │   │   ├── QueuedState.ts
│   │   │   │   │   │   │   ├── RegistryFileDetail.ts
│   │   │   │   │   │   │   ├── Regression.ts
│   │   │   │   │   │   │   ├── SentimentScore.ts
│   │   │   │   │   │   │   ├── SortBy.ts
│   │   │   │   │   │   │   ├── Source.ts
│   │   │   │   │   │   │   ├── SourceFile.ts
│   │   │   │   │   │   │   ├── SourceTextSource.ts
│   │   │   │   │   │   │   ├── SourceUrl.ts
│   │   │   │   │   │   │   ├── StateEmbeddingGeneration.ts
│   │   │   │   │   │   │   ├── StateEmbeddingGenerationCompletedEmbeddingGeneration.ts
│   │   │   │   │   │   │   ├── StateEmbeddingGenerationFailed.ts
│   │   │   │   │   │   │   ├── StateEmbeddingGenerationInProgress.ts
│   │   │   │   │   │   │   ├── StateEmbeddingGenerationQueued.ts
│   │   │   │   │   │   │   ├── StateInference.ts
│   │   │   │   │   │   │   ├── StateTlInference.ts
│   │   │   │   │   │   │   ├── StateTlInferenceCompletedTlInference.ts
│   │   │   │   │   │   │   ├── StateTlInferenceFailed.ts
│   │   │   │   │   │   │   ├── StateTlInferenceInProgress.ts
│   │   │   │   │   │   │   ├── StateTlInferenceQueued.ts
│   │   │   │   │   │   │   ├── StateTraining.ts
│   │   │   │   │   │   │   ├── StateTrainingCompletedTraining.ts
│   │   │   │   │   │   │   ├── StateTrainingFailed.ts
│   │   │   │   │   │   │   ├── StateTrainingInProgress.ts
│   │   │   │   │   │   │   ├── StateTrainingQueued.ts
│   │   │   │   │   │   │   ├── Status.ts
│   │   │   │   │   │   │   ├── Tag.ts
│   │   │   │   │   │   │   ├── Target.ts
│   │   │   │   │   │   │   ├── Task.ts
│   │   │   │   │   │   │   ├── TaskClassification.ts
│   │   │   │   │   │   │   ├── TaskRegression.ts
│   │   │   │   │   │   │   ├── TextSource.ts
│   │   │   │   │   │   │   ├── TimeInterval.ts
│   │   │   │   │   │   │   ├── TlInferenceBaseRequest.ts
│   │   │   │   │   │   │   ├── TlInferencePrediction.ts
│   │   │   │   │   │   │   ├── TlInferenceResults.ts
│   │   │   │   │   │   │   ├── TlInferenceSourcePredictResult.ts
│   │   │   │   │   │   │   ├── ToxicityScore.ts
│   │   │   │   │   │   │   ├── TrainingBaseRequest.ts
│   │   │   │   │   │   │   ├── TrainingCustomModel.ts
│   │   │   │   │   │   │   ├── Transcription.ts
│   │   │   │   │   │   │   ├── TranscriptionMetadata.ts
│   │   │   │   │   │   │   ├── Type.ts
│   │   │   │   │   │   │   ├── Unconfigurable.ts
│   │   │   │   │   │   │   ├── UnionJob.ts
│   │   │   │   │   │   │   ├── UnionPredictResult.ts
│   │   │   │   │   │   │   ├── Url.ts
│   │   │   │   │   │   │   ├── ValidationArgs.ts
│   │   │   │   │   │   │   ├── When.ts
│   │   │   │   │   │   │   └── Window.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── stream/
│   │   │   │   │   │   ├── types/
│   │   │   │   │   │   │   ├── Config.ts
│   │   │   │   │   │   │   ├── EmotionEmbedding.ts
│   │   │   │   │   │   │   ├── EmotionEmbeddingItem.ts
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   ├── JobDetails.ts
│   │   │   │   │   │   │   ├── Sentiment.ts
│   │   │   │   │   │   │   ├── SentimentItem.ts
│   │   │   │   │   │   │   ├── StreamBoundingBox.ts
│   │   │   │   │   │   │   ├── StreamErrorMessage.ts
│   │   │   │   │   │   │   ├── StreamFace.ts
│   │   │   │   │   │   │   ├── StreamLanguage.ts
│   │   │   │   │   │   │   ├── StreamModelPredictions.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsBurst.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsBurstPredictionsItem.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsFace.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsFacemesh.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsFacemeshPredictionsItem.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsFacePredictionsItem.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsJobDetails.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsLanguage.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsLanguagePredictionsItem.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsProsody.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsProsodyPredictionsItem.ts
│   │   │   │   │   │   │   ├── StreamModelsEndpointPayload.ts
│   │   │   │   │   │   │   ├── StreamWarningMessage.ts
│   │   │   │   │   │   │   ├── StreamWarningMessageJobDetails.ts
│   │   │   │   │   │   │   ├── SubscribeEvent.ts
│   │   │   │   │   │   │   ├── TextPosition.ts
│   │   │   │   │   │   │   ├── TimeRange.ts
│   │   │   │   │   │   │   ├── Toxicity.ts
│   │   │   │   │   │   │   └── ToxicityItem.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── core/
│   │   ├── fetcher/
│   │   │   ├── stream-wrappers/
│   │   │   │   ├── chooseStreamWrapper.ts
│   │   │   │   ├── Node18UniversalStreamWrapper.ts
│   │   │   │   ├── NodePre18StreamWrapper.ts
│   │   │   │   └── UndiciStreamWrapper.ts
│   │   │   ├── APIResponse.ts
│   │   │   ├── createRequestUrl.ts
│   │   │   ├── Fetcher.ts
│   │   │   ├── getFetchFn.ts
│   │   │   ├── getHeader.ts
│   │   │   ├── getRequestBody.ts
│   │   │   ├── getResponseBody.ts
│   │   │   ├── index.ts
│   │   │   ├── makeRequest.ts
│   │   │   ├── requestWithRetries.ts
│   │   │   ├── signals.ts
│   │   │   └── Supplier.ts
│   │   ├── form-data-utils/
│   │   │   ├── FormDataWrapper.ts
│   │   │   └── index.ts
│   │   ├── pagination/
│   │   │   ├── index.ts
│   │   │   ├── Page.ts
│   │   │   └── Pageable.ts
│   │   ├── runtime/
│   │   │   ├── index.ts
│   │   │   └── runtime.ts
│   │   ├── schemas/
│   │   │   ├── builders/
│   │   │   │   ├── date/
│   │   │   │   │   ├── date.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── enum/
│   │   │   │   │   ├── enum.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── lazy/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── lazy.ts
│   │   │   │   │   └── lazyObject.ts
│   │   │   │   ├── list/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── list.ts
│   │   │   │   ├── literals/
│   │   │   │   │   ├── booleanLiteral.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── stringLiteral.ts
│   │   │   │   ├── object/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── object.ts
│   │   │   │   │   ├── objectWithoutOptionalProperties.ts
│   │   │   │   │   ├── property.ts
│   │   │   │   │   └── types.ts
│   │   │   │   ├── object-like/
│   │   │   │   │   ├── getObjectLikeUtils.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── types.ts
│   │   │   │   ├── primitives/
│   │   │   │   │   ├── any.ts
│   │   │   │   │   ├── boolean.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── number.ts
│   │   │   │   │   ├── string.ts
│   │   │   │   │   └── unknown.ts
│   │   │   │   ├── record/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── record.ts
│   │   │   │   │   └── types.ts
│   │   │   │   ├── schema-utils/
│   │   │   │   │   ├── getSchemaUtils.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── JsonError.ts
│   │   │   │   │   ├── ParseError.ts
│   │   │   │   │   └── stringifyValidationErrors.ts
│   │   │   │   ├── set/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── set.ts
│   │   │   │   ├── undiscriminated-union/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── types.ts
│   │   │   │   │   └── undiscriminatedUnion.ts
│   │   │   │   ├── union/
│   │   │   │   │   ├── discriminant.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── types.ts
│   │   │   │   │   └── union.ts
│   │   │   │   └── index.ts
│   │   │   ├── utils/
│   │   │   │   ├── addQuestionMarksToNullableProperties.ts
│   │   │   │   ├── createIdentitySchemaCreator.ts
│   │   │   │   ├── entries.ts
│   │   │   │   ├── filterObject.ts
│   │   │   │   ├── getErrorMessageForIncorrectType.ts
│   │   │   │   ├── isPlainObject.ts
│   │   │   │   ├── keys.ts
│   │   │   │   ├── MaybePromise.ts
│   │   │   │   ├── maybeSkipValidation.ts
│   │   │   │   └── partition.ts
│   │   │   ├── index.ts
│   │   │   └── Schema.ts
│   │   ├── utils/
│   │   │   ├── index.ts
│   │   │   └── setObjectProperty.ts
│   │   ├── websocket/
│   │   │   ├── events.ts
│   │   │   ├── index.ts
│   │   │   └── ws.ts
│   │   └── index.ts
│   ├── errors/
│   │   ├── HumeError.ts
│   │   ├── HumeTimeoutError.ts
│   │   └── index.ts
│   ├── serialization/
│   │   ├── resources/
│   │   │   ├── empathicVoice/
│   │   │   │   ├── resources/
│   │   │   │   │   ├── chat/
│   │   │   │   │   │   ├── types/
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   ├── PublishEvent.ts
│   │   │   │   │   │   │   └── SubscribeEvent.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── configs/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   │   ├── PostedConfig.ts
│   │   │   │   │   │   │   │   ├── PostedConfigName.ts
│   │   │   │   │   │   │   │   ├── PostedConfigVersion.ts
│   │   │   │   │   │   │   │   └── PostedConfigVersionDescription.ts
│   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── customVoices/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   │   └── PostedCustomVoiceName.ts
│   │   │   │   │   │   │   └── index.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── prompts/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   │   ├── PostedPrompt.ts
│   │   │   │   │   │   │   │   ├── PostedPromptName.ts
│   │   │   │   │   │   │   │   ├── PostedPromptVersion.ts
│   │   │   │   │   │   │   │   └── PostedPromptVersionDescription.ts
│   │   │   │   │   │   │   ├── createPrompt.ts
│   │   │   │   │   │   │   ├── createPromptVerison.ts
│   │   │   │   │   │   │   ├── getPromptVersion.ts
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   └── updatePromptDescription.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── tools/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── requests/
│   │   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   │   ├── PostedUserDefinedTool.ts
│   │   │   │   │   │   │   │   ├── PostedUserDefinedToolName.ts
│   │   │   │   │   │   │   │   ├── PostedUserDefinedToolVersion.ts
│   │   │   │   │   │   │   │   └── PostedUserDefinedToolVersionDescription.ts
│   │   │   │   │   │   │   ├── createTool.ts
│   │   │   │   │   │   │   ├── createToolVersion.ts
│   │   │   │   │   │   │   ├── getToolVersion.ts
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   └── updateToolDescription.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── types/
│   │   │   │   │   ├── AssistantEnd.ts
│   │   │   │   │   ├── AssistantInput.ts
│   │   │   │   │   ├── AssistantMessage.ts
│   │   │   │   │   ├── AudioConfiguration.ts
│   │   │   │   │   ├── AudioInput.ts
│   │   │   │   │   ├── AudioOutput.ts
│   │   │   │   │   ├── BuiltInTool.ts
│   │   │   │   │   ├── BuiltinToolConfig.ts
│   │   │   │   │   ├── ChatMessage.ts
│   │   │   │   │   ├── ChatMessageToolResult.ts
│   │   │   │   │   ├── ChatMetadata.ts
│   │   │   │   │   ├── Context.ts
│   │   │   │   │   ├── ContextType.ts
│   │   │   │   │   ├── EmotionScores.ts
│   │   │   │   │   ├── Encoding.ts
│   │   │   │   │   ├── ErrorLevel.ts
│   │   │   │   │   ├── ErrorResponse.ts
│   │   │   │   │   ├── ExtendedVoiceArgs.ts
│   │   │   │   │   ├── FunctionCallResponseInput.ts
│   │   │   │   │   ├── HttpValidationError.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Inference.ts
│   │   │   │   │   ├── JsonMessage.ts
│   │   │   │   │   ├── MillisecondInterval.ts
│   │   │   │   │   ├── PauseAssistantMessage.ts
│   │   │   │   │   ├── PostedBuiltinTool.ts
│   │   │   │   │   ├── PostedBuiltinToolName.ts
│   │   │   │   │   ├── PostedConfigPromptSpec.ts
│   │   │   │   │   ├── PostedCustomVoice.ts
│   │   │   │   │   ├── PostedCustomVoiceBaseVoice.ts
│   │   │   │   │   ├── PostedCustomVoiceParameters.ts
│   │   │   │   │   ├── PostedEllmModel.ts
│   │   │   │   │   ├── PostedEventMessageSpec.ts
│   │   │   │   │   ├── PostedEventMessageSpecs.ts
│   │   │   │   │   ├── PostedLanguageModel.ts
│   │   │   │   │   ├── PostedLanguageModelModelProvider.ts
│   │   │   │   │   ├── PostedPromptSpec.ts
│   │   │   │   │   ├── PostedTimeoutSpec.ts
│   │   │   │   │   ├── PostedTimeoutSpecs.ts
│   │   │   │   │   ├── PostedTimeoutSpecsInactivity.ts
│   │   │   │   │   ├── PostedTimeoutSpecsMaxDuration.ts
│   │   │   │   │   ├── PostedUserDefinedToolSpec.ts
│   │   │   │   │   ├── PostedVoice.ts
│   │   │   │   │   ├── ProsodyInference.ts
│   │   │   │   │   ├── ResumeAssistantMessage.ts
│   │   │   │   │   ├── ReturnActiveChatCount.ts
│   │   │   │   │   ├── ReturnActiveChatCountPerTag.ts
│   │   │   │   │   ├── ReturnBuiltinTool.ts
│   │   │   │   │   ├── ReturnBuiltinToolToolType.ts
│   │   │   │   │   ├── ReturnChat.ts
│   │   │   │   │   ├── ReturnChatEvent.ts
│   │   │   │   │   ├── ReturnChatEventRole.ts
│   │   │   │   │   ├── ReturnChatEventType.ts
│   │   │   │   │   ├── ReturnChatGroup.ts
│   │   │   │   │   ├── ReturnChatGroupPagedChats.ts
│   │   │   │   │   ├── ReturnChatGroupPagedChatsPaginationDirection.ts
│   │   │   │   │   ├── ReturnChatGroupPagedEvents.ts
│   │   │   │   │   ├── ReturnChatGroupPagedEventsPaginationDirection.ts
│   │   │   │   │   ├── ReturnChatPagedEvents.ts
│   │   │   │   │   ├── ReturnChatPagedEventsPaginationDirection.ts
│   │   │   │   │   ├── ReturnChatPagedEventsStatus.ts
│   │   │   │   │   ├── ReturnChatStatus.ts
│   │   │   │   │   ├── ReturnConfig.ts
│   │   │   │   │   ├── ReturnConfigSpec.ts
│   │   │   │   │   ├── ReturnCustomVoice.ts
│   │   │   │   │   ├── ReturnCustomVoiceBaseVoice.ts
│   │   │   │   │   ├── ReturnCustomVoiceParameters.ts
│   │   │   │   │   ├── ReturnEllmModel.ts
│   │   │   │   │   ├── ReturnEventMessageSpec.ts
│   │   │   │   │   ├── ReturnEventMessageSpecs.ts
│   │   │   │   │   ├── ReturnLanguageModel.ts
│   │   │   │   │   ├── ReturnLanguageModelModelProvider.ts
│   │   │   │   │   ├── ReturnPagedChatGroups.ts
│   │   │   │   │   ├── ReturnPagedChatGroupsPaginationDirection.ts
│   │   │   │   │   ├── ReturnPagedChats.ts
│   │   │   │   │   ├── ReturnPagedChatsPaginationDirection.ts
│   │   │   │   │   ├── ReturnPagedConfigs.ts
│   │   │   │   │   ├── ReturnPagedCustomVoices.ts
│   │   │   │   │   ├── ReturnPagedPrompts.ts
│   │   │   │   │   ├── ReturnPagedUserDefinedTools.ts
│   │   │   │   │   ├── ReturnPrompt.ts
│   │   │   │   │   ├── ReturnPromptVersionType.ts
│   │   │   │   │   ├── ReturnTimeoutSpec.ts
│   │   │   │   │   ├── ReturnTimeoutSpecs.ts
│   │   │   │   │   ├── ReturnUserDefinedTool.ts
│   │   │   │   │   ├── ReturnUserDefinedToolToolType.ts
│   │   │   │   │   ├── ReturnUserDefinedToolVersionType.ts
│   │   │   │   │   ├── ReturnVoice.ts
│   │   │   │   │   ├── Role.ts
│   │   │   │   │   ├── SessionSettings.ts
│   │   │   │   │   ├── TextInput.ts
│   │   │   │   │   ├── Tool.ts
│   │   │   │   │   ├── ToolCallMessage.ts
│   │   │   │   │   ├── ToolErrorMessage.ts
│   │   │   │   │   ├── ToolResponseMessage.ts
│   │   │   │   │   ├── ToolType.ts
│   │   │   │   │   ├── TtsInput.ts
│   │   │   │   │   ├── UserInput.ts
│   │   │   │   │   ├── UserInterruption.ts
│   │   │   │   │   ├── UserMessage.ts
│   │   │   │   │   ├── ValidationError.ts
│   │   │   │   │   ├── ValidationErrorLocItem.ts
│   │   │   │   │   ├── VoiceArgs.ts
│   │   │   │   │   ├── VoiceNameEnum.ts
│   │   │   │   │   └── WebSocketError.ts
│   │   │   │   └── index.ts
│   │   │   ├── expressionMeasurement/
│   │   │   │   ├── resources/
│   │   │   │   │   ├── batch/
│   │   │   │   │   │   ├── client/
│   │   │   │   │   │   │   ├── getJobPredictions.ts
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   └── listJobs.ts
│   │   │   │   │   │   ├── types/
│   │   │   │   │   │   │   ├── Alternative.ts
│   │   │   │   │   │   │   ├── Bcp47Tag.ts
│   │   │   │   │   │   │   ├── BoundingBox.ts
│   │   │   │   │   │   │   ├── BurstPrediction.ts
│   │   │   │   │   │   │   ├── Classification.ts
│   │   │   │   │   │   │   ├── CompletedEmbeddingGeneration.ts
│   │   │   │   │   │   │   ├── CompletedInference.ts
│   │   │   │   │   │   │   ├── CompletedState.ts
│   │   │   │   │   │   │   ├── CompletedTlInference.ts
│   │   │   │   │   │   │   ├── CompletedTraining.ts
│   │   │   │   │   │   │   ├── CustomModel.ts
│   │   │   │   │   │   │   ├── CustomModelId.ts
│   │   │   │   │   │   │   ├── CustomModelPrediction.ts
│   │   │   │   │   │   │   ├── CustomModelRequest.ts
│   │   │   │   │   │   │   ├── CustomModelsInferenceJob.ts
│   │   │   │   │   │   │   ├── CustomModelsTrainingJob.ts
│   │   │   │   │   │   │   ├── CustomModelVersionId.ts
│   │   │   │   │   │   │   ├── Dataset.ts
│   │   │   │   │   │   │   ├── DatasetId.ts
│   │   │   │   │   │   │   ├── DatasetVersionId.ts
│   │   │   │   │   │   │   ├── DescriptionsScore.ts
│   │   │   │   │   │   │   ├── Direction.ts
│   │   │   │   │   │   │   ├── EmbeddingGenerationBaseRequest.ts
│   │   │   │   │   │   │   ├── EmbeddingGenerationJob.ts
│   │   │   │   │   │   │   ├── EmotionScore.ts
│   │   │   │   │   │   │   ├── Error_.ts
│   │   │   │   │   │   │   ├── EvaluationArgs.ts
│   │   │   │   │   │   │   ├── Face.ts
│   │   │   │   │   │   │   ├── FacemeshPrediction.ts
│   │   │   │   │   │   │   ├── FacePrediction.ts
│   │   │   │   │   │   │   ├── FacsScore.ts
│   │   │   │   │   │   │   ├── Failed.ts
│   │   │   │   │   │   │   ├── FailedState.ts
│   │   │   │   │   │   │   ├── File_.ts
│   │   │   │   │   │   │   ├── Granularity.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsBurstPrediction.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsFacemeshPrediction.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsFacePrediction.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsLanguagePrediction.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsNerPrediction.ts
│   │   │   │   │   │   │   ├── GroupedPredictionsProsodyPrediction.ts
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   ├── InferenceBaseRequest.ts
│   │   │   │   │   │   │   ├── InferenceJob.ts
│   │   │   │   │   │   │   ├── InferencePrediction.ts
│   │   │   │   │   │   │   ├── InferenceRequest.ts
│   │   │   │   │   │   │   ├── InferenceResults.ts
│   │   │   │   │   │   │   ├── InferenceSourcePredictResult.ts
│   │   │   │   │   │   │   ├── InProgress.ts
│   │   │   │   │   │   │   ├── InProgressState.ts
│   │   │   │   │   │   │   ├── JobEmbeddingGeneration.ts
│   │   │   │   │   │   │   ├── JobId.ts
│   │   │   │   │   │   │   ├── JobInference.ts
│   │   │   │   │   │   │   ├── JobTlInference.ts
│   │   │   │   │   │   │   ├── JobTraining.ts
│   │   │   │   │   │   │   ├── Language.ts
│   │   │   │   │   │   │   ├── LanguagePrediction.ts
│   │   │   │   │   │   │   ├── Models.ts
│   │   │   │   │   │   │   ├── ModelsPredictions.ts
│   │   │   │   │   │   │   ├── Ner.ts
│   │   │   │   │   │   │   ├── NerPrediction.ts
│   │   │   │   │   │   │   ├── Null.ts
│   │   │   │   │   │   │   ├── PositionInterval.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalNullBurstPrediction.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalNullFacemeshPrediction.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalNullFacePrediction.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalTranscriptionMetadataLanguagePrediction.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalTranscriptionMetadataNerPrediction.ts
│   │   │   │   │   │   │   ├── PredictionsOptionalTranscriptionMetadataProsodyPrediction.ts
│   │   │   │   │   │   │   ├── Prosody.ts
│   │   │   │   │   │   │   ├── ProsodyPrediction.ts
│   │   │   │   │   │   │   ├── Queued.ts
│   │   │   │   │   │   │   ├── QueuedState.ts
│   │   │   │   │   │   │   ├── RegistryFileDetail.ts
│   │   │   │   │   │   │   ├── Regression.ts
│   │   │   │   │   │   │   ├── SentimentScore.ts
│   │   │   │   │   │   │   ├── SortBy.ts
│   │   │   │   │   │   │   ├── Source.ts
│   │   │   │   │   │   │   ├── SourceFile.ts
│   │   │   │   │   │   │   ├── SourceTextSource.ts
│   │   │   │   │   │   │   ├── SourceUrl.ts
│   │   │   │   │   │   │   ├── StateEmbeddingGeneration.ts
│   │   │   │   │   │   │   ├── StateEmbeddingGenerationCompletedEmbeddingGeneration.ts
│   │   │   │   │   │   │   ├── StateEmbeddingGenerationFailed.ts
│   │   │   │   │   │   │   ├── StateEmbeddingGenerationInProgress.ts
│   │   │   │   │   │   │   ├── StateEmbeddingGenerationQueued.ts
│   │   │   │   │   │   │   ├── StateInference.ts
│   │   │   │   │   │   │   ├── StateTlInference.ts
│   │   │   │   │   │   │   ├── StateTlInferenceCompletedTlInference.ts
│   │   │   │   │   │   │   ├── StateTlInferenceFailed.ts
│   │   │   │   │   │   │   ├── StateTlInferenceInProgress.ts
│   │   │   │   │   │   │   ├── StateTlInferenceQueued.ts
│   │   │   │   │   │   │   ├── StateTraining.ts
│   │   │   │   │   │   │   ├── StateTrainingCompletedTraining.ts
│   │   │   │   │   │   │   ├── StateTrainingFailed.ts
│   │   │   │   │   │   │   ├── StateTrainingInProgress.ts
│   │   │   │   │   │   │   ├── StateTrainingQueued.ts
│   │   │   │   │   │   │   ├── Status.ts
│   │   │   │   │   │   │   ├── Tag.ts
│   │   │   │   │   │   │   ├── Target.ts
│   │   │   │   │   │   │   ├── Task.ts
│   │   │   │   │   │   │   ├── TaskClassification.ts
│   │   │   │   │   │   │   ├── TaskRegression.ts
│   │   │   │   │   │   │   ├── TextSource.ts
│   │   │   │   │   │   │   ├── TimeInterval.ts
│   │   │   │   │   │   │   ├── TlInferenceBaseRequest.ts
│   │   │   │   │   │   │   ├── TlInferencePrediction.ts
│   │   │   │   │   │   │   ├── TlInferenceResults.ts
│   │   │   │   │   │   │   ├── TlInferenceSourcePredictResult.ts
│   │   │   │   │   │   │   ├── ToxicityScore.ts
│   │   │   │   │   │   │   ├── TrainingBaseRequest.ts
│   │   │   │   │   │   │   ├── TrainingCustomModel.ts
│   │   │   │   │   │   │   ├── Transcription.ts
│   │   │   │   │   │   │   ├── TranscriptionMetadata.ts
│   │   │   │   │   │   │   ├── Type.ts
│   │   │   │   │   │   │   ├── Unconfigurable.ts
│   │   │   │   │   │   │   ├── UnionJob.ts
│   │   │   │   │   │   │   ├── UnionPredictResult.ts
│   │   │   │   │   │   │   ├── Url.ts
│   │   │   │   │   │   │   ├── ValidationArgs.ts
│   │   │   │   │   │   │   ├── When.ts
│   │   │   │   │   │   │   └── Window.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── stream/
│   │   │   │   │   │   ├── types/
│   │   │   │   │   │   │   ├── Config.ts
│   │   │   │   │   │   │   ├── EmotionEmbedding.ts
│   │   │   │   │   │   │   ├── EmotionEmbeddingItem.ts
│   │   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   │   ├── JobDetails.ts
│   │   │   │   │   │   │   ├── Sentiment.ts
│   │   │   │   │   │   │   ├── SentimentItem.ts
│   │   │   │   │   │   │   ├── StreamBoundingBox.ts
│   │   │   │   │   │   │   ├── StreamErrorMessage.ts
│   │   │   │   │   │   │   ├── StreamFace.ts
│   │   │   │   │   │   │   ├── StreamLanguage.ts
│   │   │   │   │   │   │   ├── StreamModelPredictions.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsBurst.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsBurstPredictionsItem.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsFace.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsFacemesh.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsFacemeshPredictionsItem.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsFacePredictionsItem.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsJobDetails.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsLanguage.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsLanguagePredictionsItem.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsProsody.ts
│   │   │   │   │   │   │   ├── StreamModelPredictionsProsodyPredictionsItem.ts
│   │   │   │   │   │   │   ├── StreamModelsEndpointPayload.ts
│   │   │   │   │   │   │   ├── StreamWarningMessage.ts
│   │   │   │   │   │   │   ├── StreamWarningMessageJobDetails.ts
│   │   │   │   │   │   │   ├── SubscribeEvent.ts
│   │   │   │   │   │   │   ├── TextPosition.ts
│   │   │   │   │   │   │   ├── TimeRange.ts
│   │   │   │   │   │   │   ├── Toxicity.ts
│   │   │   │   │   │   │   └── ToxicityItem.ts
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── wrapper/
│   │   ├── expressionMeasurement/
│   │   │   ├── batch/
│   │   │   │   ├── BatchClient.ts
│   │   │   │   └── Job.ts
│   │   │   ├── streaming/
│   │   │   │   ├── StreamingClient.ts
│   │   │   │   └── StreamSocket.ts
│   │   │   └── ExpressionMeasurementClient.ts
│   │   ├── base64Decode.ts
│   │   ├── base64Encode.ts
│   │   ├── checkForAudioTracks.ts
│   │   ├── convertBase64ToBlob.ts
│   │   ├── convertBlobToBase64.ts
│   │   ├── ensureSingleValidAudioTrack.ts
│   │   ├── fetchAccessToken.ts
│   │   ├── getAudioStream.ts
│   │   ├── getBrowserSupportedMimeType.ts
│   │   ├── HumeClient.ts
│   │   └── index.ts
│   ├── Client.ts
│   ├── environments.ts
│   ├── index.ts
│   └── version.ts
├── tests/
│   ├── empathicVoice/
│   │   └── chat.test.ts
│   ├── expressionMeasurement/
│   │   ├── batch.test.ts
│   │   └── streaming.test.ts
│   ├── unit/
│   │   ├── fetcher/
│   │   │   ├── stream-wrappers/
│   │   │   │   ├── chooseStreamWrapper.test.ts
│   │   │   │   ├── Node18UniversalStreamWrapper.test.ts
│   │   │   │   ├── NodePre18StreamWrapper.test.ts
│   │   │   │   ├── UndiciStreamWrapper.test.ts
│   │   │   │   └── webpack.test.ts
│   │   │   ├── createRequestUrl.test.ts
│   │   │   ├── Fetcher.test.ts
│   │   │   ├── getFetchFn.test.ts
│   │   │   ├── getRequestBody.test.ts
│   │   │   ├── getResponseBody.test.ts
│   │   │   ├── makeRequest.test.ts
│   │   │   ├── requestWithRetries.test.ts
│   │   │   └── signals.test.ts
│   │   ├── form-data-utils/
│   │   │   └── formDataWrapper.test.ts
│   │   └── zurg/
│   │       ├── date/
│   │       │   └── date.test.ts
│   │       ├── enum/
│   │       │   └── enum.test.ts
│   │       ├── lazy/
│   │       │   ├── recursive/
│   │       │   │   ├── a.ts
│   │       │   │   └── b.ts
│   │       │   ├── lazy.test.ts
│   │       │   └── lazyObject.test.ts
│   │       ├── list/
│   │       │   └── list.test.ts
│   │       ├── literals/
│   │       │   └── stringLiteral.test.ts
│   │       ├── object/
│   │       │   ├── extend.test.ts
│   │       │   ├── object.test.ts
│   │       │   └── objectWithoutOptionalProperties.test.ts
│   │       ├── object-like/
│   │       │   └── withParsedProperties.test.ts
│   │       ├── primitives/
│   │       │   ├── any.test.ts
│   │       │   ├── boolean.test.ts
│   │       │   ├── number.test.ts
│   │       │   ├── string.test.ts
│   │       │   └── unknown.test.ts
│   │       ├── record/
│   │       │   └── record.test.ts
│   │       ├── schema-utils/
│   │       │   └── getSchemaUtils.test.ts
│   │       ├── set/
│   │       │   └── set.test.ts
│   │       ├── undiscriminated-union/
│   │       │   └── undiscriminatedUnion.test.ts
│   │       ├── union/
│   │       │   └── union.test.ts
│   │       ├── utils/
│   │       │   ├── itSchema.ts
│   │       │   └── itValidate.ts
│   │       ├── schema.test.ts
│   │       └── skipValidation.test.ts
│   └── custom.test.ts
├── CITATIONS.md
├── CONTRIBUTING.md
├── jest.config.js
├── package.json
├── README.md
├── reference.md
├── tsconfig.dev.json
├── tsconfig.json
```

# CITATIONS.md

<markdown>
\# Citations

To cite Hume's expressive communication platform, please reference one or more of the papers relevant to your application.

| Publication                                                                                                                                                                          | Year | Modality |   BibTeX    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--: | :------: | :---------: |
| [Self-report captures 27 distinct categories of emotion bridged by continuous gradients](https://doi.org/10.1073/pnas.1702247114)                                                    | 2017 |  multi   | [Cite](#1)  |
| [Mapping the Passions: Toward a High-Dimensional Taxonomy of Emotional Experience and Expression](https://doi.org/10.1177/1529100619850176)                                          | 2019 |  multi   | [Cite](#2)  |
| [The primacy of categories in the recognition of 12 emotions in speech prosody across two cultures](https://doi.org/10.1038/s41562-019-0533-6)                                       | 2019 |  voice   | [Cite](#3)  |
| [Mapping 24 emotions conveyed by brief human vocalization](https://doi.org/10.1037/amp0000399)                                                                                       | 2019 |  voice   | [Cite](#4)  |
| [Emotional expression: Advances in basic emotion theory](https://doi.org/10.1007%2Fs10919-019-00293-3)                                                                               | 2019 |  multi   | [Cite](#5)  |
| [What the face displays: Mapping 28 emotions conveyed by naturalistic expression](https://doi.org/10.1037/amp0000488)                                                                | 2020 |   face   | [Cite](#6)  |
| [The neural representation of visually evoked emotion is high-dimensional, categorical, and distributed across transmodal brain regions](https://doi.org/10.1016/j.isci.2020.101060) | 2020 |  multi   | [Cite](#7)  |
| [What music makes us feel: At least 13 dimensions organize subjective experiences associated with music across different cultures](https://doi.org/10.1073/pnas.1910704117)          | 2020 |  music   | [Cite](#8)  |
| [GoEmotions: A Dataset of Fine-Grained Emotions](https://doi.org/10.18653/v1/2020.acl-main.372)                                                                                      | 2020 |   text   | [Cite](#9)  |
| [Universal facial expressions uncovered in art of the ancient Americas: A computational approach](https://doi.org/10.1126/sciadv.abb1005)                                            | 2020 |   face   | [Cite](#10) |
| [Sixteen facial expressions occur in similar contexts worldwide](https://doi.org/10.1038/s41586-020-3037-7)                                                                          | 2021 |   face   | [Cite](#11) |
| [The MuSe 2022 Multimodal Sentiment Analysis Challenge: Humor, Emotional Reactions, and Stress](https://doi.org/10.48550/arXiv.2207.05691)                                           | 2022 |  multi   | [Cite](#12) |
| [The ACII 2022 Affective Vocal Bursts Workshop & Competition: Understanding a critically understudied modality of emotional expression](https://doi.org/10.48550/arXiv.2207.03572)   | 2022 |  voice   | [Cite](#13) |
| [The ICML 2022 Expressive Vocalizations Workshop and Competition: Recognizing, Generating, and Personalizing Vocal Bursts](https://doi.org/10.48550/arXiv.2205.01780)                | 2022 |  voice   | [Cite](#14) |
| [Intersectionality in emotion signaling and recognition: The influence of gender, ethnicity, and social class](https://doi.org/10.1037/emo0001082)                                   | 2022 |   body   | [Cite](#15) |
| [How emotions, relationships, and culture constitute each other: advances in social functionalist theory](https://doi.org/10.1080/02699931.2022.2047009)                             | 2022 |  multi   | [Cite](#16) |
| [State & Trait Measurement from Nonverbal Vocalizations: A Multi-Task Joint Learning Approach](https://doi.org/10.21437/Interspeech.2022-10927)                                      | 2022 |  voice   | [Cite](#17) |

\## BibTeX

\### <a id="1"></a>

```bibtex
@article{cowen2017self,
  title={Self-report captures 27 distinct categories of emotion bridged by continuous gradients},
  author={Cowen, Alan S and Keltner, Dacher},
  journal={Proceedings of the national academy of sciences},
  volume={114},
  number={38},
  pages={E7900--E7909},
  year={2017},
  publisher={National Acad Sciences}
}
```

\### <a id="2"></a>

```bibtex
@article{cowen2019mapping,
  title={Mapping the passions: Toward a high-dimensional taxonomy of emotional experience and expression},
  author={Cowen, Alan and Sauter, Disa and Tracy, Jessica L and Keltner, Dacher},
  journal={Psychological Science in the Public Interest},
  volume={20},
  number={1},
  pages={69--90},
  year={2019},
  publisher={Sage Publications Sage CA: Los Angeles, CA}
}
```

\### <a id="3"></a>

```bibtex
@article{cowen2019primacy,
  title={The primacy of categories in the recognition of 12 emotions in speech prosody across two cultures},
  author={Cowen, Alan S and Laukka, Petri and Elfenbein, Hillary Anger and Liu, Runjing and Keltner, Dacher},
  journal={Nature human behaviour},
  volume={3},
  number={4},
  pages={369--382},
  year={2019},
  publisher={Nature Publishing Group}
}
```

\### <a id="4"></a>

```bibtex
@article{cowen2019mapping,
  title={Mapping 24 emotions conveyed by brief human vocalization.},
  author={Cowen, Alan S and Elfenbein, Hillary Anger and Laukka, Petri and Keltner, Dacher},
  journal={American Psychologist},
  volume={74},
  number={6},
  pages={698},
  year={2019},
  publisher={American Psychological Association}
}
```

\### <a id="5"></a>

```bibtex
@article{keltner2019emotional,
  title={Emotional expression: Advances in basic emotion theory},
  author={Keltner, Dacher and Sauter, Disa and Tracy, Jessica and Cowen, Alan},
  journal={Journal of nonverbal behavior},
  volume={43},
  number={2},
  pages={133--160},
  year={2019},
  publisher={Springer}
}
```

\### <a id="6"></a>

```bibtex
@article{cowen2020face,
  title={What the face displays: Mapping 28 emotions conveyed by naturalistic expression.},
  author={Cowen, Alan S and Keltner, Dacher},
  journal={American Psychologist},
  volume={75},
  number={3},
  pages={349},
  year={2020},
  publisher={American Psychological Association}
}
```

\### <a id="7"></a>

```bibtex
@article{horikawa2020neural,
  title={The neural representation of visually evoked emotion is high-dimensional, categorical, and distributed across transmodal brain regions},
  author={Horikawa, Tomoyasu and Cowen, Alan S and Keltner, Dacher and Kamitani, Yukiyasu},
  journal={Iscience},
  volume={23},
  number={5},
  pages={101060},
  year={2020},
  publisher={Elsevier}
}
```

\### <a id="8"></a>

```bibtex
@article{cowen2020music,
  title={What music makes us feel: At least 13 dimensions organize subjective experiences associated with music across different cultures},
  author={Cowen, Alan S and Fang, Xia and Sauter, Disa and Keltner, Dacher},
  journal={Proceedings of the National Academy of Sciences},
  volume={117},
  number={4},
  pages={1924--1934},
  year={2020},
  publisher={National Acad Sciences}
}
```

\### <a id="9"></a>

```bibtex
@article{demszky2020goemotions,
  title={GoEmotions: A dataset of fine-grained emotions},
  author={Demszky, Dorottya and Movshovitz-Attias, Dana and Ko, Jeongwoo and Cowen, Alan and Nemade, Gaurav and Ravi, Sujith},
  journal={arXiv preprint arXiv:2005.00547},
  year={2020}
}
```

\### <a id="10"></a>

```bibtex
@article{cowen2020universal,
  title={Universal facial expressions uncovered in art of the ancient Americas: A computational approach},
  author={Cowen, Alan S and Keltner, Dacher},
  journal={Science advances},
  volume={6},
  number={34},
  pages={eabb1005},
  year={2020},
  publisher={American Association for the Advancement of Science}
}
```

\### <a id="11"></a>

```bibtex
@article{cowen2021sixteen,
  title={Sixteen facial expressions occur in similar contexts worldwide},
  author={Cowen, Alan S and Keltner, Dacher and Schroff, Florian and Jou, Brendan and Adam, Hartwig and Prasad, Gautam},
  journal={Nature},
  volume={589},
  number={7841},
  pages={251--257},
  year={2021},
  publisher={Nature Publishing Group}
}
```

\### <a id="12"></a>

```bibtex
@article{christ2022muse,
  title={The MuSe 2022 Multimodal Sentiment Analysis Challenge: Humor, Emotional Reactions, and Stress},
  author={Christ, Lukas and Amiriparian, Shahin and Baird, Alice and Tzirakis, Panagiotis and Kathan, Alexander and M{\"u}ller, Niklas and Stappen, Lukas and Me{\ss}ner, Eva-Maria and K{\"o}nig, Andreas and Cowen, Alan and others},
  year={2022}
}
```

\### <a id="13"></a>

```bibtex
@article{baird2022acii,
  title={The ACII 2022 Affective Vocal Bursts Workshop \& Competition: Understanding a critically understudied modality of emotional expression},
  author={Baird, Alice and Tzirakis, Panagiotis and Brooks, Jeffrey A and Gregory, Christopher B and Schuller, Bj{\"o}rn and Batliner, Anton and Keltner, Dacher and Cowen, Alan},
  journal={arXiv preprint arXiv:2207.03572},
  year={2022}
}
```

\### <a id="14"></a>

```bibtex
@article{baird2022icml,
  title={The ICML 2022 Expressive Vocalizations Workshop and Competition: Recognizing, Generating, and Personalizing Vocal Bursts},
  author={Baird, Alice and Tzirakis, Panagiotis and Gidel, Gauthier and Jiralerspong, Marco and Muller, Eilif B and Mathewson, Kory and Schuller, Bj{\"o}rn and Cambria, Erik and Keltner, Dacher and Cowen, Alan},
  journal={arXiv preprint arXiv:2205.01780},
  year={2022}
}
```

\### <a id="15"></a>

```bibtex
@article{monroy2022intersectionality,
  title={Intersectionality in emotion signaling and recognition: The influence of gender, ethnicity, and social class.},
  author={Monroy, Maria and Cowen, Alan S and Keltner, Dacher},
  journal={Emotion},
  year={2022},
  publisher={American Psychological Association}
}
```

\### <a id="16"></a>

```bibtex
@article{keltner2022emotions,
  title={How emotions, relationships, and culture constitute each other: advances in social functionalist theory},
  author={Keltner, Dacher and Sauter, Disa and Tracy, Jessica L and Wetchler, Everett and Cowen, Alan S},
  journal={Cognition and Emotion},
  volume={36},
  number={3},
  pages={388--401},
  year={2022},
  publisher={Taylor \& Francis}
}
```

\### <a id="17"></a>

```bibtex
@inproceedings{baird22_interspeech,
  author={Alice Baird and Panagiotis Tzirakis and Jeff Brooks and Lauren Kim and Michael Opara and Chris Gregory and Jacob Metrick and Garrett Boseck and Dacher Keltner and Alan Cowen},
  title={{State & Trait Measurement from Nonverbal Vocalizations: A Multi-Task Joint Learning Approach}},
  year=2022,
  booktitle={Proc. Interspeech 2022},
  pages={2028--2032},
  doi={10.21437/Interspeech.2022-10927}
}
```

</markdown>

# package.json

```
{
    "name": "hume",
    "version": "0.9.1",
    "private": false,
    "repository": "https://github.com/HumeAI/hume-typescript-sdk",
    "main": "./index.js",
    "types": "./index.d.ts",
    "scripts": {
        "format": "prettier . --write --ignore-unknown",
        "build": "tsc",
        "prepack": "cp -rv dist/. .",
        "test": "jest"
    },
    "dependencies": {
        "url-join": "4.0.1",
        "form-data": "^4.0.0",
        "formdata-node": "^6.0.3",
        "node-fetch": "2.7.0",
        "qs": "6.11.2",
        "readable-stream": "^4.5.2",
        "form-data-encoder": "^4.0.2",
        "ws": "^8.14.2",
        "uuid": "9.0.1",
        "zod": "^3.23.8"
    },
    "devDependencies": {
        "@types/url-join": "4.0.1",
        "@types/qs": "6.9.8",
        "@types/node-fetch": "2.6.9",
        "@types/readable-stream": "^4.0.15",
        "fetch-mock-jest": "^1.5.1",
        "webpack": "^5.94.0",
        "ts-loader": "^9.3.1",
        "jest": "29.7.0",
        "@types/jest": "29.5.5",
        "ts-jest": "29.1.1",
        "jest-environment-jsdom": "29.7.0",
        "@types/node": "17.0.33",
        "prettier": "2.7.1",
        "typescript": "4.6.4",
        "@types/ws": "^8.5.9",
        "@types/uuid": "9.0.7"
    },
    "browser": {
        "fs": false,
        "os": false,
        "path": false
    }
}

```

# CONTRIBUTING.md

<markdown>
\# Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!

</markdown>

# tsconfig.json

```
{
    "compilerOptions": {
        "extendedDiagnostics": true,
        "strict": true,
        "target": "ES6",
        "module": "CommonJS",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "skipLibCheck": true,
        "declaration": true,
        "outDir": "dist",
        "rootDir": "src",
        "baseUrl": "src"
    },
    "include": ["src"],
    "exclude": []
}

```

# tsconfig.dev.json

```
{
    "extends": "./tsconfig.json",
    "include": ["src/**/*.ts", "src/**/*.js", "tests", "eslint.config.mjs", "jest.config.mjs"],
    "exclude": ["dist"]
}

```

# jest.config.js

```javascript
/** @type {import('jest').Config} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
};

```

# README.md

<markdown>
<div align="center">
  <img src="https://storage.googleapis.com/hume-public-logos/hume/hume-banner.png">
  <h1>Hume AI TypeScript SDK</h1>

  <p>
    <strong>Integrate Hume APIs directly into your Node application or frontend</strong>
  </p>

  <br>
  <div>
    <a href="https://www.npmjs.com/package/hume"><img src="https://img.shields.io/npm/v/hume">
    <a href="https://buildwithfern.com/"><img src="https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen">
  </div>
  <br>
</div>

\## Documentation

API reference documentation is available [here](https://dev.hume.ai/reference/).

\## Installation

```
npm i hume
```

\## Usage

```typescript
import { HumeClient } from "hume";

const hume = new HumeClient({
    apiKey: "YOUR_API_KEY",
});

const job = await hume.expressionMeasurement.batch.startInferenceJob({
    models: {
        face: {},
    },
    urls: ["https://hume-tutorials.s3.amazonaws.com/faces.zip"],
});

console.log("Running...");

await job.awaitCompletion();

const predictions = await hume.expressionMeasurement.batch.getJobPredictions(job.jobId);

console.log(predictions);
```

\## Namespaces

This SDK contains the APIs for expression measurement, empathic voice and custom models. Even
if you do not plan on using more than one API to start, the SDK provides easy access in
case you find additional APIs in the future.

Each API is namespaced accordingly:

```typescript
import { HumeClient } from "hume";

const hume = new HumeClient({
    apiKey: "YOUR_API_KEY"
});

hume.expressionMeasurement. // APIs specific to Expression Measurement

hume.emapthicVoice. // APIs specific to Empathic Voice
```

\## Websockets

The SDK supports interacting with both WebSocket and REST APIs.

\### Request-Reply

The SDK supports a request-reply pattern for the streaming expression measurement API.
You'll be able to pass an inference request and `await` till the response is received.

```typescript
import { HumeClient } from "hume";

const hume = new HumeClient({
    apiKey: "YOUR_API_KEY",
});

const socket = hume.expressionMeasurement.stream.connect({
    config: {
        language: {},
    },
});

for (const sample of samples) {
    const result = await socket.sendText({ text: sample });
    console.log(result);
}
```

\### Empathic Voice

The SDK supports sending and receiving audio from Empathic Voice.

```typescript
import { HumeClient } from "hume";

const hume = new HumeClient({
    apiKey: "<>",
    secretKey: "<>",
});

const socket = hume.empathicVoice.chat.connect();

socket.on("message", (message) => {
    if (message.type === "audio_output") {
        const decoded = Buffer.from(message.data, "base64");
        // play decoded message
    }
});

// optional utility to wait for socket to be open
await socket.tillSocketOpen();

socket.sendUserInput("Hello, how are you?");
```

\## Errors

When the API returns a non-success status code (4xx or 5xx response),
a subclass of [HumeError](./src/errors/HumeError.ts) will be thrown:

```typescript
import { HumeError, HumeTimeoutError } from "hume";

try {
    await hume.expressionMeasurement.batch.startInferenceJob(/* ... */);
} catch (err) {
    if (err instanceof HumeTimeoutError) {
        console.log("Request timed out", err);
    } else if (err instanceof HumeError) {
        // catch all errros
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
```

\## Retries

409 Conflict, 429 Rate Limit, and >=500 Internal errors will all be retried twice with exponential bakcoff.
You can use the maxRetries option to configure this behavior:

```typescript
await hume.expressionMeasurement.batch.startInferenceJob(..., {
    maxRetries: 0, // disable retries
});
```

\## Timeouts

By default, the SDK has a timeout of 60s. You can use the `timeoutInSeconds` option to configure
this behavior

```typescript
await hume.expressionMeasurement.batch.startInferenceJob(..., {
    timeoutInSeconds: 10, // timeout after 10 seconds
});
```

\## Beta Status

This SDK is in beta, and there may be breaking changes between versions without a major
version update. Therefore, we recommend pinning the package version to a specific version.
This way, you can install the same version each time without breaking changes.

\## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a
proof of concept, but know that we will not be able to merge it as-is. We suggest opening an
issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!

</markdown>

# reference.md

<markdown>
\# Reference

\## ExpressionMeasurement Batch

<details><summary><code>client.expressionMeasurement.batch.<a href="/src/api/resources/expressionMeasurement/resources/batch/client/Client.ts">listJobs</a>({ ...params }) -> Hume.UnionJob[]</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sort and filter jobs.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.expressionMeasurement.batch.listJobs();
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.expressionMeasurement.batch.BatchListJobsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.expressionMeasurement.batch.<a href="/src/api/resources/expressionMeasurement/resources/batch/client/Client.ts">startInferenceJob</a>({ ...params }) -> Hume.JobId</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start a new measurement inference job.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.expressionMeasurement.batch.startInferenceJob({
    urls: ["https://hume-tutorials.s3.amazonaws.com/faces.zip"],
    notify: true,
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.InferenceBaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.expressionMeasurement.batch.<a href="/src/api/resources/expressionMeasurement/resources/batch/client/Client.ts">getJobDetails</a>(id) -> Hume.UnionJob</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the request details and state of a given job.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.expressionMeasurement.batch.getJobDetails("job_id");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The unique identifier for the job.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.expressionMeasurement.batch.<a href="/src/api/resources/expressionMeasurement/resources/batch/client/Client.ts">getJobPredictions</a>(id) -> Hume.UnionPredictResult[]</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the JSON predictions of a completed inference job.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.expressionMeasurement.batch.getJobPredictions("job_id");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The unique identifier for the job.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.expressionMeasurement.batch.<a href="/src/api/resources/expressionMeasurement/resources/batch/client/Client.ts">getJobArtifacts</a>(id) -> stream.Readable</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the artifacts ZIP of a completed inference job.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.expressionMeasurement.batch.getJobArtifacts("string");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The unique identifier for the job.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.expressionMeasurement.batch.<a href="/src/api/resources/expressionMeasurement/resources/batch/client/Client.ts">startInferenceJobFromLocalFile</a>(file, { ...params }) -> Hume.JobId</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start a new batch inference job.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.expressionMeasurement.batch.startInferenceJobFromLocalFile(
    [fs.createReadStream("/path/to/your/file")],
    {}
);
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**file:** `File[] | fs.ReadStream[] | Blob[]`

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.expressionMeasurement.batch.BatchStartInferenceJobFromLocalFileRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

\## EmpathicVoice Tools

<details><summary><code>client.empathicVoice.tools.<a href="/src/api/resources/empathicVoice/resources/tools/client/Client.ts">listTools</a>({ ...params }) -> core.Page<Hume.ReturnUserDefinedTool | undefined></code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a paginated list of **Tools**.

Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.tools.listTools({
    pageNumber: 0,
    pageSize: 2,
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.empathicVoice.ToolsListToolsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.tools.<a href="/src/api/resources/empathicVoice/resources/tools/client/Client.ts">createTool</a>({ ...params }) -> Hume.ReturnUserDefinedTool | undefined</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a **Tool** that can be added to an [EVI configuration](/reference/empathic-voice-interface-evi/configs/create-config).

Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.tools.createTool({
    name: "get_current_weather",
    parameters:
        '{ "type": "object", "properties": { "location": { "type": "string", "description": "The city and state, e.g. San Francisco, CA" }, "format": { "type": "string", "enum": ["celsius", "fahrenheit"], "description": "The temperature unit to use. Infer this from the users location." } }, "required": ["location", "format"] }',
    versionDescription: "Fetches current weather and uses celsius or fahrenheit based on location of user.",
    description: "This tool is for getting the current weather.",
    fallbackContent: "Unable to fetch current weather.",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedUserDefinedTool`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.tools.<a href="/src/api/resources/empathicVoice/resources/tools/client/Client.ts">listToolVersions</a>(id, { ...params }) -> Hume.ReturnPagedUserDefinedTools</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a list of a **Tool's** versions.

Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.tools.listToolVersions("00183a3f-79ba-413d-9f3b-609864268bea");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Tool. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.ToolsListToolVersionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.tools.<a href="/src/api/resources/empathicVoice/resources/tools/client/Client.ts">createToolVersion</a>(id, { ...params }) -> Hume.ReturnUserDefinedTool | undefined</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a **Tool** by creating a new version of the **Tool**.

Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.tools.createToolVersion("00183a3f-79ba-413d-9f3b-609864268bea", {
    parameters:
        '{ "type": "object", "properties": { "location": { "type": "string", "description": "The city and state, e.g. San Francisco, CA" }, "format": { "type": "string", "enum": ["celsius", "fahrenheit", "kelvin"], "description": "The temperature unit to use. Infer this from the users location." } }, "required": ["location", "format"] }',
    versionDescription: "Fetches current weather and uses celsius, fahrenheit, or kelvin based on location of user.",
    fallbackContent: "Unable to fetch current weather.",
    description: "This tool is for getting the current weather.",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Tool. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedUserDefinedToolVersion`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.tools.<a href="/src/api/resources/empathicVoice/resources/tools/client/Client.ts">deleteTool</a>(id) -> void</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a **Tool** and its versions.

Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.tools.deleteTool("00183a3f-79ba-413d-9f3b-609864268bea");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Tool. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.tools.<a href="/src/api/resources/empathicVoice/resources/tools/client/Client.ts">updateToolName</a>(id, { ...params }) -> string</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the name of a **Tool**.

Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.tools.updateToolName("00183a3f-79ba-413d-9f3b-609864268bea", {
    name: "get_current_temperature",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Tool. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedUserDefinedToolName`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.tools.<a href="/src/api/resources/empathicVoice/resources/tools/client/Client.ts">getToolVersion</a>(id, version) -> Hume.ReturnUserDefinedTool | undefined</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a specified version of a **Tool**.

Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.tools.getToolVersion("00183a3f-79ba-413d-9f3b-609864268bea", 1);
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Tool. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**version:** `number`

Version number for a Tool.

Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.

Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.tools.<a href="/src/api/resources/empathicVoice/resources/tools/client/Client.ts">deleteToolVersion</a>(id, version) -> void</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specified version of a **Tool**.

Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.tools.deleteToolVersion("00183a3f-79ba-413d-9f3b-609864268bea", 1);
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Tool. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**version:** `number`

Version number for a Tool.

Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.

Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.tools.<a href="/src/api/resources/empathicVoice/resources/tools/client/Client.ts">updateToolDescription</a>(id, version, { ...params }) -> Hume.ReturnUserDefinedTool | undefined</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the description of a specified **Tool** version.

Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.tools.updateToolDescription("00183a3f-79ba-413d-9f3b-609864268bea", 1, {
    versionDescription:
        "Fetches current temperature, precipitation, wind speed, AQI, and other weather conditions. Uses Celsius, Fahrenheit, or kelvin depending on user's region.",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Tool. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**version:** `number`

Version number for a Tool.

Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.

Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedUserDefinedToolVersionDescription`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

\## EmpathicVoice Prompts

<details><summary><code>client.empathicVoice.prompts.<a href="/src/api/resources/empathicVoice/resources/prompts/client/Client.ts">listPrompts</a>({ ...params }) -> core.Page<Hume.ReturnPrompt | undefined></code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a paginated list of **Prompts**.

See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.prompts.listPrompts({
    pageNumber: 0,
    pageSize: 2,
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.empathicVoice.PromptsListPromptsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.prompts.<a href="/src/api/resources/empathicVoice/resources/prompts/client/Client.ts">createPrompt</a>({ ...params }) -> Hume.ReturnPrompt | undefined</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a **Prompt** that can be added to an [EVI configuration](/reference/empathic-voice-interface-evi/configs/create-config).

See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.prompts.createPrompt({
    name: "Weather Assistant Prompt",
    text: "<role>You are an AI weather assistant providing users with accurate and up-to-date weather information. Respond to user queries concisely and clearly. Use simple language and avoid technical jargon. Provide temperature, precipitation, wind conditions, and any weather alerts. Include helpful tips if severe weather is expected.</role>",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedPrompt`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.prompts.<a href="/src/api/resources/empathicVoice/resources/prompts/client/Client.ts">listPromptVersions</a>(id, { ...params }) -> Hume.ReturnPagedPrompts</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a list of a **Prompt's** versions.

See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.prompts.listPromptVersions("af699d45-2985-42cc-91b9-af9e5da3bac5");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Prompt. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PromptsListPromptVersionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.prompts.<a href="/src/api/resources/empathicVoice/resources/prompts/client/Client.ts">createPromptVerison</a>(id, { ...params }) -> Hume.ReturnPrompt | undefined</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a **Prompt** by creating a new version of the **Prompt**.

See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.prompts.createPromptVerison("af699d45-2985-42cc-91b9-af9e5da3bac5", {
    text: "<role>You are an updated version of an AI weather assistant providing users with accurate and up-to-date weather information. Respond to user queries concisely and clearly. Use simple language and avoid technical jargon. Provide temperature, precipitation, wind conditions, and any weather alerts. Include helpful tips if severe weather is expected.</role>",
    versionDescription: "This is an updated version of the Weather Assistant Prompt.",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Prompt. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedPromptVersion`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.prompts.<a href="/src/api/resources/empathicVoice/resources/prompts/client/Client.ts">deletePrompt</a>(id) -> void</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a **Prompt** and its versions.

See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.prompts.deletePrompt("af699d45-2985-42cc-91b9-af9e5da3bac5");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Prompt. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.prompts.<a href="/src/api/resources/empathicVoice/resources/prompts/client/Client.ts">updatePromptName</a>(id, { ...params }) -> string</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the name of a **Prompt**.

See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.prompts.updatePromptName("af699d45-2985-42cc-91b9-af9e5da3bac5", {
    name: "Updated Weather Assistant Prompt Name",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Prompt. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedPromptName`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.prompts.<a href="/src/api/resources/empathicVoice/resources/prompts/client/Client.ts">getPromptVersion</a>(id, version) -> Hume.ReturnPrompt | undefined</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a specified version of a **Prompt**.

See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.prompts.getPromptVersion("af699d45-2985-42cc-91b9-af9e5da3bac5", 0);
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Prompt. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**version:** `number`

Version number for a Prompt.

Prompts, Configs, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine prompts and revert to previous versions if needed.

Version numbers are integer values representing different iterations of the Prompt. Each update to the Prompt increments its version number.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.prompts.<a href="/src/api/resources/empathicVoice/resources/prompts/client/Client.ts">deletePromptVersion</a>(id, version) -> void</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specified version of a **Prompt**.

See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.prompts.deletePromptVersion("af699d45-2985-42cc-91b9-af9e5da3bac5", 1);
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Prompt. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**version:** `number`

Version number for a Prompt.

Prompts, Configs, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine prompts and revert to previous versions if needed.

Version numbers are integer values representing different iterations of the Prompt. Each update to the Prompt increments its version number.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.prompts.<a href="/src/api/resources/empathicVoice/resources/prompts/client/Client.ts">updatePromptDescription</a>(id, version, { ...params }) -> Hume.ReturnPrompt | undefined</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the description of a **Prompt**.

See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.prompts.updatePromptDescription("af699d45-2985-42cc-91b9-af9e5da3bac5", 1, {
    versionDescription: "This is an updated version_description.",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Prompt. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**version:** `number`

Version number for a Prompt.

Prompts, Configs, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine prompts and revert to previous versions if needed.

Version numbers are integer values representing different iterations of the Prompt. Each update to the Prompt increments its version number.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedPromptVersionDescription`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

\## EmpathicVoice CustomVoices

<details><summary><code>client.empathicVoice.customVoices.<a href="/src/api/resources/empathicVoice/resources/customVoices/client/Client.ts">listCustomVoices</a>({ ...params }) -> Hume.ReturnPagedCustomVoices</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a paginated list of **Custom Voices**.

Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.customVoices.listCustomVoices();
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.empathicVoice.CustomVoicesListCustomVoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomVoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.customVoices.<a href="/src/api/resources/empathicVoice/resources/customVoices/client/Client.ts">createCustomVoice</a>({ ...params }) -> Hume.ReturnCustomVoice</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a **Custom Voice** that can be added to an [EVI configuration](/reference/empathic-voice-interface-evi/configs/create-config).

Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.customVoices.createCustomVoice({
    name: "name",
    baseVoice: Hume.PostedCustomVoiceBaseVoice.Ito,
    parameterModel: "20240715-4parameter",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.PostedCustomVoice`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomVoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.customVoices.<a href="/src/api/resources/empathicVoice/resources/customVoices/client/Client.ts">getCustomVoice</a>(id) -> Hume.ReturnCustomVoice</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a specific **Custom Voice** by ID.

Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.customVoices.getCustomVoice("id");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Custom Voice. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomVoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.customVoices.<a href="/src/api/resources/empathicVoice/resources/customVoices/client/Client.ts">createCustomVoiceVersion</a>(id, { ...params }) -> Hume.ReturnCustomVoice</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a **Custom Voice** by creating a new version of the **Custom Voice**.

Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.customVoices.createCustomVoiceVersion("id", {
    name: "name",
    baseVoice: Hume.PostedCustomVoiceBaseVoice.Ito,
    parameterModel: "20240715-4parameter",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Custom Voice. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.PostedCustomVoice`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomVoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.customVoices.<a href="/src/api/resources/empathicVoice/resources/customVoices/client/Client.ts">deleteCustomVoice</a>(id) -> void</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a **Custom Voice** and its versions.

Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.customVoices.deleteCustomVoice("id");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Custom Voice. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomVoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.customVoices.<a href="/src/api/resources/empathicVoice/resources/customVoices/client/Client.ts">updateCustomVoiceName</a>(id, { ...params }) -> string</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the name of a **Custom Voice**.

Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.customVoices.updateCustomVoiceName("string", {
    name: "string",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Custom Voice. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedCustomVoiceName`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomVoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

\## EmpathicVoice Configs

<details><summary><code>client.empathicVoice.configs.<a href="/src/api/resources/empathicVoice/resources/configs/client/Client.ts">listConfigs</a>({ ...params }) -> Hume.ReturnPagedConfigs</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a paginated list of **Configs**.

For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.configs.listConfigs({
    pageNumber: 0,
    pageSize: 1,
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.empathicVoice.ConfigsListConfigsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.configs.<a href="/src/api/resources/empathicVoice/resources/configs/client/Client.ts">createConfig</a>({ ...params }) -> Hume.ReturnConfig</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a **Config** which can be applied to EVI.

For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.configs.createConfig({
    name: "Weather Assistant Config",
    prompt: {
        id: "af699d45-2985-42cc-91b9-af9e5da3bac5",
        version: 0,
    },
    eviVersion: "2",
    voice: {
        provider: "HUME_AI",
        name: "SAMPLE VOICE",
    },
    languageModel: {
        modelProvider: Hume.PostedLanguageModelModelProvider.Anthropic,
        modelResource: "claude-3-5-sonnet-20240620",
        temperature: 1,
    },
    eventMessages: {
        onNewChat: {
            enabled: false,
            text: "",
        },
        onInactivityTimeout: {
            enabled: false,
            text: "",
        },
        onMaxDurationTimeout: {
            enabled: false,
            text: "",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.configs.<a href="/src/api/resources/empathicVoice/resources/configs/client/Client.ts">listConfigVersions</a>(id, { ...params }) -> Hume.ReturnPagedConfigs</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a list of a **Config's** versions.

For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.configs.listConfigVersions("1b60e1a0-cc59-424a-8d2c-189d354db3f3");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Config. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.ConfigsListConfigVersionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.configs.<a href="/src/api/resources/empathicVoice/resources/configs/client/Client.ts">createConfigVersion</a>(id, { ...params }) -> Hume.ReturnConfig</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a **Config** by creating a new version of the **Config**.

For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.configs.createConfigVersion("1b60e1a0-cc59-424a-8d2c-189d354db3f3", {
    versionDescription: "This is an updated version of the Weather Assistant Config.",
    eviVersion: "2",
    prompt: {
        id: "af699d45-2985-42cc-91b9-af9e5da3bac5",
        version: 0,
    },
    voice: {
        provider: "HUME_AI",
        name: "ITO",
    },
    languageModel: {
        modelProvider: Hume.PostedLanguageModelModelProvider.Anthropic,
        modelResource: "claude-3-5-sonnet-20240620",
        temperature: 1,
    },
    ellmModel: {
        allowShortResponses: true,
    },
    eventMessages: {
        onNewChat: {
            enabled: false,
            text: "",
        },
        onInactivityTimeout: {
            enabled: false,
            text: "",
        },
        onMaxDurationTimeout: {
            enabled: false,
            text: "",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Config. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedConfigVersion`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.configs.<a href="/src/api/resources/empathicVoice/resources/configs/client/Client.ts">deleteConfig</a>(id) -> void</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a **Config** and its versions.

For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.configs.deleteConfig("1b60e1a0-cc59-424a-8d2c-189d354db3f3");
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Config. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.configs.<a href="/src/api/resources/empathicVoice/resources/configs/client/Client.ts">updateConfigName</a>(id, { ...params }) -> string</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the name of a **Config**.

For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.configs.updateConfigName("1b60e1a0-cc59-424a-8d2c-189d354db3f3", {
    name: "Updated Weather Assistant Config Name",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Config. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedConfigName`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.configs.<a href="/src/api/resources/empathicVoice/resources/configs/client/Client.ts">getConfigVersion</a>(id, version) -> Hume.ReturnConfig</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a specified version of a **Config**.

For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.configs.getConfigVersion("1b60e1a0-cc59-424a-8d2c-189d354db3f3", 1);
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Config. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**version:** `number`

Version number for a Config.

Configs, Prompts, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine configurations and revert to previous versions if needed.

Version numbers are integer values representing different iterations of the Config. Each update to the Config increments its version number.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.configs.<a href="/src/api/resources/empathicVoice/resources/configs/client/Client.ts">deleteConfigVersion</a>(id, version) -> void</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specified version of a **Config**.

For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.configs.deleteConfigVersion("1b60e1a0-cc59-424a-8d2c-189d354db3f3", 1);
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Config. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**version:** `number`

Version number for a Config.

Configs, Prompts, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine configurations and revert to previous versions if needed.

Version numbers are integer values representing different iterations of the Config. Each update to the Config increments its version number.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.configs.<a href="/src/api/resources/empathicVoice/resources/configs/client/Client.ts">updateConfigDescription</a>(id, version, { ...params }) -> Hume.ReturnConfig</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the description of a **Config**.

For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.configs.updateConfigDescription("1b60e1a0-cc59-424a-8d2c-189d354db3f3", 1, {
    versionDescription: "This is an updated version_description.",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Config. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**version:** `number`

Version number for a Config.

Configs, Prompts, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine configurations and revert to previous versions if needed.

Version numbers are integer values representing different iterations of the Config. Each update to the Config increments its version number.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.PostedConfigVersionDescription`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Configs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

\## EmpathicVoice Chats

<details><summary><code>client.empathicVoice.chats.<a href="/src/api/resources/empathicVoice/resources/chats/client/Client.ts">listChats</a>({ ...params }) -> core.Page<Hume.ReturnChat></code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a paginated list of **Chats**.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.chats.listChats({
    pageNumber: 0,
    pageSize: 1,
    ascendingOrder: true,
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.empathicVoice.ChatsListChatsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.chats.<a href="/src/api/resources/empathicVoice/resources/chats/client/Client.ts">listChatEvents</a>(id, { ...params }) -> core.Page<Hume.ReturnChatEvent></code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a paginated list of **Chat** events.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.chats.listChatEvents("470a49f6-1dec-4afe-8b61-035d3b2d63b0", {
    pageNumber: 0,
    pageSize: 3,
    ascendingOrder: true,
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Chat. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.ChatsListChatEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chats.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

\## EmpathicVoice ChatGroups

<details><summary><code>client.empathicVoice.chatGroups.<a href="/src/api/resources/empathicVoice/resources/chatGroups/client/Client.ts">listChatGroups</a>({ ...params }) -> Hume.ReturnPagedChatGroups</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a paginated list of **Chat Groups**.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.chatGroups.listChatGroups({
    pageNumber: 0,
    pageSize: 1,
    ascendingOrder: true,
    configId: "1b60e1a0-cc59-424a-8d2c-189d354db3f3",
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Hume.empathicVoice.ChatGroupsListChatGroupsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatGroups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.chatGroups.<a href="/src/api/resources/empathicVoice/resources/chatGroups/client/Client.ts">getChatGroup</a>(id, { ...params }) -> Hume.ReturnChatGroupPagedChats</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a **ChatGroup** by ID, including a paginated list of **Chats** associated with the **ChatGroup**.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.chatGroups.getChatGroup("697056f0-6c7e-487d-9bd8-9c19df79f05f", {
    pageNumber: 0,
    pageSize: 1,
    ascendingOrder: true,
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Chat Group. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.ChatGroupsGetChatGroupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatGroups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.empathicVoice.chatGroups.<a href="/src/api/resources/empathicVoice/resources/chatGroups/client/Client.ts">listChatGroupEvents</a>(id, { ...params }) -> Hume.ReturnChatGroupPagedEvents</code></summary>
<dl>
<dd>

\#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a paginated list of **Chat** events associated with a **Chat Group**.

</dd>
</dl>
</dd>
</dl>

\#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.empathicVoice.chatGroups.listChatGroupEvents("697056f0-6c7e-487d-9bd8-9c19df79f05f", {
    pageNumber: 0,
    pageSize: 3,
    ascendingOrder: true,
});
```

</dd>
</dl>
</dd>
</dl>

\#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Identifier for a Chat Group. Formatted as a UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Hume.empathicVoice.ChatGroupsListChatGroupEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatGroups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

</markdown>

# src/environments.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const HumeEnvironment = {
    Production: "https://api.hume.ai",
} as const;

export type HumeEnvironment = typeof HumeEnvironment.Production;

```

# src/version.ts

```typescript
export const SDK_VERSION = "0.9.1";

```

# src/Client.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { ExpressionMeasurement } from "./api/resources/expressionMeasurement/client/Client";
import { EmpathicVoice } from "./api/resources/empathicVoice/client/Client";

export declare namespace HumeClient {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        accessToken?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class HumeClient {
    constructor(protected readonly _options: HumeClient.Options = {}) {}

    protected _expressionMeasurement: ExpressionMeasurement | undefined;

    public get expressionMeasurement(): ExpressionMeasurement {
        return (this._expressionMeasurement ??= new ExpressionMeasurement(this._options));
    }

    protected _empathicVoice: EmpathicVoice | undefined;

    public get empathicVoice(): EmpathicVoice {
        return (this._empathicVoice ??= new EmpathicVoice(this._options));
    }
}

```

# src/index.ts

```typescript
export * as Hume from "./api";
export * from "./wrapper";
export { HumeEnvironment } from "./environments";
export { HumeError, HumeTimeoutError } from "./errors";

```

# src/serialization/index.ts

```typescript
export * from "./resources";

```

# src/serialization/resources/index.ts

```typescript
export * as expressionMeasurement from "./expressionMeasurement";
export * as empathicVoice from "./empathicVoice";

```

# src/serialization/resources/expressionMeasurement/index.ts

```typescript
export * from "./resources";

```

# src/serialization/resources/expressionMeasurement/resources/index.ts

```typescript
export * as batch from "./batch";
export * as stream from "./stream";

```

# src/serialization/resources/expressionMeasurement/resources/batch/index.ts

```typescript
export * from "./types";
export * from "./client";

```

# src/serialization/resources/expressionMeasurement/resources/batch/client/listJobs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { UnionJob } from "../types/UnionJob";

export const Response: core.serialization.Schema<
    serializers.expressionMeasurement.batch.listJobs.Response.Raw,
    Hume.expressionMeasurement.batch.UnionJob[]
> = core.serialization.list(UnionJob);

export declare namespace Response {
    type Raw = UnionJob.Raw[];
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/client/index.ts

```typescript
export * as listJobs from "./listJobs";
export * as getJobPredictions from "./getJobPredictions";

```

# src/serialization/resources/expressionMeasurement/resources/batch/client/getJobPredictions.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { UnionPredictResult } from "../types/UnionPredictResult";

export const Response: core.serialization.Schema<
    serializers.expressionMeasurement.batch.getJobPredictions.Response.Raw,
    Hume.expressionMeasurement.batch.UnionPredictResult[]
> = core.serialization.list(UnionPredictResult);

export declare namespace Response {
    type Raw = UnionPredictResult.Raw[];
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CompletedTraining.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TrainingCustomModel } from "./TrainingCustomModel";

export const CompletedTraining: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CompletedTraining.Raw,
    Hume.expressionMeasurement.batch.CompletedTraining
> = core.serialization.object({
    createdTimestampMs: core.serialization.property("created_timestamp_ms", core.serialization.number()),
    startedTimestampMs: core.serialization.property("started_timestamp_ms", core.serialization.number()),
    endedTimestampMs: core.serialization.property("ended_timestamp_ms", core.serialization.number()),
    customModel: core.serialization.property("custom_model", TrainingCustomModel),
    alternatives: core.serialization.record(core.serialization.string(), TrainingCustomModel).optional(),
});

export declare namespace CompletedTraining {
    interface Raw {
        created_timestamp_ms: number;
        started_timestamp_ms: number;
        ended_timestamp_ms: number;
        custom_model: TrainingCustomModel.Raw;
        alternatives?: Record<string, TrainingCustomModel.Raw> | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateEmbeddingGeneration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StateEmbeddingGenerationQueued } from "./StateEmbeddingGenerationQueued";
import { StateEmbeddingGenerationInProgress } from "./StateEmbeddingGenerationInProgress";
import { StateEmbeddingGenerationCompletedEmbeddingGeneration } from "./StateEmbeddingGenerationCompletedEmbeddingGeneration";
import { StateEmbeddingGenerationFailed } from "./StateEmbeddingGenerationFailed";

export const StateEmbeddingGeneration: core.serialization.Schema<
    serializers.expressionMeasurement.batch.StateEmbeddingGeneration.Raw,
    Hume.expressionMeasurement.batch.StateEmbeddingGeneration
> = core.serialization
    .union("status", {
        QUEUED: StateEmbeddingGenerationQueued,
        IN_PROGRESS: StateEmbeddingGenerationInProgress,
        COMPLETED: StateEmbeddingGenerationCompletedEmbeddingGeneration,
        FAILED: StateEmbeddingGenerationFailed,
    })
    .transform<Hume.expressionMeasurement.batch.StateEmbeddingGeneration>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace StateEmbeddingGeneration {
    type Raw =
        | StateEmbeddingGeneration.Queued
        | StateEmbeddingGeneration.InProgress
        | StateEmbeddingGeneration.Completed
        | StateEmbeddingGeneration.Failed;

    interface Queued extends StateEmbeddingGenerationQueued.Raw {
        status: "QUEUED";
    }

    interface InProgress extends StateEmbeddingGenerationInProgress.Raw {
        status: "IN_PROGRESS";
    }

    interface Completed extends StateEmbeddingGenerationCompletedEmbeddingGeneration.Raw {
        status: "COMPLETED";
    }

    interface Failed extends StateEmbeddingGenerationFailed.Raw {
        status: "FAILED";
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/InferenceResults.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InferencePrediction } from "./InferencePrediction";
import { Error_ } from "./Error_";

export const InferenceResults: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.InferenceResults.Raw,
    Hume.expressionMeasurement.batch.InferenceResults
> = core.serialization.object({
    predictions: core.serialization.list(InferencePrediction),
    errors: core.serialization.list(Error_),
});

export declare namespace InferenceResults {
    interface Raw {
        predictions: InferencePrediction.Raw[];
        errors: Error_.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Classification.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Classification: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Classification.Raw,
    Hume.expressionMeasurement.batch.Classification
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace Classification {
    type Raw = Record<string, unknown>;
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/FacsScore.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const FacsScore: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.FacsScore.Raw,
    Hume.expressionMeasurement.batch.FacsScore
> = core.serialization.object({
    name: core.serialization.string(),
    score: core.serialization.number(),
});

export declare namespace FacsScore {
    interface Raw {
        name: string;
        score: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/ValidationArgs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Target } from "./Target";

export const ValidationArgs: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.ValidationArgs.Raw,
    Hume.expressionMeasurement.batch.ValidationArgs
> = core.serialization.object({
    positiveLabel: core.serialization.property("positive_label", Target.optional()),
});

export declare namespace ValidationArgs {
    interface Raw {
        positive_label?: Target.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/UnionPredictResult.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InferenceSourcePredictResult } from "./InferenceSourcePredictResult";

export const UnionPredictResult: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.UnionPredictResult.Raw,
    Hume.expressionMeasurement.batch.UnionPredictResult
> = InferenceSourcePredictResult;

export declare namespace UnionPredictResult {
    type Raw = InferenceSourcePredictResult.Raw;
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/FacePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { BoundingBox } from "./BoundingBox";
import { EmotionScore } from "./EmotionScore";
import { FacsScore } from "./FacsScore";
import { DescriptionsScore } from "./DescriptionsScore";

export const FacePrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.FacePrediction.Raw,
    Hume.expressionMeasurement.batch.FacePrediction
> = core.serialization.object({
    frame: core.serialization.number(),
    time: core.serialization.number(),
    prob: core.serialization.number(),
    box: BoundingBox,
    emotions: core.serialization.list(EmotionScore),
    facs: core.serialization.list(FacsScore).optional(),
    descriptions: core.serialization.list(DescriptionsScore).optional(),
});

export declare namespace FacePrediction {
    interface Raw {
        frame: number;
        time: number;
        prob: number;
        box: BoundingBox.Raw;
        emotions: EmotionScore.Raw[];
        facs?: FacsScore.Raw[] | null;
        descriptions?: DescriptionsScore.Raw[] | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsLanguagePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { LanguagePrediction } from "./LanguagePrediction";

export const GroupedPredictionsLanguagePrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.GroupedPredictionsLanguagePrediction.Raw,
    Hume.expressionMeasurement.batch.GroupedPredictionsLanguagePrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(LanguagePrediction),
});

export declare namespace GroupedPredictionsLanguagePrediction {
    interface Raw {
        id: string;
        predictions: LanguagePrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Transcription.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Bcp47Tag } from "./Bcp47Tag";

export const Transcription: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Transcription.Raw,
    Hume.expressionMeasurement.batch.Transcription
> = core.serialization.object({
    language: Bcp47Tag.optional(),
    identifySpeakers: core.serialization.property("identify_speakers", core.serialization.boolean().optional()),
    confidenceThreshold: core.serialization.property("confidence_threshold", core.serialization.number().optional()),
});

export declare namespace Transcription {
    interface Raw {
        language?: Bcp47Tag.Raw | null;
        identify_speakers?: boolean | null;
        confidence_threshold?: number | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsFacePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { FacePrediction } from "./FacePrediction";

export const GroupedPredictionsFacePrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.GroupedPredictionsFacePrediction.Raw,
    Hume.expressionMeasurement.batch.GroupedPredictionsFacePrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(FacePrediction),
});

export declare namespace GroupedPredictionsFacePrediction {
    interface Raw {
        id: string;
        predictions: FacePrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TaskRegression.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TaskRegression: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TaskRegression.Raw,
    Hume.expressionMeasurement.batch.TaskRegression
> = core.serialization.object({});

export declare namespace TaskRegression {
    interface Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/UnionJob.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InferenceJob } from "./InferenceJob";

export const UnionJob: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.UnionJob.Raw,
    Hume.expressionMeasurement.batch.UnionJob
> = InferenceJob;

export declare namespace UnionJob {
    type Raw = InferenceJob.Raw;
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalNullFacePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Null } from "./Null";
import { GroupedPredictionsFacePrediction } from "./GroupedPredictionsFacePrediction";

export const PredictionsOptionalNullFacePrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.PredictionsOptionalNullFacePrediction.Raw,
    Hume.expressionMeasurement.batch.PredictionsOptionalNullFacePrediction
> = core.serialization.object({
    metadata: Null.optional(),
    groupedPredictions: core.serialization.property(
        "grouped_predictions",
        core.serialization.list(GroupedPredictionsFacePrediction)
    ),
});

export declare namespace PredictionsOptionalNullFacePrediction {
    interface Raw {
        metadata?: Null.Raw | null;
        grouped_predictions: GroupedPredictionsFacePrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsBurstPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { BurstPrediction } from "./BurstPrediction";

export const GroupedPredictionsBurstPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.GroupedPredictionsBurstPrediction.Raw,
    Hume.expressionMeasurement.batch.GroupedPredictionsBurstPrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(BurstPrediction),
});

export declare namespace GroupedPredictionsBurstPrediction {
    interface Raw {
        id: string;
        predictions: BurstPrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/SortBy.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const SortBy: core.serialization.Schema<
    serializers.expressionMeasurement.batch.SortBy.Raw,
    Hume.expressionMeasurement.batch.SortBy
> = core.serialization.enum_(["created", "started", "ended"]);

export declare namespace SortBy {
    type Raw = "created" | "started" | "ended";
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Null.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Null: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Null.Raw,
    Hume.expressionMeasurement.batch.Null
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace Null {
    type Raw = Record<string, unknown>;
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/ModelsPredictions.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PredictionsOptionalNullFacePrediction } from "./PredictionsOptionalNullFacePrediction";
import { PredictionsOptionalNullBurstPrediction } from "./PredictionsOptionalNullBurstPrediction";
import { PredictionsOptionalTranscriptionMetadataProsodyPrediction } from "./PredictionsOptionalTranscriptionMetadataProsodyPrediction";
import { PredictionsOptionalTranscriptionMetadataLanguagePrediction } from "./PredictionsOptionalTranscriptionMetadataLanguagePrediction";
import { PredictionsOptionalTranscriptionMetadataNerPrediction } from "./PredictionsOptionalTranscriptionMetadataNerPrediction";
import { PredictionsOptionalNullFacemeshPrediction } from "./PredictionsOptionalNullFacemeshPrediction";

export const ModelsPredictions: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.ModelsPredictions.Raw,
    Hume.expressionMeasurement.batch.ModelsPredictions
> = core.serialization.object({
    face: PredictionsOptionalNullFacePrediction.optional(),
    burst: PredictionsOptionalNullBurstPrediction.optional(),
    prosody: PredictionsOptionalTranscriptionMetadataProsodyPrediction.optional(),
    language: PredictionsOptionalTranscriptionMetadataLanguagePrediction.optional(),
    ner: PredictionsOptionalTranscriptionMetadataNerPrediction.optional(),
    facemesh: PredictionsOptionalNullFacemeshPrediction.optional(),
});

export declare namespace ModelsPredictions {
    interface Raw {
        face?: PredictionsOptionalNullFacePrediction.Raw | null;
        burst?: PredictionsOptionalNullBurstPrediction.Raw | null;
        prosody?: PredictionsOptionalTranscriptionMetadataProsodyPrediction.Raw | null;
        language?: PredictionsOptionalTranscriptionMetadataLanguagePrediction.Raw | null;
        ner?: PredictionsOptionalTranscriptionMetadataNerPrediction.Raw | null;
        facemesh?: PredictionsOptionalNullFacemeshPrediction.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/JobId.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const JobId: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.JobId.Raw,
    Hume.expressionMeasurement.batch.JobId
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string()),
});

export declare namespace JobId {
    interface Raw {
        job_id: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Regression.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Regression: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Regression.Raw,
    Hume.expressionMeasurement.batch.Regression
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace Regression {
    type Raw = Record<string, unknown>;
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CustomModelsInferenceJob.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { JobTlInference } from "./JobTlInference";

export const CustomModelsInferenceJob: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CustomModelsInferenceJob.Raw,
    Hume.expressionMeasurement.batch.CustomModelsInferenceJob
> = core.serialization
    .object({
        type: core.serialization.string(),
    })
    .extend(JobTlInference);

export declare namespace CustomModelsInferenceJob {
    interface Raw extends JobTlInference.Raw {
        type: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalTranscriptionMetadataLanguagePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TranscriptionMetadata } from "./TranscriptionMetadata";
import { GroupedPredictionsLanguagePrediction } from "./GroupedPredictionsLanguagePrediction";

export const PredictionsOptionalTranscriptionMetadataLanguagePrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.PredictionsOptionalTranscriptionMetadataLanguagePrediction.Raw,
    Hume.expressionMeasurement.batch.PredictionsOptionalTranscriptionMetadataLanguagePrediction
> = core.serialization.object({
    metadata: TranscriptionMetadata.optional(),
    groupedPredictions: core.serialization.property(
        "grouped_predictions",
        core.serialization.list(GroupedPredictionsLanguagePrediction)
    ),
});

export declare namespace PredictionsOptionalTranscriptionMetadataLanguagePrediction {
    interface Raw {
        metadata?: TranscriptionMetadata.Raw | null;
        grouped_predictions: GroupedPredictionsLanguagePrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateTrainingCompletedTraining.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CompletedTraining } from "./CompletedTraining";

export const StateTrainingCompletedTraining: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateTrainingCompletedTraining.Raw,
    Hume.expressionMeasurement.batch.StateTrainingCompletedTraining
> = core.serialization.object({}).extend(CompletedTraining);

export declare namespace StateTrainingCompletedTraining {
    interface Raw extends CompletedTraining.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/InProgressState.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InProgress } from "./InProgress";

export const InProgressState: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.InProgressState.Raw,
    Hume.expressionMeasurement.batch.InProgressState
> = core.serialization.object({}).extend(InProgress);

export declare namespace InProgressState {
    interface Raw extends InProgress.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/SentimentScore.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const SentimentScore: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.SentimentScore.Raw,
    Hume.expressionMeasurement.batch.SentimentScore
> = core.serialization.object({
    name: core.serialization.string(),
    score: core.serialization.number(),
});

export declare namespace SentimentScore {
    interface Raw {
        name: string;
        score: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Alternative.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Alternative: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Alternative.Raw,
    Hume.expressionMeasurement.batch.Alternative
> = core.serialization.stringLiteral("language_only");

export declare namespace Alternative {
    type Raw = "language_only";
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/SourceUrl.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Url } from "./Url";

export const SourceUrl: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.SourceUrl.Raw,
    Hume.expressionMeasurement.batch.SourceUrl
> = core.serialization.object({}).extend(Url);

export declare namespace SourceUrl {
    interface Raw extends Url.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/EmbeddingGenerationBaseRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { RegistryFileDetail } from "./RegistryFileDetail";

export const EmbeddingGenerationBaseRequest: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.EmbeddingGenerationBaseRequest.Raw,
    Hume.expressionMeasurement.batch.EmbeddingGenerationBaseRequest
> = core.serialization.object({
    registryFileDetails: core.serialization.property(
        "registry_file_details",
        core.serialization.list(RegistryFileDetail).optional()
    ),
});

export declare namespace EmbeddingGenerationBaseRequest {
    interface Raw {
        registry_file_details?: RegistryFileDetail.Raw[] | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/EmbeddingGenerationJob.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { JobEmbeddingGeneration } from "./JobEmbeddingGeneration";

export const EmbeddingGenerationJob: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.EmbeddingGenerationJob.Raw,
    Hume.expressionMeasurement.batch.EmbeddingGenerationJob
> = core.serialization
    .object({
        type: core.serialization.string(),
    })
    .extend(JobEmbeddingGeneration);

export declare namespace EmbeddingGenerationJob {
    interface Raw extends JobEmbeddingGeneration.Raw {
        type: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/EmotionScore.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const EmotionScore: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.EmotionScore.Raw,
    Hume.expressionMeasurement.batch.EmotionScore
> = core.serialization.object({
    name: core.serialization.string(),
    score: core.serialization.number(),
});

export declare namespace EmotionScore {
    interface Raw {
        name: string;
        score: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Language.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Granularity } from "./Granularity";
import { Unconfigurable } from "./Unconfigurable";

export const Language: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Language.Raw,
    Hume.expressionMeasurement.batch.Language
> = core.serialization.object({
    granularity: Granularity.optional(),
    sentiment: Unconfigurable.optional(),
    toxicity: Unconfigurable.optional(),
    identifySpeakers: core.serialization.property("identify_speakers", core.serialization.boolean().optional()),
});

export declare namespace Language {
    interface Raw {
        granularity?: Granularity.Raw | null;
        sentiment?: Unconfigurable.Raw | null;
        toxicity?: Unconfigurable.Raw | null;
        identify_speakers?: boolean | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalTranscriptionMetadataProsodyPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TranscriptionMetadata } from "./TranscriptionMetadata";
import { GroupedPredictionsProsodyPrediction } from "./GroupedPredictionsProsodyPrediction";

export const PredictionsOptionalTranscriptionMetadataProsodyPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.PredictionsOptionalTranscriptionMetadataProsodyPrediction.Raw,
    Hume.expressionMeasurement.batch.PredictionsOptionalTranscriptionMetadataProsodyPrediction
> = core.serialization.object({
    metadata: TranscriptionMetadata.optional(),
    groupedPredictions: core.serialization.property(
        "grouped_predictions",
        core.serialization.list(GroupedPredictionsProsodyPrediction)
    ),
});

export declare namespace PredictionsOptionalTranscriptionMetadataProsodyPrediction {
    interface Raw {
        metadata?: TranscriptionMetadata.Raw | null;
        grouped_predictions: GroupedPredictionsProsodyPrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CustomModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CustomModelId } from "./CustomModelId";
import { CustomModelVersionId } from "./CustomModelVersionId";

export const CustomModel: core.serialization.Schema<
    serializers.expressionMeasurement.batch.CustomModel.Raw,
    Hume.expressionMeasurement.batch.CustomModel
> = core.serialization.undiscriminatedUnion([CustomModelId, CustomModelVersionId]);

export declare namespace CustomModel {
    type Raw = CustomModelId.Raw | CustomModelVersionId.Raw;
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsFacemeshPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { FacemeshPrediction } from "./FacemeshPrediction";

export const GroupedPredictionsFacemeshPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.GroupedPredictionsFacemeshPrediction.Raw,
    Hume.expressionMeasurement.batch.GroupedPredictionsFacemeshPrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(FacemeshPrediction),
});

export declare namespace GroupedPredictionsFacemeshPrediction {
    interface Raw {
        id: string;
        predictions: FacemeshPrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CustomModelPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CustomModelPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CustomModelPrediction.Raw,
    Hume.expressionMeasurement.batch.CustomModelPrediction
> = core.serialization.object({
    output: core.serialization.record(core.serialization.string(), core.serialization.number()),
    error: core.serialization.string(),
    taskType: core.serialization.property("task_type", core.serialization.string()),
});

export declare namespace CustomModelPrediction {
    interface Raw {
        output: Record<string, number>;
        error: string;
        task_type: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/When.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const When: core.serialization.Schema<
    serializers.expressionMeasurement.batch.When.Raw,
    Hume.expressionMeasurement.batch.When
> = core.serialization.enum_(["created_before", "created_after"]);

export declare namespace When {
    type Raw = "created_before" | "created_after";
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalTranscriptionMetadataNerPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TranscriptionMetadata } from "./TranscriptionMetadata";
import { GroupedPredictionsNerPrediction } from "./GroupedPredictionsNerPrediction";

export const PredictionsOptionalTranscriptionMetadataNerPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.PredictionsOptionalTranscriptionMetadataNerPrediction.Raw,
    Hume.expressionMeasurement.batch.PredictionsOptionalTranscriptionMetadataNerPrediction
> = core.serialization.object({
    metadata: TranscriptionMetadata.optional(),
    groupedPredictions: core.serialization.property(
        "grouped_predictions",
        core.serialization.list(GroupedPredictionsNerPrediction)
    ),
});

export declare namespace PredictionsOptionalTranscriptionMetadataNerPrediction {
    interface Raw {
        metadata?: TranscriptionMetadata.Raw | null;
        grouped_predictions: GroupedPredictionsNerPrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CompletedTlInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CompletedTlInference: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CompletedTlInference.Raw,
    Hume.expressionMeasurement.batch.CompletedTlInference
> = core.serialization.object({
    createdTimestampMs: core.serialization.property("created_timestamp_ms", core.serialization.number()),
    startedTimestampMs: core.serialization.property("started_timestamp_ms", core.serialization.number()),
    endedTimestampMs: core.serialization.property("ended_timestamp_ms", core.serialization.number()),
    numPredictions: core.serialization.property("num_predictions", core.serialization.number()),
    numErrors: core.serialization.property("num_errors", core.serialization.number()),
});

export declare namespace CompletedTlInference {
    interface Raw {
        created_timestamp_ms: number;
        started_timestamp_ms: number;
        ended_timestamp_ms: number;
        num_predictions: number;
        num_errors: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/BoundingBox.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const BoundingBox: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.BoundingBox.Raw,
    Hume.expressionMeasurement.batch.BoundingBox
> = core.serialization.object({
    x: core.serialization.number(),
    y: core.serialization.number(),
    w: core.serialization.number(),
    h: core.serialization.number(),
});

export declare namespace BoundingBox {
    interface Raw {
        x: number;
        y: number;
        w: number;
        h: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TextSource.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TextSource: core.serialization.Schema<
    serializers.expressionMeasurement.batch.TextSource.Raw,
    Hume.expressionMeasurement.batch.TextSource
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace TextSource {
    type Raw = Record<string, unknown>;
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Face.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Unconfigurable } from "./Unconfigurable";

export const Face: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Face.Raw,
    Hume.expressionMeasurement.batch.Face
> = core.serialization.object({
    fpsPred: core.serialization.property("fps_pred", core.serialization.number().optional()),
    probThreshold: core.serialization.property("prob_threshold", core.serialization.number().optional()),
    identifyFaces: core.serialization.property("identify_faces", core.serialization.boolean().optional()),
    minFaceSize: core.serialization.property("min_face_size", core.serialization.number().optional()),
    facs: Unconfigurable.optional(),
    descriptions: Unconfigurable.optional(),
    saveFaces: core.serialization.property("save_faces", core.serialization.boolean().optional()),
});

export declare namespace Face {
    interface Raw {
        fps_pred?: number | null;
        prob_threshold?: number | null;
        identify_faces?: boolean | null;
        min_face_size?: number | null;
        facs?: Unconfigurable.Raw | null;
        descriptions?: Unconfigurable.Raw | null;
        save_faces?: boolean | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TranscriptionMetadata.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Bcp47Tag } from "./Bcp47Tag";

export const TranscriptionMetadata: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TranscriptionMetadata.Raw,
    Hume.expressionMeasurement.batch.TranscriptionMetadata
> = core.serialization.object({
    confidence: core.serialization.number(),
    detectedLanguage: core.serialization.property("detected_language", Bcp47Tag.optional()),
});

export declare namespace TranscriptionMetadata {
    interface Raw {
        confidence: number;
        detected_language?: Bcp47Tag.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Source.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SourceUrl } from "./SourceUrl";
import { SourceFile } from "./SourceFile";
import { SourceTextSource } from "./SourceTextSource";

export const Source: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Source.Raw,
    Hume.expressionMeasurement.batch.Source
> = core.serialization
    .union("type", {
        url: SourceUrl,
        file: SourceFile,
        text: SourceTextSource,
    })
    .transform<Hume.expressionMeasurement.batch.Source>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Source {
    type Raw = Source.Url | Source.File | Source.Text;

    interface Url extends SourceUrl.Raw {
        type: "url";
    }

    interface File extends SourceFile.Raw {
        type: "file";
    }

    interface Text extends SourceTextSource.Raw {
        type: "text";
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Error_.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Error_: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Error_.Raw,
    Hume.expressionMeasurement.batch.Error_
> = core.serialization.object({
    message: core.serialization.string(),
    file: core.serialization.string(),
});

export declare namespace Error_ {
    interface Raw {
        message: string;
        file: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Tag.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Tag: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Tag.Raw,
    Hume.expressionMeasurement.batch.Tag
> = core.serialization.object({
    key: core.serialization.string(),
    value: core.serialization.string(),
});

export declare namespace Tag {
    interface Raw {
        key: string;
        value: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Status.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Status: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Status.Raw,
    Hume.expressionMeasurement.batch.Status
> = core.serialization.enum_(["QUEUED", "IN_PROGRESS", "COMPLETED", "FAILED"]);

export declare namespace Status {
    type Raw = "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateEmbeddingGenerationCompletedEmbeddingGeneration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CompletedEmbeddingGeneration } from "./CompletedEmbeddingGeneration";

export const StateEmbeddingGenerationCompletedEmbeddingGeneration: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateEmbeddingGenerationCompletedEmbeddingGeneration.Raw,
    Hume.expressionMeasurement.batch.StateEmbeddingGenerationCompletedEmbeddingGeneration
> = core.serialization.object({}).extend(CompletedEmbeddingGeneration);

export declare namespace StateEmbeddingGenerationCompletedEmbeddingGeneration {
    interface Raw extends CompletedEmbeddingGeneration.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Dataset.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { DatasetId } from "./DatasetId";
import { DatasetVersionId } from "./DatasetVersionId";

export const Dataset: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Dataset.Raw,
    Hume.expressionMeasurement.batch.Dataset
> = core.serialization.undiscriminatedUnion([DatasetId, DatasetVersionId]);

export declare namespace Dataset {
    type Raw = DatasetId.Raw | DatasetVersionId.Raw;
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CompletedEmbeddingGeneration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CompletedEmbeddingGeneration: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CompletedEmbeddingGeneration.Raw,
    Hume.expressionMeasurement.batch.CompletedEmbeddingGeneration
> = core.serialization.object({
    createdTimestampMs: core.serialization.property("created_timestamp_ms", core.serialization.number()),
    startedTimestampMs: core.serialization.property("started_timestamp_ms", core.serialization.number()),
    endedTimestampMs: core.serialization.property("ended_timestamp_ms", core.serialization.number()),
});

export declare namespace CompletedEmbeddingGeneration {
    interface Raw {
        created_timestamp_ms: number;
        started_timestamp_ms: number;
        ended_timestamp_ms: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateTraining.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StateTrainingQueued } from "./StateTrainingQueued";
import { StateTrainingInProgress } from "./StateTrainingInProgress";
import { StateTrainingCompletedTraining } from "./StateTrainingCompletedTraining";
import { StateTrainingFailed } from "./StateTrainingFailed";

export const StateTraining: core.serialization.Schema<
    serializers.expressionMeasurement.batch.StateTraining.Raw,
    Hume.expressionMeasurement.batch.StateTraining
> = core.serialization
    .union("status", {
        QUEUED: StateTrainingQueued,
        IN_PROGRESS: StateTrainingInProgress,
        COMPLETED: StateTrainingCompletedTraining,
        FAILED: StateTrainingFailed,
    })
    .transform<Hume.expressionMeasurement.batch.StateTraining>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace StateTraining {
    type Raw = StateTraining.Queued | StateTraining.InProgress | StateTraining.Completed | StateTraining.Failed;

    interface Queued extends StateTrainingQueued.Raw {
        status: "QUEUED";
    }

    interface InProgress extends StateTrainingInProgress.Raw {
        status: "IN_PROGRESS";
    }

    interface Completed extends StateTrainingCompletedTraining.Raw {
        status: "COMPLETED";
    }

    interface Failed extends StateTrainingFailed.Raw {
        status: "FAILED";
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Prosody.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Granularity } from "./Granularity";
import { Window } from "./Window";

export const Prosody: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Prosody.Raw,
    Hume.expressionMeasurement.batch.Prosody
> = core.serialization.object({
    granularity: Granularity.optional(),
    window: Window.optional(),
    identifySpeakers: core.serialization.property("identify_speakers", core.serialization.boolean().optional()),
});

export declare namespace Prosody {
    interface Raw {
        granularity?: Granularity.Raw | null;
        window?: Window.Raw | null;
        identify_speakers?: boolean | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TlInferenceSourcePredictResult.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Source } from "./Source";
import { TlInferenceResults } from "./TlInferenceResults";

export const TlInferenceSourcePredictResult: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TlInferenceSourcePredictResult.Raw,
    Hume.expressionMeasurement.batch.TlInferenceSourcePredictResult
> = core.serialization.object({
    source: Source,
    results: TlInferenceResults.optional(),
    error: core.serialization.string().optional(),
});

export declare namespace TlInferenceSourcePredictResult {
    interface Raw {
        source: Source.Raw;
        results?: TlInferenceResults.Raw | null;
        error?: string | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Failed.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Failed: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Failed.Raw,
    Hume.expressionMeasurement.batch.Failed
> = core.serialization.object({
    createdTimestampMs: core.serialization.property("created_timestamp_ms", core.serialization.number()),
    startedTimestampMs: core.serialization.property("started_timestamp_ms", core.serialization.number()),
    endedTimestampMs: core.serialization.property("ended_timestamp_ms", core.serialization.number()),
    message: core.serialization.string(),
});

export declare namespace Failed {
    interface Raw {
        created_timestamp_ms: number;
        started_timestamp_ms: number;
        ended_timestamp_ms: number;
        message: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/InferenceBaseRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Models } from "./Models";
import { Transcription } from "./Transcription";

export const InferenceBaseRequest: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.InferenceBaseRequest.Raw,
    Hume.expressionMeasurement.batch.InferenceBaseRequest
> = core.serialization.object({
    models: Models.optional(),
    transcription: Transcription.optional(),
    urls: core.serialization.list(core.serialization.string()).optional(),
    text: core.serialization.list(core.serialization.string()).optional(),
    callbackUrl: core.serialization.property("callback_url", core.serialization.string().optional()),
    notify: core.serialization.boolean().optional(),
});

export declare namespace InferenceBaseRequest {
    interface Raw {
        models?: Models.Raw | null;
        transcription?: Transcription.Raw | null;
        urls?: string[] | null;
        text?: string[] | null;
        callback_url?: string | null;
        notify?: boolean | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/LanguagePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PositionInterval } from "./PositionInterval";
import { TimeInterval } from "./TimeInterval";
import { EmotionScore } from "./EmotionScore";
import { SentimentScore } from "./SentimentScore";
import { ToxicityScore } from "./ToxicityScore";

export const LanguagePrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.LanguagePrediction.Raw,
    Hume.expressionMeasurement.batch.LanguagePrediction
> = core.serialization.object({
    text: core.serialization.string(),
    position: PositionInterval,
    time: TimeInterval.optional(),
    confidence: core.serialization.number().optional(),
    speakerConfidence: core.serialization.property("speaker_confidence", core.serialization.number().optional()),
    emotions: core.serialization.list(EmotionScore),
    sentiment: core.serialization.list(SentimentScore).optional(),
    toxicity: core.serialization.list(ToxicityScore).optional(),
});

export declare namespace LanguagePrediction {
    interface Raw {
        text: string;
        position: PositionInterval.Raw;
        time?: TimeInterval.Raw | null;
        confidence?: number | null;
        speaker_confidence?: number | null;
        emotions: EmotionScore.Raw[];
        sentiment?: SentimentScore.Raw[] | null;
        toxicity?: ToxicityScore.Raw[] | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateTrainingInProgress.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InProgress } from "./InProgress";

export const StateTrainingInProgress: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateTrainingInProgress.Raw,
    Hume.expressionMeasurement.batch.StateTrainingInProgress
> = core.serialization.object({}).extend(InProgress);

export declare namespace StateTrainingInProgress {
    interface Raw extends InProgress.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Granularity.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Granularity: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Granularity.Raw,
    Hume.expressionMeasurement.batch.Granularity
> = core.serialization.enum_(["word", "sentence", "utterance", "conversational_turn"]);

export declare namespace Granularity {
    type Raw = "word" | "sentence" | "utterance" | "conversational_turn";
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsProsodyPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ProsodyPrediction } from "./ProsodyPrediction";

export const GroupedPredictionsProsodyPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.GroupedPredictionsProsodyPrediction.Raw,
    Hume.expressionMeasurement.batch.GroupedPredictionsProsodyPrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(ProsodyPrediction),
});

export declare namespace GroupedPredictionsProsodyPrediction {
    interface Raw {
        id: string;
        predictions: ProsodyPrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Type.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Type: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Type.Raw,
    Hume.expressionMeasurement.batch.Type
> = core.serialization.enum_(["EMBEDDING_GENERATION", "INFERENCE", "TL_INFERENCE", "TRAINING"]);

export declare namespace Type {
    type Raw = "EMBEDDING_GENERATION" | "INFERENCE" | "TL_INFERENCE" | "TRAINING";
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Target.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Target: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Target.Raw,
    Hume.expressionMeasurement.batch.Target
> = core.serialization.undiscriminatedUnion([
    core.serialization.number(),
    core.serialization.number(),
    core.serialization.string(),
]);

export declare namespace Target {
    type Raw = number | number | string;
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/ToxicityScore.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ToxicityScore: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.ToxicityScore.Raw,
    Hume.expressionMeasurement.batch.ToxicityScore
> = core.serialization.object({
    name: core.serialization.string(),
    score: core.serialization.number(),
});

export declare namespace ToxicityScore {
    interface Raw {
        name: string;
        score: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Models.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Face } from "./Face";
import { Unconfigurable } from "./Unconfigurable";
import { Prosody } from "./Prosody";
import { Language } from "./Language";
import { Ner } from "./Ner";

export const Models: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Models.Raw,
    Hume.expressionMeasurement.batch.Models
> = core.serialization.object({
    face: Face.optional(),
    burst: Unconfigurable.optional(),
    prosody: Prosody.optional(),
    language: Language.optional(),
    ner: Ner.optional(),
    facemesh: Unconfigurable.optional(),
});

export declare namespace Models {
    interface Raw {
        face?: Face.Raw | null;
        burst?: Unconfigurable.Raw | null;
        prosody?: Prosody.Raw | null;
        language?: Language.Raw | null;
        ner?: Ner.Raw | null;
        facemesh?: Unconfigurable.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsNerPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NerPrediction } from "./NerPrediction";

export const GroupedPredictionsNerPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.GroupedPredictionsNerPrediction.Raw,
    Hume.expressionMeasurement.batch.GroupedPredictionsNerPrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(NerPrediction),
});

export declare namespace GroupedPredictionsNerPrediction {
    interface Raw {
        id: string;
        predictions: NerPrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TlInferenceResults.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TlInferencePrediction } from "./TlInferencePrediction";
import { Error_ } from "./Error_";

export const TlInferenceResults: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TlInferenceResults.Raw,
    Hume.expressionMeasurement.batch.TlInferenceResults
> = core.serialization.object({
    predictions: core.serialization.list(TlInferencePrediction),
    errors: core.serialization.list(Error_),
});

export declare namespace TlInferenceResults {
    interface Raw {
        predictions: TlInferencePrediction.Raw[];
        errors: Error_.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/ProsodyPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TimeInterval } from "./TimeInterval";
import { EmotionScore } from "./EmotionScore";

export const ProsodyPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.ProsodyPrediction.Raw,
    Hume.expressionMeasurement.batch.ProsodyPrediction
> = core.serialization.object({
    text: core.serialization.string().optional(),
    time: TimeInterval,
    confidence: core.serialization.number().optional(),
    speakerConfidence: core.serialization.property("speaker_confidence", core.serialization.number().optional()),
    emotions: core.serialization.list(EmotionScore),
});

export declare namespace ProsodyPrediction {
    interface Raw {
        text?: string | null;
        time: TimeInterval.Raw;
        confidence?: number | null;
        speaker_confidence?: number | null;
        emotions: EmotionScore.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/FacemeshPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EmotionScore } from "./EmotionScore";

export const FacemeshPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.FacemeshPrediction.Raw,
    Hume.expressionMeasurement.batch.FacemeshPrediction
> = core.serialization.object({
    emotions: core.serialization.list(EmotionScore),
});

export declare namespace FacemeshPrediction {
    interface Raw {
        emotions: EmotionScore.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TimeInterval.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TimeInterval: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TimeInterval.Raw,
    Hume.expressionMeasurement.batch.TimeInterval
> = core.serialization.object({
    begin: core.serialization.number(),
    end: core.serialization.number(),
});

export declare namespace TimeInterval {
    interface Raw {
        begin: number;
        end: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/JobEmbeddingGeneration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EmbeddingGenerationBaseRequest } from "./EmbeddingGenerationBaseRequest";
import { StateEmbeddingGeneration } from "./StateEmbeddingGeneration";

export const JobEmbeddingGeneration: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.JobEmbeddingGeneration.Raw,
    Hume.expressionMeasurement.batch.JobEmbeddingGeneration
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string()),
    userId: core.serialization.property("user_id", core.serialization.string()),
    request: EmbeddingGenerationBaseRequest,
    state: StateEmbeddingGeneration,
});

export declare namespace JobEmbeddingGeneration {
    interface Raw {
        job_id: string;
        user_id: string;
        request: EmbeddingGenerationBaseRequest.Raw;
        state: StateEmbeddingGeneration.Raw;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Direction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Direction: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Direction.Raw,
    Hume.expressionMeasurement.batch.Direction
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace Direction {
    type Raw = "asc" | "desc";
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateTlInferenceCompletedTlInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CompletedTlInference } from "./CompletedTlInference";

export const StateTlInferenceCompletedTlInference: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateTlInferenceCompletedTlInference.Raw,
    Hume.expressionMeasurement.batch.StateTlInferenceCompletedTlInference
> = core.serialization.object({}).extend(CompletedTlInference);

export declare namespace StateTlInferenceCompletedTlInference {
    interface Raw extends CompletedTlInference.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/InferenceRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Models } from "./Models";
import { Transcription } from "./Transcription";
import { File_ } from "./File_";

export const InferenceRequest: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.InferenceRequest.Raw,
    Hume.expressionMeasurement.batch.InferenceRequest
> = core.serialization.object({
    models: Models.optional(),
    transcription: Transcription.optional(),
    urls: core.serialization.list(core.serialization.string()).optional(),
    text: core.serialization.list(core.serialization.string()).optional(),
    callbackUrl: core.serialization.property("callback_url", core.serialization.string().optional()),
    notify: core.serialization.boolean().optional(),
    files: core.serialization.list(File_),
});

export declare namespace InferenceRequest {
    interface Raw {
        models?: Models.Raw | null;
        transcription?: Transcription.Raw | null;
        urls?: string[] | null;
        text?: string[] | null;
        callback_url?: string | null;
        notify?: boolean | null;
        files: File_.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateTlInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StateTlInferenceQueued } from "./StateTlInferenceQueued";
import { StateTlInferenceInProgress } from "./StateTlInferenceInProgress";
import { StateTlInferenceCompletedTlInference } from "./StateTlInferenceCompletedTlInference";
import { StateTlInferenceFailed } from "./StateTlInferenceFailed";

export const StateTlInference: core.serialization.Schema<
    serializers.expressionMeasurement.batch.StateTlInference.Raw,
    Hume.expressionMeasurement.batch.StateTlInference
> = core.serialization
    .union("status", {
        QUEUED: StateTlInferenceQueued,
        IN_PROGRESS: StateTlInferenceInProgress,
        COMPLETED: StateTlInferenceCompletedTlInference,
        FAILED: StateTlInferenceFailed,
    })
    .transform<Hume.expressionMeasurement.batch.StateTlInference>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace StateTlInference {
    type Raw =
        | StateTlInference.Queued
        | StateTlInference.InProgress
        | StateTlInference.Completed
        | StateTlInference.Failed;

    interface Queued extends StateTlInferenceQueued.Raw {
        status: "QUEUED";
    }

    interface InProgress extends StateTlInferenceInProgress.Raw {
        status: "IN_PROGRESS";
    }

    interface Completed extends StateTlInferenceCompletedTlInference.Raw {
        status: "COMPLETED";
    }

    interface Failed extends StateTlInferenceFailed.Raw {
        status: "FAILED";
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CustomModelVersionId.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CustomModelVersionId: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CustomModelVersionId.Raw,
    Hume.expressionMeasurement.batch.CustomModelVersionId
> = core.serialization.object({
    versionId: core.serialization.property("version_id", core.serialization.string()),
});

export declare namespace CustomModelVersionId {
    interface Raw {
        version_id: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalNullFacemeshPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Null } from "./Null";
import { GroupedPredictionsFacemeshPrediction } from "./GroupedPredictionsFacemeshPrediction";

export const PredictionsOptionalNullFacemeshPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.PredictionsOptionalNullFacemeshPrediction.Raw,
    Hume.expressionMeasurement.batch.PredictionsOptionalNullFacemeshPrediction
> = core.serialization.object({
    metadata: Null.optional(),
    groupedPredictions: core.serialization.property(
        "grouped_predictions",
        core.serialization.list(GroupedPredictionsFacemeshPrediction)
    ),
});

export declare namespace PredictionsOptionalNullFacemeshPrediction {
    interface Raw {
        metadata?: Null.Raw | null;
        grouped_predictions: GroupedPredictionsFacemeshPrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/InferencePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ModelsPredictions } from "./ModelsPredictions";

export const InferencePrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.InferencePrediction.Raw,
    Hume.expressionMeasurement.batch.InferencePrediction
> = core.serialization.object({
    file: core.serialization.string(),
    models: ModelsPredictions,
});

export declare namespace InferencePrediction {
    interface Raw {
        file: string;
        models: ModelsPredictions.Raw;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/EvaluationArgs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ValidationArgs } from "./ValidationArgs";

export const EvaluationArgs: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.EvaluationArgs.Raw,
    Hume.expressionMeasurement.batch.EvaluationArgs
> = core.serialization.object({
    validation: ValidationArgs.optional(),
});

export declare namespace EvaluationArgs {
    interface Raw {
        validation?: ValidationArgs.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateTlInferenceFailed.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Failed } from "./Failed";

export const StateTlInferenceFailed: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateTlInferenceFailed.Raw,
    Hume.expressionMeasurement.batch.StateTlInferenceFailed
> = core.serialization.object({}).extend(Failed);

export declare namespace StateTlInferenceFailed {
    interface Raw extends Failed.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TlInferenceBaseRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CustomModel } from "./CustomModel";

export const TlInferenceBaseRequest: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TlInferenceBaseRequest.Raw,
    Hume.expressionMeasurement.batch.TlInferenceBaseRequest
> = core.serialization.object({
    customModel: core.serialization.property("custom_model", CustomModel),
    urls: core.serialization.list(core.serialization.string()).optional(),
    callbackUrl: core.serialization.property("callback_url", core.serialization.string().optional()),
    notify: core.serialization.boolean().optional(),
});

export declare namespace TlInferenceBaseRequest {
    interface Raw {
        custom_model: CustomModel.Raw;
        urls?: string[] | null;
        callback_url?: string | null;
        notify?: boolean | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CustomModelId.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CustomModelId: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CustomModelId.Raw,
    Hume.expressionMeasurement.batch.CustomModelId
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace CustomModelId {
    interface Raw {
        id: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/JobTlInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TlInferenceBaseRequest } from "./TlInferenceBaseRequest";
import { StateTlInference } from "./StateTlInference";

export const JobTlInference: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.JobTlInference.Raw,
    Hume.expressionMeasurement.batch.JobTlInference
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string()),
    userId: core.serialization.property("user_id", core.serialization.string()),
    request: TlInferenceBaseRequest,
    state: StateTlInference,
});

export declare namespace JobTlInference {
    interface Raw {
        job_id: string;
        user_id: string;
        request: TlInferenceBaseRequest.Raw;
        state: StateTlInference.Raw;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Url.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Url: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Url.Raw,
    Hume.expressionMeasurement.batch.Url
> = core.serialization.object({
    url: core.serialization.string(),
});

export declare namespace Url {
    interface Raw {
        url: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/File_.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const File_: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.File_.Raw,
    Hume.expressionMeasurement.batch.File_
> = core.serialization.object({
    filename: core.serialization.string().optional(),
    contentType: core.serialization.property("content_type", core.serialization.string().optional()),
    md5Sum: core.serialization.property("md5sum", core.serialization.string()),
});

export declare namespace File_ {
    interface Raw {
        filename?: string | null;
        content_type?: string | null;
        md5sum: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/JobTraining.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TrainingBaseRequest } from "./TrainingBaseRequest";
import { StateTraining } from "./StateTraining";

export const JobTraining: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.JobTraining.Raw,
    Hume.expressionMeasurement.batch.JobTraining
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string()),
    userId: core.serialization.property("user_id", core.serialization.string()),
    request: TrainingBaseRequest,
    state: StateTraining,
});

export declare namespace JobTraining {
    interface Raw {
        job_id: string;
        user_id: string;
        request: TrainingBaseRequest.Raw;
        state: StateTraining.Raw;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/DatasetId.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const DatasetId: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.DatasetId.Raw,
    Hume.expressionMeasurement.batch.DatasetId
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace DatasetId {
    interface Raw {
        id: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Window.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Window: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Window.Raw,
    Hume.expressionMeasurement.batch.Window
> = core.serialization.object({
    length: core.serialization.number().optional(),
    step: core.serialization.number().optional(),
});

export declare namespace Window {
    interface Raw {
        length?: number | null;
        step?: number | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/NerPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PositionInterval } from "./PositionInterval";
import { TimeInterval } from "./TimeInterval";
import { EmotionScore } from "./EmotionScore";

export const NerPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.NerPrediction.Raw,
    Hume.expressionMeasurement.batch.NerPrediction
> = core.serialization.object({
    entity: core.serialization.string(),
    position: PositionInterval,
    entityConfidence: core.serialization.property("entity_confidence", core.serialization.number()),
    support: core.serialization.number(),
    uri: core.serialization.string(),
    linkWord: core.serialization.property("link_word", core.serialization.string()),
    time: TimeInterval.optional(),
    confidence: core.serialization.number().optional(),
    speakerConfidence: core.serialization.property("speaker_confidence", core.serialization.number().optional()),
    emotions: core.serialization.list(EmotionScore),
});

export declare namespace NerPrediction {
    interface Raw {
        entity: string;
        position: PositionInterval.Raw;
        entity_confidence: number;
        support: number;
        uri: string;
        link_word: string;
        time?: TimeInterval.Raw | null;
        confidence?: number | null;
        speaker_confidence?: number | null;
        emotions: EmotionScore.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/JobInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InferenceRequest } from "./InferenceRequest";
import { StateInference } from "./StateInference";

export const JobInference: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.JobInference.Raw,
    Hume.expressionMeasurement.batch.JobInference
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string()),
    request: InferenceRequest,
    state: StateInference,
});

export declare namespace JobInference {
    interface Raw {
        job_id: string;
        request: InferenceRequest.Raw;
        state: StateInference.Raw;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TrainingCustomModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TrainingCustomModel: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TrainingCustomModel.Raw,
    Hume.expressionMeasurement.batch.TrainingCustomModel
> = core.serialization.object({
    id: core.serialization.string(),
    versionId: core.serialization.property("version_id", core.serialization.string().optional()),
});

export declare namespace TrainingCustomModel {
    interface Raw {
        id: string;
        version_id?: string | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateEmbeddingGenerationInProgress.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InProgress } from "./InProgress";

export const StateEmbeddingGenerationInProgress: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateEmbeddingGenerationInProgress.Raw,
    Hume.expressionMeasurement.batch.StateEmbeddingGenerationInProgress
> = core.serialization.object({}).extend(InProgress);

export declare namespace StateEmbeddingGenerationInProgress {
    interface Raw extends InProgress.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/DescriptionsScore.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const DescriptionsScore: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.DescriptionsScore.Raw,
    Hume.expressionMeasurement.batch.DescriptionsScore
> = core.serialization.object({
    name: core.serialization.string(),
    score: core.serialization.number(),
});

export declare namespace DescriptionsScore {
    interface Raw {
        name: string;
        score: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/SourceFile.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { File_ } from "./File_";

export const SourceFile: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.SourceFile.Raw,
    Hume.expressionMeasurement.batch.SourceFile
> = core.serialization.object({}).extend(File_);

export declare namespace SourceFile {
    interface Raw extends File_.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { QueuedState } from "./QueuedState";
import { InProgressState } from "./InProgressState";
import { CompletedState } from "./CompletedState";
import { FailedState } from "./FailedState";

export const StateInference: core.serialization.Schema<
    serializers.expressionMeasurement.batch.StateInference.Raw,
    Hume.expressionMeasurement.batch.StateInference
> = core.serialization
    .union("status", {
        QUEUED: QueuedState,
        IN_PROGRESS: InProgressState,
        COMPLETED: CompletedState,
        FAILED: FailedState,
    })
    .transform<Hume.expressionMeasurement.batch.StateInference>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace StateInference {
    type Raw = StateInference.Queued | StateInference.InProgress | StateInference.Completed | StateInference.Failed;

    interface Queued extends QueuedState.Raw {
        status: "QUEUED";
    }

    interface InProgress extends InProgressState.Raw {
        status: "IN_PROGRESS";
    }

    interface Completed extends CompletedState.Raw {
        status: "COMPLETED";
    }

    interface Failed extends FailedState.Raw {
        status: "FAILED";
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Bcp47Tag.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Bcp47Tag: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Bcp47Tag.Raw,
    Hume.expressionMeasurement.batch.Bcp47Tag
> = core.serialization.enum_([
    "zh",
    "da",
    "nl",
    "en",
    "en-AU",
    "en-IN",
    "en-NZ",
    "en-GB",
    "fr",
    "fr-CA",
    "de",
    "hi",
    "hi-Latn",
    "id",
    "it",
    "ja",
    "ko",
    "no",
    "pl",
    "pt",
    "pt-BR",
    "pt-PT",
    "ru",
    "es",
    "es-419",
    "sv",
    "ta",
    "tr",
    "uk",
]);

export declare namespace Bcp47Tag {
    type Raw =
        | "zh"
        | "da"
        | "nl"
        | "en"
        | "en-AU"
        | "en-IN"
        | "en-NZ"
        | "en-GB"
        | "fr"
        | "fr-CA"
        | "de"
        | "hi"
        | "hi-Latn"
        | "id"
        | "it"
        | "ja"
        | "ko"
        | "no"
        | "pl"
        | "pt"
        | "pt-BR"
        | "pt-PT"
        | "ru"
        | "es"
        | "es-419"
        | "sv"
        | "ta"
        | "tr"
        | "uk";
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/DatasetVersionId.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const DatasetVersionId: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.DatasetVersionId.Raw,
    Hume.expressionMeasurement.batch.DatasetVersionId
> = core.serialization.object({
    versionId: core.serialization.property("version_id", core.serialization.string()),
});

export declare namespace DatasetVersionId {
    interface Raw {
        version_id: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateTrainingQueued.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Queued } from "./Queued";

export const StateTrainingQueued: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateTrainingQueued.Raw,
    Hume.expressionMeasurement.batch.StateTrainingQueued
> = core.serialization.object({}).extend(Queued);

export declare namespace StateTrainingQueued {
    interface Raw extends Queued.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/InferenceSourcePredictResult.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Source } from "./Source";
import { InferenceResults } from "./InferenceResults";

export const InferenceSourcePredictResult: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.InferenceSourcePredictResult.Raw,
    Hume.expressionMeasurement.batch.InferenceSourcePredictResult
> = core.serialization.object({
    source: Source,
    results: InferenceResults.optional(),
    error: core.serialization.string().optional(),
});

export declare namespace InferenceSourcePredictResult {
    interface Raw {
        source: Source.Raw;
        results?: InferenceResults.Raw | null;
        error?: string | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Task.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TaskClassification } from "./TaskClassification";
import { TaskRegression } from "./TaskRegression";

export const Task: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Task.Raw,
    Hume.expressionMeasurement.batch.Task
> = core.serialization
    .union("type", {
        classification: TaskClassification,
        regression: TaskRegression,
    })
    .transform<Hume.expressionMeasurement.batch.Task>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Task {
    type Raw = Task.Classification | Task.Regression;

    interface Classification extends TaskClassification.Raw {
        type: "classification";
    }

    interface Regression extends TaskRegression.Raw {
        type: "regression";
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TaskClassification.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TaskClassification: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TaskClassification.Raw,
    Hume.expressionMeasurement.batch.TaskClassification
> = core.serialization.object({});

export declare namespace TaskClassification {
    interface Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateTrainingFailed.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Failed } from "./Failed";

export const StateTrainingFailed: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateTrainingFailed.Raw,
    Hume.expressionMeasurement.batch.StateTrainingFailed
> = core.serialization.object({}).extend(Failed);

export declare namespace StateTrainingFailed {
    interface Raw extends Failed.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/FailedState.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Failed } from "./Failed";

export const FailedState: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.FailedState.Raw,
    Hume.expressionMeasurement.batch.FailedState
> = core.serialization.object({}).extend(Failed);

export declare namespace FailedState {
    interface Raw extends Failed.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/RegistryFileDetail.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const RegistryFileDetail: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.RegistryFileDetail.Raw,
    Hume.expressionMeasurement.batch.RegistryFileDetail
> = core.serialization.object({
    fileId: core.serialization.property("file_id", core.serialization.string()),
    fileUrl: core.serialization.property("file_url", core.serialization.string()),
});

export declare namespace RegistryFileDetail {
    interface Raw {
        file_id: string;
        file_url: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/index.ts

```typescript
export * from "./Alternative";
export * from "./Bcp47Tag";
export * from "./BoundingBox";
export * from "./BurstPrediction";
export * from "./Classification";
export * from "./CompletedEmbeddingGeneration";
export * from "./CompletedInference";
export * from "./CompletedTlInference";
export * from "./CompletedTraining";
export * from "./CustomModelPrediction";
export * from "./CustomModelRequest";
export * from "./Dataset";
export * from "./DatasetId";
export * from "./DatasetVersionId";
export * from "./DescriptionsScore";
export * from "./Direction";
export * from "./EmbeddingGenerationBaseRequest";
export * from "./EmotionScore";
export * from "./Error_";
export * from "./EvaluationArgs";
export * from "./Face";
export * from "./FacePrediction";
export * from "./FacemeshPrediction";
export * from "./FacsScore";
export * from "./Failed";
export * from "./File_";
export * from "./Granularity";
export * from "./GroupedPredictionsBurstPrediction";
export * from "./GroupedPredictionsFacePrediction";
export * from "./GroupedPredictionsFacemeshPrediction";
export * from "./GroupedPredictionsLanguagePrediction";
export * from "./GroupedPredictionsNerPrediction";
export * from "./GroupedPredictionsProsodyPrediction";
export * from "./InProgress";
export * from "./InferenceBaseRequest";
export * from "./InferencePrediction";
export * from "./InferenceRequest";
export * from "./InferenceResults";
export * from "./InferenceSourcePredictResult";
export * from "./JobEmbeddingGeneration";
export * from "./JobInference";
export * from "./JobTlInference";
export * from "./JobTraining";
export * from "./JobId";
export * from "./Language";
export * from "./LanguagePrediction";
export * from "./Models";
export * from "./ModelsPredictions";
export * from "./Ner";
export * from "./NerPrediction";
export * from "./Null";
export * from "./PositionInterval";
export * from "./PredictionsOptionalNullBurstPrediction";
export * from "./PredictionsOptionalNullFacePrediction";
export * from "./PredictionsOptionalNullFacemeshPrediction";
export * from "./PredictionsOptionalTranscriptionMetadataLanguagePrediction";
export * from "./PredictionsOptionalTranscriptionMetadataNerPrediction";
export * from "./PredictionsOptionalTranscriptionMetadataProsodyPrediction";
export * from "./Prosody";
export * from "./ProsodyPrediction";
export * from "./Queued";
export * from "./RegistryFileDetail";
export * from "./Regression";
export * from "./SentimentScore";
export * from "./SortBy";
export * from "./Source";
export * from "./SourceFile";
export * from "./SourceTextSource";
export * from "./SourceUrl";
export * from "./Url";
export * from "./StateEmbeddingGeneration";
export * from "./StateEmbeddingGenerationCompletedEmbeddingGeneration";
export * from "./StateEmbeddingGenerationFailed";
export * from "./StateEmbeddingGenerationInProgress";
export * from "./StateEmbeddingGenerationQueued";
export * from "./StateInference";
export * from "./CompletedState";
export * from "./FailedState";
export * from "./InProgressState";
export * from "./QueuedState";
export * from "./StateTlInference";
export * from "./StateTlInferenceCompletedTlInference";
export * from "./StateTlInferenceFailed";
export * from "./StateTlInferenceInProgress";
export * from "./StateTlInferenceQueued";
export * from "./StateTraining";
export * from "./StateTrainingCompletedTraining";
export * from "./StateTrainingFailed";
export * from "./StateTrainingInProgress";
export * from "./StateTrainingQueued";
export * from "./Status";
export * from "./TlInferencePrediction";
export * from "./TlInferenceResults";
export * from "./TlInferenceSourcePredictResult";
export * from "./Tag";
export * from "./Target";
export * from "./Task";
export * from "./TaskClassification";
export * from "./TaskRegression";
export * from "./TextSource";
export * from "./TimeInterval";
export * from "./TlInferenceBaseRequest";
export * from "./CustomModel";
export * from "./CustomModelId";
export * from "./CustomModelVersionId";
export * from "./ToxicityScore";
export * from "./TrainingBaseRequest";
export * from "./TrainingCustomModel";
export * from "./Transcription";
export * from "./TranscriptionMetadata";
export * from "./Type";
export * from "./Unconfigurable";
export * from "./UnionJob";
export * from "./EmbeddingGenerationJob";
export * from "./InferenceJob";
export * from "./CustomModelsInferenceJob";
export * from "./CustomModelsTrainingJob";
export * from "./UnionPredictResult";
export * from "./ValidationArgs";
export * from "./When";
export * from "./Window";

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/BurstPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TimeInterval } from "./TimeInterval";
import { EmotionScore } from "./EmotionScore";
import { DescriptionsScore } from "./DescriptionsScore";

export const BurstPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.BurstPrediction.Raw,
    Hume.expressionMeasurement.batch.BurstPrediction
> = core.serialization.object({
    time: TimeInterval,
    emotions: core.serialization.list(EmotionScore),
    descriptions: core.serialization.list(DescriptionsScore),
});

export declare namespace BurstPrediction {
    interface Raw {
        time: TimeInterval.Raw;
        emotions: EmotionScore.Raw[];
        descriptions: DescriptionsScore.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/SourceTextSource.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const SourceTextSource: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.SourceTextSource.Raw,
    Hume.expressionMeasurement.batch.SourceTextSource
> = core.serialization.object({});

export declare namespace SourceTextSource {
    interface Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalNullBurstPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Null } from "./Null";
import { GroupedPredictionsBurstPrediction } from "./GroupedPredictionsBurstPrediction";

export const PredictionsOptionalNullBurstPrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.PredictionsOptionalNullBurstPrediction.Raw,
    Hume.expressionMeasurement.batch.PredictionsOptionalNullBurstPrediction
> = core.serialization.object({
    metadata: Null.optional(),
    groupedPredictions: core.serialization.property(
        "grouped_predictions",
        core.serialization.list(GroupedPredictionsBurstPrediction)
    ),
});

export declare namespace PredictionsOptionalNullBurstPrediction {
    interface Raw {
        metadata?: Null.Raw | null;
        grouped_predictions: GroupedPredictionsBurstPrediction.Raw[];
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/InProgress.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const InProgress: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.InProgress.Raw,
    Hume.expressionMeasurement.batch.InProgress
> = core.serialization.object({
    createdTimestampMs: core.serialization.property("created_timestamp_ms", core.serialization.number()),
    startedTimestampMs: core.serialization.property("started_timestamp_ms", core.serialization.number()),
});

export declare namespace InProgress {
    interface Raw {
        created_timestamp_ms: number;
        started_timestamp_ms: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateTlInferenceInProgress.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InProgress } from "./InProgress";

export const StateTlInferenceInProgress: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateTlInferenceInProgress.Raw,
    Hume.expressionMeasurement.batch.StateTlInferenceInProgress
> = core.serialization.object({}).extend(InProgress);

export declare namespace StateTlInferenceInProgress {
    interface Raw extends InProgress.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/QueuedState.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Queued } from "./Queued";

export const QueuedState: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.QueuedState.Raw,
    Hume.expressionMeasurement.batch.QueuedState
> = core.serialization.object({}).extend(Queued);

export declare namespace QueuedState {
    interface Raw extends Queued.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Queued.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Queued: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Queued.Raw,
    Hume.expressionMeasurement.batch.Queued
> = core.serialization.object({
    createdTimestampMs: core.serialization.property("created_timestamp_ms", core.serialization.number()),
});

export declare namespace Queued {
    interface Raw {
        created_timestamp_ms: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateEmbeddingGenerationFailed.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Failed } from "./Failed";

export const StateEmbeddingGenerationFailed: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateEmbeddingGenerationFailed.Raw,
    Hume.expressionMeasurement.batch.StateEmbeddingGenerationFailed
> = core.serialization.object({}).extend(Failed);

export declare namespace StateEmbeddingGenerationFailed {
    interface Raw extends Failed.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/InferenceJob.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { JobInference } from "./JobInference";

export const InferenceJob: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.InferenceJob.Raw,
    Hume.expressionMeasurement.batch.InferenceJob
> = core.serialization
    .object({
        type: core.serialization.string(),
    })
    .extend(JobInference);

export declare namespace InferenceJob {
    interface Raw extends JobInference.Raw {
        type: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CompletedState.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CompletedInference } from "./CompletedInference";

export const CompletedState: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CompletedState.Raw,
    Hume.expressionMeasurement.batch.CompletedState
> = core.serialization.object({}).extend(CompletedInference);

export declare namespace CompletedState {
    interface Raw extends CompletedInference.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TlInferencePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CustomModelPrediction } from "./CustomModelPrediction";

export const TlInferencePrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TlInferencePrediction.Raw,
    Hume.expressionMeasurement.batch.TlInferencePrediction
> = core.serialization.object({
    file: core.serialization.string(),
    fileType: core.serialization.property("file_type", core.serialization.string()),
    customModels: core.serialization.property(
        "custom_models",
        core.serialization.record(core.serialization.string(), CustomModelPrediction)
    ),
});

export declare namespace TlInferencePrediction {
    interface Raw {
        file: string;
        file_type: string;
        custom_models: Record<string, CustomModelPrediction.Raw>;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CompletedInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CompletedInference: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CompletedInference.Raw,
    Hume.expressionMeasurement.batch.CompletedInference
> = core.serialization.object({
    createdTimestampMs: core.serialization.property("created_timestamp_ms", core.serialization.number()),
    startedTimestampMs: core.serialization.property("started_timestamp_ms", core.serialization.number()),
    endedTimestampMs: core.serialization.property("ended_timestamp_ms", core.serialization.number()),
    numPredictions: core.serialization.property("num_predictions", core.serialization.number()),
    numErrors: core.serialization.property("num_errors", core.serialization.number()),
});

export declare namespace CompletedInference {
    interface Raw {
        created_timestamp_ms: number;
        started_timestamp_ms: number;
        ended_timestamp_ms: number;
        num_predictions: number;
        num_errors: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateEmbeddingGenerationQueued.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Queued } from "./Queued";

export const StateEmbeddingGenerationQueued: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateEmbeddingGenerationQueued.Raw,
    Hume.expressionMeasurement.batch.StateEmbeddingGenerationQueued
> = core.serialization.object({}).extend(Queued);

export declare namespace StateEmbeddingGenerationQueued {
    interface Raw extends Queued.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CustomModelsTrainingJob.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { JobTraining } from "./JobTraining";

export const CustomModelsTrainingJob: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CustomModelsTrainingJob.Raw,
    Hume.expressionMeasurement.batch.CustomModelsTrainingJob
> = core.serialization
    .object({
        type: core.serialization.string(),
    })
    .extend(JobTraining);

export declare namespace CustomModelsTrainingJob {
    interface Raw extends JobTraining.Raw {
        type: string;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/CustomModelRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Tag } from "./Tag";

export const CustomModelRequest: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.CustomModelRequest.Raw,
    Hume.expressionMeasurement.batch.CustomModelRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    tags: core.serialization.list(Tag).optional(),
});

export declare namespace CustomModelRequest {
    interface Raw {
        name: string;
        description?: string | null;
        tags?: Tag.Raw[] | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Ner.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Ner: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.Ner.Raw,
    Hume.expressionMeasurement.batch.Ner
> = core.serialization.object({
    identifySpeakers: core.serialization.property("identify_speakers", core.serialization.boolean().optional()),
});

export declare namespace Ner {
    interface Raw {
        identify_speakers?: boolean | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/Unconfigurable.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Unconfigurable: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Unconfigurable.Raw,
    Hume.expressionMeasurement.batch.Unconfigurable
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace Unconfigurable {
    type Raw = Record<string, unknown>;
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/TrainingBaseRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CustomModelRequest } from "./CustomModelRequest";
import { Dataset } from "./Dataset";
import { Task } from "./Task";
import { EvaluationArgs } from "./EvaluationArgs";
import { Alternative } from "./Alternative";

export const TrainingBaseRequest: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.TrainingBaseRequest.Raw,
    Hume.expressionMeasurement.batch.TrainingBaseRequest
> = core.serialization.object({
    customModel: core.serialization.property("custom_model", CustomModelRequest),
    dataset: Dataset,
    targetFeature: core.serialization.property("target_feature", core.serialization.string().optional()),
    task: Task.optional(),
    evaluation: EvaluationArgs.optional(),
    alternatives: core.serialization.list(Alternative).optional(),
    callbackUrl: core.serialization.property("callback_url", core.serialization.string().optional()),
    notify: core.serialization.boolean().optional(),
});

export declare namespace TrainingBaseRequest {
    interface Raw {
        custom_model: CustomModelRequest.Raw;
        dataset: Dataset.Raw;
        target_feature?: string | null;
        task?: Task.Raw | null;
        evaluation?: EvaluationArgs.Raw | null;
        alternatives?: Alternative.Raw[] | null;
        callback_url?: string | null;
        notify?: boolean | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/PositionInterval.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const PositionInterval: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.PositionInterval.Raw,
    Hume.expressionMeasurement.batch.PositionInterval
> = core.serialization.object({
    begin: core.serialization.number(),
    end: core.serialization.number(),
});

export declare namespace PositionInterval {
    interface Raw {
        begin: number;
        end: number;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/batch/types/StateTlInferenceQueued.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Queued } from "./Queued";

export const StateTlInferenceQueued: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateTlInferenceQueued.Raw,
    Hume.expressionMeasurement.batch.StateTlInferenceQueued
> = core.serialization.object({}).extend(Queued);

export declare namespace StateTlInferenceQueued {
    interface Raw extends Queued.Raw {}
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/index.ts

```typescript
export * from "./types";

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsBurstPredictionsItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TimeRange } from "./TimeRange";
import { EmotionEmbedding } from "./EmotionEmbedding";
import { EmotionEmbeddingItem } from "./EmotionEmbeddingItem";

export const StreamModelPredictionsBurstPredictionsItem: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsBurstPredictionsItem.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsBurstPredictionsItem
> = core.serialization.object({
    time: TimeRange.optional(),
    emotions: EmotionEmbedding.optional(),
});

export declare namespace StreamModelPredictionsBurstPredictionsItem {
    interface Raw {
        time?: TimeRange.Raw | null;
        emotions?: EmotionEmbedding.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/SentimentItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const SentimentItem: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.SentimentItem.Raw,
    Hume.expressionMeasurement.stream.SentimentItem
> = core.serialization.object({
    name: core.serialization.string().optional(),
    score: core.serialization.number().optional(),
});

export declare namespace SentimentItem {
    interface Raw {
        name?: string | null;
        score?: number | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsLanguage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamModelPredictionsLanguagePredictionsItem } from "./StreamModelPredictionsLanguagePredictionsItem";

export const StreamModelPredictionsLanguage: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsLanguage.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsLanguage
> = core.serialization.object({
    predictions: core.serialization.list(StreamModelPredictionsLanguagePredictionsItem).optional(),
});

export declare namespace StreamModelPredictionsLanguage {
    interface Raw {
        predictions?: StreamModelPredictionsLanguagePredictionsItem.Raw[] | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsProsodyPredictionsItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TimeRange } from "./TimeRange";
import { EmotionEmbedding } from "./EmotionEmbedding";
import { EmotionEmbeddingItem } from "./EmotionEmbeddingItem";

export const StreamModelPredictionsProsodyPredictionsItem: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsProsodyPredictionsItem.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsProsodyPredictionsItem
> = core.serialization.object({
    time: TimeRange.optional(),
    emotions: EmotionEmbedding.optional(),
});

export declare namespace StreamModelPredictionsProsodyPredictionsItem {
    interface Raw {
        time?: TimeRange.Raw | null;
        emotions?: EmotionEmbedding.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamBoundingBox.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const StreamBoundingBox: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamBoundingBox.Raw,
    Hume.expressionMeasurement.stream.StreamBoundingBox
> = core.serialization.object({
    x: core.serialization.number().optional(),
    y: core.serialization.number().optional(),
    w: core.serialization.number().optional(),
    h: core.serialization.number().optional(),
});

export declare namespace StreamBoundingBox {
    interface Raw {
        x?: number | null;
        y?: number | null;
        w?: number | null;
        h?: number | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictions.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamModelPredictionsJobDetails } from "./StreamModelPredictionsJobDetails";
import { StreamModelPredictionsBurst } from "./StreamModelPredictionsBurst";
import { StreamModelPredictionsFace } from "./StreamModelPredictionsFace";
import { StreamModelPredictionsFacemesh } from "./StreamModelPredictionsFacemesh";
import { StreamModelPredictionsLanguage } from "./StreamModelPredictionsLanguage";
import { StreamModelPredictionsProsody } from "./StreamModelPredictionsProsody";

export const StreamModelPredictions: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictions.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictions
> = core.serialization.object({
    payloadId: core.serialization.property("payload_id", core.serialization.string().optional()),
    jobDetails: core.serialization.property("job_details", StreamModelPredictionsJobDetails.optional()),
    burst: StreamModelPredictionsBurst.optional(),
    face: StreamModelPredictionsFace.optional(),
    facemesh: StreamModelPredictionsFacemesh.optional(),
    language: StreamModelPredictionsLanguage.optional(),
    prosody: StreamModelPredictionsProsody.optional(),
});

export declare namespace StreamModelPredictions {
    interface Raw {
        payload_id?: string | null;
        job_details?: StreamModelPredictionsJobDetails.Raw | null;
        burst?: StreamModelPredictionsBurst.Raw | null;
        face?: StreamModelPredictionsFace.Raw | null;
        facemesh?: StreamModelPredictionsFacemesh.Raw | null;
        language?: StreamModelPredictionsLanguage.Raw | null;
        prosody?: StreamModelPredictionsProsody.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/ToxicityItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ToxicityItem: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.ToxicityItem.Raw,
    Hume.expressionMeasurement.stream.ToxicityItem
> = core.serialization.object({
    name: core.serialization.string().optional(),
    score: core.serialization.number().optional(),
});

export declare namespace ToxicityItem {
    interface Raw {
        name?: string | null;
        score?: number | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsJobDetails.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const StreamModelPredictionsJobDetails: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsJobDetails.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsJobDetails
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string().optional()),
});

export declare namespace StreamModelPredictionsJobDetails {
    interface Raw {
        job_id?: string | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelsEndpointPayload.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Config } from "./Config";

export const StreamModelsEndpointPayload: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelsEndpointPayload.Raw,
    Hume.expressionMeasurement.stream.StreamModelsEndpointPayload
> = core.serialization.object({
    data: core.serialization.string().optional(),
    models: Config.optional(),
    streamWindowMs: core.serialization.property("stream_window_ms", core.serialization.number().optional()),
    resetStream: core.serialization.property("reset_stream", core.serialization.boolean().optional()),
    rawText: core.serialization.property("raw_text", core.serialization.boolean().optional()),
    jobDetails: core.serialization.property("job_details", core.serialization.boolean().optional()),
    payloadId: core.serialization.property("payload_id", core.serialization.string().optional()),
});

export declare namespace StreamModelsEndpointPayload {
    interface Raw {
        data?: string | null;
        models?: Config.Raw | null;
        stream_window_ms?: number | null;
        reset_stream?: boolean | null;
        raw_text?: boolean | null;
        job_details?: boolean | null;
        payload_id?: string | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/EmotionEmbedding.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EmotionEmbeddingItem } from "./EmotionEmbeddingItem";

export const EmotionEmbedding: core.serialization.Schema<
    serializers.expressionMeasurement.stream.EmotionEmbedding.Raw,
    Hume.expressionMeasurement.stream.EmotionEmbedding
> = core.serialization.list(EmotionEmbeddingItem);

export declare namespace EmotionEmbedding {
    type Raw = EmotionEmbeddingItem.Raw[];
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsFacemeshPredictionsItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EmotionEmbedding } from "./EmotionEmbedding";
import { EmotionEmbeddingItem } from "./EmotionEmbeddingItem";

export const StreamModelPredictionsFacemeshPredictionsItem: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsFacemeshPredictionsItem.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsFacemeshPredictionsItem
> = core.serialization.object({
    emotions: EmotionEmbedding.optional(),
});

export declare namespace StreamModelPredictionsFacemeshPredictionsItem {
    interface Raw {
        emotions?: EmotionEmbedding.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsFacemesh.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamModelPredictionsFacemeshPredictionsItem } from "./StreamModelPredictionsFacemeshPredictionsItem";

export const StreamModelPredictionsFacemesh: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsFacemesh.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsFacemesh
> = core.serialization.object({
    predictions: core.serialization.list(StreamModelPredictionsFacemeshPredictionsItem).optional(),
});

export declare namespace StreamModelPredictionsFacemesh {
    interface Raw {
        predictions?: StreamModelPredictionsFacemeshPredictionsItem.Raw[] | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamWarningMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamWarningMessageJobDetails } from "./StreamWarningMessageJobDetails";

export const StreamWarningMessage: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamWarningMessage.Raw,
    Hume.expressionMeasurement.stream.StreamWarningMessage
> = core.serialization.object({
    warning: core.serialization.string().optional(),
    code: core.serialization.string().optional(),
    payloadId: core.serialization.property("payload_id", core.serialization.string().optional()),
    jobDetails: core.serialization.property("job_details", StreamWarningMessageJobDetails.optional()),
});

export declare namespace StreamWarningMessage {
    interface Raw {
        warning?: string | null;
        code?: string | null;
        payload_id?: string | null;
        job_details?: StreamWarningMessageJobDetails.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamFace.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const StreamFace: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamFace.Raw,
    Hume.expressionMeasurement.stream.StreamFace
> = core.serialization.object({
    facs: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    descriptions: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    identifyFaces: core.serialization.property("identify_faces", core.serialization.boolean().optional()),
    fpsPred: core.serialization.property("fps_pred", core.serialization.number().optional()),
    probThreshold: core.serialization.property("prob_threshold", core.serialization.number().optional()),
    minFaceSize: core.serialization.property("min_face_size", core.serialization.number().optional()),
});

export declare namespace StreamFace {
    interface Raw {
        facs?: Record<string, unknown> | null;
        descriptions?: Record<string, unknown> | null;
        identify_faces?: boolean | null;
        fps_pred?: number | null;
        prob_threshold?: number | null;
        min_face_size?: number | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/SubscribeEvent.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamModelPredictions } from "./StreamModelPredictions";
import { StreamErrorMessage } from "./StreamErrorMessage";
import { StreamWarningMessage } from "./StreamWarningMessage";

export const SubscribeEvent: core.serialization.Schema<
    serializers.expressionMeasurement.stream.SubscribeEvent.Raw,
    Hume.expressionMeasurement.stream.SubscribeEvent
> = core.serialization.undiscriminatedUnion([StreamModelPredictions, StreamErrorMessage, StreamWarningMessage]);

export declare namespace SubscribeEvent {
    type Raw = StreamModelPredictions.Raw | StreamErrorMessage.Raw | StreamWarningMessage.Raw;
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/Toxicity.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ToxicityItem } from "./ToxicityItem";

export const Toxicity: core.serialization.Schema<
    serializers.expressionMeasurement.stream.Toxicity.Raw,
    Hume.expressionMeasurement.stream.Toxicity
> = core.serialization.list(ToxicityItem);

export declare namespace Toxicity {
    type Raw = ToxicityItem.Raw[];
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamErrorMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { JobDetails } from "./JobDetails";

export const StreamErrorMessage: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamErrorMessage.Raw,
    Hume.expressionMeasurement.stream.StreamErrorMessage
> = core.serialization.object({
    error: core.serialization.string().optional(),
    code: core.serialization.string().optional(),
    payloadId: core.serialization.property("payload_id", core.serialization.string().optional()),
    jobDetails: core.serialization.property("job_details", JobDetails.optional()),
});

export declare namespace StreamErrorMessage {
    interface Raw {
        error?: string | null;
        code?: string | null;
        payload_id?: string | null;
        job_details?: JobDetails.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsLanguagePredictionsItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TextPosition } from "./TextPosition";
import { EmotionEmbedding } from "./EmotionEmbedding";
import { Sentiment } from "./Sentiment";
import { Toxicity } from "./Toxicity";
import { EmotionEmbeddingItem } from "./EmotionEmbeddingItem";
import { SentimentItem } from "./SentimentItem";
import { ToxicityItem } from "./ToxicityItem";

export const StreamModelPredictionsLanguagePredictionsItem: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsLanguagePredictionsItem.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsLanguagePredictionsItem
> = core.serialization.object({
    text: core.serialization.string().optional(),
    position: TextPosition.optional(),
    emotions: EmotionEmbedding.optional(),
    sentiment: Sentiment.optional(),
    toxicity: Toxicity.optional(),
});

export declare namespace StreamModelPredictionsLanguagePredictionsItem {
    interface Raw {
        text?: string | null;
        position?: TextPosition.Raw | null;
        emotions?: EmotionEmbedding.Raw | null;
        sentiment?: Sentiment.Raw | null;
        toxicity?: Toxicity.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamWarningMessageJobDetails.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const StreamWarningMessageJobDetails: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamWarningMessageJobDetails.Raw,
    Hume.expressionMeasurement.stream.StreamWarningMessageJobDetails
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string().optional()),
});

export declare namespace StreamWarningMessageJobDetails {
    interface Raw {
        job_id?: string | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/TimeRange.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TimeRange: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.TimeRange.Raw,
    Hume.expressionMeasurement.stream.TimeRange
> = core.serialization.object({
    begin: core.serialization.number().optional(),
    end: core.serialization.number().optional(),
});

export declare namespace TimeRange {
    interface Raw {
        begin?: number | null;
        end?: number | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsFacePredictionsItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamBoundingBox } from "./StreamBoundingBox";
import { EmotionEmbedding } from "./EmotionEmbedding";
import { EmotionEmbeddingItem } from "./EmotionEmbeddingItem";

export const StreamModelPredictionsFacePredictionsItem: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsFacePredictionsItem.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsFacePredictionsItem
> = core.serialization.object({
    frame: core.serialization.number().optional(),
    time: core.serialization.number().optional(),
    bbox: StreamBoundingBox.optional(),
    prob: core.serialization.number().optional(),
    faceId: core.serialization.property("face_id", core.serialization.string().optional()),
    emotions: EmotionEmbedding.optional(),
    facs: EmotionEmbedding.optional(),
    descriptions: EmotionEmbedding.optional(),
});

export declare namespace StreamModelPredictionsFacePredictionsItem {
    interface Raw {
        frame?: number | null;
        time?: number | null;
        bbox?: StreamBoundingBox.Raw | null;
        prob?: number | null;
        face_id?: string | null;
        emotions?: EmotionEmbedding.Raw | null;
        facs?: EmotionEmbedding.Raw | null;
        descriptions?: EmotionEmbedding.Raw | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsProsody.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamModelPredictionsProsodyPredictionsItem } from "./StreamModelPredictionsProsodyPredictionsItem";

export const StreamModelPredictionsProsody: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsProsody.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsProsody
> = core.serialization.object({
    predictions: core.serialization.list(StreamModelPredictionsProsodyPredictionsItem).optional(),
});

export declare namespace StreamModelPredictionsProsody {
    interface Raw {
        predictions?: StreamModelPredictionsProsodyPredictionsItem.Raw[] | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamLanguage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const StreamLanguage: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamLanguage.Raw,
    Hume.expressionMeasurement.stream.StreamLanguage
> = core.serialization.object({
    sentiment: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    toxicity: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    granularity: core.serialization.string().optional(),
});

export declare namespace StreamLanguage {
    interface Raw {
        sentiment?: Record<string, unknown> | null;
        toxicity?: Record<string, unknown> | null;
        granularity?: string | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/EmotionEmbeddingItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const EmotionEmbeddingItem: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.EmotionEmbeddingItem.Raw,
    Hume.expressionMeasurement.stream.EmotionEmbeddingItem
> = core.serialization.object({
    name: core.serialization.string().optional(),
    score: core.serialization.number().optional(),
});

export declare namespace EmotionEmbeddingItem {
    interface Raw {
        name?: string | null;
        score?: number | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/JobDetails.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const JobDetails: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.JobDetails.Raw,
    Hume.expressionMeasurement.stream.JobDetails
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string().optional()),
});

export declare namespace JobDetails {
    interface Raw {
        job_id?: string | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/Sentiment.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SentimentItem } from "./SentimentItem";

export const Sentiment: core.serialization.Schema<
    serializers.expressionMeasurement.stream.Sentiment.Raw,
    Hume.expressionMeasurement.stream.Sentiment
> = core.serialization.list(SentimentItem);

export declare namespace Sentiment {
    type Raw = SentimentItem.Raw[];
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/TextPosition.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const TextPosition: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.TextPosition.Raw,
    Hume.expressionMeasurement.stream.TextPosition
> = core.serialization.object({
    begin: core.serialization.number().optional(),
    end: core.serialization.number().optional(),
});

export declare namespace TextPosition {
    interface Raw {
        begin?: number | null;
        end?: number | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/index.ts

```typescript
export * from "./StreamModelPredictionsJobDetails";
export * from "./StreamModelPredictionsBurstPredictionsItem";
export * from "./StreamModelPredictionsBurst";
export * from "./StreamModelPredictionsFacePredictionsItem";
export * from "./StreamModelPredictionsFace";
export * from "./StreamModelPredictionsFacemeshPredictionsItem";
export * from "./StreamModelPredictionsFacemesh";
export * from "./StreamModelPredictionsLanguagePredictionsItem";
export * from "./StreamModelPredictionsLanguage";
export * from "./StreamModelPredictionsProsodyPredictionsItem";
export * from "./StreamModelPredictionsProsody";
export * from "./StreamModelPredictions";
export * from "./JobDetails";
export * from "./StreamErrorMessage";
export * from "./StreamWarningMessageJobDetails";
export * from "./StreamWarningMessage";
export * from "./SubscribeEvent";
export * from "./StreamFace";
export * from "./StreamLanguage";
export * from "./Config";
export * from "./StreamModelsEndpointPayload";
export * from "./EmotionEmbeddingItem";
export * from "./EmotionEmbedding";
export * from "./StreamBoundingBox";
export * from "./TimeRange";
export * from "./TextPosition";
export * from "./SentimentItem";
export * from "./Sentiment";
export * from "./ToxicityItem";
export * from "./Toxicity";

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsBurst.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamModelPredictionsBurstPredictionsItem } from "./StreamModelPredictionsBurstPredictionsItem";

export const StreamModelPredictionsBurst: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsBurst.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsBurst
> = core.serialization.object({
    predictions: core.serialization.list(StreamModelPredictionsBurstPredictionsItem).optional(),
});

export declare namespace StreamModelPredictionsBurst {
    interface Raw {
        predictions?: StreamModelPredictionsBurstPredictionsItem.Raw[] | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/Config.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamFace } from "./StreamFace";
import { StreamLanguage } from "./StreamLanguage";

export const Config: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.Config.Raw,
    Hume.expressionMeasurement.stream.Config
> = core.serialization.object({
    burst: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    face: StreamFace.optional(),
    facemesh: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    language: StreamLanguage.optional(),
    prosody: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace Config {
    interface Raw {
        burst?: Record<string, unknown> | null;
        face?: StreamFace.Raw | null;
        facemesh?: Record<string, unknown> | null;
        language?: StreamLanguage.Raw | null;
        prosody?: Record<string, unknown> | null;
    }
}

```

# src/serialization/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsFace.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StreamModelPredictionsFacePredictionsItem } from "./StreamModelPredictionsFacePredictionsItem";

export const StreamModelPredictionsFace: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.stream.StreamModelPredictionsFace.Raw,
    Hume.expressionMeasurement.stream.StreamModelPredictionsFace
> = core.serialization.object({
    predictions: core.serialization.list(StreamModelPredictionsFacePredictionsItem).optional(),
});

export declare namespace StreamModelPredictionsFace {
    interface Raw {
        predictions?: StreamModelPredictionsFacePredictionsItem.Raw[] | null;
    }
}

```

# src/serialization/resources/empathicVoice/index.ts

```typescript
export * from "./resources";
export * from "./types";

```

# src/serialization/resources/empathicVoice/types/PostedEventMessageSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedEventMessageSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedEventMessageSpec.Raw,
    Hume.empathicVoice.PostedEventMessageSpec
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    text: core.serialization.string().optional(),
});

export declare namespace PostedEventMessageSpec {
    interface Raw {
        enabled: boolean;
        text?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/PostedTimeoutSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedTimeoutSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedTimeoutSpec.Raw,
    Hume.empathicVoice.PostedTimeoutSpec
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    durationSecs: core.serialization.property("duration_secs", core.serialization.number().optional()),
});

export declare namespace PostedTimeoutSpec {
    interface Raw {
        enabled: boolean;
        duration_secs?: number | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/WebSocketError.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const WebSocketError: core.serialization.ObjectSchema<
    serializers.empathicVoice.WebSocketError.Raw,
    Hume.empathicVoice.WebSocketError
> = core.serialization.object({
    type: core.serialization.stringLiteral("error"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    code: core.serialization.string(),
    slug: core.serialization.string(),
    message: core.serialization.string(),
});

export declare namespace WebSocketError {
    interface Raw {
        type: "error";
        custom_session_id?: string | null;
        code: string;
        slug: string;
        message: string;
    }
}

```

# src/serialization/resources/empathicVoice/types/PauseAssistantMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PauseAssistantMessage: core.serialization.ObjectSchema<
    serializers.empathicVoice.PauseAssistantMessage.Raw,
    Hume.empathicVoice.PauseAssistantMessage
> = core.serialization.object({
    type: core.serialization.stringLiteral("pause_assistant_message"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
});

export declare namespace PauseAssistantMessage {
    interface Raw {
        type: "pause_assistant_message";
        custom_session_id?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/PostedCustomVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedCustomVoiceBaseVoice } from "./PostedCustomVoiceBaseVoice";
import { PostedCustomVoiceParameters } from "./PostedCustomVoiceParameters";

export const PostedCustomVoice: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedCustomVoice.Raw,
    Hume.empathicVoice.PostedCustomVoice
> = core.serialization.object({
    name: core.serialization.string(),
    baseVoice: core.serialization.property("base_voice", PostedCustomVoiceBaseVoice),
    parameterModel: core.serialization.property(
        "parameter_model",
        core.serialization.stringLiteral("20240715-4parameter")
    ),
    parameters: PostedCustomVoiceParameters.optional(),
});

export declare namespace PostedCustomVoice {
    interface Raw {
        name: string;
        base_voice: PostedCustomVoiceBaseVoice.Raw;
        parameter_model: "20240715-4parameter";
        parameters?: PostedCustomVoiceParameters.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnUserDefinedTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnUserDefinedToolToolType } from "./ReturnUserDefinedToolToolType";
import { ReturnUserDefinedToolVersionType } from "./ReturnUserDefinedToolVersionType";

export const ReturnUserDefinedTool: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnUserDefinedTool.Raw,
    Hume.empathicVoice.ReturnUserDefinedTool
> = core.serialization.object({
    toolType: core.serialization.property("tool_type", ReturnUserDefinedToolToolType),
    id: core.serialization.string(),
    version: core.serialization.number(),
    versionType: core.serialization.property("version_type", ReturnUserDefinedToolVersionType),
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    name: core.serialization.string(),
    createdOn: core.serialization.property("created_on", core.serialization.number()),
    modifiedOn: core.serialization.property("modified_on", core.serialization.number()),
    fallbackContent: core.serialization.property("fallback_content", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    parameters: core.serialization.string(),
});

export declare namespace ReturnUserDefinedTool {
    interface Raw {
        tool_type: ReturnUserDefinedToolToolType.Raw;
        id: string;
        version: number;
        version_type: ReturnUserDefinedToolVersionType.Raw;
        version_description?: string | null;
        name: string;
        created_on: number;
        modified_on: number;
        fallback_content?: string | null;
        description?: string | null;
        parameters: string;
    }
}

```

# src/serialization/resources/empathicVoice/types/ChatMetadata.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ChatMetadata: core.serialization.ObjectSchema<
    serializers.empathicVoice.ChatMetadata.Raw,
    Hume.empathicVoice.ChatMetadata
> = core.serialization.object({
    type: core.serialization.stringLiteral("chat_metadata"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    chatGroupId: core.serialization.property("chat_group_id", core.serialization.string()),
    chatId: core.serialization.property("chat_id", core.serialization.string()),
    requestId: core.serialization.property("request_id", core.serialization.string().optional()),
});

export declare namespace ChatMetadata {
    interface Raw {
        type: "chat_metadata";
        custom_session_id?: string | null;
        chat_group_id: string;
        chat_id: string;
        request_id?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/UserInterruption.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const UserInterruption: core.serialization.ObjectSchema<
    serializers.empathicVoice.UserInterruption.Raw,
    Hume.empathicVoice.UserInterruption
> = core.serialization.object({
    type: core.serialization.stringLiteral("user_interruption"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    time: core.serialization.number(),
});

export declare namespace UserInterruption {
    interface Raw {
        type: "user_interruption";
        custom_session_id?: string | null;
        time: number;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnCustomVoice } from "./ReturnCustomVoice";

export const ReturnVoice: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnVoice.Raw,
    Hume.empathicVoice.ReturnVoice
> = core.serialization.object({
    provider: core.serialization.stringLiteral("HUME_AI"),
    name: core.serialization.string().optional(),
    customVoice: core.serialization.property("custom_voice", ReturnCustomVoice.optional()),
});

export declare namespace ReturnVoice {
    interface Raw {
        provider: "HUME_AI";
        name?: string | null;
        custom_voice?: ReturnCustomVoice.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ToolErrorMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ToolType } from "./ToolType";
import { ErrorLevel } from "./ErrorLevel";

export const ToolErrorMessage: core.serialization.ObjectSchema<
    serializers.empathicVoice.ToolErrorMessage.Raw,
    Hume.empathicVoice.ToolErrorMessage
> = core.serialization.object({
    type: core.serialization.stringLiteral("tool_error"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    toolType: core.serialization.property("tool_type", ToolType.optional()),
    toolCallId: core.serialization.property("tool_call_id", core.serialization.string()),
    content: core.serialization.string().optional(),
    error: core.serialization.string(),
    code: core.serialization.string().optional(),
    level: ErrorLevel.optional(),
});

export declare namespace ToolErrorMessage {
    interface Raw {
        type: "tool_error";
        custom_session_id?: string | null;
        tool_type?: ToolType.Raw | null;
        tool_call_id: string;
        content?: string | null;
        error: string;
        code?: string | null;
        level?: ErrorLevel.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatStatus.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnChatStatus: core.serialization.Schema<
    serializers.empathicVoice.ReturnChatStatus.Raw,
    Hume.empathicVoice.ReturnChatStatus
> = core.serialization.enum_([
    "ACTIVE",
    "USER_ENDED",
    "USER_TIMEOUT",
    "MAX_DURATION_TIMEOUT",
    "INACTIVITY_TIMEOUT",
    "ERROR",
]);

export declare namespace ReturnChatStatus {
    type Raw = "ACTIVE" | "USER_ENDED" | "USER_TIMEOUT" | "MAX_DURATION_TIMEOUT" | "INACTIVITY_TIMEOUT" | "ERROR";
}

```

# src/serialization/resources/empathicVoice/types/VoiceArgs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { VoiceNameEnum } from "./VoiceNameEnum";

export const VoiceArgs: core.serialization.ObjectSchema<
    serializers.empathicVoice.VoiceArgs.Raw,
    Hume.empathicVoice.VoiceArgs
> = core.serialization.object({
    voice: VoiceNameEnum.optional(),
    speechRateMultiplier: core.serialization.property("speech_rate_multiplier", core.serialization.number().optional()),
    baseline: core.serialization.boolean().optional(),
    reconstruct: core.serialization.boolean().optional(),
    additive: core.serialization.boolean().optional(),
    drift: core.serialization.boolean().optional(),
    useV2: core.serialization.property("use_v2", core.serialization.boolean().optional()),
});

export declare namespace VoiceArgs {
    interface Raw {
        voice?: VoiceNameEnum.Raw | null;
        speech_rate_multiplier?: number | null;
        baseline?: boolean | null;
        reconstruct?: boolean | null;
        additive?: boolean | null;
        drift?: boolean | null;
        use_v2?: boolean | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/Context.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ContextType } from "./ContextType";

export const Context: core.serialization.ObjectSchema<
    serializers.empathicVoice.Context.Raw,
    Hume.empathicVoice.Context
> = core.serialization.object({
    type: ContextType.optional(),
    text: core.serialization.string(),
});

export declare namespace Context {
    interface Raw {
        type?: ContextType.Raw | null;
        text: string;
    }
}

```

# src/serialization/resources/empathicVoice/types/VoiceNameEnum.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const VoiceNameEnum: core.serialization.Schema<
    serializers.empathicVoice.VoiceNameEnum.Raw,
    Hume.empathicVoice.VoiceNameEnum
> = core.serialization.enum_([
    "ITO",
    "KORA",
    "DACHER",
    "AURA",
    "FINN",
    "SIENNA",
    "WILLOW",
    "SCOUT",
    "WHIMSY",
    "ACE",
    "JUNO",
    "STELLA",
    "HIRO",
]);

export declare namespace VoiceNameEnum {
    type Raw =
        | "ITO"
        | "KORA"
        | "DACHER"
        | "AURA"
        | "FINN"
        | "SIENNA"
        | "WILLOW"
        | "SCOUT"
        | "WHIMSY"
        | "ACE"
        | "JUNO"
        | "STELLA"
        | "HIRO";
}

```

# src/serialization/resources/empathicVoice/types/PostedVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedCustomVoice } from "./PostedCustomVoice";

export const PostedVoice: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedVoice.Raw,
    Hume.empathicVoice.PostedVoice
> = core.serialization.object({
    provider: core.serialization.stringLiteral("HUME_AI"),
    name: core.serialization.string().optional(),
    customVoice: core.serialization.property("custom_voice", PostedCustomVoice.optional()),
});

export declare namespace PostedVoice {
    interface Raw {
        provider: "HUME_AI";
        name?: string | null;
        custom_voice?: PostedCustomVoice.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/PostedCustomVoiceParameters.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedCustomVoiceParameters: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedCustomVoiceParameters.Raw,
    Hume.empathicVoice.PostedCustomVoiceParameters
> = core.serialization.object({
    gender: core.serialization.number().optional(),
    huskiness: core.serialization.number().optional(),
    nasality: core.serialization.number().optional(),
    pitch: core.serialization.number().optional(),
});

export declare namespace PostedCustomVoiceParameters {
    interface Raw {
        gender?: number | null;
        huskiness?: number | null;
        nasality?: number | null;
        pitch?: number | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/AssistantMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ChatMessage } from "./ChatMessage";
import { Inference } from "./Inference";

export const AssistantMessage: core.serialization.ObjectSchema<
    serializers.empathicVoice.AssistantMessage.Raw,
    Hume.empathicVoice.AssistantMessage
> = core.serialization.object({
    type: core.serialization.stringLiteral("assistant_message"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    message: ChatMessage,
    models: Inference,
    fromText: core.serialization.property("from_text", core.serialization.boolean()),
});

export declare namespace AssistantMessage {
    interface Raw {
        type: "assistant_message";
        custom_session_id?: string | null;
        id?: string | null;
        message: ChatMessage.Raw;
        models: Inference.Raw;
        from_text: boolean;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnActiveChatCountPerTag.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnActiveChatCountPerTag: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnActiveChatCountPerTag.Raw,
    Hume.empathicVoice.ReturnActiveChatCountPerTag
> = core.serialization.object({
    tag: core.serialization.string(),
    totalTagActiveChats: core.serialization.property("total_tag_active_chats", core.serialization.number()),
});

export declare namespace ReturnActiveChatCountPerTag {
    interface Raw {
        tag: string;
        total_tag_active_chats: number;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnConfigSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnConfigSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnConfigSpec.Raw,
    Hume.empathicVoice.ReturnConfigSpec
> = core.serialization.object({
    id: core.serialization.string(),
    version: core.serialization.number().optional(),
});

export declare namespace ReturnConfigSpec {
    interface Raw {
        id: string;
        version?: number | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/AudioInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const AudioInput: core.serialization.ObjectSchema<
    serializers.empathicVoice.AudioInput.Raw,
    Hume.empathicVoice.AudioInput
> = core.serialization.object({
    type: core.serialization.stringLiteral("audio_input"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    data: core.serialization.string(),
});

export declare namespace AudioInput {
    interface Raw {
        type: "audio_input";
        custom_session_id?: string | null;
        data: string;
    }
}

```

# src/serialization/resources/empathicVoice/types/TtsInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const TtsInput: core.serialization.ObjectSchema<
    serializers.empathicVoice.TtsInput.Raw,
    Hume.empathicVoice.TtsInput
> = core.serialization.object({
    type: core.serialization.stringLiteral("tts").optional(),
});

export declare namespace TtsInput {
    interface Raw {
        type?: "tts" | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnChat.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnChatStatus } from "./ReturnChatStatus";
import { ReturnConfigSpec } from "./ReturnConfigSpec";

export const ReturnChat: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnChat.Raw,
    Hume.empathicVoice.ReturnChat
> = core.serialization.object({
    id: core.serialization.string(),
    chatGroupId: core.serialization.property("chat_group_id", core.serialization.string()),
    status: ReturnChatStatus,
    startTimestamp: core.serialization.property("start_timestamp", core.serialization.number()),
    endTimestamp: core.serialization.property("end_timestamp", core.serialization.number().optional()),
    eventCount: core.serialization.property("event_count", core.serialization.number().optional()),
    metadata: core.serialization.string().optional(),
    config: ReturnConfigSpec.optional(),
});

export declare namespace ReturnChat {
    interface Raw {
        id: string;
        chat_group_id: string;
        status: ReturnChatStatus.Raw;
        start_timestamp: number;
        end_timestamp?: number | null;
        event_count?: number | null;
        metadata?: string | null;
        config?: ReturnConfigSpec.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatPagedEventsStatus.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnChatPagedEventsStatus: core.serialization.Schema<
    serializers.empathicVoice.ReturnChatPagedEventsStatus.Raw,
    Hume.empathicVoice.ReturnChatPagedEventsStatus
> = core.serialization.enum_([
    "ACTIVE",
    "USER_ENDED",
    "USER_TIMEOUT",
    "MAX_DURATION_TIMEOUT",
    "INACTIVITY_TIMEOUT",
    "ERROR",
]);

export declare namespace ReturnChatPagedEventsStatus {
    type Raw = "ACTIVE" | "USER_ENDED" | "USER_TIMEOUT" | "MAX_DURATION_TIMEOUT" | "INACTIVITY_TIMEOUT" | "ERROR";
}

```

# src/serialization/resources/empathicVoice/types/ErrorLevel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ErrorLevel: core.serialization.Schema<
    serializers.empathicVoice.ErrorLevel.Raw,
    Hume.empathicVoice.ErrorLevel
> = core.serialization.stringLiteral("warn");

export declare namespace ErrorLevel {
    type Raw = "warn";
}

```

# src/serialization/resources/empathicVoice/types/PostedLanguageModelModelProvider.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedLanguageModelModelProvider: core.serialization.Schema<
    serializers.empathicVoice.PostedLanguageModelModelProvider.Raw,
    Hume.empathicVoice.PostedLanguageModelModelProvider
> = core.serialization.enum_(["OPEN_AI", "CUSTOM_LANGUAGE_MODEL", "ANTHROPIC", "FIREWORKS", "GROQ", "GOOGLE"]);

export declare namespace PostedLanguageModelModelProvider {
    type Raw = "OPEN_AI" | "CUSTOM_LANGUAGE_MODEL" | "ANTHROPIC" | "FIREWORKS" | "GROQ" | "GOOGLE";
}

```

# src/serialization/resources/empathicVoice/types/PostedEllmModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedEllmModel: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedEllmModel.Raw,
    Hume.empathicVoice.PostedEllmModel
> = core.serialization.object({
    allowShortResponses: core.serialization.property("allow_short_responses", core.serialization.boolean().optional()),
});

export declare namespace PostedEllmModel {
    interface Raw {
        allow_short_responses?: boolean | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnPagedChatsPaginationDirection.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnPagedChatsPaginationDirection: core.serialization.Schema<
    serializers.empathicVoice.ReturnPagedChatsPaginationDirection.Raw,
    Hume.empathicVoice.ReturnPagedChatsPaginationDirection
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ReturnPagedChatsPaginationDirection {
    type Raw = "ASC" | "DESC";
}

```

# src/serialization/resources/empathicVoice/types/BuiltinToolConfig.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { BuiltInTool } from "./BuiltInTool";

export const BuiltinToolConfig: core.serialization.ObjectSchema<
    serializers.empathicVoice.BuiltinToolConfig.Raw,
    Hume.empathicVoice.BuiltinToolConfig
> = core.serialization.object({
    name: BuiltInTool,
    fallbackContent: core.serialization.property("fallback_content", core.serialization.string().optional()),
});

export declare namespace BuiltinToolConfig {
    interface Raw {
        name: BuiltInTool.Raw;
        fallback_content?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ToolType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ToolType: core.serialization.Schema<serializers.empathicVoice.ToolType.Raw, Hume.empathicVoice.ToolType> =
    core.serialization.enum_(["builtin", "function"]);

export declare namespace ToolType {
    type Raw = "builtin" | "function";
}

```

# src/serialization/resources/empathicVoice/types/PostedEventMessageSpecs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedEventMessageSpec } from "./PostedEventMessageSpec";

export const PostedEventMessageSpecs: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedEventMessageSpecs.Raw,
    Hume.empathicVoice.PostedEventMessageSpecs
> = core.serialization.object({
    onNewChat: core.serialization.property("on_new_chat", PostedEventMessageSpec.optional()),
    onInactivityTimeout: core.serialization.property("on_inactivity_timeout", PostedEventMessageSpec.optional()),
    onMaxDurationTimeout: core.serialization.property("on_max_duration_timeout", PostedEventMessageSpec.optional()),
});

export declare namespace PostedEventMessageSpecs {
    interface Raw {
        on_new_chat?: PostedEventMessageSpec.Raw | null;
        on_inactivity_timeout?: PostedEventMessageSpec.Raw | null;
        on_max_duration_timeout?: PostedEventMessageSpec.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnTimeoutSpecs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnTimeoutSpec } from "./ReturnTimeoutSpec";

export const ReturnTimeoutSpecs: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnTimeoutSpecs.Raw,
    Hume.empathicVoice.ReturnTimeoutSpecs
> = core.serialization.object({
    inactivity: ReturnTimeoutSpec,
    maxDuration: core.serialization.property("max_duration", ReturnTimeoutSpec),
});

export declare namespace ReturnTimeoutSpecs {
    interface Raw {
        inactivity: ReturnTimeoutSpec.Raw;
        max_duration: ReturnTimeoutSpec.Raw;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnPromptVersionType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnPromptVersionType: core.serialization.Schema<
    serializers.empathicVoice.ReturnPromptVersionType.Raw,
    Hume.empathicVoice.ReturnPromptVersionType
> = core.serialization.enum_(["FIXED", "LATEST"]);

export declare namespace ReturnPromptVersionType {
    type Raw = "FIXED" | "LATEST";
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatEventRole.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnChatEventRole: core.serialization.Schema<
    serializers.empathicVoice.ReturnChatEventRole.Raw,
    Hume.empathicVoice.ReturnChatEventRole
> = core.serialization.enum_(["USER", "AGENT", "SYSTEM", "TOOL"]);

export declare namespace ReturnChatEventRole {
    type Raw = "USER" | "AGENT" | "SYSTEM" | "TOOL";
}

```

# src/serialization/resources/empathicVoice/types/ReturnPagedUserDefinedTools.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnUserDefinedTool } from "./ReturnUserDefinedTool";

export const ReturnPagedUserDefinedTools: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnPagedUserDefinedTools.Raw,
    Hume.empathicVoice.ReturnPagedUserDefinedTools
> = core.serialization.object({
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    toolsPage: core.serialization.property("tools_page", core.serialization.list(ReturnUserDefinedTool.optional())),
});

export declare namespace ReturnPagedUserDefinedTools {
    interface Raw {
        page_number: number;
        page_size: number;
        total_pages: number;
        tools_page: (ReturnUserDefinedTool.Raw | null | undefined)[];
    }
}

```

# src/serialization/resources/empathicVoice/types/PostedPromptSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedPromptSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedPromptSpec.Raw,
    Hume.empathicVoice.PostedPromptSpec
> = core.serialization.object({
    version: core.serialization.unknown().optional(),
});

export declare namespace PostedPromptSpec {
    interface Raw {
        version?: unknown | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnPagedConfigs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnConfig } from "./ReturnConfig";

export const ReturnPagedConfigs: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnPagedConfigs.Raw,
    Hume.empathicVoice.ReturnPagedConfigs
> = core.serialization.object({
    pageNumber: core.serialization.property("page_number", core.serialization.number().optional()),
    pageSize: core.serialization.property("page_size", core.serialization.number().optional()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    configsPage: core.serialization.property("configs_page", core.serialization.list(ReturnConfig).optional()),
});

export declare namespace ReturnPagedConfigs {
    interface Raw {
        page_number?: number | null;
        page_size?: number | null;
        total_pages: number;
        configs_page?: ReturnConfig.Raw[] | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnEllmModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnEllmModel: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnEllmModel.Raw,
    Hume.empathicVoice.ReturnEllmModel
> = core.serialization.object({
    allowShortResponses: core.serialization.property("allow_short_responses", core.serialization.boolean()),
});

export declare namespace ReturnEllmModel {
    interface Raw {
        allow_short_responses: boolean;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnPagedChatGroups.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnPagedChatGroupsPaginationDirection } from "./ReturnPagedChatGroupsPaginationDirection";
import { ReturnChatGroup } from "./ReturnChatGroup";

export const ReturnPagedChatGroups: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnPagedChatGroups.Raw,
    Hume.empathicVoice.ReturnPagedChatGroups
> = core.serialization.object({
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    paginationDirection: core.serialization.property("pagination_direction", ReturnPagedChatGroupsPaginationDirection),
    chatGroupsPage: core.serialization.property("chat_groups_page", core.serialization.list(ReturnChatGroup)),
});

export declare namespace ReturnPagedChatGroups {
    interface Raw {
        page_number: number;
        page_size: number;
        total_pages: number;
        pagination_direction: ReturnPagedChatGroupsPaginationDirection.Raw;
        chat_groups_page: ReturnChatGroup.Raw[];
    }
}

```

# src/serialization/resources/empathicVoice/types/FunctionCallResponseInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const FunctionCallResponseInput: core.serialization.ObjectSchema<
    serializers.empathicVoice.FunctionCallResponseInput.Raw,
    Hume.empathicVoice.FunctionCallResponseInput
> = core.serialization.object({
    type: core.serialization.stringLiteral("function_call_response").optional(),
});

export declare namespace FunctionCallResponseInput {
    interface Raw {
        type?: "function_call_response" | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnBuiltinToolToolType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnBuiltinToolToolType: core.serialization.Schema<
    serializers.empathicVoice.ReturnBuiltinToolToolType.Raw,
    Hume.empathicVoice.ReturnBuiltinToolToolType
> = core.serialization.enum_(["BUILTIN", "FUNCTION"]);

export declare namespace ReturnBuiltinToolToolType {
    type Raw = "BUILTIN" | "FUNCTION";
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatEventType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnChatEventType: core.serialization.Schema<
    serializers.empathicVoice.ReturnChatEventType.Raw,
    Hume.empathicVoice.ReturnChatEventType
> = core.serialization.enum_([
    "SYSTEM_PROMPT",
    "USER_MESSAGE",
    "USER_INTERRUPTION",
    "AGENT_MESSAGE",
    "FUNCTION_CALL",
    "FUNCTION_CALL_RESPONSE",
]);

export declare namespace ReturnChatEventType {
    type Raw =
        | "SYSTEM_PROMPT"
        | "USER_MESSAGE"
        | "USER_INTERRUPTION"
        | "AGENT_MESSAGE"
        | "FUNCTION_CALL"
        | "FUNCTION_CALL_RESPONSE";
}

```

# src/serialization/resources/empathicVoice/types/ToolCallMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ToolType } from "./ToolType";

export const ToolCallMessage: core.serialization.ObjectSchema<
    serializers.empathicVoice.ToolCallMessage.Raw,
    Hume.empathicVoice.ToolCallMessage
> = core.serialization.object({
    name: core.serialization.string(),
    parameters: core.serialization.string(),
    toolCallId: core.serialization.property("tool_call_id", core.serialization.string()),
    type: core.serialization.stringLiteral("tool_call"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    toolType: core.serialization.property("tool_type", ToolType.optional()),
    responseRequired: core.serialization.property("response_required", core.serialization.boolean()),
});

export declare namespace ToolCallMessage {
    interface Raw {
        name: string;
        parameters: string;
        tool_call_id: string;
        type: "tool_call";
        custom_session_id?: string | null;
        tool_type?: ToolType.Raw | null;
        response_required: boolean;
    }
}

```

# src/serialization/resources/empathicVoice/types/PostedUserDefinedToolSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedUserDefinedToolSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedUserDefinedToolSpec.Raw,
    Hume.empathicVoice.PostedUserDefinedToolSpec
> = core.serialization.object({
    id: core.serialization.string(),
    version: core.serialization.number().optional(),
});

export declare namespace PostedUserDefinedToolSpec {
    interface Raw {
        id: string;
        version?: number | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnUserDefinedToolVersionType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnUserDefinedToolVersionType: core.serialization.Schema<
    serializers.empathicVoice.ReturnUserDefinedToolVersionType.Raw,
    Hume.empathicVoice.ReturnUserDefinedToolVersionType
> = core.serialization.enum_(["FIXED", "LATEST"]);

export declare namespace ReturnUserDefinedToolVersionType {
    type Raw = "FIXED" | "LATEST";
}

```

# src/serialization/resources/empathicVoice/types/ReturnPagedChats.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnPagedChatsPaginationDirection } from "./ReturnPagedChatsPaginationDirection";
import { ReturnChat } from "./ReturnChat";

export const ReturnPagedChats: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnPagedChats.Raw,
    Hume.empathicVoice.ReturnPagedChats
> = core.serialization.object({
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    paginationDirection: core.serialization.property("pagination_direction", ReturnPagedChatsPaginationDirection),
    chatsPage: core.serialization.property("chats_page", core.serialization.list(ReturnChat)),
});

export declare namespace ReturnPagedChats {
    interface Raw {
        page_number: number;
        page_size: number;
        total_pages: number;
        pagination_direction: ReturnPagedChatsPaginationDirection.Raw;
        chats_page: ReturnChat.Raw[];
    }
}

```

# src/serialization/resources/empathicVoice/types/Role.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const Role: core.serialization.Schema<serializers.empathicVoice.Role.Raw, Hume.empathicVoice.Role> =
    core.serialization.enum_(["assistant", "system", "user", "all", "tool"]);

export declare namespace Role {
    type Raw = "assistant" | "system" | "user" | "all" | "tool";
}

```

# src/serialization/resources/empathicVoice/types/SessionSettings.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { Context } from "./Context";
import { AudioConfiguration } from "./AudioConfiguration";
import { Tool } from "./Tool";
import { BuiltinToolConfig } from "./BuiltinToolConfig";

export const SessionSettings: core.serialization.ObjectSchema<
    serializers.empathicVoice.SessionSettings.Raw,
    Hume.empathicVoice.SessionSettings
> = core.serialization.object({
    type: core.serialization.stringLiteral("session_settings"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    systemPrompt: core.serialization.property("system_prompt", core.serialization.string().optional()),
    context: Context.optional(),
    audio: AudioConfiguration.optional(),
    languageModelApiKey: core.serialization.property("language_model_api_key", core.serialization.string().optional()),
    tools: core.serialization.list(Tool).optional(),
    builtinTools: core.serialization.property("builtin_tools", core.serialization.list(BuiltinToolConfig).optional()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    variables: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
});

export declare namespace SessionSettings {
    interface Raw {
        type: "session_settings";
        custom_session_id?: string | null;
        system_prompt?: string | null;
        context?: Context.Raw | null;
        audio?: AudioConfiguration.Raw | null;
        language_model_api_key?: string | null;
        tools?: Tool.Raw[] | null;
        builtin_tools?: BuiltinToolConfig.Raw[] | null;
        metadata?: Record<string, unknown> | null;
        variables?: Record<string, string> | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnUserDefinedToolToolType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnUserDefinedToolToolType: core.serialization.Schema<
    serializers.empathicVoice.ReturnUserDefinedToolToolType.Raw,
    Hume.empathicVoice.ReturnUserDefinedToolToolType
> = core.serialization.enum_(["BUILTIN", "FUNCTION"]);

export declare namespace ReturnUserDefinedToolToolType {
    type Raw = "BUILTIN" | "FUNCTION";
}

```

# src/serialization/resources/empathicVoice/types/ValidationErrorLocItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ValidationErrorLocItem: core.serialization.Schema<
    serializers.empathicVoice.ValidationErrorLocItem.Raw,
    Hume.empathicVoice.ValidationErrorLocItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.number()]);

export declare namespace ValidationErrorLocItem {
    type Raw = string | number;
}

```

# src/serialization/resources/empathicVoice/types/PostedTimeoutSpecsInactivity.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedTimeoutSpecsInactivity: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedTimeoutSpecsInactivity.Raw,
    Hume.empathicVoice.PostedTimeoutSpecsInactivity
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    durationSecs: core.serialization.property("duration_secs", core.serialization.number().optional()),
});

export declare namespace PostedTimeoutSpecsInactivity {
    interface Raw {
        enabled: boolean;
        duration_secs?: number | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatPagedEvents.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnChatPagedEventsStatus } from "./ReturnChatPagedEventsStatus";
import { ReturnChatPagedEventsPaginationDirection } from "./ReturnChatPagedEventsPaginationDirection";
import { ReturnChatEvent } from "./ReturnChatEvent";
import { ReturnConfigSpec } from "./ReturnConfigSpec";

export const ReturnChatPagedEvents: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnChatPagedEvents.Raw,
    Hume.empathicVoice.ReturnChatPagedEvents
> = core.serialization.object({
    id: core.serialization.string(),
    chatGroupId: core.serialization.property("chat_group_id", core.serialization.string()),
    status: ReturnChatPagedEventsStatus,
    startTimestamp: core.serialization.property("start_timestamp", core.serialization.number()),
    endTimestamp: core.serialization.property("end_timestamp", core.serialization.number().optional()),
    paginationDirection: core.serialization.property("pagination_direction", ReturnChatPagedEventsPaginationDirection),
    eventsPage: core.serialization.property("events_page", core.serialization.list(ReturnChatEvent)),
    metadata: core.serialization.string().optional(),
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    config: ReturnConfigSpec.optional(),
});

export declare namespace ReturnChatPagedEvents {
    interface Raw {
        id: string;
        chat_group_id: string;
        status: ReturnChatPagedEventsStatus.Raw;
        start_timestamp: number;
        end_timestamp?: number | null;
        pagination_direction: ReturnChatPagedEventsPaginationDirection.Raw;
        events_page: ReturnChatEvent.Raw[];
        metadata?: string | null;
        page_number: number;
        page_size: number;
        total_pages: number;
        config?: ReturnConfigSpec.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ExtendedVoiceArgs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { VoiceArgs } from "./VoiceArgs";

export const ExtendedVoiceArgs: core.serialization.ObjectSchema<
    serializers.empathicVoice.ExtendedVoiceArgs.Raw,
    Hume.empathicVoice.ExtendedVoiceArgs
> = core.serialization.object({
    text: core.serialization.string(),
    useS2A: core.serialization.property("use_s2a", core.serialization.boolean().optional()),
    voiceArgs: core.serialization.property("voice_args", VoiceArgs),
});

export declare namespace ExtendedVoiceArgs {
    interface Raw {
        text: string;
        use_s2a?: boolean | null;
        voice_args: VoiceArgs.Raw;
    }
}

```

# src/serialization/resources/empathicVoice/types/ResumeAssistantMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ResumeAssistantMessage: core.serialization.ObjectSchema<
    serializers.empathicVoice.ResumeAssistantMessage.Raw,
    Hume.empathicVoice.ResumeAssistantMessage
> = core.serialization.object({
    type: core.serialization.stringLiteral("resume_assistant_message"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
});

export declare namespace ResumeAssistantMessage {
    interface Raw {
        type: "resume_assistant_message";
        custom_session_id?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/EmotionScores.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const EmotionScores: core.serialization.ObjectSchema<
    serializers.empathicVoice.EmotionScores.Raw,
    Hume.empathicVoice.EmotionScores
> = core.serialization.object({
    admiration: core.serialization.property("Admiration", core.serialization.number()),
    adoration: core.serialization.property("Adoration", core.serialization.number()),
    aestheticAppreciation: core.serialization.property("Aesthetic Appreciation", core.serialization.number()),
    amusement: core.serialization.property("Amusement", core.serialization.number()),
    anger: core.serialization.property("Anger", core.serialization.number()),
    anxiety: core.serialization.property("Anxiety", core.serialization.number()),
    awe: core.serialization.property("Awe", core.serialization.number()),
    awkwardness: core.serialization.property("Awkwardness", core.serialization.number()),
    boredom: core.serialization.property("Boredom", core.serialization.number()),
    calmness: core.serialization.property("Calmness", core.serialization.number()),
    concentration: core.serialization.property("Concentration", core.serialization.number()),
    confusion: core.serialization.property("Confusion", core.serialization.number()),
    contemplation: core.serialization.property("Contemplation", core.serialization.number()),
    contempt: core.serialization.property("Contempt", core.serialization.number()),
    contentment: core.serialization.property("Contentment", core.serialization.number()),
    craving: core.serialization.property("Craving", core.serialization.number()),
    desire: core.serialization.property("Desire", core.serialization.number()),
    determination: core.serialization.property("Determination", core.serialization.number()),
    disappointment: core.serialization.property("Disappointment", core.serialization.number()),
    disgust: core.serialization.property("Disgust", core.serialization.number()),
    distress: core.serialization.property("Distress", core.serialization.number()),
    doubt: core.serialization.property("Doubt", core.serialization.number()),
    ecstasy: core.serialization.property("Ecstasy", core.serialization.number()),
    embarrassment: core.serialization.property("Embarrassment", core.serialization.number()),
    empathicPain: core.serialization.property("Empathic Pain", core.serialization.number()),
    entrancement: core.serialization.property("Entrancement", core.serialization.number()),
    envy: core.serialization.property("Envy", core.serialization.number()),
    excitement: core.serialization.property("Excitement", core.serialization.number()),
    fear: core.serialization.property("Fear", core.serialization.number()),
    guilt: core.serialization.property("Guilt", core.serialization.number()),
    horror: core.serialization.property("Horror", core.serialization.number()),
    interest: core.serialization.property("Interest", core.serialization.number()),
    joy: core.serialization.property("Joy", core.serialization.number()),
    love: core.serialization.property("Love", core.serialization.number()),
    nostalgia: core.serialization.property("Nostalgia", core.serialization.number()),
    pain: core.serialization.property("Pain", core.serialization.number()),
    pride: core.serialization.property("Pride", core.serialization.number()),
    realization: core.serialization.property("Realization", core.serialization.number()),
    relief: core.serialization.property("Relief", core.serialization.number()),
    romance: core.serialization.property("Romance", core.serialization.number()),
    sadness: core.serialization.property("Sadness", core.serialization.number()),
    satisfaction: core.serialization.property("Satisfaction", core.serialization.number()),
    shame: core.serialization.property("Shame", core.serialization.number()),
    surpriseNegative: core.serialization.property("Surprise (negative)", core.serialization.number()),
    surprisePositive: core.serialization.property("Surprise (positive)", core.serialization.number()),
    sympathy: core.serialization.property("Sympathy", core.serialization.number()),
    tiredness: core.serialization.property("Tiredness", core.serialization.number()),
    triumph: core.serialization.property("Triumph", core.serialization.number()),
});

export declare namespace EmotionScores {
    interface Raw {
        Admiration: number;
        Adoration: number;
        "Aesthetic Appreciation": number;
        Amusement: number;
        Anger: number;
        Anxiety: number;
        Awe: number;
        Awkwardness: number;
        Boredom: number;
        Calmness: number;
        Concentration: number;
        Confusion: number;
        Contemplation: number;
        Contempt: number;
        Contentment: number;
        Craving: number;
        Desire: number;
        Determination: number;
        Disappointment: number;
        Disgust: number;
        Distress: number;
        Doubt: number;
        Ecstasy: number;
        Embarrassment: number;
        "Empathic Pain": number;
        Entrancement: number;
        Envy: number;
        Excitement: number;
        Fear: number;
        Guilt: number;
        Horror: number;
        Interest: number;
        Joy: number;
        Love: number;
        Nostalgia: number;
        Pain: number;
        Pride: number;
        Realization: number;
        Relief: number;
        Romance: number;
        Sadness: number;
        Satisfaction: number;
        Shame: number;
        "Surprise (negative)": number;
        "Surprise (positive)": number;
        Sympathy: number;
        Tiredness: number;
        Triumph: number;
    }
}

```

# src/serialization/resources/empathicVoice/types/PostedLanguageModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedLanguageModelModelProvider } from "./PostedLanguageModelModelProvider";

export const PostedLanguageModel: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedLanguageModel.Raw,
    Hume.empathicVoice.PostedLanguageModel
> = core.serialization.object({
    modelProvider: core.serialization.property("model_provider", PostedLanguageModelModelProvider.optional()),
    modelResource: core.serialization.property("model_resource", core.serialization.string().optional()),
    temperature: core.serialization.number().optional(),
});

export declare namespace PostedLanguageModel {
    interface Raw {
        model_provider?: PostedLanguageModelModelProvider.Raw | null;
        model_resource?: string | null;
        temperature?: number | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnBuiltinTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnBuiltinToolToolType } from "./ReturnBuiltinToolToolType";

export const ReturnBuiltinTool: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnBuiltinTool.Raw,
    Hume.empathicVoice.ReturnBuiltinTool
> = core.serialization.object({
    toolType: core.serialization.property("tool_type", ReturnBuiltinToolToolType),
    name: core.serialization.string(),
    fallbackContent: core.serialization.property("fallback_content", core.serialization.string().optional()),
});

export declare namespace ReturnBuiltinTool {
    interface Raw {
        tool_type: ReturnBuiltinToolToolType.Raw;
        name: string;
        fallback_content?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/UserInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const UserInput: core.serialization.ObjectSchema<
    serializers.empathicVoice.UserInput.Raw,
    Hume.empathicVoice.UserInput
> = core.serialization.object({
    type: core.serialization.stringLiteral("user_input"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    text: core.serialization.string(),
});

export declare namespace UserInput {
    interface Raw {
        type: "user_input";
        custom_session_id?: string | null;
        text: string;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatGroup.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnChatGroup: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnChatGroup.Raw,
    Hume.empathicVoice.ReturnChatGroup
> = core.serialization.object({
    id: core.serialization.string(),
    firstStartTimestamp: core.serialization.property("first_start_timestamp", core.serialization.number()),
    mostRecentStartTimestamp: core.serialization.property("most_recent_start_timestamp", core.serialization.number()),
    mostRecentChatId: core.serialization.property("most_recent_chat_id", core.serialization.string().optional()),
    numChats: core.serialization.property("num_chats", core.serialization.number()),
    active: core.serialization.boolean().optional(),
});

export declare namespace ReturnChatGroup {
    interface Raw {
        id: string;
        first_start_timestamp: number;
        most_recent_start_timestamp: number;
        most_recent_chat_id?: string | null;
        num_chats: number;
        active?: boolean | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnCustomVoiceBaseVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnCustomVoiceBaseVoice: core.serialization.Schema<
    serializers.empathicVoice.ReturnCustomVoiceBaseVoice.Raw,
    Hume.empathicVoice.ReturnCustomVoiceBaseVoice
> = core.serialization.enum_(["ITO", "KORA", "DACHER", "AURA", "FINN", "STELLA", "WHIMSY"]);

export declare namespace ReturnCustomVoiceBaseVoice {
    type Raw = "ITO" | "KORA" | "DACHER" | "AURA" | "FINN" | "STELLA" | "WHIMSY";
}

```

# src/serialization/resources/empathicVoice/types/ReturnLanguageModelModelProvider.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnLanguageModelModelProvider: core.serialization.Schema<
    serializers.empathicVoice.ReturnLanguageModelModelProvider.Raw,
    Hume.empathicVoice.ReturnLanguageModelModelProvider
> = core.serialization.enum_(["OPEN_AI", "CUSTOM_LANGUAGE_MODEL", "ANTHROPIC", "FIREWORKS", "GROQ", "GOOGLE"]);

export declare namespace ReturnLanguageModelModelProvider {
    type Raw = "OPEN_AI" | "CUSTOM_LANGUAGE_MODEL" | "ANTHROPIC" | "FIREWORKS" | "GROQ" | "GOOGLE";
}

```

# src/serialization/resources/empathicVoice/types/ReturnPagedPrompts.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnPrompt } from "./ReturnPrompt";

export const ReturnPagedPrompts: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnPagedPrompts.Raw,
    Hume.empathicVoice.ReturnPagedPrompts
> = core.serialization.object({
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    promptsPage: core.serialization.property("prompts_page", core.serialization.list(ReturnPrompt.optional())),
});

export declare namespace ReturnPagedPrompts {
    interface Raw {
        page_number: number;
        page_size: number;
        total_pages: number;
        prompts_page: (ReturnPrompt.Raw | null | undefined)[];
    }
}

```

# src/serialization/resources/empathicVoice/types/TextInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const TextInput: core.serialization.ObjectSchema<
    serializers.empathicVoice.TextInput.Raw,
    Hume.empathicVoice.TextInput
> = core.serialization.object({
    type: core.serialization.stringLiteral("text_input").optional(),
});

export declare namespace TextInput {
    interface Raw {
        type?: "text_input" | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/HttpValidationError.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ValidationError } from "./ValidationError";

export const HttpValidationError: core.serialization.ObjectSchema<
    serializers.empathicVoice.HttpValidationError.Raw,
    Hume.empathicVoice.HttpValidationError
> = core.serialization.object({
    detail: core.serialization.list(ValidationError).optional(),
});

export declare namespace HttpValidationError {
    interface Raw {
        detail?: ValidationError.Raw[] | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatPagedEventsPaginationDirection.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnChatPagedEventsPaginationDirection: core.serialization.Schema<
    serializers.empathicVoice.ReturnChatPagedEventsPaginationDirection.Raw,
    Hume.empathicVoice.ReturnChatPagedEventsPaginationDirection
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ReturnChatPagedEventsPaginationDirection {
    type Raw = "ASC" | "DESC";
}

```

# src/serialization/resources/empathicVoice/types/JsonMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { AssistantEnd } from "./AssistantEnd";
import { AssistantMessage } from "./AssistantMessage";
import { ChatMetadata } from "./ChatMetadata";
import { WebSocketError } from "./WebSocketError";
import { UserInterruption } from "./UserInterruption";
import { UserMessage } from "./UserMessage";
import { ToolCallMessage } from "./ToolCallMessage";
import { ToolResponseMessage } from "./ToolResponseMessage";
import { ToolErrorMessage } from "./ToolErrorMessage";

export const JsonMessage: core.serialization.Schema<
    serializers.empathicVoice.JsonMessage.Raw,
    Hume.empathicVoice.JsonMessage
> = core.serialization.undiscriminatedUnion([
    AssistantEnd,
    AssistantMessage,
    ChatMetadata,
    WebSocketError,
    UserInterruption,
    UserMessage,
    ToolCallMessage,
    ToolResponseMessage,
    ToolErrorMessage,
]);

export declare namespace JsonMessage {
    type Raw =
        | AssistantEnd.Raw
        | AssistantMessage.Raw
        | ChatMetadata.Raw
        | WebSocketError.Raw
        | UserInterruption.Raw
        | UserMessage.Raw
        | ToolCallMessage.Raw
        | ToolResponseMessage.Raw
        | ToolErrorMessage.Raw;
}

```

# src/serialization/resources/empathicVoice/types/ReturnCustomVoiceParameters.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnCustomVoiceParameters: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnCustomVoiceParameters.Raw,
    Hume.empathicVoice.ReturnCustomVoiceParameters
> = core.serialization.object({
    gender: core.serialization.number().optional(),
    huskiness: core.serialization.number().optional(),
    nasality: core.serialization.number().optional(),
    pitch: core.serialization.number().optional(),
});

export declare namespace ReturnCustomVoiceParameters {
    interface Raw {
        gender?: number | null;
        huskiness?: number | null;
        nasality?: number | null;
        pitch?: number | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/PostedCustomVoiceBaseVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedCustomVoiceBaseVoice: core.serialization.Schema<
    serializers.empathicVoice.PostedCustomVoiceBaseVoice.Raw,
    Hume.empathicVoice.PostedCustomVoiceBaseVoice
> = core.serialization.enum_(["ITO", "KORA", "DACHER", "AURA", "FINN", "STELLA", "WHIMSY"]);

export declare namespace PostedCustomVoiceBaseVoice {
    type Raw = "ITO" | "KORA" | "DACHER" | "AURA" | "FINN" | "STELLA" | "WHIMSY";
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatGroupPagedChats.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnChatGroupPagedChatsPaginationDirection } from "./ReturnChatGroupPagedChatsPaginationDirection";
import { ReturnChat } from "./ReturnChat";

export const ReturnChatGroupPagedChats: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnChatGroupPagedChats.Raw,
    Hume.empathicVoice.ReturnChatGroupPagedChats
> = core.serialization.object({
    id: core.serialization.string(),
    firstStartTimestamp: core.serialization.property("first_start_timestamp", core.serialization.number()),
    mostRecentStartTimestamp: core.serialization.property("most_recent_start_timestamp", core.serialization.number()),
    numChats: core.serialization.property("num_chats", core.serialization.number()),
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    paginationDirection: core.serialization.property(
        "pagination_direction",
        ReturnChatGroupPagedChatsPaginationDirection
    ),
    chatsPage: core.serialization.property("chats_page", core.serialization.list(ReturnChat)),
    active: core.serialization.boolean().optional(),
});

export declare namespace ReturnChatGroupPagedChats {
    interface Raw {
        id: string;
        first_start_timestamp: number;
        most_recent_start_timestamp: number;
        num_chats: number;
        page_number: number;
        page_size: number;
        total_pages: number;
        pagination_direction: ReturnChatGroupPagedChatsPaginationDirection.Raw;
        chats_page: ReturnChat.Raw[];
        active?: boolean | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/AudioConfiguration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { Encoding } from "./Encoding";

export const AudioConfiguration: core.serialization.ObjectSchema<
    serializers.empathicVoice.AudioConfiguration.Raw,
    Hume.empathicVoice.AudioConfiguration
> = core.serialization.object({
    encoding: Encoding,
    channels: core.serialization.number(),
    sampleRate: core.serialization.property("sample_rate", core.serialization.number()),
});

export declare namespace AudioConfiguration {
    interface Raw {
        encoding: Encoding.Raw;
        channels: number;
        sample_rate: number;
    }
}

```

# src/serialization/resources/empathicVoice/types/ValidationError.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ValidationErrorLocItem } from "./ValidationErrorLocItem";

export const ValidationError: core.serialization.ObjectSchema<
    serializers.empathicVoice.ValidationError.Raw,
    Hume.empathicVoice.ValidationError
> = core.serialization.object({
    loc: core.serialization.list(ValidationErrorLocItem),
    msg: core.serialization.string(),
    type: core.serialization.string(),
});

export declare namespace ValidationError {
    interface Raw {
        loc: ValidationErrorLocItem.Raw[];
        msg: string;
        type: string;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnEventMessageSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnEventMessageSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnEventMessageSpec.Raw,
    Hume.empathicVoice.ReturnEventMessageSpec
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    text: core.serialization.string().optional(),
});

export declare namespace ReturnEventMessageSpec {
    interface Raw {
        enabled: boolean;
        text?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnActiveChatCount.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnActiveChatCountPerTag } from "./ReturnActiveChatCountPerTag";

export const ReturnActiveChatCount: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnActiveChatCount.Raw,
    Hume.empathicVoice.ReturnActiveChatCount
> = core.serialization.object({
    timestamp: core.serialization.number(),
    totalUserActiveChats: core.serialization.property("total_user_active_chats", core.serialization.number()),
    maxAllowedActiveChats: core.serialization.property(
        "max_allowed_active_chats",
        core.serialization.number().optional()
    ),
    moreActiveChatsAllowed: core.serialization.property("more_active_chats_allowed", core.serialization.boolean()),
    perTag: core.serialization.property(
        "per_tag",
        core.serialization.list(ReturnActiveChatCountPerTag.optional()).optional()
    ),
});

export declare namespace ReturnActiveChatCount {
    interface Raw {
        timestamp: number;
        total_user_active_chats: number;
        max_allowed_active_chats?: number | null;
        more_active_chats_allowed: boolean;
        per_tag?: (ReturnActiveChatCountPerTag.Raw | null | undefined)[] | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/PostedTimeoutSpecs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedTimeoutSpecsInactivity } from "./PostedTimeoutSpecsInactivity";
import { PostedTimeoutSpecsMaxDuration } from "./PostedTimeoutSpecsMaxDuration";

export const PostedTimeoutSpecs: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedTimeoutSpecs.Raw,
    Hume.empathicVoice.PostedTimeoutSpecs
> = core.serialization.object({
    inactivity: PostedTimeoutSpecsInactivity.optional(),
    maxDuration: core.serialization.property("max_duration", PostedTimeoutSpecsMaxDuration.optional()),
});

export declare namespace PostedTimeoutSpecs {
    interface Raw {
        inactivity?: PostedTimeoutSpecsInactivity.Raw | null;
        max_duration?: PostedTimeoutSpecsMaxDuration.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ChatMessageToolResult.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ToolResponseMessage } from "./ToolResponseMessage";
import { ToolErrorMessage } from "./ToolErrorMessage";

export const ChatMessageToolResult: core.serialization.Schema<
    serializers.empathicVoice.ChatMessageToolResult.Raw,
    Hume.empathicVoice.ChatMessageToolResult
> = core.serialization.undiscriminatedUnion([ToolResponseMessage, ToolErrorMessage]);

export declare namespace ChatMessageToolResult {
    type Raw = ToolResponseMessage.Raw | ToolErrorMessage.Raw;
}

```

# src/serialization/resources/empathicVoice/types/PostedBuiltinToolName.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedBuiltinToolName: core.serialization.Schema<
    serializers.empathicVoice.PostedBuiltinToolName.Raw,
    Hume.empathicVoice.PostedBuiltinToolName
> = core.serialization.enum_(["web_search", "hang_up"]);

export declare namespace PostedBuiltinToolName {
    type Raw = "web_search" | "hang_up";
}

```

# src/serialization/resources/empathicVoice/types/ReturnPrompt.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnPromptVersionType } from "./ReturnPromptVersionType";

export const ReturnPrompt: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnPrompt.Raw,
    Hume.empathicVoice.ReturnPrompt
> = core.serialization.object({
    id: core.serialization.string(),
    version: core.serialization.number(),
    versionType: core.serialization.property("version_type", ReturnPromptVersionType),
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    name: core.serialization.string(),
    createdOn: core.serialization.property("created_on", core.serialization.number()),
    modifiedOn: core.serialization.property("modified_on", core.serialization.number()),
    text: core.serialization.string(),
});

export declare namespace ReturnPrompt {
    interface Raw {
        id: string;
        version: number;
        version_type: ReturnPromptVersionType.Raw;
        version_description?: string | null;
        name: string;
        created_on: number;
        modified_on: number;
        text: string;
    }
}

```

# src/serialization/resources/empathicVoice/types/PostedConfigPromptSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedConfigPromptSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedConfigPromptSpec.Raw,
    Hume.empathicVoice.PostedConfigPromptSpec
> = core.serialization.object({
    id: core.serialization.string().optional(),
    version: core.serialization.number().optional(),
    text: core.serialization.string().optional(),
});

export declare namespace PostedConfigPromptSpec {
    interface Raw {
        id?: string | null;
        version?: number | null;
        text?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnCustomVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnCustomVoiceBaseVoice } from "./ReturnCustomVoiceBaseVoice";
import { ReturnCustomVoiceParameters } from "./ReturnCustomVoiceParameters";

export const ReturnCustomVoice: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnCustomVoice.Raw,
    Hume.empathicVoice.ReturnCustomVoice
> = core.serialization.object({
    id: core.serialization.string(),
    version: core.serialization.number(),
    name: core.serialization.string(),
    createdOn: core.serialization.property("created_on", core.serialization.number()),
    modifiedOn: core.serialization.property("modified_on", core.serialization.number()),
    baseVoice: core.serialization.property("base_voice", ReturnCustomVoiceBaseVoice),
    parameterModel: core.serialization.property(
        "parameter_model",
        core.serialization.stringLiteral("20240715-4parameter")
    ),
    parameters: ReturnCustomVoiceParameters,
});

export declare namespace ReturnCustomVoice {
    interface Raw {
        id: string;
        version: number;
        name: string;
        created_on: number;
        modified_on: number;
        base_voice: ReturnCustomVoiceBaseVoice.Raw;
        parameter_model: "20240715-4parameter";
        parameters: ReturnCustomVoiceParameters.Raw;
    }
}

```

# src/serialization/resources/empathicVoice/types/Encoding.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const Encoding: core.serialization.Schema<serializers.empathicVoice.Encoding.Raw, Hume.empathicVoice.Encoding> =
    core.serialization.stringLiteral("linear16");

export declare namespace Encoding {
    type Raw = "linear16";
}

```

# src/serialization/resources/empathicVoice/types/ReturnPagedCustomVoices.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnCustomVoice } from "./ReturnCustomVoice";

export const ReturnPagedCustomVoices: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnPagedCustomVoices.Raw,
    Hume.empathicVoice.ReturnPagedCustomVoices
> = core.serialization.object({
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    customVoicesPage: core.serialization.property("custom_voices_page", core.serialization.list(ReturnCustomVoice)),
});

export declare namespace ReturnPagedCustomVoices {
    interface Raw {
        page_number: number;
        page_size: number;
        total_pages: number;
        custom_voices_page: ReturnCustomVoice.Raw[];
    }
}

```

# src/serialization/resources/empathicVoice/types/ChatMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { Role } from "./Role";
import { ToolCallMessage } from "./ToolCallMessage";
import { ChatMessageToolResult } from "./ChatMessageToolResult";

export const ChatMessage: core.serialization.ObjectSchema<
    serializers.empathicVoice.ChatMessage.Raw,
    Hume.empathicVoice.ChatMessage
> = core.serialization.object({
    role: Role,
    content: core.serialization.string().optional(),
    toolCall: core.serialization.property("tool_call", ToolCallMessage.optional()),
    toolResult: core.serialization.property("tool_result", ChatMessageToolResult.optional()),
});

export declare namespace ChatMessage {
    interface Raw {
        role: Role.Raw;
        content?: string | null;
        tool_call?: ToolCallMessage.Raw | null;
        tool_result?: ChatMessageToolResult.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnTimeoutSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnTimeoutSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnTimeoutSpec.Raw,
    Hume.empathicVoice.ReturnTimeoutSpec
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    durationSecs: core.serialization.property("duration_secs", core.serialization.number().optional()),
});

export declare namespace ReturnTimeoutSpec {
    interface Raw {
        enabled: boolean;
        duration_secs?: number | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatGroupPagedEventsPaginationDirection.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnChatGroupPagedEventsPaginationDirection: core.serialization.Schema<
    serializers.empathicVoice.ReturnChatGroupPagedEventsPaginationDirection.Raw,
    Hume.empathicVoice.ReturnChatGroupPagedEventsPaginationDirection
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ReturnChatGroupPagedEventsPaginationDirection {
    type Raw = "ASC" | "DESC";
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatGroupPagedEvents.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnChatGroupPagedEventsPaginationDirection } from "./ReturnChatGroupPagedEventsPaginationDirection";
import { ReturnChatEvent } from "./ReturnChatEvent";

export const ReturnChatGroupPagedEvents: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnChatGroupPagedEvents.Raw,
    Hume.empathicVoice.ReturnChatGroupPagedEvents
> = core.serialization.object({
    id: core.serialization.string(),
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    paginationDirection: core.serialization.property(
        "pagination_direction",
        ReturnChatGroupPagedEventsPaginationDirection
    ),
    eventsPage: core.serialization.property("events_page", core.serialization.list(ReturnChatEvent)),
});

export declare namespace ReturnChatGroupPagedEvents {
    interface Raw {
        id: string;
        page_number: number;
        page_size: number;
        total_pages: number;
        pagination_direction: ReturnChatGroupPagedEventsPaginationDirection.Raw;
        events_page: ReturnChatEvent.Raw[];
    }
}

```

# src/serialization/resources/empathicVoice/types/UserMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ChatMessage } from "./ChatMessage";
import { Inference } from "./Inference";
import { MillisecondInterval } from "./MillisecondInterval";

export const UserMessage: core.serialization.ObjectSchema<
    serializers.empathicVoice.UserMessage.Raw,
    Hume.empathicVoice.UserMessage
> = core.serialization.object({
    type: core.serialization.stringLiteral("user_message"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    message: ChatMessage,
    models: Inference,
    time: MillisecondInterval,
    fromText: core.serialization.property("from_text", core.serialization.boolean()),
});

export declare namespace UserMessage {
    interface Raw {
        type: "user_message";
        custom_session_id?: string | null;
        message: ChatMessage.Raw;
        models: Inference.Raw;
        time: MillisecondInterval.Raw;
        from_text: boolean;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnPagedChatGroupsPaginationDirection.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnPagedChatGroupsPaginationDirection: core.serialization.Schema<
    serializers.empathicVoice.ReturnPagedChatGroupsPaginationDirection.Raw,
    Hume.empathicVoice.ReturnPagedChatGroupsPaginationDirection
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ReturnPagedChatGroupsPaginationDirection {
    type Raw = "ASC" | "DESC";
}

```

# src/serialization/resources/empathicVoice/types/BuiltInTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const BuiltInTool: core.serialization.Schema<
    serializers.empathicVoice.BuiltInTool.Raw,
    Hume.empathicVoice.BuiltInTool
> = core.serialization.enum_(["web_search", "hang_up"]);

export declare namespace BuiltInTool {
    type Raw = "web_search" | "hang_up";
}

```

# src/serialization/resources/empathicVoice/types/PostedTimeoutSpecsMaxDuration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedTimeoutSpecsMaxDuration: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedTimeoutSpecsMaxDuration.Raw,
    Hume.empathicVoice.PostedTimeoutSpecsMaxDuration
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    durationSecs: core.serialization.property("duration_secs", core.serialization.number().optional()),
});

export declare namespace PostedTimeoutSpecsMaxDuration {
    interface Raw {
        enabled: boolean;
        duration_secs?: number | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/Inference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ProsodyInference } from "./ProsodyInference";

export const Inference: core.serialization.ObjectSchema<
    serializers.empathicVoice.Inference.Raw,
    Hume.empathicVoice.Inference
> = core.serialization.object({
    prosody: ProsodyInference.optional(),
});

export declare namespace Inference {
    interface Raw {
        prosody?: ProsodyInference.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/PostedBuiltinTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedBuiltinToolName } from "./PostedBuiltinToolName";

export const PostedBuiltinTool: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedBuiltinTool.Raw,
    Hume.empathicVoice.PostedBuiltinTool
> = core.serialization.object({
    name: PostedBuiltinToolName,
    fallbackContent: core.serialization.property("fallback_content", core.serialization.string().optional()),
});

export declare namespace PostedBuiltinTool {
    interface Raw {
        name: PostedBuiltinToolName.Raw;
        fallback_content?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/index.ts

```typescript
export * from "./ErrorResponse";
export * from "./ReturnUserDefinedToolToolType";
export * from "./ReturnUserDefinedToolVersionType";
export * from "./ReturnUserDefinedTool";
export * from "./ReturnPromptVersionType";
export * from "./ReturnPrompt";
export * from "./PostedCustomVoiceBaseVoice";
export * from "./PostedCustomVoiceParameters";
export * from "./PostedCustomVoice";
export * from "./ReturnCustomVoiceBaseVoice";
export * from "./ReturnCustomVoiceParameters";
export * from "./ReturnCustomVoice";
export * from "./PostedBuiltinToolName";
export * from "./PostedBuiltinTool";
export * from "./PostedConfigPromptSpec";
export * from "./PostedEllmModel";
export * from "./PostedEventMessageSpec";
export * from "./PostedEventMessageSpecs";
export * from "./PostedLanguageModelModelProvider";
export * from "./PostedLanguageModel";
export * from "./PostedTimeoutSpec";
export * from "./PostedTimeoutSpecsInactivity";
export * from "./PostedTimeoutSpecsMaxDuration";
export * from "./PostedTimeoutSpecs";
export * from "./PostedUserDefinedToolSpec";
export * from "./PostedVoice";
export * from "./ReturnBuiltinToolToolType";
export * from "./ReturnBuiltinTool";
export * from "./ReturnConfig";
export * from "./ReturnEllmModel";
export * from "./ReturnEventMessageSpec";
export * from "./ReturnEventMessageSpecs";
export * from "./ReturnLanguageModelModelProvider";
export * from "./ReturnLanguageModel";
export * from "./ReturnTimeoutSpec";
export * from "./ReturnTimeoutSpecs";
export * from "./ReturnVoice";
export * from "./ReturnPagedUserDefinedTools";
export * from "./ReturnPagedPrompts";
export * from "./ReturnPagedCustomVoices";
export * from "./ReturnPagedConfigs";
export * from "./ReturnChatStatus";
export * from "./ReturnChat";
export * from "./ReturnConfigSpec";
export * from "./ReturnPagedChatsPaginationDirection";
export * from "./ReturnPagedChats";
export * from "./ReturnChatEventRole";
export * from "./ReturnChatEventType";
export * from "./ReturnChatEvent";
export * from "./ReturnChatPagedEventsStatus";
export * from "./ReturnChatPagedEventsPaginationDirection";
export * from "./ReturnChatPagedEvents";
export * from "./ReturnActiveChatCount";
export * from "./ReturnActiveChatCountPerTag";
export * from "./ReturnChatGroup";
export * from "./ReturnPagedChatGroupsPaginationDirection";
export * from "./ReturnPagedChatGroups";
export * from "./ReturnChatGroupPagedChatsPaginationDirection";
export * from "./ReturnChatGroupPagedChats";
export * from "./ReturnChatGroupPagedEventsPaginationDirection";
export * from "./ReturnChatGroupPagedEvents";
export * from "./PostedPromptSpec";
export * from "./AssistantInput";
export * from "./AudioConfiguration";
export * from "./AudioInput";
export * from "./BuiltInTool";
export * from "./BuiltinToolConfig";
export * from "./Context";
export * from "./ContextType";
export * from "./Encoding";
export * from "./ErrorLevel";
export * from "./PauseAssistantMessage";
export * from "./ResumeAssistantMessage";
export * from "./SessionSettings";
export * from "./Tool";
export * from "./ToolErrorMessage";
export * from "./ToolResponseMessage";
export * from "./ToolType";
export * from "./UserInput";
export * from "./AssistantEnd";
export * from "./AssistantMessage";
export * from "./AudioOutput";
export * from "./ChatMessageToolResult";
export * from "./ChatMessage";
export * from "./ChatMetadata";
export * from "./EmotionScores";
export * from "./WebSocketError";
export * from "./Inference";
export * from "./MillisecondInterval";
export * from "./ProsodyInference";
export * from "./Role";
export * from "./ToolCallMessage";
export * from "./UserInterruption";
export * from "./UserMessage";
export * from "./JsonMessage";
export * from "./TtsInput";
export * from "./TextInput";
export * from "./FunctionCallResponseInput";
export * from "./ExtendedVoiceArgs";
export * from "./HttpValidationError";
export * from "./ValidationErrorLocItem";
export * from "./ValidationError";
export * from "./VoiceArgs";
export * from "./VoiceNameEnum";

```

# src/serialization/resources/empathicVoice/types/AudioOutput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const AudioOutput: core.serialization.ObjectSchema<
    serializers.empathicVoice.AudioOutput.Raw,
    Hume.empathicVoice.AudioOutput
> = core.serialization.object({
    type: core.serialization.stringLiteral("audio_output"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    id: core.serialization.string(),
    index: core.serialization.number(),
    data: core.serialization.string(),
});

export declare namespace AudioOutput {
    interface Raw {
        type: "audio_output";
        custom_session_id?: string | null;
        id: string;
        index: number;
        data: string;
    }
}

```

# src/serialization/resources/empathicVoice/types/AssistantInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const AssistantInput: core.serialization.ObjectSchema<
    serializers.empathicVoice.AssistantInput.Raw,
    Hume.empathicVoice.AssistantInput
> = core.serialization.object({
    type: core.serialization.stringLiteral("assistant_input"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    text: core.serialization.string(),
});

export declare namespace AssistantInput {
    interface Raw {
        type: "assistant_input";
        custom_session_id?: string | null;
        text: string;
    }
}

```

# src/serialization/resources/empathicVoice/types/MillisecondInterval.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const MillisecondInterval: core.serialization.ObjectSchema<
    serializers.empathicVoice.MillisecondInterval.Raw,
    Hume.empathicVoice.MillisecondInterval
> = core.serialization.object({
    begin: core.serialization.number(),
    end: core.serialization.number(),
});

export declare namespace MillisecondInterval {
    interface Raw {
        begin: number;
        end: number;
    }
}

```

# src/serialization/resources/empathicVoice/types/AssistantEnd.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const AssistantEnd: core.serialization.ObjectSchema<
    serializers.empathicVoice.AssistantEnd.Raw,
    Hume.empathicVoice.AssistantEnd
> = core.serialization.object({
    type: core.serialization.stringLiteral("assistant_end"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
});

export declare namespace AssistantEnd {
    interface Raw {
        type: "assistant_end";
        custom_session_id?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatGroupPagedChatsPaginationDirection.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ReturnChatGroupPagedChatsPaginationDirection: core.serialization.Schema<
    serializers.empathicVoice.ReturnChatGroupPagedChatsPaginationDirection.Raw,
    Hume.empathicVoice.ReturnChatGroupPagedChatsPaginationDirection
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ReturnChatGroupPagedChatsPaginationDirection {
    type Raw = "ASC" | "DESC";
}

```

# src/serialization/resources/empathicVoice/types/ReturnConfig.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnPrompt } from "./ReturnPrompt";
import { ReturnVoice } from "./ReturnVoice";
import { ReturnLanguageModel } from "./ReturnLanguageModel";
import { ReturnEllmModel } from "./ReturnEllmModel";
import { ReturnUserDefinedTool } from "./ReturnUserDefinedTool";
import { ReturnBuiltinTool } from "./ReturnBuiltinTool";
import { ReturnEventMessageSpecs } from "./ReturnEventMessageSpecs";
import { ReturnTimeoutSpecs } from "./ReturnTimeoutSpecs";

export const ReturnConfig: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnConfig.Raw,
    Hume.empathicVoice.ReturnConfig
> = core.serialization.object({
    id: core.serialization.string().optional(),
    version: core.serialization.number().optional(),
    eviVersion: core.serialization.property("evi_version", core.serialization.string().optional()),
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    createdOn: core.serialization.property("created_on", core.serialization.number().optional()),
    modifiedOn: core.serialization.property("modified_on", core.serialization.number().optional()),
    prompt: ReturnPrompt.optional(),
    voice: ReturnVoice.optional(),
    languageModel: core.serialization.property("language_model", ReturnLanguageModel.optional()),
    ellmModel: core.serialization.property("ellm_model", ReturnEllmModel.optional()),
    tools: core.serialization.list(ReturnUserDefinedTool.optional()).optional(),
    builtinTools: core.serialization.property(
        "builtin_tools",
        core.serialization.list(ReturnBuiltinTool.optional()).optional()
    ),
    eventMessages: core.serialization.property("event_messages", ReturnEventMessageSpecs.optional()),
    timeouts: ReturnTimeoutSpecs.optional(),
});

export declare namespace ReturnConfig {
    interface Raw {
        id?: string | null;
        version?: number | null;
        evi_version?: string | null;
        version_description?: string | null;
        name?: string | null;
        created_on?: number | null;
        modified_on?: number | null;
        prompt?: ReturnPrompt.Raw | null;
        voice?: ReturnVoice.Raw | null;
        language_model?: ReturnLanguageModel.Raw | null;
        ellm_model?: ReturnEllmModel.Raw | null;
        tools?: (ReturnUserDefinedTool.Raw | null | undefined)[] | null;
        builtin_tools?: (ReturnBuiltinTool.Raw | null | undefined)[] | null;
        event_messages?: ReturnEventMessageSpecs.Raw | null;
        timeouts?: ReturnTimeoutSpecs.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnChatEvent.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnChatEventRole } from "./ReturnChatEventRole";
import { ReturnChatEventType } from "./ReturnChatEventType";

export const ReturnChatEvent: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnChatEvent.Raw,
    Hume.empathicVoice.ReturnChatEvent
> = core.serialization.object({
    id: core.serialization.string(),
    chatId: core.serialization.property("chat_id", core.serialization.string()),
    timestamp: core.serialization.number(),
    role: ReturnChatEventRole,
    type: ReturnChatEventType,
    messageText: core.serialization.property("message_text", core.serialization.string().optional()),
    emotionFeatures: core.serialization.property("emotion_features", core.serialization.string().optional()),
    metadata: core.serialization.string().optional(),
});

export declare namespace ReturnChatEvent {
    interface Raw {
        id: string;
        chat_id: string;
        timestamp: number;
        role: ReturnChatEventRole.Raw;
        type: ReturnChatEventType.Raw;
        message_text?: string | null;
        emotion_features?: string | null;
        metadata?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/Tool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ToolType } from "./ToolType";

export const Tool: core.serialization.ObjectSchema<serializers.empathicVoice.Tool.Raw, Hume.empathicVoice.Tool> =
    core.serialization.object({
        type: ToolType,
        name: core.serialization.string(),
        parameters: core.serialization.string(),
        description: core.serialization.string().optional(),
        fallbackContent: core.serialization.property("fallback_content", core.serialization.string().optional()),
    });

export declare namespace Tool {
    interface Raw {
        type: ToolType.Raw;
        name: string;
        parameters: string;
        description?: string | null;
        fallback_content?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnLanguageModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnLanguageModelModelProvider } from "./ReturnLanguageModelModelProvider";

export const ReturnLanguageModel: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnLanguageModel.Raw,
    Hume.empathicVoice.ReturnLanguageModel
> = core.serialization.object({
    modelProvider: core.serialization.property("model_provider", ReturnLanguageModelModelProvider.optional()),
    modelResource: core.serialization.property("model_resource", core.serialization.string().optional()),
    temperature: core.serialization.number().optional(),
});

export declare namespace ReturnLanguageModel {
    interface Raw {
        model_provider?: ReturnLanguageModelModelProvider.Raw | null;
        model_resource?: string | null;
        temperature?: number | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ReturnEventMessageSpecs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnEventMessageSpec } from "./ReturnEventMessageSpec";

export const ReturnEventMessageSpecs: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnEventMessageSpecs.Raw,
    Hume.empathicVoice.ReturnEventMessageSpecs
> = core.serialization.object({
    onNewChat: core.serialization.property("on_new_chat", ReturnEventMessageSpec.optional()),
    onInactivityTimeout: core.serialization.property("on_inactivity_timeout", ReturnEventMessageSpec.optional()),
    onMaxDurationTimeout: core.serialization.property("on_max_duration_timeout", ReturnEventMessageSpec.optional()),
});

export declare namespace ReturnEventMessageSpecs {
    interface Raw {
        on_new_chat?: ReturnEventMessageSpec.Raw | null;
        on_inactivity_timeout?: ReturnEventMessageSpec.Raw | null;
        on_max_duration_timeout?: ReturnEventMessageSpec.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ProsodyInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { EmotionScores } from "./EmotionScores";

export const ProsodyInference: core.serialization.ObjectSchema<
    serializers.empathicVoice.ProsodyInference.Raw,
    Hume.empathicVoice.ProsodyInference
> = core.serialization.object({
    scores: EmotionScores,
});

export declare namespace ProsodyInference {
    interface Raw {
        scores: EmotionScores.Raw;
    }
}

```

# src/serialization/resources/empathicVoice/types/ErrorResponse.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ErrorResponse: core.serialization.ObjectSchema<
    serializers.empathicVoice.ErrorResponse.Raw,
    Hume.empathicVoice.ErrorResponse
> = core.serialization.object({
    error: core.serialization.string().optional(),
    message: core.serialization.string().optional(),
});

export declare namespace ErrorResponse {
    interface Raw {
        error?: string | null;
        message?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/types/ContextType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const ContextType: core.serialization.Schema<
    serializers.empathicVoice.ContextType.Raw,
    Hume.empathicVoice.ContextType
> = core.serialization.enum_(["editable", "persistent", "temporary"]);

export declare namespace ContextType {
    type Raw = "editable" | "persistent" | "temporary";
}

```

# src/serialization/resources/empathicVoice/types/ToolResponseMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ToolType } from "./ToolType";

export const ToolResponseMessage: core.serialization.ObjectSchema<
    serializers.empathicVoice.ToolResponseMessage.Raw,
    Hume.empathicVoice.ToolResponseMessage
> = core.serialization.object({
    type: core.serialization.stringLiteral("tool_response"),
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    toolCallId: core.serialization.property("tool_call_id", core.serialization.string()),
    content: core.serialization.string(),
    toolName: core.serialization.property("tool_name", core.serialization.string().optional()),
    toolType: core.serialization.property("tool_type", ToolType.optional()),
});

export declare namespace ToolResponseMessage {
    interface Raw {
        type: "tool_response";
        custom_session_id?: string | null;
        tool_call_id: string;
        content: string;
        tool_name?: string | null;
        tool_type?: ToolType.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/resources/index.ts

```typescript
export * as chat from "./chat";
export * from "./chat/types";
export * as tools from "./tools";
export * as prompts from "./prompts";
export * from "./tools/client/requests";
export * from "./prompts/client/requests";
export * as customVoices from "./customVoices";
export * from "./customVoices/client/requests";
export * as configs from "./configs";
export * from "./configs/client/requests";

```

# src/serialization/resources/empathicVoice/resources/chat/index.ts

```typescript
export * from "./types";

```

# src/serialization/resources/empathicVoice/resources/chat/types/PublishEvent.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { AudioInput } from "../../../types/AudioInput";
import { SessionSettings } from "../../../types/SessionSettings";
import { UserInput } from "../../../types/UserInput";
import { AssistantInput } from "../../../types/AssistantInput";
import { ToolResponseMessage } from "../../../types/ToolResponseMessage";
import { ToolErrorMessage } from "../../../types/ToolErrorMessage";
import { PauseAssistantMessage } from "../../../types/PauseAssistantMessage";
import { ResumeAssistantMessage } from "../../../types/ResumeAssistantMessage";

export const PublishEvent: core.serialization.Schema<
    serializers.empathicVoice.PublishEvent.Raw,
    Hume.empathicVoice.PublishEvent
> = core.serialization.undiscriminatedUnion([
    AudioInput,
    SessionSettings,
    UserInput,
    AssistantInput,
    ToolResponseMessage,
    ToolErrorMessage,
    PauseAssistantMessage,
    ResumeAssistantMessage,
]);

export declare namespace PublishEvent {
    type Raw =
        | AudioInput.Raw
        | SessionSettings.Raw
        | UserInput.Raw
        | AssistantInput.Raw
        | ToolResponseMessage.Raw
        | ToolErrorMessage.Raw
        | PauseAssistantMessage.Raw
        | ResumeAssistantMessage.Raw;
}

```

# src/serialization/resources/empathicVoice/resources/chat/types/SubscribeEvent.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { AssistantEnd } from "../../../types/AssistantEnd";
import { AssistantMessage } from "../../../types/AssistantMessage";
import { AudioOutput } from "../../../types/AudioOutput";
import { ChatMetadata } from "../../../types/ChatMetadata";
import { WebSocketError } from "../../../types/WebSocketError";
import { UserInterruption } from "../../../types/UserInterruption";
import { UserMessage } from "../../../types/UserMessage";
import { ToolCallMessage } from "../../../types/ToolCallMessage";
import { ToolResponseMessage } from "../../../types/ToolResponseMessage";
import { ToolErrorMessage } from "../../../types/ToolErrorMessage";

export const SubscribeEvent: core.serialization.Schema<
    serializers.empathicVoice.SubscribeEvent.Raw,
    Hume.empathicVoice.SubscribeEvent
> = core.serialization.undiscriminatedUnion([
    AssistantEnd,
    AssistantMessage,
    AudioOutput,
    ChatMetadata,
    WebSocketError,
    UserInterruption,
    UserMessage,
    ToolCallMessage,
    ToolResponseMessage,
    ToolErrorMessage,
]);

export declare namespace SubscribeEvent {
    type Raw =
        | AssistantEnd.Raw
        | AssistantMessage.Raw
        | AudioOutput.Raw
        | ChatMetadata.Raw
        | WebSocketError.Raw
        | UserInterruption.Raw
        | UserMessage.Raw
        | ToolCallMessage.Raw
        | ToolResponseMessage.Raw
        | ToolErrorMessage.Raw;
}

```

# src/serialization/resources/empathicVoice/resources/chat/types/index.ts

```typescript
export * from "./SubscribeEvent";
export * from "./PublishEvent";

```

# src/serialization/resources/empathicVoice/resources/prompts/index.ts

```typescript
export * from "./client";

```

# src/serialization/resources/empathicVoice/resources/prompts/client/getPromptVersion.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ReturnPrompt } from "../../../types/ReturnPrompt";

export const Response: core.serialization.Schema<
    serializers.empathicVoice.prompts.getPromptVersion.Response.Raw,
    Hume.empathicVoice.ReturnPrompt | undefined
> = ReturnPrompt.optional();

export declare namespace Response {
    type Raw = ReturnPrompt.Raw | null | undefined;
}

```

# src/serialization/resources/empathicVoice/resources/prompts/client/updatePromptDescription.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ReturnPrompt } from "../../../types/ReturnPrompt";

export const Response: core.serialization.Schema<
    serializers.empathicVoice.prompts.updatePromptDescription.Response.Raw,
    Hume.empathicVoice.ReturnPrompt | undefined
> = ReturnPrompt.optional();

export declare namespace Response {
    type Raw = ReturnPrompt.Raw | null | undefined;
}

```

# src/serialization/resources/empathicVoice/resources/prompts/client/createPromptVerison.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ReturnPrompt } from "../../../types/ReturnPrompt";

export const Response: core.serialization.Schema<
    serializers.empathicVoice.prompts.createPromptVerison.Response.Raw,
    Hume.empathicVoice.ReturnPrompt | undefined
> = ReturnPrompt.optional();

export declare namespace Response {
    type Raw = ReturnPrompt.Raw | null | undefined;
}

```

# src/serialization/resources/empathicVoice/resources/prompts/client/createPrompt.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ReturnPrompt } from "../../../types/ReturnPrompt";

export const Response: core.serialization.Schema<
    serializers.empathicVoice.prompts.createPrompt.Response.Raw,
    Hume.empathicVoice.ReturnPrompt | undefined
> = ReturnPrompt.optional();

export declare namespace Response {
    type Raw = ReturnPrompt.Raw | null | undefined;
}

```

# src/serialization/resources/empathicVoice/resources/prompts/client/index.ts

```typescript
export * as createPrompt from "./createPrompt";
export * as createPromptVerison from "./createPromptVerison";
export * as getPromptVersion from "./getPromptVersion";
export * as updatePromptDescription from "./updatePromptDescription";
export * from "./requests";

```

# src/serialization/resources/empathicVoice/resources/prompts/client/requests/PostedPromptName.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedPromptName: core.serialization.Schema<
    serializers.empathicVoice.PostedPromptName.Raw,
    Hume.empathicVoice.PostedPromptName
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace PostedPromptName {
    interface Raw {
        name: string;
    }
}

```

# src/serialization/resources/empathicVoice/resources/prompts/client/requests/PostedPrompt.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedPrompt: core.serialization.Schema<
    serializers.empathicVoice.PostedPrompt.Raw,
    Hume.empathicVoice.PostedPrompt
> = core.serialization.object({
    name: core.serialization.string(),
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    text: core.serialization.string(),
});

export declare namespace PostedPrompt {
    interface Raw {
        name: string;
        version_description?: string | null;
        text: string;
    }
}

```

# src/serialization/resources/empathicVoice/resources/prompts/client/requests/PostedPromptVersion.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedPromptVersion: core.serialization.Schema<
    serializers.empathicVoice.PostedPromptVersion.Raw,
    Hume.empathicVoice.PostedPromptVersion
> = core.serialization.object({
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    text: core.serialization.string(),
});

export declare namespace PostedPromptVersion {
    interface Raw {
        version_description?: string | null;
        text: string;
    }
}

```

# src/serialization/resources/empathicVoice/resources/prompts/client/requests/index.ts

```typescript
export { PostedPrompt } from "./PostedPrompt";
export { PostedPromptVersion } from "./PostedPromptVersion";
export { PostedPromptName } from "./PostedPromptName";
export { PostedPromptVersionDescription } from "./PostedPromptVersionDescription";

```

# src/serialization/resources/empathicVoice/resources/prompts/client/requests/PostedPromptVersionDescription.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedPromptVersionDescription: core.serialization.Schema<
    serializers.empathicVoice.PostedPromptVersionDescription.Raw,
    Hume.empathicVoice.PostedPromptVersionDescription
> = core.serialization.object({
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
});

export declare namespace PostedPromptVersionDescription {
    interface Raw {
        version_description?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/resources/tools/index.ts

```typescript
export * from "./client";

```

# src/serialization/resources/empathicVoice/resources/tools/client/createTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ReturnUserDefinedTool } from "../../../types/ReturnUserDefinedTool";

export const Response: core.serialization.Schema<
    serializers.empathicVoice.tools.createTool.Response.Raw,
    Hume.empathicVoice.ReturnUserDefinedTool | undefined
> = ReturnUserDefinedTool.optional();

export declare namespace Response {
    type Raw = ReturnUserDefinedTool.Raw | null | undefined;
}

```

# src/serialization/resources/empathicVoice/resources/tools/client/updateToolDescription.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ReturnUserDefinedTool } from "../../../types/ReturnUserDefinedTool";

export const Response: core.serialization.Schema<
    serializers.empathicVoice.tools.updateToolDescription.Response.Raw,
    Hume.empathicVoice.ReturnUserDefinedTool | undefined
> = ReturnUserDefinedTool.optional();

export declare namespace Response {
    type Raw = ReturnUserDefinedTool.Raw | null | undefined;
}

```

# src/serialization/resources/empathicVoice/resources/tools/client/createToolVersion.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ReturnUserDefinedTool } from "../../../types/ReturnUserDefinedTool";

export const Response: core.serialization.Schema<
    serializers.empathicVoice.tools.createToolVersion.Response.Raw,
    Hume.empathicVoice.ReturnUserDefinedTool | undefined
> = ReturnUserDefinedTool.optional();

export declare namespace Response {
    type Raw = ReturnUserDefinedTool.Raw | null | undefined;
}

```

# src/serialization/resources/empathicVoice/resources/tools/client/index.ts

```typescript
export * as createTool from "./createTool";
export * as createToolVersion from "./createToolVersion";
export * as getToolVersion from "./getToolVersion";
export * as updateToolDescription from "./updateToolDescription";
export * from "./requests";

```

# src/serialization/resources/empathicVoice/resources/tools/client/getToolVersion.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ReturnUserDefinedTool } from "../../../types/ReturnUserDefinedTool";

export const Response: core.serialization.Schema<
    serializers.empathicVoice.tools.getToolVersion.Response.Raw,
    Hume.empathicVoice.ReturnUserDefinedTool | undefined
> = ReturnUserDefinedTool.optional();

export declare namespace Response {
    type Raw = ReturnUserDefinedTool.Raw | null | undefined;
}

```

# src/serialization/resources/empathicVoice/resources/tools/client/requests/PostedUserDefinedToolVersion.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedUserDefinedToolVersion: core.serialization.Schema<
    serializers.empathicVoice.PostedUserDefinedToolVersion.Raw,
    Hume.empathicVoice.PostedUserDefinedToolVersion
> = core.serialization.object({
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    parameters: core.serialization.string(),
    fallbackContent: core.serialization.property("fallback_content", core.serialization.string().optional()),
});

export declare namespace PostedUserDefinedToolVersion {
    interface Raw {
        version_description?: string | null;
        description?: string | null;
        parameters: string;
        fallback_content?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/resources/tools/client/requests/PostedUserDefinedToolName.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedUserDefinedToolName: core.serialization.Schema<
    serializers.empathicVoice.PostedUserDefinedToolName.Raw,
    Hume.empathicVoice.PostedUserDefinedToolName
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace PostedUserDefinedToolName {
    interface Raw {
        name: string;
    }
}

```

# src/serialization/resources/empathicVoice/resources/tools/client/requests/PostedUserDefinedToolVersionDescription.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedUserDefinedToolVersionDescription: core.serialization.Schema<
    serializers.empathicVoice.PostedUserDefinedToolVersionDescription.Raw,
    Hume.empathicVoice.PostedUserDefinedToolVersionDescription
> = core.serialization.object({
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
});

export declare namespace PostedUserDefinedToolVersionDescription {
    interface Raw {
        version_description?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/resources/tools/client/requests/PostedUserDefinedTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedUserDefinedTool: core.serialization.Schema<
    serializers.empathicVoice.PostedUserDefinedTool.Raw,
    Hume.empathicVoice.PostedUserDefinedTool
> = core.serialization.object({
    name: core.serialization.string(),
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    parameters: core.serialization.string(),
    fallbackContent: core.serialization.property("fallback_content", core.serialization.string().optional()),
});

export declare namespace PostedUserDefinedTool {
    interface Raw {
        name: string;
        version_description?: string | null;
        description?: string | null;
        parameters: string;
        fallback_content?: string | null;
    }
}

```

# src/serialization/resources/empathicVoice/resources/tools/client/requests/index.ts

```typescript
export { PostedUserDefinedTool } from "./PostedUserDefinedTool";
export { PostedUserDefinedToolVersion } from "./PostedUserDefinedToolVersion";
export { PostedUserDefinedToolName } from "./PostedUserDefinedToolName";
export { PostedUserDefinedToolVersionDescription } from "./PostedUserDefinedToolVersionDescription";

```

# src/serialization/resources/empathicVoice/resources/customVoices/index.ts

```typescript
export * from "./client";

```

# src/serialization/resources/empathicVoice/resources/customVoices/client/index.ts

```typescript
export * from "./requests";

```

# src/serialization/resources/empathicVoice/resources/customVoices/client/requests/PostedCustomVoiceName.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedCustomVoiceName: core.serialization.Schema<
    serializers.empathicVoice.PostedCustomVoiceName.Raw,
    Hume.empathicVoice.PostedCustomVoiceName
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace PostedCustomVoiceName {
    interface Raw {
        name: string;
    }
}

```

# src/serialization/resources/empathicVoice/resources/customVoices/client/requests/index.ts

```typescript
export { PostedCustomVoiceName } from "./PostedCustomVoiceName";

```

# src/serialization/resources/empathicVoice/resources/configs/index.ts

```typescript
export * from "./client";

```

# src/serialization/resources/empathicVoice/resources/configs/client/index.ts

```typescript
export * from "./requests";

```

# src/serialization/resources/empathicVoice/resources/configs/client/requests/PostedConfigName.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedConfigName: core.serialization.Schema<
    serializers.empathicVoice.PostedConfigName.Raw,
    Hume.empathicVoice.PostedConfigName
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace PostedConfigName {
    interface Raw {
        name: string;
    }
}

```

# src/serialization/resources/empathicVoice/resources/configs/client/requests/PostedConfig.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { PostedConfigPromptSpec } from "../../../../types/PostedConfigPromptSpec";
import { PostedVoice } from "../../../../types/PostedVoice";
import { PostedLanguageModel } from "../../../../types/PostedLanguageModel";
import { PostedEllmModel } from "../../../../types/PostedEllmModel";
import { PostedUserDefinedToolSpec } from "../../../../types/PostedUserDefinedToolSpec";
import { PostedBuiltinTool } from "../../../../types/PostedBuiltinTool";
import { PostedEventMessageSpecs } from "../../../../types/PostedEventMessageSpecs";
import { PostedTimeoutSpecs } from "../../../../types/PostedTimeoutSpecs";

export const PostedConfig: core.serialization.Schema<
    serializers.empathicVoice.PostedConfig.Raw,
    Hume.empathicVoice.PostedConfig
> = core.serialization.object({
    eviVersion: core.serialization.property("evi_version", core.serialization.string()),
    name: core.serialization.string(),
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    prompt: PostedConfigPromptSpec.optional(),
    voice: PostedVoice.optional(),
    languageModel: core.serialization.property("language_model", PostedLanguageModel.optional()),
    ellmModel: core.serialization.property("ellm_model", PostedEllmModel.optional()),
    tools: core.serialization.list(PostedUserDefinedToolSpec.optional()).optional(),
    builtinTools: core.serialization.property(
        "builtin_tools",
        core.serialization.list(PostedBuiltinTool.optional()).optional()
    ),
    eventMessages: core.serialization.property("event_messages", PostedEventMessageSpecs.optional()),
    timeouts: PostedTimeoutSpecs.optional(),
});

export declare namespace PostedConfig {
    interface Raw {
        evi_version: string;
        name: string;
        version_description?: string | null;
        prompt?: PostedConfigPromptSpec.Raw | null;
        voice?: PostedVoice.Raw | null;
        language_model?: PostedLanguageModel.Raw | null;
        ellm_model?: PostedEllmModel.Raw | null;
        tools?: (PostedUserDefinedToolSpec.Raw | null | undefined)[] | null;
        builtin_tools?: (PostedBuiltinTool.Raw | null | undefined)[] | null;
        event_messages?: PostedEventMessageSpecs.Raw | null;
        timeouts?: PostedTimeoutSpecs.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/resources/configs/client/requests/PostedConfigVersion.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { PostedConfigPromptSpec } from "../../../../types/PostedConfigPromptSpec";
import { PostedVoice } from "../../../../types/PostedVoice";
import { PostedLanguageModel } from "../../../../types/PostedLanguageModel";
import { PostedEllmModel } from "../../../../types/PostedEllmModel";
import { PostedUserDefinedToolSpec } from "../../../../types/PostedUserDefinedToolSpec";
import { PostedBuiltinTool } from "../../../../types/PostedBuiltinTool";
import { PostedEventMessageSpecs } from "../../../../types/PostedEventMessageSpecs";
import { PostedTimeoutSpecs } from "../../../../types/PostedTimeoutSpecs";

export const PostedConfigVersion: core.serialization.Schema<
    serializers.empathicVoice.PostedConfigVersion.Raw,
    Hume.empathicVoice.PostedConfigVersion
> = core.serialization.object({
    eviVersion: core.serialization.property("evi_version", core.serialization.string()),
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
    prompt: PostedConfigPromptSpec.optional(),
    voice: PostedVoice.optional(),
    languageModel: core.serialization.property("language_model", PostedLanguageModel.optional()),
    ellmModel: core.serialization.property("ellm_model", PostedEllmModel.optional()),
    tools: core.serialization.list(PostedUserDefinedToolSpec.optional()).optional(),
    builtinTools: core.serialization.property(
        "builtin_tools",
        core.serialization.list(PostedBuiltinTool.optional()).optional()
    ),
    eventMessages: core.serialization.property("event_messages", PostedEventMessageSpecs.optional()),
    timeouts: PostedTimeoutSpecs.optional(),
});

export declare namespace PostedConfigVersion {
    interface Raw {
        evi_version: string;
        version_description?: string | null;
        prompt?: PostedConfigPromptSpec.Raw | null;
        voice?: PostedVoice.Raw | null;
        language_model?: PostedLanguageModel.Raw | null;
        ellm_model?: PostedEllmModel.Raw | null;
        tools?: (PostedUserDefinedToolSpec.Raw | null | undefined)[] | null;
        builtin_tools?: (PostedBuiltinTool.Raw | null | undefined)[] | null;
        event_messages?: PostedEventMessageSpecs.Raw | null;
        timeouts?: PostedTimeoutSpecs.Raw | null;
    }
}

```

# src/serialization/resources/empathicVoice/resources/configs/client/requests/index.ts

```typescript
export { PostedConfig } from "./PostedConfig";
export { PostedConfigVersion } from "./PostedConfigVersion";
export { PostedConfigName } from "./PostedConfigName";
export { PostedConfigVersionDescription } from "./PostedConfigVersionDescription";

```

# src/serialization/resources/empathicVoice/resources/configs/client/requests/PostedConfigVersionDescription.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedConfigVersionDescription: core.serialization.Schema<
    serializers.empathicVoice.PostedConfigVersionDescription.Raw,
    Hume.empathicVoice.PostedConfigVersionDescription
> = core.serialization.object({
    versionDescription: core.serialization.property("version_description", core.serialization.string().optional()),
});

export declare namespace PostedConfigVersionDescription {
    interface Raw {
        version_description?: string | null;
    }
}

```

# src/wrapper/getAudioStream.ts

```typescript
/**
 * Requests an audio stream from the user's device using the `getUserMedia` API.
 * The stream will have echo cancellation, noise suppression, and auto gain control enabled.
 *
 * @returns {Promise<MediaStream>} A promise that resolves to a `MediaStream` containing audio data only.
 * @throws {DOMException} If the user denies access or no audio input devices are found.
 */
export const getAudioStream = async (): Promise<MediaStream> => {
    return navigator.mediaDevices.getUserMedia({
        audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
        },
        video: false,
    });
};

```

# src/wrapper/fetchAccessToken.ts

```typescript
import { base64Encode } from "./base64Encode";
import { z } from "zod";

/**
 * Fetches a new access token from the Hume API using the provided API key and Secret key.
 *
 * @param args - The arguments for the request.
 * @returns Promise that resolves to the new access token or null.
 * @throws If the base64 encoding fails.
 * @example
 * ```typescript
 * async function getToken() {
 *   const accessToken = await fetchAccessToken({
 *     apiKey: 'test',
 *     secretKey: 'test',
 *   });
 *
 *   console.log(accessToken); // Outputs the access token
 * }
 * ```
 */
export const fetchAccessToken = async ({
    apiKey,
    secretKey,
    host = "api.hume.ai",
}: {
    apiKey: string;
    secretKey: string;
    host?: string;
}): Promise<string | null> => {
    const authString = `${apiKey}:${secretKey}`;
    const encoded = base64Encode(authString);

    const response = await fetch(`https://${host}/oauth2-cc/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${encoded}`,
        },
        body: new URLSearchParams({
            grant_type: "client_credentials",
        }).toString(),
        cache: "no-cache",
    })
        .then((res) => {
            // if reading response as json fails, return empty object
            // this can happen when request returns XML due to server error
            return res
                .json()
                .then((d: unknown) => d)
                .catch(() => ({}));
        })
        .then((data: unknown) => {
            // extract access_token value from received object
            return z
                .object({
                    access_token: z.string(),
                })
                .transform((data) => {
                    return data.access_token;
                })
                .safeParse(data);
        })
        .catch(
            () =>
                ({
                    success: false,
                } as const)
        );

    if (!response.success) {
        return null;
    }

    return response.data;
};

```

# src/wrapper/base64Decode.ts

```typescript
export function base64Decode(str: string): string | Buffer {
    if (typeof Buffer === "function") {
        // Node.js environment
        return Buffer.from(str, "base64");
    } else if (typeof atob === "function") {
        // Browser environment
        return atob(str);
    } else {
        throw new Error("Base64 encoding not supported in this environment.");
    }
}

```

# src/wrapper/ensureSingleValidAudioTrack.ts

```typescript
/**
 * Ensures that the given media stream contains exactly one valid audio track.
 * Throws an error if no audio tracks are found, if there is more than one audio track,
 * or if the sole audio track is falsy.
 *
 * @param {MediaStream} stream - The media stream object containing audio tracks to validate.
 * @throws {Error} "No audio tracks" if the stream contains zero audio tracks.
 * @throws {Error} "Multiple audio tracks" if the stream contains more than one audio track.
 * @throws {Error} "No audio track" if the sole audio track is falsy.
 */
export const ensureSingleValidAudioTrack = (stream: MediaStream): void => {
    const tracks = stream.getAudioTracks();

    if (tracks.length === 0) {
        throw new Error("No audio tracks available");
    } else if (tracks.length > 1) {
        throw new Error("Multiple audio tracks found");
    } else if (!tracks[0]) {
        throw new Error("The audio track is invalid");
    }
};

```

# src/wrapper/HumeClient.ts

```typescript
import { HumeClient as FernClient } from "../Client";
import { ExpressionMeasurement } from "./expressionMeasurement/ExpressionMeasurementClient";

export declare namespace HumeClient {
    type Options = FernClient.Options & { secretKey?: string } & (
            | { accessToken: NonNullable<FernClient.Options["accessToken"]> }
            | { apiKey: NonNullable<FernClient.Options["apiKey"]> }
        );
}

export class HumeClient extends FernClient {
    constructor(protected readonly _options: HumeClient.Options) {
        super(_options || {});
    }

    // We need to override this from FernClient to use the extended
    // `ExpressionMeasurement` from `wrapper` and not `api/resources/`
    protected _expressionMeasurement: ExpressionMeasurement | undefined;

    public get expressionMeasurement(): ExpressionMeasurement {
        return (this._expressionMeasurement ??= new ExpressionMeasurement(this._options));
    }
}

```

# src/wrapper/convertBase64ToBlob.ts

```typescript
/**
 * Converts a base64-encoded string into a `Blob` object with the specified content type.
 *
 * @param {string} base64 - The base64-encoded string representing binary data.
 * @param {string} contentType - The MIME type to assign to the resulting `Blob`.
 * @returns {Blob} A `Blob` object containing the binary data from the base64 string.
 */
export function convertBase64ToBlob(base64: string, contentType: string): Blob {
    // Decode base64 string to a binary string
    const binaryString = window.atob(base64);

    // Create a Uint8Array with the same length as the binary string
    const byteArray = new Uint8Array(binaryString.length);

    // Fill the Uint8Array by converting each character's Unicode value to a byte
    for (let i = 0; i < binaryString.length; i++) {
        byteArray[i] = binaryString.charCodeAt(i);
    }

    // Create and return a Blob with the specified content type
    return new Blob([byteArray], { type: contentType });
}

```

# src/wrapper/checkForAudioTracks.ts

```typescript
/**
 * @name checkForAudioTracks
 * @description
 * Check if a MediaStream has audio tracks.
 * @param stream
 * The MediaStream to check
 */
export const checkForAudioTracks = (stream: MediaStream) => {
    const tracks = stream.getAudioTracks();

    if (tracks.length === 0) {
        throw new Error("No audio tracks");
    }
    if (tracks.length > 1) {
        throw new Error("Multiple audio tracks");
    }
    const track = tracks[0];
    if (!track) {
        throw new Error("No audio track");
    }
};

```

# src/wrapper/getBrowserSupportedMimeType.ts

```typescript
/**
 * Enum representing the supported MIME types for audio recording.
 */
export enum MimeType {
    WEBM = "audio/webm",
    MP4 = "audio/mp4",
    WAV = "audio/wav",
}

/**
 * Represents a successful result where a compatible MIME type was found.
 * @property {true} success - Indicates a successful result.
 * @property {MimeType} mimeType - The MIME type supported by the browser.
 */
type MimeTypeSuccessResult = { success: true; mimeType: MimeType };

/**
 * Represents a failure result when no compatible MIME type is supported or an error occurs.
 * @property {false} success - Indicates a failure result.
 * @property {Error} error - The error explaining why a compatible MIME type was not found.
 */
type MimeTypeFailureResult = { success: false; error: Error };

/**
 * Union type representing the possible outcomes of checking for a supported MIME type.
 * Could either be a successful or failure result.
 */
type MimeTypeResult = MimeTypeSuccessResult | MimeTypeFailureResult;

/**
 * Checks whether the `MediaRecorder` API is supported in the current environment.
 *
 * @returns {boolean} Returns `true` if the `MediaRecorder` API is supported, otherwise `false`.
 */
function isMediaRecorderSupported(): boolean {
    return typeof MediaRecorder !== "undefined";
}

/**
 * Finds and returns the first MIME type from the given array that is supported by the `MediaRecorder`.
 *
 * @param {MimeType[]} mimeTypes - An array of MIME types to check for compatibility.
 * @returns {MimeType | null} The first supported MIME type or `null` if none are supported.
 */
function getSupportedMimeType(mimeTypes: MimeType[]): MimeType | null {
    return mimeTypes.find((type) => MediaRecorder.isTypeSupported(type)) || null;
}

/**
 * Determines if the current browser supports any of the predefined audio MIME types
 * (WEBM, MP4, or WAV) via the `MediaRecorder` API.
 *
 * @returns {MimeTypeResult} An object containing the success status and either a supported MIME type or an error.
 * @throws {Error} If the `MediaRecorder` API is not supported by the browser or no compatible types are found.
 */
export function getBrowserSupportedMimeType(): MimeTypeResult {
    // Check if the MediaRecorder API is supported in the current environment.
    if (!isMediaRecorderSupported()) {
        return {
            success: false,
            error: new Error("MediaRecorder is not supported"),
        };
    }

    const COMPATIBLE_MIME_TYPES = [MimeType.WEBM, MimeType.MP4, MimeType.WAV];

    // Find the first compatible MIME type that the browser's MediaRecorder supports.
    const supportedMimeType = getSupportedMimeType(COMPATIBLE_MIME_TYPES);

    // If no compatible MIME type is found, return a failure result with an appropriate error message.
    if (!supportedMimeType) {
        return {
            success: false,
            error: new Error("Browser does not support any compatible mime types"),
        };
    }

    // If a compatible MIME type is found, return a success result with the supported MIME type.
    return {
        success: true,
        mimeType: supportedMimeType,
    };
}

```

# src/wrapper/index.ts

```typescript
export { base64Decode } from "./base64Decode";
export { base64Encode } from "./base64Encode";
export { convertBase64ToBlob } from "./convertBase64ToBlob";
export { convertBlobToBase64 } from "./convertBlobToBase64";
export { ensureSingleValidAudioTrack } from "./ensureSingleValidAudioTrack";
export { checkForAudioTracks } from "./checkForAudioTracks";
export { fetchAccessToken } from "./fetchAccessToken";
export { getAudioStream } from "./getAudioStream";
export { MimeType, getBrowserSupportedMimeType } from "./getBrowserSupportedMimeType";
export { HumeClient } from "./HumeClient";

```

# src/wrapper/convertBlobToBase64.ts

```typescript
/**
 * Converts a `Blob` object into a base64-encoded string.
 * The resulting string contains the binary data from the `Blob`.
 *
 * @param {Blob} blob - The `Blob` object to convert to base64.
 * @returns {Promise<string>} A promise that resolves to a base64-encoded string representing the `Blob` data.
 */
export function convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        // Handle the load event which is triggered when readAsDataURL completes
        reader.onloadend = () => {
            // Ensure reader.result is not null and is a string
            if (typeof reader.result === "string") {
                // Extract the Base64 encoded string, skipping the data URL prefix (e.g., "data:image/png;base64,")
                const base64Data = reader.result.split(",")[1];
                if (base64Data) {
                    resolve(base64Data);
                } else {
                    reject(new Error("Failed to split the result into Base64 data."));
                }
            } else {
                reject(new Error("FileReader result is null or not a string."));
            }
        };

        // Handle errors during the read process
        reader.onerror = () => {
            reject(new Error(`Error reading blob: ${reader.error?.message}`));
        };

        // Initiate reading the blob as a data URL
        reader.readAsDataURL(blob);
    });
}

```

# src/wrapper/base64Encode.ts

```typescript
export function base64Encode(str: string): string {
    if (typeof Buffer === "function") {
        // Node.js environment
        return Buffer.from(str).toString("base64");
    } else if (typeof btoa === "function") {
        // Browser environment
        return btoa(str);
    } else {
        throw new Error("Base64 encoding not supported in this environment.");
    }
}

```

# src/wrapper/expressionMeasurement/ExpressionMeasurementClient.ts

```typescript
import { ExpressionMeasurement as FernClient } from "../../api/resources/expressionMeasurement/client/Client";
import { BatchClient } from "./batch/BatchClient";
import { StreamClient } from "./streaming/StreamingClient";

export class ExpressionMeasurement extends FernClient {
    protected _batch: BatchClient | undefined;

    public get batch(): BatchClient {
        return (this._batch ??= new BatchClient(this._options));
    }

    protected _stream: StreamClient | undefined;

    public get stream(): StreamClient {
        return (this._stream ??= new StreamClient(this._options));
    }
}

```

# src/wrapper/expressionMeasurement/batch/BatchClient.ts

```typescript
import { Batch as FernClient } from "../../../api/resources/expressionMeasurement/resources/batch/client/Client";
import * as Hume from "../../../api";
import { Job } from "./Job";

export class BatchClient extends FernClient {
    public async startInferenceJob(
        request: Hume.expressionMeasurement.batch.InferenceBaseRequest = {},
        requestOptions?: FernClient.RequestOptions
    ): Promise<Job> {
        const { jobId } = await super.startInferenceJob(request, requestOptions);
        return new Job(jobId, this);
    }
}

```

# src/wrapper/expressionMeasurement/batch/Job.ts

```typescript
import * as Hume from "../../../api";
import * as errors from "../../../errors";
import { BatchClient } from "./BatchClient";

export class Job implements Hume.expressionMeasurement.batch.JobId {
    constructor(public readonly jobId: string, private readonly client: BatchClient) {}

    public async awaitCompletion(timeoutInSeconds = 300): Promise<void> {
        return new Promise((resolve, reject) => {
            const poller = new JobCompletionPoller(this.jobId, this.client);
            poller.start(resolve);
            setTimeout(() => {
                poller.stop();
                reject(new errors.HumeTimeoutError());
            }, timeoutInSeconds * 1_000);
        });
    }
}

class JobCompletionPoller {
    private isPolling = true;
    constructor(private readonly jobId: string, private readonly client: BatchClient) {}

    public start(onTerminal: () => void) {
        this.isPolling = true;
        this.poll(onTerminal);
    }

    public stop() {
        this.isPolling = false;
    }

    private async poll(onTerminal: () => void): Promise<void> {
        try {
            const jobDetails = await this.client.getJobDetails(this.jobId);
            if (jobDetails.state.status === "COMPLETED" || jobDetails.state.status === "FAILED") {
                onTerminal();
                this.stop();
            }
        } catch {
            // swallow errors while polling
        }

        if (this.isPolling) {
            setTimeout(() => this.poll(onTerminal), 1_000);
        }
    }
}

```

# src/wrapper/expressionMeasurement/streaming/StreamingClient.ts

```typescript
import * as Hume from "../../../api";
import * as serializers from "../../../serialization";
import * as core from "../../../core";
import { StreamSocket } from "./StreamSocket";
import WebSocket from "ws";

export declare namespace StreamClient {
    interface Options {
        apiKey?: core.Supplier<string | undefined>;
    }

    interface ConnectArgs {
        /* Job config */
        config: Hume.expressionMeasurement.stream.Config;
        /* Length of the sliding window in milliseconds to use when 
            aggregating media across streaming payloads within one WebSocket connection. */
        streamWindowMs?: number;

        onOpen?: (event: WebSocket.Event) => void;
        onMessage?: (message: Hume.expressionMeasurement.stream.Config) => void;
        onError?: (error: Hume.expressionMeasurement.stream.StreamErrorMessage) => void;
        onClose?: (event: WebSocket.Event) => void;
    }
}

export class StreamClient {
    constructor(protected readonly _options: StreamClient.Options) {}

    public connect(args: StreamClient.ConnectArgs): StreamSocket {
        const websocket = new WebSocket(`wss://api.hume.ai/v0/stream/models`, {
            headers: {
                "X-Hume-Api-Key": typeof this._options.apiKey === "string" ? this._options.apiKey : "",
            },
            timeout: 10,
        });

        websocket.addEventListener("open", (event) => {
            args.onOpen?.(event);
        });

        websocket.addEventListener("error", (e) => {
            args.onError?.({
                code: e.type,
                error: e.message,
            });
        });

        websocket.addEventListener("message", async ({ data }) => {
            parse(data, {
                onMessage: args.onMessage,
                onError: args.onError,
            });
        });

        websocket.addEventListener("close", (event) => {
            args.onClose?.(event);
        });

        return new StreamSocket({
            websocket,
            streamWindowMs: args.streamWindowMs,
            config: args.config,
        });
    }
}

export function parse(
    data: WebSocket.Data,
    args: {
        onMessage?: (message: Hume.expressionMeasurement.stream.Config) => void;
        onError?: (error: Hume.expressionMeasurement.stream.StreamErrorMessage) => void;
    } = {}
): Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage | undefined {
    const message = JSON.parse(data as string);

    const parsedResponse = serializers.expressionMeasurement.stream.Config.parse(message, {
        unrecognizedObjectKeys: "passthrough",
        allowUnrecognizedUnionMembers: true,
        allowUnrecognizedEnumValues: true,
        breadcrumbsPrefix: ["response"],
    });
    if (parsedResponse.ok) {
        args.onMessage?.(parsedResponse.value);
        return parsedResponse.value;
    }

    const parsedError = serializers.expressionMeasurement.stream.StreamErrorMessage.parse(message, {
        unrecognizedObjectKeys: "passthrough",
        allowUnrecognizedUnionMembers: true,
        allowUnrecognizedEnumValues: true,
        breadcrumbsPrefix: ["response"],
    });
    if (parsedError.ok) {
        args.onError?.(parsedError.value);
        return parsedError.value;
    }
}

```

# src/wrapper/expressionMeasurement/streaming/StreamSocket.ts

```typescript
import WebSocket from "ws";
import { v4 as uuid } from "uuid";
import { parse } from "./StreamingClient";
import { base64Encode } from "../../base64Encode";
import * as Hume from "../../../api";
import * as errors from "../../../errors";
import * as serializers from "../../../serialization";
import * as fs from "fs";

export declare namespace StreamSocket {
    interface Args {
        websocket: WebSocket;
        config: Hume.expressionMeasurement.stream.Config;
        streamWindowMs?: number;
    }
}

export class StreamSocket {
    readonly websocket: WebSocket;
    private readonly streamWindowMs?: number;
    private config: Hume.expressionMeasurement.stream.Config;

    constructor({ websocket, config, streamWindowMs }: StreamSocket.Args) {
        this.websocket = websocket;
        this.config = config;
        this.streamWindowMs = streamWindowMs;
    }

    /**
     * Send file on the `StreamSocket`
     *
     * @param file A fs.ReadStream | File | Blob
     * @param config This method is intended for use with a `LanguageConfig`.
     * When the socket is configured for other modalities this method will fail.
     */
    public async sendFile({
        file,
        config,
    }: {
        file: fs.ReadStream | Blob;
        config?: Hume.expressionMeasurement.stream.Config;
    }): Promise<Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage> {
        if (config != null) {
            this.config = config;
        }
        let contents = "";
        if (file instanceof fs.ReadStream) {
            const chunks: Buffer[] = [];
            for await (const chunk of file) {
                chunks.push(Buffer.from(chunk));
            }
            contents = Buffer.concat(chunks).toString("base64");
        } else if (file instanceof Blob) {
            const toBase64 = (file: Blob): Promise<string> =>
                new Promise((res) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => res(reader.result as string);
                });
            contents = await toBase64(file);
        } else {
            throw new errors.HumeError({
                message: `file must be one of ReadStream or Blob.`,
            });
        }
        const request: Hume.expressionMeasurement.stream.StreamModelsEndpointPayload = {
            payloadId: uuid(),
            data: contents,
            models: this.config,
            rawText: false,
        };
        if (this.streamWindowMs != null) {
            request.streamWindowMs = this.streamWindowMs;
        }
        const response = await this.send(request);
        if (response == null) {
            throw new errors.HumeError({
                message: `Received no response after sending file: ${file}`,
            });
        }
        return response;
    }

    /**
     * Send text on the `StreamSocket`
     *
     * @param text Text to send to the language model.
     * @param config This method is intended for use with a `LanguageConfig`.
     * When the socket is configured for other modalities this method will fail.
     */
    public async sendText({
        text,
        config,
    }: {
        text: string;
        config?: Hume.expressionMeasurement.stream.Config;
    }): Promise<Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage> {
        if (config != null) {
            this.config = config;
        }
        const request: Hume.expressionMeasurement.stream.StreamModelsEndpointPayload = {
            payloadId: uuid(),
            data: text,
            rawText: true,
            models: this.config,
        };
        if (this.streamWindowMs != null) {
            request.streamWindowMs = this.streamWindowMs;
        }
        const response = await this.send(request);
        if (response == null) {
            throw new errors.HumeError({
                message: `Received no response after sending text: ${text}`,
            });
        }
        return response;
    }

    /**
     * Send facemesh landmarks on the `StreamSocket`
     *
     * @param landmarks List of landmark points for multiple faces.
     * The shape of this 3-dimensional list should be (n, 478, 3) where n is the number
     * of faces to be processed, 478 is the number of MediaPipe landmarks per face and 3
     * represents the (x, y, z) coordinates of each landmark.
     * @param config List of model configurations.
     * If set these configurations will overwrite existing configurations
     */
    public async sendFacemesh({
        landmarks,
        config,
    }: {
        landmarks: number[][][];
        config?: Hume.expressionMeasurement.stream.Config;
    }): Promise<Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage> {
        const response = this.sendText({
            text: base64Encode(JSON.stringify(landmarks)),
            config,
        });
        return response;
    }

    /**
     *
     * Reset the streaming sliding window.
     *
     * Call this method when some media has been fully processed and you want to continue using the same
     * streaming connection without leaking context across media samples.
     */
    public async reset(): Promise<void> {
        await this.send({
            resetStream: true,
        });
    }

    /**
     *
     * Get details associated with the current streaming connection.
     *
     */
    public async getJobDetails(): Promise<void> {
        await this.send({
            jobDetails: true,
        });
    }

    /**
     * Closes the underlying socket.
     */
    public close(): void {
        this.websocket.close();
    }

    private async send(
        payload: Hume.expressionMeasurement.stream.StreamModelsEndpointPayload
    ): Promise<Hume.expressionMeasurement.stream.Config | void> {
        await this.tillSocketOpen();
        const jsonPayload = serializers.expressionMeasurement.stream.StreamModelsEndpointPayload.jsonOrThrow(payload, {
            unrecognizedObjectKeys: "strip",
        });
        this.websocket.send(JSON.stringify(jsonPayload));
        const response = await new Promise<
            Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage | undefined
        >((resolve) => {
            this.websocket.addEventListener("message", (event) => {
                const response = parse(event.data);
                resolve(response);
            });
        });
        if (response != null && isError(response)) {
            throw new errors.HumeError({
                message: `CODE ${response.code}: ${response.error}`,
            });
        }
        return response;
    }

    private async tillSocketOpen(): Promise<WebSocket> {
        if (this.websocket.readyState === WebSocket.OPEN) {
            return this.websocket;
        }
        return new Promise((resolve, reject) => {
            this.websocket.addEventListener("open", () => {
                resolve(this.websocket);
            });

            this.websocket.addEventListener("error", (event) => {
                reject(event);
            });
        });
    }
}

function isError(
    response: Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage
): response is Hume.expressionMeasurement.stream.StreamErrorMessage {
    return (response as Hume.expressionMeasurement.stream.StreamErrorMessage).error != null;
}

```

# src/core/index.ts

```typescript
export * from "./fetcher";
export * from "./runtime";
export * from "./form-data-utils";
export * from "./websocket";
export * from "./pagination";
export * from "./utils";
export * as serialization from "./schemas";

```

# src/core/fetcher/signals.ts

```typescript
const TIMEOUT = "timeout";

export function getTimeoutSignal(timeoutMs: number): { signal: AbortSignal; abortId: NodeJS.Timeout } {
    const controller = new AbortController();
    const abortId = setTimeout(() => controller.abort(TIMEOUT), timeoutMs);
    return { signal: controller.signal, abortId };
}

/**
 * Returns an abort signal that is getting aborted when
 * at least one of the specified abort signals is aborted.
 *
 * Requires at least node.js 18.
 */
export function anySignal(...args: AbortSignal[] | [AbortSignal[]]): AbortSignal {
    // Allowing signals to be passed either as array
    // of signals or as multiple arguments.
    const signals = <AbortSignal[]>(args.length === 1 && Array.isArray(args[0]) ? args[0] : args);

    const controller = new AbortController();

    for (const signal of signals) {
        if (signal.aborted) {
            // Exiting early if one of the signals
            // is already aborted.
            controller.abort((signal as any)?.reason);
            break;
        }

        // Listening for signals and removing the listeners
        // when at least one symbol is aborted.
        signal.addEventListener("abort", () => controller.abort((signal as any)?.reason), {
            signal: controller.signal,
        });
    }

    return controller.signal;
}

```

# src/core/fetcher/makeRequest.ts

```typescript
import { anySignal, getTimeoutSignal } from "./signals";

export const makeRequest = async (
    fetchFn: (url: string, init: RequestInit) => Promise<Response>,
    url: string,
    method: string,
    headers: Record<string, string>,
    requestBody: BodyInit | undefined,
    timeoutMs?: number,
    abortSignal?: AbortSignal,
    withCredentials?: boolean,
    duplex?: "half"
): Promise<Response> => {
    const signals: AbortSignal[] = [];

    // Add timeout signal
    let timeoutAbortId: NodeJS.Timeout | undefined = undefined;
    if (timeoutMs != null) {
        const { signal, abortId } = getTimeoutSignal(timeoutMs);
        timeoutAbortId = abortId;
        signals.push(signal);
    }

    // Add arbitrary signal
    if (abortSignal != null) {
        signals.push(abortSignal);
    }
    let newSignals = anySignal(signals);
    const response = await fetchFn(url, {
        method: method,
        headers,
        body: requestBody,
        signal: newSignals,
        credentials: withCredentials ? "include" : undefined,
        // @ts-ignore
        duplex,
    });

    if (timeoutAbortId != null) {
        clearTimeout(timeoutAbortId);
    }

    return response;
};

```

# src/core/fetcher/getHeader.ts

```typescript
export function getHeader(headers: Record<string, any>, header: string): string | undefined {
    for (const [headerKey, headerValue] of Object.entries(headers)) {
        if (headerKey.toLowerCase() === header.toLowerCase()) {
            return headerValue;
        }
    }
    return undefined;
}

```

# src/core/fetcher/getResponseBody.ts

```typescript
import { chooseStreamWrapper } from "./stream-wrappers/chooseStreamWrapper";

export async function getResponseBody(response: Response, responseType?: string): Promise<unknown> {
    if (response.body != null && responseType === "blob") {
        return await response.blob();
    } else if (response.body != null && responseType === "sse") {
        return response.body;
    } else if (response.body != null && responseType === "streaming") {
        return chooseStreamWrapper(response.body);
    } else if (response.body != null && responseType === "text") {
        return await response.text();
    } else {
        const text = await response.text();
        if (text.length > 0) {
            try {
                let responseBody = JSON.parse(text);
                return responseBody;
            } catch (err) {
                return {
                    ok: false,
                    error: {
                        reason: "non-json",
                        statusCode: response.status,
                        rawBody: text,
                    },
                };
            }
        } else {
            return undefined;
        }
    }
}

```

# src/core/fetcher/getFetchFn.ts

```typescript
import { RUNTIME } from "../runtime";

/**
 * Returns a fetch function based on the runtime
 */
export async function getFetchFn(): Promise<any> {
    // In Node.js 18+ environments, use native fetch
    if (RUNTIME.type === "node" && RUNTIME.parsedVersion != null && RUNTIME.parsedVersion >= 18) {
        return fetch;
    }

    // In Node.js 18 or lower environments, the SDK always uses`node-fetch`.
    if (RUNTIME.type === "node") {
        return (await import("node-fetch")).default as any;
    }

    // Otherwise the SDK uses global fetch if available,
    // and falls back to node-fetch.
    if (typeof fetch == "function") {
        return fetch;
    }

    // Defaults to node `node-fetch` if global fetch isn't available
    return (await import("node-fetch")).default as any;
}

```

# src/core/fetcher/Supplier.ts

```typescript
export type Supplier<T> = T | (() => T);

export const Supplier = {
    get: <T>(supplier: Supplier<T>): T => {
        if (typeof supplier === "function") {
            return (supplier as () => T)();
        } else {
            return supplier;
        }
    },
};

```

# src/core/fetcher/APIResponse.ts

```typescript
export type APIResponse<Success, Failure> = SuccessfulResponse<Success> | FailedResponse<Failure>;

export interface SuccessfulResponse<T> {
    ok: true;
    body: T;
    headers?: Record<string, any>;
}

export interface FailedResponse<T> {
    ok: false;
    error: T;
}

```

# src/core/fetcher/getRequestBody.ts

```typescript
export declare namespace GetRequestBody {
    interface Args {
        body: unknown;
        type: "json" | "file" | "bytes" | "other";
    }
}

export async function getRequestBody({ body, type }: GetRequestBody.Args): Promise<BodyInit | undefined> {
    if (type.includes("json")) {
        return JSON.stringify(body);
    } else {
        return body as BodyInit;
    }
}

```

# src/core/fetcher/requestWithRetries.ts

```typescript
const INITIAL_RETRY_DELAY = 1;
const MAX_RETRY_DELAY = 60;
const DEFAULT_MAX_RETRIES = 2;

export async function requestWithRetries(
    requestFn: () => Promise<Response>,
    maxRetries: number = DEFAULT_MAX_RETRIES
): Promise<Response> {
    let response: Response = await requestFn();

    for (let i = 0; i < maxRetries; ++i) {
        if ([408, 409, 429].includes(response.status) || response.status >= 500) {
            const delay = Math.min(INITIAL_RETRY_DELAY * Math.pow(2, i), MAX_RETRY_DELAY);
            await new Promise((resolve) => setTimeout(resolve, delay));
            response = await requestFn();
        } else {
            break;
        }
    }
    return response!;
}

```

# src/core/fetcher/Fetcher.ts

```typescript
import { APIResponse } from "./APIResponse";
import { createRequestUrl } from "./createRequestUrl";
import { getFetchFn } from "./getFetchFn";
import { getRequestBody } from "./getRequestBody";
import { getResponseBody } from "./getResponseBody";
import { makeRequest } from "./makeRequest";
import { requestWithRetries } from "./requestWithRetries";

export type FetchFunction = <R = unknown>(args: Fetcher.Args) => Promise<APIResponse<R, Fetcher.Error>>;

export declare namespace Fetcher {
    export interface Args {
        url: string;
        method: string;
        contentType?: string;
        headers?: Record<string, string | undefined>;
        queryParameters?: Record<string, string | string[] | object | object[]>;
        body?: unknown;
        timeoutMs?: number;
        maxRetries?: number;
        withCredentials?: boolean;
        abortSignal?: AbortSignal;
        requestType?: "json" | "file" | "bytes";
        responseType?: "json" | "blob" | "sse" | "streaming" | "text";
        duplex?: "half";
    }

    export type Error = FailedStatusCodeError | NonJsonError | TimeoutError | UnknownError;

    export interface FailedStatusCodeError {
        reason: "status-code";
        statusCode: number;
        body: unknown;
    }

    export interface NonJsonError {
        reason: "non-json";
        statusCode: number;
        rawBody: string;
    }

    export interface TimeoutError {
        reason: "timeout";
    }

    export interface UnknownError {
        reason: "unknown";
        errorMessage: string;
    }
}

export async function fetcherImpl<R = unknown>(args: Fetcher.Args): Promise<APIResponse<R, Fetcher.Error>> {
    const headers: Record<string, string> = {};
    if (args.body !== undefined && args.contentType != null) {
        headers["Content-Type"] = args.contentType;
    }

    if (args.headers != null) {
        for (const [key, value] of Object.entries(args.headers)) {
            if (value != null) {
                headers[key] = value;
            }
        }
    }

    const url = createRequestUrl(args.url, args.queryParameters);
    let requestBody: BodyInit | undefined = await getRequestBody({
        body: args.body,
        type: args.requestType === "json" ? "json" : "other",
    });
    const fetchFn = await getFetchFn();

    try {
        const response = await requestWithRetries(
            async () =>
                makeRequest(
                    fetchFn,
                    url,
                    args.method,
                    headers,
                    requestBody,
                    args.timeoutMs,
                    args.abortSignal,
                    args.withCredentials,
                    args.duplex
                ),
            args.maxRetries
        );
        let responseBody = await getResponseBody(response, args.responseType);

        if (response.status >= 200 && response.status < 400) {
            return {
                ok: true,
                body: responseBody as R,
                headers: response.headers,
            };
        } else {
            return {
                ok: false,
                error: {
                    reason: "status-code",
                    statusCode: response.status,
                    body: responseBody,
                },
            };
        }
    } catch (error) {
        if (args.abortSignal != null && args.abortSignal.aborted) {
            return {
                ok: false,
                error: {
                    reason: "unknown",
                    errorMessage: "The user aborted a request",
                },
            };
        } else if (error instanceof Error && error.name === "AbortError") {
            return {
                ok: false,
                error: {
                    reason: "timeout",
                },
            };
        } else if (error instanceof Error) {
            return {
                ok: false,
                error: {
                    reason: "unknown",
                    errorMessage: error.message,
                },
            };
        }

        return {
            ok: false,
            error: {
                reason: "unknown",
                errorMessage: JSON.stringify(error),
            },
        };
    }
}

export const fetcher: FetchFunction = fetcherImpl;

```

# src/core/fetcher/index.ts

```typescript
export type { APIResponse } from "./APIResponse";
export { fetcher } from "./Fetcher";
export type { Fetcher, FetchFunction } from "./Fetcher";
export { getHeader } from "./getHeader";
export { Supplier } from "./Supplier";

```

# src/core/fetcher/createRequestUrl.ts

```typescript
import qs from "qs";

export function createRequestUrl(
    baseUrl: string,
    queryParameters?: Record<string, string | string[] | object | object[]>
): string {
    return Object.keys(queryParameters ?? {}).length > 0
        ? `${baseUrl}?${qs.stringify(queryParameters, { arrayFormat: "repeat" })}`
        : baseUrl;
}

```

# src/core/fetcher/stream-wrappers/UndiciStreamWrapper.ts

```typescript
import { StreamWrapper } from "./chooseStreamWrapper";

type EventCallback = (data?: any) => void;

export class UndiciStreamWrapper<ReadFormat extends Uint8Array | Uint16Array | Uint32Array>
    implements StreamWrapper<UndiciStreamWrapper<ReadFormat> | WritableStream<ReadFormat>, ReadFormat>
{
    private readableStream: ReadableStream<ReadFormat>;
    private reader: ReadableStreamDefaultReader<ReadFormat>;
    private events: Record<string, EventCallback[] | undefined>;
    private paused: boolean;
    private resumeCallback: ((value?: unknown) => void) | null;
    private encoding: string | null;

    constructor(readableStream: ReadableStream<ReadFormat>) {
        this.readableStream = readableStream;
        this.reader = this.readableStream.getReader();
        this.events = {
            data: [],
            end: [],
            error: [],
            readable: [],
            close: [],
            pause: [],
            resume: [],
        };
        this.paused = false;
        this.resumeCallback = null;
        this.encoding = null;
    }

    public on(event: string, callback: EventCallback): void {
        this.events[event]?.push(callback);
    }

    public off(event: string, callback: EventCallback): void {
        this.events[event] = this.events[event]?.filter((cb) => cb !== callback);
    }

    public pipe(
        dest: UndiciStreamWrapper<ReadFormat> | WritableStream<ReadFormat>
    ): UndiciStreamWrapper<ReadFormat> | WritableStream<ReadFormat> {
        this.on("data", (chunk) => {
            if (dest instanceof UndiciStreamWrapper) {
                dest._write(chunk);
            } else {
                const writer = dest.getWriter();
                writer.write(chunk).then(() => writer.releaseLock());
            }
        });

        this.on("end", () => {
            if (dest instanceof UndiciStreamWrapper) {
                dest._end();
            } else {
                const writer = dest.getWriter();
                writer.close();
            }
        });

        this.on("error", (error) => {
            if (dest instanceof UndiciStreamWrapper) {
                dest._error(error);
            } else {
                const writer = dest.getWriter();
                writer.abort(error);
            }
        });

        this._startReading();

        return dest;
    }

    public pipeTo(
        dest: UndiciStreamWrapper<ReadFormat> | WritableStream<ReadFormat>
    ): UndiciStreamWrapper<ReadFormat> | WritableStream<ReadFormat> {
        return this.pipe(dest);
    }

    public unpipe(dest: UndiciStreamWrapper<ReadFormat> | WritableStream): void {
        this.off("data", (chunk) => {
            if (dest instanceof UndiciStreamWrapper) {
                dest._write(chunk);
            } else {
                const writer = dest.getWriter();
                writer.write(chunk).then(() => writer.releaseLock());
            }
        });

        this.off("end", () => {
            if (dest instanceof UndiciStreamWrapper) {
                dest._end();
            } else {
                const writer = dest.getWriter();
                writer.close();
            }
        });

        this.off("error", (error) => {
            if (dest instanceof UndiciStreamWrapper) {
                dest._error(error);
            } else {
                const writer = dest.getWriter();
                writer.abort(error);
            }
        });
    }

    public destroy(error?: Error): void {
        this.reader
            .cancel(error)
            .then(() => {
                this._emit("close");
            })
            .catch((err) => {
                this._emit("error", err);
            });
    }

    public pause(): void {
        this.paused = true;
        this._emit("pause");
    }

    public resume(): void {
        if (this.paused) {
            this.paused = false;
            this._emit("resume");
            if (this.resumeCallback) {
                this.resumeCallback();
                this.resumeCallback = null;
            }
        }
    }

    public get isPaused(): boolean {
        return this.paused;
    }

    public async read(): Promise<ReadFormat | undefined> {
        if (this.paused) {
            await new Promise((resolve) => {
                this.resumeCallback = resolve;
            });
        }
        const { done, value } = await this.reader.read();
        if (done) {
            return undefined;
        }
        return value;
    }

    public setEncoding(encoding: string): void {
        this.encoding = encoding;
    }

    public async text(): Promise<string> {
        const chunks: BlobPart[] = [];

        while (true) {
            const { done, value } = await this.reader.read();
            if (done) {
                break;
            }
            if (value) {
                chunks.push(value);
            }
        }

        const decoder = new TextDecoder(this.encoding || "utf-8");
        return decoder.decode(await new Blob(chunks).arrayBuffer());
    }

    public async json<T>(): Promise<T> {
        const text = await this.text();
        return JSON.parse(text);
    }

    private _write(chunk: ReadFormat): void {
        this._emit("data", chunk);
    }

    private _end(): void {
        this._emit("end");
    }

    private _error(error: any): void {
        this._emit("error", error);
    }

    private _emit(event: string, data?: any): void {
        if (this.events[event]) {
            for (const callback of this.events[event] || []) {
                callback(data);
            }
        }
    }

    private async _startReading(): Promise<void> {
        try {
            this._emit("readable");
            while (true) {
                if (this.paused) {
                    await new Promise((resolve) => {
                        this.resumeCallback = resolve;
                    });
                }
                const { done, value } = await this.reader.read();
                if (done) {
                    this._emit("end");
                    this._emit("close");
                    break;
                }
                if (value) {
                    this._emit("data", value);
                }
            }
        } catch (error) {
            this._emit("error", error);
        }
    }

    [Symbol.asyncIterator](): AsyncIterableIterator<ReadFormat> {
        return {
            next: async () => {
                if (this.paused) {
                    await new Promise((resolve) => {
                        this.resumeCallback = resolve;
                    });
                }
                const { done, value } = await this.reader.read();
                if (done) {
                    return { done: true, value: undefined };
                }
                return { done: false, value };
            },
            [Symbol.asyncIterator]() {
                return this;
            },
        };
    }
}

```

# src/core/fetcher/stream-wrappers/chooseStreamWrapper.ts

```typescript
import type { Readable } from "readable-stream";
import { RUNTIME } from "../../runtime";

export type EventCallback = (data?: any) => void;

export interface StreamWrapper<WritableStream, ReadFormat> {
    setEncoding(encoding?: string): void;
    on(event: string, callback: EventCallback): void;
    off(event: string, callback: EventCallback): void;
    pipe(dest: WritableStream): WritableStream;
    pipeTo(dest: WritableStream): WritableStream;
    unpipe(dest?: WritableStream): void;
    destroy(error?: Error): void;
    pause(): void;
    resume(): void;
    get isPaused(): boolean;
    read(): Promise<ReadFormat | undefined>;
    text(): Promise<string>;
    json<T>(): Promise<T>;
    [Symbol.asyncIterator](): AsyncIterableIterator<ReadFormat>;
}

export async function chooseStreamWrapper(responseBody: any): Promise<Promise<StreamWrapper<any, any>>> {
    if (RUNTIME.type === "node" && RUNTIME.parsedVersion != null && RUNTIME.parsedVersion >= 18) {
        return new (await import("./Node18UniversalStreamWrapper")).Node18UniversalStreamWrapper(
            responseBody as ReadableStream
        );
    } else if (RUNTIME.type !== "node" && typeof fetch === "function") {
        return new (await import("./UndiciStreamWrapper")).UndiciStreamWrapper(responseBody as ReadableStream);
    } else {
        return new (await import("./NodePre18StreamWrapper")).NodePre18StreamWrapper(responseBody as Readable);
    }
}

```

# src/core/fetcher/stream-wrappers/NodePre18StreamWrapper.ts

```typescript
import type { Readable, Writable } from "readable-stream";
import { EventCallback, StreamWrapper } from "./chooseStreamWrapper";

export class NodePre18StreamWrapper implements StreamWrapper<Writable, Buffer> {
    private readableStream: Readable;
    private encoding: string | undefined;

    constructor(readableStream: Readable) {
        this.readableStream = readableStream;
    }

    public on(event: string, callback: EventCallback): void {
        this.readableStream.on(event, callback);
    }

    public off(event: string, callback: EventCallback): void {
        this.readableStream.off(event, callback);
    }

    public pipe(dest: Writable): Writable {
        this.readableStream.pipe(dest);
        return dest;
    }

    public pipeTo(dest: Writable): Writable {
        return this.pipe(dest);
    }

    public unpipe(dest?: Writable): void {
        if (dest) {
            this.readableStream.unpipe(dest);
        } else {
            this.readableStream.unpipe();
        }
    }

    public destroy(error?: Error): void {
        this.readableStream.destroy(error);
    }

    public pause(): void {
        this.readableStream.pause();
    }

    public resume(): void {
        this.readableStream.resume();
    }

    public get isPaused(): boolean {
        return this.readableStream.isPaused();
    }

    public async read(): Promise<Buffer | undefined> {
        return new Promise((resolve, reject) => {
            const chunk = this.readableStream.read();
            if (chunk) {
                resolve(chunk);
            } else {
                this.readableStream.once("readable", () => {
                    const chunk = this.readableStream.read();
                    resolve(chunk);
                });
                this.readableStream.once("error", reject);
            }
        });
    }

    public setEncoding(encoding?: string): void {
        this.readableStream.setEncoding(encoding as BufferEncoding);
        this.encoding = encoding;
    }

    public async text(): Promise<string> {
        const chunks: Uint8Array[] = [];
        const encoder = new TextEncoder();
        this.readableStream.setEncoding((this.encoding || "utf-8") as BufferEncoding);

        for await (const chunk of this.readableStream) {
            chunks.push(encoder.encode(chunk));
        }

        const decoder = new TextDecoder(this.encoding || "utf-8");
        return decoder.decode(Buffer.concat(chunks));
    }

    public async json<T>(): Promise<T> {
        const text = await this.text();
        return JSON.parse(text);
    }

    public [Symbol.asyncIterator](): AsyncIterableIterator<Buffer> {
        const readableStream = this.readableStream;
        const iterator = readableStream[Symbol.asyncIterator]();

        // Create and return an async iterator that yields buffers
        return {
            async next(): Promise<IteratorResult<Buffer>> {
                const { value, done } = await iterator.next();
                return { value: value as Buffer, done };
            },
            [Symbol.asyncIterator]() {
                return this;
            },
        };
    }
}

```

# src/core/fetcher/stream-wrappers/Node18UniversalStreamWrapper.ts

```typescript
import type { Writable } from "readable-stream";
import { EventCallback, StreamWrapper } from "./chooseStreamWrapper";

export class Node18UniversalStreamWrapper<ReadFormat extends Uint8Array | Uint16Array | Uint32Array>
    implements
        StreamWrapper<Node18UniversalStreamWrapper<ReadFormat> | Writable | WritableStream<ReadFormat>, ReadFormat>
{
    private readableStream: ReadableStream<ReadFormat>;
    private reader: ReadableStreamDefaultReader<ReadFormat>;
    private events: Record<string, EventCallback[] | undefined>;
    private paused: boolean;
    private resumeCallback: ((value?: unknown) => void) | null;
    private encoding: string | null;

    constructor(readableStream: ReadableStream<ReadFormat>) {
        this.readableStream = readableStream;
        this.reader = this.readableStream.getReader();
        this.events = {
            data: [],
            end: [],
            error: [],
            readable: [],
            close: [],
            pause: [],
            resume: [],
        };
        this.paused = false;
        this.resumeCallback = null;
        this.encoding = null;
    }

    public on(event: string, callback: EventCallback): void {
        this.events[event]?.push(callback);
    }

    public off(event: string, callback: EventCallback): void {
        this.events[event] = this.events[event]?.filter((cb) => cb !== callback);
    }

    public pipe(
        dest: Node18UniversalStreamWrapper<ReadFormat> | Writable | WritableStream<ReadFormat>
    ): Node18UniversalStreamWrapper<ReadFormat> | Writable | WritableStream<ReadFormat> {
        this.on("data", async (chunk) => {
            if (dest instanceof Node18UniversalStreamWrapper) {
                dest._write(chunk);
            } else if (dest instanceof WritableStream) {
                const writer = dest.getWriter();
                writer.write(chunk).then(() => writer.releaseLock());
            } else {
                dest.write(chunk);
            }
        });

        this.on("end", async () => {
            if (dest instanceof Node18UniversalStreamWrapper) {
                dest._end();
            } else if (dest instanceof WritableStream) {
                const writer = dest.getWriter();
                writer.close();
            } else {
                dest.end();
            }
        });

        this.on("error", async (error) => {
            if (dest instanceof Node18UniversalStreamWrapper) {
                dest._error(error);
            } else if (dest instanceof WritableStream) {
                const writer = dest.getWriter();
                writer.abort(error);
            } else {
                dest.destroy(error);
            }
        });

        this._startReading();

        return dest;
    }

    public pipeTo(
        dest: Node18UniversalStreamWrapper<ReadFormat> | Writable | WritableStream<ReadFormat>
    ): Node18UniversalStreamWrapper<ReadFormat> | Writable | WritableStream<ReadFormat> {
        return this.pipe(dest);
    }

    public unpipe(dest: Node18UniversalStreamWrapper<ReadFormat> | Writable | WritableStream<ReadFormat>): void {
        this.off("data", async (chunk) => {
            if (dest instanceof Node18UniversalStreamWrapper) {
                dest._write(chunk);
            } else if (dest instanceof WritableStream) {
                const writer = dest.getWriter();
                writer.write(chunk).then(() => writer.releaseLock());
            } else {
                dest.write(chunk);
            }
        });

        this.off("end", async () => {
            if (dest instanceof Node18UniversalStreamWrapper) {
                dest._end();
            } else if (dest instanceof WritableStream) {
                const writer = dest.getWriter();
                writer.close();
            } else {
                dest.end();
            }
        });

        this.off("error", async (error) => {
            if (dest instanceof Node18UniversalStreamWrapper) {
                dest._error(error);
            } else if (dest instanceof WritableStream) {
                const writer = dest.getWriter();
                writer.abort(error);
            } else {
                dest.destroy(error);
            }
        });
    }

    public destroy(error?: Error): void {
        this.reader
            .cancel(error)
            .then(() => {
                this._emit("close");
            })
            .catch((err) => {
                this._emit("error", err);
            });
    }

    public pause(): void {
        this.paused = true;
        this._emit("pause");
    }

    public resume(): void {
        if (this.paused) {
            this.paused = false;
            this._emit("resume");
            if (this.resumeCallback) {
                this.resumeCallback();
                this.resumeCallback = null;
            }
        }
    }

    public get isPaused(): boolean {
        return this.paused;
    }

    public async read(): Promise<ReadFormat | undefined> {
        if (this.paused) {
            await new Promise((resolve) => {
                this.resumeCallback = resolve;
            });
        }
        const { done, value } = await this.reader.read();

        if (done) {
            return undefined;
        }
        return value;
    }

    public setEncoding(encoding: string): void {
        this.encoding = encoding;
    }

    public async text(): Promise<string> {
        const chunks: ReadFormat[] = [];

        while (true) {
            const { done, value } = await this.reader.read();
            if (done) {
                break;
            }
            if (value) {
                chunks.push(value);
            }
        }

        const decoder = new TextDecoder(this.encoding || "utf-8");
        return decoder.decode(await new Blob(chunks).arrayBuffer());
    }

    public async json<T>(): Promise<T> {
        const text = await this.text();
        return JSON.parse(text);
    }

    private _write(chunk: ReadFormat): void {
        this._emit("data", chunk);
    }

    private _end(): void {
        this._emit("end");
    }

    private _error(error: any): void {
        this._emit("error", error);
    }

    private _emit(event: string, data?: any): void {
        if (this.events[event]) {
            for (const callback of this.events[event] || []) {
                callback(data);
            }
        }
    }

    private async _startReading(): Promise<void> {
        try {
            this._emit("readable");
            while (true) {
                if (this.paused) {
                    await new Promise((resolve) => {
                        this.resumeCallback = resolve;
                    });
                }
                const { done, value } = await this.reader.read();
                if (done) {
                    this._emit("end");
                    this._emit("close");
                    break;
                }
                if (value) {
                    this._emit("data", value);
                }
            }
        } catch (error) {
            this._emit("error", error);
        }
    }

    [Symbol.asyncIterator](): AsyncIterableIterator<ReadFormat> {
        return {
            next: async () => {
                if (this.paused) {
                    await new Promise((resolve) => {
                        this.resumeCallback = resolve;
                    });
                }
                const { done, value } = await this.reader.read();
                if (done) {
                    return { done: true, value: undefined };
                }
                return { done: false, value };
            },
            [Symbol.asyncIterator]() {
                return this;
            },
        };
    }
}

```

# src/core/form-data-utils/FormDataWrapper.ts

```typescript
import { RUNTIME } from "../runtime";

export type MaybePromise<T> = Promise<T> | T;

interface FormDataRequest<Body> {
    body: Body;
    headers: Record<string, string>;
    duplex?: "half";
}

function isNamedValue(value: unknown): value is { name: string } {
    return typeof value === "object" && value != null && "name" in value;
}

export interface CrossPlatformFormData {
    setup(): Promise<void>;

    append(key: string, value: unknown): void;

    appendFile(key: string, value: unknown, fileName?: string): Promise<void>;

    getRequest(): MaybePromise<FormDataRequest<unknown>>;
}

export async function newFormData(): Promise<CrossPlatformFormData> {
    let formdata: CrossPlatformFormData;
    if (RUNTIME.type === "node" && RUNTIME.parsedVersion != null && RUNTIME.parsedVersion >= 18) {
        formdata = new Node18FormData();
    } else if (RUNTIME.type === "node") {
        formdata = new Node16FormData();
    } else {
        formdata = new WebFormData();
    }
    await formdata.setup();
    return formdata;
}

export type Node18FormDataFd =
    | {
          append(name: string, value: unknown, fileName?: string): void;
      }
    | undefined;

/**
 * Form Data Implementation for Node.js 18+
 */
export class Node18FormData implements CrossPlatformFormData {
    private fd: Node18FormDataFd;

    public async setup() {
        this.fd = new (await import("formdata-node")).FormData();
    }

    public append(key: string, value: any): void {
        this.fd?.append(key, value);
    }

    public async appendFile(key: string, value: unknown, fileName?: string): Promise<void> {
        if (fileName == null && isNamedValue(value)) {
            fileName = value.name;
        }

        if (value instanceof Blob) {
            this.fd?.append(key, value, fileName);
        } else {
            this.fd?.append(key, {
                type: undefined,
                name: fileName,
                [Symbol.toStringTag]: "File",
                stream() {
                    return value;
                },
            });
        }
    }

    public async getRequest(): Promise<FormDataRequest<unknown>> {
        const encoder = new (await import("form-data-encoder")).FormDataEncoder(this.fd as any);
        return {
            body: (await import("readable-stream")).Readable.from(encoder),
            headers: encoder.headers,
            duplex: "half",
        };
    }
}

export type Node16FormDataFd =
    | {
          append(
              name: string,
              value: unknown,
              options?:
                  | string
                  | {
                        header?: string | Headers;
                        knownLength?: number;
                        filename?: string;
                        filepath?: string;
                        contentType?: string;
                    }
          ): void;

          getHeaders(): Record<string, string>;
      }
    | undefined;

/**
 * Form Data Implementation for Node.js 16-18
 */
export class Node16FormData implements CrossPlatformFormData {
    private fd: Node16FormDataFd;

    public async setup(): Promise<void> {
        this.fd = new (await import("form-data")).default();
    }

    public append(key: string, value: any): void {
        this.fd?.append(key, value);
    }

    public async appendFile(key: string, value: unknown, fileName?: string): Promise<void> {
        if (fileName == null && isNamedValue(value)) {
            fileName = value.name;
        }

        let bufferedValue;
        if (value instanceof Blob) {
            bufferedValue = Buffer.from(await (value as any).arrayBuffer());
        } else {
            bufferedValue = value;
        }

        if (fileName == null) {
            this.fd?.append(key, bufferedValue);
        } else {
            this.fd?.append(key, bufferedValue, { filename: fileName });
        }
    }

    public getRequest(): FormDataRequest<Node16FormDataFd> {
        return {
            body: this.fd,
            headers: this.fd ? this.fd.getHeaders() : {},
        };
    }
}

export type WebFormDataFd = { append(name: string, value: string | Blob, fileName?: string): void } | undefined;

/**
 * Form Data Implementation for Web
 */
export class WebFormData implements CrossPlatformFormData {
    protected fd: WebFormDataFd;

    public async setup(): Promise<void> {
        this.fd = new FormData();
    }

    public append(key: string, value: any): void {
        this.fd?.append(key, value);
    }

    public async appendFile(key: string, value: any, fileName?: string): Promise<void> {
        if (fileName == null && isNamedValue(value)) {
            fileName = value.name;
        }
        this.fd?.append(key, new Blob([value]), fileName);
    }

    public getRequest(): FormDataRequest<WebFormDataFd> {
        return {
            body: this.fd,
            headers: {},
        };
    }
}

```

# src/core/form-data-utils/index.ts

```typescript
export * from "./FormDataWrapper";

```

# src/core/utils/setObjectProperty.ts

```typescript
/**
 * Sets the value at path of object. If a portion of path doesn’t exist it’s created. This is
 * inspired by Lodash's set function, but is simplified to accommodate our use case.
 * For more details, see https://lodash.com/docs/4.17.15#set.
 *
 * @param object The object to modify.
 * @param path The path of the property to set.
 * @param value The value to set.
 * @return Returns object.
 */
export function setObjectProperty<T extends object>(object: T, path: string, value: any): T {
    if (object == null) {
        return object;
    }

    const keys: string[] = path.split(".");
    if (keys.length === 0) {
        // Invalid path; do nothing.
        return object;
    }

    let current: Record<string, any> = object;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (key == null) {
            // Unreachable.
            continue;
        }
        if (!current[key] || typeof current[key] !== "object") {
            current[key] = {};
        }
        current = current[key] as Record<string, any>;
    }

    const lastKey = keys[keys.length - 1];
    if (lastKey == null) {
        // Unreachable.
        return object;
    }

    current[lastKey] = value;
    return object;
}

```

# src/core/utils/index.ts

```typescript
export { setObjectProperty } from "./setObjectProperty";

```

# src/core/runtime/runtime.ts

```typescript
interface DenoGlobal {
    version: {
        deno: string;
    };
}

interface BunGlobal {
    version: string;
}

declare const Deno: DenoGlobal;
declare const Bun: BunGlobal;

/**
 * A constant that indicates whether the environment the code is running is a Web Browser.
 */
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";

/**
 * A constant that indicates whether the environment the code is running is a Web Worker.
 */
const isWebWorker =
    typeof self === "object" &&
    // @ts-ignore
    typeof self?.importScripts === "function" &&
    (self.constructor?.name === "DedicatedWorkerGlobalScope" ||
        self.constructor?.name === "ServiceWorkerGlobalScope" ||
        self.constructor?.name === "SharedWorkerGlobalScope");

/**
 * A constant that indicates whether the environment the code is running is Deno.
 */
const isDeno =
    typeof Deno !== "undefined" && typeof Deno.version !== "undefined" && typeof Deno.version.deno !== "undefined";

/**
 * A constant that indicates whether the environment the code is running is Bun.sh.
 */
const isBun = typeof Bun !== "undefined" && typeof Bun.version !== "undefined";

/**
 * A constant that indicates whether the environment the code is running is Node.JS.
 */
const isNode =
    typeof process !== "undefined" &&
    Boolean(process.version) &&
    Boolean(process.versions?.node) &&
    // Deno spoofs process.versions.node, see https://deno.land/std@0.177.0/node/process.ts?s=versions
    !isDeno &&
    !isBun;

/**
 * A constant that indicates whether the environment the code is running is in React-Native.
 * https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Core/setUpNavigator.js
 */
const isReactNative = typeof navigator !== "undefined" && navigator?.product === "ReactNative";

/**
 * A constant that indicates whether the environment the code is running is Cloudflare.
 * https://developers.cloudflare.com/workers/runtime-apis/web-standards/#navigatoruseragent
 */
const isCloudflare = typeof globalThis !== "undefined" && globalThis?.navigator?.userAgent === "Cloudflare-Workers";

/**
 * A constant that indicates which environment and version the SDK is running in.
 */
export const RUNTIME: Runtime = evaluateRuntime();

export interface Runtime {
    type: "browser" | "web-worker" | "deno" | "bun" | "node" | "react-native" | "unknown" | "workerd";
    version?: string;
    parsedVersion?: number;
}

function evaluateRuntime(): Runtime {
    if (isBrowser) {
        return {
            type: "browser",
            version: window.navigator.userAgent,
        };
    }

    if (isCloudflare) {
        return {
            type: "workerd",
        };
    }

    if (isWebWorker) {
        return {
            type: "web-worker",
        };
    }

    if (isDeno) {
        return {
            type: "deno",
            version: Deno.version.deno,
        };
    }

    if (isBun) {
        return {
            type: "bun",
            version: Bun.version,
        };
    }

    if (isNode) {
        return {
            type: "node",
            version: process.versions.node,
            parsedVersion: Number(process.versions.node.split(".")[0]),
        };
    }

    if (isReactNative) {
        return {
            type: "react-native",
        };
    }

    return {
        type: "unknown",
    };
}

```

# src/core/runtime/index.ts

```typescript
export { RUNTIME } from "./runtime";

```

# src/core/websocket/events.ts

```typescript
export class Event {
    public target: any;
    public type: string;
    constructor(type: string, target: any) {
        this.target = target;
        this.type = type;
    }
}

export class ErrorEvent extends Event {
    public message: string;
    public error: Error;
    constructor(error: Error, target: any) {
        super("error", target);
        this.message = error.message;
        this.error = error;
    }
}

export class CloseEvent extends Event {
    public code: number;
    public reason: string;
    public wasClean = true;
    constructor(code = 1000, reason = "", target: any) {
        super("close", target);
        this.code = code;
        this.reason = reason;
    }
}
export interface WebSocketEventMap {
    close: CloseEvent;
    error: ErrorEvent;
    message: MessageEvent;
    open: Event;
}

export interface WebSocketEventListenerMap {
    close: (event: CloseEvent) => void | { handleEvent: (event: CloseEvent) => void };
    error: (event: ErrorEvent) => void | { handleEvent: (event: ErrorEvent) => void };
    message: (event: MessageEvent) => void | { handleEvent: (event: MessageEvent) => void };
    open: (event: Event) => void | { handleEvent: (event: Event) => void };
}

```

# src/core/websocket/ws.ts

```typescript
import { RUNTIME } from "../runtime";
import * as Events from "./events";
import { WebSocket as NodeWebSocket } from "ws";

const getGlobalWebSocket = (): WebSocket | undefined => {
    if (typeof WebSocket !== "undefined") {
        // @ts-ignore
        return WebSocket;
    } else if (RUNTIME.type === "node") {
        return NodeWebSocket as unknown as WebSocket;
    }
    return undefined;
};

/**
 * Returns true if given argument looks like a WebSocket class
 */
const isWebSocket = (w: any) => typeof w !== "undefined" && !!w && w.CLOSING === 2;

export type Event = Events.Event;
export type ErrorEvent = Events.ErrorEvent;
export type CloseEvent = Events.CloseEvent;

export type Options = {
    WebSocket?: any;
    maxReconnectionDelay?: number;
    minReconnectionDelay?: number;
    reconnectionDelayGrowFactor?: number;
    minUptime?: number;
    connectionTimeout?: number;
    maxRetries?: number;
    maxEnqueuedMessages?: number;
    startClosed?: boolean;
    debug?: boolean;
};

const DEFAULT = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false,
};

export type UrlProvider = string | (() => string) | (() => Promise<string>);

export type Message = string | ArrayBuffer | Blob | ArrayBufferView;

export type ListenersMap = {
    error: Array<Events.WebSocketEventListenerMap["error"]>;
    message: Array<Events.WebSocketEventListenerMap["message"]>;
    open: Array<Events.WebSocketEventListenerMap["open"]>;
    close: Array<Events.WebSocketEventListenerMap["close"]>;
};

export class ReconnectingWebSocket {
    private _ws?: WebSocket;
    private _listeners: ListenersMap = {
        error: [],
        message: [],
        open: [],
        close: [],
    };
    private _retryCount = -1;
    private _uptimeTimeout: any;
    private _connectTimeout: any;
    private _shouldReconnect = true;
    private _connectLock = false;
    private _binaryType: BinaryType = "blob";
    private _closeCalled = false;
    private _messageQueue: Message[] = [];

    private readonly _url: UrlProvider;
    private readonly _protocols?: string | string[];
    private readonly _options: Options;

    constructor(url: UrlProvider, protocols?: string | string[], options: Options = {}) {
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        if (this._options.startClosed) {
            this._shouldReconnect = false;
        }
        this._connect();
    }

    static get CONNECTING() {
        return 0;
    }
    static get OPEN() {
        return 1;
    }
    static get CLOSING() {
        return 2;
    }
    static get CLOSED() {
        return 3;
    }

    get CONNECTING() {
        return ReconnectingWebSocket.CONNECTING;
    }
    get OPEN() {
        return ReconnectingWebSocket.OPEN;
    }
    get CLOSING() {
        return ReconnectingWebSocket.CLOSING;
    }
    get CLOSED() {
        return ReconnectingWebSocket.CLOSED;
    }

    get binaryType() {
        return this._ws ? this._ws.binaryType : this._binaryType;
    }

    set binaryType(value: BinaryType) {
        this._binaryType = value;
        if (this._ws) {
            this._ws.binaryType = value;
        }
    }

    /**
     * Returns the number or connection retries
     */
    get retryCount(): number {
        return Math.max(this._retryCount, 0);
    }

    /**
     * The number of bytes of data that have been queued using calls to send() but not yet
     * transmitted to the network. This value resets to zero once all queued data has been sent.
     * This value does not reset to zero when the connection is closed; if you keep calling send(),
     * this will continue to climb. Read only
     */
    get bufferedAmount(): number {
        const bytes = this._messageQueue.reduce((acc, message) => {
            if (typeof message === "string") {
                acc += message.length; // not byte size
            } else if (message instanceof Blob) {
                acc += message.size;
            } else {
                acc += message.byteLength;
            }
            return acc;
        }, 0);
        return bytes + (this._ws ? this._ws.bufferedAmount : 0);
    }

    /**
     * The extensions selected by the server. This is currently only the empty string or a list of
     * extensions as negotiated by the connection
     */
    get extensions(): string {
        return this._ws ? this._ws.extensions : "";
    }

    /**
     * A string indicating the name of the sub-protocol the server selected;
     * this will be one of the strings specified in the protocols parameter when creating the
     * WebSocket object
     */
    get protocol(): string {
        return this._ws ? this._ws.protocol : "";
    }

    /**
     * The current state of the connection; this is one of the Ready state constants
     */
    get readyState(): number {
        if (this._ws) {
            return this._ws.readyState;
        }
        return this._options.startClosed ? ReconnectingWebSocket.CLOSED : ReconnectingWebSocket.CONNECTING;
    }

    /**
     * The URL as resolved by the constructor
     */
    get url(): string {
        return this._ws ? this._ws.url : "";
    }

    /**
     * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
     */
    public onclose: ((event: Events.CloseEvent) => void) | null = null;

    /**
     * An event listener to be called when an error occurs
     */
    public onerror: ((event: Events.ErrorEvent) => void) | null = null;

    /**
     * An event listener to be called when a message is received from the server
     */
    public onmessage: ((event: MessageEvent) => void) | null = null;

    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data
     */
    public onopen: ((event: Event) => void) | null = null;

    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */
    public close(code = 1000, reason?: string) {
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug("close enqueued: no ws instance");
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug("close: already closed");
            return;
        }
        this._ws.close(code, reason);
    }

    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */
    public reconnect(code?: number, reason?: string) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) {
            this._connect();
        } else {
            this._disconnect(code, reason);
            this._connect();
        }
    }

    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */
    public send(data: Message) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug("send", data);
            this._ws.send(data);
        } else {
            const { maxEnqueuedMessages = DEFAULT.maxEnqueuedMessages } = this._options;
            if (this._messageQueue.length < maxEnqueuedMessages) {
                this._debug("enqueue", data);
                this._messageQueue.push(data);
            }
        }
    }

    /**
     * Register an event handler of a specific event type
     */
    public addEventListener<T extends keyof Events.WebSocketEventListenerMap>(
        type: T,
        listener: Events.WebSocketEventListenerMap[T]
    ): void {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type].push(listener);
        }
    }

    public dispatchEvent(event: Event) {
        const listeners = this._listeners[event.type as keyof Events.WebSocketEventListenerMap];
        if (listeners) {
            for (const listener of listeners) {
                this._callEventListener(event, listener);
            }
        }
        return true;
    }

    /**
     * Removes an event listener
     */
    public removeEventListener<T extends keyof Events.WebSocketEventListenerMap>(
        type: T,
        listener: Events.WebSocketEventListenerMap[T]
    ): void {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type] = this._listeners[type].filter(
                // @ts-ignore
                (l) => l !== listener
            );
        }
    }

    private _debug(...args: any[]) {
        if (this._options.debug) {
            // not using spread because compiled version uses Symbols
            // tslint:disable-next-line
            console.log.apply(console, ["RWS>", ...args]);
        }
    }

    private _getNextDelay() {
        const {
            reconnectionDelayGrowFactor = DEFAULT.reconnectionDelayGrowFactor,
            minReconnectionDelay = DEFAULT.minReconnectionDelay,
            maxReconnectionDelay = DEFAULT.maxReconnectionDelay,
        } = this._options;
        let delay = 0;
        if (this._retryCount > 0) {
            delay = minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) {
                delay = maxReconnectionDelay;
            }
        }
        this._debug("next delay", delay);
        return delay;
    }

    private _wait(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(resolve, this._getNextDelay());
        });
    }

    private _getNextUrl(urlProvider: UrlProvider): Promise<string> {
        if (typeof urlProvider === "string") {
            return Promise.resolve(urlProvider);
        }
        if (typeof urlProvider === "function") {
            const url = urlProvider();
            if (typeof url === "string") {
                return Promise.resolve(url);
            }
            // @ts-ignore redundant check
            if (url.then) {
                return url;
            }
        }
        throw Error("Invalid URL");
    }

    private _connect() {
        if (this._connectLock || !this._shouldReconnect) {
            return;
        }
        this._connectLock = true;

        const {
            maxRetries = DEFAULT.maxRetries,
            connectionTimeout = DEFAULT.connectionTimeout,
            WebSocket = getGlobalWebSocket(),
        } = this._options;

        if (this._retryCount >= maxRetries) {
            this._debug("max retries reached", this._retryCount, ">=", maxRetries);
            return;
        }

        this._retryCount++;

        this._debug("connect", this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket)) {
            throw Error("No valid WebSocket class provided");
        }
        this._wait()
            .then(() => this._getNextUrl(this._url))
            .then((url) => {
                // close could be called before creating the ws
                if (this._closeCalled) {
                    return;
                }
                this._debug("connect", { url, protocols: this._protocols });
                this._ws = this._protocols ? new WebSocket(url, this._protocols) : new WebSocket(url);
                this._ws!.binaryType = this._binaryType;
                this._connectLock = false;
                this._addListeners();

                this._connectTimeout = setTimeout(() => this._handleTimeout(), connectionTimeout);
            });
    }

    private _handleTimeout() {
        this._debug("timeout event");
        this._handleError(new Events.ErrorEvent(Error("TIMEOUT"), this));
    }

    private _disconnect(code = 1000, reason?: string) {
        this._clearTimeouts();
        if (!this._ws) {
            return;
        }
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new Events.CloseEvent(code, reason, this));
        } catch (error) {
            // ignore
        }
    }

    private _acceptOpen() {
        this._debug("accept open");
        this._retryCount = 0;
    }

    private _callEventListener<T extends keyof Events.WebSocketEventListenerMap>(
        event: Events.WebSocketEventMap[T],
        listener: Events.WebSocketEventListenerMap[T]
    ) {
        if ("handleEvent" in listener) {
            // @ts-ignore
            listener.handleEvent(event);
        } else {
            // @ts-ignore
            listener(event);
        }
    }

    private _handleOpen = (event: Event) => {
        this._debug("open event");
        const { minUptime = DEFAULT.minUptime } = this._options;

        clearTimeout(this._connectTimeout);
        this._uptimeTimeout = setTimeout(() => this._acceptOpen(), minUptime);

        this._ws!.binaryType = this._binaryType;

        // send enqueued messages (messages sent before websocket open event)
        this._messageQueue.forEach((message) => this._ws?.send(message));
        this._messageQueue = [];

        if (this.onopen) {
            this.onopen(event);
        }
        this._listeners.open.forEach((listener) => this._callEventListener(event, listener));
    };

    private _handleMessage = (event: MessageEvent) => {
        this._debug("message event");

        if (this.onmessage) {
            this.onmessage(event);
        }
        this._listeners.message.forEach((listener) => this._callEventListener(event, listener));
    };

    private _handleError = (event: Events.ErrorEvent) => {
        this._debug("error event", event.message);
        this._disconnect(undefined, event.message === "TIMEOUT" ? "timeout" : undefined);

        if (this.onerror) {
            this.onerror(event);
        }
        this._debug("exec error listeners");
        this._listeners.error.forEach((listener) => this._callEventListener(event, listener));

        this._connect();
    };

    private _handleClose = (event: Events.CloseEvent) => {
        this._debug("close event");
        this._clearTimeouts();

        if (event.code === 1000) {
            this._shouldReconnect = false;
        }

        if (this._shouldReconnect) {
            this._connect();
        }

        if (this.onclose) {
            this.onclose(event);
        }
        this._listeners.close.forEach((listener) => this._callEventListener(event, listener));
    };

    private _removeListeners() {
        if (!this._ws) {
            return;
        }
        this._debug("removeListeners");
        this._ws.removeEventListener("open", this._handleOpen);
        this._ws.removeEventListener("close", this._handleClose);
        this._ws.removeEventListener("message", this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener("error", this._handleError);
    }

    private _addListeners() {
        if (!this._ws) {
            return;
        }
        this._debug("addListeners");
        this._ws.addEventListener("open", this._handleOpen);
        this._ws.addEventListener("close", this._handleClose);
        this._ws.addEventListener("message", this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener("error", this._handleError);
    }

    private _clearTimeouts() {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    }
}

```

# src/core/websocket/index.ts

```typescript
export * from "./ws";

```

# src/core/schemas/Schema.ts

```typescript
import { SchemaUtils } from "./builders";

export type Schema<Raw = unknown, Parsed = unknown> = BaseSchema<Raw, Parsed> & SchemaUtils<Raw, Parsed>;

export type inferRaw<S extends Schema> = S extends Schema<infer Raw, any> ? Raw : never;
export type inferParsed<S extends Schema> = S extends Schema<any, infer Parsed> ? Parsed : never;

export interface BaseSchema<Raw, Parsed> {
    parse: (raw: unknown, opts?: SchemaOptions) => MaybeValid<Parsed>;
    json: (parsed: unknown, opts?: SchemaOptions) => MaybeValid<Raw>;
    getType: () => SchemaType | SchemaType;
}

export const SchemaType = {
    DATE: "date",
    ENUM: "enum",
    LIST: "list",
    STRING_LITERAL: "stringLiteral",
    BOOLEAN_LITERAL: "booleanLiteral",
    OBJECT: "object",
    ANY: "any",
    BOOLEAN: "boolean",
    NUMBER: "number",
    STRING: "string",
    UNKNOWN: "unknown",
    RECORD: "record",
    SET: "set",
    UNION: "union",
    UNDISCRIMINATED_UNION: "undiscriminatedUnion",
    OPTIONAL: "optional",
} as const;
export type SchemaType = typeof SchemaType[keyof typeof SchemaType];

export type MaybeValid<T> = Valid<T> | Invalid;

export interface Valid<T> {
    ok: true;
    value: T;
}

export interface Invalid {
    ok: false;
    errors: ValidationError[];
}

export interface ValidationError {
    path: string[];
    message: string;
}

export interface SchemaOptions {
    /**
     * how to handle unrecognized keys in objects
     *
     * @default "fail"
     */
    unrecognizedObjectKeys?: "fail" | "passthrough" | "strip";

    /**
     * whether to fail when an unrecognized discriminant value is
     * encountered in a union
     *
     * @default false
     */
    allowUnrecognizedUnionMembers?: boolean;

    /**
     * whether to fail when an unrecognized enum value is encountered
     *
     * @default false
     */
    allowUnrecognizedEnumValues?: boolean;

    /**
     * whether to allow data that doesn't conform to the schema.
     * invalid data is passed through without transformation.
     *
     * when this is enabled, .parse() and .json() will always
     * return `ok: true`. `.parseOrThrow()` and `.jsonOrThrow()`
     * will never fail.
     *
     * @default false
     */
    skipValidation?: boolean;

    /**
     * each validation failure contains a "path" property, which is
     * the breadcrumbs to the offending node in the JSON. you can supply
     * a prefix that is prepended to all the errors' paths. this can be
     * helpful for zurg's internal debug logging.
     */
    breadcrumbsPrefix?: string[];

    /**
     * whether to send 'null' for optional properties explicitly set to 'undefined'.
     */
    omitUndefined?: boolean;
}

```

# src/core/schemas/index.ts

```typescript
export * from "./builders";
export type { inferParsed, inferRaw, Schema, SchemaOptions } from "./Schema";

```

# src/core/schemas/utils/getErrorMessageForIncorrectType.ts

```typescript
export function getErrorMessageForIncorrectType(value: unknown, expectedType: string): string {
    return `Expected ${expectedType}. Received ${getTypeAsString(value)}.`;
}

function getTypeAsString(value: unknown): string {
    if (Array.isArray(value)) {
        return "list";
    }
    if (value === null) {
        return "null";
    }
    switch (typeof value) {
        case "string":
            return `"${value}"`;
        case "number":
        case "boolean":
        case "undefined":
            return `${value}`;
    }
    return typeof value;
}

```

# src/core/schemas/utils/createIdentitySchemaCreator.ts

```typescript
import { getSchemaUtils } from "../builders/schema-utils";
import { BaseSchema, MaybeValid, Schema, SchemaOptions, SchemaType } from "../Schema";
import { maybeSkipValidation } from "./maybeSkipValidation";

export function createIdentitySchemaCreator<T>(
    schemaType: SchemaType,
    validate: (value: unknown, opts?: SchemaOptions) => MaybeValid<T>
): () => Schema<T, T> {
    return () => {
        const baseSchema: BaseSchema<T, T> = {
            parse: validate,
            json: validate,
            getType: () => schemaType,
        };

        return {
            ...maybeSkipValidation(baseSchema),
            ...getSchemaUtils(baseSchema),
        };
    };
}

```

# src/core/schemas/utils/entries.ts

```typescript
export function entries<T>(object: T): [keyof T, T[keyof T]][] {
    return Object.entries(object) as [keyof T, T[keyof T]][];
}

```

# src/core/schemas/utils/maybeSkipValidation.ts

```typescript
import { BaseSchema, MaybeValid, SchemaOptions } from "../Schema";

export function maybeSkipValidation<S extends BaseSchema<Raw, Parsed>, Raw, Parsed>(schema: S): S {
    return {
        ...schema,
        json: transformAndMaybeSkipValidation(schema.json),
        parse: transformAndMaybeSkipValidation(schema.parse),
    };
}

function transformAndMaybeSkipValidation<T>(
    transform: (value: unknown, opts?: SchemaOptions) => MaybeValid<T>
): (value: unknown, opts?: SchemaOptions) => MaybeValid<T> {
    return (value, opts): MaybeValid<T> => {
        const transformed = transform(value, opts);
        const { skipValidation = false } = opts ?? {};
        if (!transformed.ok && skipValidation) {
            // eslint-disable-next-line no-console
            console.warn(
                [
                    "Failed to validate.",
                    ...transformed.errors.map(
                        (error) =>
                            "  - " +
                            (error.path.length > 0 ? `${error.path.join(".")}: ${error.message}` : error.message)
                    ),
                ].join("\n")
            );

            return {
                ok: true,
                value: value as T,
            };
        } else {
            return transformed;
        }
    };
}

```

# src/core/schemas/utils/addQuestionMarksToNullableProperties.ts

```typescript
export type addQuestionMarksToNullableProperties<T> = {
    [K in OptionalKeys<T>]?: T[K];
} & Pick<T, RequiredKeys<T>>;

export type OptionalKeys<T> = {
    [K in keyof T]-?: undefined extends T[K]
        ? K
        : null extends T[K]
        ? K
        : 1 extends (any extends T[K] ? 0 : 1)
        ? never
        : K;
}[keyof T];

export type RequiredKeys<T> = Exclude<keyof T, OptionalKeys<T>>;

```

# src/core/schemas/utils/partition.ts

```typescript
export function partition<T>(items: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
    const trueItems: T[] = [],
        falseItems: T[] = [];
    for (const item of items) {
        if (predicate(item)) {
            trueItems.push(item);
        } else {
            falseItems.push(item);
        }
    }
    return [trueItems, falseItems];
}

```

# src/core/schemas/utils/MaybePromise.ts

```typescript
export type MaybePromise<T> = T | Promise<T>;

```

# src/core/schemas/utils/filterObject.ts

```typescript
export function filterObject<T, K extends keyof T>(obj: T, keysToInclude: K[]): Pick<T, K> {
    const keysToIncludeSet = new Set(keysToInclude);
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (keysToIncludeSet.has(key as K)) {
            acc[key as K] = value;
        }
        return acc;
        // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
    }, {} as Pick<T, K>);
}

```

# src/core/schemas/utils/isPlainObject.ts

```typescript
// borrowed from https://github.com/lodash/lodash/blob/master/isPlainObject.js
export function isPlainObject(value: unknown): value is Record<string, unknown> {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(value) === proto;
}

```

# src/core/schemas/utils/keys.ts

```typescript
export function keys<T>(object: T): (keyof T)[] {
    return Object.keys(object) as (keyof T)[];
}

```

# src/core/schemas/builders/index.ts

```typescript
export * from "./date";
export * from "./enum";
export * from "./lazy";
export * from "./list";
export * from "./literals";
export * from "./object";
export * from "./object-like";
export * from "./primitives";
export * from "./record";
export * from "./schema-utils";
export * from "./set";
export * from "./undiscriminated-union";
export * from "./union";

```

# src/core/schemas/builders/object-like/types.ts

```typescript
import { BaseSchema, Schema } from "../../Schema";

export type ObjectLikeSchema<Raw, Parsed> = Schema<Raw, Parsed> &
    BaseSchema<Raw, Parsed> &
    ObjectLikeUtils<Raw, Parsed>;

export interface ObjectLikeUtils<Raw, Parsed> {
    withParsedProperties: <T extends Record<string, any>>(properties: {
        [K in keyof T]: T[K] | ((parsed: Parsed) => T[K]);
    }) => ObjectLikeSchema<Raw, Parsed & T>;
}

```

# src/core/schemas/builders/object-like/index.ts

```typescript
export { getObjectLikeUtils, withParsedProperties } from "./getObjectLikeUtils";
export type { ObjectLikeSchema, ObjectLikeUtils } from "./types";

```

# src/core/schemas/builders/object-like/getObjectLikeUtils.ts

```typescript
import { BaseSchema } from "../../Schema";
import { filterObject } from "../../utils/filterObject";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";
import { isPlainObject } from "../../utils/isPlainObject";
import { getSchemaUtils } from "../schema-utils";
import { ObjectLikeSchema, ObjectLikeUtils } from "./types";

export function getObjectLikeUtils<Raw, Parsed>(schema: BaseSchema<Raw, Parsed>): ObjectLikeUtils<Raw, Parsed> {
    return {
        withParsedProperties: (properties) => withParsedProperties(schema, properties),
    };
}

/**
 * object-like utils are defined in one file to resolve issues with circular imports
 */

export function withParsedProperties<RawObjectShape, ParsedObjectShape, Properties>(
    objectLike: BaseSchema<RawObjectShape, ParsedObjectShape>,
    properties: { [K in keyof Properties]: Properties[K] | ((parsed: ParsedObjectShape) => Properties[K]) }
): ObjectLikeSchema<RawObjectShape, ParsedObjectShape & Properties> {
    const objectSchema: BaseSchema<RawObjectShape, ParsedObjectShape & Properties> = {
        parse: (raw, opts) => {
            const parsedObject = objectLike.parse(raw, opts);
            if (!parsedObject.ok) {
                return parsedObject;
            }

            const additionalProperties = Object.entries(properties).reduce<Record<string, any>>(
                (processed, [key, value]) => {
                    return {
                        ...processed,
                        [key]: typeof value === "function" ? value(parsedObject.value) : value,
                    };
                },
                {}
            );

            return {
                ok: true,
                value: {
                    ...parsedObject.value,
                    ...(additionalProperties as Properties),
                },
            };
        },

        json: (parsed, opts) => {
            if (!isPlainObject(parsed)) {
                return {
                    ok: false,
                    errors: [
                        {
                            path: opts?.breadcrumbsPrefix ?? [],
                            message: getErrorMessageForIncorrectType(parsed, "object"),
                        },
                    ],
                };
            }

            // strip out added properties
            const addedPropertyKeys = new Set(Object.keys(properties));
            const parsedWithoutAddedProperties = filterObject(
                parsed,
                Object.keys(parsed).filter((key) => !addedPropertyKeys.has(key))
            );

            return objectLike.json(parsedWithoutAddedProperties as ParsedObjectShape, opts);
        },

        getType: () => objectLike.getType(),
    };

    return {
        ...objectSchema,
        ...getSchemaUtils(objectSchema),
        ...getObjectLikeUtils(objectSchema),
    };
}

```

# src/core/schemas/builders/literals/booleanLiteral.ts

```typescript
import { Schema, SchemaType } from "../../Schema";
import { createIdentitySchemaCreator } from "../../utils/createIdentitySchemaCreator";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";

export function booleanLiteral<V extends boolean>(literal: V): Schema<V, V> {
    const schemaCreator = createIdentitySchemaCreator(
        SchemaType.BOOLEAN_LITERAL,
        (value, { breadcrumbsPrefix = [] } = {}) => {
            if (value === literal) {
                return {
                    ok: true,
                    value: literal,
                };
            } else {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: getErrorMessageForIncorrectType(value, `${literal.toString()}`),
                        },
                    ],
                };
            }
        }
    );

    return schemaCreator();
}

```

# src/core/schemas/builders/literals/stringLiteral.ts

```typescript
import { Schema, SchemaType } from "../../Schema";
import { createIdentitySchemaCreator } from "../../utils/createIdentitySchemaCreator";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";

export function stringLiteral<V extends string>(literal: V): Schema<V, V> {
    const schemaCreator = createIdentitySchemaCreator(
        SchemaType.STRING_LITERAL,
        (value, { breadcrumbsPrefix = [] } = {}) => {
            if (value === literal) {
                return {
                    ok: true,
                    value: literal,
                };
            } else {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: getErrorMessageForIncorrectType(value, `"${literal}"`),
                        },
                    ],
                };
            }
        }
    );

    return schemaCreator();
}

```

# src/core/schemas/builders/literals/index.ts

```typescript
export { stringLiteral } from "./stringLiteral";
export { booleanLiteral } from "./booleanLiteral";

```

# src/core/schemas/builders/primitives/unknown.ts

```typescript
import { SchemaType } from "../../Schema";
import { createIdentitySchemaCreator } from "../../utils/createIdentitySchemaCreator";

export const unknown = createIdentitySchemaCreator<unknown>(SchemaType.UNKNOWN, (value) => ({ ok: true, value }));

```

# src/core/schemas/builders/primitives/number.ts

```typescript
import { SchemaType } from "../../Schema";
import { createIdentitySchemaCreator } from "../../utils/createIdentitySchemaCreator";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";

export const number = createIdentitySchemaCreator<number>(
    SchemaType.NUMBER,
    (value, { breadcrumbsPrefix = [] } = {}) => {
        if (typeof value === "number") {
            return {
                ok: true,
                value,
            };
        } else {
            return {
                ok: false,
                errors: [
                    {
                        path: breadcrumbsPrefix,
                        message: getErrorMessageForIncorrectType(value, "number"),
                    },
                ],
            };
        }
    }
);

```

# src/core/schemas/builders/primitives/any.ts

```typescript
import { SchemaType } from "../../Schema";
import { createIdentitySchemaCreator } from "../../utils/createIdentitySchemaCreator";

export const any = createIdentitySchemaCreator<any>(SchemaType.ANY, (value) => ({ ok: true, value }));

```

# src/core/schemas/builders/primitives/boolean.ts

```typescript
import { SchemaType } from "../../Schema";
import { createIdentitySchemaCreator } from "../../utils/createIdentitySchemaCreator";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";

export const boolean = createIdentitySchemaCreator<boolean>(
    SchemaType.BOOLEAN,
    (value, { breadcrumbsPrefix = [] } = {}) => {
        if (typeof value === "boolean") {
            return {
                ok: true,
                value,
            };
        } else {
            return {
                ok: false,
                errors: [
                    {
                        path: breadcrumbsPrefix,
                        message: getErrorMessageForIncorrectType(value, "boolean"),
                    },
                ],
            };
        }
    }
);

```

# src/core/schemas/builders/primitives/string.ts

```typescript
import { SchemaType } from "../../Schema";
import { createIdentitySchemaCreator } from "../../utils/createIdentitySchemaCreator";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";

export const string = createIdentitySchemaCreator<string>(
    SchemaType.STRING,
    (value, { breadcrumbsPrefix = [] } = {}) => {
        if (typeof value === "string") {
            return {
                ok: true,
                value,
            };
        } else {
            return {
                ok: false,
                errors: [
                    {
                        path: breadcrumbsPrefix,
                        message: getErrorMessageForIncorrectType(value, "string"),
                    },
                ],
            };
        }
    }
);

```

# src/core/schemas/builders/primitives/index.ts

```typescript
export { any } from "./any";
export { boolean } from "./boolean";
export { number } from "./number";
export { string } from "./string";
export { unknown } from "./unknown";

```

# src/core/schemas/builders/undiscriminated-union/types.ts

```typescript
import { inferParsed, inferRaw, Schema } from "../../Schema";

export type UndiscriminatedUnionSchema<Schemas extends [...Schema[]]> = Schema<
    inferRawUnidiscriminatedUnionSchema<Schemas>,
    inferParsedUnidiscriminatedUnionSchema<Schemas>
>;

export type inferRawUnidiscriminatedUnionSchema<Schemas extends [...Schema[]]> = inferRaw<Schemas[number]>;

export type inferParsedUnidiscriminatedUnionSchema<Schemas extends [...Schema[]]> = inferParsed<Schemas[number]>;

```

# src/core/schemas/builders/undiscriminated-union/undiscriminatedUnion.ts

```typescript
import { BaseSchema, MaybeValid, Schema, SchemaOptions, SchemaType, ValidationError } from "../../Schema";
import { maybeSkipValidation } from "../../utils/maybeSkipValidation";
import { getSchemaUtils } from "../schema-utils";
import { inferParsedUnidiscriminatedUnionSchema, inferRawUnidiscriminatedUnionSchema } from "./types";

export function undiscriminatedUnion<Schemas extends [Schema<any, any>, ...Schema<any, any>[]]>(
    schemas: Schemas
): Schema<inferRawUnidiscriminatedUnionSchema<Schemas>, inferParsedUnidiscriminatedUnionSchema<Schemas>> {
    const baseSchema: BaseSchema<
        inferRawUnidiscriminatedUnionSchema<Schemas>,
        inferParsedUnidiscriminatedUnionSchema<Schemas>
    > = {
        parse: (raw, opts) => {
            return validateAndTransformUndiscriminatedUnion<inferParsedUnidiscriminatedUnionSchema<Schemas>>(
                (schema, opts) => schema.parse(raw, opts),
                schemas,
                opts
            );
        },
        json: (parsed, opts) => {
            return validateAndTransformUndiscriminatedUnion<inferRawUnidiscriminatedUnionSchema<Schemas>>(
                (schema, opts) => schema.json(parsed, opts),
                schemas,
                opts
            );
        },
        getType: () => SchemaType.UNDISCRIMINATED_UNION,
    };

    return {
        ...maybeSkipValidation(baseSchema),
        ...getSchemaUtils(baseSchema),
    };
}

function validateAndTransformUndiscriminatedUnion<Transformed>(
    transform: (schema: Schema<any, any>, opts: SchemaOptions) => MaybeValid<Transformed>,
    schemas: Schema<any, any>[],
    opts: SchemaOptions | undefined
): MaybeValid<Transformed> {
    const errors: ValidationError[] = [];
    for (const [index, schema] of schemas.entries()) {
        const transformed = transform(schema, { ...opts, skipValidation: false });
        if (transformed.ok) {
            return transformed;
        } else {
            for (const error of transformed.errors) {
                errors.push({
                    path: error.path,
                    message: `[Variant ${index}] ${error.message}`,
                });
            }
        }
    }

    return {
        ok: false,
        errors,
    };
}

```

# src/core/schemas/builders/undiscriminated-union/index.ts

```typescript
export type {
    inferParsedUnidiscriminatedUnionSchema,
    inferRawUnidiscriminatedUnionSchema,
    UndiscriminatedUnionSchema,
} from "./types";
export { undiscriminatedUnion } from "./undiscriminatedUnion";

```

# src/core/schemas/builders/lazy/lazyObject.ts

```typescript
import { getObjectUtils } from "../object";
import { getObjectLikeUtils } from "../object-like";
import { BaseObjectSchema, ObjectSchema } from "../object/types";
import { getSchemaUtils } from "../schema-utils";
import { constructLazyBaseSchema, getMemoizedSchema, SchemaGetter } from "./lazy";

export function lazyObject<Raw, Parsed>(getter: SchemaGetter<ObjectSchema<Raw, Parsed>>): ObjectSchema<Raw, Parsed> {
    const baseSchema: BaseObjectSchema<Raw, Parsed> = {
        ...constructLazyBaseSchema(getter),
        _getRawProperties: () => getMemoizedSchema(getter)._getRawProperties(),
        _getParsedProperties: () => getMemoizedSchema(getter)._getParsedProperties(),
    };

    return {
        ...baseSchema,
        ...getSchemaUtils(baseSchema),
        ...getObjectLikeUtils(baseSchema),
        ...getObjectUtils(baseSchema),
    };
}

```

# src/core/schemas/builders/lazy/lazy.ts

```typescript
import { BaseSchema, Schema } from "../../Schema";
import { getSchemaUtils } from "../schema-utils";

export type SchemaGetter<SchemaType extends Schema<any, any>> = () => SchemaType;

export function lazy<Raw, Parsed>(getter: SchemaGetter<Schema<Raw, Parsed>>): Schema<Raw, Parsed> {
    const baseSchema = constructLazyBaseSchema(getter);
    return {
        ...baseSchema,
        ...getSchemaUtils(baseSchema),
    };
}

export function constructLazyBaseSchema<Raw, Parsed>(
    getter: SchemaGetter<Schema<Raw, Parsed>>
): BaseSchema<Raw, Parsed> {
    return {
        parse: (raw, opts) => getMemoizedSchema(getter).parse(raw, opts),
        json: (parsed, opts) => getMemoizedSchema(getter).json(parsed, opts),
        getType: () => getMemoizedSchema(getter).getType(),
    };
}

type MemoizedGetter<SchemaType extends Schema<any, any>> = SchemaGetter<SchemaType> & { __zurg_memoized?: SchemaType };

export function getMemoizedSchema<SchemaType extends Schema<any, any>>(getter: SchemaGetter<SchemaType>): SchemaType {
    const castedGetter = getter as MemoizedGetter<SchemaType>;
    if (castedGetter.__zurg_memoized == null) {
        castedGetter.__zurg_memoized = getter();
    }
    return castedGetter.__zurg_memoized;
}

```

# src/core/schemas/builders/lazy/index.ts

```typescript
export { lazy } from "./lazy";
export type { SchemaGetter } from "./lazy";
export { lazyObject } from "./lazyObject";

```

# src/core/schemas/builders/list/list.ts

```typescript
import { BaseSchema, MaybeValid, Schema, SchemaType, ValidationError } from "../../Schema";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";
import { maybeSkipValidation } from "../../utils/maybeSkipValidation";
import { getSchemaUtils } from "../schema-utils";

export function list<Raw, Parsed>(schema: Schema<Raw, Parsed>): Schema<Raw[], Parsed[]> {
    const baseSchema: BaseSchema<Raw[], Parsed[]> = {
        parse: (raw, opts) =>
            validateAndTransformArray(raw, (item, index) =>
                schema.parse(item, {
                    ...opts,
                    breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), `[${index}]`],
                })
            ),
        json: (parsed, opts) =>
            validateAndTransformArray(parsed, (item, index) =>
                schema.json(item, {
                    ...opts,
                    breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), `[${index}]`],
                })
            ),
        getType: () => SchemaType.LIST,
    };

    return {
        ...maybeSkipValidation(baseSchema),
        ...getSchemaUtils(baseSchema),
    };
}

function validateAndTransformArray<Raw, Parsed>(
    value: unknown,
    transformItem: (item: Raw, index: number) => MaybeValid<Parsed>
): MaybeValid<Parsed[]> {
    if (!Array.isArray(value)) {
        return {
            ok: false,
            errors: [
                {
                    message: getErrorMessageForIncorrectType(value, "list"),
                    path: [],
                },
            ],
        };
    }

    const maybeValidItems = value.map((item, index) => transformItem(item, index));

    return maybeValidItems.reduce<MaybeValid<Parsed[]>>(
        (acc, item) => {
            if (acc.ok && item.ok) {
                return {
                    ok: true,
                    value: [...acc.value, item.value],
                };
            }

            const errors: ValidationError[] = [];
            if (!acc.ok) {
                errors.push(...acc.errors);
            }
            if (!item.ok) {
                errors.push(...item.errors);
            }

            return {
                ok: false,
                errors,
            };
        },
        { ok: true, value: [] }
    );
}

```

# src/core/schemas/builders/list/index.ts

```typescript
export { list } from "./list";

```

# src/core/schemas/builders/union/types.ts

```typescript
import { inferParsedObject, inferRawObject, ObjectSchema } from "../object";
import { Discriminant } from "./discriminant";

export type UnionSubtypes<DiscriminantValues extends string | number | symbol> = {
    [K in DiscriminantValues]: ObjectSchema<any, any>;
};

export type inferRawUnion<D extends string | Discriminant<any, any>, U extends UnionSubtypes<keyof U>> = {
    [K in keyof U]: Record<inferRawDiscriminant<D>, K> & inferRawObject<U[K]>;
}[keyof U];

export type inferParsedUnion<D extends string | Discriminant<any, any>, U extends UnionSubtypes<keyof U>> = {
    [K in keyof U]: Record<inferParsedDiscriminant<D>, K> & inferParsedObject<U[K]>;
}[keyof U];

export type inferRawDiscriminant<D extends string | Discriminant<any, any>> = D extends string
    ? D
    : D extends Discriminant<infer Raw, any>
    ? Raw
    : never;

export type inferParsedDiscriminant<D extends string | Discriminant<any, any>> = D extends string
    ? D
    : D extends Discriminant<any, infer Parsed>
    ? Parsed
    : never;

```

# src/core/schemas/builders/union/discriminant.ts

```typescript
export function discriminant<RawDiscriminant extends string, ParsedDiscriminant extends string>(
    parsedDiscriminant: ParsedDiscriminant,
    rawDiscriminant: RawDiscriminant
): Discriminant<RawDiscriminant, ParsedDiscriminant> {
    return {
        parsedDiscriminant,
        rawDiscriminant,
    };
}

export interface Discriminant<RawDiscriminant extends string, ParsedDiscriminant extends string> {
    parsedDiscriminant: ParsedDiscriminant;
    rawDiscriminant: RawDiscriminant;
}

```

# src/core/schemas/builders/union/union.ts

```typescript
import { BaseSchema, MaybeValid, SchemaType } from "../../Schema";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";
import { isPlainObject } from "../../utils/isPlainObject";
import { keys } from "../../utils/keys";
import { maybeSkipValidation } from "../../utils/maybeSkipValidation";
import { enum_ } from "../enum";
import { ObjectSchema } from "../object";
import { getObjectLikeUtils, ObjectLikeSchema } from "../object-like";
import { getSchemaUtils } from "../schema-utils";
import { Discriminant } from "./discriminant";
import { inferParsedDiscriminant, inferParsedUnion, inferRawDiscriminant, inferRawUnion, UnionSubtypes } from "./types";

export function union<D extends string | Discriminant<any, any>, U extends UnionSubtypes<any>>(
    discriminant: D,
    union: U
): ObjectLikeSchema<inferRawUnion<D, U>, inferParsedUnion<D, U>> {
    const rawDiscriminant =
        typeof discriminant === "string" ? discriminant : (discriminant.rawDiscriminant as inferRawDiscriminant<D>);
    const parsedDiscriminant =
        typeof discriminant === "string"
            ? discriminant
            : (discriminant.parsedDiscriminant as inferParsedDiscriminant<D>);

    const discriminantValueSchema = enum_(keys(union) as string[]);

    const baseSchema: BaseSchema<inferRawUnion<D, U>, inferParsedUnion<D, U>> = {
        parse: (raw, opts) => {
            return transformAndValidateUnion({
                value: raw,
                discriminant: rawDiscriminant,
                transformedDiscriminant: parsedDiscriminant,
                transformDiscriminantValue: (discriminantValue) =>
                    discriminantValueSchema.parse(discriminantValue, {
                        allowUnrecognizedEnumValues: opts?.allowUnrecognizedUnionMembers,
                        breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), rawDiscriminant],
                    }),
                getAdditionalPropertiesSchema: (discriminantValue) => union[discriminantValue],
                allowUnrecognizedUnionMembers: opts?.allowUnrecognizedUnionMembers,
                transformAdditionalProperties: (additionalProperties, additionalPropertiesSchema) =>
                    additionalPropertiesSchema.parse(additionalProperties, opts),
                breadcrumbsPrefix: opts?.breadcrumbsPrefix,
            });
        },
        json: (parsed, opts) => {
            return transformAndValidateUnion({
                value: parsed,
                discriminant: parsedDiscriminant,
                transformedDiscriminant: rawDiscriminant,
                transformDiscriminantValue: (discriminantValue) =>
                    discriminantValueSchema.json(discriminantValue, {
                        allowUnrecognizedEnumValues: opts?.allowUnrecognizedUnionMembers,
                        breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), parsedDiscriminant],
                    }),
                getAdditionalPropertiesSchema: (discriminantValue) => union[discriminantValue],
                allowUnrecognizedUnionMembers: opts?.allowUnrecognizedUnionMembers,
                transformAdditionalProperties: (additionalProperties, additionalPropertiesSchema) =>
                    additionalPropertiesSchema.json(additionalProperties, opts),
                breadcrumbsPrefix: opts?.breadcrumbsPrefix,
            });
        },
        getType: () => SchemaType.UNION,
    };

    return {
        ...maybeSkipValidation(baseSchema),
        ...getSchemaUtils(baseSchema),
        ...getObjectLikeUtils(baseSchema),
    };
}

function transformAndValidateUnion<
    TransformedDiscriminant extends string,
    TransformedDiscriminantValue extends string,
    TransformedAdditionalProperties
>({
    value,
    discriminant,
    transformedDiscriminant,
    transformDiscriminantValue,
    getAdditionalPropertiesSchema,
    allowUnrecognizedUnionMembers = false,
    transformAdditionalProperties,
    breadcrumbsPrefix = [],
}: {
    value: unknown;
    discriminant: string;
    transformedDiscriminant: TransformedDiscriminant;
    transformDiscriminantValue: (discriminantValue: unknown) => MaybeValid<TransformedDiscriminantValue>;
    getAdditionalPropertiesSchema: (discriminantValue: string) => ObjectSchema<any, any> | undefined;
    allowUnrecognizedUnionMembers: boolean | undefined;
    transformAdditionalProperties: (
        additionalProperties: unknown,
        additionalPropertiesSchema: ObjectSchema<any, any>
    ) => MaybeValid<TransformedAdditionalProperties>;
    breadcrumbsPrefix: string[] | undefined;
}): MaybeValid<Record<TransformedDiscriminant, TransformedDiscriminantValue> & TransformedAdditionalProperties> {
    if (!isPlainObject(value)) {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: getErrorMessageForIncorrectType(value, "object"),
                },
            ],
        };
    }

    const { [discriminant]: discriminantValue, ...additionalProperties } = value;

    if (discriminantValue == null) {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: `Missing discriminant ("${discriminant}")`,
                },
            ],
        };
    }

    const transformedDiscriminantValue = transformDiscriminantValue(discriminantValue);
    if (!transformedDiscriminantValue.ok) {
        return {
            ok: false,
            errors: transformedDiscriminantValue.errors,
        };
    }

    const additionalPropertiesSchema = getAdditionalPropertiesSchema(transformedDiscriminantValue.value);

    if (additionalPropertiesSchema == null) {
        if (allowUnrecognizedUnionMembers) {
            return {
                ok: true,
                value: {
                    [transformedDiscriminant]: transformedDiscriminantValue.value,
                    ...additionalProperties,
                } as Record<TransformedDiscriminant, TransformedDiscriminantValue> & TransformedAdditionalProperties,
            };
        } else {
            return {
                ok: false,
                errors: [
                    {
                        path: [...breadcrumbsPrefix, discriminant],
                        message: "Unexpected discriminant value",
                    },
                ],
            };
        }
    }

    const transformedAdditionalProperties = transformAdditionalProperties(
        additionalProperties,
        additionalPropertiesSchema
    );
    if (!transformedAdditionalProperties.ok) {
        return transformedAdditionalProperties;
    }

    return {
        ok: true,
        value: {
            [transformedDiscriminant]: discriminantValue,
            ...transformedAdditionalProperties.value,
        } as Record<TransformedDiscriminant, TransformedDiscriminantValue> & TransformedAdditionalProperties,
    };
}

```

# src/core/schemas/builders/union/index.ts

```typescript
export { discriminant } from "./discriminant";
export type { Discriminant } from "./discriminant";
export type {
    inferParsedDiscriminant,
    inferParsedUnion,
    inferRawDiscriminant,
    inferRawUnion,
    UnionSubtypes,
} from "./types";
export { union } from "./union";

```

# src/core/schemas/builders/record/types.ts

```typescript
import { BaseSchema } from "../../Schema";
import { SchemaUtils } from "../schema-utils";

export type RecordSchema<
    RawKey extends string | number,
    RawValue,
    ParsedKey extends string | number,
    ParsedValue
> = BaseRecordSchema<RawKey, RawValue, ParsedKey, ParsedValue> &
    SchemaUtils<Record<RawKey, RawValue>, Record<ParsedKey, ParsedValue>>;

export type BaseRecordSchema<
    RawKey extends string | number,
    RawValue,
    ParsedKey extends string | number,
    ParsedValue
> = BaseSchema<Record<RawKey, RawValue>, Record<ParsedKey, ParsedValue>>;

```

# src/core/schemas/builders/record/record.ts

```typescript
import { MaybeValid, Schema, SchemaType, ValidationError } from "../../Schema";
import { entries } from "../../utils/entries";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";
import { isPlainObject } from "../../utils/isPlainObject";
import { maybeSkipValidation } from "../../utils/maybeSkipValidation";
import { getSchemaUtils } from "../schema-utils";
import { BaseRecordSchema, RecordSchema } from "./types";

export function record<RawKey extends string | number, RawValue, ParsedValue, ParsedKey extends string | number>(
    keySchema: Schema<RawKey, ParsedKey>,
    valueSchema: Schema<RawValue, ParsedValue>
): RecordSchema<RawKey, RawValue, ParsedKey, ParsedValue> {
    const baseSchema: BaseRecordSchema<RawKey, RawValue, ParsedKey, ParsedValue> = {
        parse: (raw, opts) => {
            return validateAndTransformRecord({
                value: raw,
                isKeyNumeric: keySchema.getType() === SchemaType.NUMBER,
                transformKey: (key) =>
                    keySchema.parse(key, {
                        ...opts,
                        breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), `${key} (key)`],
                    }),
                transformValue: (value, key) =>
                    valueSchema.parse(value, {
                        ...opts,
                        breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), `${key}`],
                    }),
                breadcrumbsPrefix: opts?.breadcrumbsPrefix,
            });
        },
        json: (parsed, opts) => {
            return validateAndTransformRecord({
                value: parsed,
                isKeyNumeric: keySchema.getType() === SchemaType.NUMBER,
                transformKey: (key) =>
                    keySchema.json(key, {
                        ...opts,
                        breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), `${key} (key)`],
                    }),
                transformValue: (value, key) =>
                    valueSchema.json(value, {
                        ...opts,
                        breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), `${key}`],
                    }),
                breadcrumbsPrefix: opts?.breadcrumbsPrefix,
            });
        },
        getType: () => SchemaType.RECORD,
    };

    return {
        ...maybeSkipValidation(baseSchema),
        ...getSchemaUtils(baseSchema),
    };
}

function validateAndTransformRecord<TransformedKey extends string | number, TransformedValue>({
    value,
    isKeyNumeric,
    transformKey,
    transformValue,
    breadcrumbsPrefix = [],
}: {
    value: unknown;
    isKeyNumeric: boolean;
    transformKey: (key: string | number) => MaybeValid<TransformedKey>;
    transformValue: (value: unknown, key: string | number) => MaybeValid<TransformedValue>;
    breadcrumbsPrefix: string[] | undefined;
}): MaybeValid<Record<TransformedKey, TransformedValue>> {
    if (!isPlainObject(value)) {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: getErrorMessageForIncorrectType(value, "object"),
                },
            ],
        };
    }

    return entries(value).reduce<MaybeValid<Record<TransformedKey, TransformedValue>>>(
        (accPromise, [stringKey, value]) => {
            // skip nullish keys
            if (value == null) {
                return accPromise;
            }

            const acc = accPromise;

            let key: string | number = stringKey;
            if (isKeyNumeric) {
                const numberKey = stringKey.length > 0 ? Number(stringKey) : NaN;
                if (!isNaN(numberKey)) {
                    key = numberKey;
                }
            }
            const transformedKey = transformKey(key);

            const transformedValue = transformValue(value, key);

            if (acc.ok && transformedKey.ok && transformedValue.ok) {
                return {
                    ok: true,
                    value: {
                        ...acc.value,
                        [transformedKey.value]: transformedValue.value,
                    },
                };
            }

            const errors: ValidationError[] = [];
            if (!acc.ok) {
                errors.push(...acc.errors);
            }
            if (!transformedKey.ok) {
                errors.push(...transformedKey.errors);
            }
            if (!transformedValue.ok) {
                errors.push(...transformedValue.errors);
            }

            return {
                ok: false,
                errors,
            };
        },
        { ok: true, value: {} as Record<TransformedKey, TransformedValue> }
    );
}

```

# src/core/schemas/builders/record/index.ts

```typescript
export { record } from "./record";
export type { BaseRecordSchema, RecordSchema } from "./types";

```

# src/core/schemas/builders/schema-utils/ParseError.ts

```typescript
import { ValidationError } from "../../Schema";
import { stringifyValidationError } from "./stringifyValidationErrors";

export class ParseError extends Error {
    constructor(public readonly errors: ValidationError[]) {
        super(errors.map(stringifyValidationError).join("; "));
        Object.setPrototypeOf(this, ParseError.prototype);
    }
}

```

# src/core/schemas/builders/schema-utils/JsonError.ts

```typescript
import { ValidationError } from "../../Schema";
import { stringifyValidationError } from "./stringifyValidationErrors";

export class JsonError extends Error {
    constructor(public readonly errors: ValidationError[]) {
        super(errors.map(stringifyValidationError).join("; "));
        Object.setPrototypeOf(this, JsonError.prototype);
    }
}

```

# src/core/schemas/builders/schema-utils/getSchemaUtils.ts

```typescript
import { BaseSchema, Schema, SchemaOptions, SchemaType } from "../../Schema";
import { JsonError } from "./JsonError";
import { ParseError } from "./ParseError";

export interface SchemaUtils<Raw, Parsed> {
    optional: () => Schema<Raw | null | undefined, Parsed | undefined>;
    transform: <Transformed>(transformer: SchemaTransformer<Parsed, Transformed>) => Schema<Raw, Transformed>;
    parseOrThrow: (raw: unknown, opts?: SchemaOptions) => Parsed;
    jsonOrThrow: (raw: unknown, opts?: SchemaOptions) => Raw;
}

export interface SchemaTransformer<Parsed, Transformed> {
    transform: (parsed: Parsed) => Transformed;
    untransform: (transformed: any) => Parsed;
}

export function getSchemaUtils<Raw, Parsed>(schema: BaseSchema<Raw, Parsed>): SchemaUtils<Raw, Parsed> {
    return {
        optional: () => optional(schema),
        transform: (transformer) => transform(schema, transformer),
        parseOrThrow: (raw, opts) => {
            const parsed = schema.parse(raw, opts);
            if (parsed.ok) {
                return parsed.value;
            }
            throw new ParseError(parsed.errors);
        },
        jsonOrThrow: (parsed, opts) => {
            const raw = schema.json(parsed, opts);
            if (raw.ok) {
                return raw.value;
            }
            throw new JsonError(raw.errors);
        },
    };
}

/**
 * schema utils are defined in one file to resolve issues with circular imports
 */

export function optional<Raw, Parsed>(
    schema: BaseSchema<Raw, Parsed>
): Schema<Raw | null | undefined, Parsed | undefined> {
    const baseSchema: BaseSchema<Raw | null | undefined, Parsed | undefined> = {
        parse: (raw, opts) => {
            if (raw == null) {
                return {
                    ok: true,
                    value: undefined,
                };
            }
            return schema.parse(raw, opts);
        },
        json: (parsed, opts) => {
            if (opts?.omitUndefined && parsed === undefined) {
                return {
                    ok: true,
                    value: undefined,
                };
            }
            if (parsed == null) {
                return {
                    ok: true,
                    value: null,
                };
            }
            return schema.json(parsed, opts);
        },
        getType: () => SchemaType.OPTIONAL,
    };

    return {
        ...baseSchema,
        ...getSchemaUtils(baseSchema),
    };
}

export function transform<Raw, Parsed, Transformed>(
    schema: BaseSchema<Raw, Parsed>,
    transformer: SchemaTransformer<Parsed, Transformed>
): Schema<Raw, Transformed> {
    const baseSchema: BaseSchema<Raw, Transformed> = {
        parse: (raw, opts) => {
            const parsed = schema.parse(raw, opts);
            if (!parsed.ok) {
                return parsed;
            }
            return {
                ok: true,
                value: transformer.transform(parsed.value),
            };
        },
        json: (transformed, opts) => {
            const parsed = transformer.untransform(transformed);
            return schema.json(parsed, opts);
        },
        getType: () => schema.getType(),
    };

    return {
        ...baseSchema,
        ...getSchemaUtils(baseSchema),
    };
}

```

# src/core/schemas/builders/schema-utils/index.ts

```typescript
export { getSchemaUtils, optional, transform } from "./getSchemaUtils";
export type { SchemaUtils } from "./getSchemaUtils";
export { JsonError } from "./JsonError";
export { ParseError } from "./ParseError";

```

# src/core/schemas/builders/schema-utils/stringifyValidationErrors.ts

```typescript
import { ValidationError } from "../../Schema";

export function stringifyValidationError(error: ValidationError): string {
    if (error.path.length === 0) {
        return error.message;
    }
    return `${error.path.join(" -> ")}: ${error.message}`;
}

```

# src/core/schemas/builders/object/types.ts

```typescript
import { BaseSchema, inferParsed, inferRaw, Schema } from "../../Schema";
import { addQuestionMarksToNullableProperties } from "../../utils/addQuestionMarksToNullableProperties";
import { ObjectLikeUtils } from "../object-like";
import { SchemaUtils } from "../schema-utils";
import { Property } from "./property";

export type ObjectSchema<Raw, Parsed> = BaseObjectSchema<Raw, Parsed> &
    ObjectLikeUtils<Raw, Parsed> &
    ObjectUtils<Raw, Parsed> &
    SchemaUtils<Raw, Parsed>;

export interface BaseObjectSchema<Raw, Parsed> extends BaseSchema<Raw, Parsed> {
    _getRawProperties: () => (keyof Raw)[];
    _getParsedProperties: () => (keyof Parsed)[];
}

export interface ObjectUtils<Raw, Parsed> {
    extend: <RawExtension, ParsedExtension>(
        schemas: ObjectSchema<RawExtension, ParsedExtension>
    ) => ObjectSchema<Raw & RawExtension, Parsed & ParsedExtension>;
}

export type inferRawObject<O extends ObjectSchema<any, any>> = O extends ObjectSchema<infer Raw, any> ? Raw : never;

export type inferParsedObject<O extends ObjectSchema<any, any>> = O extends ObjectSchema<any, infer Parsed>
    ? Parsed
    : never;

export type inferObjectSchemaFromPropertySchemas<T extends PropertySchemas<keyof T>> = ObjectSchema<
    inferRawObjectFromPropertySchemas<T>,
    inferParsedObjectFromPropertySchemas<T>
>;

export type inferRawObjectFromPropertySchemas<T extends PropertySchemas<keyof T>> =
    addQuestionMarksToNullableProperties<{
        [ParsedKey in keyof T as inferRawKey<ParsedKey, T[ParsedKey]>]: inferRawPropertySchema<T[ParsedKey]>;
    }>;

export type inferParsedObjectFromPropertySchemas<T extends PropertySchemas<keyof T>> =
    addQuestionMarksToNullableProperties<{
        [K in keyof T]: inferParsedPropertySchema<T[K]>;
    }>;

export type PropertySchemas<ParsedKeys extends string | number | symbol> = Record<
    ParsedKeys,
    Property<any, any, any> | Schema<any, any>
>;

export type inferRawPropertySchema<P extends Property<any, any, any> | Schema<any, any>> = P extends Property<
    any,
    infer Raw,
    any
>
    ? Raw
    : P extends Schema<any, any>
    ? inferRaw<P>
    : never;

export type inferParsedPropertySchema<P extends Property<any, any, any> | Schema<any, any>> = P extends Property<
    any,
    any,
    infer Parsed
>
    ? Parsed
    : P extends Schema<any, any>
    ? inferParsed<P>
    : never;

export type inferRawKey<
    ParsedKey extends string | number | symbol,
    P extends Property<any, any, any> | Schema<any, any>
> = P extends Property<infer Raw, any, any> ? Raw : ParsedKey;

```

# src/core/schemas/builders/object/objectWithoutOptionalProperties.ts

```typescript
import { object } from "./object";
import { inferParsedPropertySchema, inferRawObjectFromPropertySchemas, ObjectSchema, PropertySchemas } from "./types";

export function objectWithoutOptionalProperties<ParsedKeys extends string, T extends PropertySchemas<ParsedKeys>>(
    schemas: T
): inferObjectWithoutOptionalPropertiesSchemaFromPropertySchemas<T> {
    return object(schemas) as unknown as inferObjectWithoutOptionalPropertiesSchemaFromPropertySchemas<T>;
}

export type inferObjectWithoutOptionalPropertiesSchemaFromPropertySchemas<T extends PropertySchemas<keyof T>> =
    ObjectSchema<
        inferRawObjectFromPropertySchemas<T>,
        inferParsedObjectWithoutOptionalPropertiesFromPropertySchemas<T>
    >;

export type inferParsedObjectWithoutOptionalPropertiesFromPropertySchemas<T extends PropertySchemas<keyof T>> = {
    [K in keyof T]: inferParsedPropertySchema<T[K]>;
};

```

# src/core/schemas/builders/object/object.ts

```typescript
import { MaybeValid, Schema, SchemaType, ValidationError } from "../../Schema";
import { entries } from "../../utils/entries";
import { filterObject } from "../../utils/filterObject";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";
import { isPlainObject } from "../../utils/isPlainObject";
import { keys } from "../../utils/keys";
import { maybeSkipValidation } from "../../utils/maybeSkipValidation";
import { partition } from "../../utils/partition";
import { getObjectLikeUtils } from "../object-like";
import { getSchemaUtils } from "../schema-utils";
import { isProperty } from "./property";
import {
    BaseObjectSchema,
    inferObjectSchemaFromPropertySchemas,
    inferParsedObjectFromPropertySchemas,
    inferRawObjectFromPropertySchemas,
    ObjectSchema,
    ObjectUtils,
    PropertySchemas,
} from "./types";

interface ObjectPropertyWithRawKey {
    rawKey: string;
    parsedKey: string;
    valueSchema: Schema<any, any>;
}

export function object<ParsedKeys extends string, T extends PropertySchemas<ParsedKeys>>(
    schemas: T
): inferObjectSchemaFromPropertySchemas<T> {
    const baseSchema: BaseObjectSchema<
        inferRawObjectFromPropertySchemas<T>,
        inferParsedObjectFromPropertySchemas<T>
    > = {
        _getRawProperties: () =>
            Object.entries(schemas).map(([parsedKey, propertySchema]) =>
                isProperty(propertySchema) ? propertySchema.rawKey : parsedKey
            ) as unknown as (keyof inferRawObjectFromPropertySchemas<T>)[],
        _getParsedProperties: () => keys(schemas) as unknown as (keyof inferParsedObjectFromPropertySchemas<T>)[],

        parse: (raw, opts) => {
            const rawKeyToProperty: Record<string, ObjectPropertyWithRawKey> = {};
            const requiredKeys: string[] = [];

            for (const [parsedKey, schemaOrObjectProperty] of entries(schemas)) {
                const rawKey = isProperty(schemaOrObjectProperty) ? schemaOrObjectProperty.rawKey : parsedKey;
                const valueSchema: Schema<any, any> = isProperty(schemaOrObjectProperty)
                    ? schemaOrObjectProperty.valueSchema
                    : schemaOrObjectProperty;

                const property: ObjectPropertyWithRawKey = {
                    rawKey,
                    parsedKey: parsedKey as string,
                    valueSchema,
                };

                rawKeyToProperty[rawKey] = property;

                if (isSchemaRequired(valueSchema)) {
                    requiredKeys.push(rawKey);
                }
            }

            return validateAndTransformObject({
                value: raw,
                requiredKeys,
                getProperty: (rawKey) => {
                    const property = rawKeyToProperty[rawKey];
                    if (property == null) {
                        return undefined;
                    }
                    return {
                        transformedKey: property.parsedKey,
                        transform: (propertyValue) =>
                            property.valueSchema.parse(propertyValue, {
                                ...opts,
                                breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), rawKey],
                            }),
                    };
                },
                unrecognizedObjectKeys: opts?.unrecognizedObjectKeys,
                skipValidation: opts?.skipValidation,
                breadcrumbsPrefix: opts?.breadcrumbsPrefix,
                omitUndefined: opts?.omitUndefined,
            });
        },

        json: (parsed, opts) => {
            const requiredKeys: string[] = [];

            for (const [parsedKey, schemaOrObjectProperty] of entries(schemas)) {
                const valueSchema: Schema<any, any> = isProperty(schemaOrObjectProperty)
                    ? schemaOrObjectProperty.valueSchema
                    : schemaOrObjectProperty;

                if (isSchemaRequired(valueSchema)) {
                    requiredKeys.push(parsedKey as string);
                }
            }

            return validateAndTransformObject({
                value: parsed,
                requiredKeys,
                getProperty: (
                    parsedKey
                ): { transformedKey: string; transform: (propertyValue: unknown) => MaybeValid<any> } | undefined => {
                    const property = schemas[parsedKey as keyof T];

                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                    if (property == null) {
                        return undefined;
                    }

                    if (isProperty(property)) {
                        return {
                            transformedKey: property.rawKey,
                            transform: (propertyValue) =>
                                property.valueSchema.json(propertyValue, {
                                    ...opts,
                                    breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), parsedKey],
                                }),
                        };
                    } else {
                        return {
                            transformedKey: parsedKey,
                            transform: (propertyValue) =>
                                property.json(propertyValue, {
                                    ...opts,
                                    breadcrumbsPrefix: [...(opts?.breadcrumbsPrefix ?? []), parsedKey],
                                }),
                        };
                    }
                },
                unrecognizedObjectKeys: opts?.unrecognizedObjectKeys,
                skipValidation: opts?.skipValidation,
                breadcrumbsPrefix: opts?.breadcrumbsPrefix,
                omitUndefined: opts?.omitUndefined,
            });
        },

        getType: () => SchemaType.OBJECT,
    };

    return {
        ...maybeSkipValidation(baseSchema),
        ...getSchemaUtils(baseSchema),
        ...getObjectLikeUtils(baseSchema),
        ...getObjectUtils(baseSchema),
    };
}

function validateAndTransformObject<Transformed>({
    value,
    requiredKeys,
    getProperty,
    unrecognizedObjectKeys = "fail",
    skipValidation = false,
    breadcrumbsPrefix = [],
}: {
    value: unknown;
    requiredKeys: string[];
    getProperty: (
        preTransformedKey: string
    ) => { transformedKey: string; transform: (propertyValue: unknown) => MaybeValid<any> } | undefined;
    unrecognizedObjectKeys: "fail" | "passthrough" | "strip" | undefined;
    skipValidation: boolean | undefined;
    breadcrumbsPrefix: string[] | undefined;
    omitUndefined: boolean | undefined;
}): MaybeValid<Transformed> {
    if (!isPlainObject(value)) {
        return {
            ok: false,
            errors: [
                {
                    path: breadcrumbsPrefix,
                    message: getErrorMessageForIncorrectType(value, "object"),
                },
            ],
        };
    }

    const missingRequiredKeys = new Set(requiredKeys);
    const errors: ValidationError[] = [];
    const transformed: Record<string | number | symbol, any> = {};

    for (const [preTransformedKey, preTransformedItemValue] of Object.entries(value)) {
        const property = getProperty(preTransformedKey);

        if (property != null) {
            missingRequiredKeys.delete(preTransformedKey);

            const value = property.transform(preTransformedItemValue);
            if (value.ok) {
                transformed[property.transformedKey] = value.value;
            } else {
                transformed[preTransformedKey] = preTransformedItemValue;
                errors.push(...value.errors);
            }
        } else {
            switch (unrecognizedObjectKeys) {
                case "fail":
                    errors.push({
                        path: [...breadcrumbsPrefix, preTransformedKey],
                        message: `Unexpected key "${preTransformedKey}"`,
                    });
                    break;
                case "strip":
                    break;
                case "passthrough":
                    transformed[preTransformedKey] = preTransformedItemValue;
                    break;
            }
        }
    }

    errors.push(
        ...requiredKeys
            .filter((key) => missingRequiredKeys.has(key))
            .map((key) => ({
                path: breadcrumbsPrefix,
                message: `Missing required key "${key}"`,
            }))
    );

    if (errors.length === 0 || skipValidation) {
        return {
            ok: true,
            value: transformed as Transformed,
        };
    } else {
        return {
            ok: false,
            errors,
        };
    }
}

export function getObjectUtils<Raw, Parsed>(schema: BaseObjectSchema<Raw, Parsed>): ObjectUtils<Raw, Parsed> {
    return {
        extend: <RawExtension, ParsedExtension>(extension: ObjectSchema<RawExtension, ParsedExtension>) => {
            const baseSchema: BaseObjectSchema<Raw & RawExtension, Parsed & ParsedExtension> = {
                _getParsedProperties: () => [...schema._getParsedProperties(), ...extension._getParsedProperties()],
                _getRawProperties: () => [...schema._getRawProperties(), ...extension._getRawProperties()],
                parse: (raw, opts) => {
                    return validateAndTransformExtendedObject({
                        extensionKeys: extension._getRawProperties(),
                        value: raw,
                        transformBase: (rawBase) => schema.parse(rawBase, opts),
                        transformExtension: (rawExtension) => extension.parse(rawExtension, opts),
                    });
                },
                json: (parsed, opts) => {
                    return validateAndTransformExtendedObject({
                        extensionKeys: extension._getParsedProperties(),
                        value: parsed,
                        transformBase: (parsedBase) => schema.json(parsedBase, opts),
                        transformExtension: (parsedExtension) => extension.json(parsedExtension, opts),
                    });
                },
                getType: () => SchemaType.OBJECT,
            };

            return {
                ...baseSchema,
                ...getSchemaUtils(baseSchema),
                ...getObjectLikeUtils(baseSchema),
                ...getObjectUtils(baseSchema),
            };
        },
    };
}

function validateAndTransformExtendedObject<PreTransformedExtension, TransformedBase, TransformedExtension>({
    extensionKeys,
    value,
    transformBase,
    transformExtension,
}: {
    extensionKeys: (keyof PreTransformedExtension)[];
    value: unknown;
    transformBase: (value: unknown) => MaybeValid<TransformedBase>;
    transformExtension: (value: unknown) => MaybeValid<TransformedExtension>;
}): MaybeValid<TransformedBase & TransformedExtension> {
    const extensionPropertiesSet = new Set(extensionKeys);
    const [extensionProperties, baseProperties] = partition(keys(value), (key) =>
        extensionPropertiesSet.has(key as keyof PreTransformedExtension)
    );

    const transformedBase = transformBase(filterObject(value, baseProperties));
    const transformedExtension = transformExtension(filterObject(value, extensionProperties));

    if (transformedBase.ok && transformedExtension.ok) {
        return {
            ok: true,
            value: {
                ...transformedBase.value,
                ...transformedExtension.value,
            },
        };
    } else {
        return {
            ok: false,
            errors: [
                ...(transformedBase.ok ? [] : transformedBase.errors),
                ...(transformedExtension.ok ? [] : transformedExtension.errors),
            ],
        };
    }
}

function isSchemaRequired(schema: Schema<any, any>): boolean {
    return !isSchemaOptional(schema);
}

function isSchemaOptional(schema: Schema<any, any>): boolean {
    switch (schema.getType()) {
        case SchemaType.ANY:
        case SchemaType.UNKNOWN:
        case SchemaType.OPTIONAL:
            return true;
        default:
            return false;
    }
}

```

# src/core/schemas/builders/object/property.ts

```typescript
import { Schema } from "../../Schema";

export function property<RawKey extends string, RawValue, ParsedValue>(
    rawKey: RawKey,
    valueSchema: Schema<RawValue, ParsedValue>
): Property<RawKey, RawValue, ParsedValue> {
    return {
        rawKey,
        valueSchema,
        isProperty: true,
    };
}

export interface Property<RawKey extends string, RawValue, ParsedValue> {
    rawKey: RawKey;
    valueSchema: Schema<RawValue, ParsedValue>;
    isProperty: true;
}

export function isProperty<O extends Property<any, any, any>>(maybeProperty: unknown): maybeProperty is O {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return (maybeProperty as O).isProperty;
}

```

# src/core/schemas/builders/object/index.ts

```typescript
export { getObjectUtils, object } from "./object";
export { objectWithoutOptionalProperties } from "./objectWithoutOptionalProperties";
export type {
    inferObjectWithoutOptionalPropertiesSchemaFromPropertySchemas,
    inferParsedObjectWithoutOptionalPropertiesFromPropertySchemas,
} from "./objectWithoutOptionalProperties";
export { isProperty, property } from "./property";
export type { Property } from "./property";
export type {
    BaseObjectSchema,
    inferObjectSchemaFromPropertySchemas,
    inferParsedObject,
    inferParsedObjectFromPropertySchemas,
    inferParsedPropertySchema,
    inferRawKey,
    inferRawObject,
    inferRawObjectFromPropertySchemas,
    inferRawPropertySchema,
    ObjectSchema,
    ObjectUtils,
    PropertySchemas,
} from "./types";

```

# src/core/schemas/builders/date/date.ts

```typescript
import { BaseSchema, Schema, SchemaType } from "../../Schema";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";
import { maybeSkipValidation } from "../../utils/maybeSkipValidation";
import { getSchemaUtils } from "../schema-utils";

// https://stackoverflow.com/questions/12756159/regex-and-iso8601-formatted-datetime
const ISO_8601_REGEX =
    /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;

export function date(): Schema<string, Date> {
    const baseSchema: BaseSchema<string, Date> = {
        parse: (raw, { breadcrumbsPrefix = [] } = {}) => {
            if (typeof raw !== "string") {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: getErrorMessageForIncorrectType(raw, "string"),
                        },
                    ],
                };
            }
            if (!ISO_8601_REGEX.test(raw)) {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: getErrorMessageForIncorrectType(raw, "ISO 8601 date string"),
                        },
                    ],
                };
            }
            return {
                ok: true,
                value: new Date(raw),
            };
        },
        json: (date, { breadcrumbsPrefix = [] } = {}) => {
            if (date instanceof Date) {
                return {
                    ok: true,
                    value: date.toISOString(),
                };
            } else {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: getErrorMessageForIncorrectType(date, "Date object"),
                        },
                    ],
                };
            }
        },
        getType: () => SchemaType.DATE,
    };

    return {
        ...maybeSkipValidation(baseSchema),
        ...getSchemaUtils(baseSchema),
    };
}

```

# src/core/schemas/builders/date/index.ts

```typescript
export { date } from "./date";

```

# src/core/schemas/builders/set/index.ts

```typescript
export { set } from "./set";

```

# src/core/schemas/builders/set/set.ts

```typescript
import { BaseSchema, Schema, SchemaType } from "../../Schema";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";
import { maybeSkipValidation } from "../../utils/maybeSkipValidation";
import { list } from "../list";
import { getSchemaUtils } from "../schema-utils";

export function set<Raw, Parsed>(schema: Schema<Raw, Parsed>): Schema<Raw[], Set<Parsed>> {
    const listSchema = list(schema);
    const baseSchema: BaseSchema<Raw[], Set<Parsed>> = {
        parse: (raw, opts) => {
            const parsedList = listSchema.parse(raw, opts);
            if (parsedList.ok) {
                return {
                    ok: true,
                    value: new Set(parsedList.value),
                };
            } else {
                return parsedList;
            }
        },
        json: (parsed, opts) => {
            if (!(parsed instanceof Set)) {
                return {
                    ok: false,
                    errors: [
                        {
                            path: opts?.breadcrumbsPrefix ?? [],
                            message: getErrorMessageForIncorrectType(parsed, "Set"),
                        },
                    ],
                };
            }
            const jsonList = listSchema.json([...parsed], opts);
            return jsonList;
        },
        getType: () => SchemaType.SET,
    };

    return {
        ...maybeSkipValidation(baseSchema),
        ...getSchemaUtils(baseSchema),
    };
}

```

# src/core/schemas/builders/enum/enum.ts

```typescript
import { Schema, SchemaType } from "../../Schema";
import { createIdentitySchemaCreator } from "../../utils/createIdentitySchemaCreator";
import { getErrorMessageForIncorrectType } from "../../utils/getErrorMessageForIncorrectType";

export function enum_<U extends string, E extends U[]>(values: E): Schema<E[number], E[number]> {
    const validValues = new Set<string>(values);

    const schemaCreator = createIdentitySchemaCreator(
        SchemaType.ENUM,
        (value, { allowUnrecognizedEnumValues, breadcrumbsPrefix = [] } = {}) => {
            if (typeof value !== "string") {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: getErrorMessageForIncorrectType(value, "string"),
                        },
                    ],
                };
            }

            if (!validValues.has(value) && !allowUnrecognizedEnumValues) {
                return {
                    ok: false,
                    errors: [
                        {
                            path: breadcrumbsPrefix,
                            message: getErrorMessageForIncorrectType(value, "enum"),
                        },
                    ],
                };
            }

            return {
                ok: true,
                value: value as U,
            };
        }
    );

    return schemaCreator();
}

```

# src/core/schemas/builders/enum/index.ts

```typescript
export { enum_ } from "./enum";

```

# src/core/pagination/Pageable.ts

```typescript
import { Page } from "./Page";

export declare namespace Pageable {
    interface Args<Response, Item> {
        response: Response;
        hasNextPage: (response: Response) => boolean;
        getItems: (response: Response) => Item[];
        loadPage: (response: Response) => Promise<Response>;
    }
}

export class Pageable<R, T> extends Page<T> {
    constructor(args: Pageable.Args<R, T>) {
        super(args as any);
    }
}

```

# src/core/pagination/Page.ts

```typescript
/**
 * A page of results from a paginated API.
 *
 * @template T The type of the items in the page.
 */
export class Page<T> implements AsyncIterable<T> {
    public data: T[];

    private response: unknown;
    private _hasNextPage: (response: unknown) => boolean;
    private getItems: (response: unknown) => T[];
    private loadNextPage: (response: unknown) => Promise<unknown>;

    constructor({
        response,
        hasNextPage,
        getItems,
        loadPage,
    }: {
        response: unknown;
        hasNextPage: (response: unknown) => boolean;
        getItems: (response: unknown) => T[];
        loadPage: (response: unknown) => Promise<any>;
    }) {
        this.response = response;
        this.data = getItems(response);
        this._hasNextPage = hasNextPage;
        this.getItems = getItems;
        this.loadNextPage = loadPage;
    }

    /**
     * Retrieves the next page
     * @returns this
     */
    public async getNextPage(): Promise<this> {
        this.response = await this.loadNextPage(this.response);
        this.data = this.getItems(this.response);
        return this;
    }

    /**
     * @returns whether there is a next page to load
     */
    public hasNextPage(): boolean {
        return this._hasNextPage(this.response);
    }

    private async *iterMessages(): AsyncGenerator<T, void> {
        for (const item of this.data) {
            yield item;
        }

        while (this.hasNextPage()) {
            await this.getNextPage();
            for (const item of this.data) {
                yield item;
            }
        }
    }

    async *[Symbol.asyncIterator](): AsyncIterator<T, void, any> {
        for await (const message of this.iterMessages()) {
            yield message;
        }
    }
}

```

# src/core/pagination/index.ts

```typescript
export { Page } from "./Page";
export { Pageable } from "./Pageable";

```

# src/api/index.ts

```typescript
export * from "./resources";

```

# src/api/resources/index.ts

```typescript
export * as expressionMeasurement from "./expressionMeasurement";
export * as empathicVoice from "./empathicVoice";

```

# src/api/resources/expressionMeasurement/index.ts

```typescript
export * from "./resources";
export * from "./client";

```

# src/api/resources/expressionMeasurement/client/Client.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Batch } from "../resources/batch/client/Client";

export declare namespace ExpressionMeasurement {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class ExpressionMeasurement {
    constructor(protected readonly _options: ExpressionMeasurement.Options = {}) {}

    protected _batch: Batch | undefined;

    public get batch(): Batch {
        return (this._batch ??= new Batch(this._options));
    }
}

```

# src/api/resources/expressionMeasurement/client/index.ts

```typescript
export {};

```

# src/api/resources/expressionMeasurement/resources/index.ts

```typescript
export * as batch from "./batch";
export * as stream from "./stream";

```

# src/api/resources/expressionMeasurement/resources/batch/index.ts

```typescript
export * from "./types";
export * from "./client";

```

# src/api/resources/expressionMeasurement/resources/batch/client/Client.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";
import * as stream from "stream";
import * as fs from "fs";
import { Blob } from "buffer";

export declare namespace Batch {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Batch {
    constructor(protected readonly _options: Batch.Options = {}) {}

    /**
     * Sort and filter jobs.
     *
     * @param {Hume.expressionMeasurement.batch.BatchListJobsRequest} request
     * @param {Batch.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expressionMeasurement.batch.listJobs()
     */
    public async listJobs(
        request: Hume.expressionMeasurement.batch.BatchListJobsRequest = {},
        requestOptions?: Batch.RequestOptions
    ): Promise<Hume.expressionMeasurement.batch.UnionJob[]> {
        const { limit, status, when, timestampMs, sortBy, direction } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (status != null) {
            if (Array.isArray(status)) {
                _queryParams["status"] = status.map((item) => item);
            } else {
                _queryParams["status"] = status;
            }
        }

        if (when != null) {
            _queryParams["when"] = when;
        }

        if (timestampMs != null) {
            _queryParams["timestamp_ms"] = timestampMs.toString();
        }

        if (sortBy != null) {
            _queryParams["sort_by"] = sortBy;
        }

        if (direction != null) {
            _queryParams["direction"] = direction;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/batch/jobs"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.expressionMeasurement.batch.listJobs.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Start a new measurement inference job.
     *
     * @param {Hume.expressionMeasurement.batch.InferenceBaseRequest} request
     * @param {Batch.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expressionMeasurement.batch.startInferenceJob({
     *         urls: ["https://hume-tutorials.s3.amazonaws.com/faces.zip"],
     *         notify: true
     *     })
     */
    public async startInferenceJob(
        request: Hume.expressionMeasurement.batch.InferenceBaseRequest,
        requestOptions?: Batch.RequestOptions
    ): Promise<Hume.expressionMeasurement.batch.JobId> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/batch/jobs"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.expressionMeasurement.batch.InferenceBaseRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.expressionMeasurement.batch.JobId.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the request details and state of a given job.
     *
     * @param {string} id - The unique identifier for the job.
     * @param {Batch.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expressionMeasurement.batch.getJobDetails("job_id")
     */
    public async getJobDetails(
        id: string,
        requestOptions?: Batch.RequestOptions
    ): Promise<Hume.expressionMeasurement.batch.UnionJob> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/batch/jobs/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.expressionMeasurement.batch.UnionJob.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the JSON predictions of a completed inference job.
     *
     * @param {string} id - The unique identifier for the job.
     * @param {Batch.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expressionMeasurement.batch.getJobPredictions("job_id")
     */
    public async getJobPredictions(
        id: string,
        requestOptions?: Batch.RequestOptions
    ): Promise<Hume.expressionMeasurement.batch.UnionPredictResult[]> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/batch/jobs/${encodeURIComponent(id)}/predictions`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.expressionMeasurement.batch.getJobPredictions.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the artifacts ZIP of a completed inference job.
     */
    public async getJobArtifacts(id: string, requestOptions?: Batch.RequestOptions): Promise<stream.Readable> {
        const _response = await (this._options.fetcher ?? core.fetcher)<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/batch/jobs/${encodeURIComponent(id)}/artifacts`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Start a new batch inference job.
     *
     * @param {File[] | fs.ReadStream[] | Blob[]} file
     * @param {Hume.expressionMeasurement.batch.BatchStartInferenceJobFromLocalFileRequest} request
     * @param {Batch.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expressionMeasurement.batch.startInferenceJobFromLocalFile([fs.createReadStream("/path/to/your/file")], {})
     */
    public async startInferenceJobFromLocalFile(
        file: File[] | fs.ReadStream[] | Blob[],
        request: Hume.expressionMeasurement.batch.BatchStartInferenceJobFromLocalFileRequest,
        requestOptions?: Batch.RequestOptions
    ): Promise<Hume.expressionMeasurement.batch.JobId> {
        const _request = await core.newFormData();
        if (request.json != null) {
            await _request.append("json", JSON.stringify(request.json));
        }

        for (const _file of file) {
            await _request.append("file", _file);
        }

        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/batch/jobs"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ..._maybeEncodedRequest.headers,
            },
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.expressionMeasurement.batch.JobId.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-Hume-Api-Key": apiKeyValue };
    }
}

```

# src/api/resources/expressionMeasurement/resources/batch/client/index.ts

```typescript
export * from "./requests";

```

# src/api/resources/expressionMeasurement/resources/batch/client/requests/BatchStartInferenceJobFromLocalFileRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface BatchStartInferenceJobFromLocalFileRequest {
    /** Stringified JSON object containing the inference job configuration. */
    json?: Hume.expressionMeasurement.batch.InferenceBaseRequest;
}

```

# src/api/resources/expressionMeasurement/resources/batch/client/requests/BatchListJobsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface BatchListJobsRequest {
    /**
     * The maximum number of jobs to include in the response.
     */
    limit?: number;
    /**
     * Include only jobs of this status in the response. There are four possible statuses:
     *
     * - `QUEUED`: The job has been received and is waiting to be processed.
     *
     * - `IN_PROGRESS`: The job is currently being processed.
     *
     * - `COMPLETED`: The job has finished processing.
     *
     * - `FAILED`: The job encountered an error and could not be completed successfully.
     */
    status?: Hume.expressionMeasurement.batch.Status | Hume.expressionMeasurement.batch.Status[];
    /**
     * Specify whether to include jobs created before or after a given `timestamp_ms`.
     */
    when?: Hume.expressionMeasurement.batch.When;
    /**
     * Provide a timestamp in milliseconds to filter jobs.
     *
     * When combined with the `when` parameter, you can filter jobs before or after the given timestamp. Defaults to the current Unix timestamp if one is not provided.
     */
    timestampMs?: number;
    /**
     * Specify which timestamp to sort the jobs by.
     *
     * - `created`: Sort jobs by the time of creation, indicated by `created_timestamp_ms`.
     *
     * - `started`: Sort jobs by the time processing started, indicated by `started_timestamp_ms`.
     *
     * - `ended`: Sort jobs by the time processing ended, indicated by `ended_timestamp_ms`.
     */
    sortBy?: Hume.expressionMeasurement.batch.SortBy;
    /**
     * Specify the order in which to sort the jobs. Defaults to descending order.
     *
     * - `asc`: Sort in ascending order (chronological, with the oldest records first).
     *
     * - `desc`: Sort in descending order (reverse-chronological, with the newest records first).
     */
    direction?: Hume.expressionMeasurement.batch.Direction;
}

```

# src/api/resources/expressionMeasurement/resources/batch/client/requests/index.ts

```typescript
export { type BatchListJobsRequest } from "./BatchListJobsRequest";
export { type BatchStartInferenceJobFromLocalFileRequest } from "./BatchStartInferenceJobFromLocalFileRequest";

```

# src/api/resources/expressionMeasurement/resources/batch/types/CompletedTraining.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface CompletedTraining {
    /** When this job was created (Unix timestamp in milliseconds). */
    createdTimestampMs: number;
    /** When this job started (Unix timestamp in milliseconds). */
    startedTimestampMs: number;
    /** When this job ended (Unix timestamp in milliseconds). */
    endedTimestampMs: number;
    customModel: Hume.expressionMeasurement.batch.TrainingCustomModel;
    alternatives?: Record<string, Hume.expressionMeasurement.batch.TrainingCustomModel>;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateEmbeddingGeneration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type StateEmbeddingGeneration =
    | Hume.expressionMeasurement.batch.StateEmbeddingGeneration.Queued
    | Hume.expressionMeasurement.batch.StateEmbeddingGeneration.InProgress
    | Hume.expressionMeasurement.batch.StateEmbeddingGeneration.Completed
    | Hume.expressionMeasurement.batch.StateEmbeddingGeneration.Failed;

export declare namespace StateEmbeddingGeneration {
    interface Queued extends Hume.expressionMeasurement.batch.StateEmbeddingGenerationQueued {
        status: "QUEUED";
    }

    interface InProgress extends Hume.expressionMeasurement.batch.StateEmbeddingGenerationInProgress {
        status: "IN_PROGRESS";
    }

    interface Completed extends Hume.expressionMeasurement.batch.StateEmbeddingGenerationCompletedEmbeddingGeneration {
        status: "COMPLETED";
    }

    interface Failed extends Hume.expressionMeasurement.batch.StateEmbeddingGenerationFailed {
        status: "FAILED";
    }
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/InferenceResults.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface InferenceResults {
    predictions: Hume.expressionMeasurement.batch.InferencePrediction[];
    errors: Hume.expressionMeasurement.batch.Error_[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Classification.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Classification = Record<string, unknown>;

```

# src/api/resources/expressionMeasurement/resources/batch/types/FacsScore.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface FacsScore {
    /** Name of the FACS 2.0 feature being expressed. */
    name: string;
    /** Embedding value for the FACS 2.0 feature being expressed. */
    score: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/ValidationArgs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface ValidationArgs {
    positiveLabel?: Hume.expressionMeasurement.batch.Target;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/UnionPredictResult.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type UnionPredictResult = Hume.expressionMeasurement.batch.InferenceSourcePredictResult;

```

# src/api/resources/expressionMeasurement/resources/batch/types/FacePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface FacePrediction {
    /** Frame number */
    frame: number;
    /** Time in seconds when face detection occurred. */
    time: number;
    /** The predicted probability that a detected face was actually a face. */
    prob: number;
    box: Hume.expressionMeasurement.batch.BoundingBox;
    /** A high-dimensional embedding in emotion space. */
    emotions: Hume.expressionMeasurement.batch.EmotionScore[];
    /** FACS 2.0 features and their scores. */
    facs?: Hume.expressionMeasurement.batch.FacsScore[];
    /** Modality-specific descriptive features and their scores. */
    descriptions?: Hume.expressionMeasurement.batch.DescriptionsScore[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsLanguagePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface GroupedPredictionsLanguagePrediction {
    /** An automatically generated label to identify individuals in your media file. Will be `unknown` if you have chosen to disable identification, or if the model is unable to distinguish between individuals. */
    id: string;
    predictions: Hume.expressionMeasurement.batch.LanguagePrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Transcription.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Transcription-related configuration options.
 *
 * To disable transcription, explicitly set this field to `null`.
 */
export interface Transcription {
    /**
     * By default, we use an automated language detection method for our Speech Prosody, Language, and NER models. However, if you know what language is being spoken in your media samples, you can specify it via its BCP-47 tag and potentially obtain more accurate results.
     *
     * You can specify any of the following languages:
     *
     * - Chinese: `zh`
     * - Danish: `da`
     * - Dutch: `nl`
     * - English: `en`
     * - English (Australia): `en-AU`
     * - English (India): `en-IN`
     * - English (New Zealand): `en-NZ`
     * - English (United Kingdom): `en-GB`
     * - French: `fr`
     * - French (Canada): `fr-CA`
     * - German: `de`
     * - Hindi: `hi`
     * - Hindi (Roman Script): `hi-Latn`
     * - Indonesian: `id`
     * - Italian: `it`
     * - Japanese: `ja`
     * - Korean: `ko`
     * - Norwegian: `no`
     * - Polish: `pl`
     * - Portuguese: `pt`
     * - Portuguese (Brazil): `pt-BR`
     * - Portuguese (Portugal): `pt-PT`
     * - Russian: `ru`
     * - Spanish: `es`
     * - Spanish (Latin America): `es-419`
     * - Swedish: `sv`
     * - Tamil: `ta`
     * - Turkish: `tr`
     * - Ukrainian: `uk`
     */
    language?: Hume.expressionMeasurement.batch.Bcp47Tag;
    /** Whether to return identifiers for speakers over time. If `true`, unique identifiers will be assigned to spoken words to differentiate different speakers. If `false`, all speakers will be tagged with an `unknown` ID. */
    identifySpeakers?: boolean;
    /** Transcript confidence threshold. Transcripts generated with a confidence less than this threshold will be considered invalid and not used as an input for model inference. */
    confidenceThreshold?: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsFacePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface GroupedPredictionsFacePrediction {
    /** An automatically generated label to identify individuals in your media file. Will be `unknown` if you have chosen to disable identification, or if the model is unable to distinguish between individuals. */
    id: string;
    predictions: Hume.expressionMeasurement.batch.FacePrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/TaskRegression.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TaskRegression {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/UnionJob.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type UnionJob = Hume.expressionMeasurement.batch.InferenceJob;

```

# src/api/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalNullFacePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface PredictionsOptionalNullFacePrediction {
    metadata?: Hume.expressionMeasurement.batch.Null;
    groupedPredictions: Hume.expressionMeasurement.batch.GroupedPredictionsFacePrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsBurstPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface GroupedPredictionsBurstPrediction {
    /** An automatically generated label to identify individuals in your media file. Will be `unknown` if you have chosen to disable identification, or if the model is unable to distinguish between individuals. */
    id: string;
    predictions: Hume.expressionMeasurement.batch.BurstPrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/SortBy.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type SortBy = "created" | "started" | "ended";

export const SortBy = {
    Created: "created",
    Started: "started",
    Ended: "ended",
} as const;

```

# src/api/resources/expressionMeasurement/resources/batch/types/Null.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * No associated metadata for this model. Value will be `null`.
 */
export type Null = Record<string, unknown>;

```

# src/api/resources/expressionMeasurement/resources/batch/types/ModelsPredictions.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface ModelsPredictions {
    face?: Hume.expressionMeasurement.batch.PredictionsOptionalNullFacePrediction;
    burst?: Hume.expressionMeasurement.batch.PredictionsOptionalNullBurstPrediction;
    prosody?: Hume.expressionMeasurement.batch.PredictionsOptionalTranscriptionMetadataProsodyPrediction;
    language?: Hume.expressionMeasurement.batch.PredictionsOptionalTranscriptionMetadataLanguagePrediction;
    ner?: Hume.expressionMeasurement.batch.PredictionsOptionalTranscriptionMetadataNerPrediction;
    facemesh?: Hume.expressionMeasurement.batch.PredictionsOptionalNullFacemeshPrediction;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/JobId.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface JobId {
    /** The ID of the started job. */
    jobId: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Regression.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Regression = Record<string, unknown>;

```

# src/api/resources/expressionMeasurement/resources/batch/types/CustomModelsInferenceJob.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface CustomModelsInferenceJob extends Hume.expressionMeasurement.batch.JobTlInference {
    type: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalTranscriptionMetadataLanguagePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface PredictionsOptionalTranscriptionMetadataLanguagePrediction {
    metadata?: Hume.expressionMeasurement.batch.TranscriptionMetadata;
    groupedPredictions: Hume.expressionMeasurement.batch.GroupedPredictionsLanguagePrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateTrainingCompletedTraining.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateTrainingCompletedTraining extends Hume.expressionMeasurement.batch.CompletedTraining {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/InProgressState.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface InProgressState extends Hume.expressionMeasurement.batch.InProgress {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/SentimentScore.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SentimentScore {
    /** Level of sentiment, ranging from `1` (negative) to `9` (positive) */
    name: string;
    /** Prediction for this level of sentiment */
    score: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Alternative.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Alternative = "language_only";

```

# src/api/resources/expressionMeasurement/resources/batch/types/SourceUrl.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface SourceUrl extends Hume.expressionMeasurement.batch.Url {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/EmbeddingGenerationBaseRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface EmbeddingGenerationBaseRequest {
    /** File ID and File URL pairs for an asset registry file */
    registryFileDetails?: Hume.expressionMeasurement.batch.RegistryFileDetail[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/EmbeddingGenerationJob.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface EmbeddingGenerationJob extends Hume.expressionMeasurement.batch.JobEmbeddingGeneration {
    type: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/EmotionScore.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface EmotionScore {
    /** Name of the emotion being expressed. */
    name: string;
    /** Embedding value for the emotion being expressed. */
    score: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Language.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * The Emotional Language model analyzes passages of text. This also supports audio and video files by transcribing and then directly analyzing the transcribed text.
 *
 * Recommended input filetypes: `.txt`, `.mp3`, `.wav`, `.mp4`
 */
export interface Language {
    granularity?: Hume.expressionMeasurement.batch.Granularity;
    sentiment?: Hume.expressionMeasurement.batch.Unconfigurable;
    toxicity?: Hume.expressionMeasurement.batch.Unconfigurable;
    /** Whether to return identifiers for speakers over time. If `true`, unique identifiers will be assigned to spoken words to differentiate different speakers. If `false`, all speakers will be tagged with an `unknown` ID. */
    identifySpeakers?: boolean;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalTranscriptionMetadataProsodyPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface PredictionsOptionalTranscriptionMetadataProsodyPrediction {
    metadata?: Hume.expressionMeasurement.batch.TranscriptionMetadata;
    groupedPredictions: Hume.expressionMeasurement.batch.GroupedPredictionsProsodyPrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/CustomModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type CustomModel =
    | Hume.expressionMeasurement.batch.CustomModelId
    | Hume.expressionMeasurement.batch.CustomModelVersionId;

```

# src/api/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsFacemeshPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface GroupedPredictionsFacemeshPrediction {
    /** An automatically generated label to identify individuals in your media file. Will be `unknown` if you have chosen to disable identification, or if the model is unable to distinguish between individuals. */
    id: string;
    predictions: Hume.expressionMeasurement.batch.FacemeshPrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/CustomModelPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CustomModelPrediction {
    output: Record<string, number>;
    error: string;
    taskType: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/When.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type When = "created_before" | "created_after";

export const When = {
    CreatedBefore: "created_before",
    CreatedAfter: "created_after",
} as const;

```

# src/api/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalTranscriptionMetadataNerPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface PredictionsOptionalTranscriptionMetadataNerPrediction {
    metadata?: Hume.expressionMeasurement.batch.TranscriptionMetadata;
    groupedPredictions: Hume.expressionMeasurement.batch.GroupedPredictionsNerPrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/CompletedTlInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CompletedTlInference {
    /** When this job was created (Unix timestamp in milliseconds). */
    createdTimestampMs: number;
    /** When this job started (Unix timestamp in milliseconds). */
    startedTimestampMs: number;
    /** When this job ended (Unix timestamp in milliseconds). */
    endedTimestampMs: number;
    /** The number of predictions that were generated by this job. */
    numPredictions: number;
    /** The number of errors that occurred while running this job. */
    numErrors: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/BoundingBox.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A bounding box around a face.
 */
export interface BoundingBox {
    /** x-coordinate of bounding box top left corner. */
    x: number;
    /** y-coordinate of bounding box top left corner. */
    y: number;
    /** Bounding box width. */
    w: number;
    /** Bounding box height. */
    h: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/TextSource.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TextSource = Record<string, unknown>;

```

# src/api/resources/expressionMeasurement/resources/batch/types/Face.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * The Facial Emotional Expression model analyzes human facial expressions in images and videos. Results will be provided per frame for video files.
 *
 * Recommended input file types: `.png`, `.jpeg`, `.mp4`
 */
export interface Face {
    /** Number of frames per second to process. Other frames will be omitted from the response. Set to `0` to process every frame. */
    fpsPred?: number;
    /** Face detection probability threshold. Faces detected with a probability less than this threshold will be omitted from the response. */
    probThreshold?: number;
    /** Whether to return identifiers for faces across frames. If `true`, unique identifiers will be assigned to face bounding boxes to differentiate different faces. If `false`, all faces will be tagged with an `unknown` ID. */
    identifyFaces?: boolean;
    /** Minimum bounding box side length in pixels to treat as a face. Faces detected with a bounding box side length in pixels less than this threshold will be omitted from the response. */
    minFaceSize?: number;
    facs?: Hume.expressionMeasurement.batch.Unconfigurable;
    descriptions?: Hume.expressionMeasurement.batch.Unconfigurable;
    /** Whether to extract and save the detected faces in the artifacts zip created by each job. */
    saveFaces?: boolean;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/TranscriptionMetadata.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Transcription metadata for your media file.
 */
export interface TranscriptionMetadata {
    /** Value between `0.0` and `1.0` indicating our transcription model's relative confidence in the transcription of your media file. */
    confidence: number;
    detectedLanguage?: Hume.expressionMeasurement.batch.Bcp47Tag;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Source.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type Source =
    | Hume.expressionMeasurement.batch.Source.Url
    | Hume.expressionMeasurement.batch.Source.File_
    | Hume.expressionMeasurement.batch.Source.Text;

export declare namespace Source {
    interface Url extends Hume.expressionMeasurement.batch.SourceUrl {
        type: "url";
    }

    interface File_ extends Hume.expressionMeasurement.batch.SourceFile {
        type: "file";
    }

    interface Text extends Hume.expressionMeasurement.batch.SourceTextSource {
        type: "text";
    }
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Error_.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Error_ {
    /** An error message. */
    message: string;
    /** A file path relative to the top level source URL or file. */
    file: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Tag.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Tag {
    key: string;
    value: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Status.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Status = "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "FAILED";

export const Status = {
    Queued: "QUEUED",
    InProgress: "IN_PROGRESS",
    Completed: "COMPLETED",
    Failed: "FAILED",
} as const;

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateEmbeddingGenerationCompletedEmbeddingGeneration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateEmbeddingGenerationCompletedEmbeddingGeneration
    extends Hume.expressionMeasurement.batch.CompletedEmbeddingGeneration {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Dataset.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type Dataset = Hume.expressionMeasurement.batch.DatasetId | Hume.expressionMeasurement.batch.DatasetVersionId;

```

# src/api/resources/expressionMeasurement/resources/batch/types/CompletedEmbeddingGeneration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CompletedEmbeddingGeneration {
    /** When this job was created (Unix timestamp in milliseconds). */
    createdTimestampMs: number;
    /** When this job started (Unix timestamp in milliseconds). */
    startedTimestampMs: number;
    /** When this job ended (Unix timestamp in milliseconds). */
    endedTimestampMs: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateTraining.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type StateTraining =
    | Hume.expressionMeasurement.batch.StateTraining.Queued
    | Hume.expressionMeasurement.batch.StateTraining.InProgress
    | Hume.expressionMeasurement.batch.StateTraining.Completed
    | Hume.expressionMeasurement.batch.StateTraining.Failed;

export declare namespace StateTraining {
    interface Queued extends Hume.expressionMeasurement.batch.StateTrainingQueued {
        status: "QUEUED";
    }

    interface InProgress extends Hume.expressionMeasurement.batch.StateTrainingInProgress {
        status: "IN_PROGRESS";
    }

    interface Completed extends Hume.expressionMeasurement.batch.StateTrainingCompletedTraining {
        status: "COMPLETED";
    }

    interface Failed extends Hume.expressionMeasurement.batch.StateTrainingFailed {
        status: "FAILED";
    }
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Prosody.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * The Speech Prosody model analyzes the intonation, stress, and rhythm of spoken word.
 *
 * Recommended input file types: `.wav`, `.mp3`, `.mp4`
 */
export interface Prosody {
    granularity?: Hume.expressionMeasurement.batch.Granularity;
    window?: Hume.expressionMeasurement.batch.Window;
    /** Whether to return identifiers for speakers over time. If `true`, unique identifiers will be assigned to spoken words to differentiate different speakers. If `false`, all speakers will be tagged with an `unknown` ID. */
    identifySpeakers?: boolean;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/TlInferenceSourcePredictResult.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface TlInferenceSourcePredictResult {
    source: Hume.expressionMeasurement.batch.Source;
    results?: Hume.expressionMeasurement.batch.TlInferenceResults;
    /** An error message. */
    error?: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Failed.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Failed {
    /** When this job was created (Unix timestamp in milliseconds). */
    createdTimestampMs: number;
    /** When this job started (Unix timestamp in milliseconds). */
    startedTimestampMs: number;
    /** When this job ended (Unix timestamp in milliseconds). */
    endedTimestampMs: number;
    /** An error message. */
    message: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/InferenceBaseRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface InferenceBaseRequest {
    /**
     * Specify the models to use for inference.
     *
     * If this field is not explicitly set, then all models will run by default.
     */
    models?: Hume.expressionMeasurement.batch.Models;
    transcription?: Hume.expressionMeasurement.batch.Transcription;
    /**
     * URLs to the media files to be processed. Each must be a valid public URL to a media file (see recommended input filetypes) or an archive (`.zip`, `.tar.gz`, `.tar.bz2`, `.tar.xz`) of media files.
     *
     * If you wish to supply more than 100 URLs, consider providing them as an archive (`.zip`, `.tar.gz`, `.tar.bz2`, `.tar.xz`).
     */
    urls?: string[];
    /** Text supplied directly to our Emotional Language and NER models for analysis. */
    text?: string[];
    /** If provided, a `POST` request will be made to the URL with the generated predictions on completion or the error message on failure. */
    callbackUrl?: string;
    /** Whether to send an email notification to the user upon job completion/failure. */
    notify?: boolean;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/LanguagePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface LanguagePrediction {
    /** A segment of text (like a word or a sentence). */
    text: string;
    position: Hume.expressionMeasurement.batch.PositionInterval;
    time?: Hume.expressionMeasurement.batch.TimeInterval;
    /** Value between `0.0` and `1.0` that indicates our transcription model's relative confidence in this text. */
    confidence?: number;
    /** Value between `0.0` and `1.0` that indicates our transcription model's relative confidence that this text was spoken by this speaker. */
    speakerConfidence?: number;
    /** A high-dimensional embedding in emotion space. */
    emotions: Hume.expressionMeasurement.batch.EmotionScore[];
    /**
     * Sentiment predictions returned as a distribution. This model predicts the probability that a given text could be interpreted as having each sentiment level from `1` (negative) to `9` (positive).
     *
     * Compared to returning one estimate of sentiment, this enables a more nuanced analysis of a text's meaning. For example, a text with very neutral sentiment would have an average rating of `5`. But also a text that could be interpreted as having very positive sentiment or very negative sentiment would also have an average rating of `5`. The average sentiment is less informative than the distribution over sentiment, so this API returns a value for each sentiment level.
     */
    sentiment?: Hume.expressionMeasurement.batch.SentimentScore[];
    /** Toxicity predictions returned as probabilities that the text can be classified into the following categories: `toxic`, `severe_toxic`, `obscene`, `threat`, `insult`, and `identity_hate`. */
    toxicity?: Hume.expressionMeasurement.batch.ToxicityScore[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateTrainingInProgress.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateTrainingInProgress extends Hume.expressionMeasurement.batch.InProgress {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Granularity.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The granularity at which to generate predictions. The `granularity` field is ignored if transcription is not enabled or if the `window` field has been set.
 *
 * - `word`: At the word level, our model provides a separate output for each word, offering the most granular insight into emotional expression during speech.
 *
 * - `sentence`: At the sentence level of granularity, we annotate the emotional tone of each spoken sentence with our Prosody and Emotional Language models.
 *
 * - `utterance`: Utterance-level granularity is between word- and sentence-level. It takes into account natural pauses or breaks in speech, providing more rapidly updated measures of emotional expression within a flowing conversation. For text inputs, utterance-level granularity will produce results identical to sentence-level granularity.
 *
 * - `conversational_turn`: Conversational turn-level granularity provides a distinct output for each change in speaker. It captures the full sequence of words and sentences spoken uninterrupted by each person. This approach provides a higher-level view of the emotional dynamics in a multi-participant dialogue. For text inputs, specifying conversational turn-level granularity for our Emotional Language model will produce results for the entire passage.
 */
export type Granularity = "word" | "sentence" | "utterance" | "conversational_turn";

export const Granularity = {
    Word: "word",
    Sentence: "sentence",
    Utterance: "utterance",
    ConversationalTurn: "conversational_turn",
} as const;

```

# src/api/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsProsodyPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface GroupedPredictionsProsodyPrediction {
    /** An automatically generated label to identify individuals in your media file. Will be `unknown` if you have chosen to disable identification, or if the model is unable to distinguish between individuals. */
    id: string;
    predictions: Hume.expressionMeasurement.batch.ProsodyPrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Type.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Type = "EMBEDDING_GENERATION" | "INFERENCE" | "TL_INFERENCE" | "TRAINING";

export const Type = {
    EmbeddingGeneration: "EMBEDDING_GENERATION",
    Inference: "INFERENCE",
    TlInference: "TL_INFERENCE",
    Training: "TRAINING",
} as const;

```

# src/api/resources/expressionMeasurement/resources/batch/types/Target.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Target = number | number | string;

```

# src/api/resources/expressionMeasurement/resources/batch/types/ToxicityScore.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ToxicityScore {
    /** Category of toxicity. */
    name: string;
    /** Prediction for this category of toxicity */
    score: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Models.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * The models used for inference.
 */
export interface Models {
    face?: Hume.expressionMeasurement.batch.Face;
    burst?: Hume.expressionMeasurement.batch.Unconfigurable;
    prosody?: Hume.expressionMeasurement.batch.Prosody;
    language?: Hume.expressionMeasurement.batch.Language;
    ner?: Hume.expressionMeasurement.batch.Ner;
    facemesh?: Hume.expressionMeasurement.batch.Unconfigurable;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/GroupedPredictionsNerPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface GroupedPredictionsNerPrediction {
    /** An automatically generated label to identify individuals in your media file. Will be `unknown` if you have chosen to disable identification, or if the model is unable to distinguish between individuals. */
    id: string;
    predictions: Hume.expressionMeasurement.batch.NerPrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/TlInferenceResults.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface TlInferenceResults {
    predictions: Hume.expressionMeasurement.batch.TlInferencePrediction[];
    errors: Hume.expressionMeasurement.batch.Error_[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/ProsodyPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface ProsodyPrediction {
    /** A segment of text (like a word or a sentence). */
    text?: string;
    time: Hume.expressionMeasurement.batch.TimeInterval;
    /** Value between `0.0` and `1.0` that indicates our transcription model's relative confidence in this text. */
    confidence?: number;
    /** Value between `0.0` and `1.0` that indicates our transcription model's relative confidence that this text was spoken by this speaker. */
    speakerConfidence?: number;
    /** A high-dimensional embedding in emotion space. */
    emotions: Hume.expressionMeasurement.batch.EmotionScore[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/FacemeshPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface FacemeshPrediction {
    /** A high-dimensional embedding in emotion space. */
    emotions: Hume.expressionMeasurement.batch.EmotionScore[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/TimeInterval.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A time range with a beginning and end, measured in seconds.
 */
export interface TimeInterval {
    /** Beginning of time range in seconds. */
    begin: number;
    /** End of time range in seconds. */
    end: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/JobEmbeddingGeneration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface JobEmbeddingGeneration {
    /** The ID associated with this job. */
    jobId: string;
    userId: string;
    request: Hume.expressionMeasurement.batch.EmbeddingGenerationBaseRequest;
    state: Hume.expressionMeasurement.batch.StateEmbeddingGeneration;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Direction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Direction = "asc" | "desc";

export const Direction = {
    Asc: "asc",
    Desc: "desc",
} as const;

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateTlInferenceCompletedTlInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateTlInferenceCompletedTlInference extends Hume.expressionMeasurement.batch.CompletedTlInference {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/InferenceRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface InferenceRequest {
    models?: Hume.expressionMeasurement.batch.Models;
    transcription?: Hume.expressionMeasurement.batch.Transcription;
    /**
     * URLs to the media files to be processed. Each must be a valid public URL to a media file (see recommended input filetypes) or an archive (`.zip`, `.tar.gz`, `.tar.bz2`, `.tar.xz`) of media files.
     *
     * If you wish to supply more than 100 URLs, consider providing them as an archive (`.zip`, `.tar.gz`, `.tar.bz2`, `.tar.xz`).
     */
    urls?: string[];
    /** Text to supply directly to our language and NER models. */
    text?: string[];
    /** If provided, a `POST` request will be made to the URL with the generated predictions on completion or the error message on failure. */
    callbackUrl?: string;
    /** Whether to send an email notification to the user upon job completion/failure. */
    notify?: boolean;
    files: Hume.expressionMeasurement.batch.File_[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateTlInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type StateTlInference =
    | Hume.expressionMeasurement.batch.StateTlInference.Queued
    | Hume.expressionMeasurement.batch.StateTlInference.InProgress
    | Hume.expressionMeasurement.batch.StateTlInference.Completed
    | Hume.expressionMeasurement.batch.StateTlInference.Failed;

export declare namespace StateTlInference {
    interface Queued extends Hume.expressionMeasurement.batch.StateTlInferenceQueued {
        status: "QUEUED";
    }

    interface InProgress extends Hume.expressionMeasurement.batch.StateTlInferenceInProgress {
        status: "IN_PROGRESS";
    }

    interface Completed extends Hume.expressionMeasurement.batch.StateTlInferenceCompletedTlInference {
        status: "COMPLETED";
    }

    interface Failed extends Hume.expressionMeasurement.batch.StateTlInferenceFailed {
        status: "FAILED";
    }
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/CustomModelVersionId.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CustomModelVersionId {
    versionId: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalNullFacemeshPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface PredictionsOptionalNullFacemeshPrediction {
    metadata?: Hume.expressionMeasurement.batch.Null;
    groupedPredictions: Hume.expressionMeasurement.batch.GroupedPredictionsFacemeshPrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/InferencePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface InferencePrediction {
    /** A file path relative to the top level source URL or file. */
    file: string;
    models: Hume.expressionMeasurement.batch.ModelsPredictions;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/EvaluationArgs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface EvaluationArgs {
    validation?: Hume.expressionMeasurement.batch.ValidationArgs;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateTlInferenceFailed.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateTlInferenceFailed extends Hume.expressionMeasurement.batch.Failed {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/TlInferenceBaseRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface TlInferenceBaseRequest {
    customModel: Hume.expressionMeasurement.batch.CustomModel;
    /**
     * URLs to the media files to be processed. Each must be a valid public URL to a media file (see recommended input filetypes) or an archive (`.zip`, `.tar.gz`, `.tar.bz2`, `.tar.xz`) of media files.
     *
     * If you wish to supply more than 100 URLs, consider providing them as an archive (`.zip`, `.tar.gz`, `.tar.bz2`, `.tar.xz`).
     */
    urls?: string[];
    /** If provided, a `POST` request will be made to the URL with the generated predictions on completion or the error message on failure. */
    callbackUrl?: string;
    /** Whether to send an email notification to the user upon job completion/failure. */
    notify?: boolean;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/CustomModelId.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CustomModelId {
    id: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/JobTlInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface JobTlInference {
    /** The ID associated with this job. */
    jobId: string;
    userId: string;
    request: Hume.expressionMeasurement.batch.TlInferenceBaseRequest;
    state: Hume.expressionMeasurement.batch.StateTlInference;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Url.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Url {
    /** The URL of the source media file. */
    url: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/File_.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The list of files submitted for analysis.
 */
export interface File_ {
    /** The name of the file. */
    filename?: string;
    /** The content type of the file. */
    contentType?: string;
    /** The MD5 checksum of the file. */
    md5Sum: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/JobTraining.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface JobTraining {
    /** The ID associated with this job. */
    jobId: string;
    userId: string;
    request: Hume.expressionMeasurement.batch.TrainingBaseRequest;
    state: Hume.expressionMeasurement.batch.StateTraining;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/DatasetId.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface DatasetId {
    id: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Window.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Generate predictions based on time.
 *
 * Setting the `window` field allows for a 'sliding window' approach, where a fixed-size window moves across the audio or video file in defined steps. This enables continuous analysis of prosody within subsets of the file, providing dynamic and localized insights into emotional expression.
 */
export interface Window {
    /** The length of the sliding window. */
    length?: number;
    /** The step size of the sliding window. */
    step?: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/NerPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface NerPrediction {
    /** The recognized topic or entity. */
    entity: string;
    position: Hume.expressionMeasurement.batch.PositionInterval;
    /** Our NER model's relative confidence in the recognized topic or entity. */
    entityConfidence: number;
    /** A measure of how often the entity is linked to by other entities. */
    support: number;
    /** A URL which provides more information about the recognized topic or entity. */
    uri: string;
    /** The specific word to which the emotion predictions are linked. */
    linkWord: string;
    time?: Hume.expressionMeasurement.batch.TimeInterval;
    /** Value between `0.0` and `1.0` that indicates our transcription model's relative confidence in this text. */
    confidence?: number;
    /** Value between `0.0` and `1.0` that indicates our transcription model's relative confidence that this text was spoken by this speaker. */
    speakerConfidence?: number;
    /** A high-dimensional embedding in emotion space. */
    emotions: Hume.expressionMeasurement.batch.EmotionScore[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/JobInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface JobInference {
    /** The ID associated with this job. */
    jobId: string;
    /** The request that initiated the job. */
    request: Hume.expressionMeasurement.batch.InferenceRequest;
    /** The current state of the job. */
    state: Hume.expressionMeasurement.batch.StateInference;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/TrainingCustomModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TrainingCustomModel {
    id: string;
    versionId?: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateEmbeddingGenerationInProgress.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateEmbeddingGenerationInProgress extends Hume.expressionMeasurement.batch.InProgress {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/DescriptionsScore.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface DescriptionsScore {
    /** Name of the descriptive feature being expressed. */
    name: string;
    /** Embedding value for the descriptive feature being expressed. */
    score: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/SourceFile.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface SourceFile extends Hume.expressionMeasurement.batch.File_ {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type StateInference =
    | Hume.expressionMeasurement.batch.StateInference.Queued
    | Hume.expressionMeasurement.batch.StateInference.InProgress
    | Hume.expressionMeasurement.batch.StateInference.Completed
    | Hume.expressionMeasurement.batch.StateInference.Failed;

export declare namespace StateInference {
    interface Queued extends Hume.expressionMeasurement.batch.QueuedState {
        status: "QUEUED";
    }

    interface InProgress extends Hume.expressionMeasurement.batch.InProgressState {
        status: "IN_PROGRESS";
    }

    interface Completed extends Hume.expressionMeasurement.batch.CompletedState {
        status: "COMPLETED";
    }

    interface Failed extends Hume.expressionMeasurement.batch.FailedState {
        status: "FAILED";
    }
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Bcp47Tag.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Bcp47Tag =
    | "zh"
    | "da"
    | "nl"
    | "en"
    | "en-AU"
    | "en-IN"
    | "en-NZ"
    | "en-GB"
    | "fr"
    | "fr-CA"
    | "de"
    | "hi"
    | "hi-Latn"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "no"
    | "pl"
    | "pt"
    | "pt-BR"
    | "pt-PT"
    | "ru"
    | "es"
    | "es-419"
    | "sv"
    | "ta"
    | "tr"
    | "uk";

export const Bcp47Tag = {
    Zh: "zh",
    Da: "da",
    Nl: "nl",
    En: "en",
    EnAu: "en-AU",
    EnIn: "en-IN",
    EnNz: "en-NZ",
    EnGb: "en-GB",
    Fr: "fr",
    FrCa: "fr-CA",
    De: "de",
    Hi: "hi",
    HiLatn: "hi-Latn",
    Id: "id",
    It: "it",
    Ja: "ja",
    Ko: "ko",
    No: "no",
    Pl: "pl",
    Pt: "pt",
    PtBr: "pt-BR",
    PtPt: "pt-PT",
    Ru: "ru",
    Es: "es",
    Es419: "es-419",
    Sv: "sv",
    Ta: "ta",
    Tr: "tr",
    Uk: "uk",
} as const;

```

# src/api/resources/expressionMeasurement/resources/batch/types/DatasetVersionId.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface DatasetVersionId {
    versionId: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateTrainingQueued.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateTrainingQueued extends Hume.expressionMeasurement.batch.Queued {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/InferenceSourcePredictResult.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface InferenceSourcePredictResult {
    source: Hume.expressionMeasurement.batch.Source;
    results?: Hume.expressionMeasurement.batch.InferenceResults;
    /** An error message. */
    error?: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Task.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type Task =
    | Hume.expressionMeasurement.batch.Task.Classification
    | Hume.expressionMeasurement.batch.Task.Regression;

export declare namespace Task {
    interface Classification extends Hume.expressionMeasurement.batch.TaskClassification {
        type: "classification";
    }

    interface Regression extends Hume.expressionMeasurement.batch.TaskRegression {
        type: "regression";
    }
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/TaskClassification.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TaskClassification {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateTrainingFailed.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateTrainingFailed extends Hume.expressionMeasurement.batch.Failed {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/FailedState.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface FailedState extends Hume.expressionMeasurement.batch.Failed {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/RegistryFileDetail.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface RegistryFileDetail {
    /** File ID in the Asset Registry */
    fileId: string;
    /** URL to the file in the Asset Registry */
    fileUrl: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/index.ts

```typescript
export * from "./Alternative";
export * from "./Bcp47Tag";
export * from "./BoundingBox";
export * from "./BurstPrediction";
export * from "./Classification";
export * from "./CompletedEmbeddingGeneration";
export * from "./CompletedInference";
export * from "./CompletedTlInference";
export * from "./CompletedTraining";
export * from "./CustomModelPrediction";
export * from "./CustomModelRequest";
export * from "./Dataset";
export * from "./DatasetId";
export * from "./DatasetVersionId";
export * from "./DescriptionsScore";
export * from "./Direction";
export * from "./EmbeddingGenerationBaseRequest";
export * from "./EmotionScore";
export * from "./Error_";
export * from "./EvaluationArgs";
export * from "./Face";
export * from "./FacePrediction";
export * from "./FacemeshPrediction";
export * from "./FacsScore";
export * from "./Failed";
export * from "./File_";
export * from "./Granularity";
export * from "./GroupedPredictionsBurstPrediction";
export * from "./GroupedPredictionsFacePrediction";
export * from "./GroupedPredictionsFacemeshPrediction";
export * from "./GroupedPredictionsLanguagePrediction";
export * from "./GroupedPredictionsNerPrediction";
export * from "./GroupedPredictionsProsodyPrediction";
export * from "./InProgress";
export * from "./InferenceBaseRequest";
export * from "./InferencePrediction";
export * from "./InferenceRequest";
export * from "./InferenceResults";
export * from "./InferenceSourcePredictResult";
export * from "./JobEmbeddingGeneration";
export * from "./JobInference";
export * from "./JobTlInference";
export * from "./JobTraining";
export * from "./JobId";
export * from "./Language";
export * from "./LanguagePrediction";
export * from "./Models";
export * from "./ModelsPredictions";
export * from "./Ner";
export * from "./NerPrediction";
export * from "./Null";
export * from "./PositionInterval";
export * from "./PredictionsOptionalNullBurstPrediction";
export * from "./PredictionsOptionalNullFacePrediction";
export * from "./PredictionsOptionalNullFacemeshPrediction";
export * from "./PredictionsOptionalTranscriptionMetadataLanguagePrediction";
export * from "./PredictionsOptionalTranscriptionMetadataNerPrediction";
export * from "./PredictionsOptionalTranscriptionMetadataProsodyPrediction";
export * from "./Prosody";
export * from "./ProsodyPrediction";
export * from "./Queued";
export * from "./RegistryFileDetail";
export * from "./Regression";
export * from "./SentimentScore";
export * from "./SortBy";
export * from "./Source";
export * from "./SourceFile";
export * from "./SourceTextSource";
export * from "./SourceUrl";
export * from "./Url";
export * from "./StateEmbeddingGeneration";
export * from "./StateEmbeddingGenerationCompletedEmbeddingGeneration";
export * from "./StateEmbeddingGenerationFailed";
export * from "./StateEmbeddingGenerationInProgress";
export * from "./StateEmbeddingGenerationQueued";
export * from "./StateInference";
export * from "./CompletedState";
export * from "./FailedState";
export * from "./InProgressState";
export * from "./QueuedState";
export * from "./StateTlInference";
export * from "./StateTlInferenceCompletedTlInference";
export * from "./StateTlInferenceFailed";
export * from "./StateTlInferenceInProgress";
export * from "./StateTlInferenceQueued";
export * from "./StateTraining";
export * from "./StateTrainingCompletedTraining";
export * from "./StateTrainingFailed";
export * from "./StateTrainingInProgress";
export * from "./StateTrainingQueued";
export * from "./Status";
export * from "./TlInferencePrediction";
export * from "./TlInferenceResults";
export * from "./TlInferenceSourcePredictResult";
export * from "./Tag";
export * from "./Target";
export * from "./Task";
export * from "./TaskClassification";
export * from "./TaskRegression";
export * from "./TextSource";
export * from "./TimeInterval";
export * from "./TlInferenceBaseRequest";
export * from "./CustomModel";
export * from "./CustomModelId";
export * from "./CustomModelVersionId";
export * from "./ToxicityScore";
export * from "./TrainingBaseRequest";
export * from "./TrainingCustomModel";
export * from "./Transcription";
export * from "./TranscriptionMetadata";
export * from "./Type";
export * from "./Unconfigurable";
export * from "./UnionJob";
export * from "./EmbeddingGenerationJob";
export * from "./InferenceJob";
export * from "./CustomModelsInferenceJob";
export * from "./CustomModelsTrainingJob";
export * from "./UnionPredictResult";
export * from "./ValidationArgs";
export * from "./When";
export * from "./Window";

```

# src/api/resources/expressionMeasurement/resources/batch/types/BurstPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface BurstPrediction {
    time: Hume.expressionMeasurement.batch.TimeInterval;
    /** A high-dimensional embedding in emotion space. */
    emotions: Hume.expressionMeasurement.batch.EmotionScore[];
    /** Modality-specific descriptive features and their scores. */
    descriptions: Hume.expressionMeasurement.batch.DescriptionsScore[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/SourceTextSource.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SourceTextSource {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/PredictionsOptionalNullBurstPrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface PredictionsOptionalNullBurstPrediction {
    metadata?: Hume.expressionMeasurement.batch.Null;
    groupedPredictions: Hume.expressionMeasurement.batch.GroupedPredictionsBurstPrediction[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/InProgress.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface InProgress {
    /** When this job was created (Unix timestamp in milliseconds). */
    createdTimestampMs: number;
    /** When this job started (Unix timestamp in milliseconds). */
    startedTimestampMs: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateTlInferenceInProgress.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateTlInferenceInProgress extends Hume.expressionMeasurement.batch.InProgress {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/QueuedState.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface QueuedState extends Hume.expressionMeasurement.batch.Queued {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Queued.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Queued {
    /** When this job was created (Unix timestamp in milliseconds). */
    createdTimestampMs: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateEmbeddingGenerationFailed.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateEmbeddingGenerationFailed extends Hume.expressionMeasurement.batch.Failed {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/InferenceJob.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface InferenceJob extends Hume.expressionMeasurement.batch.JobInference {
    /**
     * Denotes the job type.
     *
     * Jobs created with the Expression Measurement API will have this field set to `INFERENCE`.
     */
    type: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/CompletedState.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface CompletedState extends Hume.expressionMeasurement.batch.CompletedInference {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/TlInferencePrediction.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface TlInferencePrediction {
    /** A file path relative to the top level source URL or file. */
    file: string;
    fileType: string;
    customModels: Record<string, Hume.expressionMeasurement.batch.CustomModelPrediction>;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/CompletedInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CompletedInference {
    /** When this job was created (Unix timestamp in milliseconds). */
    createdTimestampMs: number;
    /** When this job started (Unix timestamp in milliseconds). */
    startedTimestampMs: number;
    /** When this job ended (Unix timestamp in milliseconds). */
    endedTimestampMs: number;
    /** The number of predictions that were generated by this job. */
    numPredictions: number;
    /** The number of errors that occurred while running this job. */
    numErrors: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateEmbeddingGenerationQueued.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateEmbeddingGenerationQueued extends Hume.expressionMeasurement.batch.Queued {}

```

# src/api/resources/expressionMeasurement/resources/batch/types/CustomModelsTrainingJob.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface CustomModelsTrainingJob extends Hume.expressionMeasurement.batch.JobTraining {
    type: string;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/CustomModelRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface CustomModelRequest {
    name: string;
    description?: string;
    tags?: Hume.expressionMeasurement.batch.Tag[];
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Ner.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The NER (Named-entity Recognition) model identifies real-world objects and concepts in passages of text. This also supports audio and video files by transcribing and then directly analyzing the transcribed text.
 *
 * Recommended input filetypes: `.txt`, `.mp3`, `.wav`, `.mp4`
 */
export interface Ner {
    /** Whether to return identifiers for speakers over time. If `true`, unique identifiers will be assigned to spoken words to differentiate different speakers. If `false`, all speakers will be tagged with an `unknown` ID. */
    identifySpeakers?: boolean;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/Unconfigurable.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * To include predictions for this model type, set this field to `{}`. It is currently not configurable further.
 */
export type Unconfigurable = Record<string, unknown>;

```

# src/api/resources/expressionMeasurement/resources/batch/types/TrainingBaseRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface TrainingBaseRequest {
    customModel: Hume.expressionMeasurement.batch.CustomModelRequest;
    dataset: Hume.expressionMeasurement.batch.Dataset;
    targetFeature?: string;
    task?: Hume.expressionMeasurement.batch.Task;
    evaluation?: Hume.expressionMeasurement.batch.EvaluationArgs;
    alternatives?: Hume.expressionMeasurement.batch.Alternative[];
    callbackUrl?: string;
    notify?: boolean;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/PositionInterval.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Position of a segment of text within a larger document, measured in characters. Uses zero-based indexing. The beginning index is inclusive and the end index is exclusive.
 */
export interface PositionInterval {
    /** The index of the first character in the text segment, inclusive. */
    begin: number;
    /** The index of the last character in the text segment, exclusive. */
    end: number;
}

```

# src/api/resources/expressionMeasurement/resources/batch/types/StateTlInferenceQueued.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StateTlInferenceQueued extends Hume.expressionMeasurement.batch.Queued {}

```

# src/api/resources/expressionMeasurement/resources/stream/index.ts

```typescript
export * from "./types";

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsBurstPredictionsItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StreamModelPredictionsBurstPredictionsItem {
    time?: Hume.expressionMeasurement.stream.TimeRange;
    emotions?: Hume.expressionMeasurement.stream.EmotionEmbedding;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/SentimentItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SentimentItem {
    /** Level of sentiment, ranging from 1 (negative) to 9 (positive) */
    name?: string;
    /** Prediction for this level of sentiment */
    score?: number;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsLanguage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Response for the language emotion model.
 */
export interface StreamModelPredictionsLanguage {
    predictions?: Hume.expressionMeasurement.stream.StreamModelPredictionsLanguagePredictionsItem[];
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsProsodyPredictionsItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StreamModelPredictionsProsodyPredictionsItem {
    time?: Hume.expressionMeasurement.stream.TimeRange;
    emotions?: Hume.expressionMeasurement.stream.EmotionEmbedding;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamBoundingBox.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A bounding box around a face.
 */
export interface StreamBoundingBox {
    /** x-coordinate of bounding box top left corner. */
    x?: number;
    /** y-coordinate of bounding box top left corner. */
    y?: number;
    /** Bounding box width. */
    w?: number;
    /** Bounding box height. */
    h?: number;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictions.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Model predictions
 */
export interface StreamModelPredictions {
    /** If a payload ID was passed in the request, the same payload ID will be sent back in the response body. */
    payloadId?: string;
    /** If the job_details flag was set in the request, details about the current streaming job will be returned in the response body. */
    jobDetails?: Hume.expressionMeasurement.stream.StreamModelPredictionsJobDetails;
    /** Response for the vocal burst emotion model. */
    burst?: Hume.expressionMeasurement.stream.StreamModelPredictionsBurst;
    /** Response for the facial expression emotion model. */
    face?: Hume.expressionMeasurement.stream.StreamModelPredictionsFace;
    /** Response for the facemesh emotion model. */
    facemesh?: Hume.expressionMeasurement.stream.StreamModelPredictionsFacemesh;
    /** Response for the language emotion model. */
    language?: Hume.expressionMeasurement.stream.StreamModelPredictionsLanguage;
    /** Response for the speech prosody emotion model. */
    prosody?: Hume.expressionMeasurement.stream.StreamModelPredictionsProsody;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/ToxicityItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ToxicityItem {
    /** Category of toxicity. */
    name?: string;
    /** Prediction for this category of toxicity */
    score?: number;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsJobDetails.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * If the job_details flag was set in the request, details about the current streaming job will be returned in the response body.
 */
export interface StreamModelPredictionsJobDetails {
    /** ID of the current streaming job. */
    jobId?: string;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelsEndpointPayload.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Models endpoint payload
 */
export interface StreamModelsEndpointPayload {
    data?: string;
    /** Configuration used to specify which models should be used and with what settings. */
    models?: Hume.expressionMeasurement.stream.Config;
    /**
     * Length in milliseconds of streaming sliding window.
     *
     * Extending the length of this window will prepend media context from past payloads into the current payload.
     *
     * For example, if on the first payload you send 500ms of data and on the second payload you send an additional 500ms of data, a window of at least 1000ms will allow the model to process all 1000ms of stream data.
     *
     * A window of 600ms would append the full 500ms of the second payload to the last 100ms of the first payload.
     *
     * Note: This feature is currently only supported for audio data and audio models. For other file types and models this parameter will be ignored.
     */
    streamWindowMs?: number;
    /**
     * Whether to reset the streaming sliding window before processing the current payload.
     *
     * If this parameter is set to `true` then past context will be deleted before processing the current payload.
     *
     * Use reset_stream when one audio file is done being processed and you do not want context to leak across files.
     */
    resetStream?: boolean;
    /**
     * Set to `true` to enable the data parameter to be parsed as raw text rather than base64 encoded bytes.
     * This parameter is useful if you want to send text to be processed by the language model, but it cannot be used with other file types like audio, image, or video.
     */
    rawText?: boolean;
    /**
     * Set to `true` to get details about the job.
     *
     * This parameter can be set in the same payload as data or it can be set without data and models configuration to get the job details between payloads.
     *
     * This parameter is useful to get the unique job ID.
     */
    jobDetails?: boolean;
    /**
     * Pass an arbitrary string as the payload ID and get it back at the top level of the socket response.
     *
     * This can be useful if you have multiple requests running asynchronously and want to disambiguate responses as they are received.
     */
    payloadId?: string;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/EmotionEmbedding.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * A high-dimensional embedding in emotion space.
 */
export type EmotionEmbedding = Hume.expressionMeasurement.stream.EmotionEmbeddingItem[];

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsFacemeshPredictionsItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StreamModelPredictionsFacemeshPredictionsItem {
    emotions?: Hume.expressionMeasurement.stream.EmotionEmbedding;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsFacemesh.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Response for the facemesh emotion model.
 */
export interface StreamModelPredictionsFacemesh {
    predictions?: Hume.expressionMeasurement.stream.StreamModelPredictionsFacemeshPredictionsItem[];
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamWarningMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Warning message
 */
export interface StreamWarningMessage {
    /** Warning message text. */
    warning?: string;
    /** Unique identifier for the error. */
    code?: string;
    /** If a payload ID was passed in the request, the same payload ID will be sent back in the response body. */
    payloadId?: string;
    /** If the job_details flag was set in the request, details about the current streaming job will be returned in the response body. */
    jobDetails?: Hume.expressionMeasurement.stream.StreamWarningMessageJobDetails;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamFace.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Configuration for the facial expression emotion model.
 *
 * Note: Using the `reset_stream` parameter does not have any effect on face identification. A single face identifier cache is maintained over a full session whether `reset_stream` is used or not.
 */
export interface StreamFace {
    /** Configuration for FACS predictions. If missing or null, no FACS predictions will be generated. */
    facs?: Record<string, unknown>;
    /** Configuration for Descriptions predictions. If missing or null, no Descriptions predictions will be generated. */
    descriptions?: Record<string, unknown>;
    /** Whether to return identifiers for faces across frames. If true, unique identifiers will be assigned to face bounding boxes to differentiate different faces. If false, all faces will be tagged with an "unknown" ID. */
    identifyFaces?: boolean;
    /** Number of frames per second to process. Other frames will be omitted from the response. */
    fpsPred?: number;
    /** Face detection probability threshold. Faces detected with a probability less than this threshold will be omitted from the response. */
    probThreshold?: number;
    /** Minimum bounding box side length in pixels to treat as a face. Faces detected with a bounding box side length in pixels less than this threshold will be omitted from the response. */
    minFaceSize?: number;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/SubscribeEvent.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type SubscribeEvent =
    /**
     * Model predictions */
    | Hume.expressionMeasurement.stream.StreamModelPredictions
    /**
     * Error message */
    | Hume.expressionMeasurement.stream.StreamErrorMessage
    /**
     * Warning message */
    | Hume.expressionMeasurement.stream.StreamWarningMessage;

```

# src/api/resources/expressionMeasurement/resources/stream/types/Toxicity.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Toxicity predictions returned as probabilities that the text can be classified into the following categories: toxic, severe_toxic, obscene, threat, insult, and identity_hate.
 */
export type Toxicity = Hume.expressionMeasurement.stream.ToxicityItem[];

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamErrorMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Error message
 */
export interface StreamErrorMessage {
    /** Error message text. */
    error?: string;
    /** Unique identifier for the error. */
    code?: string;
    /** If a payload ID was passed in the request, the same payload ID will be sent back in the response body. */
    payloadId?: string;
    /** If the job_details flag was set in the request, details about the current streaming job will be returned in the response body. */
    jobDetails?: Hume.expressionMeasurement.stream.JobDetails;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsLanguagePredictionsItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StreamModelPredictionsLanguagePredictionsItem {
    /** A segment of text (like a word or a sentence). */
    text?: string;
    position?: Hume.expressionMeasurement.stream.TextPosition;
    emotions?: Hume.expressionMeasurement.stream.EmotionEmbedding;
    sentiment?: Hume.expressionMeasurement.stream.Sentiment;
    toxicity?: Hume.expressionMeasurement.stream.Toxicity;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamWarningMessageJobDetails.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * If the job_details flag was set in the request, details about the current streaming job will be returned in the response body.
 */
export interface StreamWarningMessageJobDetails {
    /** ID of the current streaming job. */
    jobId?: string;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/TimeRange.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A time range with a beginning and end, measured in seconds.
 */
export interface TimeRange {
    /** Beginning of time range in seconds. */
    begin?: number;
    /** End of time range in seconds. */
    end?: number;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsFacePredictionsItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export interface StreamModelPredictionsFacePredictionsItem {
    /** Frame number */
    frame?: number;
    /** Time in seconds when face detection occurred. */
    time?: number;
    bbox?: Hume.expressionMeasurement.stream.StreamBoundingBox;
    /** The predicted probability that a detected face was actually a face. */
    prob?: number;
    /** Identifier for a face. Not that this defaults to `unknown` unless face identification is enabled in the face model configuration. */
    faceId?: string;
    emotions?: Hume.expressionMeasurement.stream.EmotionEmbedding;
    facs?: Hume.expressionMeasurement.stream.EmotionEmbedding;
    descriptions?: Hume.expressionMeasurement.stream.EmotionEmbedding;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsProsody.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Response for the speech prosody emotion model.
 */
export interface StreamModelPredictionsProsody {
    predictions?: Hume.expressionMeasurement.stream.StreamModelPredictionsProsodyPredictionsItem[];
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamLanguage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Configuration for the language emotion model.
 */
export interface StreamLanguage {
    /** Configuration for sentiment predictions. If missing or null, no sentiment predictions will be generated. */
    sentiment?: Record<string, unknown>;
    /** Configuration for toxicity predictions. If missing or null, no toxicity predictions will be generated. */
    toxicity?: Record<string, unknown>;
    /** The granularity at which to generate predictions. Values are `word`, `sentence`, `utterance`, or `passage`. To get a single prediction for the entire text of your streaming payload use `passage`. Default value is `word`. */
    granularity?: string;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/EmotionEmbeddingItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface EmotionEmbeddingItem {
    /** Name of the emotion being expressed. */
    name?: string;
    /** Embedding value for the emotion being expressed. */
    score?: number;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/JobDetails.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * If the job_details flag was set in the request, details about the current streaming job will be returned in the response body.
 */
export interface JobDetails {
    /** ID of the current streaming job. */
    jobId?: string;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/Sentiment.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Sentiment predictions returned as a distribution. This model predicts the probability that a given text could be interpreted as having each sentiment level from 1 (negative) to 9 (positive).
 *
 * Compared to returning one estimate of sentiment, this enables a more nuanced analysis of a text's meaning. For example, a text with very neutral sentiment would have an average rating of 5. But also a text that could be interpreted as having very positive sentiment or very negative sentiment would also have an average rating of 5. The average sentiment is less informative than the distribution over sentiment, so this API returns a value for each sentiment level.
 */
export type Sentiment = Hume.expressionMeasurement.stream.SentimentItem[];

```

# src/api/resources/expressionMeasurement/resources/stream/types/TextPosition.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Position of a segment of text within a larger document, measured in characters. Uses zero-based indexing. The beginning index is inclusive and the end index is exclusive.
 */
export interface TextPosition {
    /** The index of the first character in the text segment, inclusive. */
    begin?: number;
    /** The index of the last character in the text segment, exclusive. */
    end?: number;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/index.ts

```typescript
export * from "./StreamModelPredictionsJobDetails";
export * from "./StreamModelPredictionsBurstPredictionsItem";
export * from "./StreamModelPredictionsBurst";
export * from "./StreamModelPredictionsFacePredictionsItem";
export * from "./StreamModelPredictionsFace";
export * from "./StreamModelPredictionsFacemeshPredictionsItem";
export * from "./StreamModelPredictionsFacemesh";
export * from "./StreamModelPredictionsLanguagePredictionsItem";
export * from "./StreamModelPredictionsLanguage";
export * from "./StreamModelPredictionsProsodyPredictionsItem";
export * from "./StreamModelPredictionsProsody";
export * from "./StreamModelPredictions";
export * from "./JobDetails";
export * from "./StreamErrorMessage";
export * from "./StreamWarningMessageJobDetails";
export * from "./StreamWarningMessage";
export * from "./SubscribeEvent";
export * from "./StreamFace";
export * from "./StreamLanguage";
export * from "./Config";
export * from "./StreamModelsEndpointPayload";
export * from "./EmotionEmbeddingItem";
export * from "./EmotionEmbedding";
export * from "./StreamBoundingBox";
export * from "./TimeRange";
export * from "./TextPosition";
export * from "./SentimentItem";
export * from "./Sentiment";
export * from "./ToxicityItem";
export * from "./Toxicity";

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsBurst.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Response for the vocal burst emotion model.
 */
export interface StreamModelPredictionsBurst {
    predictions?: Hume.expressionMeasurement.stream.StreamModelPredictionsBurstPredictionsItem[];
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/Config.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Configuration used to specify which models should be used and with what settings.
 */
export interface Config {
    /**
     * Configuration for the vocal burst emotion model.
     *
     * Note: Model configuration is not currently available in streaming.
     *
     * Please use the default configuration by passing an empty object `{}`.
     */
    burst?: Record<string, unknown>;
    /**
     * Configuration for the facial expression emotion model.
     *
     * Note: Using the `reset_stream` parameter does not have any effect on face identification. A single face identifier cache is maintained over a full session whether `reset_stream` is used or not.
     */
    face?: Hume.expressionMeasurement.stream.StreamFace;
    /**
     * Configuration for the facemesh emotion model.
     *
     * Note: Model configuration is not currently available in streaming.
     *
     * Please use the default configuration by passing an empty object `{}`.
     */
    facemesh?: Record<string, unknown>;
    /** Configuration for the language emotion model. */
    language?: Hume.expressionMeasurement.stream.StreamLanguage;
    /**
     * Configuration for the speech prosody emotion model.
     *
     * Note: Model configuration is not currently available in streaming.
     *
     * Please use the default configuration by passing an empty object `{}`.
     */
    prosody?: Record<string, unknown>;
}

```

# src/api/resources/expressionMeasurement/resources/stream/types/StreamModelPredictionsFace.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

/**
 * Response for the facial expression emotion model.
 */
export interface StreamModelPredictionsFace {
    predictions?: Hume.expressionMeasurement.stream.StreamModelPredictionsFacePredictionsItem[];
}

```

# src/api/resources/empathicVoice/index.ts

```typescript
export * from "./resources";
export * from "./types";
export * from "./errors";
export * from "./client";

```

# src/api/resources/empathicVoice/client/Client.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Tools } from "../resources/tools/client/Client";
import { Prompts } from "../resources/prompts/client/Client";
import { Configs } from "../resources/configs/client/Client";
import { Chats } from "../resources/chats/client/Client";
import { ChatGroups } from "../resources/chatGroups/client/Client";
import { Chat } from "../resources/chat/client/Client";

export declare namespace EmpathicVoice {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        accessToken?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class EmpathicVoice {
    constructor(protected readonly _options: EmpathicVoice.Options = {}) {}

    protected _tools: Tools | undefined;

    public get tools(): Tools {
        return (this._tools ??= new Tools(this._options));
    }

    protected _prompts: Prompts | undefined;

    public get prompts(): Prompts {
        return (this._prompts ??= new Prompts(this._options));
    }

    protected _configs: Configs | undefined;

    public get configs(): Configs {
        return (this._configs ??= new Configs(this._options));
    }

    protected _chats: Chats | undefined;

    public get chats(): Chats {
        return (this._chats ??= new Chats(this._options));
    }

    protected _chatGroups: ChatGroups | undefined;

    public get chatGroups(): ChatGroups {
        return (this._chatGroups ??= new ChatGroups(this._options));
    }

    protected _chat: Chat | undefined;

    public get chat(): Chat {
        return (this._chat ??= new Chat(this._options));
    }
}

```

# src/api/resources/empathicVoice/client/index.ts

```typescript
export {};

```

# src/api/resources/empathicVoice/errors/BadRequestError.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as Hume from "../../../index";

export class BadRequestError extends errors.HumeError {
    constructor(body: Hume.empathicVoice.ErrorResponse) {
        super({
            message: "BadRequestError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

```

# src/api/resources/empathicVoice/errors/index.ts

```typescript
export * from "./BadRequestError";

```

# src/api/resources/empathicVoice/types/PostedEventMessageSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Settings for a specific event_message to be posted to the server
 */
export interface PostedEventMessageSpec {
    /**
     * Boolean indicating if this event message is enabled.
     *
     * If set to `true`, a message will be sent when the circumstances for the specific event are met.
     */
    enabled: boolean;
    /** Text to use as the event message when the corresponding event occurs. If no text is specified, EVI will generate an appropriate message based on its current context and the system prompt. */
    text?: string;
}

```

# src/api/resources/empathicVoice/types/PostedTimeoutSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Settings for a specific timeout to be posted to the server
 */
export interface PostedTimeoutSpec {
    /** Boolean indicating if this event message is enabled. */
    enabled: boolean;
    /** Duration in seconds for the timeout. */
    durationSecs?: number;
}

```

# src/api/resources/empathicVoice/types/WebSocketError.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * When provided, the output is an error message.
 */
export interface WebSocketError {
    /**
     * The type of message sent through the socket; for a Web Socket Error message, this must be `error`.
     *
     * This message indicates a disruption in the WebSocket connection, such as an unexpected disconnection, protocol error, or data transmission issue.
     */
    type: "error";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** Error code. Identifies the type of error encountered. */
    code: string;
    /** Short, human-readable identifier and description for the error. See a complete list of error slugs on the [Errors page](/docs/resources/errors). */
    slug: string;
    /** Detailed description of the error. */
    message: string;
}

```

# src/api/resources/empathicVoice/types/PauseAssistantMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Pause responses from EVI. Chat history is still saved and sent after resuming.
 */
export interface PauseAssistantMessage {
    /**
     * The type of message sent through the socket; must be `pause_assistant_message` for our server to correctly identify and process it as a Pause Assistant message.
     *
     * Once this message is sent, EVI will not respond until a [Resume Assistant message](/reference/empathic-voice-interface-evi/chat/chat#send.Resume%20Assistant%20Message.type) is sent. When paused, EVI won’t respond, but transcriptions of your audio inputs will still be recorded.
     */
    type: "pause_assistant_message";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
}

```

# src/api/resources/empathicVoice/types/PostedCustomVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A Custom Voice specification to be associated with this Config.
 *
 * If a Custom Voice specification is not provided then the [name](/reference/empathic-voice-interface-evi/configs/create-config#request.body.voice.name) of a base voice or previously created Custom Voice must be provided.
 *
 * See our [Voices guide](/docs/empathic-voice-interface-evi/voices) for a tutorial on how to craft a Custom Voice.
 */
export interface PostedCustomVoice {
    /** The name of the Custom Voice. Maximum length of 75 characters. Will be converted to all-uppercase. (e.g., "sample voice" becomes "SAMPLE VOICE") */
    name: string;
    /** Specifies the base voice used to create the Custom Voice. */
    baseVoice: Hume.empathicVoice.PostedCustomVoiceBaseVoice;
    /** The name of the parameter model used to define which attributes are used by the `parameters` field. Currently, only `20240715-4parameter` is supported as the parameter model. */
    parameterModel: "20240715-4parameter";
    /**
     * The specified attributes of a Custom Voice.
     *
     * If no parameters are specified then all attributes will be set to their defaults, meaning no modfications will be made to the base voice.
     */
    parameters?: Hume.empathicVoice.PostedCustomVoiceParameters;
}

```

# src/api/resources/empathicVoice/types/ReturnUserDefinedTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A specific tool version returned from the server
 */
export interface ReturnUserDefinedTool {
    /** Type of Tool. Either `BUILTIN` for natively implemented tools, like web search, or `FUNCTION` for user-defined tools. */
    toolType: Hume.empathicVoice.ReturnUserDefinedToolToolType;
    /** Identifier for a Tool. Formatted as a UUID. */
    id: string;
    /**
     * Version number for a Tool.
     *
     * Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.
     *
     * Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.
     */
    version: number;
    /** Versioning method for a Tool. Either `FIXED` for using a fixed version number or `LATEST` for auto-updating to the latest version. */
    versionType: Hume.empathicVoice.ReturnUserDefinedToolVersionType;
    /** An optional description of the Tool version. */
    versionDescription?: string;
    /** Name applied to all versions of a particular Tool. */
    name: string;
    /** Time at which the Tool was created. Measured in seconds since the Unix epoch. */
    createdOn: number;
    /** Time at which the Tool was last modified. Measured in seconds since the Unix epoch. */
    modifiedOn: number;
    /** Optional text passed to the supplemental LLM in place of the tool call result. The LLM then uses this text to generate a response back to the user, ensuring continuity in the conversation if the Tool errors. */
    fallbackContent?: string;
    /** An optional description of what the Tool does, used by the supplemental LLM to choose when and how to call the function. */
    description?: string;
    /**
     * Stringified JSON defining the parameters used by this version of the Tool.
     *
     * These parameters define the inputs needed for the Tool’s execution, including the expected data type and description for each input field. Structured as a stringified JSON schema, this format ensures the tool receives data in the expected format.
     */
    parameters: string;
}

```

# src/api/resources/empathicVoice/types/ChatMetadata.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * When provided, the output is a chat metadata message.
 */
export interface ChatMetadata {
    /**
     * The type of message sent through the socket; for a Chat Metadata message, this must be `chat_metadata`.
     *
     * The Chat Metadata message is the first message you receive after establishing a connection with EVI and contains important identifiers for the current Chat session.
     */
    type: "chat_metadata";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /**
     * ID of the Chat Group.
     *
     * Used to resume a Chat when passed in the [resumed_chat_group_id](/reference/empathic-voice-interface-evi/chat/chat#request.query.resumed_chat_group_id) query parameter of a subsequent connection request. This allows EVI to continue the conversation from where it left off within the Chat Group.
     *
     * Learn more about [supporting chat resumability](/docs/empathic-voice-interface-evi/faq#does-evi-support-chat-resumability) from the EVI FAQ.
     */
    chatGroupId: string;
    /** ID of the Chat session. Allows the Chat session to be tracked and referenced. */
    chatId: string;
    /** ID of the initiating request. */
    requestId?: string;
}

```

# src/api/resources/empathicVoice/types/UserInterruption.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * When provided, the output is an interruption.
 */
export interface UserInterruption {
    /**
     * The type of message sent through the socket; for a User Interruption message, this must be `user_interruption`.
     *
     * This message indicates the user has interrupted the assistant’s response. EVI detects the interruption in real-time and sends this message to signal the interruption event. This message allows the system to stop the current audio playback, clear the audio queue, and prepare to handle new user input.
     */
    type: "user_interruption";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** Unix timestamp of the detected user interruption. */
    time: number;
}

```

# src/api/resources/empathicVoice/types/ReturnVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A specific voice specification
 */
export interface ReturnVoice {
    /** The provider of the voice to use. Currently, only `HUME_AI` is supported as the voice provider. */
    provider: "HUME_AI";
    /**
     * The name of the specified voice.
     *
     * This will either be the name of a previously created Custom Voice or one of our 7 base voices: `ITO`, `KORA`, `DACHER`, `AURA`, `FINN`, `WHIMSY`, or `STELLA`.
     */
    name?: string;
    customVoice?: Hume.empathicVoice.ReturnCustomVoice;
}

```

# src/api/resources/empathicVoice/types/ToolErrorMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * When provided, the output is a function call error.
 */
export interface ToolErrorMessage {
    /**
     * The type of message sent through the socket; for a Tool Error message, this must be `tool_error`.
     *
     * Upon receiving a [Tool Call message](/reference/empathic-voice-interface-evi/chat/chat#receive.Tool%20Call%20Message.type) and failing to invoke the function, this message is sent to notify EVI of the tool's failure.
     */
    type: "tool_error";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** Type of tool called. Either `builtin` for natively implemented tools, like web search, or `function` for user-defined tools. */
    toolType?: Hume.empathicVoice.ToolType;
    /**
     * The unique identifier for a specific tool call instance.
     *
     * This ID is used to track the request and response of a particular tool invocation, ensuring that the Tool Error message is linked to the appropriate tool call request. The specified `tool_call_id` must match the one received in the [Tool Call message](/reference/empathic-voice-interface-evi/chat/chat#receive.Tool%20Call%20Message.type).
     */
    toolCallId: string;
    /** Optional text passed to the supplemental LLM in place of the tool call result. The LLM then uses this text to generate a response back to the user, ensuring continuity in the conversation if the tool errors. */
    content?: string;
    /** Error message from the tool call, not exposed to the LLM or user. */
    error: string;
    /** Error code. Identifies the type of error encountered. */
    code?: string;
    /** Indicates the severity of an error; for a Tool Error message, this must be `warn` to signal an unexpected event. */
    level?: Hume.empathicVoice.ErrorLevel;
}

```

# src/api/resources/empathicVoice/types/ReturnChatStatus.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the current state of the chat. There are six possible statuses:
 *
 * - `ACTIVE`: The chat is currently active and ongoing.
 *
 * - `USER_ENDED`: The chat was manually ended by the user.
 *
 * - `USER_TIMEOUT`: The chat ended due to a user-defined timeout.
 *
 * - `MAX_DURATION_TIMEOUT`: The chat ended because it reached the maximum allowed duration.
 *
 * - `INACTIVITY_TIMEOUT`: The chat ended due to an inactivity timeout.
 *
 * - `ERROR`: The chat ended unexpectedly due to an error.
 */
export type ReturnChatStatus =
    | "ACTIVE"
    | "USER_ENDED"
    | "USER_TIMEOUT"
    | "MAX_DURATION_TIMEOUT"
    | "INACTIVITY_TIMEOUT"
    | "ERROR";

export const ReturnChatStatus = {
    Active: "ACTIVE",
    UserEnded: "USER_ENDED",
    UserTimeout: "USER_TIMEOUT",
    MaxDurationTimeout: "MAX_DURATION_TIMEOUT",
    InactivityTimeout: "INACTIVITY_TIMEOUT",
    Error: "ERROR",
} as const;

```

# src/api/resources/empathicVoice/types/VoiceArgs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface VoiceArgs {
    voice?: Hume.empathicVoice.VoiceNameEnum;
    speechRateMultiplier?: number;
    baseline?: boolean;
    reconstruct?: boolean;
    additive?: boolean;
    drift?: boolean;
    useV2?: boolean;
}

```

# src/api/resources/empathicVoice/types/Context.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface Context {
    /**
     * The persistence level of the injected context. Specifies how long the injected context will remain active in the session.
     *
     * There are three possible context types:
     *
     * - **Persistent**: The context is appended to all user messages for the duration of the session.
     *
     * - **Temporary**: The context is appended only to the next user message.
     *
     * - **Editable**: The original context is updated to reflect the new context.
     *
     * If the type is not specified, it will default to `temporary`.
     */
    type?: Hume.empathicVoice.ContextType;
    /**
     * The context to be injected into the conversation. Helps inform the LLM's response by providing relevant information about the ongoing conversation.
     *
     * This text will be appended to the end of user messages based on the chosen persistence level. For example, if you want to remind EVI of its role as a helpful weather assistant, the context you insert will be appended to the end of user messages as `{Context: You are a helpful weather assistant}`.
     */
    text: string;
}

```

# src/api/resources/empathicVoice/types/VoiceNameEnum.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type VoiceNameEnum =
    | "ITO"
    | "KORA"
    | "DACHER"
    | "AURA"
    | "FINN"
    | "SIENNA"
    | "WILLOW"
    | "SCOUT"
    | "WHIMSY"
    | "ACE"
    | "JUNO"
    | "STELLA"
    | "HIRO";

export const VoiceNameEnum = {
    Ito: "ITO",
    Kora: "KORA",
    Dacher: "DACHER",
    Aura: "AURA",
    Finn: "FINN",
    Sienna: "SIENNA",
    Willow: "WILLOW",
    Scout: "SCOUT",
    Whimsy: "WHIMSY",
    Ace: "ACE",
    Juno: "JUNO",
    Stella: "STELLA",
    Hiro: "HIRO",
} as const;

```

# src/api/resources/empathicVoice/types/PostedVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A Voice specification posted to the server
 */
export interface PostedVoice {
    /** The provider of the voice to use. Currently, only `HUME_AI` is supported as the voice provider. */
    provider: "HUME_AI";
    /**
     * Specifies the name of the voice to use.
     *
     * This can be either the name of a previously created Custom Voice or one of our 7 base voices: `ITO`, `KORA`, `DACHER`, `AURA`, `FINN`, `WHIMSY`, or `STELLA`.
     *
     * The name will be automatically converted to uppercase (e.g., "Ito" becomes "ITO"). If a name is not specified, then a [Custom Voice](/reference/empathic-voice-interface-evi/configs/create-config#request.body.voice.custom_voice) specification must be provided.
     */
    name?: string;
    customVoice?: Hume.empathicVoice.PostedCustomVoice;
}

```

# src/api/resources/empathicVoice/types/PostedCustomVoiceParameters.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The specified attributes of a Custom Voice.
 *
 * If no parameters are specified then all attributes will be set to their defaults, meaning no modfications will be made to the base voice.
 */
export interface PostedCustomVoiceParameters {
    /**
     * The vocalization of gender, ranging between masculine and feminine.
     *
     * The default value is `0`, with a minimum of `-100` (more masculine) and a maximum of `100` (more feminine). A value of `0` leaves this parameter unchanged from the base voice.
     */
    gender?: number;
    /**
     * The texture of the voice, ranging between bright and husky.
     *
     * The default value is `0`, with a minimum of `-100` (brighter) and a maximum of `100` (huskier). A value of `0` leaves this parameter unchanged from the base voice.
     */
    huskiness?: number;
    /**
     * The openness of the voice, ranging between resonant and nasal.
     *
     * The default value is `0`, with a minimum of `-100` (more resonant) and a maximum of `100` (more nasal). A value of `0` leaves this parameter unchanged from the base voice.
     */
    nasality?: number;
    /**
     * The frequency of the voice, ranging between low and high.
     *
     * The default value is `0`, with a minimum of `-100` (lower) and a maximum of `100` (higher). A value of `0` leaves this parameter unchanged from the base voice.
     */
    pitch?: number;
}

```

# src/api/resources/empathicVoice/types/AssistantMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * When provided, the output is an assistant message.
 */
export interface AssistantMessage {
    /**
     * The type of message sent through the socket; for an Assistant Message, this must be `assistant_message`.
     *
     * This message contains both a transcript of the assistant’s response and the expression measurement predictions of the assistant’s audio output.
     */
    type: "assistant_message";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** ID of the assistant message. Allows the Assistant Message to be tracked and referenced. */
    id?: string;
    /** Transcript of the message. */
    message: Hume.empathicVoice.ChatMessage;
    /** Inference model results. */
    models: Hume.empathicVoice.Inference;
    /** Indicates if this message was inserted into the conversation as text from an [Assistant Input message](/reference/empathic-voice-interface-evi/chat/chat#send.Assistant%20Input.text). */
    fromText: boolean;
}

```

# src/api/resources/empathicVoice/types/ReturnActiveChatCountPerTag.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A description of current chat chat sessions per tag
 */
export interface ReturnActiveChatCountPerTag {
    /** User tag applied to a chat. */
    tag: string;
    /** The total number of active chats for this user with the specified tag. */
    totalTagActiveChats: number;
}

```

# src/api/resources/empathicVoice/types/ReturnConfigSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The Config associated with this Chat.
 */
export interface ReturnConfigSpec {
    /** Identifier for a Config. Formatted as a UUID. */
    id: string;
    /**
     * Version number for a Config.
     *
     * Configs, Prompts, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine configurations and revert to previous versions if needed.
     *
     * Version numbers are integer values representing different iterations of the Config. Each update to the Config increments its version number.
     */
    version?: number;
}

```

# src/api/resources/empathicVoice/types/AudioInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * When provided, the input is audio.
 */
export interface AudioInput {
    /**
     * The type of message sent through the socket; must be `audio_input` for our server to correctly identify and process it as an Audio Input message.
     *
     * This message is used for sending audio input data to EVI for processing and expression measurement. Audio data should be sent as a continuous stream, encoded in Base64.
     */
    type: "audio_input";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /**
     * Base64 encoded audio input to insert into the conversation.
     *
     * The content of an Audio Input message is treated as the user’s speech to EVI and must be streamed continuously. Pre-recorded audio files are not supported.
     *
     * For optimal transcription quality, the audio data should be transmitted in small chunks.
     *
     * Hume recommends streaming audio with a buffer window of 20 milliseconds (ms), or 100 milliseconds (ms) for web applications.
     */
    data: string;
}

```

# src/api/resources/empathicVoice/types/TtsInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TtsInput {
    type?: "tts";
}

```

# src/api/resources/empathicVoice/types/ReturnChat.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A description of chat and its status
 */
export interface ReturnChat {
    /** Identifier for a Chat. Formatted as a UUID. */
    id: string;
    /** Identifier for the Chat Group. Any chat resumed from this Chat will have the same `chat_group_id`. Formatted as a UUID. */
    chatGroupId: string;
    /**
     * Indicates the current state of the chat. There are six possible statuses:
     *
     * - `ACTIVE`: The chat is currently active and ongoing.
     *
     * - `USER_ENDED`: The chat was manually ended by the user.
     *
     * - `USER_TIMEOUT`: The chat ended due to a user-defined timeout.
     *
     * - `MAX_DURATION_TIMEOUT`: The chat ended because it reached the maximum allowed duration.
     *
     * - `INACTIVITY_TIMEOUT`: The chat ended due to an inactivity timeout.
     *
     * - `ERROR`: The chat ended unexpectedly due to an error.
     */
    status: Hume.empathicVoice.ReturnChatStatus;
    /** Time at which the Chat started. Measured in seconds since the Unix epoch. */
    startTimestamp: number;
    /** Time at which the Chat ended. Measured in seconds since the Unix epoch. */
    endTimestamp?: number;
    /** The total number of events currently in this chat. */
    eventCount?: number;
    /** Stringified JSON with additional metadata about the chat. */
    metadata?: string;
    config?: Hume.empathicVoice.ReturnConfigSpec;
}

```

# src/api/resources/empathicVoice/types/ReturnChatPagedEventsStatus.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the current state of the chat. There are six possible statuses:
 *
 * - `ACTIVE`: The chat is currently active and ongoing.
 *
 * - `USER_ENDED`: The chat was manually ended by the user.
 *
 * - `USER_TIMEOUT`: The chat ended due to a user-defined timeout.
 *
 * - `MAX_DURATION_TIMEOUT`: The chat ended because it reached the maximum allowed duration.
 *
 * - `INACTIVITY_TIMEOUT`: The chat ended due to an inactivity timeout.
 *
 * - `ERROR`: The chat ended unexpectedly due to an error.
 */
export type ReturnChatPagedEventsStatus =
    | "ACTIVE"
    | "USER_ENDED"
    | "USER_TIMEOUT"
    | "MAX_DURATION_TIMEOUT"
    | "INACTIVITY_TIMEOUT"
    | "ERROR";

export const ReturnChatPagedEventsStatus = {
    Active: "ACTIVE",
    UserEnded: "USER_ENDED",
    UserTimeout: "USER_TIMEOUT",
    MaxDurationTimeout: "MAX_DURATION_TIMEOUT",
    InactivityTimeout: "INACTIVITY_TIMEOUT",
    Error: "ERROR",
} as const;

```

# src/api/resources/empathicVoice/types/ErrorLevel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ErrorLevel = "warn";

```

# src/api/resources/empathicVoice/types/PostedLanguageModelModelProvider.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The provider of the supplemental language model.
 */
export type PostedLanguageModelModelProvider =
    | "OPEN_AI"
    | "CUSTOM_LANGUAGE_MODEL"
    | "ANTHROPIC"
    | "FIREWORKS"
    | "GROQ"
    | "GOOGLE";

export const PostedLanguageModelModelProvider = {
    OpenAi: "OPEN_AI",
    CustomLanguageModel: "CUSTOM_LANGUAGE_MODEL",
    Anthropic: "ANTHROPIC",
    Fireworks: "FIREWORKS",
    Groq: "GROQ",
    Google: "GOOGLE",
} as const;

```

# src/api/resources/empathicVoice/types/PostedEllmModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A eLLM model configuration to be posted to the server
 */
export interface PostedEllmModel {
    /**
     * Boolean indicating if the eLLM is allowed to generate short responses.
     *
     * If omitted, short responses from the eLLM are enabled by default.
     */
    allowShortResponses?: boolean;
}

```

# src/api/resources/empathicVoice/types/ReturnPagedChatsPaginationDirection.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the order in which the paginated results are presented, based on their creation date.
 *
 * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
 */
export type ReturnPagedChatsPaginationDirection = "ASC" | "DESC";

export const ReturnPagedChatsPaginationDirection = {
    Asc: "ASC",
    Desc: "DESC",
} as const;

```

# src/api/resources/empathicVoice/types/BuiltinToolConfig.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface BuiltinToolConfig {
    name: Hume.empathicVoice.BuiltInTool;
    /** Optional text passed to the supplemental LLM if the tool call fails. The LLM then uses this text to generate a response back to the user, ensuring continuity in the conversation. */
    fallbackContent?: string;
}

```

# src/api/resources/empathicVoice/types/ToolType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ToolType = "builtin" | "function";

export const ToolType = {
    Builtin: "builtin",
    Function: "function",
} as const;

```

# src/api/resources/empathicVoice/types/PostedEventMessageSpecs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * Collection of event messages returned by the server.
 *
 * Event messages are sent by the server when specific events occur during a chat session. These messages are used to configure behaviors for EVI, such as controlling how EVI starts a new conversation.
 */
export interface PostedEventMessageSpecs {
    /** Specifies the initial message EVI provides when a new chat is started, such as a greeting or welcome message. */
    onNewChat?: Hume.empathicVoice.PostedEventMessageSpec;
    /**
     * Specifies the message EVI provides when the chat is about to be disconnected due to a user inactivity timeout, such as a message mentioning a lack of user input for a period of time.
     *
     * Enabling an inactivity message allows developers to use this message event for "checking in" with the user if they are not responding to see if they are still active.
     *
     * If the user does not respond in the number of seconds specified in the `inactivity_timeout` field, then EVI will say the message and the user has 15 seconds to respond. If they respond in time, the conversation will continue; if not, the conversation will end.
     *
     * However, if the inactivity message is not enabled, then reaching the inactivity timeout will immediately end the connection.
     */
    onInactivityTimeout?: Hume.empathicVoice.PostedEventMessageSpec;
    /** Specifies the message EVI provides when the chat is disconnected due to reaching the maximum chat duration, such as a message mentioning the time limit for the chat has been reached. */
    onMaxDurationTimeout?: Hume.empathicVoice.PostedEventMessageSpec;
}

```

# src/api/resources/empathicVoice/types/ReturnTimeoutSpecs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * Collection of timeout specifications returned by the server.
 *
 * Timeouts are sent by the server when specific time-based events occur during a chat session. These specifications set the inactivity timeout and the maximum duration an EVI WebSocket connection can stay open before it is automatically disconnected.
 */
export interface ReturnTimeoutSpecs {
    /**
     * Specifies the duration of user inactivity (in seconds) after which the EVI WebSocket connection will be automatically disconnected. Default is 600 seconds (10 minutes).
     *
     * Accepts a minimum value of 1 second and a maximum value of 1,800 seconds.
     */
    inactivity: Hume.empathicVoice.ReturnTimeoutSpec;
    /**
     * Specifies the maximum allowed duration (in seconds) for an EVI WebSocket connection before it is automatically disconnected. Default is 1,800 seconds (30 minutes).
     *
     * Accepts a minimum value of 1 second and a maximum value of 1,800 seconds.
     */
    maxDuration: Hume.empathicVoice.ReturnTimeoutSpec;
}

```

# src/api/resources/empathicVoice/types/ReturnPromptVersionType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Versioning method for a Prompt. Either `FIXED` for using a fixed version number or `LATEST` for auto-updating to the latest version.
 */
export type ReturnPromptVersionType = "FIXED" | "LATEST";

export const ReturnPromptVersionType = {
    Fixed: "FIXED",
    Latest: "LATEST",
} as const;

```

# src/api/resources/empathicVoice/types/ReturnChatEventRole.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The role of the entity which generated the Chat Event. There are four possible values:
 *
 * - `USER`: The user, capable of sending user messages and interruptions.
 *
 * - `AGENT`: The assistant, capable of sending agent messages.
 *
 * - `SYSTEM`: The backend server, capable of transmitting errors.
 *
 * - `TOOL`: The function calling mechanism.
 */
export type ReturnChatEventRole = "USER" | "AGENT" | "SYSTEM" | "TOOL";

export const ReturnChatEventRole = {
    User: "USER",
    Agent: "AGENT",
    System: "SYSTEM",
    Tool: "TOOL",
} as const;

```

# src/api/resources/empathicVoice/types/ReturnPagedUserDefinedTools.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A paginated list of user defined tool versions returned from the server
 */
export interface ReturnPagedUserDefinedTools {
    /**
     * The page number of the returned list.
     *
     * This value corresponds to the `page_number` parameter specified in the request. Pagination uses zero-based indexing.
     */
    pageNumber: number;
    /**
     * The maximum number of items returned per page.
     *
     * This value corresponds to the `page_size` parameter specified in the request.
     */
    pageSize: number;
    /** The total number of pages in the collection. */
    totalPages: number;
    /** List of tools returned for the specified `page_number` and `page_size`. */
    toolsPage: (Hume.empathicVoice.ReturnUserDefinedTool | undefined)[];
}

```

# src/api/resources/empathicVoice/types/PostedPromptSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A Prompt associated with this Config.
 */
export interface PostedPromptSpec {
    version?: unknown;
}

```

# src/api/resources/empathicVoice/types/ReturnPagedConfigs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A paginated list of config versions returned from the server
 */
export interface ReturnPagedConfigs {
    /**
     * The page number of the returned list.
     *
     * This value corresponds to the `page_number` parameter specified in the request. Pagination uses zero-based indexing.
     */
    pageNumber?: number;
    /**
     * The maximum number of items returned per page.
     *
     * This value corresponds to the `page_size` parameter specified in the request.
     */
    pageSize?: number;
    /** The total number of pages in the collection. */
    totalPages: number;
    /** List of configs returned for the specified `page_number` and `page_size`. */
    configsPage?: Hume.empathicVoice.ReturnConfig[];
}

```

# src/api/resources/empathicVoice/types/ReturnEllmModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A specific eLLM Model configuration
 */
export interface ReturnEllmModel {
    /**
     * Boolean indicating if the eLLM is allowed to generate short responses.
     *
     * If omitted, short responses from the eLLM are enabled by default.
     */
    allowShortResponses: boolean;
}

```

# src/api/resources/empathicVoice/types/ReturnPagedChatGroups.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A paginated list of chat_groups returned from the server
 */
export interface ReturnPagedChatGroups {
    /**
     * The page number of the returned list.
     *
     * This value corresponds to the `page_number` parameter specified in the request. Pagination uses zero-based indexing.
     */
    pageNumber: number;
    /**
     * The maximum number of items returned per page.
     *
     * This value corresponds to the `page_size` parameter specified in the request.
     */
    pageSize: number;
    /** The total number of pages in the collection. */
    totalPages: number;
    /**
     * Indicates the order in which the paginated results are presented, based on their creation date.
     *
     * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
     */
    paginationDirection: Hume.empathicVoice.ReturnPagedChatGroupsPaginationDirection;
    /** List of Chat Groups and their metadata returned for the specified `page_number` and `page_size`. */
    chatGroupsPage: Hume.empathicVoice.ReturnChatGroup[];
}

```

# src/api/resources/empathicVoice/types/FunctionCallResponseInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface FunctionCallResponseInput {
    type?: "function_call_response";
}

```

# src/api/resources/empathicVoice/types/ReturnBuiltinToolToolType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Type of Tool. Either `BUILTIN` for natively implemented tools, like web search, or `FUNCTION` for user-defined tools.
 */
export type ReturnBuiltinToolToolType = "BUILTIN" | "FUNCTION";

export const ReturnBuiltinToolToolType = {
    Builtin: "BUILTIN",
    Function: "FUNCTION",
} as const;

```

# src/api/resources/empathicVoice/types/ReturnChatEventType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Type of Chat Event. There are six possible values:
 *
 * - `SYSTEM_PROMPT`: Contains the system prompt for use in the session.
 *
 * - `USER_MESSAGE`: Contains the message sent by the user.
 *
 * - `USER_INTERRUPTION`: Contains an interruption made by the user while the agent is speaking.
 *
 * - `AGENT_MESSAGE`: Contains the assistant’s message, generated by Hume’s eLLM and supplemental LLM.
 *
 * - `FUNCTION_CALL`: Contains the invocation of a tool.
 *
 * - `FUNCTION_CALL_RESPONSE`: Contains the tool response.
 */
export type ReturnChatEventType =
    | "SYSTEM_PROMPT"
    | "USER_MESSAGE"
    | "USER_INTERRUPTION"
    | "AGENT_MESSAGE"
    | "FUNCTION_CALL"
    | "FUNCTION_CALL_RESPONSE";

export const ReturnChatEventType = {
    SystemPrompt: "SYSTEM_PROMPT",
    UserMessage: "USER_MESSAGE",
    UserInterruption: "USER_INTERRUPTION",
    AgentMessage: "AGENT_MESSAGE",
    FunctionCall: "FUNCTION_CALL",
    FunctionCallResponse: "FUNCTION_CALL_RESPONSE",
} as const;

```

# src/api/resources/empathicVoice/types/ToolCallMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * When provided, the output is a tool call.
 */
export interface ToolCallMessage {
    /** Name of the tool called. */
    name: string;
    /**
     * Parameters of the tool.
     *
     * These parameters define the inputs needed for the tool’s execution, including the expected data type and description for each input field. Structured as a stringified JSON schema, this format ensures the tool receives data in the expected format.
     */
    parameters: string;
    /**
     * The unique identifier for a specific tool call instance.
     *
     * This ID is used to track the request and response of a particular tool invocation, ensuring that the correct response is linked to the appropriate request.
     */
    toolCallId: string;
    /**
     * The type of message sent through the socket; for a Tool Call message, this must be `tool_call`.
     *
     * This message indicates that the supplemental LLM has detected a need to invoke the specified tool.
     */
    type: "tool_call";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** Type of tool called. Either `builtin` for natively implemented tools, like web search, or `function` for user-defined tools. */
    toolType?: Hume.empathicVoice.ToolType;
    /** Indicates whether a response to the tool call is required from the developer, either in the form of a [Tool Response message](/reference/empathic-voice-interface-evi/chat/chat#send.Tool%20Response%20Message.type) or a [Tool Error message](/reference/empathic-voice-interface-evi/chat/chat#send.Tool%20Error%20Message.type). */
    responseRequired: boolean;
}

```

# src/api/resources/empathicVoice/types/PostedUserDefinedToolSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A specific tool identifier to be posted to the server
 */
export interface PostedUserDefinedToolSpec {
    /** Identifier for a Tool. Formatted as a UUID. */
    id: string;
    /**
     * Version number for a Tool.
     *
     * Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.
     *
     * Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.
     */
    version?: number;
}

```

# src/api/resources/empathicVoice/types/ReturnUserDefinedToolVersionType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Versioning method for a Tool. Either `FIXED` for using a fixed version number or `LATEST` for auto-updating to the latest version.
 */
export type ReturnUserDefinedToolVersionType = "FIXED" | "LATEST";

export const ReturnUserDefinedToolVersionType = {
    Fixed: "FIXED",
    Latest: "LATEST",
} as const;

```

# src/api/resources/empathicVoice/types/ReturnPagedChats.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A paginated list of chats returned from the server
 */
export interface ReturnPagedChats {
    /**
     * The page number of the returned list.
     *
     * This value corresponds to the `page_number` parameter specified in the request. Pagination uses zero-based indexing.
     */
    pageNumber: number;
    /**
     * The maximum number of items returned per page.
     *
     * This value corresponds to the `page_size` parameter specified in the request.
     */
    pageSize: number;
    /** The total number of pages in the collection. */
    totalPages: number;
    /**
     * Indicates the order in which the paginated results are presented, based on their creation date.
     *
     * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
     */
    paginationDirection: Hume.empathicVoice.ReturnPagedChatsPaginationDirection;
    /** List of Chats and their metadata returned for the specified `page_number` and `page_size`. */
    chatsPage: Hume.empathicVoice.ReturnChat[];
}

```

# src/api/resources/empathicVoice/types/Role.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Role = "assistant" | "system" | "user" | "all" | "tool";

export const Role = {
    Assistant: "assistant",
    System: "system",
    User: "user",
    All: "all",
    Tool: "tool",
} as const;

```

# src/api/resources/empathicVoice/types/SessionSettings.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * Settings for this chat session.
 */
export interface SessionSettings {
    /**
     * The type of message sent through the socket; must be `session_settings` for our server to correctly identify and process it as a Session Settings message.
     *
     * Session settings are temporary and apply only to the current Chat session. These settings can be adjusted dynamically based on the requirements of each session to ensure optimal performance and user experience.
     *
     * For more information, please refer to the [Session Settings section](/docs/empathic-voice-interface-evi/configuration#session-settings) on the EVI Configuration page.
     */
    type: "session_settings";
    /**
     * Unique identifier for the session. Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions.
     *
     * If included, the response sent from Hume to your backend will include this ID. This allows you to correlate frontend users with their incoming messages.
     *
     * It is recommended to pass a `custom_session_id` if you are using a Custom Language Model. Please see our guide to [using a custom language model](/docs/empathic-voice-interface-evi/custom-language-model) with EVI to learn more.
     */
    customSessionId?: string;
    /**
     * Instructions used to shape EVI’s behavior, responses, and style for the session.
     *
     * When included in a Session Settings message, the provided Prompt overrides the existing one specified in the EVI configuration. If no Prompt was defined in the configuration, this Prompt will be the one used for the session.
     *
     * You can use the Prompt to define a specific goal or role for EVI, specifying how it should act or what it should focus on during the conversation. For example, EVI can be instructed to act as a customer support representative, a fitness coach, or a travel advisor, each with its own set of behaviors and response styles.
     *
     * For help writing a system prompt, see our [Prompting Guide](/docs/empathic-voice-interface-evi/prompting).
     */
    systemPrompt?: string;
    /**
     * Allows developers to inject additional context into the conversation, which is appended to the end of user messages for the session.
     *
     * When included in a Session Settings message, the provided context can be used to remind the LLM of its role in every user message, prevent it from forgetting important details, or add new relevant information to the conversation.
     *
     * Set to `null` to disable context injection.
     */
    context?: Hume.empathicVoice.Context;
    /**
     * Configuration details for the audio input used during the session. Ensures the audio is being correctly set up for processing.
     *
     * This optional field is only required when the audio input is encoded in PCM Linear 16 (16-bit, little-endian, signed PCM WAV data). For detailed instructions on how to configure session settings for PCM Linear 16 audio, please refer to the [Session Settings section](/docs/empathic-voice-interface-evi/configuration#session-settings) on the EVI Configuration page.
     */
    audio?: Hume.empathicVoice.AudioConfiguration;
    /**
     * Third party API key for the supplemental language model.
     *
     * When provided, EVI will use this key instead of Hume’s API key for the supplemental LLM. This allows you to bypass rate limits and utilize your own API key as needed.
     */
    languageModelApiKey?: string;
    /**
     * List of user-defined tools to enable for the session.
     *
     * Tools are resources used by EVI to perform various tasks, such as searching the web or calling external APIs. Built-in tools, like web search, are natively integrated, while user-defined tools are created and invoked by the user. To learn more, see our [Tool Use Guide](/docs/empathic-voice-interface-evi/tool-use).
     */
    tools?: Hume.empathicVoice.Tool[];
    /**
     * List of built-in tools to enable for the session.
     *
     * Tools are resources used by EVI to perform various tasks, such as searching the web or calling external APIs. Built-in tools, like web search, are natively integrated, while user-defined tools are created and invoked by the user. To learn more, see our [Tool Use Guide](/docs/empathic-voice-interface-evi/tool-use).
     *
     * Currently, the only built-in tool Hume provides is **Web Search**. When enabled, Web Search equips EVI with the ability to search the web for up-to-date information.
     */
    builtinTools?: Hume.empathicVoice.BuiltinToolConfig[];
    metadata?: Record<string, unknown>;
    /** Dynamic values that can be used to populate EVI prompts. */
    variables?: Record<string, string>;
}

```

# src/api/resources/empathicVoice/types/ReturnUserDefinedToolToolType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Type of Tool. Either `BUILTIN` for natively implemented tools, like web search, or `FUNCTION` for user-defined tools.
 */
export type ReturnUserDefinedToolToolType = "BUILTIN" | "FUNCTION";

export const ReturnUserDefinedToolToolType = {
    Builtin: "BUILTIN",
    Function: "FUNCTION",
} as const;

```

# src/api/resources/empathicVoice/types/ValidationErrorLocItem.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ValidationErrorLocItem = string | number;

```

# src/api/resources/empathicVoice/types/PostedTimeoutSpecsInactivity.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Specifies the duration of user inactivity (in seconds) after which the EVI WebSocket connection will be automatically disconnected. Default is 600 seconds (10 minutes).
 *
 * Accepts a minimum value of 1 second and a maximum value of 1,800 seconds.
 */
export interface PostedTimeoutSpecsInactivity {
    /**
     * Boolean indicating if this timeout is enabled.
     *
     * If set to false, EVI will not timeout due to a specified duration of user inactivity being reached. However, the conversation will eventually disconnect after 1,800 seconds (30 minutes), which is the maximum WebSocket duration limit for EVI.
     */
    enabled: boolean;
    /** Duration in seconds for the timeout (e.g. 600 seconds represents 10 minutes). */
    durationSecs?: number;
}

```

# src/api/resources/empathicVoice/types/ReturnChatPagedEvents.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A description of chat status with a paginated list of chat events returned from the server
 */
export interface ReturnChatPagedEvents {
    /** Identifier for a Chat. Formatted as a UUID. */
    id: string;
    /** Identifier for the Chat Group. Any chat resumed from this Chat will have the same `chat_group_id`. Formatted as a UUID. */
    chatGroupId: string;
    /**
     * Indicates the current state of the chat. There are six possible statuses:
     *
     * - `ACTIVE`: The chat is currently active and ongoing.
     *
     * - `USER_ENDED`: The chat was manually ended by the user.
     *
     * - `USER_TIMEOUT`: The chat ended due to a user-defined timeout.
     *
     * - `MAX_DURATION_TIMEOUT`: The chat ended because it reached the maximum allowed duration.
     *
     * - `INACTIVITY_TIMEOUT`: The chat ended due to an inactivity timeout.
     *
     * - `ERROR`: The chat ended unexpectedly due to an error.
     */
    status: Hume.empathicVoice.ReturnChatPagedEventsStatus;
    /** Time at which the Chat started. Measured in seconds since the Unix epoch. */
    startTimestamp: number;
    /** Time at which the Chat ended. Measured in seconds since the Unix epoch. */
    endTimestamp?: number;
    /**
     * Indicates the order in which the paginated results are presented, based on their creation date.
     *
     * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
     */
    paginationDirection: Hume.empathicVoice.ReturnChatPagedEventsPaginationDirection;
    /** List of Chat Events for the specified `page_number` and `page_size`. */
    eventsPage: Hume.empathicVoice.ReturnChatEvent[];
    /** Stringified JSON with additional metadata about the chat. */
    metadata?: string;
    /**
     * The page number of the returned list.
     *
     * This value corresponds to the `page_number` parameter specified in the request. Pagination uses zero-based indexing.
     */
    pageNumber: number;
    /**
     * The maximum number of items returned per page.
     *
     * This value corresponds to the `page_size` parameter specified in the request.
     */
    pageSize: number;
    /** The total number of pages in the collection. */
    totalPages: number;
    config?: Hume.empathicVoice.ReturnConfigSpec;
}

```

# src/api/resources/empathicVoice/types/ExtendedVoiceArgs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface ExtendedVoiceArgs {
    text: string;
    useS2A?: boolean;
    voiceArgs: Hume.empathicVoice.VoiceArgs;
}

```

# src/api/resources/empathicVoice/types/ResumeAssistantMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Resume responses from EVI. Chat history sent while paused will now be sent.
 */
export interface ResumeAssistantMessage {
    /**
     * The type of message sent through the socket; must be `resume_assistant_message` for our server to correctly identify and process it as a Resume Assistant message.
     *
     * Upon resuming, if any audio input was sent during the pause, EVI will retain context from all messages sent but only respond to the last user message. (e.g., If you ask EVI two questions while paused and then send a `resume_assistant_message`, EVI will respond to the second question and have added the first question to its conversation context.)
     */
    type: "resume_assistant_message";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
}

```

# src/api/resources/empathicVoice/types/EmotionScores.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface EmotionScores {
    admiration: number;
    adoration: number;
    aestheticAppreciation: number;
    amusement: number;
    anger: number;
    anxiety: number;
    awe: number;
    awkwardness: number;
    boredom: number;
    calmness: number;
    concentration: number;
    confusion: number;
    contemplation: number;
    contempt: number;
    contentment: number;
    craving: number;
    desire: number;
    determination: number;
    disappointment: number;
    disgust: number;
    distress: number;
    doubt: number;
    ecstasy: number;
    embarrassment: number;
    empathicPain: number;
    entrancement: number;
    envy: number;
    excitement: number;
    fear: number;
    guilt: number;
    horror: number;
    interest: number;
    joy: number;
    love: number;
    nostalgia: number;
    pain: number;
    pride: number;
    realization: number;
    relief: number;
    romance: number;
    sadness: number;
    satisfaction: number;
    shame: number;
    surpriseNegative: number;
    surprisePositive: number;
    sympathy: number;
    tiredness: number;
    triumph: number;
}

```

# src/api/resources/empathicVoice/types/PostedLanguageModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A LanguageModel to be posted to the server
 */
export interface PostedLanguageModel {
    /** The provider of the supplemental language model. */
    modelProvider?: Hume.empathicVoice.PostedLanguageModelModelProvider;
    /** String that specifies the language model to use with `model_provider`. */
    modelResource?: string;
    /**
     * The model temperature, with values between 0 to 1 (inclusive).
     *
     * Controls the randomness of the LLM’s output, with values closer to 0 yielding focused, deterministic responses and values closer to 1 producing more creative, diverse responses.
     */
    temperature?: number;
}

```

# src/api/resources/empathicVoice/types/ReturnBuiltinTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A specific builtin tool version returned from the server
 */
export interface ReturnBuiltinTool {
    /** Type of Tool. Either `BUILTIN` for natively implemented tools, like web search, or `FUNCTION` for user-defined tools. */
    toolType: Hume.empathicVoice.ReturnBuiltinToolToolType;
    /** Name applied to all versions of a particular Tool. */
    name: string;
    /** Optional text passed to the supplemental LLM in place of the tool call result. The LLM then uses this text to generate a response back to the user, ensuring continuity in the conversation if the Tool errors. */
    fallbackContent?: string;
}

```

# src/api/resources/empathicVoice/types/UserInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * User text to insert into the conversation.
 */
export interface UserInput {
    /** The type of message sent through the socket; must be `user_input` for our server to correctly identify and process it as a User Input message. */
    type: "user_input";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /**
     * User text to insert into the conversation. Text sent through a User Input message is treated as the user’s speech to EVI. EVI processes this input and provides a corresponding response.
     *
     * Expression measurement results are not available for User Input messages, as the prosody model relies on audio input and cannot process text alone.
     */
    text: string;
}

```

# src/api/resources/empathicVoice/types/ReturnChatGroup.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A description of chat_group and its status
 */
export interface ReturnChatGroup {
    /** Identifier for the Chat Group. Any Chat resumed from this Chat Group will have the same `chat_group_id`. Formatted as a UUID. */
    id: string;
    /** Time at which the first Chat in this Chat Group was created. Measured in seconds since the Unix epoch. */
    firstStartTimestamp: number;
    /** Time at which the most recent Chat in this Chat Group was created. Measured in seconds since the Unix epoch. */
    mostRecentStartTimestamp: number;
    /** The `chat_id` of the most recent Chat in this Chat Group. Formatted as a UUID. */
    mostRecentChatId?: string;
    /** The total number of Chats in this Chat Group. */
    numChats: number;
    /** Denotes whether there is an active Chat associated with this Chat Group. */
    active?: boolean;
}

```

# src/api/resources/empathicVoice/types/ReturnCustomVoiceBaseVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The base voice used to create the Custom Voice.
 */
export type ReturnCustomVoiceBaseVoice = "ITO" | "KORA" | "DACHER" | "AURA" | "FINN" | "STELLA" | "WHIMSY";

export const ReturnCustomVoiceBaseVoice = {
    Ito: "ITO",
    Kora: "KORA",
    Dacher: "DACHER",
    Aura: "AURA",
    Finn: "FINN",
    Stella: "STELLA",
    Whimsy: "WHIMSY",
} as const;

```

# src/api/resources/empathicVoice/types/ReturnLanguageModelModelProvider.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The provider of the supplemental language model.
 */
export type ReturnLanguageModelModelProvider =
    | "OPEN_AI"
    | "CUSTOM_LANGUAGE_MODEL"
    | "ANTHROPIC"
    | "FIREWORKS"
    | "GROQ"
    | "GOOGLE";

export const ReturnLanguageModelModelProvider = {
    OpenAi: "OPEN_AI",
    CustomLanguageModel: "CUSTOM_LANGUAGE_MODEL",
    Anthropic: "ANTHROPIC",
    Fireworks: "FIREWORKS",
    Groq: "GROQ",
    Google: "GOOGLE",
} as const;

```

# src/api/resources/empathicVoice/types/ReturnPagedPrompts.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A paginated list of prompt versions returned from the server
 */
export interface ReturnPagedPrompts {
    /**
     * The page number of the returned list.
     *
     * This value corresponds to the `page_number` parameter specified in the request. Pagination uses zero-based indexing.
     */
    pageNumber: number;
    /**
     * The maximum number of items returned per page.
     *
     * This value corresponds to the `page_size` parameter specified in the request.
     */
    pageSize: number;
    /** The total number of pages in the collection. */
    totalPages: number;
    /** List of prompts returned for the specified `page_number` and `page_size`. */
    promptsPage: (Hume.empathicVoice.ReturnPrompt | undefined)[];
}

```

# src/api/resources/empathicVoice/types/TextInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TextInput {
    type?: "text_input";
}

```

# src/api/resources/empathicVoice/types/HttpValidationError.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface HttpValidationError {
    detail?: Hume.empathicVoice.ValidationError[];
}

```

# src/api/resources/empathicVoice/types/ReturnChatPagedEventsPaginationDirection.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the order in which the paginated results are presented, based on their creation date.
 *
 * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
 */
export type ReturnChatPagedEventsPaginationDirection = "ASC" | "DESC";

export const ReturnChatPagedEventsPaginationDirection = {
    Asc: "ASC",
    Desc: "DESC",
} as const;

```

# src/api/resources/empathicVoice/types/JsonMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export type JsonMessage =
    | Hume.empathicVoice.AssistantEnd
    | Hume.empathicVoice.AssistantMessage
    | Hume.empathicVoice.ChatMetadata
    | Hume.empathicVoice.WebSocketError
    | Hume.empathicVoice.UserInterruption
    | Hume.empathicVoice.UserMessage
    | Hume.empathicVoice.ToolCallMessage
    | Hume.empathicVoice.ToolResponseMessage
    | Hume.empathicVoice.ToolErrorMessage;

```

# src/api/resources/empathicVoice/types/ReturnCustomVoiceParameters.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The specified attributes of a Custom Voice. If a parameter's value is `0` (default), it will not be included in the response.
 */
export interface ReturnCustomVoiceParameters {
    /**
     * The vocalization of gender, ranging between masculine and feminine.
     *
     * The default value is `0`, with a minimum of `-100` (more masculine) and a maximum of `100` (more feminine). A value of `0` leaves this parameter unchanged from the base voice.
     */
    gender?: number;
    /**
     * The texture of the voice, ranging between bright and husky.
     *
     * The default value is `0`, with a minimum of `-100` (brighter) and a maximum of `100` (huskier). A value of `0` leaves this parameter unchanged from the base voice.
     */
    huskiness?: number;
    /**
     * The openness of the voice, ranging between resonant and nasal.
     *
     * The default value is `0`, with a minimum of `-100` (more resonant) and a maximum of `100` (more nasal). A value of `0` leaves this parameter unchanged from the base voice.
     */
    nasality?: number;
    /**
     * The frequency of the voice, ranging between low and high.
     *
     * The default value is `0`, with a minimum of `-100` (lower) and a maximum of `100` (higher). A value of `0` leaves this parameter unchanged from the base voice.
     */
    pitch?: number;
}

```

# src/api/resources/empathicVoice/types/PostedCustomVoiceBaseVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Specifies the base voice used to create the Custom Voice.
 */
export type PostedCustomVoiceBaseVoice = "ITO" | "KORA" | "DACHER" | "AURA" | "FINN" | "STELLA" | "WHIMSY";

export const PostedCustomVoiceBaseVoice = {
    Ito: "ITO",
    Kora: "KORA",
    Dacher: "DACHER",
    Aura: "AURA",
    Finn: "FINN",
    Stella: "STELLA",
    Whimsy: "WHIMSY",
} as const;

```

# src/api/resources/empathicVoice/types/ReturnChatGroupPagedChats.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A description of chat_group and its status with a paginated list of each chat in the chat_group
 */
export interface ReturnChatGroupPagedChats {
    /** Identifier for the Chat Group. Any Chat resumed from this Chat Group will have the same `chat_group_id`. Formatted as a UUID. */
    id: string;
    /** Time at which the first Chat in this Chat Group was created. Measured in seconds since the Unix epoch. */
    firstStartTimestamp: number;
    /** Time at which the most recent Chat in this Chat Group was created. Measured in seconds since the Unix epoch. */
    mostRecentStartTimestamp: number;
    /** The total number of Chats associated with this Chat Group. */
    numChats: number;
    /**
     * The page number of the returned list.
     *
     * This value corresponds to the `page_number` parameter specified in the request. Pagination uses zero-based indexing.
     */
    pageNumber: number;
    /**
     * The maximum number of items returned per page.
     *
     * This value corresponds to the `page_size` parameter specified in the request.
     */
    pageSize: number;
    /** The total number of pages in the collection. */
    totalPages: number;
    /**
     * Indicates the order in which the paginated results are presented, based on their creation date.
     *
     * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
     */
    paginationDirection: Hume.empathicVoice.ReturnChatGroupPagedChatsPaginationDirection;
    /** List of Chats for the specified `page_number` and `page_size`. */
    chatsPage: Hume.empathicVoice.ReturnChat[];
    /** Denotes whether there is an active Chat associated with this Chat Group. */
    active?: boolean;
}

```

# src/api/resources/empathicVoice/types/AudioConfiguration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface AudioConfiguration {
    /** Encoding format of the audio input, such as `linear16`. */
    encoding: Hume.empathicVoice.Encoding;
    /** Number of audio channels. */
    channels: number;
    /** Audio sample rate. Number of samples per second in the audio input, measured in Hertz. */
    sampleRate: number;
}

```

# src/api/resources/empathicVoice/types/ValidationError.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface ValidationError {
    loc: Hume.empathicVoice.ValidationErrorLocItem[];
    msg: string;
    type: string;
}

```

# src/api/resources/empathicVoice/types/ReturnEventMessageSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A specific event message configuration to be returned from the server
 */
export interface ReturnEventMessageSpec {
    /**
     * Boolean indicating if this event message is enabled.
     *
     * If set to `true`, a message will be sent when the circumstances for the specific event are met.
     */
    enabled: boolean;
    /** Text to use as the event message when the corresponding event occurs. If no text is specified, EVI will generate an appropriate message based on its current context and the system prompt. */
    text?: string;
}

```

# src/api/resources/empathicVoice/types/ReturnActiveChatCount.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A description of current chat chat sessions for a user
 */
export interface ReturnActiveChatCount {
    /** The timestamp for when chat status was measured. Formatted as a Unix epoch milliseconds. */
    timestamp: number;
    /** The total number of active chats for this user. */
    totalUserActiveChats: number;
    /** The maximum number of concurrent active chats for this user. */
    maxAllowedActiveChats?: number;
    /** Boolean indicating if the user is allowed to start more chats. */
    moreActiveChatsAllowed: boolean;
    /** Optional List of chat counts per tag. */
    perTag?: (Hume.empathicVoice.ReturnActiveChatCountPerTag | undefined)[];
}

```

# src/api/resources/empathicVoice/types/PostedTimeoutSpecs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * Collection of timeout specifications returned by the server.
 *
 * Timeouts are sent by the server when specific time-based events occur during a chat session. These specifications set the inactivity timeout and the maximum duration an EVI WebSocket connection can stay open before it is automatically disconnected.
 */
export interface PostedTimeoutSpecs {
    /**
     * Specifies the duration of user inactivity (in seconds) after which the EVI WebSocket connection will be automatically disconnected. Default is 600 seconds (10 minutes).
     *
     * Accepts a minimum value of 1 second and a maximum value of 1,800 seconds.
     */
    inactivity?: Hume.empathicVoice.PostedTimeoutSpecsInactivity;
    /**
     * Specifies the maximum allowed duration (in seconds) for an EVI WebSocket connection before it is automatically disconnected. Default is 1,800 seconds (30 minutes).
     *
     * Accepts a minimum value of 1 second and a maximum value of 1,800 seconds.
     */
    maxDuration?: Hume.empathicVoice.PostedTimeoutSpecsMaxDuration;
}

```

# src/api/resources/empathicVoice/types/ChatMessageToolResult.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * Function call response from client.
 */
export type ChatMessageToolResult = Hume.empathicVoice.ToolResponseMessage | Hume.empathicVoice.ToolErrorMessage;

```

# src/api/resources/empathicVoice/types/PostedBuiltinToolName.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Name of the built-in tool to use. Hume supports the following built-in tools:
 *
 * - **web_search:** enables EVI to search the web for up-to-date information when applicable.
 * - **hang_up:** closes the WebSocket connection when appropriate (e.g., after detecting a farewell in the conversation).
 *
 * For more information, see our guide on [using built-in tools](/docs/empathic-voice-interface-evi/tool-use#using-built-in-tools).
 */
export type PostedBuiltinToolName = "web_search" | "hang_up";

export const PostedBuiltinToolName = {
    WebSearch: "web_search",
    HangUp: "hang_up",
} as const;

```

# src/api/resources/empathicVoice/types/ReturnPrompt.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A Prompt associated with this Config.
 */
export interface ReturnPrompt {
    /** Identifier for a Prompt. Formatted as a UUID. */
    id: string;
    /**
     * Version number for a Prompt.
     *
     * Prompts, Configs, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine prompts and revert to previous versions if needed.
     *
     * Version numbers are integer values representing different iterations of the Prompt. Each update to the Prompt increments its version number.
     */
    version: number;
    /** Versioning method for a Prompt. Either `FIXED` for using a fixed version number or `LATEST` for auto-updating to the latest version. */
    versionType: Hume.empathicVoice.ReturnPromptVersionType;
    /** An optional description of the Prompt version. */
    versionDescription?: string;
    /** Name applied to all versions of a particular Prompt. */
    name: string;
    /** Time at which the Prompt was created. Measured in seconds since the Unix epoch. */
    createdOn: number;
    /** Time at which the Prompt was last modified. Measured in seconds since the Unix epoch. */
    modifiedOn: number;
    /**
     * Instructions used to shape EVI’s behavior, responses, and style.
     *
     * You can use the Prompt to define a specific goal or role for EVI, specifying how it should act or what it should focus on during the conversation. For example, EVI can be instructed to act as a customer support representative, a fitness coach, or a travel advisor, each with its own set of behaviors and response styles.
     *
     * For help writing a system prompt, see our [Prompting Guide](/docs/empathic-voice-interface-evi/prompting).
     */
    text: string;
}

```

# src/api/resources/empathicVoice/types/PostedConfigPromptSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Identifies which prompt to use in a a config OR how to create a new prompt to use in the config
 */
export interface PostedConfigPromptSpec {
    /** Identifier for a Prompt. Formatted as a UUID. */
    id?: string;
    /** Version number for a Prompt. Version numbers should be integers. The combination of configId and version number is unique. */
    version?: number;
    /** Text used to create a new prompt for a particular config. */
    text?: string;
}

```

# src/api/resources/empathicVoice/types/ReturnCustomVoice.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A Custom Voice specification associated with this Config.
 */
export interface ReturnCustomVoice {
    /** Identifier for a Custom Voice. Formatted as a UUID. */
    id: string;
    /**
     * Version number for a Custom Voice.
     *
     * Custom Voices, Prompts, Configs, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine configurations and revert to previous versions if needed.
     *
     * Version numbers are integer values representing different iterations of the Custom Voice. Each update to the Custom Voice increments its version number.
     */
    version: number;
    /** The name of the Custom Voice. Maximum length of 75 characters. */
    name: string;
    /** Time at which the Custom Voice was created. Measured in seconds since the Unix epoch. */
    createdOn: number;
    /** Time at which the Custom Voice was last modified. Measured in seconds since the Unix epoch. */
    modifiedOn: number;
    /** The base voice used to create the Custom Voice. */
    baseVoice: Hume.empathicVoice.ReturnCustomVoiceBaseVoice;
    /** The name of the parameter model used to define which attributes are used by the `parameters` field. Currently, only `20240715-4parameter` is supported as the parameter model. */
    parameterModel: "20240715-4parameter";
    /** The specified attributes of a Custom Voice. If a parameter's value is `0` (default), it will not be included in the response. */
    parameters: Hume.empathicVoice.ReturnCustomVoiceParameters;
}

```

# src/api/resources/empathicVoice/types/Encoding.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Encoding = "linear16";

```

# src/api/resources/empathicVoice/types/ReturnPagedCustomVoices.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A paginated list of custom voices returned from the server
 */
export interface ReturnPagedCustomVoices {
    /**
     * The page number of the returned list.
     *
     * This value corresponds to the `page_number` parameter specified in the request. Pagination uses zero-based indexing.
     */
    pageNumber: number;
    /**
     * The maximum number of items returned per page.
     *
     * This value corresponds to the `page_size` parameter specified in the request.
     */
    pageSize: number;
    /** The total number of pages in the collection. */
    totalPages: number;
    /** List of Custom Voices for the specified `page_number` and `page_size`. */
    customVoicesPage: Hume.empathicVoice.ReturnCustomVoice[];
}

```

# src/api/resources/empathicVoice/types/ChatMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface ChatMessage {
    /** Role of who is providing the message. */
    role: Hume.empathicVoice.Role;
    /** Transcript of the message. */
    content?: string;
    /** Function call name and arguments. */
    toolCall?: Hume.empathicVoice.ToolCallMessage;
    /** Function call response from client. */
    toolResult?: Hume.empathicVoice.ChatMessageToolResult;
}

```

# src/api/resources/empathicVoice/types/ReturnTimeoutSpec.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A specific timeout configuration to be returned from the server
 */
export interface ReturnTimeoutSpec {
    /**
     * Boolean indicating if this timeout is enabled.
     *
     * If set to false, EVI will not timeout due to a specified duration being reached. However, the conversation will eventually disconnect after 1,800 seconds (30 minutes), which is the maximum WebSocket duration limit for EVI.
     */
    enabled: boolean;
    /** Duration in seconds for the timeout (e.g. 600 seconds represents 10 minutes). */
    durationSecs?: number;
}

```

# src/api/resources/empathicVoice/types/ReturnChatGroupPagedEventsPaginationDirection.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the order in which the paginated results are presented, based on their creation date.
 *
 * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
 */
export type ReturnChatGroupPagedEventsPaginationDirection = "ASC" | "DESC";

export const ReturnChatGroupPagedEventsPaginationDirection = {
    Asc: "ASC",
    Desc: "DESC",
} as const;

```

# src/api/resources/empathicVoice/types/ReturnChatGroupPagedEvents.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A paginated list of chat events that occurred across chats in this chat_group from the server
 */
export interface ReturnChatGroupPagedEvents {
    /** Identifier for the Chat Group. Any Chat resumed from this Chat Group will have the same `chat_group_id`. Formatted as a UUID. */
    id: string;
    /**
     * The page number of the returned list.
     *
     * This value corresponds to the `page_number` parameter specified in the request. Pagination uses zero-based indexing.
     */
    pageNumber: number;
    /**
     * The maximum number of items returned per page.
     *
     * This value corresponds to the `page_size` parameter specified in the request.
     */
    pageSize: number;
    /** The total number of pages in the collection. */
    totalPages: number;
    /**
     * Indicates the order in which the paginated results are presented, based on their creation date.
     *
     * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
     */
    paginationDirection: Hume.empathicVoice.ReturnChatGroupPagedEventsPaginationDirection;
    /** List of Chat Events for the specified `page_number` and `page_size`. */
    eventsPage: Hume.empathicVoice.ReturnChatEvent[];
}

```

# src/api/resources/empathicVoice/types/UserMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * When provided, the output is a user message.
 */
export interface UserMessage {
    /**
     * The type of message sent through the socket; for a User Message, this must be `user_message`.
     *
     * This message contains both a transcript of the user’s input and the expression measurement predictions if the input was sent as an [Audio Input message](/reference/empathic-voice-interface-evi/chat/chat#send.Audio%20Input.type). Expression measurement predictions are not provided for a [User Input message](/reference/empathic-voice-interface-evi/chat/chat#send.User%20Input.type), as the prosody model relies on audio input and cannot process text alone.
     */
    type: "user_message";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** Transcript of the message. */
    message: Hume.empathicVoice.ChatMessage;
    /** Inference model results. */
    models: Hume.empathicVoice.Inference;
    /** Start and End time of user message. */
    time: Hume.empathicVoice.MillisecondInterval;
    /** Indicates if this message was inserted into the conversation as text from a [User Input](/reference/empathic-voice-interface-evi/chat/chat#send.User%20Input.text) message. */
    fromText: boolean;
}

```

# src/api/resources/empathicVoice/types/ReturnPagedChatGroupsPaginationDirection.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the order in which the paginated results are presented, based on their creation date.
 *
 * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
 */
export type ReturnPagedChatGroupsPaginationDirection = "ASC" | "DESC";

export const ReturnPagedChatGroupsPaginationDirection = {
    Asc: "ASC",
    Desc: "DESC",
} as const;

```

# src/api/resources/empathicVoice/types/BuiltInTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Name of the built-in tool. Set to `web_search` to equip EVI with the built-in Web Search tool.
 */
export type BuiltInTool = "web_search" | "hang_up";

export const BuiltInTool = {
    WebSearch: "web_search",
    HangUp: "hang_up",
} as const;

```

# src/api/resources/empathicVoice/types/PostedTimeoutSpecsMaxDuration.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Specifies the maximum allowed duration (in seconds) for an EVI WebSocket connection before it is automatically disconnected. Default is 1,800 seconds (30 minutes).
 *
 * Accepts a minimum value of 1 second and a maximum value of 1,800 seconds.
 */
export interface PostedTimeoutSpecsMaxDuration {
    /**
     * Boolean indicating if this timeout is enabled.
     *
     * If set to false, EVI will not timeout due to a specified maximum duration being reached. However, the conversation will eventually disconnect after 1,800 seconds (30 minutes), which is the maximum WebSocket duration limit for EVI.
     */
    enabled: boolean;
    /** Duration in seconds for the timeout (e.g. 600 seconds represents 10 minutes). */
    durationSecs?: number;
}

```

# src/api/resources/empathicVoice/types/Inference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface Inference {
    /**
     * Prosody model inference results.
     *
     * EVI uses the prosody model to measure 48 emotions related to speech and vocal characteristics within a given expression.
     */
    prosody?: Hume.empathicVoice.ProsodyInference;
}

```

# src/api/resources/empathicVoice/types/PostedBuiltinTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A configuration of a built-in tool to be posted to the server
 */
export interface PostedBuiltinTool {
    /**
     * Name of the built-in tool to use. Hume supports the following built-in tools:
     *
     * - **web_search:** enables EVI to search the web for up-to-date information when applicable.
     * - **hang_up:** closes the WebSocket connection when appropriate (e.g., after detecting a farewell in the conversation).
     *
     * For more information, see our guide on [using built-in tools](/docs/empathic-voice-interface-evi/tool-use#using-built-in-tools).
     */
    name: Hume.empathicVoice.PostedBuiltinToolName;
    /** Optional text passed to the supplemental LLM in place of the tool call result. The LLM then uses this text to generate a response back to the user, ensuring continuity in the conversation if the Tool errors. */
    fallbackContent?: string;
}

```

# src/api/resources/empathicVoice/types/index.ts

```typescript
export * from "./ErrorResponse";
export * from "./ReturnUserDefinedToolToolType";
export * from "./ReturnUserDefinedToolVersionType";
export * from "./ReturnUserDefinedTool";
export * from "./ReturnPromptVersionType";
export * from "./ReturnPrompt";
export * from "./PostedCustomVoiceBaseVoice";
export * from "./PostedCustomVoiceParameters";
export * from "./PostedCustomVoice";
export * from "./ReturnCustomVoiceBaseVoice";
export * from "./ReturnCustomVoiceParameters";
export * from "./ReturnCustomVoice";
export * from "./PostedBuiltinToolName";
export * from "./PostedBuiltinTool";
export * from "./PostedConfigPromptSpec";
export * from "./PostedEllmModel";
export * from "./PostedEventMessageSpec";
export * from "./PostedEventMessageSpecs";
export * from "./PostedLanguageModelModelProvider";
export * from "./PostedLanguageModel";
export * from "./PostedTimeoutSpec";
export * from "./PostedTimeoutSpecsInactivity";
export * from "./PostedTimeoutSpecsMaxDuration";
export * from "./PostedTimeoutSpecs";
export * from "./PostedUserDefinedToolSpec";
export * from "./PostedVoice";
export * from "./ReturnBuiltinToolToolType";
export * from "./ReturnBuiltinTool";
export * from "./ReturnConfig";
export * from "./ReturnEllmModel";
export * from "./ReturnEventMessageSpec";
export * from "./ReturnEventMessageSpecs";
export * from "./ReturnLanguageModelModelProvider";
export * from "./ReturnLanguageModel";
export * from "./ReturnTimeoutSpec";
export * from "./ReturnTimeoutSpecs";
export * from "./ReturnVoice";
export * from "./ReturnPagedUserDefinedTools";
export * from "./ReturnPagedPrompts";
export * from "./ReturnPagedCustomVoices";
export * from "./ReturnPagedConfigs";
export * from "./ReturnChatStatus";
export * from "./ReturnChat";
export * from "./ReturnConfigSpec";
export * from "./ReturnPagedChatsPaginationDirection";
export * from "./ReturnPagedChats";
export * from "./ReturnChatEventRole";
export * from "./ReturnChatEventType";
export * from "./ReturnChatEvent";
export * from "./ReturnChatPagedEventsStatus";
export * from "./ReturnChatPagedEventsPaginationDirection";
export * from "./ReturnChatPagedEvents";
export * from "./ReturnActiveChatCount";
export * from "./ReturnActiveChatCountPerTag";
export * from "./ReturnChatGroup";
export * from "./ReturnPagedChatGroupsPaginationDirection";
export * from "./ReturnPagedChatGroups";
export * from "./ReturnChatGroupPagedChatsPaginationDirection";
export * from "./ReturnChatGroupPagedChats";
export * from "./ReturnChatGroupPagedEventsPaginationDirection";
export * from "./ReturnChatGroupPagedEvents";
export * from "./PostedPromptSpec";
export * from "./AssistantInput";
export * from "./AudioConfiguration";
export * from "./AudioInput";
export * from "./BuiltInTool";
export * from "./BuiltinToolConfig";
export * from "./Context";
export * from "./ContextType";
export * from "./Encoding";
export * from "./ErrorLevel";
export * from "./PauseAssistantMessage";
export * from "./ResumeAssistantMessage";
export * from "./SessionSettings";
export * from "./Tool";
export * from "./ToolErrorMessage";
export * from "./ToolResponseMessage";
export * from "./ToolType";
export * from "./UserInput";
export * from "./AssistantEnd";
export * from "./AssistantMessage";
export * from "./AudioOutput";
export * from "./ChatMessageToolResult";
export * from "./ChatMessage";
export * from "./ChatMetadata";
export * from "./EmotionScores";
export * from "./WebSocketError";
export * from "./Inference";
export * from "./MillisecondInterval";
export * from "./ProsodyInference";
export * from "./Role";
export * from "./ToolCallMessage";
export * from "./UserInterruption";
export * from "./UserMessage";
export * from "./JsonMessage";
export * from "./TtsInput";
export * from "./TextInput";
export * from "./FunctionCallResponseInput";
export * from "./ExtendedVoiceArgs";
export * from "./HttpValidationError";
export * from "./ValidationErrorLocItem";
export * from "./ValidationError";
export * from "./VoiceArgs";
export * from "./VoiceNameEnum";

```

# src/api/resources/empathicVoice/types/AudioOutput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * When provided, the output is audio.
 */
export interface AudioOutput {
    /** The type of message sent through the socket; for an Audio Output message, this must be `audio_output`. */
    type: "audio_output";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /** ID of the audio output. Allows the Audio Output message to be tracked and referenced. */
    id: string;
    /** Index of the chunk of audio relative to the whole audio segment. */
    index: number;
    /** Base64 encoded audio output. This encoded audio is transmitted to the client, where it can be decoded and played back as part of the user interaction. */
    data: string;
}

```

# src/api/resources/empathicVoice/types/AssistantInput.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * When provided, the input is spoken by EVI.
 */
export interface AssistantInput {
    /** The type of message sent through the socket; must be `assistant_input` for our server to correctly identify and process it as an Assistant Input message. */
    type: "assistant_input";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /**
     * Assistant text to synthesize into spoken audio and insert into the conversation.
     *
     * EVI uses this text to generate spoken audio using our proprietary expressive text-to-speech model. Our model adds appropriate emotional inflections and tones to the text based on the user’s expressions and the context of the conversation. The synthesized audio is streamed back to the user as an [Assistant Message](/reference/empathic-voice-interface-evi/chat/chat#receive.Assistant%20Message.type).
     */
    text: string;
}

```

# src/api/resources/empathicVoice/types/MillisecondInterval.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface MillisecondInterval {
    /** Start time of the interval in milliseconds. */
    begin: number;
    /** End time of the interval in milliseconds. */
    end: number;
}

```

# src/api/resources/empathicVoice/types/AssistantEnd.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * When provided, the output is an assistant end message.
 */
export interface AssistantEnd {
    /**
     * The type of message sent through the socket; for an Assistant End message, this must be `assistant_end`.
     *
     * This message indicates the conclusion of the assistant’s response, signaling that the assistant has finished speaking for the current conversational turn.
     */
    type: "assistant_end";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
}

```

# src/api/resources/empathicVoice/types/ReturnChatGroupPagedChatsPaginationDirection.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the order in which the paginated results are presented, based on their creation date.
 *
 * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
 */
export type ReturnChatGroupPagedChatsPaginationDirection = "ASC" | "DESC";

export const ReturnChatGroupPagedChatsPaginationDirection = {
    Asc: "ASC",
    Desc: "DESC",
} as const;

```

# src/api/resources/empathicVoice/types/ReturnConfig.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A specific config version returned from the server
 */
export interface ReturnConfig {
    /** Identifier for a Config. Formatted as a UUID. */
    id?: string;
    /**
     * Version number for a Config.
     *
     * Configs, Prompts, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine configurations and revert to previous versions if needed.
     *
     * Version numbers are integer values representing different iterations of the Config. Each update to the Config increments its version number.
     */
    version?: number;
    /** Specifies the EVI version to use. Use `"1"` for version 1, or `"2"` for the latest enhanced version. For a detailed comparison of the two versions, refer to our [guide](/docs/empathic-voice-interface-evi/evi-2). */
    eviVersion?: string;
    /** An optional description of the Config version. */
    versionDescription?: string;
    /** Name applied to all versions of a particular Config. */
    name?: string;
    /** Time at which the Config was created. Measured in seconds since the Unix epoch. */
    createdOn?: number;
    /** Time at which the Config was last modified. Measured in seconds since the Unix epoch. */
    modifiedOn?: number;
    prompt?: Hume.empathicVoice.ReturnPrompt;
    /** A voice specification associated with this Config. */
    voice?: Hume.empathicVoice.ReturnVoice;
    /**
     * The supplemental language model associated with this Config.
     *
     * This model is used to generate longer, more detailed responses from EVI. Choosing an appropriate supplemental language model for your use case is crucial for generating fast, high-quality responses from EVI.
     */
    languageModel?: Hume.empathicVoice.ReturnLanguageModel;
    /**
     * The eLLM setup associated with this Config.
     *
     * Hume's eLLM (empathic Large Language Model) is a multimodal language model that takes into account both expression measures and language. The eLLM generates short, empathic language responses and guides text-to-speech (TTS) prosody.
     */
    ellmModel?: Hume.empathicVoice.ReturnEllmModel;
    /** List of user-defined tools associated with this Config. */
    tools?: (Hume.empathicVoice.ReturnUserDefinedTool | undefined)[];
    /** List of built-in tools associated with this Config. */
    builtinTools?: (Hume.empathicVoice.ReturnBuiltinTool | undefined)[];
    eventMessages?: Hume.empathicVoice.ReturnEventMessageSpecs;
    timeouts?: Hume.empathicVoice.ReturnTimeoutSpecs;
}

```

# src/api/resources/empathicVoice/types/ReturnChatEvent.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A description of a single event in a chat returned from the server
 */
export interface ReturnChatEvent {
    /** Identifier for a Chat Event. Formatted as a UUID. */
    id: string;
    /** Identifier for the Chat this event occurred in. Formatted as a UUID. */
    chatId: string;
    /** Time at which the Chat Event occurred. Measured in seconds since the Unix epoch. */
    timestamp: number;
    /**
     * The role of the entity which generated the Chat Event. There are four possible values:
     *
     * - `USER`: The user, capable of sending user messages and interruptions.
     *
     * - `AGENT`: The assistant, capable of sending agent messages.
     *
     * - `SYSTEM`: The backend server, capable of transmitting errors.
     *
     * - `TOOL`: The function calling mechanism.
     */
    role: Hume.empathicVoice.ReturnChatEventRole;
    /**
     * Type of Chat Event. There are six possible values:
     *
     * - `SYSTEM_PROMPT`: Contains the system prompt for use in the session.
     *
     * - `USER_MESSAGE`: Contains the message sent by the user.
     *
     * - `USER_INTERRUPTION`: Contains an interruption made by the user while the agent is speaking.
     *
     * - `AGENT_MESSAGE`: Contains the assistant’s message, generated by Hume’s eLLM and supplemental LLM.
     *
     * - `FUNCTION_CALL`: Contains the invocation of a tool.
     *
     * - `FUNCTION_CALL_RESPONSE`: Contains the tool response.
     */
    type: Hume.empathicVoice.ReturnChatEventType;
    /** The text of the Chat Event. This field contains the message content for each event type listed in the `type` field. */
    messageText?: string;
    /**
     * Stringified JSON containing the prosody model inference results.
     *
     * EVI uses the prosody model to measure 48 expressions related to speech and vocal characteristics. These results contain a detailed emotional and tonal analysis of the audio. Scores typically range from 0 to 1, with higher values indicating a stronger confidence level in the measured attribute.
     */
    emotionFeatures?: string;
    /** Stringified JSON with additional metadata about the chat event. */
    metadata?: string;
}

```

# src/api/resources/empathicVoice/types/Tool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface Tool {
    /** Type of tool. Set to `function` for user-defined tools. */
    type: Hume.empathicVoice.ToolType;
    /** Name of the user-defined tool to be enabled. */
    name: string;
    /**
     * Parameters of the tool. Is a stringified JSON schema.
     *
     * These parameters define the inputs needed for the tool’s execution, including the expected data type and description for each input field. Structured as a JSON schema, this format ensures the tool receives data in the expected format.
     */
    parameters: string;
    /** An optional description of what the tool does, used by the supplemental LLM to choose when and how to call the function. */
    description?: string;
    /** Optional text passed to the supplemental LLM if the tool call fails. The LLM then uses this text to generate a response back to the user, ensuring continuity in the conversation. */
    fallbackContent?: string;
}

```

# src/api/resources/empathicVoice/types/ReturnLanguageModel.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * A specific LanguageModel
 */
export interface ReturnLanguageModel {
    /** The provider of the supplemental language model. */
    modelProvider?: Hume.empathicVoice.ReturnLanguageModelModelProvider;
    /** String that specifies the language model to use with `model_provider`. */
    modelResource?: string;
    /**
     * The model temperature, with values between 0 to 1 (inclusive).
     *
     * Controls the randomness of the LLM’s output, with values closer to 0 yielding focused, deterministic responses and values closer to 1 producing more creative, diverse responses.
     */
    temperature?: number;
}

```

# src/api/resources/empathicVoice/types/ReturnEventMessageSpecs.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * Collection of event messages returned by the server.
 *
 * Event messages are sent by the server when specific events occur during a chat session. These messages are used to configure behaviors for EVI, such as controlling how EVI starts a new conversation.
 */
export interface ReturnEventMessageSpecs {
    /** Specifies the initial message EVI provides when a new chat is started, such as a greeting or welcome message. */
    onNewChat?: Hume.empathicVoice.ReturnEventMessageSpec;
    /**
     * Specifies the message EVI provides when the chat is about to be disconnected due to a user inactivity timeout, such as a message mentioning a lack of user input for a period of time.
     *
     * Enabling an inactivity message allows developers to use this message event for "checking in" with the user if they are not responding to see if they are still active.
     *
     * If the user does not respond in the number of seconds specified in the `inactivity_timeout` field, then EVI will say the message and the user has 15 seconds to respond. If they respond in time, the conversation will continue; if not, the conversation will end.
     *
     * However, if the inactivity message is not enabled, then reaching the inactivity timeout will immediately end the connection.
     */
    onInactivityTimeout?: Hume.empathicVoice.ReturnEventMessageSpec;
    /** Specifies the message EVI provides when the chat is disconnected due to reaching the maximum chat duration, such as a message mentioning the time limit for the chat has been reached. */
    onMaxDurationTimeout?: Hume.empathicVoice.ReturnEventMessageSpec;
}

```

# src/api/resources/empathicVoice/types/ProsodyInference.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

export interface ProsodyInference {
    /**
     * The confidence scores for 48 emotions within the detected expression of an audio sample.
     *
     * Scores typically range from 0 to 1, with higher values indicating a stronger confidence level in the measured attribute.
     *
     * See our guide on [interpreting expression measurement results](/docs/expression-measurement/faq#how-do-i-interpret-my-results) to learn more.
     */
    scores: Hume.empathicVoice.EmotionScores;
}

```

# src/api/resources/empathicVoice/types/ErrorResponse.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ErrorResponse {
    error?: string;
    message?: string;
}

```

# src/api/resources/empathicVoice/types/ContextType.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ContextType = "editable" | "persistent" | "temporary";

export const ContextType = {
    Editable: "editable",
    Persistent: "persistent",
    Temporary: "temporary",
} as const;

```

# src/api/resources/empathicVoice/types/ToolResponseMessage.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../index";

/**
 * When provided, the output is a function call response.
 */
export interface ToolResponseMessage {
    /**
     * The type of message sent through the socket; for a Tool Response message, this must be `tool_response`.
     *
     * Upon receiving a [Tool Call message](/reference/empathic-voice-interface-evi/chat/chat#receive.Tool%20Call%20Message.type) and successfully invoking the function, this message is sent to convey the result of the function call back to EVI.
     */
    type: "tool_response";
    /** Used to manage conversational state, correlate frontend and backend data, and persist conversations across EVI sessions. */
    customSessionId?: string;
    /**
     * The unique identifier for a specific tool call instance.
     *
     * This ID is used to track the request and response of a particular tool invocation, ensuring that the correct response is linked to the appropriate request. The specified `tool_call_id` must match the one received in the [Tool Call message](/reference/empathic-voice-interface-evi/chat/chat#receive.Tool%20Call%20Message.tool_call_id).
     */
    toolCallId: string;
    /** Return value of the tool call. Contains the output generated by the tool to pass back to EVI. */
    content: string;
    /**
     * Name of the tool.
     *
     * Include this optional field to help the supplemental LLM identify which tool generated the response. The specified `tool_name` must match the one received in the [Tool Call message](/reference/empathic-voice-interface-evi/chat/chat#receive.Tool%20Call%20Message.type).
     */
    toolName?: string;
    /** Type of tool called. Either `builtin` for natively implemented tools, like web search, or `function` for user-defined tools. */
    toolType?: Hume.empathicVoice.ToolType;
}

```

# src/api/resources/empathicVoice/resources/index.ts

```typescript
export * as chat from "./chat";
export * from "./chat/types";
export * as tools from "./tools";
export * as prompts from "./prompts";
export * as customVoices from "./customVoices";
export * as configs from "./configs";
export * as chats from "./chats";
export * as chatGroups from "./chatGroups";
export * from "./tools/client/requests";
export * from "./prompts/client/requests";
export * from "./customVoices/client/requests";
export * from "./configs/client/requests";
export * from "./chats/client/requests";
export * from "./chatGroups/client/requests";

```

# src/api/resources/empathicVoice/resources/chatGroups/index.ts

```typescript
export * from "./client";

```

# src/api/resources/empathicVoice/resources/chatGroups/client/Client.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace ChatGroups {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class ChatGroups {
    constructor(protected readonly _options: ChatGroups.Options = {}) {}

    /**
     * Fetches a paginated list of **Chat Groups**.
     *
     * @param {Hume.empathicVoice.ChatGroupsListChatGroupsRequest} request
     * @param {ChatGroups.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.chatGroups.listChatGroups({
     *         pageNumber: 0,
     *         pageSize: 1,
     *         ascendingOrder: true,
     *         configId: "1b60e1a0-cc59-424a-8d2c-189d354db3f3"
     *     })
     */
    public async listChatGroups(
        request: Hume.empathicVoice.ChatGroupsListChatGroupsRequest = {},
        requestOptions?: ChatGroups.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPagedChatGroups> {
        const { pageNumber, pageSize, ascendingOrder, configId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageNumber != null) {
            _queryParams["page_number"] = pageNumber.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (ascendingOrder != null) {
            _queryParams["ascending_order"] = ascendingOrder.toString();
        }

        if (configId != null) {
            _queryParams["config_id"] = configId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/evi/chat_groups"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnPagedChatGroups.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a **ChatGroup** by ID, including a paginated list of **Chats** associated with the **ChatGroup**.
     *
     * @param {string} id - Identifier for a Chat Group. Formatted as a UUID.
     * @param {Hume.empathicVoice.ChatGroupsGetChatGroupRequest} request
     * @param {ChatGroups.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.chatGroups.getChatGroup("697056f0-6c7e-487d-9bd8-9c19df79f05f", {
     *         pageNumber: 0,
     *         pageSize: 1,
     *         ascendingOrder: true
     *     })
     */
    public async getChatGroup(
        id: string,
        request: Hume.empathicVoice.ChatGroupsGetChatGroupRequest = {},
        requestOptions?: ChatGroups.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnChatGroupPagedChats> {
        const { pageSize, pageNumber, ascendingOrder } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (pageNumber != null) {
            _queryParams["page_number"] = pageNumber.toString();
        }

        if (ascendingOrder != null) {
            _queryParams["ascending_order"] = ascendingOrder.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/chat_groups/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnChatGroupPagedChats.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a paginated list of **Chat** events associated with a **Chat Group**.
     *
     * @param {string} id - Identifier for a Chat Group. Formatted as a UUID.
     * @param {Hume.empathicVoice.ChatGroupsListChatGroupEventsRequest} request
     * @param {ChatGroups.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.chatGroups.listChatGroupEvents("697056f0-6c7e-487d-9bd8-9c19df79f05f", {
     *         pageNumber: 0,
     *         pageSize: 3,
     *         ascendingOrder: true
     *     })
     */
    public async listChatGroupEvents(
        id: string,
        request: Hume.empathicVoice.ChatGroupsListChatGroupEventsRequest = {},
        requestOptions?: ChatGroups.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnChatGroupPagedEvents> {
        const { pageSize, pageNumber, ascendingOrder } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (pageNumber != null) {
            _queryParams["page_number"] = pageNumber.toString();
        }

        if (ascendingOrder != null) {
            _queryParams["ascending_order"] = ascendingOrder.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/chat_groups/${encodeURIComponent(id)}/events`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnChatGroupPagedEvents.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-Hume-Api-Key": apiKeyValue };
    }
}

```

# src/api/resources/empathicVoice/resources/chatGroups/client/index.ts

```typescript
export * from "./requests";

```

# src/api/resources/empathicVoice/resources/chatGroups/client/requests/ChatGroupsGetChatGroupRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         pageNumber: 0,
 *         pageSize: 1,
 *         ascendingOrder: true
 *     }
 */
export interface ChatGroupsGetChatGroupRequest {
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the sorting order of the results based on their creation date. Set to true for ascending order (chronological, with the oldest records first) and false for descending order (reverse-chronological, with the newest records first). Defaults to true.
     */
    ascendingOrder?: boolean;
}

```

# src/api/resources/empathicVoice/resources/chatGroups/client/requests/ChatGroupsListChatGroupsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         pageNumber: 0,
 *         pageSize: 1,
 *         ascendingOrder: true,
 *         configId: "1b60e1a0-cc59-424a-8d2c-189d354db3f3"
 *     }
 */
export interface ChatGroupsListChatGroupsRequest {
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * Specifies the sorting order of the results based on their creation date. Set to true for ascending order (chronological, with the oldest records first) and false for descending order (reverse-chronological, with the newest records first). Defaults to true.
     */
    ascendingOrder?: boolean;
    /**
     * The unique identifier for an EVI configuration.
     *
     * Filter Chat Groups to only include Chats that used this `config_id` in their most recent Chat.
     */
    configId?: string;
}

```

# src/api/resources/empathicVoice/resources/chatGroups/client/requests/ChatGroupsListChatGroupEventsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         pageNumber: 0,
 *         pageSize: 3,
 *         ascendingOrder: true
 *     }
 */
export interface ChatGroupsListChatGroupEventsRequest {
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the sorting order of the results based on their creation date. Set to true for ascending order (chronological, with the oldest records first) and false for descending order (reverse-chronological, with the newest records first). Defaults to true.
     */
    ascendingOrder?: boolean;
}

```

# src/api/resources/empathicVoice/resources/chatGroups/client/requests/index.ts

```typescript
export { type ChatGroupsListChatGroupsRequest } from "./ChatGroupsListChatGroupsRequest";
export { type ChatGroupsGetChatGroupRequest } from "./ChatGroupsGetChatGroupRequest";
export { type ChatGroupsListChatGroupEventsRequest } from "./ChatGroupsListChatGroupEventsRequest";

```

# src/api/resources/empathicVoice/resources/chat/index.ts

```typescript
export * from "./types";
export * from "./client";

```

# src/api/resources/empathicVoice/resources/chat/client/Client.ts

```typescript
import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import qs from "qs";
import { ChatSocket } from "./Socket";
import { SDK_VERSION } from "../../../../../../version";

export declare namespace Chat {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        accessToken?: core.Supplier<string | undefined>;
    }

    interface ConnectArgs {
        /** Enable debug mode on the websocket. Defaults to false. */
        debug?: boolean;

        /** Number of reconnect attempts. Defaults to 30. */
        reconnectAttempts?: number;

        /** The ID of the configuration. */
        configId?: string;

        /** The version of the configuration. */
        configVersion?: string;

        /** The ID of a chat group, used to resume a previous chat. */
        resumedChatGroupId?: string;

        /** Extra query parameters sent at WebSocket connection */
        queryParams?: Record<string, string | string[] | object | object[]>;
    }
}

export class Chat {
    constructor(protected readonly _options: Chat.Options) {}

    public connect(args: Chat.ConnectArgs = {}): ChatSocket {
        const queryParams: Record<string, string | string[] | object | object[]> = {};

        queryParams["fernSdkLanguage"] = "JavaScript";
        queryParams["fernSdkVersion"] = SDK_VERSION;

        if (this._options.accessToken != null) {
            queryParams["accessToken"] = this._options.accessToken;
        } else if (this._options.apiKey != null) {
            queryParams["apiKey"] = this._options.apiKey;
        }
        if (args.configId != null) {
            queryParams["config_id"] = args.configId;
        }
        if (args.configVersion != null) {
            queryParams["config_version"] = args.configVersion;
        }
        if (args.resumedChatGroupId != null) {
            queryParams["resumed_chat_group_id"] = args.resumedChatGroupId;
        }

        if (args.queryParams != null) {
            for (const [name, value] of Object.entries(args.queryParams)) {
                queryParams[name] = value;
            }
        }

        const socket = new core.ReconnectingWebSocket(
            `wss://${(core.Supplier.get(this._options.environment) ?? environments.HumeEnvironment.Production).replace(
                "https://",
                ""
            )}/v0/evi/chat?${qs.stringify(queryParams)}`,
            [],
            {
                debug: args.debug ?? false,
                maxRetries: args.reconnectAttempts ?? 30,
            }
        );

        return new ChatSocket({
            socket,
        });
    }
}

```

# src/api/resources/empathicVoice/resources/chat/client/index.ts

```typescript
export { ChatSocket } from "./Socket";
export { Chat } from "./Client";

```

# src/api/resources/empathicVoice/resources/chat/client/Socket.ts

```typescript
import * as core from "../../../../../../core";
import * as errors from "../../../../../../errors";
import * as Hume from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";

export declare namespace ChatSocket {
    interface Args {
        socket: core.ReconnectingWebSocket;
    }

    type Response = Hume.empathicVoice.SubscribeEvent & { receivedAt: Date };

    type EventHandlers = {
        open?: () => void;
        message?: (message: Response) => void;
        close?: (event: core.CloseEvent) => void;
        error?: (error: Error) => void;
    };
}

export class ChatSocket {
    public readonly socket: core.ReconnectingWebSocket;
    public readonly readyState: number;

    protected readonly eventHandlers: ChatSocket.EventHandlers = {};

    constructor({ socket }: ChatSocket.Args) {
        this.socket = socket;
        this.readyState = socket.readyState;

        this.socket.addEventListener("open", this.handleOpen);
        this.socket.addEventListener("message", this.handleMessage);
        this.socket.addEventListener("close", this.handleClose);
        this.socket.addEventListener("error", this.handleError);
    }

    /**
     * @param event - The event to attach to.
     * @param callback - The callback to run when the event is triggered.
     *
     * @example
     * ```ts
     * const socket = hume.empathicVoice.chat.connect({ apiKey: "...." });
     * socket.on('open', () => {
     *  console.log('Socket opened');
     * });
     * ```
     */
    on<T extends keyof ChatSocket.EventHandlers>(event: T, callback: ChatSocket.EventHandlers[T]) {
        this.eventHandlers[event] = callback;
    }

    /**
     * Send audio input
     */
    public sendAudioInput(message: Omit<Hume.empathicVoice.AudioInput, "type">): void {
        this.assertSocketIsOpen();
        this.sendJson({
            type: "audio_input",
            ...message,
        });
    }

    /**
     * Send session settings
     */
    public sendSessionSettings(message: Omit<Hume.empathicVoice.SessionSettings, "type"> = {}): void {
        this.assertSocketIsOpen();
        this.sendJson({
            type: "session_settings",
            ...message,
        });
    }

    /**
     * Send assistant input
     */
    public sendAssistantInput(message: Omit<Hume.empathicVoice.AssistantInput, "type">): void {
        this.assertSocketIsOpen();
        this.sendJson({
            type: "assistant_input",
            ...message,
        });
    }

    /**
     * Send pause assistant message
     */
    public pauseAssistant(message: Omit<Hume.empathicVoice.PauseAssistantMessage, "type"> = {}): void {
        this.assertSocketIsOpen();
        this.sendJson({
            type: "pause_assistant_message",
            ...message,
        });
    }

    /**
     * Send resume assistant message
     */
    public resumeAssistant(message: Omit<Hume.empathicVoice.ResumeAssistantMessage, "type"> = {}): void {
        this.assertSocketIsOpen();
        this.sendJson({
            type: "resume_assistant_message",
            ...message,
        });
    }

    /**
     * Send tool response message
     */
    public sendToolResponseMessage(message: Omit<Hume.empathicVoice.ToolResponseMessage, "type">): void {
        this.assertSocketIsOpen();
        this.sendJson({
            type: "tool_response",
            ...message,
        });
    }

    /**
     * Send tool error message
     */
    public sendToolErrorMessage(message: Omit<Hume.empathicVoice.ToolErrorMessage, "type">): void {
        this.assertSocketIsOpen();
        this.sendJson({
            type: "tool_error",
            ...message,
        });
    }

    /**
     * Send text input
     */
    public sendUserInput(text: string): void {
        this.assertSocketIsOpen();
        this.sendJson({
            type: "user_input",
            text,
        });
    }

    /**
     * @name connect
     * @description
     * Connect to the core.ReconnectingWebSocket.
     */
    public connect(): ChatSocket {
        this.socket.reconnect();

        this.socket.addEventListener("open", this.handleOpen);
        this.socket.addEventListener("message", this.handleMessage);
        this.socket.addEventListener("close", this.handleClose);
        this.socket.addEventListener("error", this.handleError);

        return this;
    }

    /**
     * Closes the underlying socket.
     */
    public close(): void {
        this.socket.close();

        this.handleClose({ code: 1000 } as CloseEvent);

        this.socket.removeEventListener("open", this.handleOpen);
        this.socket.removeEventListener("message", this.handleMessage);
        this.socket.removeEventListener("close", this.handleClose);
        this.socket.removeEventListener("error", this.handleError);
    }

    public async tillSocketOpen(): Promise<core.ReconnectingWebSocket> {
        if (this.socket.readyState === core.ReconnectingWebSocket.OPEN) {
            return this.socket;
        }
        return new Promise((resolve, reject) => {
            this.socket.addEventListener("open", () => {
                resolve(this.socket);
            });

            this.socket.addEventListener("error", (event: unknown) => {
                reject(event);
            });
        });
    }

    private assertSocketIsOpen(): void {
        if (!this.socket) {
            throw new errors.HumeError({ message: "Socket is not connected." });
        }

        if (this.socket.readyState !== core.ReconnectingWebSocket.OPEN) {
            throw new errors.HumeError({ message: "Socket is not open." });
        }
    }

    private sendJson(payload: Hume.empathicVoice.PublishEvent): void {
        const jsonPayload = serializers.empathicVoice.PublishEvent.jsonOrThrow(payload, {
            unrecognizedObjectKeys: "strip",
        });
        this.socket.send(JSON.stringify(jsonPayload));
    }

    private handleOpen = () => {
        this.eventHandlers.open?.();
    };

    private handleMessage = (event: { data: string }): void => {
        const data = JSON.parse(event.data);

        const parsedResponse = serializers.empathicVoice.SubscribeEvent.parse(data, {
            unrecognizedObjectKeys: "passthrough",
            allowUnrecognizedUnionMembers: true,
            allowUnrecognizedEnumValues: true,
            breadcrumbsPrefix: ["response"],
        });
        if (parsedResponse.ok) {
            this.eventHandlers.message?.({
                ...parsedResponse.value,
                receivedAt: new Date(),
            });
        } else {
            this.eventHandlers.error?.(new Error(`Received unknown message type`));
        }
    };

    private handleClose = (event: core.CloseEvent) => {
        this.eventHandlers.close?.(event);
    };

    private handleError = (event: core.ErrorEvent) => {
        const message = event.message ?? "core.ReconnectingWebSocket error";
        this.eventHandlers.error?.(new Error(message));
    };
}

```

# src/api/resources/empathicVoice/resources/chat/types/PublishEvent.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type PublishEvent =
    | Hume.empathicVoice.AudioInput
    | Hume.empathicVoice.SessionSettings
    | Hume.empathicVoice.UserInput
    | Hume.empathicVoice.AssistantInput
    | Hume.empathicVoice.ToolResponseMessage
    | Hume.empathicVoice.ToolErrorMessage
    | Hume.empathicVoice.PauseAssistantMessage
    | Hume.empathicVoice.ResumeAssistantMessage;

```

# src/api/resources/empathicVoice/resources/chat/types/SubscribeEvent.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../index";

export type SubscribeEvent =
    | Hume.empathicVoice.AssistantEnd
    | Hume.empathicVoice.AssistantMessage
    | Hume.empathicVoice.AudioOutput
    | Hume.empathicVoice.ChatMetadata
    | Hume.empathicVoice.WebSocketError
    | Hume.empathicVoice.UserInterruption
    | Hume.empathicVoice.UserMessage
    | Hume.empathicVoice.ToolCallMessage
    | Hume.empathicVoice.ToolResponseMessage
    | Hume.empathicVoice.ToolErrorMessage;

```

# src/api/resources/empathicVoice/resources/chat/types/index.ts

```typescript
export * from "./SubscribeEvent";
export * from "./PublishEvent";

```

# src/api/resources/empathicVoice/resources/prompts/index.ts

```typescript
export * from "./client";

```

# src/api/resources/empathicVoice/resources/prompts/client/Client.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Prompts {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Prompts {
    constructor(protected readonly _options: Prompts.Options = {}) {}

    /**
     * Fetches a paginated list of **Prompts**.
     *
     * See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.
     *
     * @param {Hume.empathicVoice.PromptsListPromptsRequest} request
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.prompts.listPrompts({
     *         pageNumber: 0,
     *         pageSize: 2
     *     })
     */
    public async listPrompts(
        request: Hume.empathicVoice.PromptsListPromptsRequest = {},
        requestOptions?: Prompts.RequestOptions
    ): Promise<core.Page<Hume.empathicVoice.ReturnPrompt | undefined>> {
        const list = async (
            request: Hume.empathicVoice.PromptsListPromptsRequest
        ): Promise<Hume.empathicVoice.ReturnPagedPrompts> => {
            const { pageNumber, pageSize, restrictToMostRecent, name } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (pageNumber != null) {
                _queryParams["page_number"] = pageNumber.toString();
            }
            if (pageSize != null) {
                _queryParams["page_size"] = pageSize.toString();
            }
            if (restrictToMostRecent != null) {
                _queryParams["restrict_to_most_recent"] = restrictToMostRecent.toString();
            }
            if (name != null) {
                _queryParams["name"] = name;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                    "v0/evi/prompts"
                ),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "hume",
                    "X-Fern-SDK-Version": "0.9.1",
                    "User-Agent": "hume/0.9.1",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...(await this._getCustomAuthorizationHeaders()),
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.empathicVoice.ReturnPagedPrompts.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new Hume.empathicVoice.BadRequestError(
                            serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            })
                        );
                    default:
                        throw new errors.HumeError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.HumeTimeoutError();
                case "unknown":
                    throw new errors.HumeError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        let _offset = request?.pageNumber != null ? request?.pageNumber : 1;
        return new core.Pageable<Hume.empathicVoice.ReturnPagedPrompts, Hume.empathicVoice.ReturnPrompt | undefined>({
            response: await list(request),
            hasNextPage: (response) => (response?.promptsPage ?? []).length > 0,
            getItems: (response) => response?.promptsPage ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "pageNumber", _offset));
            },
        });
    }

    /**
     * Creates a **Prompt** that can be added to an [EVI configuration](/reference/empathic-voice-interface-evi/configs/create-config).
     *
     * See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.
     *
     * @param {Hume.empathicVoice.PostedPrompt} request
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.prompts.createPrompt({
     *         name: "Weather Assistant Prompt",
     *         text: "<role>You are an AI weather assistant providing users with accurate and up-to-date weather information. Respond to user queries concisely and clearly. Use simple language and avoid technical jargon. Provide temperature, precipitation, wind conditions, and any weather alerts. Include helpful tips if severe weather is expected.</role>"
     *     })
     */
    public async createPrompt(
        request: Hume.empathicVoice.PostedPrompt,
        requestOptions?: Prompts.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPrompt | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/evi/prompts"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedPrompt.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.prompts.createPrompt.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a list of a **Prompt's** versions.
     *
     * See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.
     *
     * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
     * @param {Hume.empathicVoice.PromptsListPromptVersionsRequest} request
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.prompts.listPromptVersions("af699d45-2985-42cc-91b9-af9e5da3bac5")
     */
    public async listPromptVersions(
        id: string,
        request: Hume.empathicVoice.PromptsListPromptVersionsRequest = {},
        requestOptions?: Prompts.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPagedPrompts> {
        const { pageNumber, pageSize, restrictToMostRecent } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageNumber != null) {
            _queryParams["page_number"] = pageNumber.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (restrictToMostRecent != null) {
            _queryParams["restrict_to_most_recent"] = restrictToMostRecent.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/prompts/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnPagedPrompts.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates a **Prompt** by creating a new version of the **Prompt**.
     *
     * See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.
     *
     * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
     * @param {Hume.empathicVoice.PostedPromptVersion} request
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.prompts.createPromptVerison("af699d45-2985-42cc-91b9-af9e5da3bac5", {
     *         text: "<role>You are an updated version of an AI weather assistant providing users with accurate and up-to-date weather information. Respond to user queries concisely and clearly. Use simple language and avoid technical jargon. Provide temperature, precipitation, wind conditions, and any weather alerts. Include helpful tips if severe weather is expected.</role>",
     *         versionDescription: "This is an updated version of the Weather Assistant Prompt."
     *     })
     */
    public async createPromptVerison(
        id: string,
        request: Hume.empathicVoice.PostedPromptVersion,
        requestOptions?: Prompts.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPrompt | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/prompts/${encodeURIComponent(id)}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedPromptVersion.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.prompts.createPromptVerison.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a **Prompt** and its versions.
     *
     * See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.
     *
     * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.prompts.deletePrompt("af699d45-2985-42cc-91b9-af9e5da3bac5")
     */
    public async deletePrompt(id: string, requestOptions?: Prompts.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/prompts/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the name of a **Prompt**.
     *
     * See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.
     *
     * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
     * @param {Hume.empathicVoice.PostedPromptName} request
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.prompts.updatePromptName("af699d45-2985-42cc-91b9-af9e5da3bac5", {
     *         name: "Updated Weather Assistant Prompt Name"
     *     })
     */
    public async updatePromptName(
        id: string,
        request: Hume.empathicVoice.PostedPromptName,
        requestOptions?: Prompts.RequestOptions
    ): Promise<string> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/prompts/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedPromptName.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            responseType: "text",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as string;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a specified version of a **Prompt**.
     *
     * See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.
     *
     * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
     * @param {number} version - Version number for a Prompt.
     *
     *                           Prompts, Configs, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine prompts and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Prompt. Each update to the Prompt increments its version number.
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.prompts.getPromptVersion("af699d45-2985-42cc-91b9-af9e5da3bac5", 0)
     */
    public async getPromptVersion(
        id: string,
        version: number,
        requestOptions?: Prompts.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPrompt | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/prompts/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.prompts.getPromptVersion.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a specified version of a **Prompt**.
     *
     * See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.
     *
     * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
     * @param {number} version - Version number for a Prompt.
     *
     *                           Prompts, Configs, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine prompts and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Prompt. Each update to the Prompt increments its version number.
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.prompts.deletePromptVersion("af699d45-2985-42cc-91b9-af9e5da3bac5", 1)
     */
    public async deletePromptVersion(
        id: string,
        version: number,
        requestOptions?: Prompts.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/prompts/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the description of a **Prompt**.
     *
     * See our [prompting guide](/docs/empathic-voice-interface-evi/phone-calling) for tips on crafting your system prompt.
     *
     * @param {string} id - Identifier for a Prompt. Formatted as a UUID.
     * @param {number} version - Version number for a Prompt.
     *
     *                           Prompts, Configs, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine prompts and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Prompt. Each update to the Prompt increments its version number.
     * @param {Hume.empathicVoice.PostedPromptVersionDescription} request
     * @param {Prompts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.prompts.updatePromptDescription("af699d45-2985-42cc-91b9-af9e5da3bac5", 1, {
     *         versionDescription: "This is an updated version_description."
     *     })
     */
    public async updatePromptDescription(
        id: string,
        version: number,
        request: Hume.empathicVoice.PostedPromptVersionDescription = {},
        requestOptions?: Prompts.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPrompt | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/prompts/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedPromptVersionDescription.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.prompts.updatePromptDescription.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-Hume-Api-Key": apiKeyValue };
    }
}

```

# src/api/resources/empathicVoice/resources/prompts/client/index.ts

```typescript
export * from "./requests";

```

# src/api/resources/empathicVoice/resources/prompts/client/requests/PromptsListPromptsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         pageNumber: 0,
 *         pageSize: 2
 *     }
 */
export interface PromptsListPromptsRequest {
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * By default, `restrict_to_most_recent` is set to true, returning only the latest version of each prompt. To include all versions of each prompt in the list, set `restrict_to_most_recent` to false.
     */
    restrictToMostRecent?: boolean;
    /**
     * Filter to only include prompts with this name.
     */
    name?: string;
}

```

# src/api/resources/empathicVoice/resources/prompts/client/requests/PostedPromptName.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "Updated Weather Assistant Prompt Name"
 *     }
 */
export interface PostedPromptName {
    /** Name applied to all versions of a particular Prompt. */
    name: string;
}

```

# src/api/resources/empathicVoice/resources/prompts/client/requests/PromptsListPromptVersionsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface PromptsListPromptVersionsRequest {
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * By default, `restrict_to_most_recent` is set to true, returning only the latest version of each prompt. To include all versions of each prompt in the list, set `restrict_to_most_recent` to false.
     */
    restrictToMostRecent?: boolean;
}

```

# src/api/resources/empathicVoice/resources/prompts/client/requests/PostedPrompt.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "Weather Assistant Prompt",
 *         text: "<role>You are an AI weather assistant providing users with accurate and up-to-date weather information. Respond to user queries concisely and clearly. Use simple language and avoid technical jargon. Provide temperature, precipitation, wind conditions, and any weather alerts. Include helpful tips if severe weather is expected.</role>"
 *     }
 */
export interface PostedPrompt {
    /** Name applied to all versions of a particular Prompt. */
    name: string;
    /** An optional description of the Prompt version. */
    versionDescription?: string;
    /**
     * Instructions used to shape EVI’s behavior, responses, and style.
     *
     * You can use the Prompt to define a specific goal or role for EVI, specifying how it should act or what it should focus on during the conversation. For example, EVI can be instructed to act as a customer support representative, a fitness coach, or a travel advisor, each with its own set of behaviors and response styles.
     *
     * For help writing a system prompt, see our [Prompting Guide](/docs/empathic-voice-interface-evi/prompting).
     */
    text: string;
}

```

# src/api/resources/empathicVoice/resources/prompts/client/requests/PostedPromptVersion.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         text: "<role>You are an updated version of an AI weather assistant providing users with accurate and up-to-date weather information. Respond to user queries concisely and clearly. Use simple language and avoid technical jargon. Provide temperature, precipitation, wind conditions, and any weather alerts. Include helpful tips if severe weather is expected.</role>",
 *         versionDescription: "This is an updated version of the Weather Assistant Prompt."
 *     }
 */
export interface PostedPromptVersion {
    /** An optional description of the Prompt version. */
    versionDescription?: string;
    /**
     * Instructions used to shape EVI’s behavior, responses, and style for this version of the Prompt.
     *
     * You can use the Prompt to define a specific goal or role for EVI, specifying how it should act or what it should focus on during the conversation. For example, EVI can be instructed to act as a customer support representative, a fitness coach, or a travel advisor, each with its own set of behaviors and response styles.
     *
     * For help writing a system prompt, see our [Prompting Guide](/docs/empathic-voice-interface-evi/prompting).
     */
    text: string;
}

```

# src/api/resources/empathicVoice/resources/prompts/client/requests/index.ts

```typescript
export { type PromptsListPromptsRequest } from "./PromptsListPromptsRequest";
export { type PostedPrompt } from "./PostedPrompt";
export { type PromptsListPromptVersionsRequest } from "./PromptsListPromptVersionsRequest";
export { type PostedPromptVersion } from "./PostedPromptVersion";
export { type PostedPromptName } from "./PostedPromptName";
export { type PostedPromptVersionDescription } from "./PostedPromptVersionDescription";

```

# src/api/resources/empathicVoice/resources/prompts/client/requests/PostedPromptVersionDescription.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         versionDescription: "This is an updated version_description."
 *     }
 */
export interface PostedPromptVersionDescription {
    /** An optional description of the Prompt version. */
    versionDescription?: string;
}

```

# src/api/resources/empathicVoice/resources/chats/index.ts

```typescript
export * from "./client";

```

# src/api/resources/empathicVoice/resources/chats/client/Client.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Chats {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Chats {
    constructor(protected readonly _options: Chats.Options = {}) {}

    /**
     * Fetches a paginated list of **Chats**.
     *
     * @param {Hume.empathicVoice.ChatsListChatsRequest} request
     * @param {Chats.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.chats.listChats({
     *         pageNumber: 0,
     *         pageSize: 1,
     *         ascendingOrder: true
     *     })
     */
    public async listChats(
        request: Hume.empathicVoice.ChatsListChatsRequest = {},
        requestOptions?: Chats.RequestOptions
    ): Promise<core.Page<Hume.empathicVoice.ReturnChat>> {
        const list = async (
            request: Hume.empathicVoice.ChatsListChatsRequest
        ): Promise<Hume.empathicVoice.ReturnPagedChats> => {
            const { pageNumber, pageSize, ascendingOrder } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (pageNumber != null) {
                _queryParams["page_number"] = pageNumber.toString();
            }
            if (pageSize != null) {
                _queryParams["page_size"] = pageSize.toString();
            }
            if (ascendingOrder != null) {
                _queryParams["ascending_order"] = ascendingOrder.toString();
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                    "v0/evi/chats"
                ),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "hume",
                    "X-Fern-SDK-Version": "0.9.1",
                    "User-Agent": "hume/0.9.1",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...(await this._getCustomAuthorizationHeaders()),
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.empathicVoice.ReturnPagedChats.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new Hume.empathicVoice.BadRequestError(
                            serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            })
                        );
                    default:
                        throw new errors.HumeError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.HumeTimeoutError();
                case "unknown":
                    throw new errors.HumeError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        let _offset = request?.pageNumber != null ? request?.pageNumber : 1;
        return new core.Pageable<Hume.empathicVoice.ReturnPagedChats, Hume.empathicVoice.ReturnChat>({
            response: await list(request),
            hasNextPage: (response) => (response?.chatsPage ?? []).length > 0,
            getItems: (response) => response?.chatsPage ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "pageNumber", _offset));
            },
        });
    }

    /**
     * Fetches a paginated list of **Chat** events.
     *
     * @param {string} id - Identifier for a Chat. Formatted as a UUID.
     * @param {Hume.empathicVoice.ChatsListChatEventsRequest} request
     * @param {Chats.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.chats.listChatEvents("470a49f6-1dec-4afe-8b61-035d3b2d63b0", {
     *         pageNumber: 0,
     *         pageSize: 3,
     *         ascendingOrder: true
     *     })
     */
    public async listChatEvents(
        id: string,
        request: Hume.empathicVoice.ChatsListChatEventsRequest = {},
        requestOptions?: Chats.RequestOptions
    ): Promise<core.Page<Hume.empathicVoice.ReturnChatEvent>> {
        const list = async (
            request: Hume.empathicVoice.ChatsListChatEventsRequest
        ): Promise<Hume.empathicVoice.ReturnChatPagedEvents> => {
            const { pageSize, pageNumber, ascendingOrder } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (pageSize != null) {
                _queryParams["page_size"] = pageSize.toString();
            }
            if (pageNumber != null) {
                _queryParams["page_number"] = pageNumber.toString();
            }
            if (ascendingOrder != null) {
                _queryParams["ascending_order"] = ascendingOrder.toString();
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                    `v0/evi/chats/${encodeURIComponent(id)}`
                ),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "hume",
                    "X-Fern-SDK-Version": "0.9.1",
                    "User-Agent": "hume/0.9.1",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...(await this._getCustomAuthorizationHeaders()),
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.empathicVoice.ReturnChatPagedEvents.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new Hume.empathicVoice.BadRequestError(
                            serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            })
                        );
                    default:
                        throw new errors.HumeError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.HumeTimeoutError();
                case "unknown":
                    throw new errors.HumeError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        let _offset = request?.pageNumber != null ? request?.pageNumber : 1;
        return new core.Pageable<Hume.empathicVoice.ReturnChatPagedEvents, Hume.empathicVoice.ReturnChatEvent>({
            response: await list(request),
            hasNextPage: (response) => (response?.eventsPage ?? []).length > 0,
            getItems: (response) => response?.eventsPage ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "pageNumber", _offset));
            },
        });
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-Hume-Api-Key": apiKeyValue };
    }
}

```

# src/api/resources/empathicVoice/resources/chats/client/index.ts

```typescript
export * from "./requests";

```

# src/api/resources/empathicVoice/resources/chats/client/requests/ChatsListChatsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         pageNumber: 0,
 *         pageSize: 1,
 *         ascendingOrder: true
 *     }
 */
export interface ChatsListChatsRequest {
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * Specifies the sorting order of the results based on their creation date. Set to true for ascending order (chronological, with the oldest records first) and false for descending order (reverse-chronological, with the newest records first). Defaults to true.
     */
    ascendingOrder?: boolean;
}

```

# src/api/resources/empathicVoice/resources/chats/client/requests/ChatsListChatEventsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         pageNumber: 0,
 *         pageSize: 3,
 *         ascendingOrder: true
 *     }
 */
export interface ChatsListChatEventsRequest {
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the sorting order of the results based on their creation date. Set to true for ascending order (chronological, with the oldest records first) and false for descending order (reverse-chronological, with the newest records first). Defaults to true.
     */
    ascendingOrder?: boolean;
}

```

# src/api/resources/empathicVoice/resources/chats/client/requests/index.ts

```typescript
export { type ChatsListChatsRequest } from "./ChatsListChatsRequest";
export { type ChatsListChatEventsRequest } from "./ChatsListChatEventsRequest";

```

# src/api/resources/empathicVoice/resources/tools/index.ts

```typescript
export * from "./client";

```

# src/api/resources/empathicVoice/resources/tools/client/Client.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Tools {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Tools {
    constructor(protected readonly _options: Tools.Options = {}) {}

    /**
     * Fetches a paginated list of **Tools**.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {Hume.empathicVoice.ToolsListToolsRequest} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.listTools({
     *         pageNumber: 0,
     *         pageSize: 2
     *     })
     */
    public async listTools(
        request: Hume.empathicVoice.ToolsListToolsRequest = {},
        requestOptions?: Tools.RequestOptions
    ): Promise<core.Page<Hume.empathicVoice.ReturnUserDefinedTool | undefined>> {
        const list = async (
            request: Hume.empathicVoice.ToolsListToolsRequest
        ): Promise<Hume.empathicVoice.ReturnPagedUserDefinedTools> => {
            const { pageNumber, pageSize, restrictToMostRecent, name } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (pageNumber != null) {
                _queryParams["page_number"] = pageNumber.toString();
            }
            if (pageSize != null) {
                _queryParams["page_size"] = pageSize.toString();
            }
            if (restrictToMostRecent != null) {
                _queryParams["restrict_to_most_recent"] = restrictToMostRecent.toString();
            }
            if (name != null) {
                _queryParams["name"] = name;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                    "v0/evi/tools"
                ),
                method: "GET",
                headers: {
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "hume",
                    "X-Fern-SDK-Version": "0.9.1",
                    "User-Agent": "hume/0.9.1",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...(await this._getCustomAuthorizationHeaders()),
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.empathicVoice.ReturnPagedUserDefinedTools.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new Hume.empathicVoice.BadRequestError(
                            serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            })
                        );
                    default:
                        throw new errors.HumeError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.HumeTimeoutError();
                case "unknown":
                    throw new errors.HumeError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        let _offset = request?.pageNumber != null ? request?.pageNumber : 1;
        return new core.Pageable<
            Hume.empathicVoice.ReturnPagedUserDefinedTools,
            Hume.empathicVoice.ReturnUserDefinedTool | undefined
        >({
            response: await list(request),
            hasNextPage: (response) => (response?.toolsPage ?? []).length > 0,
            getItems: (response) => response?.toolsPage ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "pageNumber", _offset));
            },
        });
    }

    /**
     * Creates a **Tool** that can be added to an [EVI configuration](/reference/empathic-voice-interface-evi/configs/create-config).
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {Hume.empathicVoice.PostedUserDefinedTool} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.createTool({
     *         name: "get_current_weather",
     *         parameters: "{ \"type\": \"object\", \"properties\": { \"location\": { \"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\" }, \"format\": { \"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\"], \"description\": \"The temperature unit to use. Infer this from the users location.\" } }, \"required\": [\"location\", \"format\"] }",
     *         versionDescription: "Fetches current weather and uses celsius or fahrenheit based on location of user.",
     *         description: "This tool is for getting the current weather.",
     *         fallbackContent: "Unable to fetch current weather."
     *     })
     */
    public async createTool(
        request: Hume.empathicVoice.PostedUserDefinedTool,
        requestOptions?: Tools.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnUserDefinedTool | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/evi/tools"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedUserDefinedTool.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.tools.createTool.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a list of a **Tool's** versions.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {Hume.empathicVoice.ToolsListToolVersionsRequest} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.listToolVersions("00183a3f-79ba-413d-9f3b-609864268bea")
     */
    public async listToolVersions(
        id: string,
        request: Hume.empathicVoice.ToolsListToolVersionsRequest = {},
        requestOptions?: Tools.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPagedUserDefinedTools> {
        const { pageNumber, pageSize, restrictToMostRecent } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageNumber != null) {
            _queryParams["page_number"] = pageNumber.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (restrictToMostRecent != null) {
            _queryParams["restrict_to_most_recent"] = restrictToMostRecent.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnPagedUserDefinedTools.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates a **Tool** by creating a new version of the **Tool**.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {Hume.empathicVoice.PostedUserDefinedToolVersion} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.createToolVersion("00183a3f-79ba-413d-9f3b-609864268bea", {
     *         parameters: "{ \"type\": \"object\", \"properties\": { \"location\": { \"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\" }, \"format\": { \"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\", \"kelvin\"], \"description\": \"The temperature unit to use. Infer this from the users location.\" } }, \"required\": [\"location\", \"format\"] }",
     *         versionDescription: "Fetches current weather and uses celsius, fahrenheit, or kelvin based on location of user.",
     *         fallbackContent: "Unable to fetch current weather.",
     *         description: "This tool is for getting the current weather."
     *     })
     */
    public async createToolVersion(
        id: string,
        request: Hume.empathicVoice.PostedUserDefinedToolVersion,
        requestOptions?: Tools.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnUserDefinedTool | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedUserDefinedToolVersion.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.tools.createToolVersion.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a **Tool** and its versions.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.deleteTool("00183a3f-79ba-413d-9f3b-609864268bea")
     */
    public async deleteTool(id: string, requestOptions?: Tools.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the name of a **Tool**.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {Hume.empathicVoice.PostedUserDefinedToolName} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.updateToolName("00183a3f-79ba-413d-9f3b-609864268bea", {
     *         name: "get_current_temperature"
     *     })
     */
    public async updateToolName(
        id: string,
        request: Hume.empathicVoice.PostedUserDefinedToolName,
        requestOptions?: Tools.RequestOptions
    ): Promise<string> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedUserDefinedToolName.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            responseType: "text",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as string;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a specified version of a **Tool**.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {number} version - Version number for a Tool.
     *
     *                           Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.getToolVersion("00183a3f-79ba-413d-9f3b-609864268bea", 1)
     */
    public async getToolVersion(
        id: string,
        version: number,
        requestOptions?: Tools.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnUserDefinedTool | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.tools.getToolVersion.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a specified version of a **Tool**.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {number} version - Version number for a Tool.
     *
     *                           Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.deleteToolVersion("00183a3f-79ba-413d-9f3b-609864268bea", 1)
     */
    public async deleteToolVersion(id: string, version: number, requestOptions?: Tools.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the description of a specified **Tool** version.
     *
     * Refer to our [tool use](/docs/empathic-voice-interface-evi/tool-use#function-calling) guide for comprehensive instructions on defining and integrating tools into EVI.
     *
     * @param {string} id - Identifier for a Tool. Formatted as a UUID.
     * @param {number} version - Version number for a Tool.
     *
     *                           Tools, Configs, Custom Voices, and Prompts are versioned. This versioning system supports iterative development, allowing you to progressively refine tools and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Tool. Each update to the Tool increments its version number.
     * @param {Hume.empathicVoice.PostedUserDefinedToolVersionDescription} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.tools.updateToolDescription("00183a3f-79ba-413d-9f3b-609864268bea", 1, {
     *         versionDescription: "Fetches current temperature, precipitation, wind speed, AQI, and other weather conditions. Uses Celsius, Fahrenheit, or kelvin depending on user's region."
     *     })
     */
    public async updateToolDescription(
        id: string,
        version: number,
        request: Hume.empathicVoice.PostedUserDefinedToolVersionDescription = {},
        requestOptions?: Tools.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnUserDefinedTool | undefined> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/tools/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedUserDefinedToolVersionDescription.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.tools.updateToolDescription.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-Hume-Api-Key": apiKeyValue };
    }
}

```

# src/api/resources/empathicVoice/resources/tools/client/index.ts

```typescript
export * from "./requests";

```

# src/api/resources/empathicVoice/resources/tools/client/requests/PostedUserDefinedToolVersion.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         parameters: "{ \"type\": \"object\", \"properties\": { \"location\": { \"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\" }, \"format\": { \"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\", \"kelvin\"], \"description\": \"The temperature unit to use. Infer this from the users location.\" } }, \"required\": [\"location\", \"format\"] }",
 *         versionDescription: "Fetches current weather and uses celsius, fahrenheit, or kelvin based on location of user.",
 *         fallbackContent: "Unable to fetch current weather.",
 *         description: "This tool is for getting the current weather."
 *     }
 */
export interface PostedUserDefinedToolVersion {
    /** An optional description of the Tool version. */
    versionDescription?: string;
    /** An optional description of what the Tool does, used by the supplemental LLM to choose when and how to call the function. */
    description?: string;
    /**
     * Stringified JSON defining the parameters used by this version of the Tool.
     *
     * These parameters define the inputs needed for the Tool’s execution, including the expected data type and description for each input field. Structured as a stringified JSON schema, this format ensures the Tool receives data in the expected format.
     */
    parameters: string;
    /** Optional text passed to the supplemental LLM in place of the tool call result. The LLM then uses this text to generate a response back to the user, ensuring continuity in the conversation if the Tool errors. */
    fallbackContent?: string;
}

```

# src/api/resources/empathicVoice/resources/tools/client/requests/ToolsListToolVersionsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ToolsListToolVersionsRequest {
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * By default, `restrict_to_most_recent` is set to true, returning only the latest version of each tool. To include all versions of each tool in the list, set `restrict_to_most_recent` to false.
     */
    restrictToMostRecent?: boolean;
}

```

# src/api/resources/empathicVoice/resources/tools/client/requests/ToolsListToolsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         pageNumber: 0,
 *         pageSize: 2
 *     }
 */
export interface ToolsListToolsRequest {
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * By default, `restrict_to_most_recent` is set to true, returning only the latest version of each tool. To include all versions of each tool in the list, set `restrict_to_most_recent` to false.
     */
    restrictToMostRecent?: boolean;
    /**
     * Filter to only include tools with this name.
     */
    name?: string;
}

```

# src/api/resources/empathicVoice/resources/tools/client/requests/PostedUserDefinedToolName.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "get_current_temperature"
 *     }
 */
export interface PostedUserDefinedToolName {
    /** Name applied to all versions of a particular Tool. */
    name: string;
}

```

# src/api/resources/empathicVoice/resources/tools/client/requests/PostedUserDefinedToolVersionDescription.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         versionDescription: "Fetches current temperature, precipitation, wind speed, AQI, and other weather conditions. Uses Celsius, Fahrenheit, or kelvin depending on user's region."
 *     }
 */
export interface PostedUserDefinedToolVersionDescription {
    /** An optional description of the Tool version. */
    versionDescription?: string;
}

```

# src/api/resources/empathicVoice/resources/tools/client/requests/PostedUserDefinedTool.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "get_current_weather",
 *         parameters: "{ \"type\": \"object\", \"properties\": { \"location\": { \"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\" }, \"format\": { \"type\": \"string\", \"enum\": [\"celsius\", \"fahrenheit\"], \"description\": \"The temperature unit to use. Infer this from the users location.\" } }, \"required\": [\"location\", \"format\"] }",
 *         versionDescription: "Fetches current weather and uses celsius or fahrenheit based on location of user.",
 *         description: "This tool is for getting the current weather.",
 *         fallbackContent: "Unable to fetch current weather."
 *     }
 */
export interface PostedUserDefinedTool {
    /** Name applied to all versions of a particular Tool. */
    name: string;
    /** An optional description of the Tool version. */
    versionDescription?: string;
    /** An optional description of what the Tool does, used by the supplemental LLM to choose when and how to call the function. */
    description?: string;
    /**
     * Stringified JSON defining the parameters used by this version of the Tool.
     *
     * These parameters define the inputs needed for the Tool’s execution, including the expected data type and description for each input field. Structured as a stringified JSON schema, this format ensures the Tool receives data in the expected format.
     */
    parameters: string;
    /** Optional text passed to the supplemental LLM in place of the tool call result. The LLM then uses this text to generate a response back to the user, ensuring continuity in the conversation if the Tool errors. */
    fallbackContent?: string;
}

```

# src/api/resources/empathicVoice/resources/tools/client/requests/index.ts

```typescript
export { type ToolsListToolsRequest } from "./ToolsListToolsRequest";
export { type PostedUserDefinedTool } from "./PostedUserDefinedTool";
export { type ToolsListToolVersionsRequest } from "./ToolsListToolVersionsRequest";
export { type PostedUserDefinedToolVersion } from "./PostedUserDefinedToolVersion";
export { type PostedUserDefinedToolName } from "./PostedUserDefinedToolName";
export { type PostedUserDefinedToolVersionDescription } from "./PostedUserDefinedToolVersionDescription";

```

# src/api/resources/empathicVoice/resources/customVoices/index.ts

```typescript
export * from "./client";

```

# src/api/resources/empathicVoice/resources/customVoices/client/Client.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace CustomVoices {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class CustomVoices {
    constructor(protected readonly _options: CustomVoices.Options = {}) {}

    /**
     * Fetches a paginated list of **Custom Voices**.
     *
     * Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.
     *
     * @param {Hume.empathicVoice.CustomVoicesListCustomVoicesRequest} request
     * @param {CustomVoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.customVoices.listCustomVoices()
     */
    public async listCustomVoices(
        request: Hume.empathicVoice.CustomVoicesListCustomVoicesRequest = {},
        requestOptions?: CustomVoices.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPagedCustomVoices> {
        const { pageNumber, pageSize, name } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageNumber != null) {
            _queryParams["page_number"] = pageNumber.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (name != null) {
            _queryParams["name"] = name;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/evi/custom_voices"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnPagedCustomVoices.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a **Custom Voice** that can be added to an [EVI configuration](/reference/empathic-voice-interface-evi/configs/create-config).
     *
     * Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.
     *
     * @param {Hume.empathicVoice.PostedCustomVoice} request
     * @param {CustomVoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.customVoices.createCustomVoice({
     *         name: "name",
     *         baseVoice: Hume.empathicVoice.PostedCustomVoiceBaseVoice.Ito,
     *         parameterModel: "20240715-4parameter"
     *     })
     */
    public async createCustomVoice(
        request: Hume.empathicVoice.PostedCustomVoice,
        requestOptions?: CustomVoices.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnCustomVoice> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/evi/custom_voices"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedCustomVoice.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnCustomVoice.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a specific **Custom Voice** by ID.
     *
     * Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.
     *
     * @param {string} id - Identifier for a Custom Voice. Formatted as a UUID.
     * @param {CustomVoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.customVoices.getCustomVoice("id")
     */
    public async getCustomVoice(
        id: string,
        requestOptions?: CustomVoices.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnCustomVoice> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/custom_voices/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnCustomVoice.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates a **Custom Voice** by creating a new version of the **Custom Voice**.
     *
     * Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.
     *
     * @param {string} id - Identifier for a Custom Voice. Formatted as a UUID.
     * @param {Hume.empathicVoice.PostedCustomVoice} request
     * @param {CustomVoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.customVoices.createCustomVoiceVersion("id", {
     *         name: "name",
     *         baseVoice: Hume.empathicVoice.PostedCustomVoiceBaseVoice.Ito,
     *         parameterModel: "20240715-4parameter"
     *     })
     */
    public async createCustomVoiceVersion(
        id: string,
        request: Hume.empathicVoice.PostedCustomVoice,
        requestOptions?: CustomVoices.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnCustomVoice> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/custom_voices/${encodeURIComponent(id)}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedCustomVoice.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnCustomVoice.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a **Custom Voice** and its versions.
     *
     * Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.
     *
     * @param {string} id - Identifier for a Custom Voice. Formatted as a UUID.
     * @param {CustomVoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.customVoices.deleteCustomVoice("id")
     */
    public async deleteCustomVoice(id: string, requestOptions?: CustomVoices.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/custom_voices/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the name of a **Custom Voice**.
     *
     * Refer to our [voices guide](/docs/empathic-voice-interface-evi/voices) for details on creating a custom voice.
     *
     * @param {string} id - Identifier for a Custom Voice. Formatted as a UUID.
     * @param {Hume.empathicVoice.PostedCustomVoiceName} request
     * @param {CustomVoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.customVoices.updateCustomVoiceName("string", {
     *         name: "string"
     *     })
     */
    public async updateCustomVoiceName(
        id: string,
        request: Hume.empathicVoice.PostedCustomVoiceName,
        requestOptions?: CustomVoices.RequestOptions
    ): Promise<string> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/custom_voices/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedCustomVoiceName.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            responseType: "text",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as string;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-Hume-Api-Key": apiKeyValue };
    }
}

```

# src/api/resources/empathicVoice/resources/customVoices/client/index.ts

```typescript
export * from "./requests";

```

# src/api/resources/empathicVoice/resources/customVoices/client/requests/PostedCustomVoiceName.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "string"
 *     }
 */
export interface PostedCustomVoiceName {
    /** The name of the Custom Voice. Maximum length of 75 characters. Will be converted to all-uppercase. (e.g., "sample voice" becomes "SAMPLE VOICE") */
    name: string;
}

```

# src/api/resources/empathicVoice/resources/customVoices/client/requests/CustomVoicesListCustomVoicesRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface CustomVoicesListCustomVoicesRequest {
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * Filter to only include custom voices with this name.
     */
    name?: string;
}

```

# src/api/resources/empathicVoice/resources/customVoices/client/requests/index.ts

```typescript
export { type CustomVoicesListCustomVoicesRequest } from "./CustomVoicesListCustomVoicesRequest";
export { type PostedCustomVoiceName } from "./PostedCustomVoiceName";

```

# src/api/resources/empathicVoice/resources/configs/index.ts

```typescript
export * from "./client";

```

# src/api/resources/empathicVoice/resources/configs/client/Client.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Configs {
    interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Configs {
    constructor(protected readonly _options: Configs.Options = {}) {}

    /**
     * Fetches a paginated list of **Configs**.
     *
     * For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).
     *
     * @param {Hume.empathicVoice.ConfigsListConfigsRequest} request
     * @param {Configs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.configs.listConfigs({
     *         pageNumber: 0,
     *         pageSize: 1
     *     })
     */
    public async listConfigs(
        request: Hume.empathicVoice.ConfigsListConfigsRequest = {},
        requestOptions?: Configs.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPagedConfigs> {
        const { pageNumber, pageSize, restrictToMostRecent, name } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageNumber != null) {
            _queryParams["page_number"] = pageNumber.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (restrictToMostRecent != null) {
            _queryParams["restrict_to_most_recent"] = restrictToMostRecent.toString();
        }

        if (name != null) {
            _queryParams["name"] = name;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/evi/configs"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnPagedConfigs.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a **Config** which can be applied to EVI.
     *
     * For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).
     *
     * @param {Hume.empathicVoice.PostedConfig} request
     * @param {Configs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.configs.createConfig({
     *         name: "Weather Assistant Config",
     *         prompt: {
     *             id: "af699d45-2985-42cc-91b9-af9e5da3bac5",
     *             version: 0
     *         },
     *         eviVersion: "2",
     *         voice: {
     *             provider: "HUME_AI",
     *             name: "SAMPLE VOICE"
     *         },
     *         languageModel: {
     *             modelProvider: Hume.empathicVoice.PostedLanguageModelModelProvider.Anthropic,
     *             modelResource: "claude-3-5-sonnet-20240620",
     *             temperature: 1
     *         },
     *         eventMessages: {
     *             onNewChat: {
     *                 enabled: false,
     *                 text: ""
     *             },
     *             onInactivityTimeout: {
     *                 enabled: false,
     *                 text: ""
     *             },
     *             onMaxDurationTimeout: {
     *                 enabled: false,
     *                 text: ""
     *             }
     *         }
     *     })
     */
    public async createConfig(
        request: Hume.empathicVoice.PostedConfig,
        requestOptions?: Configs.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnConfig> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                "v0/evi/configs"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedConfig.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnConfig.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a list of a **Config's** versions.
     *
     * For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).
     *
     * @param {string} id - Identifier for a Config. Formatted as a UUID.
     * @param {Hume.empathicVoice.ConfigsListConfigVersionsRequest} request
     * @param {Configs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.configs.listConfigVersions("1b60e1a0-cc59-424a-8d2c-189d354db3f3")
     */
    public async listConfigVersions(
        id: string,
        request: Hume.empathicVoice.ConfigsListConfigVersionsRequest = {},
        requestOptions?: Configs.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnPagedConfigs> {
        const { pageNumber, pageSize, restrictToMostRecent } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (pageNumber != null) {
            _queryParams["page_number"] = pageNumber.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (restrictToMostRecent != null) {
            _queryParams["restrict_to_most_recent"] = restrictToMostRecent.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/configs/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnPagedConfigs.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates a **Config** by creating a new version of the **Config**.
     *
     * For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).
     *
     * @param {string} id - Identifier for a Config. Formatted as a UUID.
     * @param {Hume.empathicVoice.PostedConfigVersion} request
     * @param {Configs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.configs.createConfigVersion("1b60e1a0-cc59-424a-8d2c-189d354db3f3", {
     *         versionDescription: "This is an updated version of the Weather Assistant Config.",
     *         eviVersion: "2",
     *         prompt: {
     *             id: "af699d45-2985-42cc-91b9-af9e5da3bac5",
     *             version: 0
     *         },
     *         voice: {
     *             provider: "HUME_AI",
     *             name: "ITO"
     *         },
     *         languageModel: {
     *             modelProvider: Hume.empathicVoice.PostedLanguageModelModelProvider.Anthropic,
     *             modelResource: "claude-3-5-sonnet-20240620",
     *             temperature: 1
     *         },
     *         ellmModel: {
     *             allowShortResponses: true
     *         },
     *         eventMessages: {
     *             onNewChat: {
     *                 enabled: false,
     *                 text: ""
     *             },
     *             onInactivityTimeout: {
     *                 enabled: false,
     *                 text: ""
     *             },
     *             onMaxDurationTimeout: {
     *                 enabled: false,
     *                 text: ""
     *             }
     *         }
     *     })
     */
    public async createConfigVersion(
        id: string,
        request: Hume.empathicVoice.PostedConfigVersion,
        requestOptions?: Configs.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnConfig> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/configs/${encodeURIComponent(id)}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedConfigVersion.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnConfig.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a **Config** and its versions.
     *
     * For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).
     *
     * @param {string} id - Identifier for a Config. Formatted as a UUID.
     * @param {Configs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.configs.deleteConfig("1b60e1a0-cc59-424a-8d2c-189d354db3f3")
     */
    public async deleteConfig(id: string, requestOptions?: Configs.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/configs/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the name of a **Config**.
     *
     * For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).
     *
     * @param {string} id - Identifier for a Config. Formatted as a UUID.
     * @param {Hume.empathicVoice.PostedConfigName} request
     * @param {Configs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.configs.updateConfigName("1b60e1a0-cc59-424a-8d2c-189d354db3f3", {
     *         name: "Updated Weather Assistant Config Name"
     *     })
     */
    public async updateConfigName(
        id: string,
        request: Hume.empathicVoice.PostedConfigName,
        requestOptions?: Configs.RequestOptions
    ): Promise<string> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/configs/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedConfigName.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            responseType: "text",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as string;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetches a specified version of a **Config**.
     *
     * For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).
     *
     * @param {string} id - Identifier for a Config. Formatted as a UUID.
     * @param {number} version - Version number for a Config.
     *
     *                           Configs, Prompts, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine configurations and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Config. Each update to the Config increments its version number.
     * @param {Configs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.configs.getConfigVersion("1b60e1a0-cc59-424a-8d2c-189d354db3f3", 1)
     */
    public async getConfigVersion(
        id: string,
        version: number,
        requestOptions?: Configs.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnConfig> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/configs/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnConfig.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a specified version of a **Config**.
     *
     * For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).
     *
     * @param {string} id - Identifier for a Config. Formatted as a UUID.
     * @param {number} version - Version number for a Config.
     *
     *                           Configs, Prompts, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine configurations and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Config. Each update to the Config increments its version number.
     * @param {Configs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.configs.deleteConfigVersion("1b60e1a0-cc59-424a-8d2c-189d354db3f3", 1)
     */
    public async deleteConfigVersion(
        id: string,
        version: number,
        requestOptions?: Configs.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/configs/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the description of a **Config**.
     *
     * For more details on configuration options and how to configure EVI, see our [configuration guide](/docs/empathic-voice-interface-evi/configuration).
     *
     * @param {string} id - Identifier for a Config. Formatted as a UUID.
     * @param {number} version - Version number for a Config.
     *
     *                           Configs, Prompts, Custom Voices, and Tools are versioned. This versioning system supports iterative development, allowing you to progressively refine configurations and revert to previous versions if needed.
     *
     *                           Version numbers are integer values representing different iterations of the Config. Each update to the Config increments its version number.
     * @param {Hume.empathicVoice.PostedConfigVersionDescription} request
     * @param {Configs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hume.empathicVoice.BadRequestError}
     *
     * @example
     *     await client.empathicVoice.configs.updateConfigDescription("1b60e1a0-cc59-424a-8d2c-189d354db3f3", 1, {
     *         versionDescription: "This is an updated version_description."
     *     })
     */
    public async updateConfigDescription(
        id: string,
        version: number,
        request: Hume.empathicVoice.PostedConfigVersionDescription = {},
        requestOptions?: Configs.RequestOptions
    ): Promise<Hume.empathicVoice.ReturnConfig> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HumeEnvironment.Production,
                `v0/evi/configs/${encodeURIComponent(id)}/version/${encodeURIComponent(version)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.9.1",
                "User-Agent": "hume/0.9.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.empathicVoice.PostedConfigVersionDescription.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.empathicVoice.ReturnConfig.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hume.empathicVoice.BadRequestError(
                        serializers.empathicVoice.ErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HumeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError();
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-Hume-Api-Key": apiKeyValue };
    }
}

```

# src/api/resources/empathicVoice/resources/configs/client/index.ts

```typescript
export * from "./requests";

```

# src/api/resources/empathicVoice/resources/configs/client/requests/ConfigsListConfigsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         pageNumber: 0,
 *         pageSize: 1
 *     }
 */
export interface ConfigsListConfigsRequest {
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * By default, `restrict_to_most_recent` is set to true, returning only the latest version of each config. To include all versions of each config in the list, set `restrict_to_most_recent` to false.
     */
    restrictToMostRecent?: boolean;
    /**
     * Filter to only include configs with this name.
     */
    name?: string;
}

```

# src/api/resources/empathicVoice/resources/configs/client/requests/PostedConfigName.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "Updated Weather Assistant Config Name"
 *     }
 */
export interface PostedConfigName {
    /** Name applied to all versions of a particular Config. */
    name: string;
}

```

# src/api/resources/empathicVoice/resources/configs/client/requests/PostedConfig.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../../index";

/**
 * @example
 *     {
 *         name: "Weather Assistant Config",
 *         prompt: {
 *             id: "af699d45-2985-42cc-91b9-af9e5da3bac5",
 *             version: 0
 *         },
 *         eviVersion: "2",
 *         voice: {
 *             provider: "HUME_AI",
 *             name: "SAMPLE VOICE"
 *         },
 *         languageModel: {
 *             modelProvider: Hume.empathicVoice.PostedLanguageModelModelProvider.Anthropic,
 *             modelResource: "claude-3-5-sonnet-20240620",
 *             temperature: 1
 *         },
 *         eventMessages: {
 *             onNewChat: {
 *                 enabled: false,
 *                 text: ""
 *             },
 *             onInactivityTimeout: {
 *                 enabled: false,
 *                 text: ""
 *             },
 *             onMaxDurationTimeout: {
 *                 enabled: false,
 *                 text: ""
 *             }
 *         }
 *     }
 */
export interface PostedConfig {
    /** Specifies the EVI version to use. Use `"1"` for version 1, or `"2"` for the latest enhanced version. For a detailed comparison of the two versions, refer to our [guide](/docs/empathic-voice-interface-evi/evi-2). */
    eviVersion: string;
    /** Name applied to all versions of a particular Config. */
    name: string;
    /** An optional description of the Config version. */
    versionDescription?: string;
    prompt?: Hume.empathicVoice.PostedConfigPromptSpec;
    /** A voice specification associated with this Config. */
    voice?: Hume.empathicVoice.PostedVoice;
    /**
     * The supplemental language model associated with this Config.
     *
     * This model is used to generate longer, more detailed responses from EVI. Choosing an appropriate supplemental language model for your use case is crucial for generating fast, high-quality responses from EVI.
     */
    languageModel?: Hume.empathicVoice.PostedLanguageModel;
    /**
     * The eLLM setup associated with this Config.
     *
     * Hume's eLLM (empathic Large Language Model) is a multimodal language model that takes into account both expression measures and language. The eLLM generates short, empathic language responses and guides text-to-speech (TTS) prosody.
     */
    ellmModel?: Hume.empathicVoice.PostedEllmModel;
    /** List of user-defined tools associated with this Config. */
    tools?: (Hume.empathicVoice.PostedUserDefinedToolSpec | undefined)[];
    /** List of built-in tools associated with this Config. */
    builtinTools?: (Hume.empathicVoice.PostedBuiltinTool | undefined)[];
    eventMessages?: Hume.empathicVoice.PostedEventMessageSpecs;
    timeouts?: Hume.empathicVoice.PostedTimeoutSpecs;
}

```

# src/api/resources/empathicVoice/resources/configs/client/requests/PostedConfigVersion.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hume from "../../../../../../index";

/**
 * @example
 *     {
 *         versionDescription: "This is an updated version of the Weather Assistant Config.",
 *         eviVersion: "2",
 *         prompt: {
 *             id: "af699d45-2985-42cc-91b9-af9e5da3bac5",
 *             version: 0
 *         },
 *         voice: {
 *             provider: "HUME_AI",
 *             name: "ITO"
 *         },
 *         languageModel: {
 *             modelProvider: Hume.empathicVoice.PostedLanguageModelModelProvider.Anthropic,
 *             modelResource: "claude-3-5-sonnet-20240620",
 *             temperature: 1
 *         },
 *         ellmModel: {
 *             allowShortResponses: true
 *         },
 *         eventMessages: {
 *             onNewChat: {
 *                 enabled: false,
 *                 text: ""
 *             },
 *             onInactivityTimeout: {
 *                 enabled: false,
 *                 text: ""
 *             },
 *             onMaxDurationTimeout: {
 *                 enabled: false,
 *                 text: ""
 *             }
 *         }
 *     }
 */
export interface PostedConfigVersion {
    /** The version of the EVI used with this config. */
    eviVersion: string;
    /** An optional description of the Config version. */
    versionDescription?: string;
    prompt?: Hume.empathicVoice.PostedConfigPromptSpec;
    /** A voice specification associated with this Config version. */
    voice?: Hume.empathicVoice.PostedVoice;
    /**
     * The supplemental language model associated with this Config version.
     *
     * This model is used to generate longer, more detailed responses from EVI. Choosing an appropriate supplemental language model for your use case is crucial for generating fast, high-quality responses from EVI.
     */
    languageModel?: Hume.empathicVoice.PostedLanguageModel;
    /**
     * The eLLM setup associated with this Config version.
     *
     * Hume's eLLM (empathic Large Language Model) is a multimodal language model that takes into account both expression measures and language. The eLLM generates short, empathic language responses and guides text-to-speech (TTS) prosody.
     */
    ellmModel?: Hume.empathicVoice.PostedEllmModel;
    /** List of user-defined tools associated with this Config version. */
    tools?: (Hume.empathicVoice.PostedUserDefinedToolSpec | undefined)[];
    /** List of built-in tools associated with this Config version. */
    builtinTools?: (Hume.empathicVoice.PostedBuiltinTool | undefined)[];
    eventMessages?: Hume.empathicVoice.PostedEventMessageSpecs;
    timeouts?: Hume.empathicVoice.PostedTimeoutSpecs;
}

```

# src/api/resources/empathicVoice/resources/configs/client/requests/ConfigsListConfigVersionsRequest.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ConfigsListConfigVersionsRequest {
    /**
     * Specifies the page number to retrieve, enabling pagination.
     *
     * This parameter uses zero-based indexing. For example, setting `page_number` to 0 retrieves the first page of results (items 0-9 if `page_size` is 10), setting `page_number` to 1 retrieves the second page (items 10-19), and so on. Defaults to 0, which retrieves the first page.
     */
    pageNumber?: number;
    /**
     * Specifies the maximum number of results to include per page, enabling pagination. The value must be between 1 and 100, inclusive.
     *
     * For example, if `page_size` is set to 10, each page will include up to 10 items. Defaults to 10.
     */
    pageSize?: number;
    /**
     * By default, `restrict_to_most_recent` is set to true, returning only the latest version of each config. To include all versions of each config in the list, set `restrict_to_most_recent` to false.
     */
    restrictToMostRecent?: boolean;
}

```

# src/api/resources/empathicVoice/resources/configs/client/requests/index.ts

```typescript
export { type ConfigsListConfigsRequest } from "./ConfigsListConfigsRequest";
export { type PostedConfig } from "./PostedConfig";
export { type ConfigsListConfigVersionsRequest } from "./ConfigsListConfigVersionsRequest";
export { type PostedConfigVersion } from "./PostedConfigVersion";
export { type PostedConfigName } from "./PostedConfigName";
export { type PostedConfigVersionDescription } from "./PostedConfigVersionDescription";

```

# src/api/resources/empathicVoice/resources/configs/client/requests/PostedConfigVersionDescription.ts

```typescript
/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         versionDescription: "This is an updated version_description."
 *     }
 */
export interface PostedConfigVersionDescription {
    /** An optional description of the Config version. */
    versionDescription?: string;
}

```


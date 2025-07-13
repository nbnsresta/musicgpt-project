import { VoiceService } from "./voice-service";
import { PromptService } from "./prompt-service";

export { ApiClient } from "./api-client";
export { VoiceService } from "./voice-service";
export { PromptService } from "./prompt-service";
export type { ApiResponse, Voice } from "./types";

export const voiceService = new VoiceService();
export const promptService = new PromptService();

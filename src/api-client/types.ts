export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

export interface SearchParams {
  query: string;
  limit?: number;
  offset?: number;
}

export interface Voice {
  id: string;
  name: string;
  imageUrl: string;
  audioUrl: string;
}

type CreateAnythingPrompt = {
  type: "create-anything";
  prompt: string;
  lyrics?: string;
};

type TextToSpeechPrompt = {
  type: "text-to-speech";
  text: string;
  voice: string;
};

export type PromptSubmission = CreateAnythingPrompt | TextToSpeechPrompt;

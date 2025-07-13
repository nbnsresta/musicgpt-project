import { ApiClient } from "./api-client";
import { PromptSubmission } from "./types";

export class PromptService {
  private apiClient: ApiClient;

  constructor(baseUrl: string = "") {
    this.apiClient = new ApiClient(baseUrl);
  }

  /**
   * Submit a prompt
   * @returns Promise<PromptSubmission> The submitted prompt
   */
  async submitPrompt(prompt: PromptSubmission): Promise<any> {
    try {
      const response = await this.apiClient.post<{ data: PromptSubmission }>(
        "/api/prompts",
        prompt
      );
      return response.data;
    } catch (error) {
      console.error("Failed to submit prompt:", error);
      throw new Error("Failed to submit prompt");
    }
  }
}

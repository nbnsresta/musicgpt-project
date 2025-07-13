import { ApiClient } from "./api-client";
import { PromptSubmission } from "./types";

export interface RequestResponse {
  success: boolean;
  request: {
    id: number;
    type: string;
    prompt: string;
    lyrics?: string;
    voice?: string;
    user_id?: string;
    created_at: string;
  };
}

export class PromptService {
  private apiClient: ApiClient;

  constructor(baseUrl: string = "") {
    this.apiClient = new ApiClient(baseUrl);
  }

  /**
   * Submit a prompt
   * @returns Promise<RequestResponse> The submitted request response
   */
  async submitPrompt(prompt: PromptSubmission): Promise<RequestResponse> {
    try {
      const response = await this.apiClient.post<RequestResponse>(
        "/api/requests",
        prompt
      );
      return response.data;
    } catch (error) {
      console.error("Failed to submit prompt:", error);
      throw new Error("Failed to submit prompt");
    }
  }

  /**
   * Get requests with optional filters
   */
  async getRequests(filters?: {
    userId?: string;
    type?: string;
  }): Promise<{ requests: any[] }> {
    try {
      const params = new URLSearchParams();
      if (filters?.userId) params.append("userId", filters.userId);
      if (filters?.type) params.append("type", filters.type);

      const queryString = params.toString();
      const endpoint = queryString
        ? `/api/requests?${queryString}`
        : "/api/requests";

      const response = await this.apiClient.get<{ requests: any[] }>(endpoint);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch requests:", error);
      throw new Error("Failed to fetch requests");
    }
  }
}

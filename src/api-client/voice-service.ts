import { ApiClient } from "./api-client";
import type { Voice } from "./types";

export class VoiceService {
  private apiClient: ApiClient;

  constructor(baseUrl: string = "") {
    this.apiClient = new ApiClient(baseUrl);
  }

  /**
   * Get all available voices
   * @returns Promise<Voice[]> Array of available voices
   */
  async getVoices(): Promise<{ data: Voice[] }> {
    try {
      const response = await this.apiClient.get<{ data: Voice[] }>(
        "/api/voices"
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch voices:", error);
      throw new Error("Failed to fetch voices");
    }
  }
}

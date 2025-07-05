import { ApiClient } from './api-client';
import type { MusicTrack, SearchParams, ApiResponse } from './types';

export class MusicService {
  private apiClient: ApiClient;

  constructor(baseUrl: string = '/api') {
    this.apiClient = new ApiClient(baseUrl);
  }

  async searchTracks(params: SearchParams): Promise<ApiResponse<MusicTrack[]>> {
    const queryParams = new URLSearchParams({
      q: params.query,
      limit: params.limit?.toString() || '20',
      offset: params.offset?.toString() || '0'
    });

    return this.apiClient.get<MusicTrack[]>(`/search?${queryParams}`);
  }

  async getTrack(id: string): Promise<ApiResponse<MusicTrack>> {
    return this.apiClient.get<MusicTrack>(`/tracks/${id}`);
  }

  async getRecommendations(seedTracks: string[]): Promise<ApiResponse<MusicTrack[]>> {
    return this.apiClient.post<MusicTrack[]>('/recommendations', {
      seed_tracks: seedTracks
    });
  }
} 
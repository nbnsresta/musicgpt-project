export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration: number;
  url: string;
  coverImage?: string;
}

export interface SearchParams {
  query: string;
  limit?: number;
  offset?: number;
} 
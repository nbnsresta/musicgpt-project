import { useQuery } from "@tanstack/react-query";
import { VoiceService } from "../api-client/voice-service";
import type { Voice } from "../api-client/types";

const voiceService = new VoiceService();

export function useVoices() {
  return useQuery({
    queryKey: ["voices"],
    queryFn: async (): Promise<{ data: Voice[] }> => {
      return voiceService.getVoices();
    },
    select: (data) => data.data,
  });
}

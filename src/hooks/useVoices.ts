import { useQuery } from "@tanstack/react-query";
import { voiceService } from "../api-client";
import type { Voice } from "../api-client/types";

export function useVoices() {
  return useQuery({
    queryKey: ["voices"],
    queryFn: async (): Promise<{ data: Voice[] }> => {
      return voiceService.getVoices();
    },
    select: (data) => data.data,
  });
}

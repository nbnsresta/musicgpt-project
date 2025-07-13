import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_SUPABASE_KEY!;

let supabaseInstance: ReturnType<typeof createClient> | null = null;

export const getSupabaseClient = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseKey);
  }
  return supabaseInstance;
};

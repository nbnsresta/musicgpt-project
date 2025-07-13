import { NextResponse } from "next/server";
import { getSupabaseClient } from "../../../lib/supabase";
import { getCachedData, setCachedData } from "../../../lib/redis";

export async function GET() {
  try {
    const cacheKey = "voices:all";
    const cachedVoices = await getCachedData(cacheKey);

    if (cachedVoices) {
      console.log("Voices served from cache");
      return NextResponse.json({ data: cachedVoices }, { status: 200 });
    }

    const supabase = getSupabaseClient();

    const { data: voices, error } = await supabase
      .from("Voices")
      .select("*")
      .neq("id", "default")
      .order("name", { ascending: true });

    if (error) {
      console.error("Voices API: Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await setCachedData(cacheKey, voices, 1800);

    console.log("Voices fetched from database and cached");
    return NextResponse.json({ data: voices }, { status: 200 });
  } catch (error) {
    console.error("Voices API: Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

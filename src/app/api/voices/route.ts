import { NextResponse } from "next/server";
import { getSupabaseClient } from "../../../lib/supabase";

export async function GET() {
  try {
    const supabase = getSupabaseClient();

    const { data: voices, error } = await supabase
      .from("Voices")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      console.error("Voices API: Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data: voices }, { status: 200 });
  } catch (error) {
    console.error("Voices API: Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

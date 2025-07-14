import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "../../../lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, prompt, voice, lyrics, userId } = body;

    if (!type || !prompt) {
      return NextResponse.json(
        { error: "Prompt text is required" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();

    // Create the request in the database
    const { data: request, error } = await supabase
      .from("Requests")
      .insert({
        type,
        prompt,
        voice,
        lyrics,
        user_id: userId,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save request" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        request,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving request:", error);
    return NextResponse.json(
      { error: "Failed to save request" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const type = searchParams.get("type");

    const supabase = getSupabaseClient();

    let query = supabase
      .from("Requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (userId) {
      query = query.eq("user_id", userId);
    }
    if (type) {
      query = query.eq("type", type);
    }

    const { data: requests, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch requests" },
        { status: 500 }
      );
    }

    return NextResponse.json({ requests });
  } catch (error) {
    console.error("Error fetching requests:", error);
    return NextResponse.json(
      { error: "Failed to fetch requests" },
      { status: 500 }
    );
  }
}

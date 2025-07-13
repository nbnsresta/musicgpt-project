import { NextResponse } from "next/server";
import type { PromptSubmission } from "../../../api-client/types";

export async function POST(request: Request) {
  const body = await request.json();
  const prompt = body as PromptSubmission;
  console.log(prompt);
  return NextResponse.json({ status: "success" }, { status: 200 });
}

import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK =
  "https://n8n.srv1644260.hstgr.cloud/webhook/a4f8d702-58f9-4acd-8b7f-1ea8bebc6587/chat";

export async function POST(request: NextRequest) {
  const action = request.nextUrl.searchParams.get("action");
  const target = action ? `${N8N_WEBHOOK}?action=${action}` : N8N_WEBHOOK;

  const body = await request.text();

  const response = await fetch(target, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

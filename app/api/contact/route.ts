import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

function escapeCsv(value: string) {
  return `"${value.replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid name, email and message." }, { status: 400 });
  }

  const dataDirectory = path.join(process.cwd(), "data");
  const filePath = path.join(dataDirectory, "contact-submissions.csv");
  await mkdir(dataDirectory, { recursive: true });

  try {
    const line = [new Date().toISOString(), name, email, message].map(escapeCsv).join(",") + "\n";
    await appendFile(filePath, line, "utf8");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unable to save the message." }, { status: 500 });
  }
}

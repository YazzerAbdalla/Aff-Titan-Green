import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises"; // Use fs promises API for async/await support

export async function GET(req: NextRequest) {
  try {
    const data = await fs.readFile("./types/data.json", "utf-8");
    return NextResponse.json({ offers: JSON.parse(data) });
  } catch (err: any) {
    console.error("Error reading JSON file:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const filePath = path.join(process.cwd(), "public", "data.json");

    fs.writeFileSync(filePath, JSON.stringify(json.data, null, 2));

    return NextResponse.json(
      { message: "JSON file written successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

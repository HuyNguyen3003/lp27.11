import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const filePath = path.join(process.cwd(), "public", "form.json");
    const form = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(form);

    const { data: req } = await request.json();

    await jsonData.push(req);

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    return NextResponse.json({ message: "JSON file written successfully" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

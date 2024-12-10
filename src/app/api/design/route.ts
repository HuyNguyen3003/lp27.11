import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { data: req, field } = await request.json();

    const filePath = path.join(process.cwd(), "public", "data.json");
    const form = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(form);

    jsonData[field] = req;

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    return NextResponse.json({
      message: "JSON file written successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

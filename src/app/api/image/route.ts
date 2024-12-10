import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public/image");
    const fileNames = fs.readdirSync(filePath);

    return NextResponse.json({ files: fileNames });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(process.cwd(), "public/image", file.name);

    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ message: "File saved successfully" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get("fileName");

    if (!fileName) {
      return NextResponse.json({ error: "No file specified" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "public/image", fileName);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    fs.unlinkSync(filePath);

    return NextResponse.json({ message: "File deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

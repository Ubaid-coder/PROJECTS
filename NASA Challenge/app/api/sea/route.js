import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/datasets/sea-level-rise/master/data/epa-sea-level.csv"
    );
    if (!res.ok) throw new Error("Failed fetch");
    const text = await res.text();
    return new NextResponse(text, {
      headers: { "Content-Type": "text/csv" },
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch sea level data" }, { status: 500 });
  }
}

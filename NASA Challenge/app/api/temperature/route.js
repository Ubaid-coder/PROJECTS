import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv",
      {
        method: "GET",
        cache: "no-store", 
        headers: {
          "User-Agent": "Mozilla/5.0 (NASA Data Fetch Example)",
          "Accept": "text/csv",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `NASA server error: ${res.status}` },
        { status: 500 }
      );
    }

    const text = await res.text();

    return new NextResponse(text, {
      headers: {
        "Content-Type": "text/csv",
      },
    });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

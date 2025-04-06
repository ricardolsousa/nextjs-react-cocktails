import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const letter = request.nextUrl.searchParams.get("letter");

    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v2/${process.env.NEXT_API}/search.php?f=${letter}`
    );

    if (!res.ok) {
      throw new Error("API externa falhou");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

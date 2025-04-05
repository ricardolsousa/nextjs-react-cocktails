import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v2/${process.env.NEXT_PUBLIC_API_KEY}/latest.php`
    );

    if (!res.ok) {
      throw new Error(
        "Something went wrong trying to get popular drinks. Try again later!"
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

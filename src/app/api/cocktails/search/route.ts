import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const alcoholic = request.nextUrl.searchParams.get("alcoholic");
    const category = request.nextUrl.searchParams.get("category");
    const glass = request.nextUrl.searchParams.get("glass");

    let res;
    if (alcoholic) {
      res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholic}`
      );
    } else if (category) {
      res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      );
    } else if (glass) {
      res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`
      );
    }

    if (!res || !res.ok) {
      throw new Error("API externa falhou");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { letter: string } }
) {
  try {
    const res = await fetch(
      `http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${params.letter}`
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar cocktails" },
      { status: 500 }
    );
  }
}

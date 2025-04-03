"use client";

import CocktailsList from "@/components/cocktails/cocktails-list/cocktails-list";
import Header from "@/components/header/header";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [cocktails, setCocktails] = useState<[]>([]);
  useEffect(() => {
    const fetchCocktails = async () => {
      const response = await axios.get(
        "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );
      if (response.data.drinks) {
        setCocktails(response.data.drinks);
      }
    };
    fetchCocktails();
  }, []);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] p-8 row-start-2 items-center sm:items-start w-full">
        {/* <span className="text-white">{JSON.stringify(cocktails, null, 2)}</span> */}
        <CocktailsList cocktails={cocktails} />
      </main>
    </div>
  );
}

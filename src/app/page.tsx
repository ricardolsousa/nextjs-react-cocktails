"use client";

import AlphabetList from "@/components/alphabet/alphabet-list/alphabet-list";
import CocktailsList from "@/components/cocktails/cocktails-list/cocktails-list";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [cocktails, setCocktails] = useState<[]>([]);
  const [popularCocktails, setPopularCocktails] = useState<[]>([]);
  const [letter, setLetter] = useState<string>("A");

  useEffect(() => {
    const fetchPopularCocktails = async () => {
      const response = await axios.get(`api/cocktails/popular`);
      if (response.data.drinks) {
        setPopularCocktails(response.data.drinks);
      }
    };
    fetchPopularCocktails();

    const fetchCocktails = async () => {
      const response = await axios.get(`api/cocktails`, { params: { letter } });
      if (response.data.drinks) {
        setCocktails(response.data.drinks);
      }
    };
    fetchCocktails();
  }, [letter]);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <span className="text-white text-3xl font-bold">Popular Cocktails</span>
        <CocktailsList cocktails={popularCocktails} />
        <AlphabetList selectedLetter={letter} setSelectedLetter={setLetter} />
        <CocktailsList cocktails={cocktails} />
      </main>
    </div>
  );
}

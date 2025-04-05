"use client";

import AlphabetList from "@/components/alphabet/alphabet-list/alphabet-list";
import CocktailsList from "@/components/cocktails/cocktails-list/cocktails-list";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchCocktailsPage = () => {
  const [cocktails, setCocktails] = useState<[]>([]);
  const [letter, setLetter] = useState<string>("A");

  useEffect(() => {
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
        <AlphabetList selectedLetter={letter} setSelectedLetter={setLetter} />
        <CocktailsList cocktails={cocktails} />
      </main>
    </div>
  );
};

export default SearchCocktailsPage;

"use client";

import AlphabetList from "@/components/alphabet/alphabet-list/alphabet-list";
import CocktailSkeleton from "@/components/cocktails/cocktail-skeleton/cocktail-skeleton";
import CocktailsList from "@/components/cocktails/cocktails-list/cocktails-list";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchCocktailsPage = () => {
  const [cocktails, setCocktails] = useState<[]>([]);
  const [letter, setLetter] = useState<string>("A");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCocktails = async () => {
      const response = await axios.get(`api/cocktails`, { params: { letter } });
      if (response.data.drinks) {
        setCocktails(response.data.drinks);
        setLoading(false);
      }
    };
    fetchCocktails();
  }, [letter]);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <AlphabetList selectedLetter={letter} setSelectedLetter={setLetter} />
        {loading ? (
          <CocktailSkeleton />
        ) : (
          <CocktailsList cocktails={cocktails} />
        )}
      </main>
    </div>
  );
};

export default SearchCocktailsPage;

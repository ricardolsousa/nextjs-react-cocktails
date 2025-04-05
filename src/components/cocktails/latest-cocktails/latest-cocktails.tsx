"use client";

import CocktailsList from "@/components/cocktails/cocktails-list/cocktails-list";
import axios from "axios";
import { useEffect, useState } from "react";
import CocktailSkeleton from "../cocktail-skeleton/cocktail-skeleton";

const LatestCocktails = () => {
  const [latestCocktails, setLatestCocktails] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLatestCocktails = async () => {
      const response = await axios.get(`api/cocktails/latest`);
      if (response.data.drinks) {
        setLatestCocktails(response.data.drinks);
        setLoading(false);
      }
    };
    fetchLatestCocktails();
  }, []);

  return (
    <>
      <span className="text-white text-3xl font-bold">Latest Cocktails</span>
      {loading ? (
        <CocktailSkeleton />
      ) : (
        <CocktailsList cocktails={latestCocktails.slice(0, 8)} />
      )}
    </>
  );
};

export default LatestCocktails;

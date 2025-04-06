"use client";

import CocktailsList from "@/components/cocktails/cocktails-list/cocktails-list";
import axios from "axios";
import { useEffect, useState } from "react";
import CocktailSkeleton from "../cocktail-skeleton/cocktail-skeleton";

const PopularCocktails = () => {
  const [popularCocktails, setPopularCocktails] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPopularCocktails = async () => {
      const response = await axios.get(`/api/cocktails/popular`);
      if (response.data.drinks) {
        setPopularCocktails(response.data.drinks);
        setLoading(false);
      }
    };

    fetchPopularCocktails();
  }, []);

  return (
    <>
      <span className="text-white text-3xl font-bold">Popular Cocktails</span>
      {loading ? (
        <CocktailSkeleton />
      ) : (
        <CocktailsList cocktails={popularCocktails.slice(0, 8)} />
      )}
    </>
  );
};

export default PopularCocktails;

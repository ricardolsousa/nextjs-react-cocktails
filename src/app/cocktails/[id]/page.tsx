"use client";

import CocktailDetails from "@/components/cocktails/cocktail-details/cocktail-details";
import { Cocktail } from "@/components/cocktails/cocktails-list/cocktails-list";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CocktailDetailsPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v2/${process.env.NEXT_API}/lookup.php?i=${id}`
      );
      if (response.data.drinks) {
        setCocktail(response.data.drinks[0]);
      }
    };

    if (id) {
      fetchCocktailDetails();
    }
  }, [id]);

  if (!cocktail) {
    return <p>Cocktail não encontrado!</p>;
  }

  return (
    <div className="flex justify-center">
      <CocktailDetails cocktail={cocktail} />
    </div>
  );
};

export default CocktailDetailsPage;

"use client";

import CocktailDetails from "@/components/cocktails/cocktail-details/cocktail-details";
import { Cocktail } from "@/components/cocktails/cocktails-list/cocktails-list";
import axios from "axios";
import { useState } from "react";

const PickCocktailPage = () => {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [error, setError] = useState<string | null>(null);

  const pickRandomCocktail = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      if (response.data.drinks) {
        setCocktail(response.data.drinks[0]);
        setError(null);
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError(
        "Something happened when trying to pick a random cocktail. Try again later!"
      );
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center mb-8">
        <button
          onClick={pickRandomCocktail}
          className="rounded-2xl text-white bg-stone-800 p-4 font-bold text-xl cursor-pointer"
        >
          Pick Random Cocktail
        </button>
      </div>
      <div className="flex justify-center">
        {cocktail && <CocktailDetails cocktail={cocktail} />}
        {error && <p className="text-xl text-white p-8 font-bold">{error}</p>}
      </div>
    </div>
  );
};

export default PickCocktailPage;

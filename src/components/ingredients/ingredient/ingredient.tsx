"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
  strAlcohol: string;
  strABV: null;
}

interface IngredientProps {
  name: string;
}

const Ingredient = ({ name }: IngredientProps) => {
  const [ingredient, setIngredient] = useState<Ingredient | null>(null);

  useEffect(() => {
    const fetchIngredient = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
      );
      if (response.data.ingredients) {
        setIngredient(response.data.ingredients[0]);
      }
    };

    fetchIngredient();
  }, [name]);

  if (!ingredient) {
    return <p>Ingredient not found!</p>;
  }

  return (
    <div className="flex flex-col gap-1 items-center">
      <Image
        src={`https://www.thecocktaildb.com/images/ingredients/${name}-medium.png`}
        alt={name}
        width={100}
        height={100}
      />
      <span className="text-white text-center font-bold text-xl">{name}</span>
    </div>
  );
};

export default Ingredient;

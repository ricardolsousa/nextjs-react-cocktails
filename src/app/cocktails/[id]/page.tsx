"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CocktailDetailsPage = () => {
  const { id } = useParams();
  const [cocktailDetails, setCocktailDetails] = useState<any>({});

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (response.data.drinks) {
        setCocktailDetails(response.data.drinks);
      }
    };

    if (id) {
      fetchCocktailDetails();
    }
  }, [id]);

  return (
    <div className="text-white">{JSON.stringify(cocktailDetails, null, 2)}</div>
  );
};

export default CocktailDetailsPage;

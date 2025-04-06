"use client";

import { Cocktail } from "@/components/cocktails/cocktails-list/cocktails-list";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { alcoholicStatus, categories } from "../page";

const SearchCocktailsPage = () => {
  const { slug } = useParams();
  const safeSlug = Array.isArray(slug) ? slug[0] : slug;
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCocktailsBySearch = async () => {
      let params = {};

      const matchedCategory = categories.find((c) => c.slug === safeSlug);
      const matchedAlcoholic = alcoholicStatus.find((c) => c.slug === safeSlug);

      if (matchedCategory) {
        params = { category: matchedCategory.value };
      } else if (matchedAlcoholic) {
        params = { alcoholic: matchedAlcoholic.value };
      }

      const response = await axios.get(`/api/cocktails/search`, { params });
      if (response.data.drinks) {
        setCocktails(response.data.drinks);
      } else {
        setCocktails([]);
      }

      setLoading(false);
    };

    if (safeSlug) {
      fetchCocktailsBySearch();
    }
  }, [safeSlug]);

  return (
    <div className="text-white">
      {slug}
      {JSON.stringify(cocktails, null, 2)}
    </div>
  );
};

export default SearchCocktailsPage;

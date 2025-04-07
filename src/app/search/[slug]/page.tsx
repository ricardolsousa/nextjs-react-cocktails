"use client";

import CocktailSkeleton from "@/components/cocktails/cocktail-skeleton/cocktail-skeleton";
import CocktailsList, {
  Cocktail,
} from "@/components/cocktails/cocktails-list/cocktails-list";
import { alcoholicStatus, categories, glasses } from "@/constants/constants";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
      const matchedGlass = glasses.find((c) => c.slug === safeSlug);

      if (matchedCategory) {
        params = { category: matchedCategory.value };
      } else if (matchedAlcoholic) {
        params = { alcoholic: matchedAlcoholic.value };
      } else if (matchedGlass) {
        params = { glass: matchedGlass.value };
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
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <span className="text-white text-3xl font-bold">
          Search by{" "}
          {categories.find((c) => c.slug === safeSlug)?.label ||
            alcoholicStatus.find((a) => a.slug === safeSlug)?.label ||
            glasses.find((g) => g.slug === safeSlug)?.label}
        </span>
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

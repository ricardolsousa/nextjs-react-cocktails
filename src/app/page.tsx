"use client";

import LatestCocktails from "@/components/cocktails/latest-cocktails/latest-cocktails";
import PopularCocktails from "@/components/cocktails/popular-cocktails/popular-cocktails";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <PopularCocktails />
        <LatestCocktails />
      </main>
    </div>
  );
}

import SearchItem from "@/components/search/search-item/search-item";

export const alcoholicStatus = [
  { label: "Alcoholic", value: "Alcoholic", slug: "alcoholic" },
  { label: "Non Alcoholic", value: "Non_Alcoholic", slug: "non-alcoholic" },
];

export const categories = [
  {
    label: "Cocktail",
    value: "Cocktail",
    slug: "cocktail",
  },
  {
    label: "Ordinary Drink",
    value: "Ordinary_Drink",
    slug: "ordinary-drink",
  },
  {
    label: "Shake",
    value: "Shake",
    slug: "shake",
  },
  {
    label: "Cocoa",
    value: "Cocoa",
    slug: "shake",
  },
  {
    label: "Shot",
    value: "Shot",
    slug: "shot",
  },
  {
    label: "Homemade Liqueur",
    value: "Homemade_Liqueur",
    slug: "homemade-liqueur",
  },
  {
    label: "Beer",
    value: "Beer",
    slug: "Beer",
  },
  {
    label: "Soft Drink",
    value: "Soft_Drink",
    slug: "soft-drink",
  },
];

const SearchPage = () => {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full gap-8">
        <div className="w-full flex flex-col gap-4">
          <span className="text-white text-3xl font-bold">
            Search by Alcoholic
          </span>
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            {alcoholicStatus.map((item, index) => (
              <SearchItem key={`${item.slug}-${index}`} item={item} />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <span className="text-white text-3xl font-bold">
            Search by Category
          </span>
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            {categories.map((item, index) => (
              <SearchItem key={`${item.slug}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;

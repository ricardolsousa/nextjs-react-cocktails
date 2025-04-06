import Link from "next/link";

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
    url: "shake",
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
    beer: "Beer",
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
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
          {alcoholicStatus.map((item) => (
            <>
              <Link href={`/search/${item.slug}`}>
                <div className="flex flex-col bg-stone-800 text-white rounded-xl p-2 cursor-pointer min-h-75">
                  <div className="flex flex-col grow justify-between py-2">
                    <div>
                      <p className="font-bold">{item.label}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
          {categories.map((item) => (
            <>
              <Link href={`/search/${item.slug}`}>
                <div className="flex flex-col bg-stone-800 text-white rounded-xl p-2 cursor-pointer min-h-75">
                  <div className="flex flex-col grow justify-between py-2">
                    <div>
                      <p className="font-bold">{item.label}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;

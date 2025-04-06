import SearchItem from "@/components/search/search-item/search-item";
import SearchList from "@/components/search/search-list/search-list";
import { alcoholicStatus, categories } from "@/constants/constants";

const SearchPage = () => {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full gap-8">
        <SearchList label="Search by Alcoholic">
          {alcoholicStatus.map((item, index) => (
            <SearchItem key={`${item.slug}-${index}`} item={item} />
          ))}
        </SearchList>
        <SearchList label="Search by Category">
          {categories.map((item, index) => (
            <SearchItem key={`${item.slug}-${index}`} item={item} />
          ))}
        </SearchList>
      </main>
    </div>
  );
};

export default SearchPage;

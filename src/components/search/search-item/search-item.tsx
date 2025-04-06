import Link from "next/link";

interface SearchItemProps {
  item: {
    label: string;
    value: string;
    slug: string;
  };
}

const SearchItem = ({ item }: SearchItemProps) => {
  return (
    <Link href={`/search/${item.slug}`}>
      <div className="flex flex-col bg-stone-800 text-white rounded-xl p-2 cursor-pointer min-h-50">
        <div className="flex flex-col grow justify-center items-center py-2">
          <div>
            <p className="text-2xl font-bold">{item.label}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;

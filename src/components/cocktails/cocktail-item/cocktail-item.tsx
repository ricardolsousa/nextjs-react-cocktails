import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Cocktail } from "../cocktails-list/cocktails-list";

interface CocktailItemProps {
  cocktail: Cocktail;
}

const CocktailItem = ({ cocktail }: CocktailItemProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/cocktails/${cocktail.idDrink}`);
  };

  return (
    <Link href={`/cocktails/${cocktail.idDrink}`}>
      <div
        className="flex flex-col bg-stone-800 text-white rounded-xl p-2 cursor-pointer min-h-75"
        onClick={onClick}
      >
        <div className="relative h-60">
          <Image
            src={cocktail.strDrinkThumb}
            alt={cocktail.idDrink}
            fill
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col grow justify-between py-2">
          <div>
            <p className="font-bold">{cocktail.strDrink}</p>
            <p className="text-gray-400 text-sm">{cocktail.strCategory}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CocktailItem;

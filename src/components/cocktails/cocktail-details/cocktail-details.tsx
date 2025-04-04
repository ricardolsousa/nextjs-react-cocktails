import Image from "next/image";
import { Cocktail } from "../cocktails-list/cocktails-list";

interface CocktailDetailsProps {
  cocktail: Cocktail;
}

const CocktailDetails = ({ cocktail }: CocktailDetailsProps) => {
  const ingredientKeys = Object.keys(cocktail).filter((key) =>
    key.startsWith("strIngredient")
  );

  const measureKeys = Object.keys(cocktail).filter((key) =>
    key.startsWith("strMeasure")
  );

  return (
    <div className="w-3/4 justify-center flex bg-stone-800 text-white rounded-xl p-2 cursor-pointer">
      <div className="relative w-1/4 h-60">
        <Image
          src={cocktail.strDrinkThumb}
          alt={cocktail.idDrink}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col grow justify-between py-2 ml-4">
        <div>
          <p className="text-3xl font-bold">{cocktail.strDrink}</p>
          <p className="text-gray-400 text-sm">{cocktail.strCategory}</p>
          <span className="text-white">
            {ingredientKeys.map((ingredient, index) => {
              if (!cocktail[ingredient]) {
                return;
              }
              return (
                <div key={index}>
                  {cocktail[ingredient]}: {cocktail[measureKeys[index]]}
                </div>
              );
            })}
            {JSON.stringify(ingredientKeys, null, 2)}
            {JSON.stringify(measureKeys, null, 2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetails;

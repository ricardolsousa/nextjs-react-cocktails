import Image from "next/image";
import CocktailIngredientsList from "../cocktail-ingredients-list/cocktail-ingredients-list";
import { Cocktail } from "../cocktails-list/cocktails-list";

interface CocktailDetailsProps {
  cocktail: Cocktail;
}

const CocktailDetails = ({ cocktail }: CocktailDetailsProps) => {
  const steps = cocktail.strInstructions
    .split(".")
    .map((step) => step.trim())
    .filter((step) => step.length > 0);

  return (
    <div className="md:w-3/4 w-full justify-center flex flex-col lg:flex-row md:flex-row md:items-start items-center bg-stone-800 text-white rounded-xl p-4">
      <div className="relative flex justify-center sm:w-2/4 w-3/4 h-60">
        <Image
          src={cocktail.strDrinkThumb}
          alt={cocktail.idDrink}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="relative w-3/4 sm:w-full flex flex-col grow justify-between py-2 md:ml-4 sm:ml-0">
        <div>
          <p className="text-4xl font-bold md:text-left text-center">
            {cocktail.strDrink}
          </p>
          <p className="text-gray-400 text-sm md:text-left text-center">
            {cocktail.strCategory}
          </p>
        </div>
        <div className="py-6">
          <CocktailIngredientsList cocktail={cocktail} />
        </div>
        <div className="sm:px-4 sm:-pt-8">
          <h4 className="text-2xl text-white font-bold md:text-left text-center">
            Preparation:
          </h4>
          <ul className="list-disc pl-4 text-white py-2">
            {steps.map((step, index) => (
              <li key={index}>{step}.</li> // adiciona o ponto de novo no fim se quiseres
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetails;

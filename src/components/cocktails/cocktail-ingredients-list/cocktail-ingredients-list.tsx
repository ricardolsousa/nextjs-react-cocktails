import Ingredient from "@/components/ingredients/ingredient/ingredient";
import { Cocktail } from "../cocktails-list/cocktails-list";

interface CocktailIngredientsListProps {
  cocktail: Cocktail;
}

const CocktailIngredientsList = ({
  cocktail,
}: CocktailIngredientsListProps) => {
  const ingredientKeys = Object.keys(cocktail).filter((key) =>
    key.startsWith("strIngredient")
  );

  const measureKeys = Object.keys(cocktail).filter((key) =>
    key.startsWith("strMeasure")
  );

  return (
    <span className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
      {ingredientKeys.map((ingredient, index) => {
        if (!cocktail[ingredient]) {
          return;
        }
        return (
          <div className="flex flex-col items-center" key={index}>
            <Ingredient name={cocktail[ingredient]} />
            <span className="text-sm">{cocktail[measureKeys[index]]}</span>
          </div>
        );
      })}
    </span>
  );
};

export default CocktailIngredientsList;

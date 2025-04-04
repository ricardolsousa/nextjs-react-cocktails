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
    </span>
  );
};

export default CocktailIngredientsList;

import CocktailItem from "../cocktail-item/cocktail-item";

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  [others: string]: string;
}

interface CocktailsListProps {
  cocktails: Cocktail[];
}

const CocktailsList = ({ cocktails }: CocktailsListProps) => {
  if (!cocktails || cocktails.length === 0) {
    return <p>Não há cocktails disponiveis!</p>;
  }

  return (
    <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
      {cocktails.map((cocktail: Cocktail, index: number) => (
        <CocktailItem
          cocktail={cocktail}
          key={`cocktail-${cocktail.idDrink}-${index}`}
        />
      ))}
    </div>
  );
};

export default CocktailsList;

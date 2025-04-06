const CocktailSkeleton = () => {
  return (
    <div className="animate-pulse grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-stone-800 rounded-2xl h-75 w-full shadow-md"
        />
      ))}
    </div>
  );
};

export default CocktailSkeleton;

import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 bg-stone-800 w-full px-8 py-4 flex items-center fixed z-1">
      <Link href="/" className="text-white text-3xl font-bold">
        Cocktail's List
      </Link>
    </header>
  );
};

export default Header;

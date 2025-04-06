interface SearchListProps {
  label?: string;
  children: React.ReactNode;
}

const SearchList = ({ label, children }: SearchListProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <span className="text-white text-3xl font-bold">{label}</span>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        {children}
      </div>
    </div>
  );
};

export default SearchList;

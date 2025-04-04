interface AlphabetListProps {
  selectedLetter: string;
  setSelectedLetter: (letter: string) => void;
}

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

const AlphabetList = ({
  selectedLetter,
  setSelectedLetter,
}: AlphabetListProps) => {
  const onClick = (data: string) => {
    setSelectedLetter(data);
  };

  return (
    <div className="w-full flex justify-center">
      <ul className="flex flex-wrap justify-center gap-2 max-w-3xl">
        {alphabet.map((letter) => (
          <li
            onClick={() => onClick(letter)}
            className={`text-white font-bold cursor-pointer text-3xl ${
              selectedLetter == letter && "underline"
            }`}
            key={letter}
          >
            {letter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlphabetList;

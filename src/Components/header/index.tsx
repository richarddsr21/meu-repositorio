export const Header = () => {
  return (
    <header className="w-full h-full drop-shadow-lg">
      <div className="flex justify-between items-center pb-2 px-2">
        <span className="text-base font-bold cursor-pointer bg-primary px-3 py-1 rounded-lg">
          Richard Reis
        </span>
        <ul className="md:flex items-center">
          <li className="mr-16 cursor-pointer">Home</li>
          <li className="mr-16 cursor-pointer">Habilidades</li>
          <li className="mr-16 cursor-pointer">Projetos</li>
          <li className="cursor-pointer font-bold bg-primary px-3 py-1 rounded-lg"></li>
        </ul>
      </div>
    </header>
  );
};

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full h-full drop-shadow-lg">
      <div className="flex justify-between items-center py-4 px-4">
        <span className="text-xl font-bold cursor-pointer bg-primary px-3 py-1 rounded-lg">
          Richard Reis
        </span>
        <GiHamburgerMenu
          className={`text-3xl md:hidden ${isOpen ? "hidden" : ""}`}
          onClick={toggleMenu}
        />
        <IoMdClose
          className={`text-4xl md:hidden ${isOpen ? "" : "hidden"}`}
          onClick={toggleMenu}
        />
        <ul
          className={`md:flex items-center ${
            isOpen
              ? "h-screen max-md:flex max-md:items-center max-md:flex-col max-md:absolute max-md:top-0 max-md:left-0 max-md:py-4 max-md:w-3/4 md:hidden"
              : "hidden"
          }`}
        >
          <li className="md:mr-16 md:cursor-pointer">Home</li>
          <li className="max-md:pt-4 md:mr-16 md:cursor-pointer">
            Habilidades
          </li>
          <li className="max-md:pt-4 md:mr-16 md:cursor-pointer">Projetos</li>
          <li className="md:cursor-pointer">
            <button
              className="max-md:mt-4 font-bold bg-primary px-3 py-1 rounded-lg"
              id="#contact"
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

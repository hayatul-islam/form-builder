import { useState } from "react";
import { Link } from "react-router-dom";
import useBuilder from "../../hooks/useBuilder";
import Button from "../ui/Button";
import GetStartModal from "./GetStartModal";

const Header = () => {
  const { forms } = useBuilder();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container flex justify-between items-center px-6 py-5 ">
      <HeaderBrand />

      <div className="flex items-center gap-3">
        <ThemeMode />
        <div className="flex items-center gap-4">
          {forms?.length > 0 ? (
            <Button
              link="/my-forms"
              className="!px-4 !py-2 !md:px-6 !md:py-2.5 !rounded-full "
            >
              My Forms
            </Button>
          ) : (
            <Button
              onClick={handleOpen}
              className="!px-4 !py-2 !md:px-6 !md:py-2.5 !rounded-full "
            >
              Create Form
            </Button>
          )}
        </div>
      </div>

      {isOpen && <GetStartModal handleClose={handleClose} />}
    </div>
  );
};

export default Header;

export const HeaderBrand = () => (
  <Link
    to="/"
    className="logo-font bg-gradient-to-r text-transparent bg-clip-text text-[22px] md:text-[24px] font-medium text-black dark:text-white flex items-center gap-2"
  >
    {/* <img
      className="h-[36px]"
      src="https://static.thenounproject.com/png/603575-200.png"
      alt=""
    /> */}
    {/* <p>Tailor Forms</p> */}
    <p>Form Builder</p>
    {/* Tailor Forms */}
    {/* tailor forms */}
  </Link>
);

export const ThemeMode = () => {
  const { isDarkTheme, onToggleTheme } = useBuilder();

  return (
    <div>
      {isDarkTheme ? (
        <button onClick={() => onToggleTheme("light")}>
          <img
            className="w-[28px]"
            src="https://cdn-icons-png.freepik.com/512/11960/11960790.png?ga=GA1.1.1050340683.1723631310"
            alt=""
          />
        </button>
      ) : (
        <button onClick={() => onToggleTheme("dark")}>
          <img
            className="w-[28px]"
            // src="https://static.thenounproject.com/png/6724405-200.png"
            src="https://static.thenounproject.com/png/5268238-200.png"
            // src="https://cdn-icons-png.freepik.com/512/11960/11960790.png?ga=GA1.1.1050340683.1723631310"
            alt=""
          />
        </button>
      )}
    </div>
  );
};

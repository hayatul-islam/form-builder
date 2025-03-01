import { useState } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { RxMoon } from "react-icons/rx";
import { Link } from "react-router-dom";
// import logo from "../../assets/img/logo.svg";
// import logo from "../../assets/img/BuildForm.svg";
// import logo from "../../assets/img/Logo_white.svg";
import logo from "../../assets/img/logo_white2.svg";
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
        {/* <ThemeMode /> */}
        <div className="flex items-center gap-4">
          {forms?.length > 0 ? (
            <Button
              link="/my-forms"
              className="!px-4 !py-2 md:!px-6 md:!py-2.5 !rounded-full "
            >
              My Forms
            </Button>
          ) : (
            <Button
              onClick={handleOpen}
              className="!px-4 !py-2 md:!px-6 md:!py-2.5 !rounded-full "
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
    className="logo-font bg-gradient-to-r text-transparent bg-clip-text text-[22px] md:text-[24px] font-medium !text-black dark:!text-white flex items-center gap-2"
  >
    <img className="h-[24px] md:h-[30px]" src={logo} alt="logo" />
    {/* <p>Tailor Forms</p> */}
    {/* Form Builder */}
    {/* Tailor Forms */}
    {/* tailor forms */}
  </Link>
);

export const ThemeMode = () => {
  const { isDarkTheme, onToggleTheme } = useBuilder();

  return (
    <div className="flex items-center">
      {isDarkTheme ? (
        <button
          onClick={() => onToggleTheme("light")}
          className="text-yellow-50"
        >
          <HiOutlineSun size={20} />
        </button>
      ) : (
        <button
          onClick={() => onToggleTheme("dark")}
          className="text-black flex justify-center items-center"
        >
          <RxMoon size={20} />
        </button>
      )}
    </div>
  );
};

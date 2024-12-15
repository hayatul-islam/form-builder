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

      {isOpen && <GetStartModal handleClose={handleClose} />}
    </div>
  );
};

export default Header;

export const HeaderBrand = () => (
  <Link
    to="/"
    className="bg-gradient-to-r text-transparent bg-clip-text text-[22px] md:text-[24px] font-bold  from-[#1C28AA] to-[#3A86FF]"
  >
    Form Builder
  </Link>
);

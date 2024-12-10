import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import GetStartModal from "./GetStartModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container flex justify-between items-center px-6 py-5 ">
      <div>
        <Link to="/" className="text-[24px] font-medium text-primary">
          Form Builder
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {/* <Link to="/templates" className="hover:text-primary">
          Templates
        </Link> */}
        {/* <Button className="bg-transparent border !text-black w-9 h-9 !p-0 flex justify-center items-center">
          <MdOutlineDarkMode className="text-[20px]" />
        </Button> */}

        <Button onClick={handleOpen} className="!px-6 !py-2.5 !rounded-full ">
          Create Form
        </Button>
      </div>

      {isOpen && <GetStartModal handleClose={handleClose} />}
    </div>
  );
};

export default Header;

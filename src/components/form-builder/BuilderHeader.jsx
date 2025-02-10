import { FaCode, FaRegEye } from "react-icons/fa6";

import { useState } from "react";
import Code from "../code/Code";
import { HeaderBrand } from "../common/Header";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

const BuilderHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    // <div className="max-w-[800px] mx-auto py-1 pl-[60px]">
    <div className="h-[70px] flex justify-between items-center px-6 py-4 shadow-sm ">
      <HeaderBrand />

      <div className="flex items-center gap-3">
        <Button
          onClick={handleOpen}
          className="flex justify-center items-center gap-2 border border-primary !text-primary !bg-gradient-to-r !from-gray !to-white dark:!from-dark dark:!to-dark "
        >
          <FaCode className="text-[18px]" />
          <span> Code</span>
        </Button>

        <Button
          link="/preview"
          className="flex justify-center items-center gap-2"
        >
          <FaRegEye className="text-[14px]" />
          <span>Preview</span>
        </Button>
      </div>
      {isOpen && (
        <Modal title="Form code" onClose={handleClose} width="1100">
          <Code />
        </Modal>
      )}
    </div>
    // </div>
  );
};

export default BuilderHeader;

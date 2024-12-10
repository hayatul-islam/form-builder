import { useState } from "react";
import { RiDragMove2Fill } from "react-icons/ri";
import GetStartModal from "../common/GetStartModal";
import Button from "../ui/Button";

const HeroSectionTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mt-32 bg-gradient-to-b  flex items-center justify-center ">
      <div className="text-center px-6 space-y-5 py-5">
        <button className="px-4 py-2 border-2 rounded-full border-white text-black text-[14px] font-medium cursor-auto flex items-center gap-1 justify-center mx-auto bg-gradient-to-r from-[#F7F7F7] to-[#ffffff]">
          <RiDragMove2Fill />
          Welcome to Form Builder
        </button>
        <h1 className="text-[54px] leading-none space-y-2 text-black font-normal ">
          {/* <span> Faster form building with </span>
          <span className="block"> drag and drop</span> */}

          {/* <span> Your Forms, Your Way</span> */}
          {/* <span> Power Up Your Forms</span> */}
          {/* <span>Create Forms, Your Way</span> */}
          <span>Build Better Forms, Faster</span>
          <span className="block">Drag, drop, done</span>
        </h1>
        <p className="text-gray-500 text-[20px] max-w-[550px] mx-auto">
          {/* Create beautiful forms and surveys without writing a single line of
          code—design, customize, and generate code! */}
          Create beautiful forms and surveys without writing a single line of
          code and saving your valuable time.
        </p>
        <div className=" flex justify-center gap-4">
          <Button onClick={handleOpen}>Creating form for free</Button>
          <Button
            link="/templates"
            className="border border-gray-200 !text-black !bg-gradient-to-r !from-gray !to-white "
          >
            Demo
          </Button>
        </div>
      </div>
      {isOpen && <GetStartModal handleClose={handleClose} />}
    </div>
  );
};

export default HeroSectionTwo;

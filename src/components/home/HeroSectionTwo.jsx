import { useState } from "react";
import { BsStars } from "react-icons/bs";
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
    <div className="container mt-24 md:mt-32 bg-gradient-to-b flex items-center justify-center ">
      <div className="text-center  sm:px-6 space-y-3 md:space-y-5 py-5">
        <button className="px-2 sm:px-4 py-1.5 sm:py-2 border-2 rounded-full border-white dark:border-gray-950 text-black dark:text-white text-[10px] sm:text-[14px] font-medium cursor-auto flex items-center gap-1 justify-center mx-auto bg-gradient-to-r from-gray to-white dark:from-black dark:to-[#000] ">
          {/* <GiStarShuriken /> */}
          <BsStars />
          Welcome to Form Builder
        </button>
        <div className="text-[24px] sm:text-[32px] md:text-[54px] leading-none space-y-2 text-black font-normal dark:text-white ">
          {/* <span> Faster form building with </span>
          <span className="block"> drag and drop</span> */}

          {/* <span> Your Forms, Your Way</span> */}
          {/* <span> Power Up Your Forms</span> */}
          {/* <span>Create Forms, Your Way</span> */}
          <h2>Build Better Forms, Faster</h2>
          <h2 className="block">Drag, Drop, Done</h2>
        </div>
        <p className="text-gray-500 dark:text-gray-300 text-[14px] sm:text-[18px] md:text-[20px] max-w-[375px] sm:max-w-[550px] mx-auto">
          {/* Create beautiful forms and surveys without writing a single line of
          code—design, customize, and generate code! */}
          Create beautiful forms and surveys without writing a single line of
          code and saving your valuable time.
        </p>
        <div className=" flex justify-center gap-4">
          <Button onClick={handleOpen}>Creating form for free</Button>
          <Button
            link="/templates"
            className="border border-gray-200 dark:border-gray-800 !text-black dark:!text-white !from-gray !to-white 
            dark:!from-black dark:!to-dark "
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

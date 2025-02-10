import { useState } from "react";
import editFormIcon from "../../assets/icons/build-form.svg";
import bgImg from "../../assets/img/bg.png";
import GetStartModal from "../common/GetStartModal";
import SectionHeadline from "../common/SectionHeadline";
import Button from "../ui/Button";

const GetStarted = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="pb-20 md:pb-36">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, #0B0D23, transparent), url(${bgImg})`,
          // backgroundImage: `linear-gradient(to bottom, rgb(11, 13, 35), transparent), url(${bgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "soft-light",
        }}
        className="flex justify-center text-center py-12 px-6 rounded-xl container"
      >
        <div className="space-y-6">
          <img
            className="w-[180px] mx-auto text-red-500 "
            src={editFormIcon}
            alt="build-form"
          />
          <SectionHeadline
            className="text-white"
            title="Your forms, your style"
            subTitle=" Customize the style and content of your forms to match your brand"
            button={
              <Button className="!mt-3" onClick={handleOpen}>
                Get Started for free
              </Button>
            }
          />
        </div>

        {isOpen && <GetStartModal handleClose={handleClose} />}
      </div>
    </div>
  );
};

export default GetStarted;

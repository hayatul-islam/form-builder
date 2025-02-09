import { useState } from "react";
import editFormIcon from "../../assets/icons/build-form.svg";
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
    <div className=" flex justify-center text-center px-6 pb-20 md:pb-36 container">
      <div className="space-y-6">
        <img
          className="w-[180px] mx-auto text-red-500 "
          src={editFormIcon}
          // src="https://img.freepik.com/free-vector/hand-student-writing-with-pencil-paper-3d-illustration-cartoon-drawing-hand-holding-writing-tool-document-test-paper-3d-style-white-background-education-concept_778687-1664.jpg?ga=GA1.1.1050340683.1723631310&semt=ais_hybrid"
          alt="build-form"
        />
        <SectionHeadline
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
  );
};

export default GetStarted;

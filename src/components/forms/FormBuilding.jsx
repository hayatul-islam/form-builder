import { useState } from "react";
import { Link } from "react-router-dom";
import { demo } from "../../data";
import CreateFormModal from "../common/CreateFormModal";
import SectionHeadline from "../common/SectionHeadline";
import Modal from "../ui/Modal";

const FormBuilding = ({ type = "page", onModalType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    if (type === "modal") {
      return onModalType("create-form");
    }
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="max-w-[900px] mx-auto space-y-12">
        <SectionHeadline
          title="Create a Form"
          subTitle="Create or utilize a form to start gathering data"
        />

        {type === "modal" ? (
          <div className="flex justify-center items-center gap-4 md:gap-6 mx-auto pb-8">
            <div className="space-y-3">
              <BuildNewForm
                onClick={onOpenModal}
                className="w-[120px] !h-[120px] sm:!h-[150px] sm:w-[180px] lg:!h-[220px] lg:w-[250px] mx-auto"
              />
              <div className="text-center text-black hidden sm:block">
                <h3 className="font-medium text-[18px] md:text-[22px] ">
                  Start form scratch
                </h3>
                <p className="hidden sm:block">A blank slate is all you need</p>
              </div>
            </div>
            <div className="space-y-3">
              <BuildWithDemo
                className="!bg-primary/10 w-[120px] !h-[120px] sm:!h-[150px] sm:w-[180px] lg:!h-[220px] lg:w-[250px] rounded-2xl"
                iconClass="!w-[100px] h-[150px]"
              />
              <div className="text-center text-black hidden sm:block">
                <h3 className="font-medium text-[18px] md:text-[22px] ">
                  Use Template
                </h3>
                <p>Choose from {demo?.length}+ pre-made forms</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-12 px-6">
            <div className="space-y-3">
              <BuildNewForm onClick={() => onOpenModal({})} />
              <div className="text-center text-black dark:text-white">
                <h3 className="font-medium text-[20px] sm:text-[22px] ">
                  Start form scratch
                </h3>
                <p className="text-[14px] sm:text-[16px] text-gray-500 dark:text-gray-400">
                  A blank slate is all you need
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <BuildWithDemo />
              <div className="text-center text-black">
                <h3 className="font-medium text-[20px] sm:text-[22px] text-black dark:text-white">
                  Use Template
                </h3>
                <p className="text-[14px] sm:text-[16px] text-gray-500 dark:text-gray-400">
                  Choose from {demo?.length}+ pre-made forms
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <Modal title="New Form" onClose={onClose} width="600">
          <CreateFormModal demo={{}} />
        </Modal>
      )}
    </>
  );
};

export default FormBuilding;

export const BuildNewForm = ({ className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} h-[200px] sm:h-[280px] lg:h-[350px] w-full rounded-3xl bg-primary/10 text-primary flex justify-center items-center text-black/50 hover:scale-105 duration-500 transform`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="80"
        height="80"
      >
        <path d="M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z"></path>
      </svg>
    </button>
  );
};

export const BuildWithDemo = ({
  className,
  iconClass,
  link = "/templates",
}) => {
  return (
    <Link
      to={link}
      className={`${className} h-[200px] sm:h-[280px] lg:h-[350px] w-full rounded-3xl  flex justify-center items-center bg-white dark:bg-gray-950 hover:scale-105 duration-500 transform`}
    >
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 162 204"
        className={`${iconClass} w-[100px] h-[150px] sm:w-[150px] sm:h-[200px] lg:w-[200px] lg:h-[300px]`}
      >
        <rect width="162" height="204" rx="4"></rect>
        <rect x="9" y="9" width="144" height="46" rx="4" fill="#09F"></rect>
        <circle cx="35" cy="28" r="11" fill="#FFB629"></circle>
        <path
          d="M115.7 22.39 85 55h64l-28.871-32.544a3 3 0 0 0-4.429-.066Z"
          fill="#9EDC36"
        ></path>
        <path
          d="M89.754 29.875 66 55h50.5L94.174 29.94a3 3 0 0 0-4.42-.065Z"
          fill="#78BB07"
        ></path>
        <rect x="9" y="90" width="144" height="14" rx="7" fill="#C8C8E3"></rect>
        <rect
          x="9"
          y="137"
          width="144"
          height="14"
          rx="7"
          fill="#C8C8E3"
        ></rect>
        <rect x="9" y="67" width="68" height="14" rx="7" fill="#E6E6F5"></rect>
        <rect x="9" y="114" width="68" height="14" rx="7" fill="#E6E6F5"></rect>
      </svg>
    </Link>
  );
};

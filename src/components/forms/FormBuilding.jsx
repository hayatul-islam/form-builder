import { useState } from "react";
import { Link } from "react-router-dom";
import CreateFormModal from "../builder/CreateFormModal";
import Modal from "../ui/Modal";

const FormBuilding = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="max-w-[900px] mx-auto space-y-12">
        <div className="text-center">
          <h3 className="text-[32px] font-medium">Create a Form</h3>
          <p>Create or utilize a form to start gathering data</p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-3">
            <button
              onClick={onOpenModal}
              className="h-[350px] w-full rounded-xl bg-gray flex justify-center items-center text-black/50"
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
            <div className="text-center">
              <h3 className="font-medium text-[22px] ">Start form scratch</h3>
              <p>A blank slate is all you need</p>
            </div>
          </div>
          <div className="space-y-3">
            <Link
              to="/templates"
              className="h-[350px] w-full rounded-xl bg-gray flex justify-center items-center text-primary"
            >
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 162 204"
                width="200"
                height="300"
              >
                <rect width="162" height="204" rx="4" fill="#fff"></rect>
                <rect
                  x="9"
                  y="9"
                  width="144"
                  height="46"
                  rx="4"
                  fill="#09F"
                ></rect>
                <circle cx="35" cy="28" r="11" fill="#FFB629"></circle>
                <path
                  d="M115.7 22.39 85 55h64l-28.871-32.544a3 3 0 0 0-4.429-.066Z"
                  fill="#9EDC36"
                ></path>
                <path
                  d="M89.754 29.875 66 55h50.5L94.174 29.94a3 3 0 0 0-4.42-.065Z"
                  fill="#78BB07"
                ></path>
                <rect
                  x="9"
                  y="90"
                  width="144"
                  height="14"
                  rx="7"
                  fill="#C8C8E3"
                ></rect>
                <rect
                  x="9"
                  y="137"
                  width="144"
                  height="14"
                  rx="7"
                  fill="#C8C8E3"
                ></rect>
                <rect
                  x="9"
                  y="67"
                  width="68"
                  height="14"
                  rx="7"
                  fill="#E6E6F5"
                ></rect>
                <rect
                  x="9"
                  y="114"
                  width="68"
                  height="14"
                  rx="7"
                  fill="#E6E6F5"
                ></rect>
              </svg>
            </Link>
            <div className="text-center">
              <h3 className="font-medium text-[22px] ">Use Template</h3>
              <p>Choose from 100+ pre-made forms</p>
            </div>
          </div>
        </div>
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

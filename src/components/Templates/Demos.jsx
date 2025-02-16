import { useState } from "react";
import { HiTemplate } from "react-icons/hi";
import { demo } from "../../data";
import CreateFormModal from "../common/CreateFormModal";
import Modal from "../ui/Modal";

const Demos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectDemo, setSelectDemo] = useState({});

  const onOpenModal = (demo) => {
    setSelectDemo(demo || {});
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    setSelectDemo({});
  };

  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6 mb-20">
      <div className="space-y-2">
        <button
          onClick={() => onOpenModal({})}
          className="h-[300px] w-full rounded-3xl bg-primary/10 text-primary flex justify-center items-center text-black/50 hover:scale-105 duration-500 transform"
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
        {/* <h3 className="font-medium text-[18px] text-center">
          Start form scratch
        </h3> */}
      </div>
      {demo?.map((demo) => (
        <div
          key={demo?.id}
          className="sm:h-[300px] w-auto rounded-3xl bg-gray flex justify-center items-center relative group hover:scale-105 duration-500 transform"
        >
          <img
            src={demo?.image}
            className="w-full h-full rounded-3xl pointer-events-none group-hover:blur-sm transition duration-300"
            alt=""
          />

          <button
            onClick={() => onOpenModal(demo)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 z-10 opacity-0 group-hover:opacity-100 transition duration-500 text-[12px] flex justify-center items-center gap-1"
          >
            <HiTemplate />
            <span> Use Template</span>
          </button>
        </div>
      ))}

      {isOpen && (
        <Modal title={"Create a new form"} onClose={onClose} width="600">
          <CreateFormModal demo={selectDemo} />
        </Modal>
      )}
    </div>
  );
};

export default Demos;

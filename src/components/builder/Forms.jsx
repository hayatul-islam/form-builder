import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { demo } from "../../data";
import Modal from "../ui/Modal";
import CreateFormModal from "./CreateFormModal";

const Forms = () => {
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
    <div className="container grid grid-cols-4 gap-5 pt-6">
      <div className="space-y-2">
        <button
          onClick={() => onOpenModal({})}
          className="h-[250px] w-full rounded-xl bg-gray flex justify-center items-center text-primary"
        >
          <AiOutlinePlus className="text-[48px]" />
        </button>
        <h3 className="font-medium text-[18px] text-center">
          Start form scratch
        </h3>
      </div>
      {demo?.map((demo) => (
        <div key={demo?.id} className="space-y-2">
          <button
            onClick={() => onOpenModal(demo)}
            className="h-[250px] w-full rounded bg-gray flex justify-center items-center text-primary"
          ></button>
          <h3 className="font-medium text-[18px] text-center capitalize">
            {demo?.name}
          </h3>
        </div>
      ))}

      {isOpen && (
        <Modal title={"New Form"} onClose={onClose} width="600">
          <CreateFormModal demo={selectDemo} />
        </Modal>
      )}
    </div>
  );
};

export default Forms;

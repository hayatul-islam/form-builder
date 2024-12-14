import moment from "moment";
import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useBuilder from "../../hooks/useBuilder";
import DeleteModal from "../ui/DeleteModal";
import Modal from "../ui/Modal";

const MyForms = () => {
  const { forms, onDeleteForm } = useBuilder();
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const onOpen = (id) => {
    setIsOpen(true);
    setDeleteId(id);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDeleteForm(deleteId);
    setDeleteId("");
    onClose();
  };

  return (
    <>
      {forms?.length > 0 && (
        <div className="container space-y-2">
          <h3>My Forms</h3>
          <div className="space-y-3">
            {forms?.map((form) => (
              <div
                key={form?.id}
                className="bg-white/50 shadow-sm border rounded border-gray px-4 py-2 flex justify-between items-center group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-black/10 rounded ">
                    <FaWpforms className="text-primary  text-[18px]" />
                  </div>
                  <div>
                    <h4 className="pt-1">{form?.name}</h4>
                    <p className="text-[12px] text-black/40">
                      Create on: {moment(form?.createdAt)?.format("ll")}
                    </p>
                  </div>
                </div>
                <div className="hidden group-hover:flex items-center gap-2">
                  <Link
                    to={`/builder/${form?.id}`}
                    className="text-[20px] text-blue-500"
                  >
                    <BiSolidEdit />
                  </Link>
                  <button
                    onClick={() => onOpen(form?.id)}
                    className="text-[20px] text-red-500"
                  >
                    <MdOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {isOpen && (
            <Modal width="400" isClose={false} onClose={onClose}>
              <DeleteModal onClick={handleDelete} />
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default MyForms;

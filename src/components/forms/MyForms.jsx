import moment from "moment";
import { useState } from "react";
import { DiCode } from "react-icons/di";
import { FiEdit, FiEye } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import useBuilder from "../../hooks/useBuilder";
import Code from "../code/Code";
import DeleteModal from "../ui/DeleteModal";
import Modal from "../ui/Modal";

const MyForms = () => {
  const { forms, onDeleteForm, onGetForm } = useBuilder();
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const navigate = useNavigate();

  const onOpen = (type) => {
    setIsOpen(true);
    setModalType(type);
  };

  const onClose = () => {
    setIsOpen(false);
    setModalType("");
  };

  const handlePreview = (id) => {
    onGetForm(id);
    navigate(`/preview/${id}`);
  };

  const handleCode = (id) => {
    onGetForm(id);
    onOpen("code");
  };

  const handleDeleteConfirm = (id) => {
    setDeleteId(id);
    onOpen("delete");
  };

  const handleDelete = () => {
    onDeleteForm(deleteId);
    setDeleteId("");
    onClose();
  };

  return (
    <>
      {forms?.length > 0 && (
        <div className="container space-y-4 ">
          <h2 className="text-[20px] font-bold text-black">My Forms</h2>

          <div className="overflow-x-auto rounded-lg border">
            <table className="table-auto w-full bg-white text-left rounded-lg">
              <thead className="bg-primary/80 text-white">
                <tr>
                  <th className="py-5 px-6 text-sm font-semibold">Form Name</th>
                  <th className="text-center text-sm font-semibold">Code</th>
                  <th className="text-center text-sm font-semibold">Preview</th>
                  <th className="text-center text-sm font-semibold">Edit</th>
                  <th className="text-center text-sm font-semibold">Delete</th>
                </tr>
              </thead>
              <tbody>
                {forms.map((form, index) => (
                  <tr
                    key={index}
                    className="even:bg-gray-50 odd:bg-gray-100 hover:bg-white transition-all duration-300"
                  >
                    <td className="py-4 px-6">
                      <div className="text-black">
                        <h4 className="text-[16px] font-medium">
                          {form?.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Created on: {moment(form?.createdAt).format("ll")}
                        </p>
                      </div>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handleCode(form?.id)}
                        className="text-black"
                      >
                        <DiCode size={32} />
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handlePreview(form?.id)}
                        className="text-black "
                      >
                        <FiEye size={20} className="mx-auto" />
                      </button>
                    </td>
                    <td className="text-center">
                      <Link to={`/builder/${form?.id}`} className="text-black ">
                        <FiEdit size={20} className="mx-auto" />
                      </Link>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handleDeleteConfirm(form?.id)}
                        className="text-black "
                      >
                        <RiDeleteBinLine size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {isOpen && modalType === "code" && (
            <Modal title="Form Code" width="1100" onClose={onClose}>
              <Code />
            </Modal>
          )}
          {isOpen && modalType === "delete" && (
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

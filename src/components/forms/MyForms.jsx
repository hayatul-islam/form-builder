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
          <h2 className="text-[20px] font-bold text-black dark:text-white">
            My Forms
          </h2>

          <div className="overflow-x-auto rounded-lg border dark:border-gray-900">
            <table className="table-auto w-full bg-white text-left rounded-lg">
              <thead className="bg-primary/80 text-white">
                <tr>
                  <th className="py-5 px-6 text-sm font-semibold">Form Name</th>
                  <th className="text-center text-sm font-semibold min-w-[80px]">
                    Code
                  </th>
                  <th className="text-center text-sm font-semibold min-w-[80px]">
                    Preview
                  </th>
                  <th className="text-center text-sm font-semibold min-w-[80px]">
                    Edit
                  </th>
                  <th className="text-center text-sm font-semibold min-w-[80px]">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {forms.map((form, index) => (
                  <tr
                    key={index}
                    className="even:bg-gray-50 dark:even:bg-dark odd:bg-gray-100 dark:odd:bg-gray-950 hover:bg-white dark:hover:bg-gray-950 transition-all duration-300"
                  >
                    <td className="py-4 px-6 min-w-[300px]">
                      <div className="text-black dark:text-white">
                        <h4 className="text-[16px] font-medium">
                          {form?.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          Created on: {moment(form?.createdAt).format("ll")}
                        </p>
                      </div>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handleCode(form?.id)}
                        className="text-black dark:text-gray-300"
                      >
                        <DiCode size={32} />
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handlePreview(form?.id)}
                        className="text-black dark:text-gray-300"
                      >
                        <FiEye size={20} className="mx-auto" />
                      </button>
                    </td>
                    <td className="text-center">
                      <Link
                        to={`/builder/${form?.id}`}
                        className="text-black dark:text-gray-300"
                      >
                        <FiEdit size={20} className="mx-auto" />
                      </Link>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handleDeleteConfirm(form?.id)}
                        className="text-black dark:text-gray-300"
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

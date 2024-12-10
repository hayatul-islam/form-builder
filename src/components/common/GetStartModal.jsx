import { useState } from "react";
import FormBuilding from "../forms/FormBuilding";
import Modal from "../ui/Modal";
import CreateFormModal from "./CreateFormModal";

const GetStartModal = ({ handleClose }) => {
  const [modalType, setModalType] = useState("get-started");

  const handleModalType = (type) => {
    setModalType(type);
  };

  return (
    <div>
      {modalType === "create-form" ? (
        <Modal title="Crete new form" onClose={handleClose} width="500">
          <CreateFormModal />
        </Modal>
      ) : (
        <Modal title=" " onClose={handleClose} width="700">
          <FormBuilding type="modal" onModalType={handleModalType} />
        </Modal>
      )}
    </div>
  );
};

export default GetStartModal;

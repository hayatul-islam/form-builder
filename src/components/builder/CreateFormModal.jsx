import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useDesigner from "../../hooks/useDesigner";
import Button from "../ui/Button";

const CreateFormModal = ({ demo, onClose }) => {
  const { onAddForm } = useDesigner();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(demo?.name || "");

  const onSubmit = (e) => {
    e.preventDefault();

    const newForm = {
      ...demo,
      id: uuidv4(),
      name: inputValue,
    };

    onAddForm(newForm);
    navigate(`/builder/${newForm?.id}`);
    onClose();
  };

  return (
    <form onSubmit={onSubmit} className="py-2 space-y-5">
      <div className="space-y-1.5">
        <label className="font-medium">Name</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full border rounded px-4 py-2 border-black/30 focus:outline-none focus:border-black/60"
          required
        />
      </div>

      <div className="flex justify-end items-center gap-4 pt-6">
        <Button type="button" onClick={onClose} className="!bg-gray text-black">
          Cancel
        </Button>
        <Button type="submit" className="px-6">
          Save
        </Button>
      </div>
    </form>
  );
};

export default CreateFormModal;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { initialTemplate } from "../../data";
import useBuilder from "../../hooks/useBuilder";
import Button, { SecondaryButton } from "../ui/Button";

const CreateFormModal = ({ demo, onClose }) => {
  const { onAddForm } = useBuilder();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(demo?.name || "");

  const onSubmit = (e) => {
    e.preventDefault();

    const initialValues = demo?.id ? demo : initialTemplate;

    const newForm = {
      ...initialValues,
      id: uuidv4(),
      name: inputValue,
      elements: demo?.elements || [],
      createdAt: new Date(),
    };

    onAddForm(newForm);
    navigate(`/builder`);
    onClose();
  };

  return (
    <form onSubmit={onSubmit} className="py-2 space-y-5">
      <div className="space-y-1.5">
        <label className="font-medium text-[18px] dark:text-gray-100">
          Name
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full border rounded px-4 py-2 text-[15px] text-black border-black/30 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:border-black/60 bg-transparent"
          required
        />
      </div>

      <div className="flex justify-end items-center gap-4 pt-6">
        <SecondaryButton
          className="dark:!bg-transparent"
          type="button"
          onClick={onClose}
        >
          Cancel
        </SecondaryButton>
        <Button type="submit" className="!px-6">
          Save
        </Button>
      </div>
    </form>
  );
};

export default CreateFormModal;

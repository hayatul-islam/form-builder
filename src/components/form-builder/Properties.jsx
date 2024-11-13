import { useState } from "react";
import { MdOutlineColorLens } from "react-icons/md";
import { RiSettingsLine } from "react-icons/ri";
import useBuilder from "../../hooks/useBuilder";
import ToggleButton from "../common/ToggleButton";
import Input from "./Input";

const Properties = () => {
  const { selectedElement, setSelectedElement, onUpdateElement } = useBuilder();
  const [type, setType] = useState("property");

  const onChange = (key, value) => {
    const newElement = {
      ...selectedElement,
      [key]: value,
    };

    setSelectedElement(newElement);
    onUpdateElement(selectedElement.id, newElement);
  };

  return (
    <div className="rounded-lg space-y-4">
      <div className="border border-primary/50 w-[130px] p-0.5 mx-auto h-[35px] rounded-full flex items-center justify-between">
        <button
          onClick={() => setType("property")}
          className={`${
            type === "property"
              ? "bg-primary/70 text-white"
              : "bg-gray text-black"
          } rounded-full w-[60px] h-full flex justify-center items-center`}
        >
          <RiSettingsLine size={16} />
        </button>
        <button
          onClick={() => setType("design")}
          className={`${
            type === "design"
              ? "bg-primary/70 text-white"
              : "bg-gray text-black"
          } rounded-full w-[60px] h-full flex justify-center items-center`}
        >
          <MdOutlineColorLens />
        </button>
      </div>

      {type === "property" && (
        <>
          <Input
            name="label"
            label="Label"
            value={selectedElement?.label || ""}
            type="text"
            onChange={onChange}
          />
          <Input
            name="placeholder"
            label="Placeholder"
            value={selectedElement?.placeholder || ""}
            type="text"
            onChange={onChange}
          />
          <ToggleButton
            name="isRequired"
            label="Required"
            value={selectedElement?.isRequired || false}
            onChange={onChange}
          />
          <ToggleButton
            name="isReadOnly"
            label="Read Only"
            value={selectedElement?.isReadOnly || false}
            onChange={onChange}
          />
        </>
      )}

      {type === "design" && (
        <>
          <div>ddd</div>
        </>
      )}
    </div>
  );
};

export default Properties;

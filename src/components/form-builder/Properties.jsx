import { useState } from "react";
import useBuilder from "../../hooks/useBuilder";
import Input from "../ui/Input";
import Options from "../ui/Options";
import Select from "../ui/Select";
import ToggleButton from "../ui/ToggleButton";

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

  let isPlaceholder = true;
  if (selectedElement?.type === "select") {
    isPlaceholder = false;
  }

  return (
    <div className="rounded-lg space-y-4">
      {/* <div className="border border-primary/50 w-[130px] p-0.5 mx-auto h-[35px] rounded-full flex items-center justify-between">
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
      </div> */}

      <div className="text-center py-2 font-bold uppercase bg-primary/20 text-primary">
        <h2>{selectedElement?.name}</h2>
      </div>

      <Input
        name="label"
        label="Label"
        value={selectedElement?.label || ""}
        type="text"
        onChange={onChange}
      />
      {isPlaceholder && (
        <Input
          name="placeholder"
          label="Placeholder"
          value={selectedElement?.placeholder || ""}
          type="text"
          onChange={onChange}
        />
      )}

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

      {selectedElement?.options && (
        <Options
          name="options"
          label="Options"
          onChange={onChange}
          options={selectedElement?.options}
        />
      )}

      <Select
        label="No of columns"
        name="numberOfColumns"
        value={selectedElement?.numberOfColumns || ""}
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
          { label: "4", value: "4" },
        ]}
        onChange={onChange}
      />

      {type === "design" && (
        <>
          <div>ddd</div>
        </>
      )}
    </div>
  );
};

export default Properties;

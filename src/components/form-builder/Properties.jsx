import useDesigner from "../../hooks/useDesigner";
import ToggleButton from "../common/ToggleButton";

const Properties = () => {
  const { selectedElement, setSelectedElement, onUpdateElement } =
    useDesigner();

  console.log(selectedElement);

  const onChange = (key, value) => {
    const newElement = {
      ...selectedElement,
      [key]: value,
    };

    setSelectedElement(newElement);
    onUpdateElement(selectedElement.id, newElement);
  };

  return (
    <div className="bg-gray rounded-lg space-y-4">
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
    </div>
  );
};

export default Properties;

const Input = ({ name, label, value, type, onChange }) => {
  return (
    <div className="space-y-1">
      <label className="font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full border border-black/20 bg-white py-1.5 px-2 rounded focus:border-black/50 focus:outline-none"
      />
    </div>
  );
};

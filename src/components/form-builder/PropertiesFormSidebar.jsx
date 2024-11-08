import { useEffect, useState } from "react";
import useDesigner from "../../hooks/useDesigner";

const PropertiesFormSidebar = () => {
  const { selectedElement, setSelectedElement, onUpdateElement } =
    useDesigner();

  const [values, setValues] = useState(selectedElement);

  useEffect(() => {
    if (selectedElement) {
      setValues(selectedElement);
    }
  }, [selectedElement]);

  const onChange = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateElement(selectedElement.id, values);
  };

  return (
    <div className="bg-gray p-4">
      <div className="flex justify-end">
        <button onClick={() => setSelectedElement(null)}>X</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Label</label>
        <input
          type="text"
          name="label"
          value={values.label}
          onChange={(e) => onChange("label", e.target.value)}
          id=""
          className="w-full border py-1 px-2"
        />
      </form>
    </div>
  );
};

export default PropertiesFormSidebar;

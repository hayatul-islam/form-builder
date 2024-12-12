import { borderStyle } from "../../data";
import ColorPicker from "./ColorPicker";
import Input from "./Input";
import Select from "./Select";

const BorderStyle = ({ label, name, value, onChange, subKey }) => {
  const handleBorderChange = (key, inputValue) => {
    const updatedValues = {
      ...value,
      [key]: inputValue,
    };

    onChange(name, updatedValues, subKey);
  };

  return (
    <div className="space-y-2">
      <h3>{label}</h3>

      {/* when dark mode available  */}
      {/* <div className="flex justify-between items-center gap-3">
        <ColorPicker
          label="Light"
          name="color"
          value={value?.color || ""}
          type="color"
          onChange={handleBorderChange}
        />
        <ColorPicker
          label="Dark"
          name="darkColor"
          value={value?.darkColor || ""}
          type="color"
          onChange={handleBorderChange}
        />
      </div> */}

      <div className="grid grid-cols-2 gap-3">
        <ColorPicker
          label="Color"
          name="color"
          value={value?.color || ""}
          type="color"
          onChange={handleBorderChange}
        />

        <Input
          label="Thickness"
          name="thickness"
          value={value?.thickness || ""}
          type="number"
          placeholder="0px"
          onChange={handleBorderChange}
        />
        <Select
          label="Style"
          name="style"
          value={value?.style || ""}
          options={borderStyle}
          placeholder="0px"
          onChange={handleBorderChange}
        />
        <Input
          label="Radius"
          name="radius"
          value={value?.radius || ""}
          type="number"
          placeholder="0px"
          onChange={handleBorderChange}
        />
      </div>
    </div>
  );
};

export default BorderStyle;

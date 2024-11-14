import ColorPicker from "./ColorPicker";

const DualColorPicker = ({ label, name, value, onChange, subKey }) => {
  const handleColorChange = (key, color) => {
    const updatedColor = {
      ...value,
      [key]: color,
    };

    onChange(name, updatedColor, subKey);
  };

  return (
    <div className="space-y-2">
      <h3 className="font-medium">{label}</h3>
      <div className="flex justify-between items-center gap-3">
        <ColorPicker
          label="Light"
          name="light"
          value={value?.light || ""}
          type="color"
          onChange={handleColorChange}
        />
        <ColorPicker
          label="Dark"
          name="dark"
          value={value?.dark || ""}
          type="color"
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
};

export default DualColorPicker;

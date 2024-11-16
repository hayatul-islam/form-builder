import Input from "./Input";

const MarginPaddingStyle = ({ label, name, value, onChange, subKey }) => {
  const handleChange = (key, inputValue) => {
    const updatedValues = {
      ...value,
      [key]: inputValue,
    };

    onChange(name, updatedValues, subKey);
  };

  return (
    <div className="space-y-2">
      <h3 className="font-medium">{label}</h3>
      <div className="flex justify-between items-center gap-3">
        <Input
          label="Top"
          name="top"
          value={value?.top || ""}
          type="number"
          placeholder="0px"
          onChange={handleChange}
        />
        <Input
          label="Bottom"
          name="bottom"
          value={value?.bottom || ""}
          type="number"
          placeholder="0px"
          onChange={handleChange}
        />
        <Input
          label="Left"
          name="left"
          value={value?.left || ""}
          type="number"
          placeholder="0px"
          onChange={handleChange}
        />
        <Input
          label="Right"
          name="right"
          value={value?.right || ""}
          type="number"
          placeholder="0px"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default MarginPaddingStyle;

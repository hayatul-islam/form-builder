import Input from "./Input";

const MarginPaddingStyle = ({
  label,
  name,
  value,
  onChange,
  subKey,
  type = "all",
}) => {
  const handleChange = (key, inputValue) => {
    const updatedValues = {
      ...value,
      [key]: inputValue,
    };

    onChange(name, updatedValues, subKey);
  };

  return (
    <div className="space-y-2">
      <h2 className="font-medium dark:text-gray-100">{label}</h2>
      {type === "horizontalAndVertical" ? (
        <div className="flex justify-between items-center gap-3">
          <Input
            label="Horizontal"
            name="horizontal"
            value={value?.horizontal || ""}
            type="number"
            placeholder="0px"
            onChange={handleChange}
          />
          <Input
            label="Vertical"
            name="vertical"
            value={value?.vertical || ""}
            type="number"
            placeholder="0px"
            onChange={handleChange}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default MarginPaddingStyle;

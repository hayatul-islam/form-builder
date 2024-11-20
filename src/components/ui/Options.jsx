import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";

const Options = ({ name, label, onChange, options }) => {
  const handleAddNewOption = () => {
    const newOption = {
      value: uuidv4(),
      label: "",
    };

    const updatedOptions = [...options, newOption];
    onChange(name, updatedOptions);
  };

  const handleOptionChange = (key, value) => {
    const updatedOptions = options?.map((option) =>
      option?.value === key ? { ...option, label: value } : option
    );

    onChange(name, updatedOptions);
  };

  const handleOptionRemove = (value) => {
    const updatedOptions = options?.filter((option) => option?.value !== value);
    onChange(name, updatedOptions);
  };

  return (
    <div className="space-y-2">
      <h3>{label}</h3>
      {options?.map((option) => (
        <div key={option?.value} className="flex items-center gap-2">
          <div className="w-full">
            <Input
              name={option?.value}
              label=""
              value={option?.label}
              type="text"
              onChange={handleOptionChange}
            />
          </div>
          <button onClick={() => handleOptionRemove(option?.value)}>
            <IoIosRemoveCircleOutline color="red" size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={handleAddNewOption}
        className="w-full border px-4 py-1 rounded border-black/20 text-sm flex justify-center items-center gap-1"
      >
        <IoAddSharp />
        <span> Add</span>
      </button>
    </div>
  );
};

export default Options;

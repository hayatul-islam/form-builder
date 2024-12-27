import { CgBorderBottom } from "react-icons/cg";
import {
  TbBorderCornerPill,
  TbBorderCornerRounded,
  TbBorderCornerSquare,
} from "react-icons/tb";

const BorderRadiusStyle = ({ label, name, value, subKey, onChange }) => {
  const handleBorderChange = (inputValue) => {
    const updatedValues = {
      ...value,
      radius: inputValue,
    };

    onChange(name, updatedValues, subKey);
  };

  return (
    <div>
      <h3 className="font-medium pb-1">{label}</h3>
      <div className="grid grid-cols-4 border border-black/20 rounded">
        <button
          onClick={() => handleBorderChange("0")}
          className={`${
            value?.radius === "0"
              ? "bg-primary text-white"
              : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <TbBorderCornerSquare />
        </button>
        <button
          onClick={() => handleBorderChange("10")}
          className={`${
            value?.radius === "10"
              ? "bg-primary text-white"
              : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <TbBorderCornerRounded />
        </button>
        <button
          onClick={() => handleBorderChange("20")}
          className={`${
            value?.radius === "20"
              ? "bg-primary text-white"
              : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <TbBorderCornerPill />
        </button>
        <button
          onClick={() => handleBorderChange("bottom")}
          className={`${
            value?.radius === "bottom"
              ? "bg-primary text-white"
              : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <CgBorderBottom />
        </button>
      </div>
    </div>
  );
};

export default BorderRadiusStyle;

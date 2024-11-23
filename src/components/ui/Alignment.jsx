import { LuAlignJustify } from "react-icons/lu";
import {
  MdAlignHorizontalCenter,
  MdOutlineAlignHorizontalLeft,
  MdOutlineAlignHorizontalRight,
} from "react-icons/md";

const Alignment = ({ label, name, value, subKey, onChange }) => {
  return (
    <div className="space-y-1">
      <h3>{label}</h3>
      <div className="grid grid-cols-4 border border-black/20 rounded">
        <button
          onClick={() => onChange(name, "full", subKey)}
          className={`${
            value === "full" ? "bg-primary text-white" : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <LuAlignJustify />
        </button>
        <button
          onClick={() => onChange(name, "left", subKey)}
          className={`${
            value === "left" ? "bg-primary text-white" : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <MdOutlineAlignHorizontalLeft />
        </button>
        <button
          onClick={() => onChange(name, "center", subKey)}
          className={`${
            value === "center" ? "bg-primary text-white" : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <MdAlignHorizontalCenter />
        </button>
        <button
          onClick={() => onChange(name, "right", subKey)}
          className={`${
            value === "right" ? "bg-primary text-white" : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <MdOutlineAlignHorizontalRight />
        </button>
      </div>
    </div>
  );
};

export default Alignment;

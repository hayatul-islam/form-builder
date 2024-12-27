import { CgDisplayFullwidth } from "react-icons/cg";
import { TbLayoutColumns } from "react-icons/tb";

const FieldWidth = ({ label, name, value, subKey, onChange }) => {
  return (
    <div className="space-y-1">
      <label className="font-medium">{label}</label>
      <div className={`grid grid-cols-2 border border-black/20 rounded`}>
        <button
          onClick={() => onChange(name, "half", subKey)}
          className={`${
            value === "half" ? "bg-primary text-white" : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <TbLayoutColumns />
          {/* <PiSquareHalfThin /> */}
          {/* <TbColumns2 /> */}
        </button>

        <button
          onClick={() => onChange(name, "full", subKey)}
          className={`${
            value === "full" ? "bg-primary text-white" : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <CgDisplayFullwidth />
        </button>
      </div>
    </div>
  );
};

export default FieldWidth;

import { TbColumns1, TbColumns2 } from "react-icons/tb";

const Columns = ({ label, name, value, subKey, onChange }) => {
  return (
    <div className="space-y-1">
      <h3>{label}</h3>
      <div className={`grid grid-cols-2 border border-black/20 rounded`}>
        <button
          onClick={() => onChange(name, "half", subKey)}
          className={`${
            value === "half" ? "bg-primary text-white" : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <TbColumns2 />
        </button>

        <button
          onClick={() => onChange(name, "full", subKey)}
          className={`${
            value === "full" ? "bg-primary text-white" : "hover:bg-primary/10"
          } p-2 flex justify-center items-center text-[18px] border-r border-black/20 `}
        >
          <TbColumns1 />
        </button>
      </div>
    </div>
  );
};

export default Columns;

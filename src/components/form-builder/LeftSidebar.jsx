import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { btnElements } from "../../data";
import ButtonElement from "./ButtonElement";

const LeftSidebar = ({ onToggleElement }) => {
  return (
    <aside className="max-w-[320px] w-full h-[calc(100vh-70px)] overflow-y-auto no-scrollbar  bg-gray ">
      <div className="flex justify-between items-center px-6 py-3 sticky top-0 bg-gray text-black shadow-sm">
        <h2 className="font-medium text-[18px]">Add Fields</h2>
        <button onClick={() => onToggleElement(false)}>
          <MdKeyboardDoubleArrowLeft size={24} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4">
        {btnElements?.map((element) => (
          <ButtonElement key={element?.name} element={element} />
        ))}
      </div>
    </aside>
  );
};

export default LeftSidebar;

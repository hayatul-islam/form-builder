import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import useBuilder from "../../hooks/useBuilder";
import FormDesign from "./FormDesign";
import Properties from "./Properties";

const RightSidebar = ({ onToggleDesign }) => {
  const { selectedElement } = useBuilder();

  return (
    <div className="bg-gray w-[350px]  h-[calc(100vh-70px)] overflow-y-auto no-scrollbar space-y-3 pb-8 ">
      <div className="flex justify-between items-center px-6 py-3 sticky top-0 bg-gray text-black shadow-sm">
        <h2 className="font-medium text-[18px]">Design</h2>
        <button onClick={() => onToggleDesign(false)}>
          <MdKeyboardDoubleArrowRight size={24} />
        </button>
      </div>
      {/* <div className="flex justify-center">
        <h2 className="font-medium text-[16px]">Settings</h2>
      </div> */}
      <div className="p-4">
        {selectedElement?.id ? <Properties /> : <FormDesign />}
      </div>
    </div>
  );
};

export default RightSidebar;

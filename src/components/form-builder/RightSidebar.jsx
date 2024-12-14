import { FiMinus } from "react-icons/fi";
import useBuilder from "../../hooks/useBuilder";
import Properties from "./Properties";

const RightSidebar = () => {
  const { selectedElement, onSelectedElement } = useBuilder();

  return (
    <div className="bg-gray w-[320px] h-[calc(100vh-70px)] overflow-y-auto no-scrollbar space-y-3 pb-8 ">
      <div className="flex justify-between items-center px-6 py-3 sticky top-0 bg-gray text-black shadow-sm">
        <h2 className="font-medium text-[18px] capitalize">
          {selectedElement?.name}
        </h2>
        <button onClick={() => onSelectedElement(null)}>
          <FiMinus size={24} />
        </button>
      </div>

      <Properties />
    </div>
  );
};

export default RightSidebar;

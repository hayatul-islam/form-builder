import { FiMinus } from "react-icons/fi";
import { btnElements } from "../../data";
import useBuilder from "../../hooks/useBuilder";
import ButtonElement from "./ButtonElement";
import FormDesign from "./FormDesign";

const LeftSidebar = () => {
  const { leftSidebarTool, onLeftSidebarTool } = useBuilder();

  return (
    <div
      className={`w-[320px] h-[calc(100vh-70px)] overflow-y-auto no-scrollbar bg-gray dark:bg-dark `}
    >
      <div className="flex justify-between items-center px-6 py-3 sticky top-0 bg-gray dark:bg-dark text-black dark:text-white shadow-sm">
        <h2 className="font-medium text-[18px]">Toolbox</h2>
        <button onClick={() => onLeftSidebarTool("")}>
          <FiMinus size={24} />
        </button>
      </div>
      {leftSidebarTool === "design" ? (
        <FormDesign />
      ) : (
        <div className="grid grid-cols-2 gap-2 p-4">
          {btnElements?.map((element) => (
            <ButtonElement key={element?.name} element={element} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;

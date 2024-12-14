import { LuSettings2 } from "react-icons/lu";
import { RiInputField } from "react-icons/ri";
import useBuilder from "../../hooks/useBuilder";

const SidebarMenu = () => {
  const { leftSidebarTool, onLeftSidebarTool } = useBuilder();

  return (
    <div className="flex items-center ">
      <div className="border shadow text-center w-[50px] bg-white mx-auto rounded-full">
        <button
          onClick={() => onLeftSidebarTool("fields")}
          className={`${
            leftSidebarTool === "fields"
              ? "bg-primary text-white"
              : "hover:bg-primary/10"
          }  w-full font-medium rounded-t-full text-center h-[80px] duration-500 transform`}
        >
          <RiInputField size={24} className="mx-auto" />
          <span className="text-[10px] leading-none">Fields</span>
        </button>
        <button
          onClick={() => onLeftSidebarTool("design")}
          className={`${
            leftSidebarTool === "design"
              ? "bg-primary text-white"
              : "hover:bg-primary/10"
          }  w-full font-medium rounded-b-full text-center h-[80px] duration-500 transform`}
        >
          {/* <GiSettingsKnobs size={24} className="mx-auto" /> */}
          <LuSettings2 size={24} className="mx-auto" />
          <span className="text-[10px] leading-none">Design</span>
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;

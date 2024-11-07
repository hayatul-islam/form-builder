import { elementData } from "../../data";
import SidebarBtnElement from "./SidebarBtnElement";

const DesignerSidebar = () => {
  return (
    <aside className="w-[400px] max-w-[400px] grid grid-cols-2 gap-2 border-l-2 border-muted bg-background overflow-y-auto h-full  ">
      {elementData?.map((element) => (
        <SidebarBtnElement key={element?.name} element={element} />
      ))}
    </aside>
  );
};

export default DesignerSidebar;

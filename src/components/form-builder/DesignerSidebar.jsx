import { elementData } from "../../data";
import useDesigner from "../../hooks/useDesigner";
import PropertiesFormSidebar from "./PropertiesFormSidebar";
import SidebarBtnElement from "./SidebarBtnElement";

const DesignerSidebar = () => {
  const { selectedElement } = useDesigner();
  return (
    <aside className="w-[400px] max-w-[400px]  border-l-2 border-muted bg-background overflow-y-auto h-full">
      {!selectedElement && (
        <div className="grid grid-cols-2 gap-2">
          {elementData?.map((element) => (
            <SidebarBtnElement key={element?.name} element={element} />
          ))}
        </div>
      )}
      {selectedElement && <PropertiesFormSidebar />}
    </aside>
  );
};

export default DesignerSidebar;

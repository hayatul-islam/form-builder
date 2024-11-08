import { elementData } from "../../data";
import useDesigner from "../../hooks/useDesigner";
import SidebarBtnElement from "./ButtonElement";
import PropertiesFormSidebar from "./PropertiesFormSidebar";

const DesignerSidebar = () => {
  const { selectedElement } = useDesigner();
  return (
    <aside className="w-[400px] max-w-[400px] bg-gray overflow-y-auto h-full p-4 rounded-md">
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

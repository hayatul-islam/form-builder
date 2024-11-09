import { elementData } from "../../data";
import useDesigner from "../../hooks/useDesigner";
import SidebarBtnElement from "./ButtonElement";

const DesignerSidebar = () => {
  const { selectedElement } = useDesigner();
  return (
    <aside className="max-w-[300px] w-full bg-gray overflow-y-auto h-full p-4 rounded-md">
      <div className="grid grid-cols-2 gap-2">
        {elementData?.map((element) => (
          <SidebarBtnElement key={element?.name} element={element} />
        ))}
      </div>

      {/* {selectedElement && <PropertiesFormSidebar />} */}
    </aside>
  );
};

export default DesignerSidebar;

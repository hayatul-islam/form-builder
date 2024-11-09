import { elementData } from "../../data";
import ButtonElement from "./ButtonElement";

const DesignerSidebar = () => {
  return (
    <aside className="max-w-[300px] w-full bg-gray overflow-y-auto h-full p-4 rounded-md">
      <div className="grid grid-cols-2 gap-2">
        {elementData?.map((element) => (
          <ButtonElement key={element?.name} element={element} />
        ))}
      </div>
    </aside>
  );
};

export default DesignerSidebar;

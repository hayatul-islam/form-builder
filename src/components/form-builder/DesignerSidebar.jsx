import { btnElements } from "../../data";
import ButtonElement from "./ButtonElement";

const DesignerSidebar = () => {
  return (
    <aside className=" max-w-[320px] w-full h-[calc(100vh-70px)] overflow-y-auto no-scrollbar  bg-gray  p-4">
      <div className="grid grid-cols-2 gap-2">
        {btnElements?.map((element) => (
          <ButtonElement key={element?.name} element={element} />
        ))}
      </div>
    </aside>
  );
};

export default DesignerSidebar;

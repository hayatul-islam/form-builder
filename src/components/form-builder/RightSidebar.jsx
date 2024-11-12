import useDesigner from "../../hooks/useDesigner";
import FormDesign from "./FormDesign";
import Properties from "./Properties";

const RightSidebar = () => {
  const { selectedElement } = useDesigner();

  return (
    <div className="bg-gray max-w-[300px] w-full rounded-lg space-y-3 p-4">
      <div className="flex justify-center">
        <h2 className="font-medium text-[16px]">Settings</h2>
      </div>
      {selectedElement?.id ? <Properties /> : <FormDesign />}
    </div>
  );
};

export default RightSidebar;

import useBuilder from "../../hooks/useBuilder";
import FormDesign from "./FormDesign";
import Properties from "./Properties";

const RightSidebar = () => {
  const { selectedElement } = useBuilder();

  return (
    <div className="bg-gray max-w-[300px] w-full space-y-3 p-4 max-h-screen overflow-y-auto ">
      <div className="flex justify-center">
        <h2 className="font-medium text-[16px]">Settings</h2>
      </div>
      {selectedElement?.id ? <Properties /> : <FormDesign />}
    </div>
  );
};

export default RightSidebar;

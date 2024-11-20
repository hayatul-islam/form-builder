import useBuilder from "../../hooks/useBuilder";
import FormDesign from "./FormDesign";
import Properties from "./Properties";

const RightSidebar = () => {
  const { selectedElement } = useBuilder();

  return (
    <div className="bg-gray max-w-[320px] w-full h-[calc(100vh-70px)] overflow-y-auto no-scrollbar space-y-3 p-4 pb-8 ">
      {/* <div className="flex justify-center">
        <h2 className="font-medium text-[16px]">Settings</h2>
      </div> */}
      {selectedElement?.id ? <Properties /> : <FormDesign />}
    </div>
  );
};

export default RightSidebar;

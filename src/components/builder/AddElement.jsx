import { PiDotsSixVerticalBold } from "react-icons/pi";
import { useBuilderContext } from "../../context/BuilderContext";
import { btnElements } from "../../data";
import DraggableElement from "../ui/DraggableElement";

const AddElement = () => {
  const { dispatch } = useBuilderContext();
  const addElement = (element) => {
    dispatch({ type: "ADD_ELEMENT", payload: element });
  };

  return (
    <div className="max-w-[400px] w-full">
      <div className="border border-gray p-3 rounded-lg grid grid-cols-2 gap-4">
        {btnElements?.map((item) => (
          <DraggableElement key={item?.name} id={item?.name}>
            <button
              onClick={() => addElement(item)}
              className="flex justify-between items-center bg-gray p-3 rounded-md pointer-events-auto"
            >
              <div className="flex items-center gap-2 text-[14px] font-medium">
                <span>{item?.icon}</span> <span>{item?.label}</span>
              </div>
              <PiDotsSixVerticalBold className="text-[18px] font-medium" />
            </button>
          </DraggableElement>
        ))}
      </div>
    </div>
  );
};

export default AddElement;

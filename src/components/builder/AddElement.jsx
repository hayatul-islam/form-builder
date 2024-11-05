import { PiDotsSixVerticalBold } from "react-icons/pi";
import { useBuilderContext } from "../../context/BuilderContext";
import { elementData } from "../../data";

const AddElement = () => {
  const { dispatch } = useBuilderContext();
  const addElement = (element) => {
    dispatch({ type: "ADD_ELEMENT", payload: element });
  };

  return (
    <div className="max-w-[400px] w-full">
      <div className="border border-gray p-3 rounded-lg grid grid-cols-2 gap-4">
        {elementData?.map((item) => (
          <button
            key={item?.id}
            onClick={() => addElement(item)}
            className="flex justify-between items-center bg-gray p-3 rounded-md"
          >
            <div className="flex items-center gap-2 text-[14px] font-medium">
              <span>{item?.icon}</span> <span>{item?.label}</span>
            </div>
            <PiDotsSixVerticalBold className="text-[18px] font-medium" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AddElement;

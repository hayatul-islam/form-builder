import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { RiDeleteBin6Line, RiSettingsLine } from "react-icons/ri";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useBuilderContext } from "../../context/BuilderContext";
import InputField from "../common/InputField";

const DraggableElement = ({ element }) => {
  const { dispatch } = useBuilderContext();
  const [isActive, setIsActive] = useState();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: element.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleSetting = (e) => {
    e.stopPropagation();
    console.log("dd");
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch({ type: "REMOVE_ELEMENT", payload: element.id });
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="px-4 pb-4 pt-2 !cursor-crosshair focus:bg-gray focus focus:border-gray  transition-padding transform duration-100 rounded relative group"
    >
      <InputField
        label={element.label}
        name={element.name}
        type={element.type}
        disabled={true}
      />

      <div className="absolute -right-1 top-[50%] translate-y-[-50%] space-y-1 hidden group-focus:block">
        <RxDragHandleDots2 />
      </div>

      <div className="absolute -right-7 top-[50%] translate-y-[-50%] space-y-3 hidden group-focus:block">
        <button
          onClick={handleSetting}
          className="bg-black text-white w-[24px] h-[24px] rounded-full flex justify-center items-center"
        >
          <RiSettingsLine size={14} />
        </button>

        <button
          onClick={handleRemove}
          className="bg-red-500 text-white w-[24px] h-[24px] rounded-full flex justify-center items-center"
        >
          <RiDeleteBin6Line size={14} />
        </button>
      </div>
    </div>
  );
};

export default DraggableElement;

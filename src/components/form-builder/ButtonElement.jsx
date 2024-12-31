import { useDraggable } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import useBuilder from "../../hooks/useBuilder";

const ButtonElement = ({ element }) => {
  const { elements, onAddElement } = useBuilder();

  const draggable = useDraggable({
    id: `designer-btn-${element?.name}`,
    data: {
      element: element,
      isDesignerBtnElement: true,
    },
  });

  const handleClick = () => {
    const newElement = {
      id: uuidv4(),
      ...element,
    };
    onAddElement(elements?.length, newElement);
  };

  return (
    <button
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      onClick={handleClick}
      className={`h-[90px] cursor-grab rounded-md text-center ${
        draggable.isDragging && "ring-1 ring-black !bg-gray dark:!bg-gray-950"
      } bg-white dark:bg-gray-900 `}
    >
      <span className="mx-auto inline-block dark:text-gray-100">
        {element?.icon}
      </span>
      <p className="dark:text-gray-100">{element?.label}</p>
    </button>
  );
};

export default ButtonElement;

export const ButtonElementOverlay = ({ element }) => {
  return (
    <button
      className={`h-[90px] w-[150px] cursor-grab bg-white dark:bg-gray-900 rounded-md text-center `}
    >
      <span className="mx-auto inline-block dark:text-gray-100">
        {element?.icon}
      </span>
      <p className="dark:text-gray-100">{element?.label}</p>
    </button>
  );
};

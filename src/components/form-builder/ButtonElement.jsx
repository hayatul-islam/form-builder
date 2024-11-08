import { useDraggable } from "@dnd-kit/core";

const ButtonElement = ({ element }) => {
  const draggable = useDraggable({
    id: `designer-btn-${element?.name}`,
    data: {
      element: element,
      isDesignerBtnElement: true,
    },
  });

  return (
    <button
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className={`h-[90px] cursor-grab bg-white rounded-md text-center ${
        draggable.isDragging && "ring-2 ring-black"
      } `}
    >
      <span className="mx-auto inline-block">{element?.icon}</span>
      <p>{element?.label}</p>
    </button>
  );
};

export default ButtonElement;

export const ButtonElementOverlay = ({ element }) => {
  return (
    <button
      className={`h-[90px] w-[150px] cursor-grab bg-white rounded-md text-center `}
    >
      <span className="mx-auto inline-block">{element?.icon}</span>
      <p>{element?.label}</p>
    </button>
  );
};

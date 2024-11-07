import { useDraggable } from "@dnd-kit/core";

const SidebarBtnElement = ({ element }) => {
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
      className={`flex flex-col gap-2 h-[80px] w-[80px] cursor-grab bg-red-300 rounded-md ${
        draggable.isDragging && "ring-2 ring-black"
      } `}
    >
      {element?.label}
    </button>
  );
};

export const SidebarBtnElementOverly = () => {
  const draggable = useDraggable({
    id: "designer-btn",
    data: {
      type: "text",
      isDesignerBtnElement: true,
    },
  });

  const handleClick = () => {
    console.log("ddd");
  };

  return (
    <button
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      onClick={handleClick}
      className={`flex flex-col gap-2 h-[80px] w-[80px] cursor-grab bg-red-300 rounded-md `}
    >
      Text Filed
    </button>
  );
};

export default SidebarBtnElement;

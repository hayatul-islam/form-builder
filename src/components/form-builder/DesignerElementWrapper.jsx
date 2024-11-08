import { useDraggable, useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import useDesigner from "../../hooks/useDesigner";
import InputField from "../common/InputField";

const DesignerElementWrapper = ({ element }) => {
  const { onRemoveElement, selectedElement, setSelectedElement } =
    useDesigner();
  const [mouseIsOver, setMouseIsOver] = useState(false);

  const draggable = useDraggable({
    id: element.id + "-drag-handler",
    data: {
      type: element.type,
      elementId: element.id,
      isDesignerElement: true,
    },
  });

  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });

  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });

  console.log(selectedElement);

  if (draggable?.isDragging) return null;

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element);
      }}
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      className="relative cursor-pointer rounded-md group"
    >
      <div
        ref={topHalf.setNodeRef}
        className={`absolute  w-full h-[100px] rounded-t-md `}
      ></div>
      <div
        ref={bottomHalf.setNodeRef}
        className={`absolute w-full h-[100px] rounded-b-md `}
      ></div>

      {mouseIsOver && (
        <>
          <div className="absolute right-0 h-full z-50">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveElement(element.id);
              }}
              className="flex justify-center items-center h-full border bg-red-500 text-white px-5 rounded-md rounded-l-none"
            >
              d
            </button>
          </div>
          <div className="absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex justify-center items-center">
            <p>Click for properties or drag to move</p>
          </div>
        </>
      )}

      {topHalf.isOver && (
        <div className="pb-4 h-[100px]">
          <div className=" h-full w-full rounded-md border border-primary/50 px-4 py-2 border-b-none" />
        </div>
      )}
      <div
        className={`bg-white p-4 ${mouseIsOver && "group-hover:opacity-60"}`}
      >
        <InputField label={element.label} type={element.type} disabled={true} />
      </div>

      {bottomHalf.isOver && (
        <div className="pb-4 h-[100px]">
          <div className=" h-full w-full rounded-md border border-primary/50 px-4 py-2 border-b-none" />
        </div>
      )}
    </div>
  );
};

export default DesignerElementWrapper;

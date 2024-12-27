import { useDraggable, useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import { RiDeleteBin6Line, RiSettingsLine } from "react-icons/ri";
import { RxDragHandleDots2 } from "react-icons/rx";
import useBuilder from "../../hooks/useBuilder";
import { onColumnStyle } from "../../utils";
import DroppableElement from "../ui/DroppableElement";
import SingleElement from "./SingleElement";

const ElementWrapper = ({ element }) => {
  const { onRemoveElement, selectedElement, onSelectedElement } = useBuilder();

  const [mouseIsOver, setMouseIsOver] = useState(false);

  const isSelected = selectedElement?.id === element?.id;
  const columnStyle = onColumnStyle(element?.width);

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

  if (draggable?.isDragging) return null;

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      onClick={(e) => {
        e.stopPropagation();
        onSelectedElement(element);
      }}
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      // className="relative cursor-pointer rounded-md group"
      style={columnStyle?.style}
      className={`${columnStyle?.className} relative cursor-pointer rounded-md group`}
    >
      <div
        ref={topHalf.setNodeRef}
        className={`absolute top-0 w-full h-[120px] rounded-t-md `}
      ></div>
      <div
        ref={bottomHalf.setNodeRef}
        className={`absolute bottom-0 w-full h-[120px] rounded-b-md `}
      ></div>

      {/* {mouseIsOver && (
        <div className="absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex justify-center items-center opacity-60">
          <p>Click for properties or drag to move</p>
        </div>
      )} */}

      {isSelected && (
        <>
          <div className="absolute -right-1 top-[50%] translate-y-[-50%] space-y-1 ">
            <RxDragHandleDots2 />
          </div>
          <div className="absolute -right-7 top-[50%] translate-y-[-50%] space-y-3 z-[999]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectedElement(element);
              }}
              className="bg-black text-white w-[24px] h-[24px] rounded-full flex justify-center items-center"
            >
              <RiSettingsLine size={14} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveElement(element?.id);
              }}
              className="bg-red-500 text-white w-[24px] h-[24px] rounded-full flex justify-center items-center"
            >
              <RiDeleteBin6Line size={14} />
            </button>
          </div>
        </>
      )}

      {topHalf?.isOver && <DroppableElement />}
      {bottomHalf?.isOver && <DroppableElement />}

      <div
        className={`p-3  rounded-md ${
          (mouseIsOver || isSelected) && " bg-gray group-hover:blur-6"
        }`}
      >
        <SingleElement element={element} />
      </div>
    </div>
  );
};

export default ElementWrapper;

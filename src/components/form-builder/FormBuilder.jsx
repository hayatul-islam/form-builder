import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { ImEnlarge } from "react-icons/im";
import { v4 as uuidv4 } from "uuid";
import useBuilder from "../../hooks/useBuilder";
import { onFormStyle } from "../../utils";
import DroppableElement from "../ui/DroppableElement";
import ElementWrapper from "./ElementWrapper";

function FormBuilder() {
  const {
    elements,
    onAddElement,
    selectedElement,
    setSelectedElement,
    onRenderElement,
    settings,
  } = useBuilder();

  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event) => {
      const { active, over } = event;
      if (!active || !over) return;

      // Dropping a sidebar btn element over the designer drop area
      const isDesignerBtnElement = active?.data?.current?.isDesignerBtnElement;
      const isDroppingOverDesignerDropArea =
        over?.data?.current?.isDesignerDropArea;

      const droppingSidebarBtnOverDesignerDropArea =
        isDesignerBtnElement && isDroppingOverDesignerDropArea;

      if (droppingSidebarBtnOverDesignerDropArea) {
        const element = active?.data?.current?.element;

        const newElement = {
          id: uuidv4(),
          ...element,
        };
        onAddElement(elements?.length, newElement);
        return;
      }

      // second scenario
      const isDroppingOverDesignerTopHalf =
        over?.data?.current?.isTopHalfDesignerElement;
      const isDroppingOverDesignerBottomHalf =
        over?.data?.current?.isBottomHalfDesignerElement;
      const isDroppingOverDesignerElement =
        isDroppingOverDesignerTopHalf || isDroppingOverDesignerBottomHalf;

      const droppingSidebarDesignerDropArea =
        isDesignerBtnElement && isDroppingOverDesignerElement;
      if (droppingSidebarDesignerDropArea) {
        const element = active?.data?.current?.element;

        const newElement = {
          id: uuidv4(),
          ...element,
        };

        const overId = over?.data?.current?.elementId;
        const overElementIndex = elements?.findIndex((el) => el.id === overId);
        if (overElementIndex === -1) {
          throw new Error("element not found!");
        }

        let indexForNewElement = overElementIndex;
        if (isDroppingOverDesignerBottomHalf) {
          indexForNewElement = overElementIndex + 1;
        }

        onAddElement(indexForNewElement, newElement);
        return;
      }

      // new third
      const activeId = active?.data?.current?.elementId;
      const overId = over?.data?.current?.elementId;
      if (activeId !== overId) {
        const oldIndex = elements.findIndex((el) => el.id === activeId);
        let newIndex = elements.findIndex((el) => el.id === overId);
        if (isDroppingOverDesignerBottomHalf) {
          newIndex = newIndex - 1;
        }
        const newElements = arrayMove(elements, oldIndex, newIndex);

        onRenderElement(newElements);
      }
    },
  });

  const formStyle = onFormStyle(settings?.layout);

  return (
    <div
      onClick={() => {
        if (selectedElement) setSelectedElement(null);
      }}
      className="max-w-[800px] w-full mx-auto"
      style={{
        background: settings?.layout?.pageBackground?.light || "white",
        paddingTop: `${settings?.layout?.pagePadding?.top}px`,
        paddingBottom: `${settings?.layout?.pagePadding?.bottom}px`,
        paddingLeft: `${settings?.layout?.pagePadding?.left}px`,
        paddingRight: `${settings?.layout?.pagePadding?.right}px`,
      }}
    >
      <div
        ref={droppable.setNodeRef}
        className={`h-auto  ${droppable.isOver && "ring ring-primary/20"}`}
      >
        {!droppable.isOver && elements?.length === 0 && (
          <div className="p-8 w-full">
            <DroppableElement
              className={
                "!h-[150px] bg-primary/10 flex justify-center items-center rounded-xl"
              }
            >
              <div className="flex justify-center items-center gap-2 text-primary">
                <ImEnlarge />
                <p>Drag you first element form the left.</p>
              </div>
            </DroppableElement>
          </div>
        )}
        {droppable.isOver && elements.length === 0 && (
          <div className="px-6 pt-6 w-full">
            <DroppableElement />
          </div>
        )}

        {elements?.length > 0 && (
          <div
            style={formStyle?.style}
            className="w-full p-6 bg-gray rounded-lg "
          >
            {elements?.map((element) => (
              <ElementWrapper key={element?.id} element={element} />
            ))}
            {droppable.isOver && elements?.length > 0 && (
              <div className="pt-3 w-full">
                <DroppableElement />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FormBuilder;

// third scenario
//   const isDraggingDesignerElement =
//   active?.data?.current?.isDesignerElement;
// const draggingDesignerElementOverAnotherDesignerElement =
//   isDraggingDesignerElement && isDroppingOverDesignerElement;

// if (draggingDesignerElementOverAnotherDesignerElement) {
//   const activeId = active?.data?.current?.elementId;
//   const overId = over?.data?.current?.elementId;

//   const activeElementIndex = elements.findIndex(
//     (el) => el.id === activeId
//   );
//   const overElementIndex = elements.findIndex((el) => el.id === overId);
//   if (activeElementIndex === -1 || overElementIndex === -1) {
//     throw new Error("Element not found");
//   }

//   const activeElement = { ...elements[activeElementIndex] };
//   onRemoveElement(activeId);

//   let indexForNewElement = overElementIndex;
//   if (isDroppingOverDesignerBottomHalf) {
//     indexForNewElement = overElementIndex - 1;
//   }

//   addElement(indexForNewElement, activeElement);
// }

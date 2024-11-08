import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import useDesigner from "../../hooks/useDesigner";
import DesignerElementWrapper from "./DesignerElementWrapper";
import DesignerSidebar from "./DesignerSidebar";

function Designer() {
  const {
    elements,
    addElement,
    selectedElement,
    setSelectedElement,
    onRemoveElement,
  } = useDesigner();

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
        addElement(elements?.length, newElement);
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

        addElement(indexForNewElement, newElement);
        return;
      }

      // third scenario
      const isDraggingDesignerElement =
        active?.data?.current?.isDesignerElement;
      const draggingDesignerElementOverAnotherDesignerElement =
        isDraggingDesignerElement && isDroppingOverDesignerElement;

      if (draggingDesignerElementOverAnotherDesignerElement) {
        const activeId = active?.data?.current?.elementId;
        const overId = over?.data?.current?.elementId;

        console.log(activeId);

        const activeElementIndex = elements.findIndex(
          (el) => el.id === activeId
        );
        const overElementIndex = elements.findIndex((el) => el.id === overId);

        if (activeElementIndex === -1 || overElementIndex === -1) {
          throw new Error("Element not found");
        }

        const activeElement = { ...elements[activeElementIndex] };
        onRemoveElement(activeId);

        let indexForNewElement = overElementIndex;
        if (isDroppingOverDesignerBottomHalf) {
          indexForNewElement = overElementIndex + 1;
        }

        addElement(indexForNewElement, activeElement);
      }
    },
  });

  return (
    <div className="flex w-full h-full">
      <div
        onClick={() => {
          if (selectedElement) setSelectedElement(null);
        }}
        className="p-4 w-full"
      >
        <div
          ref={droppable.setNodeRef}
          className={`bg-gray max-w-[920px] h-full min-h-[70vh] m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto ${
            droppable.isOver && "ring ring-primary/20"
          }`}
        >
          {!droppable.isOver && elements?.length === 0 && (
            <p className="text-3xl text-muted flex flex-grow items-center font-bold">
              Drop here
            </p>
          )}
          {droppable.isOver && elements.length === 0 && (
            <div className="p-4 w-full">
              <div className="h-[120px] rounded-md bg-primary/50"></div>
            </div>
          )}

          {elements.length > 0 && (
            <div className="w-full p-6 space-y-3">
              {elements?.map((element) => (
                <DesignerElementWrapper key={element?.id} element={element} />
              ))}
            </div>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
}

export default Designer;

import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import useDesigner from "../../hooks/useDesigner";
import DesignerElementWrapper from "./DesignerElementWrapper";
import DesignerSidebar from "./DesignerSidebar";

function Designer() {
  const { elements, addElement, selectedElement, setSelectedElement } =
    useDesigner();

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
      const isDesignerBtnElement = active?.data?.current?.isDesignerBtnElement;

      if (isDesignerBtnElement) {
        const element = active?.data?.current?.element;

        const newElement = {
          id: uuidv4(),
          ...element,
        };
        addElement(0, newElement);
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
            droppable.isOver && elements.length === 0 && "ring ring-primary/20"
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

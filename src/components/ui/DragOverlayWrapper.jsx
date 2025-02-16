import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import useBuilder from "../../hooks/useBuilder";
import { ButtonElementOverlay } from "../form-builder/ButtonElement";
import SingleElement from "../form-builder/SingleElement";

function DragOverlayWrapper() {
  const { elements } = useBuilder();
  const [draggedItem, setDraggedItem] = useState(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No drag overlay</div>;

  const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    const element = draggedItem.data?.current?.element;
    node = <ButtonElementOverlay element={element} />;
  }

  const isDesignerElement = draggedItem?.data?.current?.isDesignerElement;

  if (isDesignerElement) {
    const elementId = draggedItem?.data?.current?.elementId;
    const element = elements?.find((el) => el.id === elementId);
    if (!element) {
      node = <div>Element not found!</div>;
    } else {
      node = (
        <div className="border border-primary bg-primary/10 shadow-lg rounded-md p-4 opacity-80 ">
          <SingleElement element={element} />
        </div>
      );
    }
  }

  // Render the drag overlay with the node content
  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;

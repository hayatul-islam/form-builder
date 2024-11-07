import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { SidebarBtnElementOverly } from "../form-builder/SidebarBtnElement";

function DragOverlayWrapper() {
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
    const type = draggedItem.data?.current?.type;
    node = (
      <SidebarBtnElementOverly
      // formElement={FormElements[type]}
      />
    );
  }

  // Render the drag overlay with the node content
  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;

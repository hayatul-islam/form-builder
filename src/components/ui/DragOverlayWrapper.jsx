import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import useDesigner from "../../hooks/useDesigner";
import DesignerElementWrapper from "../form-builder/DesignerElementWrapper";
import { SidebarBtnElementOverly } from "../form-builder/SidebarBtnElement";

function DragOverlayWrapper() {
  const { elements } = useDesigner();
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

  const isDesignerElement = draggedItem?.data?.current?.isDesignerElement;

  if (isDesignerElement) {
    const elementId = draggedItem?.data?.current?.elementId;
    const element = elements?.find((el) => el.id === elementId);
    if (!element) {
      node = <div>Element not found!</div>;
    } else {
      node = (
        <div className="bg-primary rounded-md opacity-90">
          <DesignerElementWrapper element={element} />
        </div>
      );
    }
  }

  // Render the drag overlay with the node content
  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;

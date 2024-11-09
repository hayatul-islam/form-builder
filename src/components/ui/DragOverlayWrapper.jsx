import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import useDesigner from "../../hooks/useDesigner";
import InputField from "../common/InputField";
import { ButtonElementOverlay } from "../form-builder/ButtonElement";

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
        <div className="bg-gray rounded-md p-4 opacity-80 ">
          <InputField label={element?.label} type={element?.type} />
        </div>
      );
    }
  }

  // Render the drag overlay with the node content
  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;

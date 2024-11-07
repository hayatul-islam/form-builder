import { DragOverlay, useDraggable } from "@dnd-kit/core";

const DraggableElement = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
  });

  return (
    <>
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className={`${
          isDragging
            ? "opacity-50 pointer-events-none"
            : "!opacity-100 !pointer-events-auto"
        }`}
      >
        {children}
      </div>
      <DragOverlay>
        {isDragging ? <div className="opacity-50">{children}</div> : null}{" "}
      </DragOverlay>
    </>
  );
};

export default DraggableElement;

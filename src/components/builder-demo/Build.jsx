import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useBuilderContext } from "../../context/BuilderContext";
import DraggableElement from "./DraggableElement";

// FormBuilder Component
const Build = () => {
  const { state, dispatch } = useBuilderContext();

  // Handle drag end event to rearrange elements
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = state.elements.findIndex(
        (element) => element.id === active.id
      );
      const newIndex = state.elements.findIndex(
        (element) => element.id === over.id
      );

      const newElements = arrayMove(state.elements, oldIndex, newIndex);

      // Dispatch to update context state
      dispatch({ type: "REORDER_ELEMENTS", payload: newElements });
    }
  };

  // Configure sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={state.elements.map((element) => element.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="bg-white p-8 rounded-md">
          {state.elements?.map((element) => (
            <DraggableElement key={element.id} element={element} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Build;

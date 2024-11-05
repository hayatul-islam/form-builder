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
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useBuilderContext } from "../../context/BuilderContext";
import InputField from "../common/InputField";

// FormBuilder Component
const FormBuilder = () => {
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
    <div className="w-full bg-gray rounded-lg p-5">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={state.elements.map((element) => element.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="bg-white p-4 rounded-md space-y-5">
            {state.elements?.map((element) => (
              <DraggableInputField key={element.id} element={element} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default FormBuilder;

// DraggableInputField Component
const DraggableInputField = ({ element }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: element.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="draggable-item"
    >
      <InputField
        label={element.label}
        name={element.name}
        type={element.type}
      />
    </div>
  );
};

// const FormBuilder = () => {
//   const { state } = useBuilderContext();

//   return (
//     <div className="w-full bg-gray rounded-lg p-5">
//       <div className="bg-white p-4 rounded-md space-y-5">
//         {state.elements?.map((element) => (
//           <InputField
//             key={element?.id}
//             label={element?.label}
//             name={element?.name}
//             type={element?.type}
//           />
//         ))}
//       </div>
//       <DragList />
//     </div>
//   );
// };

// export default FormBuilder;

// function DragList() {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Add tests to homepage" },
//     { id: 2, title: "Fix styling in about section" },
//     { id: 3, title: "Learn how to center a div" },
//   ]);
//   const { state } = useBuilderContext();

//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   );

//   const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

//   const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (active.id === over.id) return;

//     setTasks((tasks) => {
//       const originalPos = getTaskPos(active.id);
//       const newPos = getTaskPos(over.id);

//       return arrayMove(tasks, originalPos, newPos);
//     });
//   };

//   return (
//     <div className="App">
//       <DndContext
//         sensors={sensors}
//         collisionDetection={closestCorners}
//         onDragEnd={handleDragEnd}
//       >
//         <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
//           {tasks.map((task) => (
//             <Task key={task.id} id={task.id} title={task.title} />
//           ))}
//           {state.elements?.map((element) => (
//             <InputField
//               key={element?.id}
//               label={element?.label}
//               name={element?.name}
//               type={element?.type}
//             />
//           ))}
//         </SortableContext>
//       </DndContext>
//     </div>
//   );
// }

// export const Task = ({ id, title }) => {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id });

//   const style = {
//     transition,
//     transform: CSS.Transform.toString(transform),
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className="task"
//     >
//       {title}
//     </div>
//   );
// };

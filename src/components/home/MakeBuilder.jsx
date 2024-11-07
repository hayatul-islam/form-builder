import { DndContext } from "@dnd-kit/core";
import { useBuilderContext } from "../../context/BuilderContext";
import { elementData } from "../../data";
import AddElement from "../builder/AddElement";
import FormBuilder from "../builder/FormBuilder";
import DroppableContainer from "../ui/DroppableContainer";

export default function MakeBuilder() {
  const { state, dispatch } = useBuilderContext();

  // Handle drag end event
  function handleDragEnd(event) {
    const { active, over } = event;

    // Ensure the drop zone is correct
    if (!over || over.id !== "tasks-droppable") return;

    const draggedElement = elementData.find((item) => item.name === active.id);

    if (draggedElement) {
      dispatch({
        type: "ADD_ELEMENT",
        payload: draggedElement,
      });
    }
  }

  return (
    <div className="p-4">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          <div className="container py-12 flex gap-6">
            <div className="max-w-[400px] w-full">
              <DroppableContainer id="elements-container">
                <AddElement />
              </DroppableContainer>
            </div>

            <div className="w-full">
              <DroppableContainer id="tasks-droppable">
                <FormBuilder />
              </DroppableContainer>
            </div>
          </div>
        </DndContext>
      </div>
    </div>
  );
}

// import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
// import { useState } from "react";
// import { elementData } from "../../data";

// export default function MakeBuilder() {
//   const [tasks, setTasks] = useState([]);

//   console.log(tasks);

//   function generateUniqueId() {
//     return `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
//   }

//   function handleDragEnd(event) {
//     const { active, over } = event;

//     if (!over || over.id !== "tasks-droppable") return;

//     const draggedElement = elementData.find((item) => item.name === active.id);

//     if (draggedElement) {
//       const newTask = {
//         ...draggedElement,
//         id: generateUniqueId(),
//       };

//       const insertIndex = 1;

//       setTasks((prevTasks) => {
//         const newTasks = [...prevTasks];
//         newTasks.splice(insertIndex, 0, newTask);
//         return newTasks;
//       });
//     }
//   }

//   return (
//     <div className="p-4">
//       <div className="flex gap-8">
//         <DndContext onDragEnd={handleDragEnd}>
//           <DroppableContainer id="elements-container">
//             {elementData.map((item) => (
//               <DraggableItem key={item.name} item={item} />
//             ))}
//           </DroppableContainer>
//           <DroppableContainer id="tasks-droppable">
//             {tasks.map((item, index) => (
//               <div key={item.name} className="border p-2 my-1">
//                 {item.label}
//               </div>
//             ))}
//           </DroppableContainer>
//         </DndContext>
//       </div>
//     </div>
//   );
// }

// function DraggableItem({ item }) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: item.name,
//   });

//   const style = transform
//     ? {
//         transform: `translate(${transform.x}px, ${transform.y}px)`,
//       }
//     : undefined;

//   return (
//     <div
//       ref={setNodeRef}
//       {...listeners}
//       {...attributes}
//       style={style}
//       className="p-2 border mb-2 cursor-pointer"
//     >
//       {item.label}
//     </div>
//   );
// }

// function DroppableContainer({ id, children }) {
//   const { setNodeRef } = useDroppable({
//     id,
//   });

//   return (
//     <div ref={setNodeRef} className="border w-[200px] p-5 min-h-[200px]">
//       {children}
//     </div>
//   );
// }

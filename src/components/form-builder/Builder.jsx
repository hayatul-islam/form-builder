import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import DesignerContextProvider from "../../context/DesignerContext";
import DragOverlayWrapper from "../ui/DragOverlayWrapper";
import DesignerSidebar from "./DesignerSidebar";
import FormBuilder from "./FormBuilder";

const Builder = () => {
  const mouseSensors = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensors, touchSensor);

  return (
    <DesignerContextProvider>
      <DndContext sensors={sensors}>
        <div className="py-12 px-6 flex w-full h-full gap-6">
          <DesignerSidebar />
          <FormBuilder />
        </div>
        <DragOverlayWrapper />
      </DndContext>
    </DesignerContextProvider>
  );
};

export default Builder;

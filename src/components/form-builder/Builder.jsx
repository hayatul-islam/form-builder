import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import DesignerContextProvider from "../../context/DesignerContext";
import Header from "../common/Header";
import DragOverlayWrapper from "../ui/DragOverlayWrapper";
import DesignerSidebar from "./DesignerSidebar";
import FormBuilder from "./FormBuilder";
import RightSidebar from "./RightSidebar";

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
        <div className="space-y-6">
          <Header />
          {/* <BuilderHeader /> */}
          <div className="px-6 flex w-full h-full gap-6">
            <DesignerSidebar />
            <FormBuilder />
            <RightSidebar />
          </div>
          <DragOverlayWrapper />
        </div>
      </DndContext>
    </DesignerContextProvider>
  );
};

export default Builder;

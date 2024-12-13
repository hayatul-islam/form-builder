import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import useBuilder from "../../hooks/useBuilder";
import DashboardLayout from "../../layout/DashboardLayout";
import DragOverlayWrapper from "../ui/DragOverlayWrapper";
import FormBuilder from "./FormBuilder";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Builder = () => {
  const { leftSidebarTool, selectedElement } = useBuilder();
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
    <DashboardLayout>
      <DndContext sensors={sensors}>
        <div className="w-full h-full relative">
          {leftSidebarTool && (
            <div className="absolute top-0 left-0 w-full">
              <LeftSidebar />
            </div>
          )}
          <FormBuilder />
          {selectedElement?.id && (
            <div className="absolute top-0 right-0 w-auto">
              <RightSidebar />
            </div>
          )}
        </div>
        <DragOverlayWrapper />
      </DndContext>
    </DashboardLayout>
  );
};

export default Builder;

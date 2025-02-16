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
        <div className="w-full h-full relative overflow-hidden ">
          <div
            className={`z-20 absolute top-0 left-0 h-full w-64 bg-white dark:bg-dark shadow-lg transition-transform duration-700 ${
              leftSidebarTool ? "translate-x-0" : "-translate-x-[400px] "
            }`}
          >
            <LeftSidebar />
          </div>
          <FormBuilder />
          <div
            className={`z-20 absolute top-0 right-0 h-full bg-white shadow-lg transition-transform duration-700 ${
              selectedElement ? "translate-x-0" : "translate-x-full "
            }`}
          >
            <RightSidebar />
          </div>
        </div>
        <DragOverlayWrapper />
      </DndContext>
    </DashboardLayout>
  );
};

export default Builder;

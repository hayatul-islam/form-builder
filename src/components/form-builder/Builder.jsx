import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import PageLayout from "../../layout/PageLayout";
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
    <>
      <PageLayout type="builder">
        <DndContext sensors={sensors}>
          <div className="space-y-6">
            <div className="flex w-full h-full   ">
              <DesignerSidebar />
              <FormBuilder />
              <RightSidebar />
            </div>
            <DragOverlayWrapper />
          </div>
        </DndContext>
      </PageLayout>
    </>
  );
};

export default Builder;

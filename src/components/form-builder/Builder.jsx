import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBuilder from "../../hooks/useBuilder";
import PageLayout from "../../layout/PageLayout";
import DragOverlayWrapper from "../ui/DragOverlayWrapper";
import DesignerSidebar from "./DesignerSidebar";
import FormBuilder from "./FormBuilder";
import RightSidebar from "./RightSidebar";

const Builder = () => {
  const { id } = useParams();
  const { onSelectForm } = useBuilder();

  useEffect(() => {
    if (id) onSelectForm(id);
  }, [id]);

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
    <PageLayout type="builder">
      <DndContext sensors={sensors}>
        <div className="space-y-6">
          <div className="px-6 flex w-full h-full gap-6">
            <DesignerSidebar />
            <FormBuilder />
            <RightSidebar />
          </div>
          <DragOverlayWrapper />
        </div>
      </DndContext>
    </PageLayout>
  );
};

export default Builder;

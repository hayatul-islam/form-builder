import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import PageLayout from "../../layout/PageLayout";
import DragOverlayWrapper from "../ui/DragOverlayWrapper";
import FormBuilder from "./FormBuilder";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Builder = () => {
  const [isElement, setIsElement] = useState(false);
  const [isDesign, setIsDesign] = useState(false);

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

  const handleToggleElement = (value) => {
    setIsElement(value);
  };
  const handleToggleDesign = (value) => {
    setIsDesign(value);
  };

  return (
    <PageLayout type="builder">
      <DndContext sensors={sensors}>
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full">
            {isElement ? (
              <LeftSidebar onToggleElement={handleToggleElement} />
            ) : (
              <div className="px-6 py-3">
                <button onClick={() => handleToggleElement(true)}>
                  Add Fields
                  {/* <RiInputField size={40} /> */}
                </button>
              </div>
            )}
          </div>
          <FormBuilder />
          <div className="absolute top-0 right-0 w-auto">
            {isDesign ? (
              <RightSidebar onToggleDesign={handleToggleDesign} />
            ) : (
              <div className="px-6 py-3">
                <button onClick={() => handleToggleDesign(true)}>Design</button>
              </div>
            )}
          </div>
        </div>
        <DragOverlayWrapper />
      </DndContext>
    </PageLayout>
  );
};

export default Builder;

import { DndContext } from "@dnd-kit/core";
import DesignerContextProvider from "../../context/DesignerContext";
import DragOverlayWrapper from "../ui/DragOverlayWrapper";
import Designer from "./Designer";
const FormBuilder = () => {
  return (
    <DesignerContextProvider>
      <DndContext>
        <div className="py-12">
          <Designer />
        </div>
        <DragOverlayWrapper />
      </DndContext>
    </DesignerContextProvider>
  );
};

export default FormBuilder;

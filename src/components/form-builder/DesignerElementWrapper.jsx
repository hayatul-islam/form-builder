import { useDroppable } from "@dnd-kit/core";
import InputField from "../common/InputField";

const DesignerElementWrapper = ({ element }) => {
  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });
  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });

  return (
    <div className="relative flex flex-col hover:cursor-pointer rounded-md ring-1 ring-accent ring-inset ">
      <div
        ref={topHalf.setNodeRef}
        className={`absolute  w-full h-[100px] rounded-t-md ${
          topHalf.isOver && "bg-green-500"
        }`}
      ></div>
      <div
        ref={bottomHalf.setNodeRef}
        className={`absolute  w-full h-1/2 rounded-t-md ${
          bottomHalf.isOver && "bg-green-500"
        }`}
      ></div>

      <div className="bg-white p-4">
        <InputField label={element.label} type={element.type} disabled={true} />
      </div>
    </div>
  );
};

export default DesignerElementWrapper;

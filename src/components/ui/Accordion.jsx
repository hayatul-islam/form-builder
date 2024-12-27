import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Accordion = ({ title, children, value = false }) => {
  const [isOpen, setIsOpen] = useState(value);

  return (
    <div className="space-y-4 border-b border-black/10 pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full  ${
          isOpen && "bg-primary text-white p-2 px-3 rounded "
        } text-black`}
      >
        <h4 className="text-[16px] font-medium uppercase ">{title}</h4>
        {isOpen ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Accordion;

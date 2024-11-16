import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-3 border-b border-black/10 pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full  ${
          isOpen && "bg-white/80 p-2 px-3 rounded "
        }`}
      >
        <h2 className="text-[16px] font-medium uppercase text-black/60">
          {title}
        </h2>
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

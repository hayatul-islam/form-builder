import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { demo } from "../../data";
import CreateFormModal from "../common/CreateFormModal";
import Modal from "../ui/Modal";

const TemplateSlider = () => {
  const [selectItems, setSelectItems] = useState(demo?.slice(0, 5));
  const [isOpen, setIsOpen] = useState(false);
  const [selectDemo, setSelectDemo] = useState({});

  const onOpenModal = (demo) => {
    setSelectDemo(demo || {});
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    setSelectDemo({});
  };

  const handleNext = () => {
    setSelectItems((prevItems) => {
      const [firstItem, ...restItems] = prevItems;
      return [...restItems, firstItem];
    });
  };

  const handlePrevious = () => {
    setSelectItems((prevItems) => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      return [lastItem, ...newItems];
    });
  };

  const handleItem = (item) => {
    setSelectItems((prevItems) => {
      const filterItems = prevItems.filter((i) => i.id !== item?.id);
      filterItems.splice(2, 0, item);
      return filterItems;
    });
  };

  return (
    <div className="space-y-12 md:space-y-20 lg:space-y-28">
      <div className="flex items-center justify-center">
        {selectItems?.map((item, index) => (
          <TemplateSlide
            key={item?.id}
            item={item}
            index={index}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-5">
        <button
          onClick={handlePrevious}
          className="text-primary font-bold text-[20px]"
        >
          <FaArrowLeftLong />
        </button>
        {demo?.slice(0, 5)?.map((item) => (
          <button
            key={item?.id}
            onClick={() => handleItem(item)}
            className={`${
              selectItems[2]?.id === item?.id ? "bg-primary" : "bg-gray-400"
            }  w-[15px] h-[15px] rounded-full  `}
          ></button>
        ))}
        <button
          onClick={handleNext}
          className="text-primary font-bold text-[20px]"
        >
          <FaArrowRightLong />
        </button>
      </div>

      {isOpen && (
        <Modal title={"Create Form"} onClose={onClose} width="600">
          <CreateFormModal demo={selectDemo} />
        </Modal>
      )}
    </div>
  );
};

export default TemplateSlider;

const TemplateSlide = ({ item, index, onOpenModal }) => {
  return (
    <div
      onClick={() => onOpenModal(item)}
      className={`relative cursor-pointer
        ${index === 0 || index === 4 ? "hidden md:block" : ""}
         ${
           index === 2
             ? "scale-125 md:scale-150 z-30"
             : index === 1 || index === 3
             ? "scale-100 md:scale-125 z-20"
             : "scale-100"
         }`}
    >
      <img
        className="w-[120px] h-[150px] sm:h-[200px] sm:w-[150px] lg:h-[300px] lg:w-[250px] rounded-2xl"
        src={item?.image}
        alt=""
      />
    </div>
  );
};

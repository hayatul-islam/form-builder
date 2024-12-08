import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Slider = () => {
  const items = [
    {
      id: 1,
      img: "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2024/07/bakery-order-form-carousel.webp",
    },
    {
      id: 2,
      img: "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2024/07/online-business-conference-carousel.webp",
    },
    {
      id: 3,
      img: "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2024/07/medical-prescription-form-carousel.webp",
    },
    {
      id: 4,
      img: "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2024/07/event-rsvp-form.webp",
    },
    {
      id: 5,
      img: "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2024/07/booking-form-carousel.webp",
    },
  ];

  const [selectItems, setSelectItems] = useState(items);

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
    <div className="space-y-28">
      <div className="flex items-center justify-center">
        {selectItems?.map((item, index) => (
          <div
            key={item?.id}
            className={` ${
              index === 2
                ? "scale-150 bg-white z-30"
                : index === 1 || index === 3
                ? "scale-125 z-20"
                : "scale-100"
            }`}
          >
            <img className="h-[300px] w-[250px]" src={item?.img} alt="" />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-5">
        <button
          onClick={handlePrevious}
          className="text-primary font-bold text-[20px]"
        >
          <FaArrowLeftLong />
        </button>
        {items?.map((item) => (
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
    </div>
  );
};

export default Slider;

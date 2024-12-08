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

  return (
    <div className="space-y-28">
      <div className="flex items-center">
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
            <img src={item?.img} alt="" />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-5">
        <button className="text-primary font-bold text-[20px]">
          <FaArrowLeftLong />
        </button>
        {selectItems?.map((item, index) => (
          <button
            key={item?.id}
            className={`w-[15px] h-[15px] rounded-full bg-primary `}
          ></button>
        ))}
        <button className="text-primary font-bold text-[20px]">
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Slider;

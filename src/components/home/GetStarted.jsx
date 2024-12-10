import { useState } from "react";
import GetStartModal from "../common/GetStartModal";
import Button from "../ui/Button";

const GetStarted = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center text-center  py-12 pb-[120px]">
      <div className="space-y-6">
        <img
          className="w-[150px] mx-auto text-red-500"
          // src="https://cdn-icons-png.flaticon.com/128/12468/12468147.png"
          src="https://cdn-icons-png.flaticon.com/128/3417/3417311.png"
          // src="https://cdn-icons-png.flaticon.com/128/15188/15188645.png"
          // src="https://cdn-icons-png.flaticon.com/128/3649/3649823.png"
          // src="https://cdn-icons-png.flaticon.com/128/3417/3417309.png"
          // src="https://cdn-icons-png.flaticon.com/128/5335/5335265.png"
          // src="https://cdn-icons-png.flaticon.com/128/15188/15188916.png"
          // src="https://cdn-icons-png.flaticon.com/128/3200/3200792.png"
          // src="https://cdn-icons-png.flaticon.com/128/3135/3135632.png"
          // src="https://cdn-icons-png.flaticon.com/128/3135/3135663.png"
          alt=""
        />
        <div>
          <h2 className="text-[42px] leading-none">Your forms, your style</h2>
          <p className="text-gray-500 text-[20px]">
            Customize the style and content of your forms to match your brand
          </p>

          <Button className="mt-3" onClick={handleOpen}>
            Get Started for free
          </Button>
        </div>
      </div>

      {isOpen && <GetStartModal handleClose={handleClose} />}
    </div>
  );
};

export default GetStarted;

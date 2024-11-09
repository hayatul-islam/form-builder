import { FaRegEye } from "react-icons/fa6";

import Button from "../ui/Button";

const BuilderHeader = () => {
  return (
    <div className="bg-white border-b border-gray py-4 px-6 flex justify-between items-center">
      <div></div>
      <div className="flex items-center gap-3">
        <Button className="bg-transparent border w-8 h-8 !p-0 flex justify-center items-center">
          <FaRegEye className="text-[12px]" />
        </Button>
        <Button className="bg-transparent border h-8 !p-0 w-[60px] flex justify-center items-center">
          Save
        </Button>
        <Button className="h-8 !p-0 w-[70px] text-white flex justify-center items-center">
          Publish
        </Button>
      </div>
    </div>
  );
};

export default BuilderHeader;

import { FaCode, FaRegEye } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Button from "../ui/Button";

const BuilderHeader = () => {
  return (
    <div className=" flex justify-between items-center px-6 py-4 border-b border-black/10">
      <div>
        <Link to="/" className="text-[24px] font-medium text-primary">
          Form Builder
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Button
          link="/preview"
          className="bg-transparent !text-black border w-8 h-8 !p-0 flex justify-center items-center"
        >
          <FaRegEye className="text-[12px]" />
        </Button>
        <Button
          link="/code"
          className="bg-transparent !text-black border w-8 h-8 !p-0 flex justify-center items-center"
        >
          <FaCode className="text-[12px]" />
        </Button>
        <Button className="bg-transparent !text-black border h-8 !p-0 w-[60px] flex justify-center items-center">
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

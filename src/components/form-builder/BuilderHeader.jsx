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
          className="border border-primary !text-primary  !bg-gradient-to-r !from-gray !to-white "
        >
          <FaRegEye className="text-[10px" />
        </Button>
        <Button
          link="/code"
          className="border border-primary !text-primary !bg-gradient-to-r !from-gray !to-white "
        >
          <FaCode className="text-[14px]" />
        </Button>

        <Button className="h-8 !p-0 w-[70px]">Save</Button>
      </div>
    </div>
  );
};

export default BuilderHeader;

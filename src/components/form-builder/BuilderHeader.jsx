import { FaCode, FaRegEye } from "react-icons/fa6";

import { HeaderBrand } from "../common/Header";
import Button from "../ui/Button";

const BuilderHeader = () => {
  return (
    // <div className="max-w-[800px] mx-auto py-1 pl-[60px]">
    <div className="flex justify-between items-center px-6 py-4 ">
      <HeaderBrand />
      <div className="flex items-center gap-3">
        <Button
          link="/code"
          className="flex justify-center items-center gap-2 border border-primary !text-primary !bg-gradient-to-r !from-gray !to-white "
        >
          <FaCode className="text-[14px]" />
          <span> Code</span>
        </Button>

        <Button
          link="/preview"
          className="flex justify-center items-center gap-2"
        >
          <FaRegEye className="text-[10px" />
          <span>Preview</span>
        </Button>
      </div>
    </div>
    // </div>
  );
};

export default BuilderHeader;

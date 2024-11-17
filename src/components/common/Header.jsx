import { FaRegEye } from "react-icons/fa6";
import Button from "../ui/Button";

const Header = () => {
  return (
    <div className="container flex justify-between items-center px-6 py-4 border-b border-black/10">
      <div>
        <h2 className="text-[24px] font-medium text-primary">Easy Form</h2>
      </div>
      <div className="flex items-center gap-3">
        <Button className="bg-transparent border !text-red-400 w-8 h-8 !p-0 flex justify-center items-center">
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

export default Header;

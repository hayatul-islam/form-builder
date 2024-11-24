import { MdOutlineDarkMode } from "react-icons/md";
import Button from "../ui/Button";

const Header = () => {
  return (
    <div className="container flex justify-between items-center px-6 py-4 ">
      <div>
        <h2 className="text-[24px] font-medium text-primary">Easy Form</h2>
      </div>

      <div className="flex items-center gap-3">
        <Button className="bg-transparent border !text-black w-8 h-8 !p-0 flex justify-center items-center">
          <MdOutlineDarkMode className="text-[12px]" />
        </Button>

        <Button className="h-8 !p-0 w-[70px] text-white flex justify-center items-center">
          Signin
        </Button>
      </div>
    </div>
  );
};

export default Header;

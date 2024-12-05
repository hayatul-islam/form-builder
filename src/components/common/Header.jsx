import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Header = () => {
  return (
    <div className="container flex justify-between items-center px-6 py-5 ">
      <div>
        <Link to="/" className="text-[24px] font-medium text-primary">
          Form Builder
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {/* <Link to="/templates" className="hover:text-primary">
          Templates
        </Link> */}
        <Button className="bg-transparent border !text-black w-9 h-9 !p-0 flex justify-center items-center">
          <MdOutlineDarkMode className="text-[20px]" />
        </Button>

        <Link
          to="/forms"
          className="px-6 py-2.5 rounded-full bg-black text-[14px] text-white flex justify-center items-center"
        >
          Create Form
        </Link>
      </div>
    </div>
  );
};

export default Header;

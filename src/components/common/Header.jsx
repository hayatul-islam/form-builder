import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Header = () => {
  return (
    <div className="container flex justify-between items-center px-6 py-4 ">
      <div>
        <Link to="/" className="text-[24px] font-medium text-primary">
          Form Builder
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/templates" className="hover:text-primary">
          Templates
        </Link>
        {/* <Button className="bg-transparent border !text-black w-8 h-8 !p-0 flex justify-center items-center">
          <MdDarkMode className="text-[12px]" />
        </Button> */}

        <Button className="h-8 !p-0 !pt-1 w-[70px] text-white flex justify-center items-center">
          Signin
        </Button>
      </div>
    </div>
  );
};

export default Header;

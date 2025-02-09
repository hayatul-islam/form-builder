import { CiLinkedin } from "react-icons/ci";
import { PiGithubLogo } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="text-black dark:text-white bg-white dark:bg-[#1A1929]">
      <div className="container py-12 dark:border-gray-800 text-center space-y-4 md:flex justify-between items-center">
        <div className="text-[16px] ">
          <span className="text-gray-500 dark:text-gray-300">
            © {year} Made by
          </span>{" "}
          <span className="text-black dark:text-white font-medium">
            Md. Hayatul Islam
          </span>
        </div>
        <div className="flex justify-center text-[24px] space-x-3">
          <Link
            className="hover:text-primary transform delay-100 duration-200"
            target="_blank"
            to="https://github.com/hayatul-islam"
          >
            <PiGithubLogo />
          </Link>
          <Link
            className="hover:text-primary transform delay-100 duration-200"
            target="_blank"
            to="https://www.linkedin.com/in/hayatul-islam"
          >
            <CiLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

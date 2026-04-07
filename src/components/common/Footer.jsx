import { CiLinkedin } from "react-icons/ci";
import { PiGithubLogo } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-white dark:bg-gray-dark text-black dark:text-white shadow">
      <div className="container py-8 md:py-12 dark:border-gray-800 text-center space-y-4 md:flex justify-between items-center">
        <div className="text-[14px] md:text-[16px]">
          <span className="text-gray-500 dark:text-gray-300">
            © {year} Build by
          </span>{" "}
          <span className="text-black dark:text-white font-medium">
            Md. Hayatul Islam
          </span>
        </div>
        <div className="flex justify-center text-[18px] md:text-[24px] space-x-3">
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

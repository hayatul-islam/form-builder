import { Link } from "react-router-dom";

const Button = ({ children, className, onClick, link, type = "button" }) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`${className} px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-primary text-[12px] md:text-[14px] text-white transition-all duration-500 hover:bg-primary-100 `}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type}
          // className={`${className} px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gradient-to-r from-primary-100 to-primary text-[12px] md:text-[14px] text-white transition-transform duration-500`}
          className={`${className} px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-primary text-[12px] md:text-[14px] text-white transition-all duration-500 hover:bg-primary-100 `}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

export const SecondaryButton = ({
  children,
  className,
  onClick,
  link,
  type = "button",
}) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`${className} border  px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white dark:bg-dark border-gray-200 dark:border-gray-600  dark:text-white text-[12px] md:text-[14px] text-black transition-all duration-500  hover:border-black dark:hover:border-white `}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type}
          className={`${className} border  px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white dark:bg-dark border-gray-200 dark:border-gray-600  dark:text-white text-[12px] md:text-[14px] text-black transition-all duration-500  hover:border-black dark:hover:border-white `}
        >
          {children}
        </button>
      )}
    </>
  );
};

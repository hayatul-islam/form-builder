import { Link } from "react-router-dom";

const Button = ({ children, className, onClick, link, type = "button" }) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`${className} px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gradient-to-r from-primary to-primary-100 text-[12px] md:text-[14px] text-white hover:shadow-lg transition-all`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type}
          className={`${className} px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gradient-to-r from-primary-100 to-primary text-[12px] md:text-[14px] text-white hover:shadow-lg transition-all`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

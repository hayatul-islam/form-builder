import { Link } from "react-router-dom";

const Button = ({ children, className, onClick, link, type = "button" }) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`${className} px-4 py-2 rounded-lg bg-gradient-to-r from-[#1C28AA] to-[#3A86FF] text-[14px] text-white hover:shadow-lg transition-all`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type}
          className={`${className} px-4 py-2 rounded-lg bg-gradient-to-r from-[#1C28AA] to-[#3A86FF] text-[14px] text-white hover:shadow-lg transition-all`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

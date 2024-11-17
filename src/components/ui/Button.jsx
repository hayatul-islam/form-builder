import { Link } from "react-router-dom";

const Button = ({ children, className, onClick, link, type = "button" }) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`${className} px-4 py-2 bg-primary text-white rounded-md`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type}
          className={`${className} px-4 py-2 bg-primary text-white rounded-md`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

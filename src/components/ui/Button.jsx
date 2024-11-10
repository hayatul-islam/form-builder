const Button = ({ children, className, onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} px-4 py-2 bg-primary text-white rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;

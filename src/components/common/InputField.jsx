const InputField = ({
  name,
  placeholder,
  type = "text",
  disabled = false,
  value = "",
  isRequired = false,
  label,
  className = "",
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <h4>
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </h4>
      )}
      <div className="relative flex h-[40px] items-center rounded border dark:border-black-300 ">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          required={isRequired}
          disabled={disabled}
          className={`${className} h-[40px] w-full bg-transparent px-4 text-[14px] focus:outline-blue-400`}
        />
      </div>
    </div>
  );
};

export default InputField;

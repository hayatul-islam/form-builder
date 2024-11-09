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
        <label>
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={isRequired}
        disabled={disabled}
        className={`${className} h-[40px]  rounded border  w-full bg-transparent px-4 text-[14px] focus:outline-blue-400`}
      />
    </div>
  );
};

export default InputField;

import useBuilder from "../../hooks/useBuilder";

const InputField = ({
  name,
  type = "text",
  value = "",
  label,
  placeholder,
  className = "",
  isDisabled = false,
  isRequired = false,
  isReadOnly = false,
}) => {
  const { settings } = useBuilder();

  const { fontSize, textColor } = settings || {};

  return (
    <div className="space-y-1">
      {label && (
        <label
          style={{
            color: textColor?.light,
            fontSize: `${fontSize}px`,
          }}
        >
          {label}
          {isRequired && <span className="text-red-500"> *</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        // value={value}
        placeholder={placeholder}
        required={isRequired}
        disabled={isDisabled}
        readOnly={isReadOnly}
        className={`${className} h-[40px]  rounded border  w-full bg-transparent px-4 text-[14px] focus:outline-blue-400`}
      />
    </div>
  );
};

export default InputField;

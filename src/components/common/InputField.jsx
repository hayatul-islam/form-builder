import useBuilder from "../../hooks/useBuilder";
import { onLabelStyle } from "../../utils";

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

  const labelStyle = onLabelStyle(settings?.label);

  return (
    <div className="space-y-1">
      {label && (
        <label style={labelStyle?.style}>
          {label}
          {isRequired && (
            <span style={labelStyle?.requiredStyle} className="text-red-500">
              {" "}
              *
            </span>
          )}
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

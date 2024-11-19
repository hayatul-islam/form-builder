import useBuilder from "../../hooks/useBuilder";
import { onInputStyle, onLabelStyle } from "../../utils";

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
  const inputStyle = onInputStyle(settings?.inputField);

  return (
    <div>
      {label && (
        <div style={labelStyle?.style}>
          {label}
          {isRequired && (
            <span style={labelStyle?.requiredStyle} className="text-red-500">
              {" "}
              *
            </span>
          )}
        </div>
      )}
      <input
        type={type}
        name={name}
        // value={value}
        placeholder={placeholder}
        required={isRequired}
        disabled={isDisabled}
        readOnly={isReadOnly}
        style={inputStyle?.style}
        className={`${className}`}
      />
    </div>
  );
};

export default InputField;

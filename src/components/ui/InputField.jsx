import useBuilder from "../../hooks/useBuilder";
import { onInputStyle, onLabelStyle } from "../../utils";

const InputField = ({
  name,
  type = "text",
  label,
  placeholder,
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
        <div style={labelStyle?.style} className={labelStyle?.className}>
          {label}
          {isRequired && (
            <span
              style={labelStyle?.requiredStyle}
              className={labelStyle?.requiredClassName}
            >
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
        className={`${inputStyle?.className}`}
      />
    </div>
  );
};

export default InputField;

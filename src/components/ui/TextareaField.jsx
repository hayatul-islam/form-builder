import useBuilder from "../../hooks/useBuilder";
import { onInputStyle, onLabelStyle } from "../../utils";

const TextareaField = ({
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
      <textarea
        type={type}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        disabled={isDisabled}
        readOnly={isReadOnly}
        style={inputStyle?.style}
        className={inputStyle?.className}
        rows={3}
      />
    </div>
  );
};

export default TextareaField;

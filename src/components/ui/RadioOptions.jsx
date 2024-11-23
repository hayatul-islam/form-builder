import useBuilder from "../../hooks/useBuilder";
import { onElementStyle, onLabelStyle } from "../../utils";

const RadioOptions = ({
  name,
  value = "",
  label,
  className = "",
  isDisabled = false,
  isRequired = false,
  options = [],
  settings: elementSettings = {},
  type,
}) => {
  const { settings } = useBuilder();

  const labelStyle = onLabelStyle(settings?.label);
  const elementStyle = onElementStyle(type, elementSettings);

  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <label
          style={labelStyle?.style}
          className="block text-lg font-semibold"
        >
          {label}
          {isRequired && (
            <span style={labelStyle?.requiredStyle} className="text-red-500">
              {" "}
              *
            </span>
          )}
        </label>
      )}

      <div style={elementStyle?.style} className={elementStyle?.className}>
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              // value={option?.value}
              // checked={value === option?.value}
              disabled={isDisabled}
              className="accent-blue-600 w-4 h-4 cursor-pointer"
            />
            <span
              style={{ color: isDisabled ? "#a0a0a0" : "#333" }}
              className="text-base"
            >
              {option?.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioOptions;

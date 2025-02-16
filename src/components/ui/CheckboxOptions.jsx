import useBuilder from "../../hooks/useBuilder";
import { onElementStyle, onLabelStyle } from "../../utils";

const CheckboxOptions = ({
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
          <div key={index} className="flex gap-2 cursor-pointer">
            <input
              type="checkbox"
              name={name}
              disabled={isDisabled}
              className="accent-blue-600 w-4 h-4 cursor-pointer"
            />
            <label
              style={labelStyle?.style}
              // style={{ color: isDisabled ? "#a0a0a0" : "#333" }}
              className="text-base"
            >
              {option?.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxOptions;

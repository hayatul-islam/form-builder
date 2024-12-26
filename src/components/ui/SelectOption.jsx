import useBuilder from "../../hooks/useBuilder";
import { onInputStyle, onLabelStyle } from "../../utils";

const SelectOptions = ({
  name,
  type = "text",
  value = "",
  label,
  placeholder,
  className = "",
  isDisabled = false,
  isRequired = false,
  isReadOnly = false,
  options,
}) => {
  const { settings } = useBuilder();

  const labelStyle = onLabelStyle(settings?.label);
  const inputStyle = onInputStyle(settings?.inputField);

  return (
    <div className="space-y-1">
      {label && (
        <label className={labelStyle?.className} style={labelStyle?.style}>
          {label}
          {isRequired && (
            <span style={labelStyle?.requiredStyle} className="text-red-500">
              {" "}
              *
            </span>
          )}
        </label>
      )}

      <select
        name={name}
        id={name}
        // value={value || ""}
        style={inputStyle?.style}
        className={`${className}  rounded border w-full bg-transparent px-4 text-[14px] focus:outline-blue-400`}
      >
        {options?.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;

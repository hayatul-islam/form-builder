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

      <select
        name={name}
        id={name}
        value={value || ""}
        style={inputStyle?.style}
        className={`${className}  rounded border  w-full bg-transparent px-4 text-[14px] focus:outline-blue-400`}
      >
        {options?.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
      {/* <input
        type={type}
        name={name}
        // value={value}
        placeholder={placeholder}
        required={isRequired}
        disabled={isDisabled}
        readOnly={isReadOnly}
        style={inputStyle?.style}
        className={`${className}  rounded border  w-full bg-transparent px-4 text-[14px] focus:outline-blue-400`}
      /> */}
    </div>
  );
};

export default SelectOptions;

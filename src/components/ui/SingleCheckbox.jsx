import useBuilder from "../../hooks/useBuilder";
import { onElementStyle } from "../../utils";

const SingleCheckbox = ({
  name,
  value = "",
  label,
  className = "",
  isDisabled = false,
  isRequired = false,

  settings: elementSettings = {},
  type,
}) => {
  const { settings } = useBuilder();

  const elementStyle = onElementStyle(type, elementSettings);

  return (
    <div className="flex items-center gap-2 ">
      <input
        type="checkbox"
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
        {label}
      </span>
    </div>
  );
};

export default SingleCheckbox;

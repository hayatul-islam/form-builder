import useBuilder from "../../hooks/useBuilder";
import { onLabelStyle } from "../../utils";

const SingleCheckbox = ({
  name,
  label,
  isDisabled = false,
  isRequired = false,
}) => {
  const { settings } = useBuilder();
  const labelStyle = onLabelStyle(settings?.label);

  return (
    <div className="flex gap-2 ">
      <input
        type="checkbox"
        name={name}
        // value={option?.value}
        // checked={value === option?.value}
        disabled={isDisabled}
        className="accent-blue-600 w-4 h-4 cursor-pointer"
      />
      <label
        style={labelStyle?.style}
        // style={{ color: isDisabled ? "#a0a0a0" : "#333" }}
        className="text-base"
      >
        {label}
      </label>
    </div>
  );
};

export default SingleCheckbox;

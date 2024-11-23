import { onButtonStyle } from "../../utils";

const SubmitButton = ({
  name,
  type = "text",
  value = "",
  label,
  placeholder,
  className = "",
  settings,
}) => {
  const buttonStyle = onButtonStyle(settings);

  return (
    <div style={buttonStyle?.alignmentStyle}>
      <button
        type="submit"
        style={buttonStyle?.style}
        // className={`block w-[150px] px-6 py-3 mx-auto bg-primary text-white rounded-md`}
      >
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;

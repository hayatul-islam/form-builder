import { onHeadlineStyle } from "../../utils";

const HeadLine = ({ label, settings }) => {
  const headlineStyle = onHeadlineStyle(settings);

  return (
    <h2 style={headlineStyle?.style} className={headlineStyle?.className}>
      {label}
    </h2>
  );
};

export default HeadLine;

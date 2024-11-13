import InputField from "../common/InputField";
import InputFile from "../common/InputFile";

const SingleElement = ({ element }) => {
  let filed;
  switch (element?.type) {
    case "file":
      filed = <InputFile {...element} />;
      break;

    default:
      filed = <InputField {...element} />;
      break;
  }

  return <div>{filed}</div>;
};

export default SingleElement;

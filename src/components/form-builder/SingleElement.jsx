import InputField from "../ui/InputField";
import SelectOptions from "../ui/SelectOption";

const SingleElement = ({ element }) => {
  let filed;
  switch (element?.type) {
    case "select":
      filed = <SelectOptions {...element} />;
      break;

    default:
      filed = <InputField {...element} />;
      break;
  }

  return <div>{filed}</div>;
};

export default SingleElement;

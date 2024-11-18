import CheckboxOptions from "../ui/CheckboxOptions";
import InputField from "../ui/InputField";
import RadioOptions from "../ui/RadioOptions";
import SelectOptions from "../ui/SelectOption";

const SingleElement = ({ element }) => {
  let filed;
  switch (element?.type) {
    case "select":
      filed = <SelectOptions {...element} />;
      break;

    case "radio":
      filed = <RadioOptions {...element} />;
      break;

    case "checkbox":
      filed = <CheckboxOptions {...element} />;
      break;

    default:
      filed = <InputField {...element} />;
      break;
  }

  return <div>{filed}</div>;
};

export default SingleElement;

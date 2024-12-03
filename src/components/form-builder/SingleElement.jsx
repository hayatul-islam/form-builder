import CheckboxOptions from "../ui/CheckboxOptions";
import HeadLine from "../ui/Headline";
import InputField from "../ui/InputField";
import RadioOptions from "../ui/RadioOptions";
import SelectOptions from "../ui/SelectOption";
import SubmitButton from "../ui/SubmitButton";
import TextareaField from "../ui/TextareaField";

const SingleElement = ({ element }) => {
  let filed;
  switch (element?.type) {
    case "title":
      filed = <HeadLine {...element} />;
      break;

    case "textarea":
      filed = <TextareaField {...element} />;
      break;

    case "select":
      filed = <SelectOptions {...element} />;
      break;

    case "radio":
      filed = <RadioOptions {...element} />;
      break;

    case "checkbox":
      filed = <CheckboxOptions {...element} />;
      break;

    case "submit":
      filed = <SubmitButton {...element} />;
      break;

    default:
      filed = <InputField {...element} />;
      break;
  }

  return <div>{filed}</div>;
};

export default SingleElement;

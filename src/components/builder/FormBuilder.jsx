import { useBuilderContext } from "../../context/BuilderContext";
import InputField from "../common/InputField";

const FormBuilder = () => {
  const { state } = useBuilderContext();

  return (
    <div className="w-full bg-gray rounded-lg p-5">
      <div className="bg-white p-4 rounded-md space-y-5">
        {state.elements?.map((element) => (
          <InputField
            key={element?.id}
            label={element?.label}
            name={element?.name}
            type={element?.type}
          />
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;

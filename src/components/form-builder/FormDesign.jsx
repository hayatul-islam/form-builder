import { useState } from "react";
import { onInputValueChange } from "../../utils";
import ColorPicker from "../ui/ColorPicker";

const FormDesign = () => {
  const [values, setValues] = useState({});

  const onChange = (key, value) => {
    setValues(onInputValueChange(values, key, value));
  };
  console.log(values);

  return (
    <div>
      <div>
        <h3>Text Color</h3>
        <div className="flex justify-between items-center gap-3">
          <ColorPicker
            name="light"
            label="Light"
            value={values?.textColor || ""}
            type="color"
            onChange={onChange}
          />
          <ColorPicker
            name="dark"
            label="dark"
            value={values?.textColor || ""}
            type="color"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FormDesign;

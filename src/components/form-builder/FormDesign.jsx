import useBuilder from "../../hooks/useBuilder";
import { onInputValueChange } from "../../utils";
import ColorPicker from "../ui/ColorPicker";
import Input from "./Input";

const FormDesign = () => {
  const { settings, onUpdateSettings } = useBuilder();

  const onChange = (key, value, subKey) => {
    const updateSettings = onInputValueChange(settings, key, value, subKey);
    onUpdateSettings(updateSettings);
  };

  console.log(settings);

  return (
    <div>
      <div>
        <h3>Text Color</h3>
        <div className="flex justify-between items-center gap-3">
          <ColorPicker
            label="Light"
            name="textColor"
            subKey="light"
            value={settings?.textColor?.light || ""}
            type="color"
            onChange={onChange}
          />
          <ColorPicker
            label="Dark"
            name="textColor"
            subKey="dark"
            value={settings?.textColor?.dark || ""}
            type="color"
            onChange={onChange}
          />
        </div>
      </div>

      <Input
        label="Font Size"
        name="fontSize"
        value={settings?.fontSize || ""}
        type="number"
        onChange={onChange}
      />
    </div>
  );
};

export default FormDesign;

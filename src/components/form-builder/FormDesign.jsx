import useBuilder from "../../hooks/useBuilder";
import { onInputValueChange } from "../../utils";
import ColorPicker from "../ui/ColorPicker";

const FormDesign = () => {
  const { settings, onUpdateSettings } = useBuilder();

  const onChange = (key, value, subKey) => {
    const updateSettings = onInputValueChange(settings, key, value, subKey);
    onUpdateSettings(updateSettings);
  };

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
    </div>
  );
};

export default FormDesign;

import useBuilder from "../../hooks/useBuilder";
import { onInputValueChange } from "../../utils";
import DualColorPicker from "../ui/DualColorPicker";
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
      <div className="space-y-4">
        <h2>LAYOUT</h2>

        <div className="space-y-3">
          <DualColorPicker
            label="Background"
            name="layout"
            value={settings?.layout?.bg || {}}
            onChange={onChange}
            subKey="bg"
          />
          <Input
            label="Font Size"
            name="fontSize"
            value={settings?.fontSize || ""}
            type="number"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FormDesign;

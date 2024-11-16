import useBuilder from "../../hooks/useBuilder";
import { onInputValueChange } from "../../utils";
import Accordion from "../ui/Accordion";
import BorderStyle from "../ui/BorderStyle";
import DualColorPicker from "../ui/DualColorPicker";
import Input from "../ui/Input";
import MarginPaddingStyle from "../ui/MarginPaddingStyle";

const FormDesign = () => {
  const { settings, onUpdateSettings } = useBuilder();

  const onChange = (key, value, subKey) => {
    const updateSettings = onInputValueChange(settings, key, value, subKey);
    onUpdateSettings(updateSettings);
  };

  console.log(settings);

  return (
    <div className="space-y-4">
      <Accordion title="Layout">
        <div className="space-y-3">
          <Input
            label="Max Width"
            name="layout"
            subKey="width"
            value={settings?.layout?.width || ""}
            type="number"
            placeholder="0px"
            onChange={onChange}
          />
          <DualColorPicker
            label="Background"
            name="layout"
            value={settings?.layout?.background || {}}
            onChange={onChange}
            subKey="background"
          />
          <BorderStyle
            label="Border"
            name="layout"
            value={settings?.layout?.border || {}}
            onChange={onChange}
            subKey="border"
          />
          <MarginPaddingStyle
            label="Margin"
            name="layout"
            value={settings?.layout?.margin || {}}
            onChange={onChange}
            subKey="margin"
          />
          <MarginPaddingStyle
            label="Padding"
            name="layout"
            value={settings?.layout?.padding || {}}
            onChange={onChange}
            subKey="padding"
          />
        </div>
      </Accordion>

      <Accordion title="Label">
        <div className="space-y-3">
          <Input
            label="Font Size"
            name="label"
            subKey="fontSize"
            value={settings?.label?.fontSize || ""}
            type="number"
            onChange={onChange}
          />
          <DualColorPicker
            label="Color"
            name="label"
            value={settings?.label?.color || {}}
            onChange={onChange}
            subKey="color"
          />
        </div>
      </Accordion>
    </div>
  );
};

export default FormDesign;

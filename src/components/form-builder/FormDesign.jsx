import { fontWeightStyle } from "../../data";
import useBuilder from "../../hooks/useBuilder";
import { onInputValueChange } from "../../utils";
import Accordion from "../ui/Accordion";
import BorderRadiusStyle from "../ui/BorderRadiusStyle";
import BorderStyle from "../ui/BorderStyle";
import DualColorPicker from "../ui/DualColorPicker";
import Input from "../ui/Input";
import MarginPaddingStyle from "../ui/MarginPaddingStyle";
import Select from "../ui/Select";

const FormDesign = () => {
  const { settings, onUpdateSettings } = useBuilder();

  const onChange = (key, value, subKey) => {
    const updateSettings = onInputValueChange(settings, key, value, subKey);
    onUpdateSettings(updateSettings);
  };

  console.log(settings);

  return (
    <div className="space-y-4">
      {/* layout  */}
      <Accordion title="Layout">
        <div className="space-y-3">
          <h3 className="font-medium text-[18px]">Form</h3>
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
        </div>
        <div className="space-y-3 pt-4">
          <h3 className="font-medium text-[18px]">Page</h3>
          <div className="space-y-3">
            <DualColorPicker
              label="Background"
              name="layout"
              value={settings?.layout?.pageBackground || {}}
              onChange={onChange}
              subKey="pageBackground"
            />

            <MarginPaddingStyle
              label="Padding"
              name="layout"
              value={settings?.layout?.pagePadding || {}}
              onChange={onChange}
              subKey="pagePadding"
            />
          </div>
        </div>
      </Accordion>

      {/* label  */}
      <Accordion title="Label">
        <div className="space-y-3">
          <DualColorPicker
            label="Color"
            name="label"
            value={settings?.label?.color || {}}
            onChange={onChange}
            subKey="color"
          />
          <Input
            label="Font Size"
            name="label"
            subKey="fontSize"
            value={settings?.label?.fontSize || ""}
            type="number"
            placeholder="0px"
            onChange={onChange}
          />
          <Select
            label="Font Weight"
            name="label"
            subKey="fontWeight"
            value={settings?.label?.fontWeight || ""}
            options={fontWeightStyle}
            onChange={onChange}
          />

          <DualColorPicker
            label="Required Color"
            name="label"
            value={settings?.label?.requiredColor || {}}
            onChange={onChange}
            subKey="requiredColor"
          />

          <MarginPaddingStyle
            label="Margin"
            name="label"
            value={settings?.label?.margin || {}}
            onChange={onChange}
            subKey="margin"
          />
        </div>
      </Accordion>

      {/* input  */}
      <Accordion title="Input">
        <div className="space-y-3">
          <BorderRadiusStyle
            label="Border Radius"
            name="inputField"
            value={settings?.inputField?.border || ""}
            onChange={onChange}
            subKey="border"
          />
          <Input
            label="Font Size"
            name="inputField"
            subKey="fontSize"
            value={settings?.inputField?.fontSize || ""}
            type="number"
            placeholder="0px"
            onChange={onChange}
          />
          <Select
            label="Font Weight"
            name="inputField"
            subKey="fontWeight"
            value={settings?.inputField?.fontWeight || ""}
            options={fontWeightStyle}
            onChange={onChange}
          />
          <DualColorPicker
            label="Background"
            name="inputField"
            value={settings?.inputField?.background || {}}
            onChange={onChange}
            subKey="background"
          />
          <BorderStyle
            label="Border"
            name="inputField"
            value={settings?.inputField?.border || {}}
            onChange={onChange}
            subKey="border"
          />
          <MarginPaddingStyle
            label="Padding"
            name="inputField"
            value={settings?.inputField?.padding || {}}
            onChange={onChange}
            subKey="padding"
          />
          <MarginPaddingStyle
            label="Margin"
            name="inputField"
            value={settings?.inputField?.margin || {}}
            onChange={onChange}
            subKey="margin"
          />
        </div>
      </Accordion>
    </div>
  );
};

export default FormDesign;

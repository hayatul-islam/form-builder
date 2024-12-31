import { buttonStyle, fontWeightStyle } from "../../data";
import useBuilder from "../../hooks/useBuilder";
import { onInputValueChange } from "../../utils";
import Alignment from "../ui/Alignment";
import ColorPicker from "../ui/ColorPicker";
import FieldWidth from "../ui/FieldWidth";
import Input from "../ui/Input";
import MarginPaddingStyle from "../ui/MarginPaddingStyle";
import Options from "../ui/Options";
import Select from "../ui/Select";
import ToggleButton from "../ui/ToggleButton";

const Properties = () => {
  const { selectedElement, onSelectedElement, onUpdateElement } = useBuilder();

  const onChange = (key, value, subKey) => {
    const values = onInputValueChange(selectedElement, key, value, subKey);
    onSelectedElement(values);
    onUpdateElement(selectedElement.id, values);
  };

  const handleBtn = (btn) => {
    const btnSettings = selectedElement?.settings;
    const newSettings = {
      ...btnSettings,
      background: btn?.background,
      color: btn?.color,
    };

    onChange("settings", newSettings);
  };

  const type = selectedElement?.type;
  const isRequired = type !== "submit" && type !== "title";
  const isReadOnly = type !== "submit" && type !== "title";
  const isPlaceholder =
    type === "text" ||
    type === "textarea" ||
    type === "email" ||
    type === "password" ||
    type === "url" ||
    type === "number";
  const isOptions =
    type === "checkbox" || type === "radio" || type === "select";
  const isNumberOfOptions = type === "checkbox" || type === "radio";
  const isButton = type === "submit";
  const isHeadline = type === "title";
  const isWidth = !isButton && !isHeadline;

  return (
    <div className="rounded-lg space-y-4 p-4">
      <Input
        name="label"
        label="Label"
        value={selectedElement?.label || ""}
        type="text"
        onChange={onChange}
      />
      {isPlaceholder && (
        <Input
          name="placeholder"
          label="Placeholder"
          value={selectedElement?.placeholder || ""}
          type="text"
          onChange={onChange}
        />
      )}

      {isWidth && (
        <FieldWidth
          label="Width"
          name="width"
          value={selectedElement?.width || ""}
          onChange={onChange}
        />
      )}

      {isRequired && (
        <ToggleButton
          name="isRequired"
          label="Required"
          value={selectedElement?.isRequired || false}
          onChange={onChange}
        />
      )}

      {isReadOnly && (
        <ToggleButton
          name="isReadOnly"
          label="Read Only"
          value={selectedElement?.isReadOnly || false}
          onChange={onChange}
        />
      )}

      {isOptions && (
        <Options
          name="options"
          label="Options"
          onChange={onChange}
          options={selectedElement?.options}
        />
      )}

      {isNumberOfOptions && (
        <Select
          label="No of columns"
          name="settings"
          subKey="numberOfColumns"
          value={selectedElement?.settings?.numberOfColumns || ""}
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ]}
          onChange={onChange}
        />
      )}

      {isButton && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              name="settings"
              label="Width"
              subKey="width"
              value={selectedElement?.settings?.width || ""}
              onChange={onChange}
              placeholder="150px"
              type="number"
            />
            <Input
              name="settings"
              label="Font Size"
              subKey="fontSize"
              value={selectedElement?.settings?.fontSize || ""}
              onChange={onChange}
              placeholder="16px"
              type="number"
            />

            <Select
              label="Font Weight"
              name="settings"
              subKey="fontWeight"
              value={selectedElement?.settings?.fontWeight || ""}
              options={fontWeightStyle}
              onChange={onChange}
            />

            <Input
              name="settings"
              label="Radius"
              subKey="radius"
              value={selectedElement?.settings?.radius || ""}
              onChange={onChange}
              placeholder="5px"
              type="number"
            />

            <ColorPicker
              label="Custom Color"
              name="settings"
              subKey="color"
              value={selectedElement?.settings?.color || ""}
              type="color"
              onChange={onChange}
            />
            <ColorPicker
              label="Custom Background"
              name="settings"
              subKey="background"
              value={selectedElement?.settings?.background || ""}
              type="color"
              onChange={onChange}
            />
            <MarginPaddingStyle
              label="Padding"
              name="settings"
              subKey="padding"
              value={selectedElement?.settings?.padding}
              onChange={onChange}
              type="horizontalAndVertical"
            />
            <Alignment
              label="Alignment"
              name="settings"
              subKey="alignment"
              value={selectedElement?.settings?.alignment}
              onChange={onChange}
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-[16px] font-medium dark:text-gray-100">
              Button Style
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {buttonStyle?.map((btn, i) => (
                <button
                  key={i}
                  onClick={() => handleBtn(btn)}
                  style={{ background: btn?.background, color: btn?.color }}
                  className={`px-6 py-3 rounded-md`}
                >
                  Submit
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {isHeadline && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Alignment
              label="Alignment"
              name="settings"
              subKey="alignment"
              columns={3}
              value={selectedElement?.settings?.alignment}
              onChange={onChange}
            />
            <Input
              name="settings"
              label="Font Size"
              subKey="fontSize"
              value={selectedElement?.settings?.fontSize || ""}
              onChange={onChange}
              placeholder="16px"
              type="number"
            />

            <Select
              label="Font Weight"
              name="settings"
              subKey="fontWeight"
              value={selectedElement?.settings?.fontWeight || ""}
              options={fontWeightStyle}
              onChange={onChange}
            />

            <Input
              name="settings"
              label="Radius"
              subKey="radius"
              value={selectedElement?.settings?.radius || ""}
              onChange={onChange}
              placeholder="5px"
              type="number"
            />

            <ColorPicker
              label="Color"
              name="settings"
              subKey="color"
              value={selectedElement?.settings?.color || ""}
              onChange={onChange}
            />
            <ColorPicker
              label="Background"
              name="settings"
              subKey="background"
              value={selectedElement?.settings?.background || ""}
              onChange={onChange}
            />
            <MarginPaddingStyle
              label="Padding"
              name="settings"
              subKey="padding"
              value={selectedElement?.settings?.padding}
              onChange={onChange}
              type="horizontalAndVertical"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;

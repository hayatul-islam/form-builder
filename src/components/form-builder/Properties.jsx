import { buttonStyle, fontWeightStyle } from "../../data";
import useBuilder from "../../hooks/useBuilder";
import { onInputValueChange } from "../../utils";
import Alignment from "../ui/Alignment";
import ColorPicker from "../ui/ColorPicker";
import Input from "../ui/Input";
import MarginPaddingStyle from "../ui/MarginPaddingStyle";
import Options from "../ui/Options";
import Select from "../ui/Select";
import ToggleButton from "../ui/ToggleButton";

const Properties = () => {
  const { selectedElement, setSelectedElement, onUpdateElement } = useBuilder();

  const onChange = (key, value, subKey) => {
    const values = onInputValueChange(selectedElement, key, value, subKey);
    setSelectedElement(values);
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

  return (
    <div className="rounded-lg space-y-4">
      {/* <div className="border border-primary/50 w-[130px] p-0.5 mx-auto h-[35px] rounded-full flex items-center justify-between">
        <button
          onClick={() => setType("property")}
          className={`${
            type === "property"
              ? "bg-primary/70 text-white"
              : "bg-gray text-black"
          } rounded-full w-[60px] h-full flex justify-center items-center`}
        >
          <RiSettingsLine size={16} />
        </button>
        <button
          onClick={() => setType("design")}
          className={`${
            type === "design"
              ? "bg-primary/70 text-white"
              : "bg-gray text-black"
          } rounded-full w-[60px] h-full flex justify-center items-center`}
        >
          <MdOutlineColorLens />
        </button>
      </div> */}

      <div className="text-center py-2 font-bold uppercase bg-primary/20 text-primary">
        <h2>{selectedElement?.name}</h2>
      </div>

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
            <h2 className="text-[16px] font-medium">Button Style</h2>
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
              type="color"
              onChange={onChange}
            />
            <ColorPicker
              label="Background"
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;

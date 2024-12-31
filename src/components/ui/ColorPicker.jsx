import { useRef, useState } from "react";

const ColorPicker = ({ name, subKey, label, value, onChange, className }) => {
  const containerRef = useRef(null);
  const [isContainerFocused, setIsContainerFocused] = useState(false);

  const handleContainerFocus = () => {
    setIsContainerFocused(true);
  };

  const handleContainerBlur = () => {
    setIsContainerFocused(false);
  };

  return (
    <div id="colorPicker">
      {label && (
        <label className="font-medium pb-1 block dark:text-gray-100">
          {label}
        </label>
      )}

      <div
        ref={containerRef}
        className={`${className} w-full flex items-center gap-2 border  py-1 px-2 rounded border-black/20 bg-white dark:bg-gray-950 dark:text-gray-300 dark:border-gray-600 ${
          isContainerFocused ? "border-black/50 outline-none" : ""
        }`}
        tabIndex="-1"
        onFocus={handleContainerFocus}
        onBlur={handleContainerBlur}
      >
        <div className="h-7">
          <input
            type="color"
            name={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value, subKey)}
            className="h-full w-6 border-none cursor-pointer bg-transparent"
            aria-label={`${label} color picker`}
          />
        </div>

        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value, subKey)}
          placeholder="#000000"
          className="w-full h-full border-none focus:outline-none bg-transparent"
          aria-label={`${label} color value`}
        />
      </div>
    </div>
  );
};

export default ColorPicker;

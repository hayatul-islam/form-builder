export const onSetLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const onGetLocalStorage = (name) => {
  if (typeof localStorage === "undefined") {
    return null;
  }
  const value = localStorage.getItem(name);

  return JSON.parse(value);
};

export const onInputValueChange = (values, key, value, subKey = null) => {
  if (subKey) {
    const nestedValue = values?.[key] || {};
    return {
      ...values,
      [key]: {
        ...nestedValue,
        [subKey]: value,
      },
    };
  } else {
    return {
      ...values,
      [key]: value,
    };
  }
};

export const onPageStyle = (layout = {}) => {
  const { pageBackground = {}, pagePadding = {} } = layout;

  // Generate CSS style
  const style = {
    background: pageBackground?.light ?? "",
    padding:
      pagePadding.vertical || pagePadding?.horizontal
        ? `${pagePadding.horizontal || "20"}px ${
            pagePadding.vertical || "20"
          }px`
        : "20px",
    // paddingTop: pagePadding?.top ? `${pagePadding.top}px` : "16px",
    // paddingBottom: pagePadding?.bottom ? `${pagePadding.bottom}px` : "16px",
    // paddingLeft: pagePadding?.left ? `${pagePadding.left}px` : "16px",
    // paddingRight: pagePadding?.right ? `${pagePadding.right}px` : "16px",
  };

  // Generate Tailwind classes
  const className = [
    pageBackground.light ? `bg-[${pageBackground.light}]` : "",
    pageBackground.dark ? `dark:bg-[${pageBackground.light}]` : "dark:bg-black",
    pagePadding?.vertical ? `px-[${pagePadding.vertical}px]` : "px-5",
    pagePadding?.horizontal ? `py-[${pagePadding.horizontal}px]` : "py-5",
    // pagePadding.top ? `pt-[${pagePadding.top}px]` : "pt-4",
    // pagePadding.bottom ? `pb-[${pagePadding.bottom}px]` : "pb-4",
    // pagePadding.left ? `pl-[${pagePadding.left}px]` : "pl-4",
    // pagePadding.right ? `pr-[${pagePadding.right}px]` : "pr-4",
    "min-h-screen",
  ]
    .filter(Boolean)
    .join(" ");

  return { style, className };
};

export const onFormStyle = (layout = {}) => {
  const {
    width,
    background = {},
    margin = {},
    padding = {},
    border = {},
    gap,
  } = layout;

  // Generate css style
  const style = {
    display: "grid",
    gap: gap ? `${gap}px` : "12px",
    maxWidth: width !== "200" ? `${width}px` : "100%",
    backgroundColor: background.light || "white",
    margin: "auto",
    marginTop: margin?.vertical ? `${margin.vertical}px` : "auto",
    marginBottom: margin?.vertical ? `${margin.vertical}px` : "auto",
    marginLeft: margin?.horizontal > 0 ? `${margin.horizontal}px` : "auto",
    marginRight: margin?.horizontal > 0 ? `${margin.horizontal}px` : "auto",

    padding:
      padding.vertical || padding?.horizontal
        ? `${padding.horizontal || "16"}px ${padding.vertical || "16"}px`
        : "",
    border: border.thickness
      ? `${border.thickness}px ${border.style || "solid"} ${
          border.color || "black"
        }`
      : "none",
    borderRadius: border.radius ? `${border.radius}px` : "",
  };

  // Generate Tailwind classes
  const className = [
    width ? `max-w-[${width}px] mx-auto` : "w-full",
    background.light ? `bg-[${background.light}]` : "bg-white",
    background.dark ? `dark:bg-[${background.dark}]` : "dark:bg-black",
    margin.top ? `mt-[${margin.top}px]` : "",
    margin.bottom ? `mb-[${margin.bottom}px]` : "",
    margin.left ? `ml-[${margin.left}px]` : "",
    margin.right ? `mr-[${margin.right}px]` : "",
    padding?.vertical ? `px-[${padding.vertical}px]` : "px-4",
    padding?.horizontal ? `py-[${padding.horizontal}px]` : "py-4",
    // padding.top ? `pt-[${padding.top}px]` : "pt-4",
    // padding.bottom ? `pb-[${padding.bottom}px]` : "pb-4",
    // padding.left ? `pl-[${padding.left}px]` : "pl-4",
    // padding.right ? `pr-[${padding.right}px]` : "pr-4",
    border.thickness ? `border-[${border.thickness}px]` : "",
    border.style ? `border-${border.style}` : "border-none",
    border.color ? `border-[${border.color}]` : "",
    border.radius ? `rounded-[${border.radius}px]` : "8px",
    gap ? `space-y-[${gap}px]` : "space-y-3",
  ]
    .filter(Boolean)
    .join(" ");

  return { style, className };
};

export const onLabelStyle = (label = {}) => {
  const {
    fontSize,
    fontWeight,
    margin = {},
    padding = {},
    color = {},
    requiredColor = {},
  } = label;

  // Generate CSS style
  const style = {
    color: color.light || "",
    fontSize: fontSize ? `${fontSize}px` : "",
    fontWeight:
      fontWeight === "normal"
        ? "400"
        : fontWeight === "medium"
        ? "500"
        : fontWeight === "bold"
        ? "700"
        : "500",
    marginTop: margin.top ? `${margin.top}px` : "",
    marginBottom: margin.bottom ? `${margin.bottom}px` : "",
    marginLeft: margin.left ? `${margin.left}px` : "",
    marginRight: margin.right ? `${margin.right}px` : "",
    paddingTop: padding.top ? `${padding.top}px` : "",
    paddingBottom: padding.bottom ? `${padding.bottom}px` : "6px",
    paddingLeft: padding.left ? `${padding.left}px` : "",
    paddingRight: padding.right ? `${padding.right}px` : "",
  };

  const requiredStyle = {
    color: requiredColor.light || "red",
  };

  const requiredClassName = requiredColor.light
    ? `text-[${requiredColor.light}]`
    : "text-red-500";

  // Generate Tailwind classes
  const className = [
    fontSize ? `text-[${fontSize}px]` : "",
    fontWeight ? `font-[${fontWeight}]` : "font-medium",
    color?.light ? `text-[${color?.light}]` : "text-black",
    margin.top ? `mt-[${margin.top}px]` : "",
    margin.bottom ? `mb-[${margin.bottom}px]` : "",
    margin.left ? `ml-[${margin.left}px]` : "",
    margin.right ? `mr-[${margin.right}px]` : "",
    padding.top ? `pt-[${padding.top}px]` : "",
    padding.bottom ? `pb-[${padding.bottom}px]` : "pb-1.5",
    padding.left ? `pl-[${padding.left}px]` : "",
    padding.right ? `pr-[${padding.right}px]` : "",
    "block",
  ]
    .filter(Boolean)
    .join(" ");

  return { style, className, requiredStyle, requiredClassName };
};

export const onInputStyle = (inputField = {}) => {
  const {
    background = {},
    margin = {},
    padding = {},
    border = {},
    color = {},
    fontSize,
    fontWeight,
  } = inputField;

  // Generate CSS style
  const style = {
    backgroundColor: background.light || "transparent",
    color: color.light || "",
    fontSize: fontSize ? `${fontSize}px` : "",
    fontWeight:
      fontWeight === "bold" ? "600" : fontWeight === "medium" ? "500" : "400",
    marginTop: margin.top ? `${margin.top}px` : "auto",
    marginBottom: margin.bottom ? `${margin.bottom}px` : "auto",
    marginLeft: margin.left ? `${margin.left}px` : "auto",
    marginRight: margin.right ? `${margin.right}px` : "auto",

    padding:
      padding.vertical || padding?.horizontal
        ? `${padding.horizontal || 12}px ${padding.vertical || 8}px`
        : "10px",
    borderTop:
      border.radius !== "bottom"
        ? `${border.thickness || 1}px ${border.style || "solid"} ${
            border.color || "black"
          }`
        : "none",
    borderLeft:
      border.radius !== "bottom"
        ? `${border.thickness || 1}px ${border.style || "solid"} ${
            border.color || "black"
          }`
        : "none",
    borderRight:
      border.radius !== "bottom"
        ? `${border.thickness || 1}px ${border.style || "solid"} ${
            border.color || "black"
          }`
        : "none",
    borderBottom: `${border.thickness || 1}px ${border.style || "solid"} ${
      border.color || "black"
    }`,

    borderRadius:
      border.radius && border.radius !== "bottom" ? `${border.radius}px` : "",
  };

  // Generate Tailwind classes
  const className = [
    background.light ? `bg-[${background.light}]` : "bg-transparent",
    color.light ? `text-[${color.light}]` : "",
    fontSize ? `text-[${fontSize}px]` : "",
    fontWeight ? `font-${fontWeight}` : "",
    margin.top ? `mt-[${margin.top}px]` : "",
    margin.bottom ? `mb-[${margin.bottom}px]` : "",
    margin.left ? `ml-[${margin.left}px]` : "",
    margin.right ? `mr-[${margin.right}px]` : "",
    padding?.vertical ? `px-[${padding.vertical}px]` : "px-3",
    padding?.horizontal ? `py-[${padding.horizontal}px]` : "py-2",

    border.radius === "bottom"
      ? `border-b-[${border.thickness || 1}px]`
      : `border-[${border.thickness || 1}px]`,
    border.style ? `border-${border.style}` : "",
    border.color ? `border-[${border.color}]` : "",
    border.radius && border.radius !== "bottom"
      ? `rounded-[${border.radius}px]`
      : border.radius === "bottom"
      ? ""
      : "rounded",
    "w-full p-2 focus:outline-none focus:border-blue-400",
  ]
    .filter(Boolean)
    .join(" ");

  return { style, className };
};

export const onElementStyle = (type, settings) => {
  if (type === "checkbox" || type === "radio") {
    const numberOfColumns = settings?.numberOfColumns || 1;

    const style = {
      display: "grid",
      gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
      gap: "8px",
    };
    const className = `grid grid-cols-${numberOfColumns} gap-2`;
    return { style, className };
  }

  // Default return for unsupported types
  return { style: {}, className: "" };
};

export const onButtonStyle = (settings = {}) => {
  const {
    background,
    padding = {},
    color,
    fontSize,
    fontWeight,
    alignment,
    width,
    radius,
  } = settings;

  const alignmentStyle = alignment
    ? {
        display: "flex",
        justifyContent:
          alignment === "left"
            ? "flex-start"
            : alignment === "right"
            ? "flex-end"
            : "center",
      }
    : {};

  const alignmentClassName = alignment
    ? alignment === "left"
      ? "justify-start"
      : alignment === "right"
      ? "justify-end"
      : "justify-center"
    : "";

  // Generate CSS style
  const style = {
    width: alignment === "full" ? "100%" : width ? `${width}px` : "auto",
    background: background || "transparent",
    color: color || "inherit",
    fontSize: fontSize ? `${fontSize}px` : "16px",
    fontWeight: fontWeight || "normal",
    padding: `${padding?.vertical || 0}px ${padding?.horizontal || 0}px`,
    borderRadius: radius ? `${radius}px` : "6px",
    textAlign: "center",
  };

  // Generate Tailwind classes
  const className = [
    background ? `bg-[${background}]` : "bg-transparent",
    color ? `text-[${color}]` : "",
    fontSize ? `text-[${fontSize}px]` : "",
    fontWeight ? `font-[${fontWeight}]` : "",
    radius ? `rounded-[${radius}px]` : "rounded-[6px]",
    padding?.vertical || padding?.horizontal
      ? `px-[${padding.vertical || 0}px] py-[${padding.horizontal || 0}px]`
      : "",
    width ? `w-[${width}px]` : "",
    "text-center",
  ]
    .filter(Boolean)
    .join(" ");

  return { style, className, alignmentStyle, alignmentClassName };
};

export const onHeadlineStyle = (settings = {}) => {
  const {
    background,
    padding = {},
    color,
    fontSize,
    fontWeight,
    alignment,
    radius,
  } = settings;

  // Generate CSS style
  const style = {
    background: background || "transparent",
    color: color || "inherit",
    fontSize: fontSize ? `${fontSize}px` : "16px",
    fontWeight: fontWeight || "normal",
    padding: `${padding?.vertical || 0}px ${padding?.horizontal || 0}px`,
    borderRadius: radius ? `${radius}px` : "6px",
    textAlign: alignment || "center",
  };

  // Generate Tailwind classes
  const className = [
    background ? `bg-[${background}]` : "bg-transparent",
    color ? `text-[${color}]` : "",
    fontSize ? `text-[${fontSize}px]` : "",
    fontWeight ? `font-[${fontWeight}]` : "",
    radius ? `rounded-[${radius}px]` : "rounded-[6px]",
    alignment ? `text-[${alignment}]` : "text-center",
    padding?.vertical || padding?.horizontal
      ? `px-[${padding.vertical || 0}px] py-[${padding.horizontal || 0}px]`
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return { style, className };
};

export const onFormCodeGenerator = ({ elements = [], settings = {} } = {}) => {
  // Helper functions for generating styles and classes
  const pageStyle = onPageStyle(settings?.layout);
  const formStyle = onFormStyle(settings?.layout);
  const labelStyle = onLabelStyle(settings?.label);
  const inputStyle = onInputStyle(settings?.inputField);

  // Helper for required asterisk
  const requiredAsterisk = (required, color) =>
    required ? `<span className="text-[${color || "red"}]"> *</span>` : "";

  // Field generators
  const generateSelectField = (field) =>
    `<select
                name="${field.name}"
                className="${
                  inputStyle?.className || ""
                } rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ${field.isRequired ? "required" : ""}
                ${field.isReadOnly ? "readOnly" : ""}
              >
                ${field.options
                  ?.map(
                    (option) =>
                      `<option value="${option?.value}">${option?.label}</option>`
                  )
                  .join("")}
              </select>`;

  const generateRadioField = (field) => {
    const elementStyle = onElementStyle(field?.type, field?.settings);

    return `<div className="${elementStyle?.className || ""}">
      ${field.options
        ?.map(
          (option) => `
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="${field.name}"
                    value="${option?.value}"
                    className="focus:ring focus:ring-blue-400"
                  />
                  ${option?.label}
                </label>`
        )
        .join("")}
              </div>`;
  };

  const generateCheckboxField = (field) => {
    const elementStyle = onElementStyle(field?.type, field?.settings);

    return `<div className="${elementStyle?.className || ""}">
      ${field.options
        ?.map(
          (option) => `         
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="${field.name}"
                    value="${option?.value}"
                    className="focus:ring focus:ring-blue-400"
                  />
                  ${option?.label}
                </label>`
        )
        .join("")}
              </div>`;
  };

  const generateSingleCheckboxField = (field) => {
    return `<label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="${field.name}"
          className="focus:ring focus:ring-blue-400"
        />
        <span>
          ${field?.label}
        </span>
      </label>`;
  };

  const generateInputField = (field) =>
    `<input
                type="${field.type}"
                name="${field.name}"
                placeholder="${field.placeholder || ""}"
                className="${inputStyle?.className || ""}"
                ${field.isRequired ? "required" : ""} ${
      field.isReadOnly ? "readOnly" : ""
    }
              />`;

  const generateTextarea = (field) =>
    `<textarea
                rows={3}
                placeholder="${field.placeholder || ""}"
                ${field.isRequired ? "required" : ""}
                ${field.isReadOnly ? "readOnly" : ""}
                className="${inputStyle?.className || ""}"
              />`;

  const generateButton = (field) => {
    const buttonStyle = onButtonStyle(field?.settings);

    const { className, alignmentClassName } = buttonStyle || {};

    return `  <div className="${alignmentClassName}">
                <button
                  type="submit"
                  className="${className || ""}"
                >
                  ${field?.label}
                </button>
              </div>`;
  };

  const generateHeadline = (field) => {
    const headlineStyle = onHeadlineStyle(field?.settings);

    return `  <h2 className="${headlineStyle?.className || ""}">
                ${field?.label}
              </h2>`;
  };

  // Field mapping
  const mapFieldsToHTML = (field) => {
    const fieldHTML =
      field.type === "select"
        ? generateSelectField(field)
        : field.type === "radio"
        ? generateRadioField(field)
        : field.type === "checkbox"
        ? generateCheckboxField(field)
        : field.type === "single-check"
        ? generateSingleCheckboxField(field)
        : field.type === "textarea"
        ? generateTextarea(field)
        : field.type === "submit"
        ? generateButton(field)
        : field.type === "title"
        ? generateHeadline(field)
        : generateInputField(field);

    // Only render the label if the field type is not "submit"
    const isLabel = field.type !== "submit" && field.type !== "title";
    const labelHTML =
      isLabel &&
      `<label className="${labelStyle?.className || ""}">
                ${field.label}${requiredAsterisk(
        field.isRequired,
        settings?.label?.requiredColor?.light
      )}
              </label>`;

    return `${
      isLabel
        ? `<div>
              ${labelHTML}
              ${fieldHTML}
            </div>`
        : `<div>
            ${fieldHTML}
            </div>`
    }
            `;
  };

  // Generate React Code (only uses className)
  const reactCode = `
    import React from "react";

    const Form = () => {
      return (
        <div className="${pageStyle?.className || ""}">
          <form className="${formStyle?.className || ""}">
            ${elements.map((field) => mapFieldsToHTML(field)).join("")}
          </form>
        </div>
      );
    };

    export default Form;
  `;

  return { reactCode };
};

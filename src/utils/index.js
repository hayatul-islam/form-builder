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
    background: pageBackground?.light ?? "#F9F7F7",
    paddingTop: pagePadding?.top ? `${pagePadding.top}px` : "16px",
    paddingBottom: pagePadding?.bottom ? `${pagePadding.bottom}px` : "16px",
    paddingLeft: pagePadding?.left ? `${pagePadding.left}px` : "16px",
    paddingRight: pagePadding?.right ? `${pagePadding.right}px` : "16px",
  };

  // Generate Tailwind classes
  const className = [
    pageBackground.light ? `bg-[${pageBackground.light}]` : "bg-[#F9F7F7]",
    pageBackground.dark ? `dark:bg-[${pageBackground.light}]` : "dark:bg-black",
    pagePadding.top ? `pt-[${pagePadding.top}px]` : "pt-4",
    pagePadding.bottom ? `pb-[${pagePadding.bottom}px]` : "pb-4",
    pagePadding.left ? `pl-[${pagePadding.left}px]` : "pl-4",
    pagePadding.right ? `pr-[${pagePadding.right}px]` : "pr-4",
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
  } = layout;

  // Generate css style
  const style = {
    maxWidth: width !== "200" ? `${width}px` : "100%",
    backgroundColor: background.light || "white",
    margin: "auto",
    marginTop: margin.top ? `${margin.top}px` : "auto",
    marginBottom: margin.bottom ? `${margin.bottom}px` : "auto",
    marginLeft: margin.left ? `${margin.left}px` : "auto",
    marginRight: margin.right ? `${margin.right}px` : "auto",
    paddingTop: padding.top ? `${padding.top}px` : "",
    paddingBottom: padding.bottom ? `${padding.bottom}px` : "",
    paddingLeft: padding.left ? `${padding.left}px` : "",
    paddingRight: padding.right ? `${padding.right}px` : "",
    border: border.thickness
      ? `${border.thickness}px ${border.style || "solid"} ${
          border.color || "black"
        }`
      : "none",
    borderRadius: border.radius ? `${border.radius}px` : "8px",
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
    padding.top ? `pt-[${padding.top}px]` : "pt-4",
    padding.bottom ? `pb-[${padding.bottom}px]` : "pb-4",
    padding.left ? `pl-[${padding.left}px]` : "pl-4",
    padding.right ? `pr-[${padding.right}px]` : "pr-4",
    border.thickness ? `border-[${border.thickness}px]` : "",
    border.style ? `border-${border.style}` : "border-none",
    border.color ? `border-[${border.color}]` : "",
    border.radius ? `rounded-[${border.radius}px]` : "8px",
    "space-y-3",
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
    margin.top ? `mt-[${margin.top}px]` : "",
    margin.bottom ? `mb-[${margin.bottom}px]` : "",
    margin.left ? `ml-[${margin.left}px]` : "",
    margin.right ? `mr-[${margin.right}px]` : "",
    padding.top ? `pt-[${padding.top}px]` : "",
    padding.bottom ? `pb-[${padding.bottom}px]` : "pb-1.5",
    padding.left ? `pl-[${padding.left}px]` : "",
    padding.right ? `pr-[${padding.right}px]` : "",
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
    width: "100%",
    backgroundColor: background.light || "transparent",
    color: color.light || "",
    fontSize: fontSize ? `${fontSize}px` : "",
    fontWeight: fontWeight || "",
    marginTop: margin.top ? `${margin.top}px` : "auto",
    marginBottom: margin.bottom ? `${margin.bottom}px` : "auto",
    marginLeft: margin.left ? `${margin.left}px` : "auto",
    marginRight: margin.right ? `${margin.right}px` : "auto",
    paddingTop: padding.top ? `${padding.top}px` : "10px",
    paddingBottom: padding.bottom ? `${padding.bottom}px` : "10px",
    paddingLeft: padding.left ? `${padding.left}px` : "10px",
    paddingRight: padding.right ? `${padding.right}px` : "10px",
    border: border.thickness
      ? `${border.thickness}px ${border.style || "solid"} ${
          border.color || "black"
        }`
      : "1px solid black",
    borderRadius: border.radius ? `${border.radius}px` : "6px",
  };

  // Generate Tailwind classes
  const className = [
    background.light ? `bg-[${background.light}]` : "bg-transparent",
    color.light ? `text-[${color.light}]` : "",
    fontSize ? `text-[${fontSize}px]` : "",
    fontWeight ? `font-[${fontWeight}]` : "",
    margin.top ? `mt-[${margin.top}px]` : "",
    margin.bottom ? `mb-[${margin.bottom}px]` : "",
    margin.left ? `ml-[${margin.left}px]` : "",
    margin.right ? `mr-[${margin.right}px]` : "",
    padding.top ? `pt-[${padding.top}px]` : "",
    padding.bottom ? `pb-[${padding.bottom}px]` : "",
    padding.left ? `pl-[${padding.left}px]` : "",
    padding.right ? `pr-[${padding.right}px]` : "",
    border.thickness ? `border-[${border.thickness}px]` : "",
    border.style ? `border-${border.style}` : "",
    border.color ? `border-[${border.color}]` : "",
    border.radius ? `rounded-[${border.radius}px]` : "6px",
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

export const onFormCodeGenerator = ({ elements = [], settings = {} } = {}) => {
  // Helper functions for generating styles and classes
  const pageStyle = onPageStyle(settings?.layout);
  const formStyle = onFormStyle(settings?.layout);
  const labelStyle = onLabelStyle(settings?.label);
  const inputStyle = onInputStyle(settings?.inputField);

  // Helper for required asterisk
  const requiredAsterisk = (required, color) =>
    required
      ? `<span style={${JSON.stringify(
          labelStyle?.requiredStyle || {}
        )}} className="text-[${color || "red"}]"> *</span>`
      : "";

  // Field generators
  const generateSelectField = (field, isPreview) =>
    `<select
      name="${field.name}"
      ${field.isRequired ? "required" : ""}
      ${field.isReadOnly ? "readOnly" : ""}
      ${isPreview ? `style={${JSON.stringify(inputStyle?.style || {})}}` : ""}
      className="${
        inputStyle?.className || ""
      } rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      ${field.options
        ?.map(
          (option) =>
            `<option value="${option?.value}">${option?.label}</option>`
        )
        .join("")}
    </select>`;

  const generateRadioField = (field, isPreview) => {
    const elementStyle = onElementStyle(field?.type, field?.settings);

    return `<div ${
      isPreview ? `style={${JSON.stringify(elementStyle?.style || {})}}` : ""
    }
      className="${elementStyle?.className || ""}">
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

  const generateCheckboxField = (field, isPreview) => {
    const elementStyle = onElementStyle(field?.type, field?.settings);

    return `<div ${
      isPreview ? `style={${JSON.stringify(elementStyle?.style || {})}}` : ""
    }
      className="${elementStyle?.className || ""}">
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

  const generateInputField = (field, isPreview) =>
    `<input
      type="${field.type}"
      name="${field.name}"
      placeholder="${field.placeholder || ""}"
      ${field.isRequired ? "required" : ""}
      ${field.isReadOnly ? "readOnly" : ""}
      ${isPreview ? `style={${JSON.stringify(inputStyle?.style || {})}}` : ""}
      className="${
        inputStyle?.className || ""
      } rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />`;

  const generateTextarea = (field, isPreview) =>
    `<textarea
        rows={3}
        placeholder="${field.placeholder || ""}"
        ${field.isRequired ? "required" : ""}
        ${field.isReadOnly ? "readOnly" : ""}
        ${isPreview ? `style={${JSON.stringify(inputStyle?.style || {})}}` : ""}
        className="${
          inputStyle?.className || ""
        } rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />`;

  const generateButton = (field) =>
    `<button
      type="submit"
      className="block w-[150px] px-6 py-3 mx-auto bg-primary text-white rounded-md"
    >
      Submit
    </button>`;

  // Field mapping
  const mapFieldsToHTML = (field, isPreview) => {
    const fieldHTML =
      field.type === "select"
        ? generateSelectField(field, isPreview)
        : field.type === "radio"
        ? generateRadioField(field, isPreview)
        : field.type === "checkbox"
        ? generateCheckboxField(field, isPreview)
        : field.type === "textarea"
        ? generateTextarea(field, isPreview)
        : field.type === "submit"
        ? generateButton(field, isPreview)
        : generateInputField(field, isPreview);

    // Only render the label if the field type is not "submit"
    const labelHTML =
      field.type !== "submit"
        ? `<label ${
            isPreview
              ? `style='${JSON.stringify(labelStyle?.style || {})}'`
              : ""
          } 
          class="${labelStyle?.className || ""}">
          ${field.label}${requiredAsterisk(
            field.isRequired,
            settings?.label?.requiredColor?.light
          )}
        </label>`
        : "";

    return `
      <div>
        ${labelHTML}
        ${fieldHTML}
      </div>`;
  };

  // Generate Preview Code (uses styles)
  const previewCode = `
    <div style={${JSON.stringify(pageStyle?.style || {})}} className="${
    pageStyle?.className || ""
  }">
      <form style={${JSON.stringify(formStyle?.style || {})}} className="${
    formStyle?.className || ""
  }">
        ${elements.map((field) => mapFieldsToHTML(field, true)).join("")}
      </form>
    </div>
  `;

  // Generate React Code (only uses className)
  const reactCode = `
    import React from "react";

    const Form = () => {
      return (
        <div className="${pageStyle?.className || "p-4 bg-gray-100"}">
          <form className="${formStyle?.className || "space-y-4"}">
            ${elements.map((field) => mapFieldsToHTML(field, false)).join("")}
          </form>
        </div>
      );
    };

    export default Form;
  `;

  return { previewCode, reactCode };
};

export const onFormCodeGeneratorTest = (form = {}) => {
  const { elements, settings } = form;

  const pageStyle = onPageStyle(settings?.layout);
  const formStyle = onFormStyle(settings?.layout);
  const labelStyle = onLabelStyle(settings?.label);
  const inputStyle = onInputStyle(settings?.inputField);

  const previewCode = `
  <div style={${JSON.stringify(pageStyle?.style || {})}} className="${
    pageStyle?.className
  }">
    <form style={${JSON.stringify(formStyle?.style || {})}} className="${
    formStyle?.className
  }">
      ${elements
        .map(
          (field) => `
      <div key="${field.id}" className="flex flex-col">
        <label style={${JSON.stringify(labelStyle?.style || {})}} className="${
            labelStyle?.className
          }">
          ${field.label}${
            field.isRequired
              ? `<span style={${JSON.stringify(
                  labelStyle?.requiredStyle || {}
                )}} className="text-[${
                  settings?.label?.requiredColor?.light || "red"
                }]"> *</span>`
              : ""
          }
        </label>
        ${
          field.type === "select"
            ? `<select
                name="${field.name}"
                ${field.isRequired ? "required" : ""}
                ${field.isReadOnly ? "readOnly" : ""}
                placeholder="${field.placeholder}"
                style={${JSON.stringify(inputStyle?.style || {})}}
                className="${
                  inputStyle?.className
                } rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                ${field.options
                  .map(
                    (option) => `
                <option value="${option?.value}">${option?.label}</option>
                `
                  )
                  .join("")}
              </select>`
            : field.type === "radio"
            ? `<div className="">
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
                </label>
                `
                  )
                  .join("")}
              </div>`
            : field.type === "checkbox"
            ? `<div className="">
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
                </label>
                `
                  )
                  .join("")}
              </div>`
            : `<input
                type="${field.type}"
                name="${field.name}"
                placeholder="${field.placeholder}"
                ${field.isRequired ? "required" : ""}
                ${field.isReadOnly ? "readOnly" : ""}
                style={${JSON.stringify(inputStyle?.style || {})}}
                className="${
                  inputStyle?.className
                } rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />`
        }
      </div>
      `
        )
        .join("")}
    </form>
  </div>
`;

  const reactCode = `import React from "react";

const Form = () => {
  return (
    <div className="${pageStyle?.className || "p-4 bg-gray-100"}">
      <form className="${formStyle?.className || "space-y-4"}">
        ${elements
          .map(
            (field) => `
          <div key="${field.id}" className="flex flex-col space-y-1">
            <label className="${
              labelStyle?.className || "font-medium text-gray-700"
            }">
              ${field.label}${
              field.isRequired
                ? `<span className="text-[${
                    settings?.label?.requiredColor?.light || "red"
                  }]"> *</span>`
                : ""
            }
            </label>
            ${
              field.type === "select"
                ? `<select
                    name="${field.name}"
                    className="${
                      inputStyle?.className ||
                      "border rounded p-2 focus:ring focus:ring-blue-400"
                    }"
                    ${field.isRequired ? "required" : ""}
                  >
                    ${field.options
                      ?.map(
                        (option) => `
                    <option value="${option?.value}">${option?.label}</option>
                    `
                      )
                      .join("")}
                  </select>`
                : field.type === "radio"
                ? `<div className="flex flex-wrap gap-4">
                    ${field.options
                      ?.map(
                        (option) => `
                    <label className="grid items-center gap-2">
                      <input
                        type="radio"
                        name="${field.name}"
                        value="${option?.value}"
                        className="focus:ring focus:ring-blue-400"
                      />
                      ${option?.label}
                    </label>
                    `
                      )
                      .join("")}
                  </div>`
                : field.type === "checkbox"
                ? `<div className="flex flex-wrap gap-4">
                    ${field.options
                      ?.map(
                        (option) => `
                    <label className="grid items-center gap-2">
                      <input
                        type="checkbox"
                        name="${field.name}"
                        value="${option?.value}"
                        className="focus:ring focus:ring-blue-400"
                      />
                      ${option?.label}
                    </label>
                    `
                      )
                      .join("")}
                  </div>`
                : `<input
                    type="${field.type}"
                    name="${field.name}"
                    placeholder="${field.placeholder}"
                    className="${
                      inputStyle?.className ||
                      "border rounded p-2 focus:ring focus:ring-blue-400"
                    }"
                    ${field.isRequired ? "required" : ""}
                    ${field.isReadOnly ? "readOnly" : ""}
                  />`
            }
          </div>
          `
          )
          .join("")}
      </form>
    </div>
  );
};

export default Form;
`;

  return { previewCode, reactCode };
};

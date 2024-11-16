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
    backgroundColor: pageBackground?.light || "white",
    paddingTop: pagePadding?.top ? `${pagePadding.top}px` : "16px",
    paddingBottom: pagePadding?.bottom ? `${pagePadding.bottom}px` : "16px",
    paddingLeft: pagePadding?.left ? `${pagePadding.left}px` : "16px",
    paddingRight: pagePadding?.right ? `${pagePadding.right}px` : "16px",
  };

  // Generate Tailwind classes
  const className = [
    pageBackground.light ? `bg-[${pageBackground.light}]` : "bg-white",
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
    backgroundColor: background.light || "#F9F7F7",
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
    padding.top ? `pt-[${padding.top}px]` : "pt-4",
    padding.bottom ? `pb-[${padding.bottom}px]` : "pb-4",
    padding.left ? `pl-[${padding.left}px]` : "pl-4",
    padding.right ? `pr-[${padding.right}px]` : "pr-4",
    border.thickness ? `border-[${border.thickness}px]` : "",
    border.style ? `border-${border.style}` : "border-none",
    border.color ? `border-[${border.color}]` : "",
    border.radius ? `rounded-[${border.radius}px]` : "",
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
    fontWeight: fontWeight || "",
    marginTop: margin.top ? `${margin.top}px` : "",
    marginBottom: margin.bottom ? `${margin.bottom}px` : "",
    marginLeft: margin.left ? `${margin.left}px` : "",
    marginRight: margin.right ? `${margin.right}px` : "",
    paddingTop: padding.top ? `${padding.top}px` : "",
    paddingBottom: padding.bottom ? `${padding.bottom}px` : "",
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
    fontWeight ? `font-[${fontWeight}]` : "",
    margin.top ? `mt-[${margin.top}px]` : "",
    margin.bottom ? `mb-[${margin.bottom}px]` : "",
    margin.left ? `ml-[${margin.left}px]` : "",
    margin.right ? `mr-[${margin.right}px]` : "",
    padding.top ? `pt-[${padding.top}px]` : "",
    padding.bottom ? `pb-[${padding.bottom}px]` : "",
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
    backgroundColor: background.light || "#F9F7F7",
    color: color.light || "",
    fontSize: fontSize ? `${fontSize}px` : "",
    fontWeight: fontWeight || "",
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
    borderRadius: border.radius ? `${border.radius}px` : "",
  };

  // Generate Tailwind classes
  const className = [
    background.light ? `bg-[${background.light}]` : "bg-[#F9F7F7]",
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
    border.radius ? `rounded-[${border.radius}px]` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return { style, className };
};

export const onFormCodeGenerator = (form = {}) => {
  const { elements, settings } = form;

  const pageStyle = onPageStyle(settings?.layout);
  const formStyle = onFormStyle(settings?.layout);
  const labelStyle = onLabelStyle(settings?.label);
  const inputStyle = onInputStyle(settings?.inputField);

  const formCode = `
    <div className="${pageStyle?.className}">
      <form className="${formStyle?.className}">
        ${elements
          .map(
            (field) => `
        <div key="${field.id}" className="flex flex-col">
          <label className="${labelStyle?.className}">
            ${field.label}${
              field.isRequired
                ? `<span className="text-[${
                    settings?.label?.requiredColor?.light || "red"
                  }]"> *</span>`
                : ""
            }
          </label>
          <input
            type="${field.type}"
            name="${field.name}"
            placeholder="${field.placeholder}"
            ${field.isRequired ? "required" : ""}
            ${field.isReadOnly ? "readOnly" : ""}
            className="${
              inputStyle?.className
            } rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        `
          )
          .join("")}
      </form>
    </div>
`;

  return formCode;

  //   return `import React from "react";

  // const FormComponent = () => {
  //   return (
  //     <div className="${pageStyle?.className}">
  //       <form className="${formStyle?.className}">
  //         ${elements
  //           .map(
  //             (field) => `
  //         <div key="${field.id}" className="flex flex-col">
  //           <label className="${labelStyle?.className}">
  //             ${field.label}${
  //               field.isRequired
  //                 ? `<span className="text-[${
  //                     settings?.label?.requiredColor?.light || "red"
  //                   }]"> *</span>`
  //                 : ""
  //             }
  //           </label>
  //           <input
  //             type="${field.type}"
  //             name="${field.name}"
  //             placeholder="${field.placeholder}"
  //             ${field.isRequired ? "required" : ""}
  //             ${field.isReadOnly ? "readOnly" : ""}
  //             className="${
  //               inputStyle?.className
  //             } rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
  //           />
  //         </div>
  //         `
  //           )
  //           .join("")}
  //       </form>
  //     </div>
  //   );
  // };

  // export default FormComponent;`;
};

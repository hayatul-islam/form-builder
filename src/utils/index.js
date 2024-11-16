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
    maxWidth: width ? `${width}px` : "auto",
    background: background.light || "white",
    margin: "auto",
    marginTop: margin.top ? `${margin.top}px` : "auto",
    marginBottom: margin.bottom ? `${margin.bottom}px` : "auto",
    marginLeft: margin.left ? `${margin.left}px` : "auto",
    marginRight: margin.right ? `${margin.right}px` : "auto",
    paddingTop: padding.top ? `${padding.top}px` : "",
    paddingBottom: padding.bottom ? `${padding.bottom}px` : "",
    paddingLeft: padding.left ? `${padding.left}px` : "",
    paddingRight: padding.right ? `${padding.right}px` : "",
    border: border.thickness ? `${border.thickness}px` : "",
    borderStyle: border.style || "none",
    borderColor: border.color || "",
    borderRadius: border.radius ? `${border.radius}px` : "",
  };

  // Generate Tailwind classes
  const className = [
    width ? `max-w-[${width}px]` : "", // Custom max width
    background.light ? `bg-[${background.light}]` : "bg-white", // Background color
    margin.top ? `mt-[${margin.top}px]` : "",
    margin.bottom ? `mb-[${margin.bottom}px]` : "",
    margin.left ? `ml-[${margin.left}px]` : "",
    margin.right ? `mr-[${margin.right}px]` : "",
    padding.top ? `pt-[${padding.top}px]` : "",
    padding.bottom ? `pb-[${padding.bottom}px]` : "",
    padding.left ? `pl-[${padding.left}px]` : "",
    padding.right ? `pr-[${padding.right}px]` : "",
    border.thickness ? `border-[${border.thickness}px]` : "",
    border.style ? `border-${border.style}` : "border-none",
    border.color ? `border-[${border.color}]` : "",
    border.radius ? `rounded-[${border.radius}px]` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return { style, className };
};

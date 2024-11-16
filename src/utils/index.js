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
    paddingTop: pagePadding?.top ? `${pagePadding.top}px` : "",
    paddingBottom: pagePadding?.bottom ? `${pagePadding.bottom}px` : "",
    paddingLeft: pagePadding?.left ? `${pagePadding.left}px` : "",
    paddingRight: pagePadding?.right ? `${pagePadding.right}px` : "",
  };

  // Generate Tailwind classes
  const className = [
    pageBackground.light ? `bg-[${pageBackground.light}]` : "bg-white",
    pagePadding.top ? `pt-[${pagePadding.top}px]` : "",
    pagePadding.bottom ? `pb-[${pagePadding.bottom}px]` : "",
    pagePadding.left ? `pl-[${pagePadding.left}px]` : "",
    pagePadding.right ? `pr-[${pagePadding.right}px]` : "",
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
    maxWidth: width ? `${width}px` : "auto",
    background: background.light || "#F9F7F7",
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

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

// export const onInputValueChange = (values, key, value) => {
//   const newValues = {
//     ...values,
//     [key]: value,
//   };

//   return newValues;
// };

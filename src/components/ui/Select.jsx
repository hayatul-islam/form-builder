const Select = ({
  name,
  subKey,
  label,
  options,
  value,
  onChange,
  className,
}) => {
  const selectOption = options?.find((option) => option?.value === value);

  return (
    <div className="space-y-1">
      <label className="font-normal block">{label}</label>
      <select
        name={name}
        id={name}
        value={value || ""} // Fallback to empty string if value is undefined
        onChange={(e) => onChange(name, e.target.value, subKey)}
        className={`${className} w-full border border-black/20 bg-white py-1.5 px-2 rounded focus:border-black/50 focus:outline-none`}
      >
        {options?.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

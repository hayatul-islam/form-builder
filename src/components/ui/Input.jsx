const Input = ({
  name,
  subKey,
  label,
  value,
  type,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <div>
      <label className="font-medium pb-1 dark:text-gray-100">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value, subKey)}
        placeholder={placeholder}
        className={`${className} w-full border border-black/20 bg-white dark:bg-gray-950 dark:text-gray-300 dark:border-gray-600 py-1.5 px-2 rounded focus:border-black/50 focus:outline-none`}
      />
    </div>
  );
};

export default Input;

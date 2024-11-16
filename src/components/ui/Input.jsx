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
    <div className="space-y-1">
      <label className="font-normal">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value, subKey)}
        placeholder={placeholder}
        className={`${className} w-full border border-black/20 bg-white py-1.5 px-2 rounded focus:border-black/50 focus:outline-none`}
      />
    </div>
  );
};

export default Input;

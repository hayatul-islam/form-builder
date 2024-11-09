const InputFile = ({ name, label, className, isRequired }) => {
  return (
    <div className="space-y-1">
      <label>
        {label}
        {isRequired && <span className="text-red-500"> *</span>}
      </label>
      <div
        className={`${className} flex h-[40px] items-center rounded border `}
      >
        <input name={name} type="file" className="p-1 text-[14px] " />
      </div>
    </div>
  );
};

export default InputFile;

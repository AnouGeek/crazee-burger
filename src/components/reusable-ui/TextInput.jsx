export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  ...extraProps
}) {
  return (
    <div className={`flex items-center ${className}`}>
      {Icon && Icon}
      <input
        className="w-full outline-none"
        value={value}
        onChange={onChange}
        type="text"
        {...extraProps}
      />
    </div>
  );
}

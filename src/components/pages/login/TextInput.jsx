export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  ...extraProps
}) {
  return (
    <div>
      {Icon && Icon}
      <input
        className={className}
        value={value}
        onChange={onChange}
        type="text"
        {...extraProps}
      />
    </div>
  );
}

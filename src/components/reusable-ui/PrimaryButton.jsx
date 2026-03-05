export default function PrimaryButton({ className, label, Icon }) {
  return (
    <button className={className}>
      <span>{label}</span>
      {Icon && Icon}
    </button>
  );
}

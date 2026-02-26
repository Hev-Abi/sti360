export default function ActionButton({
  label,
  onClick,
  color = "#6B5B8B",
  outline = false
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 14px",
        borderRadius: 6,
        border: outline ? `1px solid ${color}` : "none",
        background: outline ? "white" : color,
        color: outline ? color : "white",
        fontWeight: 600,
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
}
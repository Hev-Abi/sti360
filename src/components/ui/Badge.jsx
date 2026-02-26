export default function Badge({ text, color = "#999" }) {
  return (
    <span style={{
      background: color,
      color: "#fff",
      padding: "4px 8px",
      borderRadius: 12,
      fontSize: 12
    }}>
      {text}
    </span>
  );
}
export default function Card({ title, children, accent }) {
  return (
    <div style={{
      background: "#fff",
      padding: 16,
      borderRadius: 8,
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      borderTop: `4px solid ${accent || "#ccc"}`
    }}>
      {title && <h3 style={{ marginBottom: 12 }}>{title}</h3>}
      {children}
    </div>
  );
}
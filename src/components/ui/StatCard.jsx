export default function StatCard({ label, value, color }) {
  return (
    <div style={{
      background: "#fff",
      padding: 16,
      borderRadius: 8,
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
    }}>
      <div style={{ fontSize: 14, color: "#666" }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: "bold", color }}>{value}</div>
    </div>
  );
}
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Marketing", value: 120 },
  { name: "Enrollment", value: 300 },
  { name: "Lifecycle", value: 200 },
  { name: "Employment", value: 150 },
];

export default function AdminReports() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Reports Overview</h2>

      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Marketing", value: 120 },
  { name: "Enrollment", value: 300 },
  { name: "Lifecycle", value: 200 },
  { name: "Employment", value: 150 },
];

export default function AdminReports() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Reports Overview
      </h2>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            {/* Light grid */}
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            {/* Axis styling */}
            <XAxis
              dataKey="name"
              tick={{ fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            {/* Modern tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />

            {/* ⭐ THIS fixes the black bars */}
            <Bar
              dataKey="value"
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
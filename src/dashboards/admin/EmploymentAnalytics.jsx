import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Employed", value: 70 },
  { name: "Unemployed", value: 30 },
];

export default function EmploymentAnalytics() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Employment Status</h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
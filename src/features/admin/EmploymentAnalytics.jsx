import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import useEmploymentStats from "../analytics/hooks/useEmploymentStats";

const COLORS = ["#4F46E5", "#F43F5E"];

export default function EmploymentAnalytics() {
  const { stats, loading } = useEmploymentStats();

  if (loading) return <p>Loading...</p>;

  const data = [
    { name: "Employed", value: stats.employed },
    { name: "Unemployed", value: stats.unemployed },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Employment Status</h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={60}
            paddingAngle={5}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
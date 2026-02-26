import { useEffect, useState } from "react";
import { getAllAnalysis } from "../services/curriculumService";
import { generateInsights } from "../utils/curriculumInsights";

export default function CurriculumInsightsPage() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInsights();
  }, []);

  const loadInsights = async () => {
    try {
      const data = await getAllAnalysis();
      const result = generateInsights(data);
      setInsights(result || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load insights");
    }
    setLoading(false);
  };

  if (loading) return <p>Loading insights...</p>;

  return (
    <div>
      <h2>Curriculum Intelligence Dashboard</h2>

      {insights.length === 0 && <p>No analysis data yet.</p>}

      {insights.length > 0 && (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Number of Weak Students</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {insights.map((item, i) => (
              <tr key={i}>
                <td>{item.subject}</td>
                <td>{item.count}</td>
                <td>
                  {item.count > 5
                    ? "Improve curriculum / add remedial programs"
                    : "Monitor performance"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import {
  getStudentGrades,
  saveAnalysis,
  getAnalysis,
} from "../services/analysisService";
import { analyzePerformance } from "../utils/analyzePerformance";

export default function AnalysisPage() {
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  /* LOAD STUDENTS */
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  /* RUN ANALYSIS */
  const runAnalysis = async () => {
    if (!selectedId) return alert("Select student first");

    setLoading(true);

    try {
      // Check if already analyzed
      const existing = await getAnalysis(selectedId);
      if (existing) {
        setResult(existing);
        setLoading(false);
        return;
      }

      // Get grades
      const grades = await getStudentGrades(selectedId);

      // Run AI logic
      const analysis = analyzePerformance(grades);

      if (!analysis) {
        alert("No grades found");
        setLoading(false);
        return;
      }

      // Save result
      const record = {
        student_id: selectedId,
        strengths: analysis.strengths,
        weaknesses: analysis.weaknesses,
      };

      await saveAnalysis(record);
      setResult(record);
    } catch (err) {
      console.error(err);
      alert("Error analyzing student");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Student Performance Analysis</h2>

      {/* SELECT STUDENT */}
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        <option value="">Select Student</option>
        {students.map((s) => (
          <option key={s.id} value={s.id}>
            {s.full_name}
          </option>
        ))}
      </select>

      <button onClick={runAnalysis} disabled={loading}>
        {loading ? "Analyzing..." : "Run Analysis"}
      </button>

      {/* RESULTS */}
      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Strengths</h3>
          <p>{result.strengths || "None identified"}</p>

          <h3>Weaknesses</h3>
          <p>{result.weaknesses || "None identified"}</p>
        </div>
      )}
    </div>
  );
}
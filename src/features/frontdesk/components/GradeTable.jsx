import { useState } from "react";

export default function GradeTable({ grades, onAddGrade }) {
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = () => {
    if (!subject || !grade) return;

    onAddGrade({
      subject,
      grade: Number(grade)
    });

    setSubject("");
    setGrade("");
  };

  return (
    <div>
      <h3>Add Grade</h3>

      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />

      <button onClick={handleSubmit}>Save</button>

      <h3>Student Grades</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g) => (
            <tr key={g.id}>
              <td>{g.subject}</td>
              <td>{g.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
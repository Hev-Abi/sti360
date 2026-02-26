import { useEffect, useState } from "react";
import GradeTable from "../components/GradeTable";
import {
  getStudents,
  getGrades,
  addGrade
} from "../services/gradeService";

export default function GradesPage() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleSelectStudent = async (id) => {
    setSelectedStudent(id);
    const data = await getGrades(id);
    setGrades(data);
  };

  const handleAddGrade = async (gradeData) => {
    await addGrade({
      ...gradeData,
      student_id: selectedStudent
    });

    const updated = await getGrades(selectedStudent);
    setGrades(updated);
  };

  return (
    <div>
      <h2>Grade Encoding</h2>

      <select onChange={(e) => handleSelectStudent(e.target.value)}>
        <option>Select Student</option>
        {students.map((s) => (
          <option key={s.id} value={s.id}>
            {s.full_name}
          </option>
        ))}
      </select>

      {selectedStudent && (
        <GradeTable grades={grades} onAddGrade={handleAddGrade} />
      )}
    </div>
  );
}
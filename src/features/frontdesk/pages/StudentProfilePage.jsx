import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function StudentProfilePage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setStudents(data);
    else console.error(error);

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Profiles</h2>

      {loading && <p>Loading students...</p>}

      {!loading &&
        students.map((student) => (
          <div
            key={student.id}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "6px",
            }}
          >
            <strong>{student.full_name}</strong>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
          </div>
        ))}
    </div>
  );
}
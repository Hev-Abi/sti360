import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function DocumentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students
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
      <h2>Student Documents</h2>

      {loading && <p>Loading students...</p>}

      {!loading && students.length === 0 && (
        <p>No students found.</p>
      )}

      {!loading &&
        students.map((student) => (
          <div
            key={student.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
            }}
          >
            <strong>{student.full_name}</strong>
            <p>{student.email}</p>

            <button>Upload Document</button>
          </div>
        ))}
    </div>
  );
}
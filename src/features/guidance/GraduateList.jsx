import { useEffect, useState, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import EmploymentForm from "./EmploymentForm";
import GraduateUpload from "./GraduateUpload";

export default function GraduateList() {
  const [graduates, setGraduates] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGraduates = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("graduates")
        .select("*")
        .order("graduation_year", { ascending: false });

      if (error) throw error;

      setGraduates(data || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load graduates.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGraduates();
  }, [fetchGraduates]);

  return (
    <div>
      <h2>Graduate List</h2>

      <GraduateUpload onUploadComplete={fetchGraduates} />

      {loading && <p>Loading graduates...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && graduates.length > 0 && (
        <table border="1" cellPadding="8" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {graduates.map((g) => (
              <tr key={g.id}>
                <td>{g.full_name}</td>
                <td>{g.course}</td>
                <td>{g.graduation_year}</td>
                <td>
                  <button onClick={() => setSelected(g)}>
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && graduates.length === 0 && (
        <p>No graduates found.</p>
      )}

      {/* Employment Modal */}
      {selected && (
        <EmploymentForm
          graduate={selected}
          onClose={() => {
            setSelected(null);
            fetchGraduates(); // refresh after update
          }}
        />
      )}
    </div>
  );
}
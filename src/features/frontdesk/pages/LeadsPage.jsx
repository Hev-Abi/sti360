import { useEffect, useState } from "react";
import {
  getLeads,
  createLead,
  convertLeadToStudent
} from "../services/leadService";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadLeads = async () => {
    const data = await getLeads();
    setLeads(data);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const handleAdd = async () => {
    if (!name) return alert("Name required");

    await createLead({
      student_name: name,
      email: email
    });

    setName("");
    setEmail("");
    loadLeads();
  };

  const handleConvert = async (lead) => {
    if (!window.confirm("Convert this lead to student?")) return;
    await convertLeadToStudent(lead);
    loadLeads();
  };

  return (
    <div>
      <h2>Student Leads</h2>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleAdd}>Add Lead</button>
      </div>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.student_name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
              <td>
                {lead.status === "lead" ? (
                  <button onClick={() => handleConvert(lead)}>
                    Convert
                  </button>
                ) : (
                  "Converted"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
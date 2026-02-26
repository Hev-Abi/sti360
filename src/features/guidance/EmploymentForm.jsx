import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function EmploymentForm({ graduate, onClose }) {
  const [status, setStatus] = useState("employed");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [reason, setReason] = useState("");

  const saveStatus = async () => {
    await supabase.from("employment_status").insert({
      graduate_id: graduate.id,
      status,
      company,
      position,
      reason_unemployed: reason,
    });

    alert("Saved successfully!");
    onClose();
  };

  return (
    <div style={{ border: "1px solid gray", padding: 20 }}>
      <h3>Update Employment — {graduate.full_name}</h3>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="employed">Employed</option>
        <option value="unemployed">Unemployed</option>
      </select>

      {status === "employed" && (
        <>
          <input
            placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            placeholder="Position"
            onChange={(e) => setPosition(e.target.value)}
          />
        </>
      )}

      {status === "unemployed" && (
        <textarea
          placeholder="Reason"
          onChange={(e) => setReason(e.target.value)}
        />
      )}

      <br />
      <button onClick={saveStatus}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
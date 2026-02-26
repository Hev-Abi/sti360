import { useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { supabase } from "../../lib/supabase";

export default function GraduateUpload({ onUploadComplete }) {
  const [loading, setLoading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      let data = [];

      if (file.name.endsWith(".csv")) {
        const text = await file.text();
        const parsed = Papa.parse(text, { header: true });
        data = parsed.data;
      }

      else if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
        const buffer = await file.arrayBuffer();
        const workbook = XLSX.read(buffer);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        data = XLSX.utils.sheet_to_json(sheet);
      }

      if (!data.length) {
        alert("No valid data found.");
        return;
      }

      const { error } = await supabase.from("graduates").insert(data);

      if (error) throw error;

      alert("Upload successful!");
      onUploadComplete?.();

    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        <b>Upload Graduate List (CSV/Excel)</b>
      </label>
      <br />
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFile}
      />

      {loading && <p>Uploading...</p>}
    </div>
  );
}
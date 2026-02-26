import { supabase } from "../../lib/supabase";

export default function ReportGenerator() {
  const generateReport = async () => {
    const { data } = await supabase
      .from("employment_status")
      .select("status");

    const employed = data.filter((d) => d.status === "employed").length;
    const unemployed = data.filter((d) => d.status === "unemployed").length;

    await supabase.from("reports").insert({
      report_type: "employment_summary",
      data: { employed, unemployed },
    });

    alert("Report Generated!");
  };

  return (
    <div>
      <h2>Generate Reports</h2>
      <button onClick={generateReport}>Generate Employment Report</button>
    </div>
  );
}
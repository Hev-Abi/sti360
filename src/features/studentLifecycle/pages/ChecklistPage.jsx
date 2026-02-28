import Card from "@/components/ui/Card";

export default function ChecklistPage() {
  const records = [
    {
      term: "1st 2024-2025",
      subjects: [
        { code: "Theo 1000", title: "Theology", grade: "1.25", credits: 3 },
        { code: "ASF 1102", title: "NSTP - Civic Welfare", grade: "2.00", credits: 3 },
        { code: "GE 1210", title: "Readings in Philippine History", grade: "1.75", credits: 3 },
      ],
    },
    {
      term: "2nd 2025-2026",
      subjects: [
        { code: "GE 1105", title: "Understanding the Self", grade: "1.75", credits: 3 },
        { code: "GE 1106", title: "Purposive Communication", grade: "3.00", credits: 3 },
        { code: "GE 1107", title: "Art Appreciation", grade: "1.50", credits: 3 },
      ],
    },
  ];

  return (
    <Card title="Virtual Academic Checklist">

          <div className="flex justify-end mb-4">
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Edit Grades
        </button>
      </div>


      <div className="overflow-x-auto">

        <table className="w-full border text-sm">

          {/* HEADER */}
          <thead className="bg-gray-100">
            <tr className="text-gray-700">
              <th className="border px-3 py-2 text-left">Term & School Year</th>
              <th className="border px-3 py-2 text-left">Subject Code</th>
              <th className="border px-3 py-2 text-left">Descriptive Title</th>
              <th className="border px-3 py-2 text-center">Final Grade</th>
              <th className="border px-3 py-2 text-center">Credits</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {records.map((term, i) =>
              term.subjects.map((subj, j) => (
                <tr key={`${i}-${j}`} className="hover:bg-gray-50">

                  {j === 0 && (
                    <td
                      rowSpan={term.subjects.length}
                      className="border px-3 py-2 align-top font-medium bg-gray-50"
                    >
                      {term.term}
                    </td>
                  )}

                  <td className="border px-3 py-2">{subj.code}</td>
                  <td className="border px-3 py-2">{subj.title}</td>
                  <td className="border px-3 py-2 text-center">{subj.grade}</td>
                  <td className="border px-3 py-2 text-center">{subj.credits}</td>

                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>

    </Card>
  );
}
import Card from "@/components/ui/Card";

export default function GradesPage() {
  return (
    <Card title="Upload Grades">
      <div className="space-y-6">

        {/* Upload Section */}
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-sm font-semibold text-gray-600 mb-2">
            Upload Grade Sheet
          </p>

          <div className="flex items-center gap-4">
            <input
              type="file"
              className="border rounded-md p-2 text-sm"
            />

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              Upload File
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Upload a scanned copy of your official grade report.
          </p>
        </div>

        {/* Manual Entry Table */}
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-3">
            Manual Grade Entry
          </p>

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="p-3 text-left">Subject</th>
                  <th className="p-3 text-left">Units</th>
                  <th className="p-3 text-left">Grade</th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3">
                      <input
                        className="input"
                        placeholder="Subject name"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        className="input"
                        placeholder="Units"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        className="input"
                        placeholder="Grade"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm">
            Save Grades
          </button>

          <button className="border px-6 py-2 rounded-md text-sm">
            Clear Form
          </button>
        </div>

      </div>
    </Card>
  );
}
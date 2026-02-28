import Card from "@/components/ui/Card";

export default function ScholarshipPage() {
  return (
    <Card title="Scholarship Eligibility">
      <div className="space-y-6">

        {/* Status */}
        <div className="bg-green-50 border border-green-200 p-4 rounded">
          <h3 className="font-semibold text-green-700">
            🎉 You are Eligible for Academic Scholarship
          </h3>
          <p className="text-sm text-gray-600">
            Maintain a GPA of 1.75 or higher to continue eligibility.
          </p>
        </div>

        {/* Requirements */}
        <div>
          <h3 className="font-semibold mb-3 text-blue-700">
            Eligibility Requirements
          </h3>

          <ul className="space-y-2">
            <li className="bg-gray-100 p-2 rounded">✔ No failing grades</li>
            <li className="bg-gray-100 p-2 rounded">✔ At least 15 units enrolled</li>
            <li className="bg-gray-100 p-2 rounded">✔ GPA above 1.75</li>
          </ul>
        </div>

        {/* Scholarship Types */}
        <div>
          <h3 className="font-semibold mb-3 text-blue-700">
            Available Scholarships
          </h3>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-100 p-3 rounded text-center">
              Academic Scholarship
            </div>
            <div className="bg-gray-100 p-3 rounded text-center">
              Athletic Scholarship
            </div>
            <div className="bg-gray-100 p-3 rounded text-center">
              Financial Assistance
            </div>
          </div>
        </div>

      </div>
    </Card>
  );
}
import Card from "@/components/ui/Card";

export default function EstimatedGradePage() {
  return (
    <Card title="Estimated Grade">
      <div className="space-y-6">

        {/* Title */}
        <h2 className="font-semibold text-blue-700 tracking-wide">
          ESTIMATED GRADE CALCULATOR
        </h2>

        <div className="grid grid-cols-3 gap-6">

          {/* LEFT SIDE — TABLE */}
          <div className="col-span-2">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-blue-700 border-b">
                  <th className="text-left py-2">COMPONENT</th>
                  <th className="text-left py-2">WEIGHT</th>
                  <th className="text-left py-2">SCORE</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-2">Quizzes</td>
                  <td>20%</td>
                  <td>85</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2">Midterm</td>
                  <td>30%</td>
                  <td>88</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2">Final Exam</td>
                  <td>30%</td>
                  <td>—</td>
                </tr>

                <tr>
                  <td className="py-2">Activities</td>
                  <td>20%</td>
                  <td>90</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* RIGHT SIDE — ESTIMATE */}
          <div className="space-y-4">

            {/* Current Grade */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <p className="text-xs text-gray-600 tracking-wide">
                CURRENT ESTIMATE
              </p>

              <h1 className="text-5xl font-bold text-blue-700 mt-2">
                1.75
              </h1>

              <p className="text-xs text-gray-500 mt-2">
                Based on completed assessments
              </p>
            </div>

            {/* Warning */}
            <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg p-4 text-sm">
              ⚠️ Need <strong>88+</strong> on Final to maintain <strong>1.75</strong>
            </div>

          </div>
        </div>
      </div>
    </Card>
  );
}
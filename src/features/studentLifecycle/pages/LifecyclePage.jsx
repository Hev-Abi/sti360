import Card from "@/components/ui/Card";
import StatCard from "@/components/ui/StatCard";

export default function LifecyclePage() {
  const timeline = [
    "1st Year — Foundation Courses",
    "2nd Year — Core Subjects",
    "3rd Year (Current) — Major Courses",
    "4th Year — Specialization + Thesis",
  ];

  return (
    <div className="space-y-6">

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Units Earned" value="78" />
        <StatCard label="GPA" value="1.75" />
        <StatCard label="Subjects This Sem" value="6" />
        <StatCard label="Year Level" value="3rd" />
      </div>

      {/* TIMELINE */}
      <Card title="Academic Timeline">
        <div className="divide-y">

          {timeline.map((step, index) => (
            <div key={index} className="flex items-center gap-4 py-4">

              {/* Timeline Dot */}
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>

              {/* Text */}
              <p className="text-gray-700">{step}</p>

            </div>
          ))}

        </div>
      </Card>

    </div>
  );
}
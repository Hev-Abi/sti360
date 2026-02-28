import Card from "@/components/ui/Card";

export default function CurriculumPage() {
  return (
    <Card title="View Curriculum">
      <div className="space-y-6">

        {/* 1st Year */}
        <div>
          <h3 className="font-semibold text-blue-700 mb-2">1ST YEAR</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-100 p-2 rounded">Intro to Computing</div>
            <div className="bg-gray-100 p-2 rounded">Programming 1</div>
            <div className="bg-gray-100 p-2 rounded">Math for IT</div>
          </div>
        </div>

        {/* 2nd Year */}
        <div>
          <h3 className="font-semibold text-blue-700 mb-2">2ND YEAR</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-100 p-2 rounded">Intro to Computing</div>
            <div className="bg-gray-100 p-2 rounded">Programming 1</div>
            <div className="bg-gray-100 p-2 rounded">Math for IT</div>
          </div>
        </div>

        {/* 3rd Year */}
        <div>
          <h3 className="font-semibold text-blue-700 mb-2">
            3RD YEAR (CURRENT)
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-100 p-2 rounded">Intro to Computing</div>
            <div className="bg-gray-100 p-2 rounded">Programming 1</div>
            <div className="bg-gray-100 p-2 rounded">Math for IT</div>
            <div className="bg-gray-100 p-2 rounded">Data Structures</div>
            <div className="bg-gray-100 p-2 rounded">OOP</div>
            <div className="bg-gray-100 p-2 rounded">Web Dev</div>
          </div>
        </div>

        {/* 4th Year */}
        <div>
          <h3 className="font-semibold text-blue-700 mb-2">4TH YEAR</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-100 p-2 rounded">Intro to Computing</div>
            <div className="bg-gray-100 p-2 rounded">Programming 1</div>
            <div className="bg-gray-100 p-2 rounded">Math for IT</div>
          </div>
        </div>

      </div>
    </Card>
  );
}
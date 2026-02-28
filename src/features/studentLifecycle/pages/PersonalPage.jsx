import Card from "@/components/ui/Card";

export default function PersonalPage() {
  return (
    <Card title="Personal Data">
      <div className="space-y-6">

        {/* Upload Section */}
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-sm font-semibold text-gray-600 mb-2">
            Upload Registration Form
          </p>

          <div className="flex items-center gap-4">
            <input
              type="file"
              className="border rounded-md p-2 text-sm"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              Scan & Autofill
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Upload an image of your registration form to automatically fill the details.
          </p>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-6">

          {/* Student ID */}
          <div>
            <label className="text-xs font-semibold text-gray-500">
              STUDENT ID
            </label>
            <input className="input mt-1" placeholder="Enter student ID" />
          </div>

          {/* Full Name */}
          <div>
            <label className="text-xs font-semibold text-gray-500">
              FULL NAME
            </label>
            <input className="input mt-1" placeholder="Enter full name" />
          </div>

          {/* Program */}
          <div>
            <label className="text-xs font-semibold text-gray-500">
              PROGRAM
            </label>
            <input className="input mt-1" placeholder="Enter program" />
          </div>

          {/* Year Level */}
          <div>
            <label className="text-xs font-semibold text-gray-500">
              YEAR LEVEL
            </label>
            <input className="input mt-1" placeholder="Enter year level" />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-500">
              EMAIL
            </label>
            <input className="input mt-1" placeholder="Enter email" />
          </div>

          {/* Contact */}
          <div>
            <label className="text-xs font-semibold text-gray-500">
              CONTACT
            </label>
            <input className="input mt-1" placeholder="Enter contact number" />
          </div>

          {/* Address */}
          <div className="col-span-2">
            <label className="text-xs font-semibold text-gray-500">
              ADDRESS
            </label>
            <input className="input mt-1" placeholder="Enter address" />
          </div>

          {/* Status */}
          <div>
            <label className="text-xs font-semibold text-gray-500">
              STATUS
            </label>
            <select className="input mt-1">
              <option>Enrolled</option>
              <option>Pending</option>
              <option>Graduated</option>
            </select>
          </div>

        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm">
            Save Changes
          </button>
        </div>

      </div>
    </Card>
  );
}
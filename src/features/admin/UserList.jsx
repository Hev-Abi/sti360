import { updateUserRole } from "../../lib/adminService";

export default function UserList({ users, refresh }) {
  const changeRole = async (id, role) => {
    await updateUserRole(id, role);
    refresh();
  };

return (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <h2 className="text-xl font-semibold mb-6 text-gray-800">
      User Management
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="text-left py-3 px-4 font-medium">Name</th>
            <th className="text-left py-3 px-4 font-medium">Email</th>
            <th className="text-left py-3 px-4 font-medium">Role</th>
            <th className="text-left py-3 px-4 font-medium">Change Role</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {users.map((u) => (
            <tr
              key={u.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="py-4 px-4 font-medium">{u.full_name}</td>
              <td className="py-4 px-4 text-gray-500">{u.email}</td>
              <td className="py-4 px-4">{u.role}</td>

              <td className="py-4 px-4">
                <select
                  value={u.role}
                  onChange={(e) =>
                    changeRole(u.id, e.target.value)
                  }
                  className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="A">Admin</option>
                  <option value="G">Guidance</option>
                  <option value="S">Student</option>
                  <option value="M">Marketing</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}
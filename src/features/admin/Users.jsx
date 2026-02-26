import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    { email: "admin@gmail.com", role: "Admin" },
    { email: "student@gmail.com", role: "Student" },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  });

  const handleCreate = () => {
    setUsers([...users, { email: newUser.email, role: newUser.role }]);
    setNewUser({ name: "", email: "", password: "", role: "Admin" });
  };

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">User Management</h2>

      {/* CREATE USER CARD */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="font-semibold text-lg">Create User</h3>

        <div className="grid grid-cols-4 gap-4">
          <input
            placeholder="Full Name"
            className="input"
            value={newUser.name}
            onChange={(e) =>
              setNewUser({ ...newUser, name: e.target.value })
            }
          />

          <input
            placeholder="Email"
            className="input"
            value={newUser.email}
            onChange={(e) =>
              setNewUser({ ...newUser, email: e.target.value })
            }
          />

          <input
            placeholder="Password"
            type="password"
            className="input"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />

          <select
            className="input"
            value={newUser.role}
            onChange={(e) =>
              setNewUser({ ...newUser, role: e.target.value })
            }
          >
            <option>Admin</option>
            <option>Student</option>
            <option>Guidance</option>
          </select>
        </div>

        <button
          onClick={handleCreate}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Create User
        </button>
      </div>

      {/* USERS TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Change Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="border-t">
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">
                  <select className="input">
                    <option>Admin</option>
                    <option>Student</option>
                    <option>Guidance</option>
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
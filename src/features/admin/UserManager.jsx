import { useEffect, useState } from "react";
import { fetchUsers } from "../../lib/adminService";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default function UserManager() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchUsers();
      setUsers(data || []);
    } catch (err) {
      console.error("Failed to load users:", err);
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div style={{ maxWidth: 900 }}>
      <h2>User Management</h2>

      <UserForm onSuccess={loadUsers} />

      <hr style={{ margin: "20px 0" }} />

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <UserList users={users} refresh={loadUsers} />
      )}
    </div>
  );
}
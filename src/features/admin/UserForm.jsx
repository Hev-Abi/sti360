import { useState } from "react";
import { createUser } from "../../lib/adminService";

export default function UserForm({ onSuccess }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    full_name: "",
    role: "G",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await createUser(form);

    if (res.success) {
      alert("User created!");
      onSuccess();
    } else {
      alert(res.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create User</h3>

      <input
        placeholder="Full Name"
        onChange={(e) =>
          setForm({ ...form, full_name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
      >
        <option value="A">Admin</option>
        <option value="G">Guidance</option>
        <option value="S">Student</option>
        <option value="M">Marketing</option>
      </select>

      <button type="submit">Create User</button>
    </form>
  );
}
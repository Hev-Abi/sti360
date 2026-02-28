import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardShell({
  nav,
  activeNav,
  setActiveNav,
  onLogout,
  children,
  pageTitle = "",
}) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex h-screen bg-white text-gray-800">

      {/* SIDEBAR */}
      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } bg-[#0f2a44] flex flex-col transition-all duration-300`}
      >
        {/* Logo */}
        <div className="p-4 flex items-center justify-between border-b border-[#17324d] text-white">
          {!collapsed && (
            <span className="text-xl font-bold">STI 360</span>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white text-xl hover:text-gray-300"
          >
            ☰
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-2">
          {nav.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveNav(item.key)}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                activeNav === item.key
                  ? "bg-[#1b3b5c] text-white font-semibold"
                  : "hover:bg-[#17324d] text-gray-300"
              }`}
            >
              {collapsed ? item.label.charAt(0) : item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#17324d]">
          <button
            onClick={handleLogout}
            className="w-full bg-[#17324d] hover:bg-[#1b3b5c] py-2 rounded text-white transition"
          >
            {collapsed ? "⎋" : "Logout"}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-auto bg-white">

        {/* 🔥 GLOBAL HEADER */}
        <div className="flex items-center justify-between mb-6 border-b pb-4">

          <div>
            <h1 className="text-2xl font-semibold">{pageTitle}</h1>
            <p className="text-sm text-gray-500">{today}</p>
          </div>

          {/* PROFILE */}
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
            
          </div>

        </div>

        {children}
      </main>
    </div>
  );
}
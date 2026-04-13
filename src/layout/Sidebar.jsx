import { Home, Users, Settings } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { label: "Home", icon: <Home size={18} />, path: "/" },
    { label: "Users", icon: <Users size={18} />, path: "/users" },
    { label: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <li
              className={`flex items-center gap-3 p-2 rounded cursor-pointer transition
          ${location.pathname === item.path
                  ? "bg-gray-700"
                  : "hover:bg-gray-800"
                }`}
            >
              {item.icon}
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
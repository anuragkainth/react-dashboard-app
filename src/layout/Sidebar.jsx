import { Home, Users, Settings } from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", icon: <Home size={18} /> },
    { id: "users", label: "Users", icon: <Users size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-3 p-2 rounded cursor-pointer transition 
              ${
                active === item.id
                  ? "bg-gray-700"
                  : "hover:bg-gray-800"
              }`}
          >
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
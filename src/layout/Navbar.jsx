import { Search, Bell, User } from "lucide-react";

function Navbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      
      {/* 🔍 Search Bar */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-1/4">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

      {/* 🔔 Right Section */}
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer text-gray-600" />

        <div className="flex items-center gap-2 cursor-pointer">
          <User />
          <span className="text-sm font-medium">Anurag</span>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
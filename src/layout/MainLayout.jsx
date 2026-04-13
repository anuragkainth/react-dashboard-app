import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "../pages/Dashboard";

function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6 bg-gray-100 min-h-screen">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
import StatCard from "../components/StatCard";
import DataTable from "../components/DataTable";
import BarChartComponent from "../components/BarChartComponent";
import { useEffect, useState } from "react";
import { fetchStats, fetchUsers } from "../services/api";

function Dashboard() {

  const [stats, setStats] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const statsData = await fetchStats();
      const usersData = await fetchUsers();
      
      setStats(statsData);
      setUsers(usersData);
      setLoading(false);
    };
  
    loadData();
  }, []);

  const columns = ["name", "email", "role"];
  const chartData = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "Apr", sales: 200 },
  ];

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          {/* Cards skeleton */}
          <div className="grid grid-cols-4 gap-4">
            <div className="h-20 bg-gray-300 rounded"></div>
            <div className="h-20 bg-gray-300 rounded"></div>
            <div className="h-20 bg-gray-300 rounded"></div>
            <div className="h-20 bg-gray-300 rounded"></div>
          </div>
          {/* Chart skeleton */}
          <div className="h-64 bg-gray-300 rounded"></div>
          {/* Table skeleton */}
          <div className="h-40 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
          />
        ))}
      </div>
      <BarChartComponent data={chartData} />
      <DataTable columns={columns} data={users} />
    </div>
  );
}

export default Dashboard;
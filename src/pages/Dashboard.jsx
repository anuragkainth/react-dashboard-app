import StatCard from "../components/StatCard";
import DataTable from "../components/DataTable";
import BarChartComponent from "../components/BarChartComponent";

function Dashboard() {
  const stats = [
    { title: "Revenue", value: "$24,000", change: 12 },
    { title: "Users", value: "1,200", change: 5 },
    { title: "Orders", value: "320", change: -2 },
    { title: "Growth", value: "18%", change: 8 },
  ];
  const columns = ["name", "email", "role"];
  const users = [
    { name: "Anurag", email: "anurag@mail.com", role: "Admin" },
    { name: "Rahul", email: "rahul@mail.com", role: "User" },
    { name: "Sneha", email: "sneha@mail.com", role: "Editor" },
  ];
  const chartData = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "Apr", sales: 200 },
  ];

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
      <DataTable columns={columns} data={users} />
      <BarChartComponent data={chartData} />
    </div>
  );
}

export default Dashboard;
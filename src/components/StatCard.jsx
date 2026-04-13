function StatCard({ title, value, change }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm text-gray-500">{title}</h3>
        
        <div className="mt-2 flex items-center justify-between">
          <span className="text-2xl font-bold">{value}</span>
          <span
            className={`text-sm font-medium ${
              change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {change >= 0 ? "+" : ""}
            {change}%
          </span>
        </div>
      </div>
    );
  }
  
  export default StatCard;
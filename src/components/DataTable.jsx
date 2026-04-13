function DataTable({ columns, data }) {
    return (
      <div className="bg-white rounded-lg shadow mt-6 overflow-hidden border border-gray-200">
        <table className="w-full text-left">
          
          {/* 🔹 Table Head */}
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="p-3">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
  
          {/* 🔹 Table Body */}
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                {columns.map((col, j) => (
                  <td key={j} className="p-3">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
  
        </table>
      </div>
    );
  }
  
  export default DataTable;
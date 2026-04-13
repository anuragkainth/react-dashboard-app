export const fetchStats = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: "Revenue", value: "$24,000", change: 12 },
          { title: "Users", value: "1,200", change: 5 },
          { title: "Orders", value: "320", change: -2 },
          { title: "Growth", value: "18%", change: 8 },
        ]);
      }, 1000);
    });
  };
  
  export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "Anurag", email: "anurag@mail.com", role: "Admin" },
          { name: "Rahul", email: "rahul@mail.com", role: "User" },
          { name: "Sneha", email: "sneha@mail.com", role: "Editor" },
        ]);
      }, 1000);
    });
  };
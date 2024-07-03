import React from "react";

const ExportCSV = () => {
  // Mock data
  const data = [
    { name: "John Doe", email: "john@example.com", age: 28 },
    { name: "Jane Smith", email: "jane@example.com", age: 34 },
    { name: "Sam Green", email: "sam@example.com", age: 22 }
  ];

  // Function to export data as CSV
  const exportToCSV = () => {
    const headers = "Name,Email,Age\n";
    const csvData = data.map(row => `${row.name},${row.email},${row.age}`).join("\n");
    const csvContent = headers + csvData;
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "data.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <h2>Export CSV Example</h2>
      <button onClick={exportToCSV}>Download CSV</button>
    </div>
  );
};

export default ExportCSV;

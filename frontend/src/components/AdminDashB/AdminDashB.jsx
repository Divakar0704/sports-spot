// AdminDashboard.jsx

import { useState } from "react";
import UserManagement from "./UserManagement";
import CourtManagement from "./CourtManagement";
import Reports from "./Reports";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="p-8 bg-green-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Admin Panel</h1>
      <p className="text-gray-600 mb-6">Manage users, courts, and platform operations</p>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <SummaryCard title="Total Users" value="1,524" note="+12% from last month" />
        <SummaryCard title="Total Courts" value="89" note="+8% from last month" />
        <SummaryCard title="Total Revenue" value="₹45,750" note="+15% from last month" />
        <SummaryCard title="Growth Rate" value="12.5%" note="Monthly growth" />
      </div>

      {/* Tabs */}
      <div className="flex p-1 justify-between bg-gray-200 gap-1 mb-6">
        <TabButton  active={activeTab === "users"} onClick={() => setActiveTab("users")}>User Management</TabButton>
        <TabButton  active={activeTab === "courts"} onClick={() => setActiveTab("courts")}>Court Management</TabButton>
        <TabButton  active={activeTab === "reports"} onClick={() => setActiveTab("reports")}>Reports</TabButton>
      </div>

      {/* Dynamic Section */}
      <div className="bg-white rounded-lg shadow p-6">
        {activeTab === "users" && <UserManagement />}
        {activeTab === "courts" && <CourtManagement />}
        {activeTab === "reports" && <Reports />}
      </div>
    </div>
  );
}

function SummaryCard({ title, value, note }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold text-green-500">{value}</h2>
      <p className="text-xs text-gray-400">{note}</p>
    </div>
  );
}

function TabButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 w-full rounded-t-md text-sm font-medium transition rounded-lg ${
        active
          ? "bg-white shadow text-black"
          : "bg-gray-200 text-gray-800 hover:cursor-pointer hover:bg-gray-50 hover:text-gray-700"
      }`}
    >
      {children}
    </button>
  );
}

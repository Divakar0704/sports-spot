// UserManagement.jsx

import { Eye, Ban, CheckCircle } from "lucide-react";

const users = [
  {
    name: "John Player",
    email: "john@example.com",
    joined: "2024-01-15",
    status: "active",
    role: "user",
  },
  {
    name: "Court Owner",
    email: "owner@example.com",
    joined: "2024-01-10",
    status: "active",
    role: "seller",
  },
  {
    name: "Sarah Smith",
    email: "sarah@example.com",
    joined: "2024-01-05",
    status: "banned",
    role: "user",
  },
];

export default function UserManagement() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="🔍 Search users..."
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      {users.map((user, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white p-4 border-b"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-bold uppercase">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-xs text-gray-400">Joined: {user.joined}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                user.status === "active"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {user.status}
            </span>
            <span className="px-2 py-1 text-xs border rounded">{user.role}</span>

            <button className="p-2 rounded hover:bg-gray-100">
              <Eye size={16} />
            </button>

            {user.status === "banned" ? (
              <button className="p-2 rounded hover:bg-gray-100 text-green-600">
                <CheckCircle size={16} />
              </button>
            ) : (
              <button className="p-2 rounded hover:bg-gray-100 text-red-600">
                <Ban size={16} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

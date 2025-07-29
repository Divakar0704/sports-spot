// CourtManagement.jsx

import { Eye } from "lucide-react";

const courts = [
  {
    name: "Elite Cricket Ground",
    owner: "Sports Complex Ltd",
    revenue: "₹15,420",
    status: "approved",
  },
  {
    name: "Champions Tennis Court",
    owner: "Tennis Club",
    revenue: "₹8,950",
    status: "pending",
  },
  {
    name: "Victory Football Turf",
    owner: "Football Academy",
    revenue: "₹12,300",
    status: "approved",
  },
];

export default function CourtManagement() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Court Listings</h2>
      {courts.map((court, index) => (
        <div
          key={index}
          className="bg-white p-4 border-b flex justify-between items-center"
        >
          <div>
            <p className="font-semibold text-black">{court.name}</p>
            <p className="text-sm text-gray-500">Owner: {court.owner}</p>
            <p className="text-sm text-green-500 font-medium">
              Revenue: {court.revenue}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {court.status === "approved" ? (
              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                approved
              </span>
            ) : (
              <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                pending
              </span>
            )}

            <button className="p-2 hover:bg-gray-100 rounded">
              <Eye size={16} />
            </button>

            {court.status === "pending" && (
              <>
                <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-900">
                  Approve
                </button>
                <button className="border px-3 py-1 rounded text-sm">Reject</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

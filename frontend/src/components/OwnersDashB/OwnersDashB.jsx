export default function CourtOwnerDashboard() {
  const stats = [
    { title: "My Courts", value: 4, label: "Active listings" },
    { title: "Today's Bookings", value: 12, label: "Scheduled games" },
    { title: "This Month", value: "$2,450", label: "Revenue earned", isMoney: true },
    { title: "Rating", value: 4.8, label: "Average rating" },
  ];

  const recentBookings = [
    { name: "John D.", court: "Tennis Court A", time: "6:00 PM" },
    { name: "Sarah M.", court: "Cricket Ground", time: "7:00 PM" },
    { name: "Mike R.", court: "Football Turf", time: "8:00 PM" },
  ];

  return (
    <div className="min-h-screen p-6 bg-green-50">
      {/* Banner */}
      <div className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-400 text-white p-6 mb-6 shadow-sm">
        <h2 className="text-2xl font-bold">Welcome, Court Owner!</h2>
        <p className="text-sm opacity-90">Manage your courts and bookings</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-md font-semibold text-gray-800 mb-1">{stat.title}</h3>
            <p className={`text-2xl font-bold text-green-500`}>
              {stat.value}
            </p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-gray-900 text-white py-2 rounded-md font-medium hover:bg-gray-800">
              Add New Court
            </button>
            <button className="w-full bg-gray-900 text-white py-2 rounded-md font-medium hover:bg-gray-800">
              View All Bookings
            </button>
            <button className="w-full border border-gray-400 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-100">
              Update Availability
            </button>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
          <ul className="divide-y">
            {recentBookings.map((booking, index) => (
              <li key={index} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">{booking.name}</p>
                  <p className="text-sm text-gray-500">{booking.court}</p>
                </div>
                <span className="text-sm text-gray-600">{booking.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingBookings() {
  const upcoming = [
    {
      id: 1,
      court: "Elite Cricket Ground",
      date: "2024-07-10",
      time: "6:00 PM - 7:00 PM",
      location: "Downtown",
      price: 300,
      sport: "Cricket",
    },
    {
      id: 2,
      court: "Champions Tennis Court",
      date: "2024-07-12",
      time: "4:00 PM - 5:00 PM",
      location: "Riverside Park",
      price: 250,
      sport: "Tennis",
    },
  ];

  return (
    <div className="space-y-4">
      {upcoming.map((booking) => (
        <div
          key={booking.id}
          className="bg-white p-4 rounded shadow flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{booking.court}</h3>
            <p className="text-sm text-gray-500">{booking.location}</p>
            <div className="flex gap-4 mt-1 text-sm text-gray-600">
              <span>📅 {booking.date}</span>
              <span>⏰ {booking.time}</span>
            </div>
            <div className="mt-2 text-green-500 font-bold">₹{booking.price}</div>
            <span className="bg-green-100 text-green-600 px-2 py-1 mt-1 inline-block text-sm rounded">
              {booking.sport}
            </span>
          </div>
          <div className="space-x-2">
            <button className="border rounded px-3 py-1">Cancel</button>
            <button className="border rounded px-3 py-1">📞 Contact</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PastBookings() {
  const completed = [
    {
      id: 1,
      court: "Victory Football Turf",
      date: "2024-06-10",
      time: "7:00 PM - 8:00 PM",
      location: "City Center",
      price: 400,
      sport: "Football",
    },
    {
      id: 2,
      court: "Elite Cricket Ground",
      date: "2024-06-01",
      time: "6:00 PM - 7:00 PM",
      location: "Downtown",
      price: 300,
      sport: "Cricket",
    },
  ];

  return (
    <div className="space-y-4">
      {completed.map((booking) => (
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
            <span className="bg-gray-200 text-gray-600 px-2 py-1 mt-1 inline-block text-sm rounded">
              {booking.sport}
            </span>
          </div>
          <div className="text-sm text-gray-500">✔️ Played</div>
        </div>
      ))}
    </div>
  );
}

import { Link } from 'react-router-dom';
import DashboardCard from '../DashboardCard/DashboardCard';
import { CalendarCheck, Heart, Locate } from 'lucide-react';

export default function PlayerDashboard() {
  const recentBookings = [
    {
      id: 1,
      court: 'Elite Cricket Ground',
      date: '2024-01-20 at 6:00 PM',
      status: 'Confirmed',
    },
    {
      id: 2,
      court: 'Champions Tennis Court',
      date: '2024-01-18 at 4:00 PM',
      status: 'Completed',
    },
    {
      id: 3,
      court: 'Victory Football Turf',
      date: '2024-01-15 at 7:00 PM',
      status: 'Completed',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="GetStarted mb-7 flex-col flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 rounded-xl text-white p-4">
        <h2 className="text-3xl font-bold mb-2">Welcome back, John!</h2>
        <p className="mb-2">Ready to book your next game?</p>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <DashboardCard
          title="Upcoming Bookings"
          number={3}
          description="Games scheduled this week"
          buttonText="View All"
          onClick={() => console.log('View bookings')}
          link="/player/bookings" // ✅ added route
          icon={<CalendarCheck className="w-5 h-5" />}
        />

        <DashboardCard
          title="Favorite Courts"
          number={5}
          description="Courts you've saved"
          buttonText="Browse Favorites"
          onClick={() => console.log('Go to favorites')}
           link="/player/favourites"
          icon={<Heart className="w-5 h-5" />}
        />

        <DashboardCard
          title="Quick Book"
          description="Find courts near you"
          buttonText="Find Courts"
          link="/player/find-courts"
          onClick={() => console.log('Redirect to explore')}
          icon={<Locate className="w-5 h-5" />}
        />
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Recent Bookings</h3>
        <ul className="space-y-3">
          {recentBookings.map((booking) => (
            <li key={booking.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div>
                <p className="font-semibold">{booking.court}</p>
                <p className="text-sm text-gray-500">{booking.date}</p>
              </div>
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  booking.status === 'Confirmed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {booking.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

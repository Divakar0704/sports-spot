import { Link } from 'react-router-dom';

export default function SmCourtCards({ court }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
      <img
        src={court.image}
        alt={court.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold">{court.name}</h3>
      <p className="text-gray-500 text-sm">{court.location}</p>
      <p className="text-green-500 font-bold mt-1">₹{court.price}/hour</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-xs bg-gray-200 px-2 py-1 rounded">{court.sport}</span>
        <span className="text-xs text-gray-400">{court.distance}</span>
      </div>
      <Link
        to={`/court/${court.id}`}
        className="block bg-black text-white text-center py-2 mt-4 rounded-md font-medium hover:bg-gray-800 transition"
      >
        View Details
      </Link>
    </div>
  );
}

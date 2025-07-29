import { Link } from "react-router-dom";

export default function SmCourtCard({ court }) {
  return (
   <div className="bg-white rounded-xl p-4 shadow flex justify-between items-center w-full min-w-[400px]">
  <div className="flex gap-3">
    <div className="w-14 h-14 rounded-md overflow-hidden">
      <img src={court.image} alt={court.name} className="w-full h-full object-cover" />
    </div>
    <div>
      <h3 className="font-semibold text-sm">{court.name}</h3>
      <p className="text-xs text-gray-500">{court.location} • {court.distance}</p>
      <div className="flex items-center gap-2 mt-1 text-xs">
        <span className="text-yellow-600">⭐ {court.rating}</span>
        <span
          className={`${
            court.status === "Available"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          } px-2 py-0.5 rounded-full`}
        >
          {court.status}
        </span>
      </div>
    </div>
  </div>

  <div className="text-right relative">
    <span className="absolute right-0 top-0 text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
      {court.sport}
    </span>
    <p className="text-green-600 font-bold text-sm mt-4">₹{court.price}/hour</p>
    <Link
      to={`/court/${court.id}`}
      className="mt-2 inline-block bg-gray-900 text-white text-xs px-3 py-1 rounded-md hover:bg-gray-800"
    >
      View Details
    </Link>
  </div>
</div>

  );
}

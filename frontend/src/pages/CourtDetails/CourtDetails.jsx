import { Link, useParams } from 'react-router-dom';
import { MapPin, Star, CheckCircle } from 'lucide-react';
import  COURTS  from '../../data/courtData';


export default function CourtDetails() {
  const { id } = useParams();
  const court = COURTS.find(c => c.id === id);

  if (!court) {
    return (
      <div className="p-16">
        <p className="text-red-500 font-semibold">Court not found.</p>
      </div>
    );
  }

  return (
    <div className="p-16 bg-[#f0fff5] min-h-screen">
      <Link to="/player/find-courts" className="text-green-500 text-sm mb-4 inline-block">
        &larr; Back to Search
      </Link>

      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2 relative">
          <img src={court.image} alt={court.name} className="rounded-xl w-full h-[350px] object-cover" />
          <span className="absolute top-4 right-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full shadow">
            ⭐ {court.rating} ({court.reviews} reviews)
          </span>
        </div>

        <div className="space-y-3">
          {/* Booking Card */}
          <div className="bg-white rounded-xl text-sm shadow p-4">
            <p className="text-green-500 text-xl font-bold mb-2">₹{court.price}<span className="text-gray-600 text-base font-medium">/hour</span></p>
            <p><b>Available:</b> {court.hours}</p>
            <p><b>Contact:</b> {court.contact}</p>
            <button className="mt-3 bg-gray-900 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              <span>📅</span> 
              <Link to={`/book/${court.id}`}>Book Now</Link>
            </button>
          </div>

          {/* Quick Info Card */}
          <div className="bg-white rounded-xl text-sm shadow p-4">
            <h3 className="text-md font-bold mb-3">Quick Info</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="flex gap-2 items-center"><Star className="text-yellow-500" size={16} /> Rating</span>
                <span>{court.rating}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="flex gap-2 items-center"><MapPin className="text-blue-500" size={16} /> Location</span>
                <span>Mumbai</span>
              </div>
              <div className="flex justify-between">
                <span className="flex gap-2 items-center"><CheckCircle className="text-green-500" size={16} /> Verified</span>
                <span>{court.verified ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Details Section */}
      <div className="bg-white rounded-xl shadow p-6 mt-10">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold">{court.name}</h2>
          <span className="bg-gray-100 px-3 py-1 text-sm rounded-full">{court.sport}</span>
        </div>
        <p className="text-gray-600 mb-3">📍 {court.location}</p>
        <p className="text-gray-700 mb-6">
          Professional {court.sport.toLowerCase()} ground with international standard facilities. Perfect for tournaments and practice sessions.
        </p>

        {/* Amenities */}
        <h3 className="font-semibold mb-2">Amenities</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 text-sm text-gray-700 list-disc pl-5 mb-6">
          {court.amenities.map((a, idx) => (
            <li key={idx}>{a}</li>
          ))}
        </ul>

        {/* Court Rules */}
        <h3 className="font-semibold mb-2">Court Rules</h3>
        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
          {court.rules.map((r, idx) => (
            <li key={idx}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

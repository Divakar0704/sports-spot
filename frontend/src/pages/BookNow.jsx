import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import COURTS from '../data/courtData';

const timeSlots = [
  { time: '6:00 AM - 7:00 AM', booked: false },
  { time: '7:00 AM - 8:00 AM', booked: false },
  { time: '8:00 AM - 9:00 AM', booked: true },
  { time: '9:00 AM - 10:00 AM', booked: false },
  { time: '10:00 AM - 11:00 AM', booked: false },
  { time: '6:00 PM - 7:00 PM', booked: false },
  { time: '7:00 PM - 8:00 PM', booked: true },
  { time: '8:00 PM - 9:00 PM', booked: false },
  { time: '9:00 PM - 10:00 PM', booked: false },
];

const BookNow = () => {
  const { id } = useParams();
  const court = COURTS.find((c) => c.id === id);

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  if (!court) return <div className="text-center text-xl mt-10">Court not found</div>;

  return (
    <div className="min-h-screen bg-green-50 p-6 md:p-10 flex flex-col lg:flex-row gap-6">
      {/* Left Panel */}
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Book Your Court</h1>
          <p className="text-gray-600">Select your preferred date and time slot</p>
        </div>

        {/* Court Details */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-semibold">{court.name}</h2>
          <p className="text-gray-500 mt-1">📍 {court.location}</p>
        </div>

        {/* Date Picker */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold">📅 Select Date</h3>
          <input
            type="date"
            className="mt-3 p-2 border rounded w-full md:w-64"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Time Slots */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-lg font-semibold mb-4">🕒 Available Time Slots</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {timeSlots.map((slot, index) => {
              const isSelected = selectedSlot === slot.time;
              const isBooked = slot.booked;

              return (
                <div
                  key={index}
                  onClick={() => !isBooked && setSelectedSlot(slot.time)}
                  className={`p-4 border rounded-xl cursor-pointer transition 
                    ${isBooked ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 
                    isSelected ? 'bg-green-100 border-green-500 text-green-800' : 
                    'hover:bg-green-50'}`}
                >
                  <p className="font-semibold">{slot.time}</p>
                  <p className="text-sm">{isBooked ? 'Booked' : 'Available'}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-96 space-y-6">
        {/* Booking Summary */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>

          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-semibold">Court Details</p>
              <p>{court.name}</p>
              <p>{court.location}</p>
            </div>

            <div>
              <p className="font-semibold">Selected Date</p>
              <p>{new Date(selectedDate).toDateString()}</p>
            </div>

            <div>
              <p className="font-semibold">Time Slot</p>
              <p>{selectedSlot || 'None selected'}</p>
            </div>

            <div>
              <p className="font-semibold">Total Amount</p>
              <p className="text-green-600 font-bold text-lg">₹{court.price}</p>
            </div>
          </div>

          <button
            className="mt-6 w-full bg-gray-800 text-white font-semibold py-2 rounded hover:bg-gray-700 disabled:opacity-50"
            disabled={!selectedSlot}
          >
            Confirm Booking
          </button>
        </div>

        {/* Booking Info */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-3">Booking Info</h3>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
            <li>Free cancellation up to 2 hours before booking</li>
            <li>Please arrive 10 minutes early</li>
            <li>Bring valid ID for verification</li>
            <li>Equipment rental available on-site</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
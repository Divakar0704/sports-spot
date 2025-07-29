import React from 'react';
export default function GetStarted(){
 return (
    <>
        <div className="GetStarted bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 text-white py-16 text-center mt-10">
  <h2 className="text-3xl font-bold mb-2">Ready to Play? Start Booking Now!</h2>
  <p className="mb-6">Join thousands of players who have found their perfect courts on SportSpot</p>
  <div className="flex justify-center gap-4">
    <button className="flex items-center gap-2 bg-white text-green-500 border border-white font-semibold py-2 px-4 rounded-md hover:bg-green-100 transition">
      <i className="fa-regular fa-user"></i> Sign Up as Player
    </button>
    <button className="bg-transparent text-white border border-white font-semibold py-2 px-4 rounded-md hover:bg-white hover:text-green-500 transition">
       List Your Court
    </button>
  </div>
</div>
    </>
  );
}
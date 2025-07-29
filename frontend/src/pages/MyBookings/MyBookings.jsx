import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UpcomingBookings from "./UpcomingBookings";
import PastBookings from "./PastBookings";

export default function MyBookings() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const totalBookings = 4;
  const upcoming = 2;
  const completed = 2;

  return (
<>
<Navbar />
    <div className=" p-6">
      <div className="heading text-center"><h1 className="text-3xl font-bold mb-2">My Bookings</h1>
      <p className="text-gray-500 mb-4">Manage your court reservations</p>
      </div>
      
    <div className="bg-gray-50 flex items-center justify-center ">
       <div className="mb-6 flex w-full max-w-xl">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`rounded-xl flex-1 py-2 px-4 border rounded-l-xl ${
            activeTab === "upcoming"
              ? "bg-white text-black shadow"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`rounded-xl flex-1 py-2 px-4 border rounded-r-xl ${
            activeTab === "past"
              ? "bg-white text-black shadow"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Past Bookings
        </button> 
      </div>
    </div>
     

      <div className="mb-8">
        {activeTab === "upcoming" ? <UpcomingBookings /> : <PastBookings />}
      </div> 

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl text-center shadow">
          <p className="text-lg font-semibold">Total Bookings</p>
          <p className="text-2xl font-bold text-green-500 mt-2">{totalBookings}</p>
        </div>
        <div className="bg-white p-4 rounded-xl text-center shadow">
          <p className="text-lg font-semibold">Upcoming</p>
          <p className="text-2xl font-bold text-green-500 mt-2">{upcoming}</p>
        </div>
        <div className="bg-white p-4 rounded-xl text-center shadow">
          <p className="text-lg font-semibold">Completed</p>
          <p className="text-2xl font-bold text-green-500 mt-2">{completed}</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

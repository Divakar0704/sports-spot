import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import SmCourtCard from '../../components/SmCourtCard';
import { useState } from 'react';
import MapComponent from '../../components/MapComponent';

// Sample Court Data
const courts = [
  {
    id: 1,
    name: 'Elite Cricket Ground',
    sport: 'Cricket',
    location: 'Downtown Sports Complex',
    image: '/cricket.png',
    price: 25,
    rating: 4.8,
    distance: '2.1 km',
    status: 'Available',
  },
  {
    id: 11,
    name: 'Elite Cricket Ground',
    sport: 'Cricket',
    location: 'Downtown Sports Complex',
    image: '/cricket.png',
    price: 25,
    rating: 4.8,
    distance: '2.1 km',
    status: 'Available',
  },
  {
    id: 2,
    name: 'Champions Tennis Court',
    sport: 'Tennis',
    location: 'Riverside Park',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqss75At1VB_dAmvXeJyjsLaoMAVnbVp34rJEZhsyxlUgxRGc6ZsC-rxzyWffnd9AFQnE&usqp=CAU',
    price: 20,
    rating: 4.9,
    distance: '1.8 km',
    status: 'Available',
  },
  {
    id: 3,
    name: 'Victory Football Turf',
    sport: 'Football',
    location: 'City Center',
    image: '/football.png',
    price: 30,
    rating: 4.7,
    distance: '3.2 km',
    status: 'Busy',
  },
  {
    id: 4,
    name: 'Ace Badminton Hall',
    sport: 'Badminton',
    location: 'Sports Complex',
    image: '/badminton.png',
    price: 20,
    rating: 4.6,
    distance: '1.5 km',
    status: 'Available',
  },
];

export default function FindCourts() {

  const [selectedSport, setSelectedSport] = useState("All Sports");
const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices");

// Filtering logic goes here ⬇️
  const filteredCourts = courts.filter((court) => {
    const matchesSport =
      selectedSport === "All Sports" || court.sport === selectedSport;

    const matchesPrice = (() => {
      if (selectedPriceRange === "All Prices") return true;
      if (selectedPriceRange === "₹0 - ₹20") return court.price <= 20;
      if (selectedPriceRange === "₹21 - ₹50") return court.price > 20 && court.price <= 50;
      if (selectedPriceRange === "₹51-100") return court.price > 50 && court.price <= 100;
      return true;
    })();

    return matchesSport && matchesPrice;
  });

  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-center">

          <SearchBar />
          <select
  className="border rounded-md text-sm p-1"
  value={selectedSport}
  onChange={(e) => setSelectedSport(e.target.value)}
>
  <option>All Sports</option>
  <option>Cricket</option>
  <option>Tennis</option>
  <option>Football</option>
  <option>Badminton</option>
</select>

<select
  className="border rounded-md text-sm p-1"
  value={selectedPriceRange}
  onChange={(e) => setSelectedPriceRange(e.target.value)}
>
  <option>All Prices</option>
  <option>₹0 - ₹20</option>
  <option>₹21 - ₹50</option>
  <option>₹51-100</option>
</select>

          <button className="bg-gray-900 cursor-pointer text-white px-3 py-1 rounded-md">Search</button>
        </div>

        <div className="flex w-full md:grid-cols-3 px-16 gap-6">
          <div className="w-[60%] h-[70vh] bg-green-100 rounded-xl flex-col flex justify-center p-10 text-center">
            <MapComponent lat={17.640257} lng={83.120990} />
          </div>

<div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] w-[450px] pr-2">
  <h2 className="text-xl font-semibold mb-2">🎯 Courts Found</h2>
  {filteredCourts.length > 0 ? (
  filteredCourts.map((court) => (
    <SmCourtCard key={court.id} court={court} />
  ))
) : (
  <p className="text-gray-500 text-sm">No courts match the selected filters.</p>
)}

</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

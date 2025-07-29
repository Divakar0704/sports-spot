import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SmCourtCards from '../../components/SmCourtCards/SmCourtCards'; // We'll create this next

export default function Favorites() {
  const favoriteCourts = [
    {
      id: '1',
      name: 'Elite Cricket Ground',
      location: 'Downtown Sports Complex',
      price: 25,
      sport: 'Cricket',
      image: '/cricket.png',
      distance: '2.1 km',
    },
    {
      id: '2',
      name: 'Champions Tennis Court',
      location: 'Riverside Park',
      price: 20,
      sport: 'Tennis',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqss75At1VB_dAmvXeJyjsLaoMAVnbVp34rJEZhsyxlUgxRGc6ZsC-rxzyWffnd9AFQnE&usqp=CAU',
      distance: '1.8 km',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">Favorite Courts</h1>
        <p className="text-gray-500 mb-6">Courts you’ve bookmarked for quick access</p>

        {favoriteCourts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteCourts.map((court) => (
              <SmCourtCards key={court.id} court={court} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 mt-4">No favorite courts yet. Start bookmarking!</p>
        )}
      </div>
      <Footer />
    </>
  );
}

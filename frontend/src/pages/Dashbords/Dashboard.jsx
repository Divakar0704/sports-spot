// import { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PlayerDashboard from '../../components/PlayerDashB/PlayerDashB';
import CourtOwnerDashboard from '../../components/OwnersDashB/OwnersDashB';
import AdminDashboard from '../../components/AdminDashB/AdminDashB';
import { useAuth } from '../../context/AuthContext';

export default function Dashboard() {
  const { userType,login,setLogin } =useAuth();
  // setLogin(true);
  return (
    // login &&
    <>
      <Navbar />
      <div className="min-h-screen p-12 bg-gray-50">

        {/* Player View */}
        {userType === 'player' && (
          <PlayerDashboard />
        )}

        {/* Court Owner View */}
        {userType === 'courtOwner' && (
          <CourtOwnerDashboard />
        )}

        {/* Admin View */}
        {userType === 'admin' && (
          <AdminDashboard />
        )}
      </div>
    </>
  );
}

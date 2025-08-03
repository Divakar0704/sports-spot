import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar/Navbar';
import PlayerDashboard from '../../components/PlayerDashB/PlayerDashB';
import CourtOwnerDashboard from '../../components/OwnersDashB/OwnersDashB';
import AdminDashboard from '../../components/AdminDashB/AdminDashB';

export default function Dashboard() {
  const { login, userType, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !login) {
      navigate('/login');
    }
  }, [loading, login]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-12 bg-gray-50">
        {userType === 'player' && <PlayerDashboard />}
        {userType === 'courtOwner' && <CourtOwnerDashboard />}
        {userType === 'admin' && <AdminDashboard />}
      </div>
    </>
  );
}
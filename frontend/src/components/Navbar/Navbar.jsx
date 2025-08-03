import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { userType, login, setLogin, setUserType, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogin(false);
    setUserType(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  if (loading) return null; // wait till auth loaded

  return (
    <nav className="navbar border-b-1 border-gray-300 w-full h-18">
      <div className='logoName gap-2'>
        <img src="/assets/game-icon.png" className="w-11" alt="icon" />
        <h2 className="name font-bold">Sports <span className='text-green-400'>Spot</span></h2>
      </div>

      <SearchBar />

      <ul className="nav-links">
        {login ? (
          <>
            <li><Link to="/dashboard"><i className="fa-solid fa-house"></i> Dashboard</Link></li>
            <li><Link to="/player/find-courts"><i className="fa-solid fa-map-location-dot"></i> Maps</Link></li>
            {userType === 'player' && <li><Link to="/player/bookings"><i className="fa-solid fa-calendar-check"></i> My Bookings</Link></li>}
            <li><Link to="/profile"><i className="fa-regular fa-user"></i> Profile</Link></li>
            <li onClick={handleLogout}><button>LogOut</button></li>
          </>
        ) : (
          <>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
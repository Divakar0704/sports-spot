import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
const { userType, login, setLogin , setUserType } = useAuth();
const navigate = useNavigate();
 const handleLogout = () => {
    setLogin(false);         // update state
    setUserType(null);       // optionally reset user type
    navigate('/');           // redirect AFTER state change
  };

  return (
    
    <nav className="navbar border-b-1 border-gray-300 w-full h-18">

      <div className='logoName gap-2'>
      <img src="/assets/game-icon.png" className="w-11" alt="icon" />
      <h2 className="name font-bold">Sports <span className='text-green-400'>Spot</span></h2>
      </div>

    <SearchBar />

      <ul className="nav-links">
       { login &&
       <>
       <li className='w-auto h-7 px-1.5 justify-center flex items-center rounded-lg'><Link to="/dashboard"> <i className="fa-solid fa-house"></i> Dashboard</Link></li>
        <li className='w-auto h-7 px-1.5 justify-center flex items-center rounded-lg'><Link to="/player/find-courts"><i className="fa-solid fa-map-location-dot"></i> Maps</Link></li>
{ userType=='player'&&       <li className='w-auto h-7 px-1.5 justify-center flex items-center rounded-lg'><Link to="/player/bookings"><i className="fa-solid fa-calendar-check"></i> My Bookings</Link></li>
}        <li className='w-auto h-7 px-1.5 justify-center flex items-center rounded-lg'><Link to="/profile"><i className="fa-regular fa-user"></i> Profile</Link></li>
        <li onClick={ handleLogout } className='w-18 h-7 text-white bg-gray-800 justify-center  flex items-center rounded-lg'> <button className='cursor-pointer'> LogOut </button></li>
       </>}
              {!login ?
               <>
       <li className='p-1.5 rounded-lg' ><Link to="/signup">SignUp</Link></li>
        <li className='border-2 border-black p-1.5 text-white bg-black rounded-lg' ><Link to="/login">Login</Link></li>
               </>:null}
      </ul>
    </nav>
  );
}

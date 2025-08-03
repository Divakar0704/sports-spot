import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourtDetails from './pages/CourtDetails/CourtDetails';
import Profile from './pages/Profile';
import BookNow from './pages/BookNow';


import './App.css'

import HomeSection from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashbords/Dashboard';
import MyBookings from './pages/MyBookings/MyBookings';
import FindCourts from './pages/FindCourts/FindCourts';
import Favorites from './pages/Favorites/Favorites';
import OAuthSuccess from './pages/OAuthSuccess';


function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
       <Router>
      
      <Routes>
        <Route path="/" element={<HomeSection/>} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
        <Route path="/player/favourites" element={<Favorites />} />
        <Route path="/court/:id" element={<CourtDetails />} />
         <Route path="/player/bookings" element={<MyBookings />} />
         <Route path="/player/find-courts" element={<FindCourts />} />
        <Route path="/book/:id" element={<BookNow />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/signup" element={<Signup setLogin={setLogin} />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

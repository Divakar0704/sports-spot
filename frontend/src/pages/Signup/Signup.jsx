import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../api/axiosInstance";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/signup', { email, password, userType });

      localStorage.setItem('userType', userType); // Optional, based on usage
      alert('Signup successful! Redirecting to login...');
      navigate('/login');
    } catch (error) {
      alert('Signup failed: ' + (error.response?.data?.message || 'Server error'));
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="bg-white p-10 rounded-3xl shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl mb-1 font-bold text-black">
            Sports <span className="text-green-400">Spot</span>
          </h2>
          <p className="text-gray-600">Create your account to get started</p>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-center">Sign Up</h3>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* User Type */}
          <div className="w-full">
            <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">
              Select User Type
            </label>
            <select
              id="userType"
              required
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="block w-full mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
            >
              <option value="">_Choose an option_</option>
              <option value="player">Player</option>
              <option value="courtOwner">Court Owner</option>
              <option value="admin">Admin</option>
            </select>

            {userType && (
              <p className="mt-2 text-sm text-gray-600">
                You selected: <span className="font-medium text-green-600">{userType}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Sign Up
          </button>

          {/* Link to Login */}
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

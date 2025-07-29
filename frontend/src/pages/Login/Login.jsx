import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const { setLogin, setUserType, setEmail } = useAuth();
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Detect user type
    let userType = 'player';
    if (emailInput.includes('seller')) userType = 'courtOwner';
    if (emailInput.includes('admin')) userType = 'admin';

    if (emailInput && password) {
      setLogin(true);
      setUserType(userType);
      setEmail(emailInput);

      localStorage.setItem('userType', userType);
      localStorage.setItem('email', emailInput);

      // Clear inputs (after storing)
      setEmailInput('');
      setPassword('');

      navigate('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="bg-white p-10 rounded-3xl shadow-md w-100 max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl mb-1 font-bold text-black">
            Sports <span className="text-green-400">Spot</span>
          </h2>
          <p className="text-gray-600">Welcome back! Sign in to your account</p>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-center">Sign In</h3>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-500 bg-gray-100 p-4 rounded-md">
          <p><strong>Demo accounts:</strong></p>
          <p>Admin: admin@sportspot.com</p>
          <p>Seller: seller@sportspot.com</p>
          <p>User: Any other email</p>
          <p>Password: Any password</p>
        </div>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

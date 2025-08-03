import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const OAuthSuccess = () => {
  const { setLogin, setEmail, setUserType, setUserData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const email = params.get('email');
    const userType = params.get('userType') || 'player'; // default to 'player' if not provided
    console.log('OAuth redirect query:', location.search);

    if (email && userType) {
      const userData = { email, userType };

      setLogin(true);
      setEmail(email);
      setUserType(userType);
      setUserData(userData);

      localStorage.setItem('user', JSON.stringify(userData)); // optionally add here

      // Conditional navigation (optional)
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [location]);

  return <p>Logging in with Google...</p>;
};

export default OAuthSuccess;
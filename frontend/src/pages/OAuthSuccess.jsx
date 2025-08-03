import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const OAuthSuccess = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const email = params.get('email');
    const userType = params.get('userType') || 'player';

    if (email && userType) {
      loginUser({ email, userType });
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [location]);

  return <p>Logging in with Google...</p>;
};

export default OAuthSuccess;
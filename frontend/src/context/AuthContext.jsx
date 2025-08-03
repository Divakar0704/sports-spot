import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [userType, setUserType] = useState(null);
  const [email, setEmail] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsed = JSON.parse(user);
        setLogin(true);
        setUserType(parsed.userType || 'player');
        setEmail(parsed.email);
        setUserData(parsed);
      } catch (err) {
        console.error("❌ Error parsing user from localStorage", err);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (login && userType && email) {
      localStorage.setItem('user', JSON.stringify({ email, userType }));
    } else {
      localStorage.removeItem('user');
    }
  }, [login, userType, email]);

  const loginUser = ({ email, userType }) => {
    setLogin(true);
    setUserType(userType);
    setEmail(email);
    setUserData({ email, userType });
    localStorage.setItem('user', JSON.stringify({ email, userType }));
  };

  return (
    <AuthContext.Provider value={{
      login,
      userType,
      email,
      userData,
      loading,
      loginUser,
      setLogin,
      setUserType,
      setEmail,
      setUserData
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
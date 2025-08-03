import { createContext, useContext, useState, useEffect } from "react";

// 1. Create context
const AuthContext = createContext();

// 2. Create provider
export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false); // default to false
  const [userType, setUserType] = useState('player');
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState(null);

  // Auto-read from localStorage on app load
  useEffect(() => {
    const storedLogin = localStorage.getItem("login") === "true";
    const storedType = localStorage.getItem("userType");
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    const storedEmail = localStorage.getItem("email");

    setLogin(storedLogin);
    if (storedType) setUserType(storedType);
    if (storedUser) setUserData(storedUser);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("login", login);
    localStorage.setItem("userType", userType);
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("email", email);
  }, [login, userType, userData, email]);

  // ✅ Central login handler for both email/password & Google
  const loginUser = ({ email, userType, userData = null }) => {
    setLogin(true);
    setEmail(email);
    setUserType(userType);
    setUserData(userData || { email, userType }); // fallback if full data not fetched
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        email,
        userType,
        userData,
        loginUser,
        setLogin,
        setEmail,
        setUserType,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3. Hook to use context
export const useAuth = () => useContext(AuthContext);
import { createContext, useContext, useState, useEffect } from "react";

// 1. Create context
const AuthContext = createContext();

// 2. Create provider
export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  const [userType, setUserType] = useState("player");
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState();



  // Auto-read from localStorage on app load
  useEffect(() => {
    const storedLogin = localStorage.getItem("login") === "true";
    const storedType = localStorage.getItem("userType");
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    setLogin(storedLogin);
    if (storedType) setUserType(storedType);
    if (storedUser) setUserData(storedUser);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("login", login);
    localStorage.setItem("userType", userType);
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [login, userType, userData]);

  return (
    <AuthContext.Provider
      value={{
        login,
        email,
        setEmail,
        userType,
        userData,
        setLogin,
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

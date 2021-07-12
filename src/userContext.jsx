import React, { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        setUser(jwtDecode(token));
        setToken(token);
      } catch {}
    }
  }, []);

  const logOut = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={[user, token, logOut]}>
      {children}
    </UserContext.Provider>
  );
};

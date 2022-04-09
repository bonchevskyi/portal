import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const getAuth = async () => {
    try {
      const response = await axios.get('/login');
      if (response?.data?.loggedIn === true) {
        var username = response?.data?.auth?.username;
        var role_id = response?.data?.auth?.role_id;
        var user_id = response?.data?.auth?.user_id;
        setAuth({ user_id, username, role_id });
      } else if (response?.data?.loggedIn === false) {
        setAuth({});
      }
    } catch (error) {
      console.log('AuthProvider ERROR: ', error);
    }
  };

  const [auth, setAuth] = useState(() => {
    const json = localStorage.getItem('auth');
    const saved = JSON.parse(json);
    return saved || {};
  });

  useEffect(() => {
    getAuth();

    return () => {
      getAuth();
    };
  }, [setAuth]);

  const values = { auth, setAuth };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;

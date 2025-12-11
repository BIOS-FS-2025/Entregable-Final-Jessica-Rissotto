import { createContext, useContext, useState, useEffect } from 'react';
import api, { setAuthToken } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('tasknest_user');
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setAuthToken(parsed.token);
    }
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    setUser(data);
    localStorage.setItem('tasknest_user', JSON.stringify(data));
    setAuthToken(data.token);
  };

  const register = async (name, email, password) => {
    const { data } = await api.post('/auth/register', { name, email, password });
    setUser(data);
    localStorage.setItem('tasknest_user', JSON.stringify(data));
    setAuthToken(data.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tasknest_user');
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

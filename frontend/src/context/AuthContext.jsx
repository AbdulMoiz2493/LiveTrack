import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = await authService.getMe(token);
          setUser(userData);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const { token, user } = await authService.login(email, password);
      localStorage.setItem('token', token);
      setUser(user);
      navigate('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const register = async (username, email, password) => {
    try {
      const { token, user } = await authService.register(username, email, password);
      localStorage.setItem('token', token);
      setUser(user);
      navigate('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
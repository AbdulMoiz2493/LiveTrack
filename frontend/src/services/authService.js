import axios from 'axios';

const API_URL = 'http://localhost:4000'

const register = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, {
    username,
    email,
    password,
  });
  return response.data;
};

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, {
    email,
    password,
  });
  return response.data;
};

const getMe = async (token) => {
  const response = await axios.get(`${API_URL}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default { register, login, getMe };
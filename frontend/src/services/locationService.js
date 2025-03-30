import axios from 'axios';

const API_URL = 'http://localhost:4000'

const saveLocation = async (userId, location) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `${API_URL}/api/locations`,
    { ...location, userId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const getLocations = async (userId) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/api/locations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const getLocationHistory = async (userId, startDate, endDate) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(
    `${API_URL}/api/locations/history/${userId}`,
    {
      params: { startDate, endDate },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export default { saveLocation, getLocations, getLocationHistory };
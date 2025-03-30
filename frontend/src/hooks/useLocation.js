import { useState, useEffect } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (err) => {
        setError(err.message);
      },
      { enableHighAccuracy: true, maximumAge: 10000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { location, error };
};

export default useLocation;
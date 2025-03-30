import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import locationService from '../services/locationService';
import { useAuth } from '../context/AuthContext';
import { MapPin, Calendar, PlusCircle } from 'lucide-react';

const LocationHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savingLocation, setSavingLocation] = useState(false);
  const { user } = useAuth();
  const [dateRange, setDateRange] = useState({
    start: format(new Date().setDate(new Date().getDate() - 7), 'yyyy-MM-dd'),
    end: format(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd'), // Include today fully
  });

  useEffect(() => {
    fetchLocationHistory();
  }, [dateRange]);

  const fetchLocationHistory = async () => {
    try {
      setLoading(true);
      const data = await locationService.getLocationHistory(
        user._id,
        new Date(dateRange.start).toISOString(),
        new Date(dateRange.end).toISOString()
      );
      setHistory(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const saveCurrentLocation = async () => {
    try {
      setSavingLocation(true);
      
      const getCurrentPosition = () => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          });
        });
      };
      
      const position = await getCurrentPosition();
      const { latitude, longitude, accuracy, speed } = position.coords;
      const timestamp = new Date().toISOString();
      
      const newLocation = { 
        latitude, 
        longitude, 
        accuracy, 
        speed: speed || 0,
        timestamp // Explicitly include timestamp
      };
      
      const savedLocation = await locationService.saveLocation(user._id, newLocation);
      
      // Add the new location to the history directly
      setHistory(prevHistory => [savedLocation, ...prevHistory]);
      
    } catch (err) {
      setError('Failed to save current location');
      console.error('Error saving location:', err);
    } finally {
      setSavingLocation(false);
    }
  };

  if (loading && history.length === 0) { // Only show loading for initial load
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Location History</h2>
        
        {/* Date Range Selector */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <span className="text-gray-500">to</span>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={fetchLocationHistory}
            disabled={loading}
            className="ml-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition"
          >
            Refresh
          </button>
        </div>
        
        {/* Save Current Location Button */}
        <div className="mb-6">
          <button
            onClick={saveCurrentLocation}
            disabled={savingLocation}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <PlusCircle className="h-5 w-5" />
            <span>{savingLocation ? 'Saving Location...' : 'Save Current Location'}</span>
          </button>
        </div>

        {/* Status message */}
        {error && (
          <div className="bg-red-50 p-4 rounded-md mb-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        {loading && history.length > 0 && (
          <div className="text-gray-500 italic mb-4">Refreshing data...</div>
        )}

        {/* History List */}
        {history.length === 0 ? (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No location history found for the selected date range</p>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((location, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <div className="text-sm text-gray-500">
                    {format(new Date(location.timestamp), 'PPpp')}
                  </div>
                  <div className="mt-1">
                    <span className="text-gray-700">
                      Lat: {location.latitude.toFixed(6)}, Long: {location.longitude.toFixed(6)}
                    </span>
                  </div>
                  {location.accuracy && (
                    <div className="text-sm text-gray-500">
                      Accuracy: {location.accuracy.toFixed(2)}m
                    </div>
                  )}
                  {location.speed && location.speed > 0 && (
                    <div className="text-sm text-gray-500">
                      Speed: {location.speed.toFixed(2)} m/s
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ textAlign: 'center', color: '#9e9e9e', fontSize: '14px', padding: '10px 0' }}>
          <p>© {new Date().getFullYear()} LiveTrack. All rights reserved. </p>
        </div>
    </div>
  );
};

export default LocationHistory;
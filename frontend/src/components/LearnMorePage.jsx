import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LearnMorePage = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  
  useEffect(() => {
    // Intersection Observer for fade animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Target all sections to animate
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
      observer.observe(section);
    });
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  
  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactModal(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar - same as homepage for consistency */}
      <nav className="p-4 bg-white border-b border-gray-200 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <Link to="/" className="text-2xl font-bold text-blue-600">LiveTrack</Link>
        </div>
        <div className="flex gap-3">
          <Link to="/login" className="px-4 py-2 text-sm font-medium rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300">Login</Link>
          <Link to="/register" className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">Signup</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-16 transition-opacity duration-1000 animate-fade-in">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About LiveTrack</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how LiveTrack helps you stay connected with your loved ones through secure, real-time location sharing.
          </p>
        </div>

        {/* What is LiveTrack */}
        <section className="mb-16 transition-all duration-1000 transform">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What is LiveTrack?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                LiveTrack is a secure, privacy-focused location sharing platform that enables you to create rooms where friends and family can see each other's real-time locations.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Whether you're coordinating meetups, ensuring loved ones arrive safely at their destination, or staying connected during travel, LiveTrack provides peace of mind through simple, intuitive location sharing.
              </p>
            </div>
            <div className="md:w-1/2 bg-blue-50 p-6 rounded-xl">
              <div className="aspect-w-16 aspect-h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 transition-all duration-1000 transform">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How LiveTrack Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Create a Room</h3>
              <p className="text-gray-600 text-center">
                Set up a private room for your group. Name it, customize settings, and set an optional expiration time.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Invite Members</h3>
              <p className="text-gray-600 text-center">
                Add friends and family by sharing a secure invitation link or QR code that only works for invited members.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Share Locations</h3>
              <p className="text-gray-600 text-center">
                Once connected, all room members can see each other's locations updating in real-time on an interactive map.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16 transition-all duration-1000 transform">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Perfect For:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Families</h3>
                <p className="text-gray-600">
                  Keep track of your children's whereabouts, know when your spouse is heading home, or check if grandparents arrived safely at their destination.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Friend Meetups</h3>
                <p className="text-gray-600">
                  Coordinate arrivals at concerts, festivals, or restaurants. Find each other easily in crowded places without constant messaging.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Business Teams</h3>
                <p className="text-gray-600">
                  Track field teams, delivery personnel, or coordinate with colleagues during conferences and business travel.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Special Events</h3>
                <p className="text-gray-600">
                  Create temporary tracking rooms for weddings, concerts, hiking trips, or sports events to keep everyone connected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16 bg-gray-50 p-8 rounded-xl transition-all duration-1000 transform">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">End-to-End Encryption</h3>
                <p className="text-gray-600 text-sm">
                  Your location data is encrypted and only accessible to the people you choose to share with.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Temporary Sharing</h3>
                <p className="text-gray-600 text-sm">
                  Set expiration times for sharing sessions - from hours to days.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a2 2 0 011.44.6l.71.71a2 2 0 010 2.83l-.7.7a2.5 2.5 0 014.9 0H17a1 1 0 001-1v-2a1 1 0 00-.29-.71l-2-2A1 1 0 0015 9h-5V4a1 1 0 00-1-1H3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Low Battery Impact</h3>
                <p className="text-gray-600 text-sm">
                  Optimized to minimize battery drain while providing accurate location updates.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Custom Notifications</h3>
                <p className="text-gray-600 text-sm">
                  Get alerts when friends arrive at or leave specific locations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Easy Interface</h3>
                <p className="text-gray-600 text-sm">
                  Simple, intuitive controls that anyone can use - no technical knowledge required.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">In-App Messaging</h3>
                <p className="text-gray-600 text-sm">
                  Communicate with group members directly within the app to coordinate meetups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="mb-16 transition-all duration-1000 transform">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Your Privacy Matters</h2>
            <p className="text-center text-gray-600 mb-6">
              We built LiveTrack with privacy as our core value. You always control who sees your location and for how long.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-gray-600">
                  We never sell your location data to advertisers or third parties.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-gray-600">
                  End-to-end encryption ensures only invited members can see locations.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-gray-600">
                  Pause sharing anytime with a single tap - you're always in control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 transition-all duration-1000 transform">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Is my location data secure?</h3>
              <p className="text-gray-600">
                Yes. We use end-to-end encryption to ensure your location is only visible to the people you've explicitly invited to your rooms. Your data is never sold or shared with third parties.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Will LiveTrack drain my battery?</h3>
              <p className="text-gray-600">
                LiveTrack is designed to be battery-efficient. We use intelligent algorithms that adjust location update frequency based on movement and optimize background processing to minimize battery impact.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How accurate is the location tracking?</h3>
              <p className="text-gray-600">
                LiveTrack provides highly accurate location data within 5-10 meters in most conditions. Accuracy may vary slightly based on your device's GPS capabilities and environmental factors.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Can I temporarily stop sharing my location?</h3>
              <p className="text-gray-600">
                Absolutely. You can pause location sharing at any time with a single tap, and resume whenever you're ready. Your privacy is always under your control.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-16 transition-all duration-1000 transform">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Ready to stay connected?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust LiveTrack to stay connected with their loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300">
              Create Your Account
            </Link>
            <button
              onClick={handleContactClick}
              className="px-8 py-4 bg-gray-100 text-gray-800 text-lg font-medium rounded-lg shadow-md hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Support
            </button>
          </div>
        </section>
      </main>
      
      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl transform transition-all animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H8a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold">Email Us</h4>
                  <p className="text-gray-600">support@livetrack.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold">Call Us</h4>
                  <p className="text-gray-600">+1 (800) 555-LIVE</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold">Live Chat</h4>
                  <p className="text-gray-600">Available 24/7 in the app</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="3" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-xl font-bold text-blue-600">LiveTrack</span>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.035 10.035 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase mb-2">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Features</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Pricing</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">FAQ</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Download App</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase mb-2">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">About Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Careers</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Partners</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Press</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase mb-2">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Help Center</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Contact Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Status</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Tutorials</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase mb-2">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Cookie Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Data Processing</a></li>
                </ul>
              </div>
            </div>
            
            <div className="text-sm text-gray-500 border-t border-gray-200 pt-6">
              <p>© {new Date().getFullYear()} LiveTrack. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnMorePage;
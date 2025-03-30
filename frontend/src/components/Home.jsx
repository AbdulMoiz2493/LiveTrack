import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="p-4 bg-white border-b border-gray-200 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <h1 className="text-2xl font-bold text-blue-600">LiveTrack</h1>
        </div>
        <div className="flex gap-3">
          <Link to="/login" className="px-4 py-2 text-sm font-medium rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300">Login</Link>
          <Link to="/register" className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">Signup</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-20">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-blue-600">Real-Time Location Sharing</h2>
          <p className="text-lg max-w-2xl mb-8 text-gray-600 leading-relaxed">
            Stay connected with your friends and track their live locations securely.
            Create private rooms and share real-time locations effortlessly.
          </p>
          <br></br><br></br>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login" className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300">
              Get Started
            </Link>
            <Link to="/learn-more" className="px-8 py-4 bg-gray-100 text-gray-800 text-lg font-medium rounded-lg shadow-md hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300">
              Learn More
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Sharing</h3>
              <p className="text-gray-600">End-to-end encrypted location data that only your trusted contacts can access.</p>
            </div>
            
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Real-Time Updates</h3>
              <p className="text-gray-600">Locations update instantly with minimal battery consumption.</p>
            </div>
            
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Private Groups</h3>
              <p className="text-gray-600">Create custom groups for family, friends, or special events.</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Call to Action */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Ready to start tracking?</h3>
          <p className="text-gray-600 mb-8">Join thousands of users who trust Live Tracker for their location sharing needs.</p>
          <Link to="/register" className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Create Your Account
          </Link>
        </div>
      </section>
      
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

export default HomePage;
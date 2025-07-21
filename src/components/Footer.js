import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 rounded-xl shadow-lg flex items-center justify-center border border-gray-200">
              <span className="text-gray-700 font-bold text-lg" style={{ fontFamily: 'serif', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>V</span>
            </div>
            <div>
              <span className="text-xl font-bold">VENUS</span>
              <div className="text-green-400 text-sm tracking-wider">E-COM CARE</div>
            </div>
          </div>
          <p className="text-gray-400">
            © 2025 Venus E-Com Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/venuslogo.png" 
              alt="Venus Logo" 
              className="w-10 h-10 rounded-xl shadow-lg border border-gray-200"
            />
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

import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} OnCall AI. All rights reserved.
          </p>
          <nav className="flex gap-6" aria-label="Footer navigation">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

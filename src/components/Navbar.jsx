// Navbar.jsx
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

const links = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'projects', path: '/projects' },
  { name: 'contact', path: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  // Simple function to handle navigation and scrolling
  const handleNavigation = (path) => {
    setOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Show/hide scroll button based on scroll position
  window.onscroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-black bg-opacity-30 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-300">
            <button
              onClick={() => handleNavigation('/')}
              className="text-2xl font-bold text-gray-300 hover:text-white bg-transparent border-none cursor-pointer"
            >
              Galib
            </button>
          </div>

          <div className="hidden md:flex space-x-6">
            {links.map(({ name, path }, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(path)}
                className="cursor-pointer hover:text-gray-300 capitalize bg-transparent border-none text-white"
              >
                {name}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden bg-black px-4 py-2 space-y-2">
            {links.map(({ name, path }, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(path)}
                className="block py-2 capitalize w-full text-left bg-transparent border-none text-white"
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-black border border-gray-700 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}

      {/* Add padding to prevent content from being hidden under the navbar */}
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;

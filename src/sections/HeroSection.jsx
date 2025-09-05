// HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4 overflow-hidden neon-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neon background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gray-700 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gray-800 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Very subtle grid lines */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-10"></div>
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-10"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent neon-glow">Galib</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent neon-text">
          MERN Stack Developer
        </h2>
        <div className="relative max-w-2xl mx-auto mb-10 overflow-hidden">
          <p className="text-xl sm:text-2xl text-gray-200 inline-block">
            I build modern, responsive, and dynamic web applications with MongoDB, Express, React, and Node.js.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/projects"
            className="px-8 py-4 bg-gradient-to-r from-gray-800 to-black rounded-full text-lg font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 neon-border"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border-2 border-gray-600 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="h-8 w-8 p-1 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


// Home.jsx (Hero)
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#0B0B2E] via-[#1E1E60] to-[#3F3FB3]"
    >
      <div className="container mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Hi, I&apos;m <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Galib</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-100">
          A MERN Stack Developer passionate about crafting dynamic, responsive, and engaging web applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md text-base font-medium uppercase tracking-wide hover:from-purple-600 hover:to-pink-500 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-md text-base font-medium uppercase tracking-wide hover:from-gray-600 hover:to-black transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
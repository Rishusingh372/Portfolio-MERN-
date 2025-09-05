// ProjectCard.jsx
import React, { useState } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gradient-to-br from-black to-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-56 object-cover transition-all duration-500 ease-in-out"
          style={{
            filter: isHovered ? 'brightness(70%)' : 'brightness(100%)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-800 to-black text-white font-bold py-2 px-4 rounded-full flex items-center transition-all duration-300 transform hover:scale-110 border border-gray-700"
          >
            View Project <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.desc}</p>
        <div className="pt-2 border-t border-gray-700">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white font-medium flex items-center"
          >
            View on GitHub <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

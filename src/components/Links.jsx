import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Links = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center space-x-4 p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
        <a
          href="https://github.com/DLOADIN"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-black transform hover:scale-110 transition-all duration-500 ease-in"
        >
          <Github size={24} />
        </a>
        <a
          href="https://instagram.com/__m.a.n.z.i"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-black transform hover:scale-110 transition-all duration-500 ease-in"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/manzi-david-653769299/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-black transform hover:scale-110 transition-all duration-500 ease-in"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Links;

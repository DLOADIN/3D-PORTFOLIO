import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Links = () => {
  return (
    <>
    <div className="grid items-center justify-center ">
      <div className="flex items-center justify-center mb-2  space-x-4 py-4 bg-white bg-opacity-5 backdrop-brightness-200 rounded-lg shadow-lg">
        <a
          href="https://github.com/DLOADIN"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#915EFF] transform hover:scale-110 transition-all duration-500 ease-in pr-4 pl-5"
        >
          <Github size={35} />
        </a>
        <a
          href="https://instagram.com/__m.a.n.z.i"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#915EFF] transform hover:scale-110 transition-all duration-500 ease-in"
        >
          <Instagram size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/manzi-david-653769299/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#915EFF] transform hover:scale-110 transition-all duration-500 ease-in  pl-4 pr-5"
        >
          <Linkedin size={35} />
        </a>
      </div>
    </div>
    <div className='flex flex-col md:flex-row justify-between items-center px-10 py-2'>
        <h5 className='pl-7 text-center md:text-left'>
        This site was rendered in <code className="text-[#915EFF]">React JS</code> with the <code className="text-[#915EFF]">three.js</code> library by David
      </h5>
      <p className='text-center md:text-right mt-4 md:mt-0'>© 2024 ALL RIGHTS RESERVED</p>
    </div>


  </>
  );
};

export default Links;
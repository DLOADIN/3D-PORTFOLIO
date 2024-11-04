import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-4 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-t-sky-400 border-r-sky-400 border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
        <div className="absolute top-6 left-6 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading
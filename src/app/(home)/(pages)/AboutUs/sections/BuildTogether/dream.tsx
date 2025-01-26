import React from 'react';

const DreamSection = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl mb-8">WHAT’S YOUR DREAM?</h2>
      <p className="mb-8  text-xl">The Projekt isn’t just about building businesses; it’s about building dreams. We don’t say <br /> yes to every idea—we say yes to the ones we believe in so we can give them our all.</p>
      <p className="mb-24 text-sky-200">Are you ready to turn your dream into reality?</p>
      <a href="#" className={`px-8 py-3 border rounded-lg transition duration-300 ease-in-out text-white text-sm bg-black hover:bg-white hover:text-black`}>
            LET’S BUILD TOGETHER
        </a>
    </div>
  );
};

export default DreamSection;
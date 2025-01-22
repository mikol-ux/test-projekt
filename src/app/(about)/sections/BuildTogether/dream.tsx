import React from 'react';

const DreamSection = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl mb-8">WHAT’S YOUR DREAM?</h2>
      <p className="mb-8 text-muted">The Projekt isn’t just about building businesses; it’s about building dreams. We don’t say <br /> yes to every idea—we say yes to the ones we believe in so we can give them our all.</p>
      <p className="mb-20 text-sky-blue">Are you ready to turn your dream into reality?</p>
      <a href="#" className={`px-8 py-3 border rounded-lg transition duration-300 ease-in-out text-white bg-black hover:bg-white hover:text-black`}>
            LET’S BUILD TOGETHER
        </a>
    </div>
  );
};

export default DreamSection;
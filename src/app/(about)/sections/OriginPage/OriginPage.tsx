import React from "react";

const OriginsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-start pt-40 pl-12">
      <div className="text-left max-w-4xl px-6">
        <div>
          <div className="text-6xl md:text-8xl mb-4">OUR</div>
          <div className="text-6xl md:text-8xl mb-4">ORIGINS</div>
        </div>
        <h2 className="text-xl md:text-2xl font-light mb-6">
          TURNING DREAMS INTO REALITY
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          We exist to help businesses transition seamlessly into <br /> 
          the digital era by creating tools, brands, and teams that <br />
          redefine what&apos;spossible.
        </p>
        <button className="px-8 py-3 border border-white-400 rounded-lg hover:bg-white-800 transition duration-300">
          THE PROJEKT STORY
        </button>
      </div>
    </div>
  );
};


export default OriginsPage;
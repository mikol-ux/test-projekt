"use client";
import React, { useState, useEffect } from "react";

const OriginsPage: React.FC = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    setIsLightTheme(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsLightTheme(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className={`min-h-screen ${isLightTheme ? 'bg-white text-black' : 'bg-black text-white'} flex flex-col items-start pt-40 pl-12`}>
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
          redefine what&apos;s possible.
        </p>
        <button className={`px-8 py-3 border rounded-lg transition duration-300 ${isLightTheme ? 'border-black bg-white text-black hover:bg-black hover:text-white' : 'border-white bg-black text-white hover:bg-white hover:text-black'}`}>
          THE PROJEKT STORY
        </button>
      </div>
    </div>
  );
};
export default OriginsPage;
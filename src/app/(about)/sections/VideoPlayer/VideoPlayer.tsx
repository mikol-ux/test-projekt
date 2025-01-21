"use client";
import React, { useState, useEffect } from "react";

const VideoPlayer: React.FC = () => {
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
    <div className={`min-h-screen ${isLightTheme ? 'bg-white text-black' : 'bg-black text-white'} flex flex-col items-center justify-center`}>
      <video
        className="w-full max-w-4xl"
        controls
        poster="/img/aboutUs/video-player-image.png"
      >
        <source src="path/to/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
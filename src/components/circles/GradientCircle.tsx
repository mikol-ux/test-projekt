"use client";

import { FC, useRef } from "react";

interface GradientCircleProps {
  text: string;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GradientCircle: FC<GradientCircleProps> = ({ text, className }) => {
  const circleRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={circleRef}
      className={`relative w-32 h-32 md:w-72 md:h-72 rounded-full border-2 border-blue-300 shadow-[0px_10px_20px_rgba(173,216,230,0.2)] flex justify-center items-center text-center mask-gradient transition-shadow duration-300 ease-in-out hover:shadow-[0px_15px_25px_rgba(72,187,255,0.6)] ${className}`}
      style={{
        boxShadow: "-3px 4px 5px rgba(190, 232, 255, 0.3)",
        // border: "2px linear-gradient(to top, rgba(114, 187, 230, 0.2),rgba(72, 187, 255, 1))",
        borderRadius: "50%",
        transition: "box-shadow 0.3s ease-in-out",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
      onMouseEnter={() => {
        if (circleRef.current) {
          circleRef.current.style.boxShadow = "0 0 10px 5px rgba(72, 187, 255, 0.6)";
        }
      }}
      onMouseLeave={() => {
        if (circleRef.current) {
          circleRef.current.style.boxShadow = "-3px 4px 5px rgba(190, 232, 255, 0.3)";
        }
      }}
    >
      <span className="relative text-deep-blue text-sm"></span>
    </div>
  );
};

export default GradientCircle;
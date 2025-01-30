import React, { FC } from 'react';

const BuildingPublic: FC = () => {
  return (
    <div className="max-w-full mx-auto px-4">
      <div className="flex ml-4 md:ml-16 flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Text Content Component */}
        <div className="relative pl-10 flex-1 lg:w-[40%]">
          <div
            style={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: '50%',
              width: '4px',
              backgroundColor: '#0ea5e9', // Tailwind's sky-blue color
            }}
          ></div>
          <div
            style={{
              content: '""',
              position: 'absolute',
              top: '50%',
              left: 0,
              bottom: 0,
              width: '1px',
              marginLeft: 2,
              backgroundColor: '#cccccc', // Tailwind's sky-blue color
            }}
          ></div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl mb-2">BUILDING</h1>
            <h1 className="text-2xl sm:text-3xl md:text-5xl text-sky-blue mb-6">WITH THE PUBLIC</h1>
            <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl mb-12">
              Building with the public is about co-creating solutions that truly matter. By engaging communities directly, we prioritize their needs, ensuring our tools address real-world challenges. From coordinating disaster relief to creating decentralized educational platforms and mental health apps, our mission is to amplify voices and drive collective change. Together, we can turn technology into a lifeline.
            </p>
            <a className="px-2 md:px-8 py-3 border rounded-lg transition duration-300 ease-in-out text-white bg-black hover:bg-white hover:text-black" href='#'>JOIN THE REPUBLIC</a>
          </div>
        </div>

        {/* Animation Component */}
        <div className="w-full lg:w-[60%] mt-8 lg:mt-0 flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        {/* Left Circle */}
        <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80
                      rounded-full z-30
                      absolute left-0 translate-x-[60%] md:translate-x-[50%] lg:translate-x-[40%]
                      xs:translate-x-[20%]
                      transition-all duration-300
                      backdrop-blur-xl bg-white/10
                      shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)]">
        </div>

        {/* Middle Circle */}
        <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52
                      rounded-full z-20 relative
                      transition-all duration-300">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-full p-[1px]">
            <div className="w-full h-full rounded-full bg-gradient-to-bl from-[#438DB5] via-[#438DB5] to-[#BEE8FF]">
            </div>
          </div>
          {/* Inner White Shadow */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_2px_rgba(255,255,255,1)]">
          </div>
          {/* Content Area */}
          <div className="absolute inset-[2px] bg-white/10 rounded-full">
          </div>
        </div>

        {/* Right Circle */}
        <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80
                      rounded-full z-30
                      absolute right-0 -translate-x-[60%] md:-translate-x-[50%] lg:-translate-x-[40%]
                      xs:-translate-x-[20%]
                      transition-all duration-300
                      backdrop-blur-xl bg-white/10
                      shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)]">
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default BuildingPublic;
import React, { FC } from 'react';

const BuildingPublic: FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Text Content Component */}
        <div className="relative pl-10">
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
          <div className="relative">
            <h1 className="text-2xl md:text-5xl mb-2">BUILDING</h1>
            <h1 className="text-2xl md:text-5xl text-sky-blue mb-6">WITH THE PUBLIC</h1>
            <p className="leading-relaxed mb-12">
              Building with the public is about co-creating solutions that truly matter. By engaging communities directly, we prioritize their needs, ensuring our tools address real-world challenges. From coordinating disaster relief to creating decentralized educational platforms and mental health apps, our mission is to amplify voices and drive collective change. Together, we can turn technology into a lifeline.
            </p>
            <a className="px-8 py-3 border rounded-lg transition duration-300 ease-in-out text-white bg-black hover:bg-white hover:text-black" href='#'>JOIN THE REPUBLIC</a>
          </div>
        </div>

        {/* Animation Component */}
        <div className="relative w-full h-72 md:w-96 md:h-96 mt-8 group">
          <div className="absolute w-full md:w-120 h-52 md:h-72">
            <div className="absolute w-52 h-52 bg-gradient-to-l from-gray-900 via-transparent to-transparent rounded-full top-10 left-0 z-20 group-hover:opacity-50"></div>
            <div className="absolute w-40 h-44 bg-gradient-to-tl from-transparent via-deep-blue to-transparent rounded-full top-14 right-[80] z-10" style={{ boxShadow: '-10px 0 20px 5px rgba(113, 160, 189, 0.5), 10px 0 20px 5px rgba(140, 161, 206, 0.5)' }}></div>
            <div className="absolute w-52 h-52 border-l bg-gradient-to-r from-gray-900 via-transparent to-transparent rounded-full top-10 left-60 z-20 group-hover:opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingPublic;

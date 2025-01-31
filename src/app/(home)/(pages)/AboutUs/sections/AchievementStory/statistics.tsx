import React from 'react';

interface StatCardProps {
  value: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, title, description }) => {
  return (
    <div className="relative w-full min-w-[280px] max-w-[300px] h-[232px] p-[20px] text-white border-neutral-900 rounded-lg overflow-hidden group">
      {/* Default Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-cyan-900 z-0"></div>

      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-sky-400 opacity-0 z-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between h-full">
        <h1 className="text-4xl md:text-7xl">{value}</h1>
        <div className="mt-auto">
          <h4 className="text-lg mb-1">{title}</h4>
          <p className="text-xs text-neutral-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section className="tpk-contained mx-auto px-8 sm:px-12 lg:px-16 py-12">
      <div className="text-center mb-24">
        <h2 className="text-2xl md:text-4xl">THE NUMBERS THAT TELL OUR STORY</h2>
      </div>

      {/* General Achievements Section */}
      <div className="mb-16">
        <h2 className="text-sky-500 text-2xl mb-6 text-center md:text-left">GENERAL <br /> ACHIEVEMENTS</h2>
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="lg:flex-1">
            <p className="mb-4 text-base text-center lg:text-left">By engaging communities directly, we prioritize their needs, ensuring our tools address real-world challenges.</p>
          </div>
          <div className="md:w-auto flex flex-col sm:flex-row gap-6">
            {/* Row 1: StatCard and first div */}
            <div className="flex-1">
              <StatCard
                value="30+"
                title="FOUNDERS HELPED"
                description="From concept to execution, we’ve partnered with businesses on their journey to success."
              />
            </div>
            <div className="relative w-full sm:w-[300px] h-[232px] p-6 rounded-lg overflow-hidden group border border-neutral-900">
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black to-sky-400 opacity-0 z-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"></div>
              {/* Content */}
              <div className="relative z-20">
                <h1 className="text-5xl md:text-7xl mb-12">15+</h1>
                <h4 className="text-lg md:text-lg mb-1">STREAMLINED OPERATIONS</h4>
                <p className="text-xs text-neutral-400">Delivering tools and solutions to help teams work better together.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Row 2: Second div */}
        <div className="relative w-full md:w-[620px] h-[151px] p-6 rounded-lg overflow-hidden group ml-auto">
          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black to-sky-400 opacity-0 z-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"></div>
          {/* Content */}
          <div className="relative z-20">
            <h2 className="text-lg md:text-3xl mb-4">GLOBAL REACH</h2>
            <p className="text-base text-neutral-400">Serving clients across multiple countries, building connections that drive impact.</p>
          </div>
        </div>
        <hr className="h-px my-8 bg-gradient-to-r from-white via-sky-200 to-cyan-600 border-0" />
      </div>

      {/* Rogue Division */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:flex-1 sm:w-auto text-center sm:text-left">
            <h3 className="text-sky-500 text-2xl mb-2 text-center md:text-left">ROGUE</h3>
            <h5 className="mt-4 mb-6 text-base text-center md:text-left">(MULTIMEDIA DIVISION)</h5>
            <a href="#" className="px-6 py-3 inline-block border rounded-lg bg-black text-sm text-white hover:bg-white hover:text-black transition-all duration-1000 ease-in-out">
              GO ROGUE
            </a>
          </div>
          <div className="md:w-auto flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex-1">
              <StatCard
                value="30+"
                title="CREATIVE PROJECTS DELIVERED"
                description="From concept to execution, we’ve partnered with businesses on their journey to success."
              />
            </div>
            <div className="relative w-[300px] h-[232px] p-6 rounded-lg overflow-hidden group border border-neutral-900 shadow">
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black to-sky-400 opacity-0 z-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col h-full">
                <p className="text-2xl">CONTENT REVOLUTION</p>
                <p className="text-xs mt-auto text-neutral-400">Redefining content creation across <b>tech, education, and lifestyle industries.</b></p>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gradient-to-r from-white via-sky-200 to-cyan-600 border-0" />
      </div>

      {/* Watchman Division */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:flex-1 sm:w-auto text-center sm:text-left">
            <h3 className="text-sky-500 text-2xl mb-2 text-center md:text-left">WATCHMAN</h3>
            <h5 className="mt-4 mb-6 text-base text-center md:text-left">(OFFSHORE HIRING DIVISION)</h5>
            <a href="#" className="px-6 py-3 inline-block border rounded-lg bg-black text-sm text-white hover:bg-white hover:text-black transition-all duration-1000 ease-in-out">
              HIRE TALENT FOR LESS
            </a>
          </div>
          <div className="md:w-auto flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex-1">
              <StatCard
                value="50+"
                title="TEAMS BUILT ACROSS BORDERS"
                description="From concept to execution, we’ve partnered with businesses on their journey to success."
              />
            </div>
            <div className="relative w-[300px] h-[232px] p-6 rounded-lg overflow-hidden group border border-neutral-900 shadow">
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black to-sky-400 opacity-0 z-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col h-full">
                <p className="mb-4 text-2xl">SMART HIRING SAVINGS</p>
                <p className="text-xs mt-auto text-neutral-400">Reduced hiring costs by up to <b>90% for businesses scaling smarter.</b></p>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gradient-to-r from-white via-sky-200 to-cyan-600 border-0" />
      </div>

      {/* The Forge Division */}
      <div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:flex-1 sm:w-auto text-center sm:text-left">
            <h3 className="text-sky-500 text-2xl mb-2 text-center md:text-left">THE FORGE</h3>
            <h5 className="mt-4 mb-6 text-base text-center md:text-left">(COMMUNITY FOR EARLY FOUNDERS)</h5>
            <a href="#" className="px-6 py-3 inline-block border rounded-lg bg-black text-white text-sm hover:bg-white hover:text-black transition-all duration-1000 ease-in-out">
              JOIN THE FORGE
            </a>
          </div>
          <div className="md:w-auto flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex-1">
              <StatCard
                value="100+"
                title="VISIONARY FOUNDERS CONNECTED"
                description="From concept to execution, we’ve partnered with businesses on their journey to success."
              />
            </div>
            <div className="relative w-[300px] h-[232px] p-6 rounded-lg overflow-hidden group border border-neutral-900 shadow">
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black to-sky-400 opacity-0 z-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col h-full">
                <p className="mb-4 text-2xl">Innovative Solutions</p>
                <p className="text-xs mt-auto text-neutral-400">A thriving community <b>fostering ideas into impactful solutions.</b></p>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gradient-to-r from-white via-sky-200 to-cyan-600 border-0" />
      </div>
    </section>
  );
};

export default StatisticsSection;
import React from 'react';

interface StatCardProps {
  value: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, title, description }) => {
  return (
    <div className="w-[300px] h-[232px] bg-gradient-to-br from-black via-black to-cyan-900 p-[20px] text-white border-neutral-900 rounded-lg shadow w-full h-auto hover:bg-gradient-radial hover:from-black hover:to-sky-400 flex flex-col justify-between duration-2000">
      <h1 className="text-5xl md:text-7xl">{value}</h1>
      <div className="mt-auto">
        <h4 className="text-lg md:text-lg mb-1">{title}</h4>
        <p className="text-xs">{description}</p>
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
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:flex-1">
            <p className="mb-4 text-base">By engaging communities directly, we prioritize their needs, ensuring our tools address real-world challenges.</p>
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
            <div className="w-[300px] h-[232px] border-neutral-900 p-6 border rounded-lg hover:bg-gradient-to-br hover:from-black hover:to-sky-400">
              <h1 className="text-5xl md:text-7xl mb-4">15+</h1>
              <h4 className="text-lg md:text-lg mb-1">STREAMLINED OPERATIONS</h4>
              <p className="text-xs">Delivering tools and solutions to help teams work better together.</p>
            </div>
          </div>
        </div>
        {/* Row 2: Second div */}
        <div className="md:w-[620px] h-[151px] col-span-1 md:col-span-2 border-neutral-900 p-6 rounded-lg shadow hover:bg-gradient-to-br hover:from-black hover:to-sky-400 mt-6 md:mt-6 ml-auto">
          <h2 className="text-lg md:text-3xl mb-4">GLOBAL REACH</h2>
          <p className="text-base">Serving clients across multiple countries, building connections that drive impact.</p>
        </div>
        <hr className="border-gray-300 my-8" />
      </div>

      {/* Rogue Division */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:flex-1">
            <h3 className="text-sky-500 text-2xl mb-2 text-center md:text-left">ROGUE</h3>
            <h5 className="mt-4 mb-6 text-base text-center md:text-left">(MULTIMEDIA DIVISION)</h5>
            <a href="#" className="px-6 py-3 inline-block border rounded-lg bg-black text-sm text-white hover:bg-white hover:text-black">
              GO ROGUE
            </a>
          </div>
          <div className="md:w-auto flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <StatCard
                value="30+"
                title="CREATIVE PROJECTS DELIVERED"
                description="From concept to execution, we’ve partnered with businesses on their journey to success."
              />
            </div>
            <div className="w-[300px] h-[232px] p-6 border border-neutral-900 rounded-lg shadow flex flex-col hover:bg-gradient-to-br hover:from-black hover:to-sky-400">
              <p className="text-2xl">CONTENT REVOLUTION</p>
              <p className="text-xs mt-auto">Redefining content creation across <b>tech, education, and lifestyle industries.</b></p>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-8" />
      </div>

      {/* Watchman Division */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:flex-1">
            <h3 className="text-sky-500 text-2xl mb-2 text-center md:text-left">WATCHMAN</h3>
            <h5 className="mt-4 mb-6 text-base text-center md:text-left">(OFFSHORE HIRING DIVISION)</h5>
            <a href="#" className="px-6 py-3 inline-block border rounded-lg bg-black text-sm text-white hover:bg-white hover:text-black">
              HIRE TALENT FOR LESS
            </a>
          </div>
          <div className="md:w-auto flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <StatCard
                value="50+"
                title="TEAMS BUILT ACROSS BORDERS"
                description="From concept to execution, we’ve partnered with businesses on their journey to success."
              />
            </div>
            <div className="w-[300px] h-[232px] p-6 border-neutral-900 rounded-lg shadow flex flex-col hover:bg-gradient-to-br hover:from-black hover:to-sky-400">
              <p className="mb-4 text-2xl">SMART HIRING SAVINGS</p>
              <p className="text-xs mt-auto">Reduced hiring costs by up to <b>90% for businesses scaling smarter.</b></p>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-8" />
      </div>

      {/* The Forge Division */}
      <div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:flex-1">
            <h3 className="text-sky-500 text-2xl mb-2 text-center md:text-left">THE FORGE</h3>
            <h5 className="mt-4 mb-6 text-base text-center md:text-left">(COMMUNITY FOR EARLY FOUNDERS)</h5>
            <a href="#" className="px-6 py-3 inline-block border rounded-lg bg-black text-white text-sm hover:bg-white hover:text-black">
              JOIN THE FORGE
            </a>
          </div>
          <div className="md:w-auto flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <StatCard
                value="100+"
                title="VISIONARY FOUNDERS CONNECTED"
                description="From concept to execution, we’ve partnered with businesses on their journey to success."
              />
            </div>
            <div className="w-[300px] h-[232px] p-6 border-neutral-900 rounded-lg flex flex-col hover:bg-gradient-to-br hover:from-black hover:to-sky-400">
              <p className="text-2xl">Innovative Solutions</p>
              <p className="text-xs mt-auto">A thriving community <b>fostering ideas into impactful solutions.</b></p>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-8" />
      </div>
    </section>
  );
};

export default StatisticsSection;

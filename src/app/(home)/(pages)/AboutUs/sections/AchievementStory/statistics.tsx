import React from 'react';

interface StatCardProps {
  value: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, title, description }) => {
  return (
    <div className="bg-gradient-to-r from-white to-gray-900 dark:from-black dark:to-gray-900 p-6 w-66 h-66 border border-gray-900 rounded-lg shadow">
      <h1 className="text-7xl mb-6">{value}</h1>
      <h4 className="text-xl mb-1">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section className="tpk-container py-12 px-6">
      <div className="text-center mb-20">
        <h2 className="text-3xl">THE NUMBERS THAT TELL OUR STORY</h2>
      </div>

        <div className='pl-24 pr-20 justify-center'>
            {/* General Achievements Section */}
            <h2 className="text-sky-blue text-xl">GENERAL <br /> ACHIEVEMENTS</h2>
            
            <div className='flex gap-2 mb-6 pb-12 border-b border-solid'>
                <div className='pr-12 pt-8 w-2/5'>
                    <p className='pb-4'>By engaging communities directly, we prioritize their needs, ensuring our tools address real-world challenges.</p>
                </div>
                <div className='flex-1 grid grid-cols-2 gap-2'>
                    <div>
                    <StatCard
                        value="30+"
                        title="FOUNDERS HELPED"
                        description="From concept to execution, we’ve partnered with businesses on their journey to success."
                    />
                    </div>
                    <div>
                    <StatCard
                        value="15+"
                        title="STREAMLINED OPERATIONS"
                        description="Delivering tools and solutions to help teams work better together."
                    />
                    </div>
                    <div className="col-span-2 p-6 border border-gray-900 rounded-lg shadow">
                        <h2 className="pb-8 text-2xl">GLOBAL REACH</h2>
                        <p className='text-sm'>Serving clients across multiple countries, building connections that drive impact.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <hr /> */}

        {/* Divisions Section */}
        {/* Rogue Division */}
        <div className='pl-24 pr-20 justify-center'>
            <div className='flex gap-2 mb-6 pb-12 border-b border-solid'>
                <div className='pr-12 pt-8 w-2/5'>
                    <h3 className="text-sky-blue text-xl mb-2">ROGUE</h3>
                    <h5 className='mt-4 mb-12'>(MULTIMEDIA DIVISION)</h5>
                    <a href="#" className={`px-8 py-3 border rounded-lg transition duration-300 ease-in-out text-white bg-black hover:bg-white hover:text-black`}>
                        GO ROGUE
                    </a>
                </div>
                <div className='flex-1 flex gap-x-4'>
                    <div className='flex-1'>
                    <StatCard
                        value="30+"
                        title="CREATIVE PROJECTS DELIVERED"
                        description="From concept to execution, we’ve partnered with businesses on their journey to success."
                    />
                    </div>
                    <div className='flex-1 max-w-sm p-6 border border-gray-900 rounded-lg shadow'>
                    <h5 className="mb-2 text-2xl tracking-tight pb-28">CONTENT REVOLUTION</h5>
                    <p className="mb-3 text-sm">Redefining content creation across <b>tech, education, and lifestyle industries.</b></p>
                    </div>
                </div>
            </div>
        </div>

        {/* Watchman Division */}
        <div className='pl-24 pr-20 justify-center'>
            <div className='flex gap-2 mb-6 pb-12 border-b border-solid'>
                <div className='pr-12 pt-8 w-2/5'>
                    <h3 className="text-sky-blue text-xl mb-2">WATCHMAN</h3>
                    <h5 className='mt-4 mb-12'>(OFFSHORE HIRING DIVISION)</h5>
                    <a href="#" className={`px-8 py-3 border rounded-lg transition duration-300 ease-in-out text-white bg-black hover:bg-white hover:text-black`}>
                        HIRE TALENT FOR LESS
                    </a>
                </div>
                <div className='flex-1 flex gap-x-4'>
                    <div className='flex-1'>
                    <StatCard
                        value="50+"
                        title="TEAMS BUILT ACROSS BORDERS"
                        description="From concept to execution, we’ve partnered with businesses on their journey to success."
                    />
                    </div>
                    <div className='flex-1 max-w-sm p-6 border border-gray-900 rounded-lg shadow'>
                    <h5 className="mb-2 text-2xl tracking-tight pb-28">SMART HIRING SAVINGS</h5>
                    <p className="mb-3 text-sm">Reduced hiring costs by up to <b>90% for businesses scaling smarter.</b></p>
                    </div>
                </div>
            </div>
        </div>

        {/* The Forge Division */}
        <div className='pl-24 pr-20 justify-center'>
            <div className='flex gap-2 mb-6 pb-12 border-b border-solid'>
                <div className='pr-12 pt-8 w-2/5'>
                    <h3 className="text-sky-blue text-xl mb-2">THE FORGE</h3>
                    <h5 className='mt-4 mb-12'>(COMMUNITY FOR EARLY FOUNDERS)</h5>
                    <a href="#" className={`px-8 py-3 border rounded-lg transition duration-300 ease-in-out text-white bg-black hover:bg-white hover:text-black`}>
                        JOIN THE FORGE
                    </a>
                </div>
                <div className='flex-1 flex gap-x-4'>
                    <div className='flex-1'>
                    <StatCard
                        value="100+"
                        title="VISIONARY FOUNDERS CONNECTED"
                        description="From concept to execution, we’ve partnered with businesses on their journey to success."
                    />
                    </div>
                    <div className='flex-1 max-w-sm p-6 border border-gray-900 rounded-lg shadow'>
                    <h5 className="mb-2 text-2xl tracking-tight pb-28">Innovative Solutions</h5>
                    <p className="mb-3 text-sm">A thriving community <b>fostering ideas into impactful solutions.</b></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default StatisticsSection;

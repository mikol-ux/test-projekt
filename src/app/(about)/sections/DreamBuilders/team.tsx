import React from 'react';

const ProfileCard = ({ name, title, description, imagePath, linkedin, twitter }: any) => {
  return (
    <div className="w-56 border border-gray-900 rounded-lg shadow-lg p-4">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-800 rounded-l-lg" />
        <img
          src={imagePath}
          alt="Profile"
          className="rounded-lg object-cover h-60 w-full"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-sky-blue">{name}</h3>
        <p className="font-bold">{title}</p>
        <p className="mt-2 text-xs">
          {description}
        </p>
        <div className="flex mt-4 space-x-4">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
            </span>
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512">
                    <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const BuildTeam = () => {
  const profiles = [
    {
      name: "Neo D.",
      title: "Founder",
      description: "Bringing ideas to life with expertise in cybersecurity, design, and innovative concepts.",
      imagePath: "/path-to-image1.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
        name: "Neo D.",
        title: "Founder",
        description: "Bringing ideas to life with expertise in cybersecurity, design, and innovative concepts.",
        imagePath: "/path-to-image1.jpg",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
    },
    {
        name: "Edward G.",
        title: "Business Facilitator",
        description: "Crafting seamless digital experiences with cutting-edge tech.",
        imagePath: "/path-to-image1.jpg",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
    },
    {
        name: "Emmanuel A.",
        title: "Digital Marketer",
        description: "Bringing ideas to life with expertise in cybersecurity, design, and innovative concepts.",
        imagePath: "/path-to-image1.jpg",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
    },
  ];

  return (
    <section className='tpk-container flex flex-col items-center'>
        <div className='text-center mb-8'>
            <h2 className='text-3xl mb-8'>MEET THE DREAM BUILDERS</h2>
            <p className='text-muted mb-12'>We’re more than a team—we’re collaborators, creators, and problem- <br />solvers united by a shared vision: building remarkable dreams.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 w-4/5 mx-auto">
            {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
            ))}
        </div>
    </section>
    
  );
};

export default BuildTeam;

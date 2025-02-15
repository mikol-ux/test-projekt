'use client';
import React from 'react';
import { ProfileCard } from '../../../../../../components/ProfileCard';

const BuildTeam = () => {
	const profiles = [
		{
			name: 'Neo D.',
			title: 'Founder',
			description:
				'Bringing ideas to life with expertise in cybersecurity, design, and innovative concepts.',
			imagePath: '/img/aboutUs/Neo D.jpg',
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
		},
		{
			name: 'Edward G.',
			title: 'Business Facilitator',
			description: 'Crafting seamless digital experiences with cutting-edge tech.',
			imagePath: '/img/aboutUs/Edward G.jpg',
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
		},
		{
			name: 'Emmanuel A.',
			title: 'Digital Marketer',
			description:
				'Bringing ideas to life with expertise in cybersecurity, design, and innovative concepts.',
			imagePath: '/img/aboutUs/Emmanuel A.jpg',
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
		},
		{
			name: 'Neo D.',
			title: 'Founder',
			description:
				'Bringing ideas to life with expertise in cybersecurity, design, and innovative concepts.',
			imagePath: '/img/aboutUs/Neo D.jpg',
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
		},
	];

	return (
		<section className="tpk-contained flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-8">
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">MEET THE DREAM BUILDERS</h2>
				<p className="text-muted text-sm sm:text-base lg:text-lg">
					We’re more than a team—we’re collaborators, creators, and problem-solvers united by a shared vision: building remarkable dreams.
				</p>
			</div>
			<div className="w-full">
			<div className="w-full">
			<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto justify-items-center">
				{profiles.map((profile, index) => (
					<div key={index} className="w-full flex justify-center">
					<div className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[240px]">
						<ProfileCard {...profile} />
					</div>
					</div>
				))}
				</div>
			</div>
			</div>
		</section>
	);
};

export default BuildTeam;
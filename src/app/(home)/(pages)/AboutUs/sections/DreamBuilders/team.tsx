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
		<section className="tpk-container flex flex-col items-center py-12">
			<div className="text-center mb-8">
				<h2 className="text-3xl mb-8">MEET THE DREAM BUILDERS</h2>
				<p className="text-muted mb-12">
					We’re more than a team—we’re collaborators, creators, and problem- <br />
					solvers united by a shared vision: building remarkable dreams.
				</p>
			</div>
			<div className="flex justify-center w-full">
				<div className="grid grid-cols-1 sm:grid-cols-2 w-[90vw] md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl px-4">
					{profiles.map((profile, index) => (
						<ProfileCard key={index} {...profile} />
					))}
				</div>
			</div>
		</section>
	);
};

export default BuildTeam;
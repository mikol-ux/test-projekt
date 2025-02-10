import React from "react";
import Image from "next/image";
import GradientBtn from "@/components/Buttons/GradientBtn";

const VisionList = () => {
	const items = [
		{
			number: "01",
			title: "The Projekt",
			tags: ["2024", "UI/UX", "Branding"],
		},
		{
			number: "02",
			title: "Designing Narratives",
			tags: ["2024", "UI/UX", "Branding"],
		},
		{
			number: "03",
			title: "Protokol",
			tags: ["2024", "UI/UX", "Branding"],
		},
		{
			number: "04",
			title: "Build with the public",
			tags: ["2024", "UI/UX", "Branding"],
		},
		{
			number: "05",
			title: "Conduit",
			tags: ["2024", "UI/UX", "Branding"],
		},
	];

	return (
		<section className="tpk-contained">
			<div className="flex flex-col justify-center items-center">
				<div className="flex basis-full w-full justify-center">
					<Image
						src="/img/home/venue.png"
						alt="Venue Preview"
						width={1280}
						height={720}
						className="object-cover w-full"
					/>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-20 my-20">
					<h1 className="basis-1/2 lg:basis-4/6 3xl:basis-3/6 tpk-text-2xl text-start font-normal uppercase">
						Innovative Solutions That Scale Seamlessly With Your Vision
					</h1>
					<p className="basis-1/2 lg:basis-2/6 3xl:basis-3/6 tpk-text-lg font-normal text-muted-5">
						Whether you’re launching or scaling, we handle the heavy lifting for small businesses and tech founders.
						Remote hiring, custom tools, and seamless execution—your success is priority.
					</p>
				</div>

				<div className="w-full">
					<ul>
						{items.map((item, index, arrLen) => (
							<li
								key={index}
								className={`group bg-linear-to-r from-pitch-dark-blue from-[-4.81%] via-deep-blue via-[27%] to-sky-blue to-100% p-[1px] ${index < arrLen.length - 1 ? "pb-0" : ''} rounded-lg cursor-pointer transition-all duration-300 md:items-center justify-start gap-2 md:gap-10`}>
								{/* Icon & Text */}
								<div className="flex flex-col md:flex-row h-full gap-2.5 md:gap-0 p-4 md:px-12 md:py-8 3xl:px-20 3xl:py-12 rounded-lg bg-black hover:bg-gradient-to-r hover:from-black hover:to-deep-blue hover:text-white tpk-text-lg font-normal">
									{/* Animated Number */}
									<span className="tpk-text-lg font-light flex-none w-20 transition-colors duration-300 text-white group-hover:text-sky-blue">
										{item.number}
									</span>

									{/* Animated Title */}
									<p className="tpk-text-lg font-light flex-grow transition-colors duration-300 text-white group-hover:text-sky-blue">
										{item.title}
									</p>

									{/* Tags */}
									<div className="flex flex-none gap-3">
										{item.tags.map((tag, tagIndex) => (
											<span
												key={`${item.number}-${tagIndex}`} // Unique key
												className="px-3 py-1 rounded-full tpk-text-sm border-[0.5px] transition-all duration-300 border-muted text-muted group-hover:border-white group-hover:text-white">
												{tag}
											</span>
										))}
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>

				<div className="block w-full mt-28">
					<GradientBtn href="/portfolio" className="tpk-text-md">Explore Projects</GradientBtn>
				</div>
			</div>
		</section>
	);
};

export default VisionList;

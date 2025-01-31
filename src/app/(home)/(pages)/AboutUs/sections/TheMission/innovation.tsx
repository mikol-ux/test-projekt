import { FC } from "react";
import GradientCircle from "../../../../../../components/circles/GradientCircle"; // Adjust the path as necessary

const Innovation: FC = () => {
	const highlights = ["INNOVATION", "CREATIVITY", "RELENTLESS FOCUS", "INNOVATION"];

	return (
		<section className="tpk-contained text-center py-16 px-6">
			<div className="">
				<h1 className="text-4xl tpk-text-white sm:text-5xl">
					BUILT FROM GRIT,
					<br />
					<span className="text-sky-blue">FUELED BY PASSION</span>
				</h1>
				{/* Description Section */}
				<p className="mt-6 text-lg tpk-text-muted max-w-3xl mx-auto">
					The Projekt began with a simple mission:{" "}
					<span className="font-semibold tpk-text-white">
						to help founders who felt stuck in their journeys
					</span>
					. Inspired by personal growth, pivotal losses, and transformative
					moments, we sought to build not just products but partnerships.
				</p>
			</div>
			{/* Highlight Circles */}
			<div className="relative flex justify-center">
				{highlights.map((text, index, items) => (
					<GradientCircle key={index} children={text} href="#x" className={`flex items-center justify-center text-sky-blue w-40 h-40 xl:w-80 xl:h-80 ${index !== items.length - 1 ? "-me-8" : ""}`} />
				))}
				<div className="absolute bottom-0 backdrop-blur-md bg-white/3 w-full h-2/3"></div>
			</div>
		</section>
	);
};

{/* <div className="drop-shadow-2xl flex justify-around items-center bottom-[145px]  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 absolute h-[120px] w-[1100px] ">
	<div className="flex justify-center items-center h-[100px] w-[200px] "><p className="text-sky-blue ml-10 text-sm">INOVATION</p></div>
	<div className="flex justify-center items-center h-[100px] w-[200px] "><p className="text-sky-blue ml-6 text-sm">CREATIVITY</p></div>
	<div className="flex justify-center items-center h-[100px] w-[200px] "><p className="text-sky-blue ml-2 text-sm">RELENTLESS FOCUS</p></div>
	<div className="flex justify-center items-center h-[100px] w-[200px] "><p className="text-sky-blue text-sm">INOVATION</p></div>
</div> */}
export default Innovation;
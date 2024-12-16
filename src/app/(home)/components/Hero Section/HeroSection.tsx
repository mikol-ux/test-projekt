//

import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="tpk-contained">
			<div className="grid grid-flow-row grid-cols-3 justify-items-center items-center">
				<div>
					<span className="text-black dark:text-white text-center text-[50vw] lg:text-[30vw]">T</span>
				</div>
				<div className="row-start-2 md:row-start-auto col-span-3 md:col-span-1 justify-items-center flex flex-col gap-8 md:gap-12 lg:gap-24 items-center">
					<h1 className="text-black dark:text-white text-center text-2xl xl:text-4xl 2xl:text-5xl">Remarkable dreams are built with the Projekt</h1>
					<Link href="#x" className="bg-black dark:bg-white text-center text-white dark:text-black border-[.5px] border-black text-md p-2 px-8 uppercase max-w-max hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black hover:border-black dark:hover:border-white dark:focus:border-white focus:text-black dark:focus:text-white focus:bg-white dark:focus:bg-black">See Pricing</Link>
				</div>
				<div className="col-start-3 row-start-1">
					<span className="text-black dark:text-white text-center text-[50vw] lg:text-[30vw]">P</span>
				</div>
			</div>
		</section>
	)
}

export default HeroSection;
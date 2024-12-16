//

import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="tpk-contained">
			<div className="justify-items-center items-center grid grid-cols-3 grid-flow-row">
				<div>
					<span className="font-light text-[50vw] text-black text-center lg:text-[30vw] dark:text-white">T</span>
				</div>
				<div className="flex flex-col justify-items-center items-center gap-8 md:gap-12 lg:gap-24 col-span-3 md:col-span-1 row-start-2 md:row-start-auto">
					<h1 className="text-2xl text-black text-center xl:text-4xl 2xl:text-5xl dark:text-white">Remarkable dreams are built with the Projekt</h1>
					<Link href="#x" className="border-[.5px] dark:hover:border-white dark:focus:border-white bg-black hover:bg-white dark:hover:bg-black focus:bg-white dark:focus:bg-black dark:bg-white px-8 p-2 border-black hover:border-black max-w-max text-center text-md text-white hover:text-black dark:hover:text-white focus:text-black dark:focus:text-white dark:text-black uppercase">See Pricing</Link>
				</div>
				<div className="col-start-3 row-start-1">
					<span className="font-light text-[50vw] text-black text-center lg:text-[30vw] dark:text-white">P</span>
				</div>
			</div>
		</section>
	)
}

export default HeroSection;
// 
import { FC } from "react";
import "./direction.css"

const TheDirections: FC = () => {
	return (
		<section className="tpk-contained">
			<div className="flex md:flex-row flex-col gap-12 md:gap-0 py-24">
				<div className="flex flex-row md:flex-col justify-between md:justify-normal items-center md:items-start md:gap-32 w-full md:basis-3/12">
					<h4 className="font-semibold text-start text-white-800 dark:text-white-300 tpk-text-sm">THE PROJEKT</h4>
					<h5 className="text-end text-white-800 dark:text-white-300 text-xs md:text-start tpk-text-sm">
					WHY CHOOSE US?
					</h5>
				</div>
				<div className="md:basis-9/12 flex flex-col gap-12">
					<h2 className=" font-light tpk-title tpk-text-2xl">
						One day or day one? Every big leap <br /> starts with a single step.<br /> <em className="font-normal dark:text-[#BEE8FF] not-italic">Make today your day one.</em>
					</h2>
					<div className="gap-8 md:gap-8 grid grid-cols-2 md:grid-cols-2 md:grid-flow-row uppercase">
						<div className="flex flex-col justify-between border-muted-7 border rounded-md p-5 h-[28rem] gap-4 transition-all duration-300 overflow-hidden relative parent-radial-bg group ">
							<div className="radial-bg w-[200%] h-[200%] absolute bottom-0 right-0 z-0 transition-all duration-300 group-hover:radial-bg-hover"></div>
							<h6 className="py-3  w-full text-white-800  dark:text-muted-4 text-3xl md:text-5xl lg:text-7xl z-[1] ">01</h6>
							<div className="z-[1]">
								<h5 className="text-muted-3 mb-2 dark:text-white tpk-text-lg">
									Achieve goals efficiently.
								</h5>
								<p className="text-muted-black font-extralight dark:text-white tpk-text-sm">
									Strategy & Project Management streamlines your initiatives, ensuring that every project aligns with your vision, optimizes resources, and drives measurable results.
								</p>
							</div>
					 	</div>
						<div className="flex flex-col justify-between border-muted-7 border rounded-md p-5 h-[28rem] gap-4 transition-all duration-300 overflow-hidden relative parent-radial-bg group">
						<div className="radial-bg w-[200%] h-[200%] absolute bottom-0 right-0 z-0 transition-all duration-300 group-hover:radial-bg-hover"></div>
							<h6 className="py-3  w-full text-white-800  dark:text-muted-4 z-[1] text-3xl md:text-5xl lg:text-7xl">02</h6>
							<div className="z-[1]">
								<h5 className="text-muted-3 mb-2 dark:text-white tpk-text-lg">
									Engaging brand identity
								</h5>
								<p className="text-muted-black font-extralight dark:text-white tpk-text-sm">
									From strategy to execution, we make your brand unique and memorable, connecting you with the right customers. It’s more than just a logo—it’s a complete identity that drives growth. 							
								</p>
							</div>
						</div>
						<div className="flex flex-col justify-between border-muted-7 border rounded-md p-5 h-[28rem] gap-4 transition-all duration-300 overflow-hidden relative parent-radial-bg group">
						<div className="radial-bg w-[200%] h-[200%] absolute bottom-0 right-0 z-0 transition-all duration-300 group-hover:radial-bg-hover"></div>
							<h6 className="py-3  w-full text-white-800  dark:text-muted-4 z-[1] text-3xl md:text-5xl lg:text-7xl">03</h6>
							<div className="z-[1]">
								<h5 className="text-muted-3 mb-2 dark:text-white tpk-text-lg">
									REMARKABLE MEDIA PRODUCTION
								</h5>
								<p className="text-muted-black font-extralight dark:text-white tpk-text-sm">
									Opt for Rogue&rsquo;&#39;
s multimedia production services for a smooth experience. We handle everything, letting you enjoy the process without stress.
								</p>
							</div>
						</div>
						<div className="flex flex-col justify-between border-muted-7 border rounded-md p-5 h-[28rem] gap-4 transition-all duration-300 overflow-hidden relative parent-radial-bg group">
						<div className="radial-bg w-[200%] h-[200%] absolute bottom-0 right-0 z-0 transition-all duration-300 group-hover:radial-bg-hover"></div>
							<h6 className="py-3  w-full text-white-800  dark:text-muted-4 z-[1] text-3xl md:text-5xl lg:text-7xl">04</h6>
							<div className="z-[1]">
								<h5 className="text-muted-3 mb-2 dark:text-white tpk-text-lg">
									CUT HIRING cost
								</h5>
								<p className="text-muted-black font-extralight dark:text-white tpk-text-sm">
								Use The Watchman to hire certified and qualified candidates that match your criteria for 87% less than the cost of hiring in the U.S. or similar. Save time and money effortlessly.							</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TheDirections;
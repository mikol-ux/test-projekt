//
import { FC } from "react";

const TheAdvice: FC = () => {
	return (
		<section className="tpk-contained">
			<div className="flex flex-col md:flex-row gap-12">
				<div className="md:basis-4/12 lg:basis-3/12 bg-[url('/img/home/A-job-well-done.jpeg')] bg-light dark:bg-black filter grayscale bg-cover md:bg-contain bg-no-repeat bg-center md:bg-top h-[25vh] md:h-auto"></div>
				<div className="md:basis-8/12 lg:basis-9/12 flex flex-col gap-12">
					<h3 className="text-muted-4 dark:text-muted uppercase text-4xl text-normal">
						Roughly 80% of businesses fail because inadequate planning, but the 30-20% that succeed often do so because they learn, adapt, and innovate.
					</h3>
					<p className="text-muted-4 dark:text-muted text-xl 3xl:text-2xl text-normal">
						Starting a business is tough and often lonely. We understand. You&apos;re balancing school, work, family, and your dream—often without full support from those around you. Even if you&apos;ve done this before, new challenges arise daily, with incomplete information and unknowns. We call this stage &quot;The Foundation.&quot; It&apos;s the hardest part, where you&apos;re pushing through uncertainty to find solutions. You&apos;re a dreamer trying to love/understand the problem enough to build the solution. We know the feeling. We re-live it every time a new client steps through our door.</p>
					<ul className="mb-10">
						<li className="pt-24 md:pt-12 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(A)</span>
							<h6 className="text-black dark:text-white text-lg lg:text-2xl uppercase">Ensure your goals are achieved efficiently, with maximum impact and minimal risk</h6>
						</li>
						<li className="pt-24 md:pt-12 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(B)</span>
							<h6 className="text-bl	ck dark:text-white text-lg lg:text-2xl uppercase">Market-ready identity that attracts your audience</h6>
						</li>
						<li className="pt-24 md:pt-12 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(C)</span>
							<h6 className="text-black dark:text-white text-lg lg:text-2xl uppercase">Learn from and connect with other founders.</h6>
						</li>
						<li className="pt-24 md:pt-12 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(D)</span>
							<h6 className="text-black dark:text-white text-lg lg:text-2xl uppercase">Save hours of manual work and reduce errors</h6>
						</li>
						<li className="pt-24 md:pt-12 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(E)</span>
							<h6 className="text-black dark:text-white text-lg lg:text-2xl uppercase">Get high-quality results with video production for your business.</h6>
						</li>
						<li className="pt-24 md:pt-12 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(F)</span>
							<h6 className="text-black dark:text-white text-lg lg:text-2xl uppercase">Totally Synchronous</h6>
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-20">
				<h3 className="text-black dark:text-white uppercase text-4xl text-normal">
					Roughly 80% of businesses fail because inadequate planning, but the 30-20% that succeed often do so because they learn, adapt, and innovate.
					</h3>
			</div>
		</section>
	)
}

export default TheAdvice;
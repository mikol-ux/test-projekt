// 
import { FC } from "react";
import Card from "./components/Card";
// background: radial-gradient(145.56% 124.2% at 6.59% 0%, #000000 57.42%, #438DB5 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
// background: radial-gradient(145.56% 124.2% at 6.59% 0%, #000000 0%, #060D11 10.4%, #142935 26.17%, #438DB5 68.29%, #BEE8FF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

const TheDirections: FC = () => {
	const details = [
		{title: "Achieve goals efficiently.", body: "Strategy & Project Management streamlines your initiatives, ensuring that every project aligns with your vision, optimizes resources, and drives measurable results."},
		{title: "Engaging brand identity", body: "From strategy to execution, we make your brand unique and memorable, connecting you with the right customers. It’s more than just a logo—it’s a complete identity that drives growth."},
		{title: "REMARKABLE MEDIA PRODUCTION", body: "Opt for Rogue's multimedia production services for a smooth experience. We handle everything, letting you enjoy the process without stress."},
		{title: "CUT HIRING cost", body: "Use The Watchman to hire certified and qualified candidates that match your criteria for 87% less than the cost of hiring in the U.S. or similar. Save time and money effortlessly."},
	]
	return (
		<section className="tpk-contained">
			<div className="flex md:flex-row flex-col gap-12 md:gap-0 py-24">
				<div className="flex flex-row md:flex-col justify-between md:justify-normal items-center md:items-start md:gap-32 w-full md:basis-3/12">
					<h4 className="font-normal text-start text-muted dark:text-muted-5 tpk-text-md md:mt-4">THE PROJEKT</h4>
					<h5 className="font-normal text-end text-muted dark:text-muted-5 md:text-start tpk-text-md md:mt-4">
						WHY CHOOSE US?
					</h5>
				</div>
				<div className="md:basis-9/12 flex flex-col gap-12">
					<h2 className=" font-light tpk-title tpk-text-2xl">
						One day or day one? Every big leap starts with a single step.<br /> <em className="font-normal dark:text-[#BEE8FF] not-italic">Make today your day one.</em>
					</h2>
					<div className="gap-8 md:gap-8 grid grid-cols-1 md:grid-cols-2 md:grid-flow-row">
						{
							details.map((item, index) => {
								return <Card key={index} count={index + 1} title={item.title} body={item.body} />
							})
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TheDirections;
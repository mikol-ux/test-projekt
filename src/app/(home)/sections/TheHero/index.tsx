//
import { FC } from "react";
import GradientBtn from "@/components/Buttons/GradientBtn";

const TheHero: FC = () => {
	return (
		<section className="relative border border-red-500">
			<div className="tpk-contained min-h-screen flex items-end py-16 lg:py-32 2xl:py-64">
				<div className="flex">
					<div className="md:basis-8/12 lg:basis-10/12 xl:basis-9/12">
						<div className="bg-[#141414] rounded-md text-center px-5 py-3 w-max mb-8">
							<h6 className="text-white text-sm uppercase">We Are The Projekt</h6>
						</div>
						<h1 className="text-black dark:text-white uppercase text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
							The best place to turn your IDEAS Into everything you need for a remarkable business.
						</h1>
						<p className="tpk-p-text-md lg:w-5/6 text-dark dark:text-white font-light my-5">
							We help upcoming passionate founders turn their dreams into profitable businesses- research, brand, build, launch, and scale their products/services. For Established businesses, we provide tools to stay ahead, leveraging automation, design, software development, artificial intelligence, and an exclusive highly vetted founders community.
						</p>

						<GradientBtn href="/pricing" className="mt-12 inline-flex" isAnimated={true}>I Want To See Pricing</GradientBtn>
					</div>
					<div className="md:basis-4/12 lg:basis-2/12 xl:basis-3/12"></div>
				</div>
			</div>
		</section>
	);
}

export default TheHero;
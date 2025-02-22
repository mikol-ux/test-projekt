//
import { FC } from "react";
import GradientBtn from "@/components/Buttons/GradientBtn";

const TheHero: FC = () => {
	return (
		<div className="tpk-contained relative">
			<div className="min-h-screen flex items-end py-16 2xl:py-32">
				<div className="flex">
					<div className="md:basis-8/12 lg:basis-10/12 xl:basis-9/12">
						<div className="bg-[#141414] rounded-md text-center px-5 py-3 w-max mb-8">
							<h6 className="text-white tpk-text-sm uppercase">We Are The Projekt</h6>
						</div>
						<h1 className="text-black dark:text-white uppercase tpk-text-2xl">
							The best place to turn your IDEAS Into everything you need for a remarkable business.
						</h1>
						<p className="tpk-text-md lg:w-5/6 text-dark dark:text-white font-light my-5">
							We help upcoming passionate founders turn their dreams into profitable businesses- research, brand, build, launch, and scale their products/services. For Established businesses, we provide tools to stay ahead, leveraging automation, design, software development, artificial intelligence, and an exclusive highly vetted founders community.
						</p>

						<GradientBtn href="/pricing" className="mt-12 inline-flex tpk-text-sm" isAnimated={true}>I Want To See Pricing</GradientBtn>
					</div>
					<div className="md:basis-4/12 lg:basis-2/12 xl:basis-3/12"></div>
				</div>
			</div>
		</div>
	);
}

export default TheHero;
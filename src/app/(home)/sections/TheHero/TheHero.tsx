//
import { FC } from "react";
import GradientBtn from "@/components/buttons/GradientBtn";
import Image from "next/image";

const TheHero: FC = () => {
	return (
		<section className="bg-[url('/img/home/decoration-pumpkin-1.png')] bg-cover bg-center relative">
			{/* <div className="bg-gradient-to-r from-black from-0% via-[#2C353B] via-50% to-sky-blue to-100% bg-blend-color"></div> */}
			{/* <Image src="/img/home/decoration-pumpkin-1.png" className="w-full h-full object-cover absolute top-0 -z-[1] border" width="1237" height="910" alt="Hero Background" /> */}
			<div className="tpk-contained min-h-screen flex items-end py-32">
				<div className="flex">
					<div className="md:basis-8/12 lg:basis-6/12">
						<div className="bg-[#141414] rounded-md text-center px-5 py-3 w-max mb-8">
							<h6 className="text-white text-normal uppercase">We Are The Projekt</h6>
						</div>
						<h1 className="text-black dark:text-white uppercase text-2xl md:text-3xl xl:text-5xl">
							The best place to turn your IDEAS Into everything you need for a remarkable business.
						</h1>
						<p className="text-dark dark:text-white font-light text-md md:text-lg xl:text-xl my-5">
							We help upcoming passionate founders turn their dreams into profitable businesses- research, brand, build, launch, and scale their products/services. For Established businesses, we provide tools to stay ahead, leveraging automation, design, software development, artificial intelligence, and an exclusive highly vetted founders community.
						</p>

						<GradientBtn href="/about" className="mt-14" isAnimated={false}>I Want To Learn More</GradientBtn>
					</div>
					<div className="md:basis-4/12 lg:basis-6/12"></div>
				</div>
			</div>
		</section>
	);
}

export default TheHero;
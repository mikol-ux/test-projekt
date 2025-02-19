
import React from "react";
import Image from "next/image";

// import Link from "next/link";
import GradientBtn from "@/components/Buttons/GradientBtn";
const ForgeSection = () => {
	return (
		<section className="flex justify-center items-end bg-[url(/img/home/theforge.png)] bg-cover bg-no-repeat bg-center w-full h-screen lg:pb-20 2xl:pb-28 3xl:p-36">
			<div className="tpk-contained flex items-center justify-center pt-8">
				<div className="flex flex-col justify-center items-center">
					<div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center w-full border-b-[0.5px] border-white mb-6">
						<h2 className="text-[10vw] 2xl:text-[6vw] font-normal text-white">
							THE FORGE
						</h2>
						<span className="uppercase font-normal tpk-text-md text-black dark:text-white">
							community Channel
						</span>
					</div>
					<div className="flex flex-col-reverse lg:flex-row justify-between items-center">
						<div className="2xl:basis-1/2 lg:mb-0">
							<p className="tpk-text-lg font-normal text-left mt-8 md:mb-0">
								JOIN THE PRIVATE NETWORK FOR DREAMERS TURNED HIGH-PERFORMING
								UPCOMING FOUNDERS.
							</p>

							<GradientBtn href="/"
								className="mt-12 inline-flex align-middle m-auto"
								isAnimated={true}>
								JOIN THE Forge
							</GradientBtn>
						</div>

						{/* Community Channel Section */}
						<div className="2xl:basis-1/2 flex-col md:flex-row gap-4 backdrop-blur-[60px] bg-[#FFFFFF12] rounded-lg flex w-full p-4">
							<p className="tpk-text-sm font-light mt-2 basis-5/12 dark:text-white text-black mb-4 md:mb-0">
								A private network for dreamers who became high-performing
								founders. Applicants face a tough interview process, leading to
								an acceptance rate under 10%. This guarantees that only
								committed individuals join The Forge, enhancing connections and
								experiences.
							</p>

							<div className="basis-7/12 mt-4">
								<Image
									src="/img/home/Person in Red Hoodie Coding copy 1.png"
									alt="Community Channel"
									width={288}
									height={221}
									className="rounded-lg w-full h-48 lg:h-auto object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ForgeSection;

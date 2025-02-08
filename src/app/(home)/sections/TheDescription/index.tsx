//
import { FC } from "react";

const TheDescription: FC = () => {
	return (
		<section className="flex flex-col gap-8 tpk-contained">
			<h2 className="text-muted-3 dark:text-muted tpk-title">
				It&apos;s how you turn a <em className="not-italic tpk-title">dream into a
				remarkable profitable business </em>
				that&apos;s ready to scale.
			</h2>
			<div className="bg-[url('/img/home/man-designing-website.jpeg')] bg-blend-luminosity bg-white dark:bg-black bg-cover bg-center bg-fixed h-[30vh] md:h-[70vh]"></div>
			<div className="grid grid-cols-6">
				<p className="col-span-6 md:col-span-4 xl:col-span-3 font-light text-md text-black md:text-xl lg:text-2xl dark:text-muted-2">
					We help upcoming passionate founders turn their dreams into profitable
					businesses- build, research, brand, scale, and launch their
					products/services. For Established businesses, we provide tools to stay
					ahead, leveraging automation, design, software development, and
					optimization, and an exclusive highly vetted founders community.
				</p>
			</div>
		</section>
	)
}

export default TheDescription;
//

function TheDescription() {
	return (
		<section className="flex flex-col gap-8 tpk-contained">
			<h2 className="text-2xl text-black md:text-4xl dark:text-white uppercase">
				<span className="text-muted">It’s how you turn a</span> dream into a
				remarkable profitable business
				<span className="text-muted">that’s ready to scale.</span>
			</h2>
			<div className="bg-[url('/img/home/man-designing-website.jpeg')] bg-blend-luminosity bg-white dark:bg-black bg-cover bg-center bg-fixed h-[30vh] md:h-[70vh]"></div>
			<div className="grid grid-cols-6">
				<p className="col-span-6 md:col-span-4 xl:col-span-3 font-light text-md text-muted-4 md:text-xl lg:text-2xl dark:text-muted-2">
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
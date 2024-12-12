//
import Image from "next/image";
import Link from "next/link";
import tpk_svg_menu from "../../../components/svgs/theprojekt_menu.svg";

const TheBeginning = () => {
	return (
		<header>
			<nav className="bg-black">
				<div className="tpk-contained flex flex-wrap items-center justify-between mx-auto p-4">
					<Link className="flex items-center" href="/">
						<Image
							className="w-14 h-full md:hidden"
							src="/img/Icon_White_Transparent.png"
							alt="Theprojekt"
							width={380}
							height={98}
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						/>
						<Image
							className="md:w-[10em] lg:w-[15em] h-full hidden md:block"
							src="/img/Logo lockup_Transparent.png"
							alt="Theprojekt"
							width={380}
							height={98}
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						/>
					</Link>
					<button data-collapse-toggle="tpk-nav-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none" aria-controls="tpk-nav-menu" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<Image className="w-full" src={tpk_svg_menu} alt="mobile  menu" width={32} height={32} />
					</button>
					<div id="tpk-nav-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
						<ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border-[.5px] border-muted-3 bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
							<li>
								<Link href="#" className="block uppercase py-2 px-3 text-white hover:text-muted-2 md:p-0" aria-current="page">About Us</Link>
							</li>
							<li>
								<Link href="#" className="block uppercase py-2 px-3 text-white hover:text-muted-2 md:p-0" >Pricing</Link>
							</li>
							<li>
								<Link href="#" className="block uppercase py-2 px-3 text-white hover:text-muted-2 md:p-0" >Contact Us</Link>
							</li>
							<li>
								<Link href="#" className="block uppercase py-2 px-3 text-white hover:text-muted-2 md:p-0">Search</Link>
							</li>
							<li>
								<button id="tpk-nav-menu-dropdown-cta" data-collapse-toggle="tpk-nav-menu-dropdown" className="flex items-center justify-between w-full py-2 px-3 uppercase text-white hover:text-muted-2 md:p-0" aria-expanded="false">
									More
									<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
									</svg>
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div id="tpk-nav-menu-dropdown" className="mt-1 bg-black border-muted-4 shadow-sm border-y hidden">
					<div className="grid tpk-contained px-4 py-5 mx-auto text-sm text-muted-2 md:grid-cols-2 md:px-6 gap-4">
						<ul className="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="tpk-nav-menu-button">
							<li>
								<Link href="#" className="block uppercase py-2 px-3 text-white hover:text-muted-2 md:p-0">
									<span className="font-medium">Dancing With Machine</span>
									<span className="text-sm text-muted-2 block normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, inventore. Quisquam porro quos, veniam doloremque quasi dolore, a saepe cumque sint, architecto aliquam fugiat inventore! Ab, placeat reiciendis! Quam, eos?</span>
								</Link>
							</li>
							<li>
								<Link href="#" className="block uppercase py-2 px-3 text-white hover:text-muted-2 md:p-0">
									<span className="font-medium">Watch Man</span>
									<span className="text-sm text-muted-2 block normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, inventore. Quisquam porro quos, veniam doloremque quasi dolore, a saepe cumque sint, architecto aliquam fugiat inventore! Ab, placeat reiciendis! Quam, eos?</span>
								</Link>
							</li>
						</ul>
						<Link href="#" className="bg-[url('https://picsum.photos/200/300/?blur=2')] p-8 bg-gray-500 bg-center bg-no-repeat bg-cover bg-blend-multiply hover:bg-blend-soft-light">
							<p className="mb-5 text-white">Our latestest blog from DWM.</p>
							<p className="mb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in nihil eos ratione dolore eaque nobis suscipit blanditiis odio. Veritatis cum fugit a unde numquam sed alias omnis deleniti laborum..</p>
							<button type="button" className="inline-flex items-center px-4 py-2 text-md text-center text-white border border-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-700">
								Read Now
								<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
								</svg>
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default TheBeginning;
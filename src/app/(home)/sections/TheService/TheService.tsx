//

import Link from "next/link";

function TheService() {
	return (
		<section className='tpk-contained'>
			<div className="flex flex-col md:flex-row justify-start gap-24 md:gap-0">
				<div className="md:basis-4/12 flex flex-row items-start justify-start gap-3">
					<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.5 10.1639V11.8361C22.5 12.0229 22.348 12.1749 22.1612 12.1793C19.7505 12.2618 17.5701 13.2043 15.9109 14.7246C15.8544 14.7724 15.7979 14.8245 15.7458 14.8766C15.698 14.92 15.6502 14.9635 15.6068 15.0113C15.5764 15.0417 15.546 15.0721 15.5113 15.1068C15.4678 15.1502 15.4244 15.198 15.3766 15.2458C13.7738 16.9224 12.7661 19.168 12.6793 21.6612C12.6749 21.848 12.5229 22 12.3361 22H10.6639C10.4771 22 10.3251 21.848 10.3207 21.6612C10.2425 19.2592 9.29566 17.0831 7.78845 15.4239C7.6842 15.3066 7.57562 15.1937 7.46703 15.0851C7.44965 15.0677 7.43662 15.0547 7.41925 15.0373C7.31066 14.9287 7.19339 14.8201 7.08045 14.7159C7.01965 14.6638 6.96318 14.6116 6.90237 14.5639C5.26486 13.1435 3.15824 12.2618 0.834452 12.1836C0.64768 12.1793 0.5 12.0316 0.5 11.8448V10.1682C0.5 9.98144 0.652024 9.82942 0.838796 9.82507C3.32764 9.7382 5.57759 8.7305 7.25419 7.12774C7.30197 7.0843 7.34541 7.04087 7.39319 6.99309C7.42359 6.96269 7.454 6.93228 7.48875 6.89753C7.53218 6.8541 7.57562 6.80632 7.6234 6.75854C9.22616 5.07759 10.2382 2.83198 10.3207 0.343139C10.3251 0.152024 10.4771 0 10.6639 0H12.3361C12.5229 0 12.6749 0.152024 12.6793 0.338796C12.7661 2.82764 13.7695 5.0689 15.3679 6.74551C15.4939 6.87581 15.6198 7.00612 15.7501 7.12774C15.8023 7.17552 15.8544 7.22764 15.9109 7.27108C15.9673 7.3232 16.0238 7.37532 16.0803 7.4231C17.7178 8.85212 19.8331 9.7382 22.1612 9.81639C22.348 9.82073 22.4957 9.96841 22.4957 10.1552L22.5 10.1639Z" fill="#808080" />
					</svg>
					<h4 className="text-muted-4 dark:text-muted text-normal uppercase">Who Are We</h4>
				</div>
				<div className="md:basis-8/12 flex flex-col gap-8">
					<h3 className="text-muted-4 dark:text-muted uppercase text-4xl text-normal">
						WE ARE A WEB DEVELOPMENT & CYBER SECURITY AGENCY
					</h3>
					<p className="text-muted-4 dark:text-muted text-xl text-normal">
						At The Projekt, we know what it’s like to take big risks without having a huge budget and clarity. That’s why we created the Foundation Program—designed for the dreamers, misfits, and rebels who are too busy chasing something bigger. It’s not just about launching your business; it’s about growing to the point where you're turning clients away because you’re in such high demand.
					</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row mt-12 relative">
				<div className="border-[0.75px] border-[#4D4D4D] w-full xl:w-11/12 h-56 md:h-32 absolute top-2 md:top-6 right-0 flex justify-start p-4 md:px-12">
					<div className="md:basis-4/12 flex flex-row items-start md:items-center justify-start gap-6 lg:gap-24">
						<svg width="23" height="22" className="w-4 md:w-10" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M22.5 10.1639V11.8361C22.5 12.0229 22.348 12.1749 22.1612 12.1793C19.7505 12.2618 17.5701 13.2043 15.9109 14.7246C15.8544 14.7724 15.7979 14.8245 15.7458 14.8766C15.698 14.92 15.6502 14.9635 15.6068 15.0113C15.5764 15.0417 15.546 15.0721 15.5113 15.1068C15.4678 15.1502 15.4244 15.198 15.3766 15.2458C13.7738 16.9224 12.7661 19.168 12.6793 21.6612C12.6749 21.848 12.5229 22 12.3361 22H10.6639C10.4771 22 10.3251 21.848 10.3207 21.6612C10.2425 19.2592 9.29566 17.0831 7.78845 15.4239C7.6842 15.3066 7.57562 15.1937 7.46703 15.0851C7.44965 15.0677 7.43662 15.0547 7.41925 15.0373C7.31066 14.9287 7.19339 14.8201 7.08045 14.7159C7.01965 14.6638 6.96318 14.6116 6.90237 14.5639C5.26486 13.1435 3.15824 12.2618 0.834452 12.1836C0.64768 12.1793 0.5 12.0316 0.5 11.8448V10.1682C0.5 9.98144 0.652024 9.82942 0.838796 9.82507C3.32764 9.7382 5.57759 8.7305 7.25419 7.12774C7.30197 7.0843 7.34541 7.04087 7.39319 6.99309C7.42359 6.96269 7.454 6.93228 7.48875 6.89753C7.53218 6.8541 7.57562 6.80632 7.6234 6.75854C9.22616 5.07759 10.2382 2.83198 10.3207 0.343139C10.3251 0.152024 10.4771 0 10.6639 0H12.3361C12.5229 0 12.6749 0.152024 12.6793 0.338796C12.7661 2.82764 13.7695 5.0689 15.3679 6.74551C15.4939 6.87581 15.6198 7.00612 15.7501 7.12774C15.8023 7.17552 15.8544 7.22764 15.9109 7.27108C15.9673 7.3232 16.0238 7.37532 16.0803 7.4231C17.7178 8.85212 19.8331 9.7382 22.1612 9.81639C22.348 9.82073 22.4957 9.96841 22.4957 10.1552L22.5 10.1639Z" fill="#808080" />
						</svg>
						<h4 className="text-muted-4 dark:text-muted text-normal uppercase text-sm md:text-lg lg:text-xl">We Are</h4>
					</div>
				</div>
				<div className="md:basis-4/12"></div>
				<div className="md:basis-8/12">
					<ul className="mb-10">
						<li className="pt-24 md:pt-12 px-4 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(A)</span>
							<h6 className="text-black dark:text-white text-lg lg:text-2xl uppercase">full-service web & cyber security development company</h6>
						</li>
						<li className="pt-24 md:pt-12 px-4 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(B)</span>
							<h6 className="text-bl	ck dark:text-white text-lg lg:text-2xl uppercase">UX/UI Designers and Brand Strategists</h6>
						</li>
						<li className="pt-24 md:pt-12 px-4 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(C)</span>
							<h6 className="text-black dark:text-white text-lg lg:text-2xl uppercase">Community of dreamers turned Entrepreneurs</h6>
						</li>
						<li className="pt-24 md:pt-12 px-4 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(D)</span>
							<h6 className="text-black dark:text-white text-lg lg:text-2xl uppercase">Multimedia Creative Studio</h6>
						</li>
						<li className="pt-24 md:pt-12 px-4 md:px-0">
							<span className="text-muted-4 dark:text-muted text-lg lg:text-2xl uppercase">(E)</span>
							<h6 className="text-black dark:text-white text-lg lg:text-2xl uppercase">We are Talent acquisition specialists - THE WATCHMEN</h6>
						</li>
					</ul>
					<Link
						href="#x"
						className="block text-center uppercase p-3 border-[0.75px] border-muted-4 dark:border-muted text-muted-4 dark:text-muted hover:bg-muted dark:hover:bg-muted-4 hover:text-white dark:hover:text-black focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black">
						I WANT THE FULL STORY
					</Link>
				</div>
			</div>
		</section>
	)
}

export default TheService;
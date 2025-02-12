"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const TheEnding = () => {
	// Function to dynamically update the font size based on viewport width
	const handleTextLoad = () => {
		const text = document.querySelector<HTMLHeadingElement>(".tpk-footer-theprojekt");

		if (text) {
			const updateFontSize = () => {
				const viewportWidth = window.innerWidth;
				text.style.fontSize = `calc(${viewportWidth / (text.textContent?.length || 1)}px + 2.5vw)`;
			};

			// Call the function initially
			updateFontSize();

			// Attach event listener for resize
			window.addEventListener("resize", updateFontSize);

			// Clean up the event lis tener when the component unmounts
			return () => {
				window.removeEventListener("resize", updateFontSize);
			};
		}
	};

	useEffect(() => {
		handleTextLoad();
	}, []);

	return (
		<footer className="tpk-contained">
			<div className="flex justify-center items-center mb-32 w-full">
				<h2 className="text-black dark:text-white text-nowrap whitespace-nowrap font-medium tracking-normal text-center 3xl:text-">
					THE PROJEKT
				</h2>
			</div>
			<div className="block md:grid md:grid-cols-6 grid-flow-col gap-4">
				<div className="md:col-span-4">
					<p className="text-black dark:text-white text-md mb-10">
						Speak to us directly, and figure out which plan works the best for you.
					</p>
					<Link
						href="#x"
						className="tpk-btn-white">
						I WANT TO SPEAK WITH SOMEONE
					</Link>
				</div>
				<div className="md:col-start-6 md:col-span-12">
					<div className="grid grid-cols-2 gap-4">
						<ul className="font-normal flex flex-col p-4 md:p-0 mt-4">
							<li className="my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">Home</Link>
							</li>
							<li className="my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2" >About Us</Link>
							</li>
							<li className="my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">Projects</Link>
							</li>
							<li className="my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">People</Link>
							</li>
							<li className="my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2" >Contact Us</Link>
							</li>
						</ul>
						<ul className="font-normal flex flex-col p-4 md:p-0 mt-4">
							<li className="my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2" >DWM</Link>
							</li>
							<li className="my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">Careers</Link>
							</li>
							<li className="my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">Locations</Link>
							</li>
							<li className="my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">Journal</Link>
							</li>
							<li className="my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2" >News</Link>
							</li>
						</ul>
						<ul className="grid grid-cols-subgrid col-span-2 font-normal p-4 md:p-0 md:mt-20">
							<li className="col-start-2 my-1">
								<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">(Back To Top)</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 grid-flow-col grid-rows-2 md:grid-rows-1 md:grid-cols-6 gap-4 h-48 md:h-32 lg:h-36 2xl:h-52 mt-20">
				<div className="border-[0.52px] border-black dark:border-white center-center">
					<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="fill-black dark:fill-white" d="M16.5476 0.401855C7.9329 0.401855 0.949707 7.42119 0.949707 16.0805C0.949707 23.9402 6.71002 30.4312 14.2157 31.5648V20.2354H10.3568V16.1134H14.2157V13.3712C14.2157 8.83071 16.4166 6.83795 20.171 6.83795C21.9695 6.83795 22.9194 6.97122 23.3702 7.03236V10.629H20.809C19.2149 10.629 18.658 12.1483 18.658 13.8604V16.1134H23.3296L22.6963 20.2354H18.6596V31.5977C26.2729 30.5613 32.1455 24.0171 32.1455 16.0805C32.1455 7.42119 25.1624 0.401855 16.5476 0.401855Z" fill="white" />
					</svg>
				</div>
				<div className="border-[0.52px] border-black dark:border-white center-center">
					<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="fill-black dark:fill-white" d="M9.54759 0.322266C4.7625 0.322266 0.88208 4.20268 0.88208 8.98778V22.8526C0.88208 27.6377 4.7625 31.5181 9.54759 31.5181H23.4124C28.1975 31.5181 32.0779 27.6377 32.0779 22.8526V8.98778C32.0779 4.20268 28.1975 0.322266 23.4124 0.322266H9.54759ZM26.8786 3.78847C27.8353 3.78847 28.6117 4.5649 28.6117 5.52157C28.6117 6.47825 27.8353 7.25467 26.8786 7.25467C25.9219 7.25467 25.1455 6.47825 25.1455 5.52157C25.1455 4.5649 25.9219 3.78847 26.8786 3.78847ZM16.48 7.25467C21.2651 7.25467 25.1455 11.1351 25.1455 15.9202C25.1455 20.7053 21.2651 24.5857 16.48 24.5857C11.6949 24.5857 7.81449 20.7053 7.81449 15.9202C7.81449 11.1351 11.6949 7.25467 16.48 7.25467ZM16.48 10.7209C15.1011 10.7209 13.7786 11.2687 12.8035 12.2437C11.8285 13.2188 11.2807 14.5412 11.2807 15.9202C11.2807 17.2991 11.8285 18.6216 12.8035 19.5967C13.7786 20.5717 15.1011 21.1195 16.48 21.1195C17.8589 21.1195 19.1814 20.5717 20.1565 19.5967C21.1315 18.6216 21.6793 17.2991 21.6793 15.9202C21.6793 14.5412 21.1315 13.2188 20.1565 12.2437C19.1814 11.2687 17.8589 10.7209 16.48 10.7209Z" fill="white" />
					</svg>
				</div>
				<div className="border-[0.52px] border-black dark:border-white center-center">
					<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="fill-black dark:fill-white" d="M28.5443 0.401855H4.2809C2.36582 0.401855 0.814697 1.95298 0.814697 3.86806V28.1315C0.814697 30.0466 2.36582 31.5977 4.2809 31.5977H28.5443C30.4594 31.5977 32.0105 30.0466 32.0105 28.1315V3.86806C32.0105 1.95298 30.4594 0.401855 28.5443 0.401855ZM11.2133 24.6653H6.84069V12.5336H11.2133V24.6653ZM8.94988 10.31C7.61366 10.31 6.72111 9.41919 6.72111 8.23028C6.72111 7.04137 7.61192 6.15056 9.09719 6.15056C10.4334 6.15056 11.326 7.04137 11.326 8.23028C11.326 9.41919 10.4351 10.31 8.94988 10.31ZM26.8112 24.6653H22.579V18.0344C22.579 16.2008 21.4507 15.7779 21.0279 15.7779C20.605 15.7779 19.1942 16.0604 19.1942 18.0344C19.1942 18.3169 19.1942 24.6653 19.1942 24.6653H14.8216V12.5336H19.1942V14.2268C19.7575 13.2389 20.8858 12.5336 23.0019 12.5336C25.118 12.5336 26.8112 14.2268 26.8112 18.0344V24.6653Z" fill="white" />
					</svg>
				</div>
				<div className="border-[0.52px] border-black dark:border-white center-center">
					<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="fill-black dark:fill-white" d="M29.4957 0.404693C29.0449 0.426457 28.6313 0.570357 28.2678 0.729338C27.9321 0.876094 26.7264 1.43853 24.8066 2.33227C22.8868 3.22602 20.3429 4.41101 17.6313 5.6768C12.2081 8.20838 6.1138 11.0561 2.9911 12.5146C2.88387 12.5642 2.44836 12.7122 1.96736 13.12C1.48524 13.5287 0.949707 14.4157 0.949707 15.3857C0.949707 16.1683 1.30166 16.9652 1.72666 17.4215C2.15165 17.8778 2.58237 18.0911 2.94235 18.25V18.2467C4.15919 18.7847 7.79306 20.3986 8.65826 20.7829C8.96516 21.8037 10.2826 26.1736 10.5961 27.2725H10.593C10.8146 28.0503 11.0305 28.5571 11.3304 28.9802C11.4803 29.1918 11.6593 29.3835 11.8788 29.5348C11.963 29.5929 12.0563 29.638 12.15 29.6803C12.163 29.6864 12.1765 29.6879 12.1896 29.6938L12.153 29.6836C12.1802 29.6958 12.2045 29.7136 12.2322 29.7242C12.2773 29.7415 12.3086 29.7409 12.3693 29.7547C12.5831 29.8276 12.7964 29.8764 12.9939 29.8764C13.842 29.8764 14.362 29.3658 14.362 29.3658L14.3955 29.3387L18.0578 25.8995L22.5428 30.5054C22.6247 30.6338 23.2665 31.5977 24.7518 31.5977C25.638 31.5977 26.3388 31.1108 26.7871 30.6001C27.2354 30.0894 27.5147 29.5668 27.6402 28.8585L27.6432 28.8551C27.7434 28.2834 32.0368 4.35454 32.0368 4.35454L32.0277 4.39513C32.1613 3.73312 32.2008 3.09291 32.0429 2.44049C31.8851 1.78807 31.459 1.15138 30.946 0.817263C30.433 0.483149 29.9465 0.382928 29.4957 0.404693ZM28.8803 4.1956C28.7106 5.14102 24.8645 26.5867 24.6269 27.9319L18.1492 21.2801L13.7709 25.3889L14.9835 20.1269C14.9835 20.1269 23.3491 10.7284 23.8529 10.1813C24.2585 9.7432 24.3435 9.58964 24.3435 9.43727C24.3435 9.23469 24.2496 9.08896 24.0327 9.08896C23.8377 9.08896 23.5729 9.29635 23.4325 9.39331C21.6484 10.6278 14.0495 15.4341 10.3127 17.7935C10.0878 17.6934 6.71152 16.1887 4.89234 15.3823C8.12818 13.8708 13.675 11.2806 18.8409 8.86914C21.552 7.60357 24.0952 6.41751 26.0132 5.52462C27.6322 4.77091 28.4768 4.38065 28.8803 4.1956ZM24.5811 28.1788H24.5842L24.5811 28.1889C24.5831 28.1777 24.5797 28.1875 24.5811 28.1788Z" fill="white" />
					</svg>
				</div>
				<div className="border-[0.52px] border-black dark:border-white center-center">
					<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="fill-black dark:fill-white" d="M27.5202 4.96893C24.5783 2.0256 20.6662 0.403415 16.4982 0.401855C7.90954 0.401855 0.919761 7.38816 0.916641 15.9764C0.915082 18.7216 1.63262 21.4013 2.99595 23.7629L0.882324 31.5977L9.04512 29.6682C11.321 30.9098 13.8823 31.5634 16.4904 31.5649H16.4966C25.0837 31.5649 32.0735 24.5771 32.0782 15.9904C32.0813 11.8273 30.4621 7.91381 27.5202 4.96893ZM24.1213 21.5433C23.7968 22.4526 22.2073 23.3292 21.4929 23.3932C20.7785 23.4587 20.1093 23.7161 16.8211 22.4199C12.8637 20.8601 10.3648 16.8031 10.1713 16.5441C9.97636 16.2837 8.58184 14.4337 8.58184 12.5183C8.58184 10.6029 9.58796 9.66078 9.94517 9.27239C10.3024 8.88244 10.7235 8.78574 10.984 8.78574C11.243 8.78574 11.5035 8.78574 11.7297 8.7951C12.0073 8.80602 12.3146 8.82005 12.6063 9.46737C12.9526 10.2379 13.7091 12.1627 13.8058 12.3577C13.9026 12.5526 13.9681 12.7804 13.8386 13.0393C13.7091 13.2982 13.6436 13.4604 13.4502 13.6882C13.2552 13.9159 13.0415 14.1951 12.8668 14.3698C12.6718 14.5632 12.469 14.7753 12.6952 15.1637C12.923 15.5537 13.7029 16.828 14.8603 17.859C16.3484 19.1849 17.601 19.5951 17.991 19.7916C18.3809 19.9866 18.6071 19.9538 18.8349 19.6934C19.0626 19.4344 19.8082 18.5578 20.0672 18.1679C20.3261 17.7779 20.5866 17.8435 20.9438 17.9729C21.301 18.1024 23.215 19.0445 23.6034 19.2395C23.9934 19.4344 24.2523 19.5311 24.349 19.6934C24.4457 19.854 24.4457 20.6339 24.1213 21.5433Z" fill="white" />
					</svg>
				</div>
				<div className="border-[0.52px] border-black dark:border-white center-center">
					<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="fill-black dark:fill-white" d="M28.2967 0.401855H4.52849C2.4807 0.401855 0.814697 2.06786 0.814697 4.11565V27.8839C0.814697 29.9317 2.4807 31.5977 4.52849 31.5977H28.2967C30.3445 31.5977 32.0105 29.9317 32.0105 27.8839V4.11565C32.0105 2.06786 30.3445 0.401855 28.2967 0.401855ZM25.3302 14.0114C25.1616 14.027 24.9907 14.0374 24.8177 14.0374C22.8694 14.0374 21.1574 13.0354 20.1613 11.5209C20.1613 15.494 20.1613 20.0144 20.1613 20.0901C20.1613 23.5878 17.3255 26.4236 13.8278 26.4236C10.3302 26.4236 7.49432 23.5878 7.49432 20.0901C7.49432 16.5925 10.3302 13.7566 13.8278 13.7566C13.96 13.7566 14.0893 13.7685 14.2193 13.7767V16.8978C14.0893 16.8822 13.9615 16.8584 13.8278 16.8584C12.0422 16.8584 10.5953 18.3053 10.5953 20.0909C10.5953 21.8765 12.0422 23.3234 13.8278 23.3234C15.6134 23.3234 17.1903 21.9166 17.1903 20.131C17.1903 20.0604 17.2215 5.57739 17.2215 5.57739H20.2044C20.4852 8.24464 22.6384 10.3496 25.3302 10.5427V14.0114Z" fill="white" />
					</svg>
				</div>
			</div>
			<div className="my-20">
				<p className="text-black dark:text-white">(C) ALL RIGHTS RESERVED</p>
			</div>
		</footer>
	);
};

export default TheEnding;
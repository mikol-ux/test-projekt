import React from "react";
import Link from "next/link";
import GradientBtn from "@/components/Buttons/GradientBtn";

const TheEnding = () => /* Function to dynamically update the font size based on viewport width*/(
	<footer className="tpk-contained mt-40">
		<div className="flex justify-center items-center mb-32 w-full">
			<svg viewBox="0 0 105 20"><text x="0" y="15" className="fill-black dark:fill-white">THE PROJEKT</text></svg>
		</div>
		<div className="block md:grid md:grid-cols-6 grid-flow-col gap-4">
			<div className="md:col-span-4">
				<p className="tpk-text-md text-black dark:text-white mb-10">
					Speak to us directly, and figure out which plan works the best for you.
				</p>
				<GradientBtn href="/contact" className="block">I WANT TO SPEAK WITH SOMEONE</GradientBtn>
			</div>
			<div className="md:col-start-6 md:col-span-12">
				<div className="grid grid-cols-2 gap-4">
					<ul className="font-normal flex flex-col p-4 md:p-0 mt-4">
						<li className="my-1">
							<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">Home</Link>
						</li>
						<li className="my-1">
							<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">About Us</Link>
						</li>
						<li className="my-1">
							<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">Projects</Link>
						</li>
						<li className="my-1">
							<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">People</Link>
						</li>
						<li className="my-1">
							<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">Contact Us</Link>
						</li>
					</ul>
					<ul className="font-normal flex flex-col p-4 md:p-0 mt-4">
						<li className="my-1">
							<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">DWM</Link>
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
							<Link href="#" className="font-normal uppercase text-black dark:text-white hover:text-muted-2">News</Link>
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
				{/* Facebook */}
				<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="fill-black dark:fill-white" d="M16.5476 0.401855C7.9329 0.401855 0.949707 7.42119 0.949707 16.0805C0.949707 23.9402 6.71002 30.4312 14.2157 31.5648V20.2354H10.3568V16.1134H14.2157V13.3712C14.2157 8.83071 16.4166 6.83795 20.171 6.83795C21.9695 6.83795 22.9194 6.97122 23.3702 7.03236V10.629H20.809C19.2149 10.629 18.658 12.1483 18.658 13.8604V16.1134H23.3296L22.6963 20.2354H18.6596V31.5977C26.2729 30.5613 32.1455 24.0171 32.1455 16.0805C32.1455 7.42119 25.1624 0.401855 16.5476 0.401855Z" fill="white" />
				</svg>
			</div>
			<div className="border-[0.52px] border-black dark:border-white center-center">
				{/* Instagram */}
				<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="fill-black dark:fill-white" d="M9.54759 0.322266C4.7625 0.322266 0.88208 4.20268 0.88208 8.98778V22.8526C0.88208 27.6377 4.7625 31.5181 9.54759 31.5181H23.4124C28.1975 31.5181 32.0779 27.6377 32.0779 22.8526V8.98778C32.0779 4.20268 28.1975 0.322266 23.4124 0.322266H9.54759ZM26.8786 3.78847C27.8353 3.78847 28.6117 4.5649 28.6117 5.52157C28.6117 6.47825 27.8353 7.25467 26.8786 7.25467C25.9219 7.25467 25.1455 6.47825 25.1455 5.52157C25.1455 4.5649 25.9219 3.78847 26.8786 3.78847ZM16.48 7.25467C21.2651 7.25467 25.1455 11.1351 25.1455 15.9202C25.1455 20.7053 21.2651 24.5857 16.48 24.5857C11.6949 24.5857 7.81449 20.7053 7.81449 15.9202C7.81449 11.1351 11.6949 7.25467 16.48 7.25467ZM16.48 10.7209C15.1011 10.7209 13.7786 11.2687 12.8035 12.2437C11.8285 13.2188 11.2807 14.5412 11.2807 15.9202C11.2807 17.2991 11.8285 18.6216 12.8035 19.5967C13.7786 20.5717 15.1011 21.1195 16.48 21.1195C17.8589 21.1195 19.1814 20.5717 20.1565 19.5967C21.1315 18.6216 21.6793 17.2991 21.6793 15.9202C21.6793 14.5412 21.1315 13.2188 20.1565 12.2437C19.1814 11.2687 17.8589 10.7209 16.48 10.7209Z" fill="white" />
				</svg>
			</div>
			<div className="border-[0.52px] border-black dark:border-white center-center">
				{/* LinkedIn */}
				<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="fill-black dark:fill-white" d="M28.5443 0.401855H4.2809C2.36582 0.401855 0.814697 1.95298 0.814697 3.86806V28.1315C0.814697 30.0466 2.36582 31.5977 4.2809 31.5977H28.5443C30.4594 31.5977 32.0105 30.0466 32.0105 28.1315V3.86806C32.0105 1.95298 30.4594 0.401855 28.5443 0.401855ZM11.2133 24.6653H6.84069V12.5336H11.2133V24.6653ZM8.94988 10.31C7.61366 10.31 6.72111 9.41919 6.72111 8.23028C6.72111 7.04137 7.61192 6.15056 9.09719 6.15056C10.4334 6.15056 11.326 7.04137 11.326 8.23028C11.326 9.41919 10.4351 10.31 8.94988 10.31ZM26.8112 24.6653H22.579V18.0344C22.579 16.2008 21.4507 15.7779 21.0279 15.7779C20.605 15.7779 19.1942 16.0604 19.1942 18.0344C19.1942 18.3169 19.1942 24.6653 19.1942 24.6653H14.8216V12.5336H19.1942V14.2268C19.7575 13.2389 20.8858 12.5336 23.0019 12.5336C25.118 12.5336 26.8112 14.2268 26.8112 18.0344V24.6653Z" fill="white" />
				</svg>
			</div>
			<div className="border-[0.52px] border-black dark:border-white center-center">
				{/* Building with the public */}
				<svg width="66" height="31" viewBox="0 0 66 31" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M65.346 2.5723C61.8097 0.599019 51.318 -0.690483 36.5671 9.3714V20.847C38.0454 21.9281 42.5065 23.2431 42.5065 21.5824C47.7426 24.8491 51.4417 20.1823 52.5879 17.46L51.4938 14.3535L50.1298 13.3455C57.9375 12.582 64.5215 7.26959 65.346 2.5723Z" fill="white" />
					<path d="M0.653931 2.5723C4.19024 0.599019 14.682 -0.690483 29.4329 9.3714V20.847C27.9545 21.9281 23.4934 23.2431 23.4934 21.5824C18.2573 24.8491 14.5582 20.1823 13.412 17.46L14.5061 14.3535L15.8702 13.3455C8.06244 12.582 1.47845 7.26959 0.653931 2.5723Z" fill="white" />
					<path d="M29.306 8.88482V8.59175C29.0845 8.42894 28.7745 7.91963 29.3059 7.26317C28.3097 5.95414 29.8534 4.95774 30.6739 5.27033C30.7391 5.1531 30.8615 4.85613 30.8302 4.60605C31.1116 4.55916 31.208 4.54744 31.221 4.54744L31.3773 4.76235L32.2565 4.66466C32.4323 4.50836 32.8384 4.21948 32.9791 4.31326L33.038 8.88482H29.306Z" fill="white" />
					<path d="M36.6337 8.88311V8.59005C36.8551 8.42724 37.1652 7.91793 36.6337 7.26147C37.63 5.95244 36.0863 4.95604 35.2658 5.26862C35.2006 5.1514 35.0782 4.85443 35.1095 4.60435C34.8281 4.55746 34.7317 4.54573 34.7187 4.54573L34.5624 4.76065L33.6832 4.66296C33.5074 4.50666 33.1205 4.2175 32.9799 4.31128L32.9017 8.88311H36.6337Z" fill="white" />
					<path d="M29.3716 18.5166V21.1466L29.5283 21.373L29.4587 22.7141L29.7199 22.9928L29.7896 24.421L30.1379 24.8042C30.1031 25.2803 30.239 26.3543 31.061 26.842H33.0292L33.1859 18.5166H29.3716Z" fill="white" />
					<path d="M36.5638 18.5166V21.1466L36.4071 21.373L36.4768 22.7141L36.2155 22.9928L36.1458 24.421L35.7975 24.8042C35.8323 25.2803 35.6965 26.3543 34.8744 26.842H32.9062L32.7495 18.5166H36.5638Z" fill="white" />
					<rect x="29.334" y="8.86523" width="7.268" height="9.65159" fill="white" />
					<path d="M31.0663 26.4785C31.2017 27.6061 32.2667 30.1495 32.9419 30.4251C33.392 30.4251 34.7003 27.7643 34.9152 26.4785H31.0663Z" fill="white" />
					<path d="M34.7691 4.48887C34.8688 3.21554 35.6156 0.697901 37.8273 1.11001L37.9859 1.42531C37.0941 1.06265 35.1666 1.62615 35.0709 4.53994L34.7691 4.48887Z" fill="white" />
					<path d="M31.1547 4.48887C31.0549 3.21554 30.3082 0.697901 28.0964 1.11001L27.9379 1.42531C28.8297 1.06265 30.7572 1.62615 30.8529 4.53994L31.1547 4.48887Z" fill="white" />
					<path d="M35.2192 5.25291C35.9198 4.96372 37.6844 5.87198 36.6464 7.27325L35.2192 5.25291Z" fill="white" />
					<path d="M30.6856 5.25291C29.985 4.96372 28.2204 5.87198 29.2584 7.27325L30.6856 5.25291Z" fill="white" />
				</svg>
			</div>
			<div className="border-[0.52px] border-black dark:border-white center-center">
				{/* Whatsapp */}
				<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="fill-black dark:fill-white" d="M27.5202 4.96893C24.5783 2.0256 20.6662 0.403415 16.4982 0.401855C7.90954 0.401855 0.919761 7.38816 0.916641 15.9764C0.915082 18.7216 1.63262 21.4013 2.99595 23.7629L0.882324 31.5977L9.04512 29.6682C11.321 30.9098 13.8823 31.5634 16.4904 31.5649H16.4966C25.0837 31.5649 32.0735 24.5771 32.0782 15.9904C32.0813 11.8273 30.4621 7.91381 27.5202 4.96893ZM24.1213 21.5433C23.7968 22.4526 22.2073 23.3292 21.4929 23.3932C20.7785 23.4587 20.1093 23.7161 16.8211 22.4199C12.8637 20.8601 10.3648 16.8031 10.1713 16.5441C9.97636 16.2837 8.58184 14.4337 8.58184 12.5183C8.58184 10.6029 9.58796 9.66078 9.94517 9.27239C10.3024 8.88244 10.7235 8.78574 10.984 8.78574C11.243 8.78574 11.5035 8.78574 11.7297 8.7951C12.0073 8.80602 12.3146 8.82005 12.6063 9.46737C12.9526 10.2379 13.7091 12.1627 13.8058 12.3577C13.9026 12.5526 13.9681 12.7804 13.8386 13.0393C13.7091 13.2982 13.6436 13.4604 13.4502 13.6882C13.2552 13.9159 13.0415 14.1951 12.8668 14.3698C12.6718 14.5632 12.469 14.7753 12.6952 15.1637C12.923 15.5537 13.7029 16.828 14.8603 17.859C16.3484 19.1849 17.601 19.5951 17.991 19.7916C18.3809 19.9866 18.6071 19.9538 18.8349 19.6934C19.0626 19.4344 19.8082 18.5578 20.0672 18.1679C20.3261 17.7779 20.5866 17.8435 20.9438 17.9729C21.301 18.1024 23.215 19.0445 23.6034 19.2395C23.9934 19.4344 24.2523 19.5311 24.349 19.6934C24.4457 19.854 24.4457 20.6339 24.1213 21.5433Z" fill="white" />
				</svg>
			</div>
			<div className="border-[0.52px] border-black dark:border-white center-center">
				{/* Tiktok */}
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

export default TheEnding;
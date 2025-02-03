//
import GradientBtn from "@/components/Buttons/GradientBtn";
import LottieAni from "@/components/Lottie";
import Link from "next/link";

const TheBeginning = () => {
	return (
		<header className="fixed w-full top-8 z-10">
			<div className="tpk-contained absolute inset-0 -z-[1] backdrop-blur-md w-full h-full"></div>
			<nav className="tpk-contained">
				<div className="flex flex-wrap items-center justify-between mx-auto p-4 lg:p-2 xl:px-16">
					<Link className="w-[min-content]" href="/">
						<svg className="w-14 h-full lg:hidden" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.86 307.94">
							<path className="fill-black dark:fill-white" d="M180.36,216.88l27.44,27.44c.78,.78,1.99,.93,2.93,.36l41.68-24.95c4.84-2.9,8.23-7.71,9.34-13.24l18.17-90.84c.22-1.11-.63-2.15-1.77-2.15h-13.89c-2.59,0-4.88,1.66-5.7,4.11l-2.94,8.87c-3.83,11.55-10.3,22.04-18.91,30.65l-56.35,56.35c-.94,.94-.94,2.46,0,3.39Z" />
							<path className="fill-black dark:fill-white" d="M162.5,216.88l-27.44,27.44c-.78,.78-1.99,.93-2.93,.36l-41.68-24.95c-4.84-2.9-8.23-7.71-9.34-13.24l-18.17-90.84c-.22-1.11,.63-2.15,1.77-2.15h13.89c2.59,0,4.88,1.66,5.7,4.11l2.94,8.87c3.83,11.55,10.3,22.04,18.91,30.65l56.35,56.35c.94,.94,.94,2.46,0,3.39Z" />
							<path className="fill-black dark:fill-white" d="M222.08,109.7v7.71c0,.87-.7,1.56-1.56,1.59-11.1,.37-21.13,4.73-28.77,11.72-.26,.23-.52,.46-.77,.71-.22,.2-.43,.41-.64,.62-.14,.14-.28,.29-.43,.43-.2,.21-.41,.43-.62,.64-7.38,7.73-12.03,18.07-12.42,29.54-.03,.87-.72,1.56-1.59,1.56h-7.69c-.87,0-1.56-.7-1.59-1.57-.36-11.07-4.71-21.09-11.66-28.72-.49-.53-.98-1.06-1.48-1.57-.07-.07-.14-.14-.22-.22-.51-.51-1.03-1-1.57-1.48-.27-.24-.54-.49-.81-.71-7.53-6.54-17.24-10.61-27.93-10.96-.85-.03-1.54-.7-1.54-1.56v-7.72c0-.87,.7-1.56,1.56-1.59,11.47-.39,21.81-5.04,29.54-12.42,.22-.2,.43-.41,.64-.62,.14-.14,.29-.29,.43-.43,.21-.21,.41-.43,.62-.64,7.39-7.73,12.04-18.07,12.42-29.54,.03-.87,.72-1.56,1.59-1.56h7.69c.87,0,1.56,.7,1.59,1.56,.39,11.45,5.02,21.77,12.39,29.51,.58,.61,1.17,1.2,1.77,1.77,.24,.23,.48,.45,.73,.67,.26,.24,.53,.47,.79,.7,7.54,6.58,17.28,10.66,28.01,11.02,.86,.03,1.54,.71,1.54,1.57Z" />
						</svg>
						<svg className="w-[12em] lg:w-[14em] h-full hidden lg:block" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1186.96 307.94">
							<path className="fill-black dark:fill-white" d="M180.36,216.88l27.44,27.44c.78,.78,1.99,.93,2.93,.36l41.68-24.95c4.84-2.9,8.23-7.71,9.34-13.24l18.17-90.84c.22-1.11-.63-2.15-1.77-2.15h-13.89c-2.59,0-4.88,1.66-5.7,4.11l-2.94,8.87c-3.83,11.55-10.3,22.04-18.91,30.65l-56.35,56.35c-.94,.94-.94,2.46,0,3.39Z" />
							<path className="fill-black dark:fill-white" d="M162.5,216.88l-27.44,27.44c-.78,.78-1.99,.93-2.93,.36l-41.68-24.95c-4.84-2.9-8.23-7.71-9.34-13.24l-18.17-90.84c-.22-1.11,.63-2.15,1.77-2.15h13.89c2.59,0,4.88,1.66,5.7,4.11l2.94,8.87c3.83,11.55,10.3,22.04,18.91,30.65l56.35,56.35c.94,.94,.94,2.46,0,3.39Z" />
							<path className="fill-black dark:fill-white" d="M222.08,109.7v7.71c0,.87-.7,1.56-1.56,1.59-11.1,.37-21.13,4.73-28.77,11.72-.26,.23-.52,.46-.77,.71-.22,.2-.43,.41-.64,.62-.14,.14-.28,.29-.43,.43-.2,.21-.41,.43-.62,.64-7.38,7.73-12.03,18.07-12.42,29.54-.03,.87-.72,1.56-1.59,1.56h-7.69c-.87,0-1.56-.7-1.59-1.57-.36-11.07-4.71-21.09-11.66-28.72-.49-.53-.98-1.06-1.48-1.57-.07-.07-.14-.14-.22-.22-.51-.51-1.03-1-1.57-1.48-.27-.24-.54-.49-.81-.71-7.53-6.54-17.24-10.61-27.93-10.96-.85-.03-1.54-.7-1.54-1.56v-7.72c0-.87,.7-1.56,1.56-1.59,11.47-.39,21.81-5.04,29.54-12.42,.22-.2,.43-.41,.64-.62,.14-.14,.29-.29,.43-.43,.21-.21,.41-.43,.62-.64,7.39-7.73,12.04-18.07,12.42-29.54,.03-.87,.72-1.56,1.59-1.56h7.69c.87,0,1.56,.7,1.59,1.56,.39,11.45,5.02,21.77,12.39,29.51,.58,.61,1.17,1.2,1.77,1.77,.24,.23,.48,.45,.73,.67,.26,.24,.53,.47,.79,.7,7.54,6.58,17.28,10.66,28.01,11.02,.86,.03,1.54,.71,1.54,1.57Z" />
							<g>
								<path className="fill-black dark:fill-white" d="M338.46,113.37v9.63h29.02v77.55h10.97V123h29.02v-9.63h-69.01Z" />
								<path className="fill-black dark:fill-white" d="M475.87,113.37v37.07h-46.57v-37.07h-10.98v87.18h10.98v-41.21h46.57v41.21h10.98V113.37h-10.98Z" />
								<path className="fill-black dark:fill-white" d="M514.16,190.43v-30.61h45.97v-9.26h-45.97v-27.56h50.6v-9.63h-61.57v87.18h63.03v-10.12h-52.06Z" />
								<path className="fill-black dark:fill-white" d="M655.47,121.78c-4.51-5.36-11.58-8.41-20.72-8.41h-36.34v87.18h10.97v-36.58h23.78c19.02,0,28.17-9.63,28.17-25.61,0-6.58-2.2-12.31-5.86-16.58Zm-23.16,33.29h-22.93v-32.19h23.54c11.09,0,17.56,5.49,17.56,15.97s-5.86,16.22-18.17,16.22Z" />
								<path className="fill-black dark:fill-white" d="M735.83,181.41c-.86-12.93-3.66-19.03-12.56-22.2v-.36c10.48-3.42,15.12-10.97,15.12-21.58,0-14.27-10.37-23.9-25.73-23.9h-40.73v87.18h10.98v-36.82h24.26c11.71,0,16.83,4.51,17.68,17.31,.98,14.63,1.34,17.92,3.17,19.51h11.83v-.49c-1.59-1.1-3.05-4.63-4.02-18.65Zm-27.07-26.58h-25.85v-31.95h26.46c12.8,0,17.68,5.36,17.68,15.97,0,9.88-6.1,15.98-18.29,15.98Z" />
								<path className="fill-black dark:fill-white" d="M791.06,111.42c-26.34,0-42.68,19.38-42.68,45.48s16.34,45.48,42.68,45.48,42.67-19.39,42.67-45.48-16.33-45.48-42.67-45.48Zm0,81.33c-20.49,0-31.46-15.37-31.46-35.85s10.97-35.97,31.46-35.97,31.46,15.48,31.46,35.97-10.98,35.85-31.46,35.85Z" />
								<path className="fill-black dark:fill-white" d="M879.95,113.37v64.38c0,10.97-5.13,15.48-13.9,15.48-10.25,0-15.12-4.63-15.12-20.12v-.85h-10.86v1.22c0,20.24,9.88,28.78,25.61,28.78,16.83,0,25.24-9.88,25.24-23.78V113.37h-10.97Z" />
								<path className="fill-black dark:fill-white" d="M917.13,190.43v-30.61h45.97v-9.26h-45.97v-27.56h50.6v-9.63h-61.57v87.18h63.04v-10.12h-52.07Z" />
								<path className="fill-black dark:fill-white" d="M1014.43,148.24l35.24-34.87h-13.78l-42.92,43.28v-43.28h-10.97v87.18h10.97v-30.85l14.02-14.02,32.8,44.87h12.81l-38.17-52.31Z" />
								<path className="fill-black dark:fill-white" d="M1055.03,113.37v9.63h29.02v77.55h10.98V123h29.02v-9.63h-69.02Z" />
							</g>
						</svg>
					</Link>
					<button data-collapse-toggle="tpk-nav-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black dark:text-white md:hidden focus:outline-none" aria-controls="tpk-nav-menu" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 2H30" className="stroke-black dark:stroke-white" strokeWidth="3" />
							<path d="M0 15H30" className="stroke-black dark:stroke-white" strokeWidth="3" />
							<path d="M0 28H30" className="stroke-black dark:stroke-white" strokeWidth="3" />
						</svg>
					</button>
					<div id="tpk-nav-menu" className="items-center justify-between hidden w-full md:flex md:w-auto">
						<ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border-[.5px] border-muted-2 dark:border-muted-3 md:flex-row md:space-x-8 md:mt-0 md:border-0">
							<li>
								<Link href="/AboutUs" className="block uppercase py-2 px-3 text-black dark:text-white hover:text-sky-blue hover:font-medium md:max-lg:p-0" aria-current="page">About Us</Link>
							</li>
							<li>
								<Link href="#" className="block uppercase py-2 px-3 text-black dark:text-white hover:text-sky-blue hover:font-medium md:max-lg:p-0">Services</Link>
							</li>
							<li>
								<Link href="#" className="block uppercase py-2 px-3 text-black dark:text-white hover:text-sky-blue hover:font-medium md:max-lg:p-0">Pricing</Link>
							</li>
							<li className="relative group">
								<Link href="#"
									className="block uppercase py-2 px-3 text-black dark:text-white hover:text-sky-blue hover:font-medium md:max-lg:p-0">
									Resources
								</Link>
								<div className="hidden absolute group-hover:block -left-12 sm:left-0 md:-translate-x-2/4 pt-12">
									<ul className="backdrop-blur-md bg-white/30 font-extralight dark:text-white w-max rounded-lg py-5">
										<li>
											<Link href="#" className="flex items-center justify-start px-4 pe-8 py-1 text-inherit">
												<span className="pe-2">
													<LottieAni json="/img/json/Newspaper.json" play={false} className="w-10" />
												</span>
												Dancing with machines &#40; Blog &#41;
											</Link>
										</li>
										<li>
											<Link href="#" className="flex items-center justify-start px-4 pe-8 py-1 text-inherit">
												<span className="pe-2">
													<LottieAni json="/img/json/Newspaper.json" play={false} className="w-10" />
												</span>
												Case studies
											</Link>
										</li>
										<li>
											<Link href="#" className="flex items-center justify-start px-4 pe-8 py-1 text-inherit">
												<span className="pe-2">
													<LottieAni json="/img/json/Newspaper.json" play={false} className="w-10" />
												</span>
												Process
											</Link>
										</li>
										<li>
											<Link href="#" className="flex items-center justify-start px-4 pe-8 py-1 text-inherit">
												<span className="pe-2">
													<LottieAni json="/img/json/Newspaper.json" play={false} className="w-10" />
												</span>
												The Forge
											</Link>
										</li>
									</ul>
								</div>

							</li>
						</ul>
					</div>

					<GradientBtn href="/login" className="hidden md:flex py-2 !px-14" isAnimated={true}>Login</GradientBtn>
				</div>
			</nav>
		</header>
	)
}

export default TheBeginning;
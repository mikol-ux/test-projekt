import React, { FC } from "react";

interface CardInterface {
	count: number,
	title: string,
	body: string
}

const Card: FC<CardInterface> = ({count, title, body}) => {
	return (
		<div className="relative group border-muted-7 border rounded-md p-5 h-[28rem] gap-4">
			{/* Default Gradient */}
			<div className="absolute inset-0 bg-[radial-gradient(at_0.6%_0%,black_70%,#142935_100%)] transition-opacity duration-1000 ease-in-out opacity-100 group-hover:opacity-0"></div>
			{/* Hover Gradient */}
			<div className="absolute inset-0 bg-[radial-gradient(at_0.6%_0%,black_15%,#142935_50%,var(--deep-blue)_100%)] transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"></div>

			<div className="relative z-[2] w-full h-full flex flex-col justify-between">
				<h6 className="py-3 w-full text-white-800 dark:text-muted-4 text-5xl lg:text-7xl z-[1]">0{count}</h6>
				<div className="z-[1]">
					<h5 className="text-muted-3 font-light mb-2 dark:text-white tpk-text-lg uppercase">
						{title}
					</h5>
					<p className="text-black font-light dark:text-white tpk-text-sm">
						{body}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Card;
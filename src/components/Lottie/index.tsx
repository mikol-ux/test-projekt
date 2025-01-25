//
"use client";
import { FC } from "react";
import Lottie from "react-lottie-player";

interface LottieData {
	json: string;
	play: boolean;
	className: string;
}

const LottieAni: FC<LottieData> = ({json, play, className}) => {
	return (
		<Lottie path={json} play={play} className={className} />
	);
}

export default LottieAni;
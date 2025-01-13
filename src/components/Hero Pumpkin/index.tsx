//
import { FC } from "react";
import Image from "next/image";

const HeroPumpkin: FC = () => {
	return (
		<Image src="/img/home/decoration-pumpkin-1.png" className="w-full h-full object-cover absolute top-0 -right-1/3 scale-110 -z-[1]" width="1237" height="910" alt="Hero Background" />
	);
}

export default HeroPumpkin;
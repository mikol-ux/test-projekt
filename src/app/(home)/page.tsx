import { Fragment } from "react";
import TheHero from "./sections/TheHero";
import TheDescription from "./sections/TheDescription/TheDescription";
import TheDirections from "./sections/TheDirections/TheDirections";
import TheService from "./sections/TheService/TheService";
import TheAdvice from "./sections/TheAdvice/TheAdvice";
import TheEvidence from "./sections/TheEvidence/TheEvidence";
import TheProcess from "./sections/TheProcess/TheProcess";
import TheBlog from "./sections/TheBlog/TheBlog";
import TheForge from "./sections/TheForge/TheForge";
import HeroPumpkin from "@/components/Hero Pumpkin";
import TheVideo from "./sections/TheVideo";
import TheOffers from "./sections/TheOffers";
import TheQuestions from "./sections/TheQuestions";
import TheProof from "./sections/TheProof";

export default function Home() {
	return (
		<Fragment>
			<div className="relative overflow-hidden">
				<HeroPumpkin />
				<TheHero />
			</div>
			<main className="flex flex-col gap-32">
				<TheDirections /> {/* Robert */}
				<TheService /> {/* Michael */}
				<TheVideo /> {/* Michael */}
				<TheOffers /> {/* Michael */}
				<TheProcess /> {/* Robert  */}
				<TheEvidence /> {/* Robert */}
				<TheForge /> {/* Michael */}
				<TheBlog /> {/* Robert */}
				<TheQuestions />{/* Michael */}
				<TheProof /> {/* Robert */}
				{/* <TheDescription /> */}
				{/* <TheAdvice /> */}
			</main>
		</Fragment>
	);
}
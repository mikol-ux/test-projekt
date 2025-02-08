import { Fragment } from "react";
import TheHero from "./sections/TheHero";
import TheDescription from "./sections/TheDescription";
import TheDirections from "./sections/TheDirections";
import TheService from "./sections/TheService";
import TheAdvice from "./sections/TheAdvice";
import TheEvidence from "./sections/TheEvidence";
import TheProcess from "./sections/TheProcess";
import TheBlog from "./sections/TheBlog";
import TheForge from "./sections/TheForge";
import HeroPumpkin from "@/components/Hero Pumpkin";
import TheVideo from "./sections/TheVideo";
import TheQuestions from "./sections/TheQuestions";
import TheProof from "./sections/TheProof";
import TheOffers from "./sections/TheOffers";
import TheQuote from "./sections/TheQuote";

export default function Home() {
	return (
		<Fragment>
			<div className="relative overflow-hidden border border-green-400">
				<HeroPumpkin />
				<TheHero />
				<TheQuote />
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
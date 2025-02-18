import { Fragment } from "react";
import TheHero from "./sections/TheHero";
// import TheDescription from "./sections/TheDescription";
import TheDirections from "./sections/TheDirections";
import TheService from "./sections/TheService";
// import TheAdvice from "./sections/TheAdvice";
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
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-linear-90 from-black via-black/20 to-black/55"></div>
				<HeroPumpkin />
				<TheHero />
				<TheQuote />
			</section>
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
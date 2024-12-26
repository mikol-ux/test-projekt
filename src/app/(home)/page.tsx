import TheHero from "./sections/TheHero/TheHero";
import { Fragment } from "react";
import TheDescription from "./sections/TheDescription/TheDescription";
import TheDirections from "./sections/TheDirections/TheDirections";
import TheService from "./sections/TheService/TheService";
import TheAdvice from "./sections/TheAdvice/TheAdvice";
import TheEvidence from "./sections/TheEvidence/TheEvidence";

export default function Home() {
	return (
		<Fragment>
			<TheHero />
			<main className="flex flex-col gap-32">
				<TheDescription />
				<TheDirections />
				<TheService />
				<TheAdvice />
				<TheEvidence />
			</main>
		</Fragment>
	);
}
import TheHero from "./sections/TheHero/TheHero";
import { Fragment } from "react";
import TheDescription from "./sections/TheDescription/TheDescription";
import TheDirections from "./sections/TheDirections/TheDirections";

export default function Home() {
	return (
		<Fragment>
			<TheHero />
			<main className="flex flex-col gap-32">
				<TheDescription />
				<TheDirections />
			</main>
		</Fragment>
	);
}
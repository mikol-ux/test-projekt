import TheHero from "./sections/TheHero/TheHero";
import { Fragment } from "react";
import TheDescription from "./sections/TheDescription/TheDescription";

export default function Home() {
	return (
		<Fragment>
			<TheHero />
			<TheDescription />
		</Fragment>
	);
}
import TheBeginning from "./partials/TheBeginning/TheBeginning";
import TheEnding from "./partials/TheEnding/TheEnding";
import { Fragment } from "react";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
	return (
		<Fragment>
				<TheBeginning />
				{children}
				<TheEnding />
		</Fragment>
	);
}

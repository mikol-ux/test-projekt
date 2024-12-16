import TheBeginning from "./partials/Navbar/TheBeginning";
import TheEnding from "./partials/Footer/TheEnding";
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

import TheBeginning from "./components/Navbar/TheBeginning";
import TheEnding from "./components/Footer/TheEnding";
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

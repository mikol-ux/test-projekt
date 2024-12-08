import TheBeginning from "../components/Navbar/TheBeginning";
import TheEnding from "../components/Footer/TheEnding";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
				<TheBeginning />
				{children}
				<TheEnding />
		</div>
	);
}

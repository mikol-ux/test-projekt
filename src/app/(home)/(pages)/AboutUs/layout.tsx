import Navbar from "./components/Navbar/TheBeginning";
import Footer from "./components/Footer/TheEnding";
import { Fragment } from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Fragment>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Fragment>
    );
}

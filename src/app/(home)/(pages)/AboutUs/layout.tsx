import { Fragment } from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Fragment>
            <main>{children}</main>
        </Fragment>
    );
}

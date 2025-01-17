import { Fragment } from "react";

import OriginPage from "../sections/OriginPage/OriginPage";

export default function AboutUsPage() {
    return (
        <Fragment>
            
            <main className="flex flex-col gap-32">
                <OriginPage />
            </main>
        </Fragment>
    );
}
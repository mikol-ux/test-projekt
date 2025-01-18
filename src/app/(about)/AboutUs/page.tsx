import { Fragment } from "react";

import OriginPage from "../sections/OriginPage/OriginPage";
import VideoPlayer from "../sections/VideoPlayer/VideoPlayer";

export default function AboutUsPage() {
    return (
        <Fragment>
            
            <main className="flex flex-col gap-32">
                <OriginPage />
                <VideoPlayer />
            </main>
        </Fragment>
    );
}
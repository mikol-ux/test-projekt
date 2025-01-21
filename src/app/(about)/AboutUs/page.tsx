import { Fragment } from "react";

import OriginPage from "../sections/TheDescription/OriginPage";
import VideoPlayer from "../sections/MediaPlayer/VideoPlayer";
import Innovation from "../sections/TheMission/innovation";

export default function AboutUsPage() {
    return (
        <Fragment>
            
            <main className="flex flex-col gap-32">
                <OriginPage />
                <VideoPlayer />
                <Innovation />
            </main>
        </Fragment>
    );
}
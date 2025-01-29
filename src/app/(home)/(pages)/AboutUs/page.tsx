import { Fragment } from "react";

import OriginPage from "./sections/TheDescription/OriginPage";
import VideoPlayer from "./sections/MediaPlayer/VideoPlayer";
import Innovation from "./sections/TheMission/innovation";
import BuildingPublic from "./sections/BuildWithPublic/building";
import StatisticsSection from "./sections/AchievementStory/statistics";
import BuildTeam from "./sections/DreamBuilders/team";
import DreamSection from "./sections/BuildTogether/dream"

export default function AboutUsPage() {
    return (
        <Fragment>

            <main className="flex flex-col gap-32">
                {/* <OriginPage /> */}
                {/* <VideoPlayer /> */}
                {/* <Innovation /> */}
                {/* <BuildingPublic /> */}
                {/* <StatisticsSection /> */}
                <BuildTeam />
                {/* <DreamSection /> */}
            </main>
        </Fragment>
    );
}
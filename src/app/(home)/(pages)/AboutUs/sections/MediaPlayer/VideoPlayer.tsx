import { FC } from "react";

const VideoPlayer: FC = () => {
  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] aspect-video">
        <video
          className="w-full h-full object-cover rounded-lg shadow-lg"
          controls
          poster="/img/aboutUs/video-player-image.png"
        >
          <source src="path/to/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
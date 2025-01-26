import { FC } from "react";

const VideoPlayer: FC = () => {
  return (
    <div className="flex justify-center">
      <video
        className="w-11/12"
        style={{ height: '55vw' }}
        controls
        poster="/img/aboutUs/video-player-image.png"
      >
        <source src="path/to/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
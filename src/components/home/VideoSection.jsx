import { useState } from "react";
import comingSoon from "../../assets/video/comming-soon.mov";
import videoPlaceholder from "../../assets/video/Video-Placeholder.jpg";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="container ">
      <div className="max-h-[550p] w-full mt-20 mb-6 rounded-lg relative">
        {!isPlaying ? (
          <img
            src={videoPlaceholder}
            alt="Video Thumbnail"
            className="w-full h-full rounded-lg cursor-pointer"
            onClick={() => setIsPlaying(true)}
          />
        ) : (
          <video src={comingSoon} autoPlay loop className="rounded-lg" />
        )}
      </div>
    </div>
  );
};

export default VideoSection;

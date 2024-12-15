import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="container">
      <div className="max-h-[550p] w-full mt-20 mb-6 rounded-lg relative">
        {!isPlaying ? (
          <img
            src="https://gettravel.com/wp-content/uploads/2018/04/Video-Placeholder.jpg"
            alt="Video Thumbnail"
            className="w-full h-full rounded-lg cursor-pointer"
            onClick={() => setIsPlaying(true)}
          />
        ) : (
          // Video Section
          <iframe
            className="w-full h-[550px] rounded-lg"
            src="https://www.youtube.com/embed/LMlCN6_vUvs?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoSection;

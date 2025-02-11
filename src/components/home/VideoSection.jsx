import { useState } from "react";
// import comingSoon from "../../assets/video/comming-soon.mov";
import { motion } from "framer-motion";
import { IoIosPlay } from "react-icons/io";
import videoPlaceholder from "../../assets/video/Video-Placeholder.png";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="container ">
      <div className="relative h-auto w-full mx-auto mt-10 mb-6 rounded-xl p-[2px] bg-gradient-to-r from-blue-300 via-green-300 to-purple-300">
        <div className="bg-white rounded-xl overflow-hidden">
          <img
            src={videoPlaceholder}
            alt="Video Thumbnail"
            className="w-full h-auto rounded-xl cursor-pointer"
            onClick={() => setIsPlaying(true)}
          />

          {/* Centered Play Button */}
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="bg-blue-900 flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full shadow-lg cursor-pointer"
              whileHover={{ scale: 1.1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <IoIosPlay className="text-white text-4xl sm:text-5xl lg:text-6xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="max-h-[550p] w-full mt-20 mb-6 relative ">
        {!isPlaying ? (
          <img
            src={videoPlaceholder}
            alt="Video Thumbnail"
            className="w-full h-full rounded-[20px] cursor-pointer"
            onClick={() => setIsPlaying(true)}
          />
        ) : (
          <video src={comingSoon} autoPlay loop className="rounded-[20px]" />
        )}
      </div> */}
    </div>
  );
};

export default VideoSection;

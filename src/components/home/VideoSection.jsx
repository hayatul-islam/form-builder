import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosPlay } from "react-icons/io";
import comingSoon from "../../assets/video/comming-soon.mov";
import videoPlaceholder from "../../assets/video/Video-Placeholder.png";
import Modal from "../ui/Modal";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const onClose = () => {
    setIsPlaying(false);
  };

  return (
    <div className="container ">
      <div className="relative h-auto w-full mx-auto mt-10 mb-6 rounded-xl p-[1px] bg-gradient-to-r from-blue-300 via-green-300 to-purple-300">
        <div className="bg-white rounded-xl overflow-hidden pointer-events-none">
          <img
            src={videoPlaceholder}
            alt="Video Thumbnail"
            className="w-full h-auto rounded-xl"
          />

          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-blue-900 flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full shadow-lg"
              >
                <IoIosPlay className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {isPlaying && (
        <Modal title=" " width="1100" onClose={onClose}>
          <video src={comingSoon} autoPlay loop className="rounded-[20px]" />
        </Modal>
      )}

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

import builderGif from "../../assets/img/form-builder.gif";

const VideoSection = () => {
  return (
    <div className="container section-gap">
      <div className="relative h-auto w-full mx-auto mt-10 mb-6 rounded-xl p-[1px] bg-gradient-to-r from-blue-300 via-green-300 to-purple-300">
        <div className="bg-white rounded-xl overflow-hidden pointer-events-none">
          <img
            // src={videoPlaceholder}
            src={builderGif}
            alt="Builder gif"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

// import { motion } from "framer-motion";
// import { useState } from "react";
// import builderGif from "../../assets/img/form-builder.gif";
// import comingSoon from "../../assets/video/comming-soon.mov";
// import Modal from "../ui/Modal";

// const VideoSection = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const onClose = () => {
//     setIsPlaying(false);
//   };

//   const pulseVariants = {
//     animate: {
//       scale: [1, 1.3, 1],
//       opacity: [0.7, 0.3, 0],
//     },
//   };

//   const pulseTransition = {
//     duration: 2,
//     repeat: Infinity,
//     ease: "easeInOut",
//     times: [0, 0.5, 1],
//   };

//   const iconVariants = {
//     initial: { pathLength: 0, opacity: 0 },
//     animate: {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { duration: 1, ease: "easeInOut" },
//         opacity: { duration: 0.5 },
//       },
//     },
//   };

//   return (
//     <div className="container section-gap">
//       <div className="relative h-auto w-full mx-auto mt-10 mb-6 rounded-xl p-[1px] bg-gradient-to-r from-blue-300 via-green-300 to-purple-300">
//         <div className="bg-white rounded-xl overflow-hidden pointer-events-none">
//           <img
//             // src={videoPlaceholder}
//             src={builderGif}
//             alt="Video Thumbnail"
//             className="w-full h-auto rounded-xl"
//           />

//           <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
//             {/* <motion.div
//               whileHover={{ scale: 1.1 }}
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 1.5,
//                 ease: "easeInOut",
//               }}
//             >
//               <button
//                 onClick={() => setIsPlaying(true)}
//                 className="bg-blue-900 flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full shadow-lg"
//               >
//                 <IoIosPlay className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl" />
//               </button>
//             </motion.div> */}

//             <motion.button
//               onClick={() => setIsPlaying(true)}
//               className="relative bg-primary rounded-full w-16 h-16 md:w-24 md:h-24 z-10 flex items-center justify-center "
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               transition={{ type: "spring", stiffness: 400, damping: 17 }}
//             >
//               {/* First pulse ring */}
//               <motion.div
//                 className="absolute inset-0 bg-green-500/30 rounded-full"
//                 variants={pulseVariants}
//                 animate="animate"
//                 transition={{
//                   ...pulseTransition,
//                   delay: 0,
//                 }}
//               />

//               {/* Second pulse ring */}
//               <motion.div
//                 className="absolute inset-0 bg-red-400/30 rounded-full"
//                 variants={pulseVariants}
//                 animate="animate"
//                 transition={{
//                   ...pulseTransition,
//                   delay: 0.5,
//                 }}
//               />

//               {/* Play icon */}
//               <motion.div
//                 className="relative w-8 h-8"
//                 initial={{ scale: 0.5, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//               >
//                 <motion.svg
//                   viewBox="0 0 24 24"
//                   className="w-full h-full"
//                   initial="initial"
//                   animate="animate"
//                 >
//                   <motion.path
//                     d="M8 5v14l11-7z"
//                     className="fill-white stroke-white stroke-2"
//                     variants={iconVariants}
//                   />
//                 </motion.svg>
//               </motion.div>
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {isPlaying && (
//         <Modal title=" " width="1100" onClose={onClose}>
//           <video src={comingSoon} autoPlay loop className="rounded-[20px]" />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default VideoSection;

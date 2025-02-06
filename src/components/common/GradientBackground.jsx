import VideoSection from "../home/VideoSection";

const DarkGradientBackground = () => {
  return (
    <div className="relative ">
      {/* Main background */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr via-gray-900 to-gray-950" /> */}

      {/* Glow effects */}
      <div className="absolute inset-0 w-[90%] mx-auto">
        {/* Purple-blue glow in top right */}
        <div className="absolute -top-40 left-[-50%] translate-x-[50%] bg-[#332E6B]/50 w-full h-full rounded-full blur-3xl" />

        {/* Blue glow in bottom left */}
        <div className="absolute bottom-0 left-[-50%] translate-x-[50%] w-full h-full bg-blue-600/10 rounded-full blur-3xl" />
      </div>
      <VideoSection />
    </div>
  );
};

export default DarkGradientBackground;

// const DarkGradientBackground = () => {
//   return (
//     <div className="relative min-h-screen ">
//       {/* Glow effects */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-40 right-20 w-screen h-screen bg-purple-600/20 rounded-full blur-3xl" />

//         <div className="absolute bottom-0 left-20 w-screen h-screen bg-blue-600/20 rounded-full blur-3xl" />
//       </div>
//       <VideoSection />
//     </div>
//   );
// };

// export default DarkGradientBackground;

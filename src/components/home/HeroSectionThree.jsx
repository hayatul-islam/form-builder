import { BsStars } from "react-icons/bs";

const HeroSectionThree = () => {
  return (
    <section className=" pt-36 pb-24 relative overflow-hidden bg-gradient-to-b from-[#0A0F1C] via-[#101729] to-[#151C32]">
      <div className="container flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/10 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 backdrop-blur-sm border border-blue-400/10">
          <BsStars className="text-blue-400 mr-2" />
          <span className="text-sm md:text-base text-blue-100 font-medium">
            Welcome to Form Builder
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-snug md:leading-tight">
          Build Better Forms <br />
          <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300 text-transparent bg-clip-text">
            Drag, Drop, Done
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl leading-relaxed">
          Create stunning forms and surveys without writing a single line of
          code. Save time and resources while delivering professional results
          that truly impress.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-button text-base md:text-lg font-medium whitespace-nowrap shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            Start Building Free
          </button>
          <button className="bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white px-8 md:px-10 py-3 md:py-4 rounded-button text-base md:text-lg font-medium whitespace-nowrap border border-white/20 transition-all duration-300 transform hover:scale-105">
            <i className="fas fa-play-circle mr-2"></i>
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionThree;

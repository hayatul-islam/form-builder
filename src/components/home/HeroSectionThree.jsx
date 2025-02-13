const HeroSectionThree = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-[#0A0F1C] via-[#101729] to-[#151C32]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-blue-400/20">
            <i className="fas fa-sparkles text-blue-400 mr-2"></i>
            <span className="text-blue-100 font-medium">
              Welcome to Form Builder
            </span>
          </div>
          <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
            Build Better Forms, Faster <br />
            <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300 text-transparent bg-clip-text">
              Drag, Drop, Done
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Create stunning forms and surveys without writing a single line of
            code. Save time and resources while delivering professional results
            that truly impress.
          </p>
          <div className="flex gap-6">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-button text-lg font-medium whitespace-nowrap shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              Start Building Free
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white px-10 py-4 rounded-button text-lg font-medium whitespace-nowrap border border-white/20 transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-play-circle mr-2"></i>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute inset-0 bg-[url('https://public.readdy.ai/ai/img_res/2e7298917d8e825fe180fad73d983788.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/80 via-transparent to-[#0A0F1C]/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
      </div>
    </section>
  );
};

export default HeroSectionThree;

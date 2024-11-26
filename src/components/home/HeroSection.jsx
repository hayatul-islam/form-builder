const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffc] to-[#eee] text-gray-800 flex items-center justify-center">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-medium leading-tight space-y-2">
          <span>Build Form in minutes </span>
          <span className="block">without writing any code</span>
        </h1>
        <p className="mt-4 text-gray-500">
          Introducing the future of website building—no code website builders!
          Say goodbye to the days of complicated coding and endless
          troubleshooting.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
            Create a form
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

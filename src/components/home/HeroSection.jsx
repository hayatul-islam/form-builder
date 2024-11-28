import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffc] to-[#eee] text-gray-800 flex items-center justify-center ">
      <div className="text-center max-w-3xl px-6 space-y-8">
        <h1 className="text-4xl md:text-5xl font-medium leading-tight space-y-3">
          <span>Build Form in minutes </span>
          <span className="block">without writing any code</span>
        </h1>
        <p className="mt-4 text-gray-500">
          Introducing the future of website building—no code website builders!
          Say goodbye to the days of complicated coding and endless
          troubleshooting.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/templates"
            className="px-10 py-4 bg-primary text-white rounded font-semibold hover:bg-primary/80 transition"
          >
            Create a form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

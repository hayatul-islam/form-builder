import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSectionTwo = () => {
  return (
    <div className="container mt-32 bg-gradient-to-b  flex items-center justify-center ">
      <div className="text-center max-w-4xl px-6 space-y-5 py-5">
        <h1 className="text-[52px] leading-none space-y-1 text-black font-normal ">
          <span> The best remote pair programming app on macOS </span>
          {/* <span className="block">Easy to use</span> */}
        </h1>
        {/* <p className="text-gray-500 text-[20px]  max-w-[400px] mx-auto">
          Create forms in moments, no coding skills necessary, completely{" "}
          <span className="text-primary">free to use!</span>
        </p> */}
        <p className="text-gray-500 text-[20px]  max-w-[700px] mx-auto">
          Built from the ground up to deliver razor sharp screen sharing, crisp
          audio, and seamless remote control, flow with your teammates and do
          real work.
        </p>
        <div className="pt-6 flex justify-center gap-4">
          <Link
            to="/templates"
            className="w-[220px] h-[50px] flex justify-center items-center gap-2 bg-white rounded-full font-semibold border border-gray-200 transition text-[18px]"
          >
            <FaRegHandPointRight size={20} />
            <span>Get Started for free</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTwo;

import { useState } from "react";
import editFormIcon from "../../assets/icons/build-form.svg";
import GetStartModal from "../common/GetStartModal";

const GetStartedTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className="container relative rounded-2xl bg-cover bg-center p-20"
        style={{
          backgroundImage: `url('https://public.readdy.ai/ai/img_res/764055e43fdcdd94b16603a748efe73f.jpg')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 to-indigo-950/95 backdrop-blur-sm rounded-2xl"></div>
        {/* Content Container */}
        <div className="relative text-center max-w-4xl mx-auto space-y-6">
          <img
            className="w-[120px] mx-auto text-red-500 "
            src={editFormIcon}
            alt="build-form"
          />
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white  tracking-tight">
            Your forms, your style
          </h1>
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed  max-w-2xl mx-auto">
            Customize the style and content of your forms to match your brand
          </p>
          <button
            onClick={handleOpen}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-button text-base md:text-lg font-medium whitespace-nowrap shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Started for Free
          </button>
        </div>

        {isOpen && <GetStartModal handleClose={handleClose} />}
      </div>

      {/* <div className="container px-8 py-20">
      <div
        className="relative rounded-2xl bg-cover bg-center p-20"
        style={{
          backgroundImage: `url('https://public.readdy.ai/ai/img_res/f2807a7dbf97649094fb5e5c998be484.jpg')`,
        }}
      >
       
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl"></div>

      
        <div className="relative text-center max-w-4xl mx-auto">
         
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
            Create Professional Forms in Minutes
          </h1>

         
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
            Design, build, and deploy custom forms with our intuitive
            drag-and-drop builder. Perfect for surveys, registrations, feedback
            collection, and more. No coding required.
          </p>

         
          <button
            className="!rounded-button whitespace-nowrap inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
           
          >
            <span>Start Building Now</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default GetStartedTwo;

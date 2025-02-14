import { useState } from "react";
import getStatedBg from "../../assets/img/get-started-bg.svg";
import GetStartModal from "../common/GetStartModal";

const GetStarted = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="pb-20 md:pb-36 px-6">
      <div
        style={{
          backgroundImage: ` url(${getStatedBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "soft-light",
        }}
        className="flex justify-center text-center py-10 md:py-16 px-4 md:px-6 rounded-2xl container bg-dark/20"
      >
        <div className="space-y-4 md:space-y-6 text-white">
          <h2 className="text-2xl md:text-4xl font-bold ">
            Ready to Build Amazing Forms?
            {/* Your forms, your style */}
          </h2>
          <p className="text-lg md:text-xl pb-2 max-w-2xl mx-auto ">
            Design and deploy custom forms effortlessly with our drag-and-drop
            builder—no coding needed!
          </p>
          <button
            onClick={handleOpen}
            className=" bg-dark hover:bg-dark/80 text-white px-8 md:px-10 py-3 md:py-4 rounded-button text-base md:text-lg font-medium whitespace-nowrap shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Started for Free
          </button>
        </div>

        {isOpen && <GetStartModal handleClose={handleClose} />}
      </div>
    </div>
  );
};

export default GetStarted;

// import { useState } from "react";
// import editFormIcon from "../../assets/icons/build-form.svg";
// import bgImg from "../../assets/img/bg.png";
// import GetStartModal from "../common/GetStartModal";
// import SectionHeadline from "../common/SectionHeadline";

// const GetStarted = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="pb-20 md:pb-36">
//       <div
//         style={{
//           backgroundImage: `linear-gradient(to bottom, #0B0D23, transparent), url(${bgImg})`,
//           // backgroundImage: `linear-gradient(to bottom, rgb(11, 13, 35), transparent), url(${bgImg})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundBlendMode: "soft-light",
//         }}
//         className="flex justify-center text-center py-12 px-6 rounded-xl container"
//       >
//         <div className="space-y-6">
//           <img
//             className="w-[180px] mx-auto text-red-500 "
//             src={editFormIcon}
//             alt="build-form"
//           />
//           <SectionHeadline
//             className="text-white"
//             title="Your forms, your style"
//             subTitle=" Customize the style and content of your forms to match your brand"
//           />
//           <button
//             onClick={handleOpen}
//             className=" bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-button text-base md:text-lg font-medium whitespace-nowrap shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
//           >
//             Get Started for Free
//           </button>
//         </div>

//         {isOpen && <GetStartModal handleClose={handleClose} />}
//       </div>
//     </div>
//   );
// };

// export default GetStarted;

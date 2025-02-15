import { features } from "../../data";
import useBuilder from "../../hooks/useBuilder";
import SectionHeadline from "../common/SectionHeadline";

const Features = () => {
  const { isDarkTheme } = useBuilder();

  const getGradientByIndex = (index) => {
    const gradients = [
      "from-blue-900/20 to-blue-900/10",
      "from-purple-900/20 to-purple-900/10",
      "from-green-900/20 to-green-900/10",
      "from-orange-900/20 to-orange-900/10",
      "from-pink-900/20 to-pink-900/10",
      "from-indigo-900/20 to-indigo-900/10",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="dark:bg-[#04060a] section-gap">
      <div className="container space-y-12">
        <SectionHeadline
          title="Simple and Powerful"
          subTitle="Complete solution for creating easy-to-use, flexible forms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={item.title}
              className={`
              relative overflow-hidden rounded-2xl p-6 border 
              ${
                isDarkTheme
                  ? "dark:border-gray-800 bg-gradient-to-b " +
                    getGradientByIndex(i)
                  : "border-gray-200 from-" +
                    getGradientByIndex(i).split("-")[1] +
                    "-50 to-" +
                    getGradientByIndex(i).split("-")[1] +
                    "-100/50"
              }
              transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group
            `}
            >
              <span className="inline-block p-3 rounded-xl dark:bg-gray-800 bg-gray-100 dark:text-white shadow-sm">
                {item.icon}
              </span>

              <p className="text-gray-500 dark:text-gray-300 text-[16px] sm:text-[18px] pt-3">
                <span className="text-black dark:text-white font-bold">
                  {item?.title}.
                </span>{" "}
                <span>{item?.description}</span>
              </p>

              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${
                  isDarkTheme ? "from-white/5" : "from-gray-100/50"
                } to-transparent rounded-bl-[100px] -z-10`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

// import { features } from "../../data";
// import SectionHeadline from "../common/SectionHeadline";

// const Features = () => {
//   const getGradientByIndex = (index) => {
//     const gradients = [
//       "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10",
//       "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10",
//       "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10",
//       "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10",
//       "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/10",
//       "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/10",
//     ];
//     return gradients[index % gradients.length];
//   };

//   return (
//     <div className="container space-y-10 ">
//       <SectionHeadline
//         title="Simple and Powerful"
//         subTitle="complete solution for creating easy-to-use, flexible forms."
//       />

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//         {features.map((item, i) => (
//           <div
//             key={item?.title}
//             className={`
//               relative overflow-hidden
//               rounded-2xl p-8
//               border border-gray-100 dark:border-gray-800
//               bg-gradient-to-b ${getGradientByIndex(i)}
//               transform transition-all duration-300
//               hover:scale-[1.02] hover:shadow-xl
//               group
//             `}
//           >
//             <span className="dark:text-white">{item?.icon}</span>
//             {/* <img className="w-[40px] lg:w-[50px]" src={item?.image} alt="" /> */}
//             <p className="text-gray-500 dark:text-gray-300 text-[16px] sm:text-[18px]">
//               <span className="text-black dark:text-white font-bold">
//                 {item?.title}.
//               </span>{" "}
//               <span> {item?.description}</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Features;

// import { features } from "../../data";
// import SectionHeadline from "../common/SectionHeadline";

// const Features = () => {
//   return (
//     <div className="container space-y-10 ">
//       <SectionHeadline
//         title="Simple and Powerful"
//         subTitle="complete solution for creating easy-to-use, flexible forms."
//       />

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//         {features.map((item, i) => (
//           <div
//             key={item?.title}
//             className={`${
//               i === 0
//                 ? "dark:bg-[#121228]"
//                 : i === 1
//                 ? "dark:bg-[#0b0d21]"
//                 : "dark:bg-[#0f0e21]"
//             } rounded-xl space-y-3 border dark:border-gray-800 p-5 hover:bg-gray-50  dark:hover:bg-gray-950 duration-500 hover:scale-105 transform`}
//           >
//             <span className="dark:text-white">{item?.icon}</span>
//             {/* <img className="w-[40px] lg:w-[50px]" src={item?.image} alt="" /> */}
//             <p className="text-gray-500 dark:text-gray-300 text-[16px] sm:text-[18px]">
//               <span className="text-black dark:text-white font-bold">
//                 {item?.title}.
//               </span>{" "}
//               <span> {item?.description}</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Features;

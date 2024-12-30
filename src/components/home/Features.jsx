import { features } from "../../data";
import SectionHeadline from "../common/SectionHeadline";

const Features = () => {
  return (
    <div className="container space-y-10">
      <SectionHeadline
        title="Simple and Powerful"
        subTitle="complete solution for creating easy-to-use, flexible forms."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {features.map((item) => (
          <div
            key={item?.title}
            className="rounded-xl space-y-3 border dark:border-gray-800 p-5 hover:bg-gray-50 dark:hover:bg-gray-950 duration-500 hover:scale-105 transform"
          >
            <span className="dark:text-white">{item?.icon}</span>
            {/* <img className="w-[40px] lg:w-[50px]" src={item?.image} alt="" /> */}
            <p className="text-gray-500 dark:text-gray-300 text-[16px] sm:text-[18px]">
              <span className="text-black dark:text-white font-bold">
                {item?.title}.
              </span>{" "}
              <span> {item?.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

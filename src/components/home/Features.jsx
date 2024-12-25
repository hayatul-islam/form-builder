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
        {features.slice(0, -2).map((item, i) => (
          <div key={i} className="rounded-xl space-y-3 border p-5 ">
            <img className="w-[40px] lg:w-[50px]" src={item?.image} alt="" />
            <p className="text-gray-500 text-[16px] sm:text-[18px]">
              <span className="text-black font-bold">{item?.title}.</span>{" "}
              <span> {item?.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

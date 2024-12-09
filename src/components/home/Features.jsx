import { features } from "../../data";

const Features = () => {
  return (
    <div className="container space-y-8">
      <div className="text-center space-y-2 text-black max-w-[600px] mx-auto">
        <h2 className="text-[42px] font-medium leading-none">
          {/* Enterprise-grade features */}
          Simple and Powerful
        </h2>
        <p className="text-gray-500 text-[20px]">
          {/* A complete solution for easy-to-use, flexible form creation. */}A
          complete solution for creating easy-to-use, flexible forms.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {features.slice(0, -2).map((item, i) => (
          <div key={i} className="rounded-xl space-y-3">
            <img className="w-[50px]" src={item?.image} alt="" />
            <p className="text-gray-500 text-[18px]">
              <span className="text-black font-bold">{item?.title}.</span>{" "}
              <span> {item?.description}</span>
            </p>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-wrap gap-10"> */}
      {/* Center last 2 items */}
      {/* <div className="w-full flex justify-center gap-6">
          {features.slice(-2).map((item, i) => (
            <div key={i} className="max-w-[350px] p-3 border rounded-xl">
              <img className="w-[70px]" src={item?.image} alt="" />
              <p className="text-gray-500 text-[18px]">
                <span className="text-black font-bold">{item?.title}.</span>{" "}
                <span> {item?.description}</span>
              </p>
            </div>
          ))}
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Features;

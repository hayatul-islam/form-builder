import getStartImg from "../../assets/img/forms.png";

const GetStarted = () => {
  return (
    <div className="flex justify-center text-center  py-12 pb-[120px]">
      <div className="space-y-6">
        <img className="mx-auto" src={getStartImg} alt="" />

        <div>
          <h2 className="text-[56px] leading-none">Try for free</h2>
          <p className="text-gray-500 text-[20px]">
            Unlimited forms & responses. For free.
          </p>
          <button className="py-3 px-6 mt-4 rounded bg-primary text-white ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

const HeroSection = () => {
  return (
    <div className="mt-32 bg-gradient-to-b from-[#F7F7F7] to-[#F7F7F7] text-gray-800 flex items-center justify-center ">
      <div className="text-center max-w-4xl px-6 space-y-5 py-5">
        <button className="px-4 py-2 border-2 rounded-full border-white text-black text-[14px] font-medium cursor-auto">
          Build forms easily with drag
        </button>
        <h1 className="text-[82px] leading-none space-y-1 text-black font-normal ">
          <span> Build forms faster </span>
          <span className="block"> with drag</span>
        </h1>
        <p className="text-gray-500 text-[20px] text-black-100 max-w-[400px] mx-auto">
          Create forms in moments, no coding skills necessary, completely{" "}
          <span className="text-primary">free to use!</span>
        </p>
        {/* <div className="pt-6 flex justify-center gap-4">
          <Link
            to="/templates"
            className="w-[220px] h-[50px] flex justify-center items-center gap-2 border border-black  rounded-full font-semibold hover:bg-primary/80 hover:text-white hover:border-primary transition text-[18px]"
          >
            <FaRegHandPointRight size={20} />
            <span>Get Started</span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;

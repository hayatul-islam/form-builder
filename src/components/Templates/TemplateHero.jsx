const TemplateHero = () => {
  return (
    <div className="container mt-8 md:mt-12 bg-gradient-to-b flex items-center justify-center ">
      <div className="text-center space-y-5 py-5">
        <h1 className="text-[24px] sm:text-[32px] md:text-[54px] leading-none space-y-2 text-black font-normal ">
          <span>Say Goodbye to Blank Forms </span>
          <span className="block"> Start with Templates</span>
        </h1>
        <p className="text-gray-500 text-[14px] sm:text-[18px] md:text-[20px] max-w-[375px] sm:max-w-[550px] mx-auto">
          Enjoy a seamless, hassle-free experience with fully customizable,
          ready-to-use templates.
        </p>
      </div>
    </div>
  );
};

export default TemplateHero;

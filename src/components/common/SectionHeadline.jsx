const SectionHeadline = ({ title, subTitle, button }) => {
  return (
    <div className="text-center space-y-2 text-black dark:text-white max-w-[650px] mx-auto">
      <h2 className=" text-[24px] sm:text-[28px] md:text-[32px] lg:text-[42px] font-medium leading-none">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-gray-300 text-[14px] sm:text-[18px] md:text-[20px]">
        {subTitle}
      </p>
      {button}
    </div>
  );
};

export default SectionHeadline;

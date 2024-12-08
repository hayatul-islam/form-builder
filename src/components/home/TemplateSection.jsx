import Slider from "./Slider";

const TemplateSection = () => {
  return (
    <div className="container py-12 space-y-20">
      {/* Header Section */}
      <div className="text-center space-y-2 text-black max-w-[800px] mx-auto">
        <h2 className="text-[56px] font-medium leading-none">
          Start with a template
        </h2>
        <p className="text-gray-500 text-[20px]">
          Start with one of our ready-made form templates for common use cases
          or create your form from scratch
        </p>
      </div>
      <div className="py-6">
        <Slider />
      </div>
    </div>
  );
};

export default TemplateSection;

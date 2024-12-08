import { Link } from "react-router-dom";
import Slider from "./Slider";

const TemplateSection = () => {
  return (
    <div className="container py-12 space-y-28">
      {/* Header Section */}
      <div className="text-center space-y-2 text-black max-w-[600px] mx-auto">
        <h2 className="text-[42px] font-medium leading-none">
          Start with a template
        </h2>
        <p className="text-gray-500 text-[20px]">
          Start with one of our ready-made form templates for common use cases
          or create your form from scratch
        </p>
        <div className="pt-3">
          <Link
            to="/templates"
            className="px-4 py-2 mt-4 border-2 rounded-lg border-gray-200 text-black text-[14px] font-medium bg-gradient-to-r from-gray to-white "
          >
            View all templates
          </Link>
        </div>
      </div>
      <div className="py-6">
        <Slider />
      </div>
    </div>
  );
};

export default TemplateSection;

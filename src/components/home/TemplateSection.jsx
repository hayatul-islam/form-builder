import { Link } from "react-router-dom";
import SectionHeadline from "../common/SectionHeadline";
import TemplateSlider from "./TemplateSlider";

const TemplateSection = () => {
  return (
    <div className="container section-gap space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-28">
      <SectionHeadline
        title="Start with a template"
        subTitle=" Start with one of our ready-made form templates for common use cases
         or create your form from scratch"
        button={
          <div className="pt-4">
            <Link
              to="/templates"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white px-8 md:px-10 py-2.5 rounded-button text-base md:text-lg font-medium whitespace-nowrap border border-white/20 transition-all duration-300 transform hover:scale-105 block w-[250px] mx-auto"
            >
              View all templates
            </Link>
          </div>
        }
      />

      <div className="py-6">
        <TemplateSlider />
      </div>
    </div>
  );
};

export default TemplateSection;

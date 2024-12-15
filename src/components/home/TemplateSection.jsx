import { Link } from "react-router-dom";
import SectionHeadline from "../common/SectionHeadline";
import TemplateSlider from "./TemplateSlider";

const TemplateSection = () => {
  return (
    <div className="container space-y-28">
      <SectionHeadline
        title="Start with a template"
        subTitle=" Start with one of our ready-made form templates for common use cases
          or create your form from scratch"
        button={
          <div className="pt-3">
            <Link
              to="/templates"
              className="px-4 py-2 mt-4 border-2 rounded-lg border-gray-200 text-black text-[14px] font-medium bg-gradient-to-r from-gray to-white "
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

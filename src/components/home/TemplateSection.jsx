import SectionHeadline from "../common/SectionHeadline";
import Button from "../ui/Button";
import TemplateSlider from "./TemplateSlider";

const TemplateSection = () => {
  return (
    <div className="container space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-28">
      <SectionHeadline
        title="Start with a template"
        subTitle=" Start with one of our ready-made form templates for common use cases
          or create your form from scratch"
        button={
          <div className="pt-3">
            <Button
              link="/templates"
              className="border border-gray-200 !text-black !from-gray !to-white "
            >
              View all templates
            </Button>
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

import SectionHeadline from "../common/SectionHeadline";
import { SecondaryButton } from "../ui/Button";
import TemplateSlider from "./TemplateSlider";

const TemplateSection = () => {
  return (
    <div className="container space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-28">
      <div className="-mt-6 md:-mt-12">
        <SectionHeadline
          title="Start with a template"
          subTitle=" Start with one of our ready-made form templates for common use cases
         or create your form from scratch"
          button={
            <div className="pt-3">
              <SecondaryButton link="/templates">
                View all templates
              </SecondaryButton>
            </div>
          }
        />
      </div>

      <div className="py-6">
        <TemplateSlider />
      </div>
    </div>
  );
};

export default TemplateSection;

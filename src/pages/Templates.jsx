import Demos from "../components/Templates/Demos";
import TemplateHero from "../components/Templates/TemplateHero";
import { BuilderProvider } from "../context/BuilderContext";
import PageLayout from "../layout/PageLayout";

const Templates = () => {
  return (
    <BuilderProvider>
      <PageLayout
        type="main"
        className="space-y-12 sm:space-y-16 md:space-y-24 py-12 sm:py-16 md:py-24"
      >
        <TemplateHero />
        <Demos />
      </PageLayout>
    </BuilderProvider>
  );
};

export default Templates;

import Demos from "../components/Templates/Demos";
import TemplateHero from "../components/Templates/TemplateHero";
import { BuilderProvider } from "../context/BuilderContext";
import PageLayout from "../layout/PageLayout";

const Templates = () => {
  return (
    <BuilderProvider>
      <PageLayout type="main" className="space-y-24 py-24">
        <TemplateHero />
        <Demos />
      </PageLayout>
    </BuilderProvider>
  );
};

export default Templates;

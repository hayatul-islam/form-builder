import HeroSection from "../components/home/HeroSection";
import TemplateSection from "../components/home/TemplateSection";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <PageLayout type="home">
      <HeroSection />
      <TemplateSection />
    </PageLayout>
  );
};

export default Home;

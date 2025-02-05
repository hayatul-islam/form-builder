import DarkGradientBackground from "../components/common/GradientBackground";
import Features from "../components/home/Features";
import GetStarted from "../components/home/GetStarted";
import HeroSectionTwo from "../components/home/HeroSectionTwo";
import TemplateSection from "../components/home/TemplateSection";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <PageLayout type="main" className="space-y-20 md:space-y-36">
      {/* <HeroSection /> */}
      <HeroSectionTwo />
      <DarkGradientBackground />
      {/* <VideoSection /> */}
      <Features />
      <TemplateSection />
      <GetStarted />
    </PageLayout>
  );
};

export default Home;

import Features from "../components/home/Features";
import GetStarted from "../components/home/GetStarted";
import HeroSection from "../components/home/HeroSection";
import TemplateSection from "../components/home/TemplateSection";
import VideoSection from "../components/home/VideoSection";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <PageLayout type="home" className="space-y-36">
      <HeroSection />
      {/* <HeroSectionTwo /> */}
      <VideoSection />
      <Features />
      <TemplateSection />
      <GetStarted />
    </PageLayout>
  );
};

export default Home;

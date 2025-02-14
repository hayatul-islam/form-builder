import Features from "../components/home/Features";
import GetStarted from "../components/home/GetStarted";
import HeroSectionThree from "../components/home/HeroSectionThree";
import TemplateSection from "../components/home/TemplateSection";
import VideoSection from "../components/home/VideoSection";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <PageLayout type="main" className="space-y-20 md:space-y-36">
      {/* <HeroSection /> */}
      {/* <HeroSectionTwo /> */}
      <HeroSectionThree />
      <VideoSection />
      <Features />
      <TemplateSection />
      <GetStarted />
      {/* <GetStartedTwo /> */}
    </PageLayout>
  );
};

export default Home;

import HeroSection from "../components/home/HeroSection";
import TemplateSection from "../components/home/TemplateSection";
import VideoSection from "../components/home/VideoSection";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <PageLayout type="home">
      <HeroSection />
      <VideoSection />
      <TemplateSection />
    </PageLayout>
  );
};

export default Home;

import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Features from "../components/home/Features";
import GetStarted from "../components/home/GetStarted";
import HeroSectionTwo from "../components/home/HeroSectionTwo";
import TemplateSection from "../components/home/TemplateSection";
import VideoSection from "../components/home/VideoSection";

const Home = () => {
  return (
    <div className="space-y-20 md:space-y-36">
      {/* <PageLayout type="main" className="space-y-20 md:space-y-36"> */}
      {/* <HeroSection /> */}
      <div className="relative hero-bg pb-6">
        <div className="h-[70px] absolute top-0 w-full z-50">
          <Header />
        </div>
        <HeroSectionTwo />
        <VideoSection />
      </div>
      <Features />
      <TemplateSection />
      <GetStarted />
      <Footer />
      {/* </PageLayout> */}
    </div>
  );
};

export default Home;

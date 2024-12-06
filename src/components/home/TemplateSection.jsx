import { Link } from "react-router-dom";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TemplateSection = () => {
  let swiperInstance = null;

  const handleMouseEnter = () => {
    if (swiperInstance) swiperInstance.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperInstance) swiperInstance.autoplay.start();
  };

  return (
    <div className="py-12 space-y-12">
      <div className="text-center space-y-2 text-black max-w-[800px] mx-auto">
        <h2 className="text-[56px] font-medium text-center leading-none space-y-2">
          Start with a template
        </h2>

        <div>
          <Link
            to="/templates"
            className="text-gradient-to-r from-gray-800 to-black text-[24px] transition-all border-b-2 border-black"
          >
            Discover Templates
          </Link>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 0, // Continuous movement without pauses
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperInstance = swiper;
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide
            key={item}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-auto h-[400px] border rounded">
              <img
                className="rounded"
                src="https://images.template.net/427831/Registration-Form-Template-edit-online.png"
                alt={`Template ${item}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TemplateSection;

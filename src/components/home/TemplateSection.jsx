import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TemplateSection = () => {
  return (
    <div className="py-12 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-[38px] font-medium text-center leading-none space-y-2">
          Start with a stunning template
        </h2>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisic
        </p>
        <button className="px-4 py-2 bg-black text-white rounded">
          Discover Templates
        </button>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        allowTouchMove={false}
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
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide key={item}>
            <div className="w-auto h-[400px] border rounded"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TemplateSection;

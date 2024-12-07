import { Link } from "react-router-dom";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TemplateSection = () => {
  return (
    <div className="py-12 space-y-20">
      <div className="text-center space-y-2 text-black max-w-[800px] mx-auto">
        <h2 className="text-[56px] font-medium text-center leading-none space-y-2">
          Start with a template
        </h2>
        <p className="text-gray-500 text-[20px]">
          Create forms in moments, no coding skills necessary, completely
        </p>

        <div className="pt-4">
          <Link
            to="/templates"
            className="px-4 py-2 border-2 rounded-lg border-gray-200 text-black text-[14px] font-medium bg-gradient-to-r from-gray to-white"
          >
            View all templates
          </Link>
          {/* <Link
            to="/templates"
            className="px-3 py-1.5 rounded-lg text-gradient-to-r from-gray-800 to-black transition-all border border-black/10 font-medium"
          >
            View all templates
          </Link> */}
          {/* <Link
            to="/templates"
            className="text-gradient-to-r from-gray-800 to-black text-[24px] transition-all border-b-2 border-black"
          >
            Discover Templates
          </Link> */}
        </div>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 0,
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
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
          <SwiperSlide key={item}>
            <div className="w-full  border rounded">
              <div className="w-full h-[350px] overflow-hidden">
                <img
                  className="rounded w-full h-auto"
                  src="https://images.template.net/427831/Registration-Form-Template-edit-online.png"
                  alt=""
                />
              </div>

              <h3>Login form</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TemplateSection;

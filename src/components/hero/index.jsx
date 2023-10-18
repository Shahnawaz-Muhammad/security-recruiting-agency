import carouselImg1 from "../../assets/images/carousel-2.jpg";
import carouselImg2 from "../../assets/images/carousel-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import {BiSolidChevronLeft, BiSolidChevronRight} from "react-icons/bi"

import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const sliderData = [
    {
      id: 1,
      imgUrl: carouselImg1,
      text: "HIGHLY TRAINED GUARDS",
    },
    {
      id: 2,
      imgUrl: carouselImg2,
      text: "BEST SECURITY SERVICE",
    },
  ];

  return (
    <div className="relative max-w-full flex bg-transparent items-center justify-center px-0 h-screen">
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={{
          clickable: true,
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {sliderData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center items-center flex-col">
                <div className="w-full h-screen relative">
                  <img
                    className="w-full h-full object-cover"
                    src={item.imgUrl}
                    alt=""
                  />

                  <div className="absolute top-0 z-50 flex items-center justify-center w-full h-full">
                    <div className="flex flex-col items-center gap-3">
                      <h2 className="text-3xl uppercase text-secondary">
                        Your Safety, Our Efforts
                      </h2>
                      <h2 className="text-5xl uppercase text-white">
                        {item.text}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="max-w-full flex justify-between absolute top-1/2 -translate-y-1/2 left-4 md:left-10 lg:left-20 custom-prev-button bg-secondary rounded-full z-50">
        {/* Custom styling for the previous button */}
        <button className="custom-button-style text-white"><BiSolidChevronLeft className="text-4xl"/></button>
      </div>
      <div className="max-w-full flex justify-between absolute top-1/2 -translate-y-1/2 right-4 md:right-10 lg:right-20 custom-next-button bg-secondary rounded-full z-50">
        {/* Custom styling for the next button */}
        <button className="custom-button-style text-white"><BiSolidChevronRight className="text-4xl"/></button>
      </div>
    </div>
  );
};

export default Hero;

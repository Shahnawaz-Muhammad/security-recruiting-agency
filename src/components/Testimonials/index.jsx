import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonialsData = [
    {
      company: "Congo SPRL Gold Mines"
    },
    {
      company: "Security Consultancy in Uganda"
    },
    {
      company: "DHA "
    },
    {
      company: "Zamindara Paper and Board Mills "
    },
    {
      company: "Various Large Money Changers "
    },
    {
      company: "Fynk Pharmaceuticals "
    },
    {
      company: "King Embroidery & Knitwear "
    },
    {
      company: "Asmy Dying Mills "
    },
    {
      company: "Sh. Nooruddin & Sons "
    },
    {
      company: "Fantac Furnitures  "
    },
    {
      company: "Fuji Tyres "
    },
    {
      company: "Rado Textile "
    },
    {
      company: "Yousaf Textile "
    },
    {
      company: "Various clients under NDA "
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="w-full  flex justify-center  bg-bgLight py-20 text-white mx-auto px-8 xl:px-4">
      <div className=" w-full  flex flex-col gap-10 items-center">
        <div className="flex  flex-col text-center gap-4">
          <h2 className="font-bold text-2xl text-secondary">OUR VALUED PARTNERS</h2>
          <h4 className="font-medium text-4xl text-primary uppercase">
          Cultivating trust, we are the cornerstone of reliability.
          </h4>
        </div>

        <Swiper
          slidesPerGroup={1}
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1, // 1 slide for small screens (width >= 768px)
            },
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper w-full flex bg-[#314d7a] h-60 "
        >
          {testimonialsData.map((testimonial, index) => {
            return (
              <SwiperSlide key={index} className=" py-10">
                <div className="w-full flex justify-center items-center ">
                  <h1 className="w-60 h-32 border-4 border-white rounded-2xl p-10 text-white text-center font-bold text-2xl flex justify-center items-center">
                    {testimonial.company}
                  </h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

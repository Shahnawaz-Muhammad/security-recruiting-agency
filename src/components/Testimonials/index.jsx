import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John",
      company: "Company ABC",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
    },
    {
      name: "Mrs",
      company: "Company XYZ",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    },
    {
      name: "Doe",
      company: "Company ABC",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
    },
    {
      name: "Smith",
      company: "Company XYZ",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="my-10 text-center w-full">
      <h2 className="font-bold text-2xl text-secondary">TESTIMONIAL</h2>
      <h4 className="pt-4 font-bold text-4xl text-primary">
        WHAT OUR CLIENTS SAY
      </h4>
      <div className=" w-full inline-flex flex-nowrap ">

      
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper max-w-screen-xl"
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides for medium screens (640px and above)
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3, // 3 slides for large screens (1024px and above)
            slidesPerGroup: 3,
          },
        }}
      >
        {testimonialsData.map((testimonial, index) => {
          console.log(testimonial)
          return (
            (
              <SwiperSlide key={index}>
                <ul className="w-full my-20 bg-bgLight shadow-lg rounded-lg flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ">
                  <li className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        className="w-16 h-16 rounded-full border bg-bgLight p-2  mr-4"
                        src={testimonial.image}
                        alt={`${testimonial.name}'s avatar`}
                      />
                      <div>
                        <p className="text-xl font-semibold">{testimonial.name}</p>
                        <p className="text-primary">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-primary text-base mt-4">{testimonial.text}</p>
                  </li>
                </ul>
                
              </SwiperSlide>
            )
          )
        })}
      </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

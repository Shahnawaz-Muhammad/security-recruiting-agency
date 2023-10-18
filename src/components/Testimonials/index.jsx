import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Smith",
      company: "Company ABC",
      text: "Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita",
      image:
        "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
    },
    {
      name: "Mrs. Karl",
      company: "Company XYZ",
      text: "Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    },
    {
      name: "Alizbeth Shown",
      company: "Company ABC",
      text: "Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita",
      image:
        "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
    },
    {
      name: "Dr. Hassan Ahmed",
      company: "Company XYZ",
      text: "Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    },
    {
      name: "Alizbeth Shown",
      company: "Company ABC",
      text: "Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita",
      image:
        "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
    },
    {
      name: "Dr. Hassan Ahmed",
      company: "Company XYZ",
      text: "Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="w-full  flex justify-center  bg-bgLight py-20 text-white mx-auto px-8 xl:px-4">
      <div className="max-w-screen-xl w-full  flex flex-col gap-10 items-center">
        <div className="flex  flex-col text-center gap-4">
          <h2 className="font-medium text-xl text-secondary">TESTIMONIAL</h2>
          <h4 className="font-medium text-4xl text-primary">
            WHAT OUR CLIENTS SAY
          </h4>
        </div>

        <Swiper
          slidesPerGroup={1}
          slidesPerView={3}
          spaceBetween={40}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2,
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
          className="mySwiper w-full flex"
        >
          {testimonialsData.map((testimonial, index) => {
            return (
              <SwiperSlide key={index} className=" py-10">
                <div className="w-full flex flex-col  gap-6">
                  <div className="w-full min-h-[6rem] shadow-lg flex bg-white border relative">
                    <p className="text-lightGray text-base  p-3">
                      {testimonial.text}
                    </p>

                    <div className="box-arrow shadow-2xl "></div>
                  </div>
                  <div className=" w-full h-full flex gap-4 items-center">
                    <div className="w-20 h-20 rounded-full border bg-white p-3 ">
                      <img
                        className="w-full h-full rounded-full border bg-bgLight "
                        src={testimonial.image}
                        alt={`${testimonial.name}'s avatar`}
                      />
                    </div>
                    <div className="h-full flex flex-col justify-center">
                      <p className="text-xl text-secondary ">
                        {testimonial.name}
                      </p>
                      <p className=" text-lightGray">{testimonial.company}</p>
                    </div>
                  </div>
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

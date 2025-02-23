import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";

const reviews = [
  {
    name: "Priti Ale",
    review:
      "The training at Enlight Academy was top-notch. The hands-on approach made learning ICU procedures much easier.",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    review:
      "The instructors were very knowledgeable and supportive. I feel confident about my ICU skills now!",
    rating: 5,
  },
  {
    name: "Priyanka Khatiwada",
    review:
      "Enlight Academy provided practical training that was extremely useful. Highly recommend it for ICU training!",
    rating: 4.5,
  },
  {
    name: "Meera Shrestha",
    review:
      "The course was well-structured and covered all critical ICU concepts. The best decision I made for my career!",
    rating: 5,
  },
];

const StudentReviews = () => {
  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#038A58] mb-4 sm:mb-6">
          What Our Students Say
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>

        {/* Slider Section */}
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="rounded-lg shadow-lg"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center max-w-xs mx-auto">
                {/* Name */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 text-center break-words">
                  {review.name}
                </h3>

                {/* Star Rating */}
                <div className="flex justify-center items-center mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      className="text-yellow-500 text-sm sm:text-lg mr-0.5"
                    />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <AiFillStar
                      key={`empty-${i}`}
                      className="text-gray-300 text-sm sm:text-lg mr-0.5"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-center break-words">
                  "{review.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StudentReviews;

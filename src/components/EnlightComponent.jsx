import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import enlight1 from "../assets/a.jpeg";
import enlight2 from "../assets/b.jpeg";
import enlight3 from "../assets/c.jpeg";
import enlight4 from "../assets/d.jpeg";
import enlight5 from "../assets/e.jpeg";

const EnlightComponent = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      el.classList.add("opacity-0");
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("fade-in-animation");
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <style>{`
        .swiper-container {
          width: 100%;
          min-height: auto; /* Prevent extra spacing */
        }
        .swiper-slide img {
          width: 100%;
          height: 80vh; /* Increased height for visibility */
          object-fit: cover;
        }
        @media (max-width: 768px) {
          .swiper-slide img {
            height: 55vh; /* Adjusted height for mobile */
          }
        }
        .description-container {
          margin-top: -10px; /* Pull text closer */
          padding: 20px;
          text-align: center;
        }
      `}</style>

      <div className="bg-[#018749] text-white py-4">
        {/* Hero Section */}
        <div className="text-center py-12 px-4 md:px-12 lg:px-24">
          
          {/* Welcome Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-professional animate-on-scroll">
            WELCOME TO ENLIGHT ACADEMY
          </h1>

          {/* Swiper Full-Screen Slider */}
          <div className="swiper-container mx-auto py-6">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="w-full"
            >
              <SwiperSlide><img src={enlight1} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={enlight2} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={enlight3} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={enlight4} alt="Slide 4" /></SwiperSlide>
              <SwiperSlide><img src={enlight5} alt="Slide 5" /></SwiperSlide>
            </Swiper>
          </div>

          {/* Fixed: Description Below Slider */}
          <div className="description-container">
            <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto animate-on-scroll">
              Enlight Academy specializes in ICU training programs for PCL, BNS, and BSc nurses, 
              equipping them with the necessary skills and knowledge to excel in critical care settings.
            </p>
          </div>

          {/* Buttons */}
         
        </div>
      </div>
    </>
  );
};

export default EnlightComponent;

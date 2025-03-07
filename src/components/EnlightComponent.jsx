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
      el.classList.add("opacity-100"); // Ensure visibility on first load

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
          min-height: auto;
        }
        .swiper-slide img {
          width: 100%;
          height: 75vh; /* Adjusted for visibility */
          object-fit: cover;
        }
        @media (max-width: 768px) {
          .swiper-slide img {
            height: 50vh; /* Adjusted height for mobile */
          }
        }
        .text-container {
          padding: 40px 20px;
          text-align: center;
          opacity: 100; /* Ensure visibility */
        }
        .description-container {
          padding: 20px;
          text-align: center;
          margin-top: 20px; /* Ensuring proper spacing */
        }
        /* Animation Fix */
        .opacity-100 {
          opacity: 1;
          transition: opacity 1s ease-in-out;
        }
        .fade-in-animation {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 1s ease-in-out;
        }
      `}</style>

      <div className="bg-[#018749] text-white py-6">
        {/* Hero Section */}
        <div className="text-container text-center px-4 md:px-12 lg:px-24 animate-on-scroll">
          
          {/* Welcome Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            WELCOME TO ENLIGHT ACADEMY
          </h1>

          {/* Swiper Full-Screen Slider */}
          <div className="swiper-container mx-auto ">
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
          <div className="description-container animate-on-scroll">
            <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto">
              Enlight Academy specializes in ICU training programs for PCL, BNS, and BSc nurses, 
              equipping them with the necessary skills and knowledge to excel in critical care settings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnlightComponent;

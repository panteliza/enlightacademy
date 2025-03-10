import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import enlight1 from "../assets/five.jpg";
import enlight2 from "../assets/one.jpg";
import enlight3 from "../assets/c.jpeg";
import enlight4 from "../assets/four.jpg";
import enlight5 from "../assets/e.jpeg";

const EnlightComponent = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach((el) => {
      el.classList.add("opacity-100");

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
          height: 75vh;
          object-fit: cover;
          display: block;
          background-color: #f3f3f3;
        }
        @media (max-width: 768px) {
          .swiper-slide img {
            height: 50vh;
          }
        }
        .text-container {
          padding: 40px 20px;
          text-align: center;
        }
        .description-container {
          padding: 20px;
          text-align: center;
          margin-top: 20px;
        }
        .opacity-100 {
          opacity: 1;
          transition: opacity 1s ease-in-out;
        }
        .fade-in-animation {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 1s ease-in-out;
        }
        .preload-image {
          display: none;
        }
      `}</style>

      {/* Preload Images */}
      <div className="preload-image">
        <img src={enlight1} alt="preload" />
        <img src={enlight2} alt="preload" />
        <img src={enlight3} alt="preload" />
        <img src={enlight4} alt="preload" />
        <img src={enlight5} alt="preload" />
      </div>

      <div className="bg-[#018749] text-white py-6">
        <div className="text-container text-center px-4 md:px-12 lg:px-24 animate-on-scroll">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            WELCOME TO ENLIGHT ACADEMY
          </h1>

          <div className="swiper-container mx-auto">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="w-full"
              preloadImages={true}
              watchSlidesProgress={true}
              observer={true}
              observeParents={true}
              updateOnWindowResize={true}
            >
              <SwiperSlide><img src={enlight1} alt="Slide 1" loading="eager" /></SwiperSlide>
              <SwiperSlide><img src={enlight2} alt="Slide 2" loading="eager" /></SwiperSlide>
              <SwiperSlide><img src={enlight3} alt="Slide 3" loading="eager" /></SwiperSlide>
              <SwiperSlide><img src={enlight4} alt="Slide 4" loading="eager" /></SwiperSlide>
              <SwiperSlide><img src={enlight5} alt="Slide 5" loading="eager" /></SwiperSlide>
            </Swiper>
          </div>

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
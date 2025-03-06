import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import enlight1 from '../assets/a.jpeg';
import enlight2 from '../assets/b.jpeg';
import enlight3 from '../assets/c.jpeg';
import enlight4 from '../assets/d.jpeg';
import enlight5 from '../assets/e.jpeg';

const EnlightComponent = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('fade-in-animation');
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
        .opacity-0 {
          opacity: 0;
        }
            .swiper-container {
          width: 100%;
          max-width: 400px;
          height: auto;
          aspect-ratio: 4 / 3; /* Maintain responsive ratio */
          overflow: hidden;
        }
        .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .fade-in-animation {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 1s ease-in-out;
        }
        .swiper-slide img {
          width: 80%; /* Custom width */
          height: 140px; /* Custom height */
          object-fit: cover;
          margin: auto;
          border-radius: 8px; /* Optional styling */
        }
            /* Animation classes */
        .opacity-0 {
          opacity: 0;
        }
        .fade-in-animation {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 1s ease-in-out;
        }
        .slide-from-top {
          transform: translateY(-2rem);
        }
        .slide-from-bottom {
          transform: translateY(2rem);
        }

        /* Glowing Border Styling */
        .highlight-border {
          border: 2px solid transparent;
          animation: border-glow 2s infinite;
          position: relative;
        }
        .highlight-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          z-index: -1;
          border-radius: 9999px; /* Full-rounded corners */
          border: 2px solid rgba(0, 255, 0, 0.6);
          animation: border-glow-color 2s infinite;
        }

        /* Keyframes for border and glow */
        @keyframes border-glow {
          0% {
            box-shadow: 0 0 5px rgba(0, 255, 0, 0.6), 0 0 15px rgba(0, 255, 0, 0.4);
          }
          100% {
            box-shadow: 0 0 5px rgba(0, 255, 0, 0.6), 0 0 15px rgba(0, 255, 0, 0.4);
          }
        }
      `}</style>

      <div className="bg-[#018749] text-white py-4">
        {/* Hero Section */}
        <div className="text-center py-12 px-4 md:px-12 lg:px-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-professional animate-on-scroll">
            WELCOME TO <span className="glow-text">ENLIGHT ACADEMY</span>
          </h1>

          <div className="swiper-container mx-auto py-6 bg-red-500">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="mySwiper w-full h-full"
            >
              <SwiperSlide><img src={enlight1} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={enlight2} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={enlight3} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={enlight4} alt="Slide 4" /></SwiperSlide>
              <SwiperSlide><img src={enlight5} alt="Slide 5" /></SwiperSlide>
            </Swiper>
          </div>

          <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto mb-6 animate-on-scroll">
            Enlight Academy specializes in ICU training programs for PCL, BNS, and BSc nurses, equipping them with the necessary skills and knowledge to excel in critical care settings.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            <Link
              to="/about"
              className="relative flex items-center justify-center md:w-auto py-3 px-6 text-sm md:text-base rounded-full font-medium text-white border border-teal-400 highlight-border transition duration-300 focus:outline-none animate-on-scroll slide-from-bottom"
            >
              More About Us →
            </Link>
            <Link
              to="/contact"
              className="relative flex items-center justify-center md:w-auto py-3 px-6 text-sm md:text-base rounded-full font-medium text-white border border-teal-400 highlight-border transition duration-300 focus:outline-none animate-on-scroll slide-from-bottom"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnlightComponent;

import React, { useEffect } from "react";
import EnlightImage from "../assets/e.jpeg"; // Ensure this path is correct
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

const AboutEnlight = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-10 pt-[100px] animate-fadeIn  mt-6">
        {/* Adjusted padding to prevent content overlap */}
        <h1 className="text-4xl font-bold text-[#038A58] mb-6 animate-slideDown">
          About Enlight Academy
        </h1>
        <div className="max-w-7xl w-full flex flex-col md:flex-row bg-gray-800 shadow-lg rounded-lg overflow-hidden animate-zoomIn">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 group relative">
            <img
              src={EnlightImage}
              alt="Enlight Academy Team"
              className="w-full h-[300px] md:h-auto object-cover transition-transform transform hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <p className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Enlight Academy: Excellence in ICU Training
            </p>
          </div>

          {/* Right Section - Description */}
          <div className="w-full md:w-1/2 p-8 space-y-6">
            <h2 className="text-3xl font-semibold text-white animate-fadeIn delay-300">
              Welcome to Enlight Academy
            </h2>
            <p className="text-lg leading-relaxed text-justify text-white animate-fadeIn delay-500">
              Enlight Academy, located in Putalisadak near Shankardev College, Kathmandu, Nepal, is a premier institution specializing in ICU training programs for PCL, BNS, and BSc nurses. We equip our students with the necessary skills and knowledge to excel in critical care settings.
            </p>
            <p className="text-lg leading-relaxed text-justify text-white animate-fadeIn delay-700">
              Our services include ACLS & BLS training, ventilator training, airway management training, infection prevention training, and waste management training. Each program is designed to enhance practical expertise and prepare healthcare professionals for real-world challenges in critical care.
            </p>
            <p className="text-lg leading-relaxed text-justify text-white animate-fadeIn delay-900">
              At Enlight Academy, we are committed to delivering high-quality education and hands-on training. Whether you are a nursing student looking to advance your career or a professional seeking specialized ICU skills, our expert trainers are here to guide you toward success in critical care.
            </p>
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
      <style>{`
        /* Fade-in effect */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Slide-down effect */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Zoom-in effect */
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Classes */
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 1.5s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutEnlight;

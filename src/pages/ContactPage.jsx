import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import DirectContact from '../components/DirectContact';
import enlightlocation from '../assets/map.png';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import Contact from '../components/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  // Define refs for animations
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const mapRef = useRef(null);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content with Padding */}
      <div className="flex-grow pt-[80px]  mt-5">
        <div className="p-8 text-center">
          <h1
            ref={headingRef}
            className="text-[#038A58] text-2xl sm:text-4xl font-semibold opacity-0"
            style={{ animation: 'fadeInDown 1s ease-out forwards' }}
          >
            Welcome to Enlight Academy
          </h1>

          <p
            ref={textRef}
            className="mt-4 text-[15px] sm:text-lg text-gray-700"
            style={{ animation: 'fadeInUp 1s ease-out forwards' }}
          >
        Your trusted partner in advancing healthcare excellence. At Enlight Academy, we specialize in equipping aspiring nurses and healthcare professionals with the critical skills needed for ICU care. From expert-led training programs to hands-on learning experiences, we empower individuals to excel in high-pressure medical environments. Whether you're enhancing your expertise in critical care or pursuing professional growth, Enlight Academy is here to guide you toward a successful and impactful healthcare career.
          </p>
        </div>

        <div ref={mapRef} className="text-center mt-2">
  <a 
    href="https://www.google.com/maps/place/Enlight+Academy/@27.7040147,85.3188236,17.5z/data=!4m6!3m5!1s0x39eb192caf6fc8a1:0x7a668c0b769b5614!8m2!3d27.7033752!4d85.3215092!16s%2Fg%2F11fqzcpjq5?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img
      src={enlightlocation}
      alt="Map"
      className="mx-auto max-w-full h-auto"
    />
  </a>
</div>

      </div>

      {/* Contact Section */}
      <div className="min-h-screen flex flex-col items-center  pt-[10px]  animate-fadeIn">
        {/* Contact Form */}
        <div className=" w-full bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <Contact />
        </div>

        {/* Direct Contact Section */}
        <div className=" w-full  shadow-lg rounded-lg overflow-hidden mb-10 p-6">
          <DirectContact />
        </div>
      </div>

      {/* Reviews Section */}
      <Reviews />

      {/* Footer */}
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
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade-in animation */
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;

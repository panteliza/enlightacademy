import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import service images
import service1 from "../assets/acls.jpg";
import service2 from "../assets/ventilator.jpg";
import service3 from "../assets/airway.jpg";
import service4 from "../assets/infection.jpg";
import service5 from "../assets/waste.jpg";

const services = [
  { title: "Critical Care Nursing", image: service1, link: "/critical-care-nursing" },
  { title: "Operation Theater Assistance", image: service2, link: "/operation-theater-assistance" },
  { title: "Dialysis Assistance", image: service3, link: "/dialysis-assistance" },
  { title: "AHA/Non-AHA BLS & ACLS", image: service4, link: "/aha-non-aha-bls-acls" },
  { title: "Ventilator Workshop", image: service5, link: "/ventilator-workshop" },
  { title: "First Aid and Emergency Management", image: service1, link: "/first-aid-emergency-management" },
  { title: "Research and Data Analysis", image: service2, link: "/research-data-analysis" },
  { title: "Infection Prevention and Control", image: service3, link: "/infection-prevention-control" },
  { title: "CTEVT Affiliated Short Course", image: service4, link: "/ctevt-short-course" },
  { title: "Caregiver", image: service5, link: "/caregiver" },
  { title: "Fellowship Training on Regional Anesthesia & Pain Medicine", image: service1, link: "/regional-anesthesia-pain-medicine" },
  { title: "Fellowship in Laparoscopic Training", image: service2, link: "/laparoscopic-training" },
];

const Services = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="pt-16  px-6 bg-gray-100"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-[#038A58] mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Specialized Training Programs
      </motion.h2>

      {[0, 1].map(row => (
        <div key={row} className="mb-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {services.slice(row * 6, (row + 1) * 6).map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="relative w-full h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </motion.div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#038A58] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <motion.button
                      className="mt-4 md:mt-5 px-4 md:px-5 py-2 md:py-2.5 bg-green-600 text-white font-semibold rounded-full shadow-md transition-all duration-300 group-hover:shadow-xl"
                      onClick={() => navigate(service.link)}
                      whileHover={{ scale: 1.1, backgroundColor: "#026C44" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </motion.div>
  );
};

export default Services;
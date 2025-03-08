import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import service images
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg";
import seven from "../assets/seven.jpg";
import eight from "../assets/eight.jpg";
import nine from "../assets/nine.jpg";
import ten from "../assets/ten.jpg";
import eleven from "../assets/eleven.jpg";
import twelve from "../assets/twelve.jpg";

const services = [
  { title: "Critical Care Nursing", image: one, link: "/critical-care-nursing" },
  { title: "Operation Theater Assistance", image: two, link: "/operation-theater-assistance" },
  { title: "Dialysis Assistance", image: three, link: "/dialysis-assistance" },
  { title: "AHA/Non-AHA BLS & ACLS", image: four, link: "/aha-non-aha-bls-acls" },
  { title: "First Aid and Emergency Management", image: five, link: "/first-aid-emergency-management" },
  { title: "Ventilator Workshop", image: six, link: "/ventilator-workshop" },
  { title: "Research and Data Analysis", image: seven, link: "/research-data-analysis" },
  { title: "Infection Prevention and Control", image: eight, link: "/infection-prevention-control" },
  { title: "CTEVT Affiliated Short Course", image: nine, link: "/ctevt-short-course" },
  { title: "Caregiver", image: ten, link: "/caregiver" },
  { title: "Fellowship Training on Regional Anesthesia & Pain Medicine", image: eleven, link: "/regional-anesthesia-pain-medicine" },
  { title: "Fellowship in Laparoscopic Training", image: twelve, link: "/laparoscopic-training" },
];

const Services = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="pt-12 px-4 bg-gray-100"
    >
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-center text-[#038A58] mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Specialized Training Programs
      </motion.h2>

      {[0, 1].map(row => (
        <div key={row} className="mb-8">
          <Swiper
            spaceBetween={15}
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
                  className="relative group bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* ✅ Smaller Image Container (h-52 → h-40) */}
                  <motion.div
                    className="relative w-full h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </motion.div>

                  {/* ✅ Reduced padding in text content (p-6 → p-4) */}
                  <div className="p-4 text-center">
                    <h3 className="text-md md:text-lg font-semibold text-gray-800 group-hover:text-[#038A58] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* ✅ Smaller button (px-4 → px-3, py-2.5 → py-2) */}
                    <motion.button
                      className="mt-3 px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded-full shadow-md transition-all duration-300 group-hover:shadow-lg"
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

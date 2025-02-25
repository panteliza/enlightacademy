import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Import service images
import service1 from "../assets/acls.jpg";
import service2 from "../assets/ventilator.jpg";
import service3 from "../assets/airway.jpg";
import service4 from "../assets/infection.jpg";
import service5 from "../assets/waste.jpg";

const services = [
  {
    title: "ACLS BLS Training",
    description:
      "Advanced Cardiovascular Life Support (ACLS) and Basic Life Support (BLS) training to equip healthcare professionals with life-saving skills.",
    image: service1,
    link: "/acls-bls-training",
  },
  {
    title: "Ventilator Training",
    description:
      "Hands-on ventilator management training to help nurses and healthcare workers effectively operate life-support systems.",
    image: service2,
    link: "/ventilator-training",
  },
  {
    title: "Airway Management Training",
    description:
      "Comprehensive training on airway management techniques, including intubation and emergency respiratory support.",
    image: service3,
    link: "/airway-management-training",
  },
  {
    title: "Infection Prevention Training",
    description:
      "Specialized training on preventing hospital-acquired infections, ensuring a safe environment for patients and staff.",
    image: service4,
    link: "/infection-prevention-training",
  },
  {
    title: "Waste Management Training",
    description:
      "Learn proper medical waste disposal techniques to maintain hygiene and regulatory compliance in healthcare settings.",
    image: service5,
    link: "/waste-management-training",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-16 px-6 bg-gray-100"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-[#038A58] mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Specialized Training Programs
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            {/* Background Image with Overlay */}
            <motion.div
              className="relative w-full h-52 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            </motion.div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#038A58] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{service.description}</p>

              <motion.button
                className="mt-5 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-full shadow-md transition-all duration-300 group-hover:shadow-xl"
                onClick={() => navigate(service.link)}
                whileHover={{ scale: 1.1, backgroundColor: "#026C44" }}
                whileTap={{ scale: 0.9 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;

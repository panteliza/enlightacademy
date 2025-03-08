import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import infectionImage from "../assets/eight.jpg";// Replace with correct image path

const InfectionPreventionControlPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]"
        style={{ backgroundImage: `url(${infectionImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">Infection Prevention & Control</h2>
          <p className="text-lg mt-3">
            Learn essential techniques to prevent and control infections in healthcare settings.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* What You'll Learn */}
        <section className="text-center mb-12">
          <motion.h3
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            What You’ll Learn
          </motion.h3>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Infection Control Techniques */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Infection Control Techniques</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Standard precautions and hygiene practices</li>
              <li>Hand hygiene and proper PPE usage</li>
              <li>Environmental cleaning and disinfection</li>
              <li>Infection surveillance and risk assessment</li>
            </ul>
          </motion.div>

          {/* Disease Prevention & Management */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Disease Prevention & Management</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Understanding common healthcare-associated infections (HAIs)</li>
              <li>Isolation protocols and outbreak response</li>
              <li>Antimicrobial stewardship and resistance control</li>
              <li>Public health strategies for infection control</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Choose Infection Prevention & Control? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Choose Infection Prevention & Control?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Infection prevention is **a fundamental aspect of patient safety and public health**.  
            This course provides **critical knowledge and skills** to help reduce the spread of infections  
            in **hospitals, clinics, and community healthcare settings**.
          </p>
        </section>

        {/* Certification & Career Growth */}
        <section className="mt-16 bg-gray-100 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Certification & Career Growth
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Completing this training provides a **recognized certification**, opening career opportunities in  
            **infection control departments, healthcare facilities, public health agencies, and global health organizations**.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Infection Prevention and Control" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InfectionPreventionControlPage;

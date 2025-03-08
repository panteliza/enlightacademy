import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import ventilatorImage from "../assets/six.jpg"; // Replace with correct image path

const VentilatorWorkshopPage = () => {
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
        style={{ backgroundImage: `url(${ventilatorImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">Ventilator Workshop</h2>
          <p className="text-lg mt-3">
            Gain expertise in ventilator management and critical care support.
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
          {/* Ventilator Basics */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Ventilator Basics</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Understanding mechanical ventilation principles</li>
              <li>Different types of ventilators and their functions</li>
              <li>Interpreting ventilator settings and waveforms</li>
              <li>Ventilation for neonatal, pediatric, and adult patients</li>
            </ul>
          </motion.div>

          {/* Practical Hands-on Training */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Hands-on Practical Training</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Setting up and troubleshooting ventilators</li>
              <li>Managing patients on mechanical ventilation</li>
              <li>Weaning patients off ventilators safely</li>
              <li>Emergency response to ventilator alarms</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Choose Ventilator Workshop? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Choose Ventilator Workshop?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Ventilator management is **a critical skill in intensive care units (ICU) and emergency medicine**.  
            This workshop prepares healthcare professionals to effectively handle ventilators, ensuring  
            **better patient outcomes in respiratory failure cases**.
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
            Participants who complete this workshop will receive a **recognized certification**,  
            increasing their employability in **ICUs, emergency rooms, and respiratory therapy units worldwide**.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Ventilator Workshop" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VentilatorWorkshopPage;

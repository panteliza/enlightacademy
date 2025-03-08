import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import anesthesiaImage from "../assets/eleven.jpg"; // Replace with correct image path

const FellowshipRegionalAnesthesiaPage = () => {
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
        style={{ backgroundImage: `url(${anesthesiaImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">
            Fellowship in Regional Anesthesia & Pain Medicine
          </h2>
          <p className="text-lg mt-3">
            Master the latest techniques in regional anesthesia and pain management.
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
          {/* Advanced Anesthetic Techniques */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Advanced Anesthetic Techniques</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Techniques for nerve blocks and spinal anesthesia</li>
              <li>Ultrasound-guided regional anesthesia</li>
              <li>Application of epidural and peripheral nerve blocks</li>
              <li>Emergency management and complications prevention</li>
            </ul>
          </motion.div>

          {/* Pain Medicine & Patient Care */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Pain Medicine & Patient Care</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Assessment and management of acute and chronic pain</li>
              <li>Pharmacological and interventional pain treatments</li>
              <li>Multidisciplinary pain management strategies</li>
              <li>Patient safety and post-procedure care</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Choose Fellowship in Regional Anesthesia & Pain Medicine? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Choose This Fellowship?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            With the growing demand for **expert anesthesiologists and pain management specialists**,  
            this fellowship equips professionals with **cutting-edge techniques** to enhance patient care  
            in **surgical, emergency, and chronic pain management settings**.
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
            Completing this **fellowship program** provides a **recognized certification**,  
            positioning you for **high-level roles in hospitals, pain clinics, and surgical centers**.  
            This course is a **gateway to specialization** in **regional anesthesia and pain medicine**.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Fellowship Training on Regional Anesthesia & Pain Medicine" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FellowshipRegionalAnesthesiaPage;

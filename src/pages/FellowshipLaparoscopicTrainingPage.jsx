import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import laparoscopicImage from "../assets/twelve.jpg"; // Replace with correct image path

const FellowshipLaparoscopicTrainingPage = () => {
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
        style={{ backgroundImage: `url(${laparoscopicImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">
            Fellowship in Laparoscopic Training
          </h2>
          <p className="text-lg mt-3">
            Master advanced laparoscopic surgical techniques with expert training.
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
          {/* Laparoscopic Techniques */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Laparoscopic Techniques</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Basic & advanced laparoscopic procedures</li>
              <li>Instrumentation and operating room setup</li>
              <li>Hand-eye coordination & depth perception training</li>
              <li>Complication management & troubleshooting</li>
            </ul>
          </motion.div>

          {/* Hands-on Surgical Training */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Hands-on Surgical Training</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Live surgical demonstrations & simulations</li>
              <li>Techniques for minimal access surgery</li>
              <li>Robot-assisted laparoscopic surgery introduction</li>
              <li>Patient safety & post-operative care</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Choose Laparoscopic Training? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Choose Laparoscopic Training?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Laparoscopic surgery is **one of the fastest-growing fields** in modern medicine.  
            This fellowship provides **advanced surgical skills**, helping professionals transition  
            from **open surgery to minimally invasive techniques**, improving patient outcomes and  
            recovery times.
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
            This **fellowship program** provides a **recognized certification**,  
            enhancing career prospects in **surgical departments, teaching hospitals,  
            and specialized laparoscopic surgery centers**.  
            Expand your expertise and **increase professional credibility** with this specialized training.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Fellowship in Laparoscopic Training" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FellowshipLaparoscopicTrainingPage;

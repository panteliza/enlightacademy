import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import ctevtImage from "../assets/nine.jpg"; // Replace with correct image path

const CTEVTAffiliatedShortCoursePage = () => {
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
        style={{ backgroundImage: `url(${ctevtImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">CTEVT Affiliated Short Course</h2>
          <p className="text-lg mt-3">
            Gain practical skills and hands-on experience with accredited short courses.
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
          {/* Core Skill Development */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Core Skill Development</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Technical and vocational skill enhancement</li>
              <li>Practical hands-on training in various fields</li>
              <li>Healthcare, IT, and engineering fundamentals</li>
              <li>Industry-relevant certifications</li>
            </ul>
          </motion.div>

          {/* Hands-on Training */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Practical Hands-on Training</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Real-world applications of technical knowledge</li>
              <li>Problem-solving and critical thinking exercises</li>
              <li>Team collaboration in projects and assignments</li>
              <li>Internship and job placement assistance</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Choose CTEVT Affiliated Short Courses? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Choose CTEVT Affiliated Short Courses?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            CTEVT short courses are **designed for skill-based learning and career advancement**.  
            These programs provide **highly practical training**, ensuring that **students are job-ready**  
            in **healthcare, technical, and vocational fields**.
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
            Completing a CTEVT-affiliated course gives you an **official certification**,  
            opening up **career opportunities in various industries**. These short courses  
            are a **stepping stone to better job prospects and higher earning potential**.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="CTEVT Affiliated Short Course" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CTEVTAffiliatedShortCoursePage;

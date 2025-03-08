import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import researchImage from "../assets/seven.jpg"; // Replace with correct image path

const ResearchAndDataAnalysisPage = () => {
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
        style={{ backgroundImage: `url(${researchImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">Research & Data Analysis</h2>
          <p className="text-lg mt-3">
            Learn how to conduct research and analyze data effectively for informed decision-making.
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
          {/* Research Methodologies */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Research Methodologies</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Understanding qualitative and quantitative research</li>
              <li>Formulating research questions and hypotheses</li>
              <li>Conducting literature reviews and sourcing reliable data</li>
              <li>Ethical considerations in research</li>
            </ul>
          </motion.div>

          {/* Data Analysis Techniques */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Data Analysis Techniques</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Using statistical tools (SPSS, Excel, Python, or R)</li>
              <li>Interpreting survey and experimental data</li>
              <li>Data visualization and reporting insights</li>
              <li>Decision-making based on research findings</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Choose Research & Data Analysis? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Choose Research & Data Analysis?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Research and data analysis are **crucial in various fields**, including healthcare, business, social sciences, 
            and technology. **Making data-driven decisions** improves efficiency, accuracy, and innovation.
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
            This course provides a **recognized certification**, helping you secure positions in **research institutions, 
            corporate sectors, healthcare analytics, and academic projects**.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Research and Data Analysis" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResearchAndDataAnalysisPage;

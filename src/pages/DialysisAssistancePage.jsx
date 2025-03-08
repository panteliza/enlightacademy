import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import dialysisImage from "../assets/three.jpg"; // Replace with correct image path

const DialysisAssistancePage = () => {
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
        style={{ backgroundImage: `url(${dialysisImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">Dialysis Assistance Training</h2>
          <p className="text-lg mt-3">
            Learn the essential techniques required to assist in life-saving dialysis treatments.
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
          {/* Dialysis Process & Techniques */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Dialysis Process & Techniques</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Understanding kidney failure and dialysis principles</li>
              <li>Hemodialysis and peritoneal dialysis procedures</li>
              <li>Patient preparation and post-treatment care</li>
              <li>Handling dialysis machines and monitoring vital signs</li>
            </ul>
          </motion.div>

          {/* Hands-on Training */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Hands-on Practical Training</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Handling dialysis catheters and access points</li>
              <li>Infection control and hygiene maintenance</li>
              <li>Emergency response for dialysis-related complications</li>
              <li>Patient education and communication skills</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Choose Dialysis Assistance? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Choose Dialysis Assistance?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Dialysis assistants play a vital role in **supporting patients undergoing kidney treatment**. 
            With the increasing number of kidney-related diseases, **qualified dialysis assistants are in high demand** worldwide.
          </p>
        </section>

        {/* Certification & Career Opportunities */}
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
            Upon successful completion of this course, you will receive a **recognized certification**, 
            opening up opportunities in **dialysis centers, hospitals, and specialized nephrology units worldwide**.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Dialysis Assistance" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DialysisAssistancePage;

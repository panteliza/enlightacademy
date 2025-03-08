import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import caregiverImage from "../assets/ten.jpg"; 

const CaregiverTrainingPage = () => {
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
        style={{ backgroundImage: `url(${caregiverImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">Caregiver Training</h2>
          <p className="text-lg mt-3">
            Learn compassionate caregiving skills to assist individuals with health and personal needs.
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
          {/* Personal & Medical Care Skills */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Personal & Medical Care Skills</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Assisting with daily living activities (bathing, dressing, feeding)</li>
              <li>Monitoring vital signs and patient conditions</li>
              <li>Basic wound care and hygiene maintenance</li>
              <li>Providing emotional and social support</li>
            </ul>
          </motion.div>

          {/* Emergency Response & Professional Ethics */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Emergency Response & Professional Ethics</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Handling medical emergencies and first aid application</li>
              <li>Proper documentation and patient care planning</li>
              <li>Ethical considerations and maintaining patient dignity</li>
              <li>Communication skills for family and healthcare teams</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Choose Caregiver Training? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Choose Caregiver Training?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            The demand for **trained caregivers is growing globally**. This course provides **practical skills**  
            for assisting elderly individuals, disabled patients, and those with chronic illnesses, ensuring **compassionate  
            and high-quality care in homes, hospitals, and assisted living facilities**.
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
            Completing this training earns you a **recognized certification**,  
            leading to job opportunities in **home healthcare, nursing homes, and rehabilitation centers**.  
            This is a **highly rewarding field** that allows you to **make a direct impact on people’s lives**.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Caregiver" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CaregiverTrainingPage;

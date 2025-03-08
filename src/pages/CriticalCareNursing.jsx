import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import nursingImage from "../assets/one.jpg";// Update with the correct image

const CriticalCareNursingPage = () => {
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
        style={{ backgroundImage: `url(${nursingImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">Critical Care Nursing Training</h2>
          <p className="text-lg mt-3">
            Master the essential skills for patient care in intensive and emergency units.
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
          {/* Critical Care Nursing Section */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Critical Care Nursing Techniques</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Patient monitoring and assessment in ICU</li>
              <li>Advanced respiratory support techniques</li>
              <li>Medication administration and infusion therapy</li>
              <li>Handling emergency situations and life support</li>
            </ul>
          </motion.div>

          {/* Hands-on Training Section */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Practical Hands-on Training</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Operation of ventilators and cardiac monitors</li>
              <li>Infection control and patient safety measures</li>
              <li>Team collaboration in emergency response</li>
              <li>Proper documentation and patient communication</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Critical Care Nursing? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Pursue Critical Care Nursing?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Critical care nurses are in **high demand** globally. With this specialized training, 
            you’ll be equipped to handle **ICU, ER, and trauma cases**, ensuring better patient 
            outcomes and career growth in the medical field.
          </p>
        </section>

        {/* Certification & Accreditation */}
        <section className="mt-16 bg-gray-100 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Certification & Career Opportunities
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Upon successful completion, you will receive a **recognized certification**, opening doors to 
            **hospital ICUs, emergency wards, and private healthcare sectors** worldwide.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Critical Care Nursing" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CriticalCareNursingPage;

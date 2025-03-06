import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Import images
import aclsImage from "../assets/acls.jpg"; // Update with actual image path

const ACLSBLSPage = () => {
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]"
        style={{ backgroundImage: `url(${aclsImage})` }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div 
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">ACLS & BLS Training</h2>
          <p className="text-lg mt-3">Equipping healthcare professionals with life-saving skills and advanced emergency care techniques.</p>
        </motion.div>
      </motion.section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h3
          className="text-3xl font-bold text-gray-800 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What You’ll Learn
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div 
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Advanced Cardiovascular Life Support (ACLS)</h4>
            <p className="text-gray-600 mt-3 leading-relaxed">
              ACLS training builds upon basic life support skills, emphasizing advanced interventions and clinical decision-making. Participants learn to manage cardiac and respiratory emergencies through high-quality CPR, airway management, and the use of AEDs. ACLS also covers pharmacological interventions, acute stroke treatment, and team-based resuscitation strategies.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Basic Life Support (BLS)</h4>
            <p className="text-gray-600 mt-3 leading-relaxed">
              BLS training is the foundation of emergency medical response. Participants learn to recognize life-threatening emergencies, perform high-quality CPR for adults, children, and infants, and use AEDs effectively. The course emphasizes rapid assessment, effective chest compressions, and teamwork to improve patient survival rates.
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Section */}
        <motion.div 
          className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-green-800">Why Choose Our Training?</h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Our ACLS & BLS training is designed for healthcare professionals who need critical skills for life-saving interventions. The program includes real-world simulations, expert instruction, and certification upon successful completion. Training follows the latest guidelines from the American Heart Association (AHA) and ensures readiness for emergency scenarios.
          </p>
        </motion.div>

        {/* Call to Action */}
        <div className="mt-14 text-center">
          <motion.button
            className="px-8 py-3 bg-green-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-green-800 transition-all duration-300"
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            Enroll Now
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ACLSBLSPage;

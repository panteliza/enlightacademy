import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
        <h1 className="text-xl font-bold text-green-700">Healthcare Training</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-green-600 font-semibold hover:text-green-800 transition"
        >
          Back
        </button>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center"
        style={{ backgroundImage: `url(${aclsImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="bg-black bg-opacity-50 p-6 text-white text-center rounded-lg">
          <h2 className="text-3xl font-extrabold">ACLS & BLS Training</h2>
          <p className="text-lg mt-2">Equipping healthcare professionals with life-saving skills</p>
        </div>
      </motion.section>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.h3
          className="text-2xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What You’ll Learn
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-lg font-semibold text-green-700">Advanced Cardiovascular Life Support (ACLS)</h4>
            <p className="text-gray-600 mt-2">
              Learn advanced resuscitation techniques, airway management, and emergency cardiovascular care.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-lg font-semibold text-green-700">Basic Life Support (BLS)</h4>
            <p className="text-gray-600 mt-2">
              Hands-on training for high-quality CPR, AED usage, and emergency response protocols.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <motion.button
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Enroll Now
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-16">
        <p className="text-sm">© 2025 Healthcare Training. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ACLSBLSPage;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import otaImage from "../assets/two.jpg"; // Replace with correct image path

const OperationTheaterAssistancePage = () => {
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
        style={{ backgroundImage: `url(${otaImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">Operation Theater Assistance</h2>
          <p className="text-lg mt-3">
            Learn the essential skills required to assist in surgical procedures with precision and confidence.
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
          {/* Operation Theater Procedures */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Operation Theater Procedures</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Pre-operative and post-operative patient care</li>
              <li>Setting up and maintaining a sterile environment</li>
              <li>Handling surgical instruments and assisting surgeons</li>
              <li>Ensuring patient safety and infection control</li>
            </ul>
          </motion.div>

          {/* Hands-on Training */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Hands-on Practical Training</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Instrument sterilization and proper storage</li>
              <li>Handling anesthesia equipment</li>
              <li>Assisting in minor and major surgical procedures</li>
              <li>Emergency response in the operation theater</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Choose Operation Theater Assistance? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Choose Operation Theater Assistance?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Operation theater assistants play a crucial role in **ensuring smooth and safe surgical procedures**. 
            This training provides **specialized skills** that make you an **essential part of a surgical team**.
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
            opening up opportunities in **hospitals, surgical centers, and specialized clinics worldwide**.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Operation Theater Assistance" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OperationTheaterAssistancePage;

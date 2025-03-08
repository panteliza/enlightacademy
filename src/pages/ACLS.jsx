
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import aclsImage from "../assets/acls.jpg"; // Image Import

const ACLSBLSPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]" style={{ backgroundImage: `url(${aclsImage})` }}>
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">AHA & Non-AHA BLS & ACLS Training</h2>
          <p className="text-lg mt-3">Learn essential life-saving skills and advanced cardiovascular life support techniques.</p>
        </motion.div>
      </section>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* What You'll Learn */}
        <section className="text-center mb-12">
          <motion.h3 className="text-3xl font-bold text-gray-800" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            What You’ll Learn
          </motion.h3>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ACLS Section */}
          <motion.div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300" whileHover={{ scale: 1.05 }}>
            <h4 className="text-xl font-semibold text-green-700">Advanced Cardiovascular Life Support (ACLS)</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Advanced airway management techniques</li>
              <li>Recognizing and treating life-threatening arrhythmias</li>
              <li>Effective team dynamics in emergency situations</li>
              <li>Using defibrillators (AEDs) and administering life-saving medications</li>
            </ul>
          </motion.div>

          {/* BLS Section */}
          <motion.div className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300" whileHover={{ scale: 1.05 }}>
            <h4 className="text-xl font-semibold text-green-700">Basic Life Support (BLS)</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>High-quality CPR for adults, children, and infants</li>
              <li>Proper use of Automated External Defibrillators (AEDs)</li>
              <li>Choking relief and airway management</li>
              <li>Chain of survival & effective rescue techniques</li>
            </ul>
          </motion.div>
        </section>

        {/* AHA vs. Non-AHA Training */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3 className="text-2xl font-bold text-green-800" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            AHA vs. Non-AHA Training: What's the Difference?
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-green-700">AHA-Accredited ACLS & BLS</h4>
              <p className="text-gray-700 mt-3">
                This program follows **American Heart Association (AHA)** guidelines, ensuring internationally recognized certification. It is **required by many hospitals and healthcare institutions** for professionals working in emergency and critical care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-green-700">Non-AHA ACLS & BLS</h4>
              <p className="text-gray-700 mt-3">
                This training follows similar protocols but **without AHA accreditation**. It is ideal for those needing foundational knowledge and skills **without the cost or certification requirements of AHA programs**.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-16 bg-gray-100 p-10 rounded-lg shadow-md text-center">
          <motion.h3 className="text-2xl font-bold text-gray-800" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            Why Choose Our Training?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Our ACLS & BLS courses provide **real-world scenarios, hands-on practice, and expert guidance**. Whether you need an AHA-accredited certification or a non-AHA training program, our courses ensure you're **confident and prepared for emergency situations**.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="AHA/Non-AHA BLS & ACLS" />
      </main>

      {/* Footer */}
   <Footer/>
    </div>
  );
};

export default ACLSBLSPage;

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "Why should I choose Enlight Academy for ICU training?",
    answer: "Enlight Academy provides specialized ICU training programs for PCL, BNS, and BSc nurses, ensuring they acquire essential critical care skills.",
  },
  {
    question: "What makes Enlight Academy different from other training centers?",
    answer: "Our training approach is hands-on, combining theoretical knowledge with practical simulations to prepare nurses for real-world ICU settings.",
  },
  {
    question: "Who can enroll in the ICU training programs?",
    answer: "Our programs are designed for PCL, BNS, and BSc nurses who wish to enhance their expertise in intensive care and critical care nursing.",
  },
  {
    question: "How experienced are the instructors at Enlight Academy?",
    answer: "Our instructors are highly experienced critical care professionals with extensive backgrounds in ICU and emergency medicine.",
  },
];

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-teal-50 py-12 px-4 sm:px-8 md:px-16 lg:px-24 w-full">
      <div className="text-center mb-12">
        <h1
          className="text-2xl md:text-3xl font-bold text-center text-[#038A58] mb-4 sm:mb-6"
          data-aos="fade-down"
        >
          Frequently Asked Questions
        </h1>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#00853E] text-white rounded-lg overflow-hidden shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-[#009F6B] transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
            {activeIndex === index && (
              <div
                className="p-4 text-gray-100 bg-[#043927] transition-all duration-300"
                data-aos="fade-in"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;

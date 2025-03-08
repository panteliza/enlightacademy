import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images (Replace these with actual images for Enlight Academy)


import imgA from "../assets/icu.png";
import imgB from "../assets/b.jpeg";
import imgC from "../assets/c.jpeg";
import imgD from "../assets/d.jpeg";
import imgE from "../assets/q17.jpeg";
import imgF from "../assets/a.jpeg";

const features = [
  {
    id: 1,
    title: "Comprehensive ICU Training",
    description:
      "Our specialized courses equip PCL, BNS, and BSc nurses with hands-on ICU skills.",
    image: imgA,
  },
  {
    id: 2,
    title: "Experienced Instructors",
    description:
      "Learn from certified critical care professionals with extensive experience in ICU settings.",
    image: imgB,
  },
  {
    id: 3,
    title: "Advanced Simulation Labs",
    description:
      "State-of-the-art training facilities with real-life ICU scenarios for practical learning.",
    image: imgC,
  },
  {
    id: 4,
    title: "Accredited Certification",
    description:
      "Receive industry-recognized certification upon successful course completion.",
    image: imgD,
  },
  {
    id: 5,
    title: "Flexible Learning Options",
    description:
      "Choose from online, in-person, and hybrid courses to suit your schedule.",
    image: imgE,
  },
  {
    id: 6,
    title: "Career Advancement",
    description:
      "Boost your job opportunities in top hospitals and healthcare institutions.",
    image: imgF,
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h1
          className="text-2xl md:text-3xl font-bold text-center text-[#038A58] mb-4 sm:mb-6"
          data-aos="fade-down"
        >
          WHY CHOOSE ENLIGHT ACADEMY?
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="bg-green-100 border border-green-300 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay={`${id * 100}`}
          >
            <div className="flex justify-center mb-4">
              <img
                src={image}
                alt={title}
                className="h-16 w-16 object-contain"
              />
            </div>
            <h2 className="text-lg font-bold text-[#038A58] mb-2">{title}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

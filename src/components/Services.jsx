import React from "react";
import { useNavigate } from "react-router-dom";

// Import service images (Replace with actual images)
import service1 from "../assets/acls.jpg";
import service2 from "../assets/ventilator.jpg";
import service3 from "../assets/airway.jpg";
import service4 from "../assets/infection.jpg";
import service5 from "../assets/waste.jpg";

const services = [
  {
    title: "ACLS BLS Training",
    description:
      "Advanced Cardiovascular Life Support (ACLS) and Basic Life Support (BLS) training to equip healthcare professionals with life-saving skills.",
    image: service1,
    link: "/acls-bls-training",
  },
  {
    title: "Ventilator Training",
    description:
      "Hands-on ventilator management training to help nurses and healthcare workers effectively operate life-support systems.",
    image: service2,
    link: "/ventilator-training",
  },
  {
    title: "Airway Management Training",
    description:
      "Comprehensive training on airway management techniques, including intubation and emergency respiratory support.",
    image: service3,
    link: "/airway-management-training",
  },
  {
    title: "Infection Prevention Training",
    description:
      "Specialized training on preventing hospital-acquired infections, ensuring a safe environment for patients and staff.",
    image: service4,
    link: "/infection-prevention-training",
  },
  {
    title: "Waste Management Training",
    description:
      "Learn proper medical waste disposal techniques to maintain hygiene and regulatory compliance in healthcare settings.",
    image: service5,
    link: "/waste-management-training",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="py-10 px-5 bg-gray-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#038A58] mb-4 sm:mb-6">
        Our Specialized Training Programs
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card relative bg-white shadow-md rounded-lg hover:shadow-lg transition-transform transform hover:-translate-y-1 min-h-[300px] flex flex-col justify-between"
          >
            {/* Background Image */}
            <div
              className="w-full h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content */}
            <div className="p-5 text-center flex flex-col items-center">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>

              <button
                className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition"
                onClick={() => navigate(service.link)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

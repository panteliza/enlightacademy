import React, { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    role: "Managing Director",
    name: "Sahara Acharya",
    image: "/assets/a1.jpg"
  },
  {
    role: "Critical Care Training Coordinator",
    name: "Dr Nabin Pokharel",
    image: "/assets/b2.jpg"
  },
  {
    role: "Research and Data Science",
    name: "Dr Sujita Shresha",
    image: "/assets/c3.jpg"
  },
  {
    role: "Caregiver Training",
    name: "Sushma Regmi",
    image: "/assets/d4.jpg"
  },
  {
    role: "Infection Prevention and Control",
    name: "Radhika",
    image: "/assets/e5.jpg"
  },
  {
    role: "Emergency, First Aid & Disaster Management",
    name: "Dr Roshan Piya",
    image: "/assets/f6.jpg"
  },
  {
    role: "Fellowship in Regional Anesthesia & Pain Medicine",
    name: "Pawan Kumar Hamal",
    image: "/assets/a1.jpg"
  },
  {
    role: "AHA/Non-AHA BLS & ACLS",
    name: "Dr Kalu Singh Khatri",
    image: "/assets/b2.jpg"
  }
];

const TrainingTeam = () => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const cards = containerRef.current.querySelectorAll(".card");
      cards.forEach((card, i) => {
        let direction;
        const row = Math.floor(i / 4);
        if (row % 2 === 0) {
          direction = i % 3 === 0 ? 'fadeInUp' : i % 3 === 1 ? 'fadeInLeft' : 'fadeInRight';
        } else {
          direction = i % 3 === 0 ? 'fadeInRight' : i % 3 === 1 ? 'fadeInUp' : 'fadeInLeft';
        }
        card.style.animation = `${direction} 0.8s ease-out forwards`;
        card.style.animationDelay = `${i * 0.2}s`;
      });
    }
  }, [isLoaded]);

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-extrabold text-center text-[#038A58] mb-8">Training Team</h1>
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="card opacity-0 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-200"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{member.role}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default TrainingTeam;
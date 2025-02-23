import React from "react";
import bgImage from "../assets/e.jpeg"; // Replace with appropriate background image

const DirectContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Send data via email - update the email address if necessary
    window.location.href = `mailto:enlightskill2073@gmail.com?subject=Direct Contact Request&body=Name: ${data.name}%0AEmail: ${data.email}%0AAddress: ${data.address}`;
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-12 px-6"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Right Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Direct Contact Us
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">
              ENLIGHT ACADEMY 
            </h1>
            <p className="text-lg leading-relaxed mb-4">
              Enlight Academy ICU Training Center is at the forefront of critical
              care education, empowering healthcare professionals with the skills
              and expertise needed in high-pressure intensive care environments.
            </p>
            <p className="text-lg leading-relaxed">
              Our state-of-the-art simulation labs and expert-led courses ensure a
              comprehensive, hands-on learning experience that upholds the highest
              standards of patient care and safety.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectContactUs;

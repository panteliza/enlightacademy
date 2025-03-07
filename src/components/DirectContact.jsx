import React, { useState } from "react";
import bgImage from "../assets/e.jpeg"; // Replace with the appropriate background image

const DirectContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Construct Gmail compose URL
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=elizapant55@gmail.com&su=Direct Contact Request&body=
      Name: ${encodeURIComponent(data.name)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0AAddress: ${encodeURIComponent(data.address)}
      %0ACourse: ${encodeURIComponent(data.course)}`;

    // Open Gmail compose window in a new tab
    window.open(gmailLink, "_blank");

    // Set message sent state
    setMessageSent(true);
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
            {messageSent ? (
              <p className="text-green-600 font-bold text-lg">
                Message Sent Successfully! Please check your Gmail.
              </p>
            ) : (
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
                    required
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
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
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
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Select Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="Critical Care Nursing">
                      Critical Care Nursing
                    </option>
                    <option value="Operation Theater Assistance">
                      Operation Theater Assistance
                    </option>
                    <option value="Dialysis Assistance">
                      Dialysis Assistance
                    </option>
                    <option value="AHA/Non AHA BLS & ACLS">
                      AHA/Non AHA BLS & ACLS
                    </option>
                    <option value="Ventilator Workshop">
                      Ventilator Workshop
                    </option>
                    <option value="First Aid and Emergency Management">
                      First Aid and Emergency Management
                    </option>
                    <option value="Research and Data Analysis">
                      Research and Data Analysis
                    </option>
                    <option value="Infection Prevention and Control">
                      Infection Prevention and Control
                    </option>
                    <option value="Massage Therapy">Massage Therapy</option>
                    <option value="Physiotherapy Assistance">
                      Physiotherapy Assistance
                    </option>
                    <option value="Dental Chair Assistance">
                      Dental Chair Assistance
                    </option>
                    <option value="Caregiver">Caregiver</option>
                    <option value="Fellowship Training on Regional Anesthesia & Pain Medicine">
                      Fellowship Training on Regional Anesthesia & Pain Medicine
                    </option>
                    <option value="Fellowship in Laparoscopic Training">
                      Fellowship in Laparoscopic Training
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">ENLIGHT ACADEMY</h1>
            <p className="text-lg leading-relaxed mb-4">
              Enlight Academy ICU Training Center is at the forefront of critical
              care education, empowering healthcare professionals with the skills
              and expertise needed in high-pressure intensive care environments.
            </p>
            <p className="text-lg leading-relaxed mb-4">
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

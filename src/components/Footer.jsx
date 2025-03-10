import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/remover.png";

const Footer = () => {
  return (
    <footer className="bg-[#006241] text-white relative">
      {/* Smooth Fade-in Effect on Load */}
      <div className="py-10 px-6 sm:px-12 animate-fadeIn">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-[120px] w-[130px]" />
            </div>
            <p className="text-sm mt-2">Be the moon among the stars. Read, explore, and excel.</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/share/16GUP3t2K6/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-teal-700 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/explore/locations/1337305383009807/enlight-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-teal-700 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
  <h2 className="text-xl font-bold mb-4">Our Services</h2>
  <ul className="space-y-2 text-sm">
    {[
      { title: "Critical Care Nursing", link: "/critical-care-nursing" },
      { title: "Operation Theater Assistance", link: "/operation-theater-assistance" },
      { title: "Dialysis Assistance", link: "/dialysis-assistance" },
      { title: "AHA/Non-AHA BLS & ACLS", link: "/aha-non-aha-bls-acls" },
      { title: "First Aid and Emergency Management", link: "/first-aid-emergency-management" },
      { title: "Ventilator Workshop", link: "/ventilator-workshop" },
      { title: "Research and Data Analysis", link: "/research-data-analysis" },
      { title: "Infection Prevention and Control", link: "/infection-prevention-control" },
      { title: "CTEVT Affiliated Short Course", link: "/ctevt-short-course" },
      { title: "Caregiver", link: "/caregiver" },
      { title: "Fellowship Training on Regional Anesthesia & Pain Medicine", link: "/regional-anesthesia-pain-medicine" },
      { title: "Fellowship in Laparoscopic Training", link: "/laparoscopic-training" }
    ].map((service, index) => (
      <li key={index}>
        <Link to={service.link} className="hover:text-green-300 transition-all duration-300">
          {service.title}
        </Link>
      </li>
    ))}
  </ul>
</div>
          {/* Helpful Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Helpful Links</h2>
            <ul className="space-y-2 text-sm">
              {["About Us", "Contact Us", "Gallery", "Our Services"].map((link, index) => (
                <li key={index}>
                  <Link to={`/${link.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-green-300 transition-all duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg text-green-300" />
                <a href="mailto:enlightskill2073@gmail.com" className="hover:text-green-300 transition-all duration-300">
                  enlightskill2073@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-lg text-green-300" />
                <a href="tel:+9779809494619" className="hover:text-green-300 transition-all duration-300">977 9809494619</a>
                <a href="tel:+015365755" className="hover:text-green-300 transition-all duration-300">  01 5365755</a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg text-green-300" />
                <span className="hover:text-green-300 transition-all duration-300">Putalisadak, Kathmandu, Nepal</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Book An Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#00853E] text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} EnlightAcademy. All Rights Reserved. Designed by{" "}
          <span className="font-bold hover:text-green-300 transition-all duration-300">Clouds Nepal Web</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

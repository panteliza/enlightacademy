import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../assets/remover.png';

const Footer = () => {
  return (
    <footer className="bg-[#006241] text-white">
      {/* Main Footer Content */}
      <div className="py-10 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div data-aos="fade-right">
             <div className="flex items-center gap-2">
                      <img src={logo} alt="Logo" className="h-[120px] w-[130px]" />
                    </div>
            <p className="text-sm">
              Be the moon among the stars. Read, explore and excel.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/share/16GUP3t2K6/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-teal-700 hover:bg-teal-600 hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/explore/locations/1337305383009807/enlight-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-teal-700 hover:bg-teal-600 hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/acls-bls-training" className="hover:text-teal-300 transition-all">
                ACLS BLS Training
                </Link>
              </li>
              <li>
                <Link to="/ventilator-training'" className="hover:text-teal-300 transition-all">
                Ventilator Training
                </Link>
              </li>
              <li>
                <Link to="/airway-management-training" className="hover:text-teal-300 transition-all">
                Airway Management Training
                </Link>
              </li>
              <li>
                <Link to="/infection-prevention-training" className="hover:text-teal-300 transition-all">
                Infection Prevention Training
                </Link>
              </li>
              <li>
                <Link to="/waste-management-training" className="hover:text-teal-300 transition-all">
                Waste Management Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-xl font-bold mb-4">Helpful Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-us" className="hover:text-teal-300 transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-teal-300 transition-all">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-teal-300 transition-all">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="hover:text-teal-300 transition-all">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div data-aos="fade-left" data-aos-delay="300">
           
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg" />
                <a href="mailto:enlightskill2073@gmail.com" className="hover:underline">
                enlightskill2073@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-lg" />
                <a href="tel:+9779809494619" className="hover:underline">
                977 9809494619
                </a>
                <a href="tel:+015365755" className="hover:underline">
                  01 5365755
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg" />
                <span>Putalisadak, Kathmandu, Nepal</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
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
          <span className="font-bold">Clouds Nepal Web</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

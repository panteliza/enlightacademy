import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../assets/logo.jpeg';
import img1 from '../assets/facebook.png';
import img2 from '../assets/googlemap.png';
import img3 from '../assets/instagram.png';
import img4 from '../assets/linkedin.png';

const services = [
  { path: '/services/acls-bls-training', label: 'ACLS BLS Training' },
  { path: '/services/ventilator-training', label: 'Ventilator Training' },
  { path: '/services/airway-management-training', label: 'Airway Management Training' },
  { path: '/services/infection-prevention-training', label: 'Infection Prevention Training' },
  { path: '/services/waste-management-training', label: 'Waste Management Training' },
];

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact Us' },
  { path: '/gallery', label: 'Gallery' },
];

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="flex items-center h-[80px] p-2">
        <img src={logo} alt="Logo" className="w-[90px]" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 text-lg">
        {navLinks.map(({ path, label }) => (
          <Link key={path} to={path} className="font-bold text-[#038A58]">
            {label}
          </Link>
        ))}
        
        <div className="relative group font-bold text-[#038A58] cursor-pointer">
          <div className="flex items-center gap-1" onClick={toggleDropdown}>
            <span>Services</span>
            {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showDropdown && (
            <div className="absolute top-12 left-0 bg-green-600 p-4 shadow-lg rounded-md w-64">
              {services.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-green-900 py-2 px-4 hover:bg-green-100 rounded-md"
                  onClick={() => setShowDropdown(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Social Media Icons */}
      <div className="hidden lg:flex gap-2">
        <a href="https://www.facebook.com/share/16GUP3t2K6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          <img src={img1} alt="Facebook" className="h-[40px] w-[40px] object-contain" />
        </a>
        <a href="https://www.google.com/maps/search/enlight+academy/@27.7032867,85.3186986,17z?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
          <img src={img2} alt="Google Maps" className="h-[40px] w-[40px] object-contain" />
        </a>
        <a href="https://www.instagram.com/explore/locations/1337305383009807/enlight-academy/" target="_blank" rel="noopener noreferrer">
          <img src={img3} alt="Instagram" className="h-[40px] w-[40px] object-contain" />
        </a>
       
      </div>
      
      {/* Mobile Menu Button */}
      <FiAlignJustify className="text-3xl lg:hidden cursor-pointer text-[#038A58]" onClick={toggleSidebar} />
      
      {/* Mobile Sidebar */}
      {showSidebar && (
        <div className="fixed top-0 left-0 w-[300px] h-full bg-[#038A58] shadow-lg z-50 flex flex-col p-4">
          <MdOutlineClose className="text-3xl text-white self-end cursor-pointer" onClick={toggleSidebar} />
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="text-white py-2 border-b border-green-600 hover:bg-green-700" onClick={toggleSidebar}>
              {label}
            </Link>
          ))}
          <div className="text-white py-2 border-b border-green-600 hover:bg-green-700 cursor-pointer" onClick={toggleDropdown}>
            Services {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showDropdown && services.map(({ path, label }) => (
            <Link key={path} to={path} className="text-white py-2 border-b border-green-600 hover:bg-green-700" onClick={toggleSidebar}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../assets/logo.jpeg';
import img1 from '../assets/facebook.png';
import img2 from '../assets/googlemap.png';
import img3 from '../assets/instagram.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact Us' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/services', label: 'Services' },
];

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50">
      {/* Logo */}
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

        {/* Services - Now Just a Label */}
      
      </div>
      
      {/* Social Media Icons */}
      <div className="hidden lg:flex gap-2">
        <a href="https://www.facebook.com/share/16GUP3t2K6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          <img src={img1} alt="Facebook" className="h-[40px] w-[40px] object-contain" />
        </a>
        <a href="https://www.google.com/maps/search/enlight+academy/" target="_blank" rel="noopener noreferrer">
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

          {/* Services - Just a Label in Mobile */}
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;

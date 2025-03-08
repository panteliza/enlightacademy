import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Import images
import a1 from "../assets/a1.jpeg";
import b2 from "../assets/b2.jpeg";
import c3 from "../assets/c3.jpeg";
import d4 from "../assets/d4.jpeg";
import e5 from "../assets/e5.jpeg";
import f6 from "../assets/f6.jpeg";
import g7 from "../assets/g7.jpeg";
import h8 from "../assets/h8.jpeg";
import i9 from "../assets/i9.jpeg";
import j10 from "../assets/j10.jpeg";
import k11 from "../assets/k11.jpeg";
import l12 from "../assets/l12.jpeg";
import m13 from "../assets/m13.jpeg";
import n14 from "../assets/n14.jpeg";
import o15 from "../assets/o15.jpeg";
import p16 from "../assets/p16.jpeg";
import q17 from "../assets/q17.jpeg";
import r18 from "../assets/r18.jpeg";
import enlight1 from "../assets/a.jpeg";
import enlight2 from "../assets/b.jpeg";
import enlight3 from "../assets/c.jpeg";
import enlight4 from "../assets/d.jpeg";
import enlight5 from "../assets/e.jpeg";


// Store images in an array
const images = [
  enlight1, enlight2,enlight3,enlight4,enlight5,a1, b2, c3, d4, f6, g7, h8, i9,
  j10, k11, l12, m13, n14, o15, p16, q17, r18, 
];

const GalleryContent = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-[70px]">
      {/* Navbar */}
      <Navbar />

      {/* Gallery Section */}
      <div className="py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#034694] mb-6 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy" // ✅ Optimized for performance
                  decoding="async" // ✅ Improves rendering efficiency
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GalleryContent;

import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import EnlightComponent from "../components/EnlightComponent";
import Contact from "../components/ContactForm";
import StudentReviews from "../components/Reviews";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import DirectContactUs from "../components/DirectContact";
import WhyChooseUs from "../components/Why";
import Services from "../components/Services";






const Home = () => {
   useEffect(() => {
      // Scroll to the top when the page loads
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[70px]">
        <Navbar />
      </div>
      <div className="w-full flex-shrink-0 overflow-hidden">
      <EnlightComponent/>
      <Services/>
      <WhyChooseUs/>
    <StudentReviews/>
    <FAQ/>
    <DirectContactUs/>
      <Contact/>
      <Footer/>
    
      </div>
    </div>
  );
};

export default Home;

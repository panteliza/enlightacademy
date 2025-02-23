import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import EnlightComponent from "../components/EnlightComponent";
import Contact from "../components/ContactForm";
import StudentReviews from "../components/Reviews";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";






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
      <EnlightComponent/>
    <StudentReviews/>
    <FAQ/>
      <Contact/>
      <Footer/>
      {/* Main content section */}
      
    </div>
  );
};

export default Home;

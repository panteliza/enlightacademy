import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import EnlightComponent from "../components/EnlightComponent";






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
      {/* Main content section */}
      
    </div>
  );
};

export default Home;

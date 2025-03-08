import React from 'react'
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import DirectContactUs from '../components/DirectContact';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div>
      
      <div className="pt-[70px]">
        <Navbar />
      </div>
      <div className="w-full flex-shrink-0 overflow-hidden mt-4 ">
    
      <Services/>
     
    <DirectContactUs/>
     
      <Footer/>
    
      </div>
    </div>
  )
}

export default ServicesPage;
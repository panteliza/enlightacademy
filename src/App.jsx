import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image
import './App.css'; // Add this for styling
import Home from './pages/Home';
import Services from './pages/ServicesPage';
import Gallery from './pages/Gallery';
import AboutEnlight from './pages/AboutEnlight';
import ContactPage from './pages/ContactPage';
import ACLSBLSPage from './pages/ACLS';
import CriticalCareNursingPage from './pages/CriticalCareNursing';
import OperationTheaterAssistancePage from './pages/OperationTheaterAssistancePage';
import DialysisAssistancePage from './pages/DialysisAssistancePage';
import FirstAidEmergencyManagementPage from './pages/FirstAidEmergencyManagementPage';
import VentilatorWorkshopPage from './pages/VentilatorWorkshopPage';
import ResearchAndDataAnalysisPage from './pages/ResearchAndDataAnalysisPage';
import InfectionPreventionControlPage from './pages/InfectionPreventionControlPage';
import CTEVTAffiliatedShortCoursePage from './pages/CTEVTAffiliatedShortCoursePage';
import CaregiverTrainingPage from './pages/CaregiverTrainingPage';
import FellowshipRegionalAnesthesiaPage from './pages/ellowshipRegionalAnesthesiaPage';
import FellowshipLaparoscopicTrainingPage from './pages/FellowshipLaparoscopicTrainingPage';
import ServicesPage from './pages/ServicesPage';




const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
        <Route path="/our-services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutEnlight />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aha-non-aha-bls-acls" element={<ACLSBLSPage />} />
        <Route path="/critical-care-nursing" element={<CriticalCareNursingPage />} />
        <Route path="/operation-theater-assistance" element={<OperationTheaterAssistancePage />} />
        <Route path="/dialysis-assistance" element={<DialysisAssistancePage />} />
        <Route path="/first-aid-emergency-management" element={<FirstAidEmergencyManagementPage />} />
        <Route path="/ventilator-workshop" element={<VentilatorWorkshopPage />} />
        <Route path="/research-data-analysis" element={<ResearchAndDataAnalysisPage />} />
        <Route path="/infection-prevention-control" element={<InfectionPreventionControlPage />} />
        <Route path="/ctevt-short-course" element={<CTEVTAffiliatedShortCoursePage />} />
        <Route path="/caregiver" element={<CaregiverTrainingPage />} />
        <Route path="/regional-anesthesia-pain-medicine" element={<FellowshipRegionalAnesthesiaPage />} />
        <Route path="/laparoscopic-training" element={<FellowshipLaparoscopicTrainingPage />} />

      
        
          <Route path="/" element={<Home />} />
          </Routes>
          {/* WhatsApp button as an image */}
        <a
          href="https://wa.me/9809494619"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={whatsappImage} alt="WhatsApp" />
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;



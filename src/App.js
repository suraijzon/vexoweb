import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solution from "./components/Solution";
import SuccessSection from "./components/SuccessSection";
import ProcessSection from "./components/ProcessSection";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseSleekIT from "./components/WhyChooseSleekIT";
import ContactSection from "./components/ContactSection";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";
import ExpertPopup from "./components/ExpertPopup";
import WhatsappFloat from "./components/WhatsappFloat";

// Import pages
import GoogleSearchConsole from './pages/GoogleSearchConsole';
import AiSeoServices from './pages/AiSeoServices';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import ContactUs from './pages/ContactUs';
import AIOptimizationPage from "./pages/AIOptimizationPage";
import AIWebAppPage from "./pages/AIWebAppPage";
import EcommercePage from "./pages/EcommercePage";
import AISoftwareServices from './pages/AISoftwareServices';
import FullStackWebDev from './pages/FullStackWebDev';
import AIWebsiteDesign from './pages/AIWebsiteDesign';
import AboutUs from './pages/AboutUs';
import SEOServices from './pages/SEOServices';
import CaseStudies from './pages/CaseStudies';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import WebsiteMaintenance from './pages/WebsiteMaintenance';
import SoftwareDevelopment from './pages/SoftwareDevelopment';

// ================= HOME PAGE =================
const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Solution />
      <SuccessSection />
      <ProcessSection />
      <WhoWeAre />
      <WhyChooseSleekIT />
      <ContactSection />
      <ReviewSection />
      <Footer />

      {/* Expert Popup (standalone, no slider dependency) */}
      <ExpertPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
};

// ================= APP ROUTER =================
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Services */}
          <Route path="/google-search---console" element={<GoogleSearchConsole />} />
          <Route path="/ai-seo" element={<AiSeoServices />} />
          <Route path="/ai-software-development" element={<AISoftwareServices />} />
          <Route path="/full-stack-web-development" element={<FullStackWebDev />} />
          <Route path="/ai-website-design-development" element={<AIWebsiteDesign />} />
          <Route path="/seo-ai-search-optimization" element={<AIOptimizationPage />} />
          <Route path="/ai-web-application-development" element={<AIWebAppPage />} />
          <Route path="/ecommerce-development-optimization" element={<EcommercePage />} />
          <Route path="/website-maintenance-performance-security" element={<WebsiteMaintenance />} />
          <Route path="/seo-services" element={<SEOServices />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />

          {/* Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* User/Admin */}
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>


         {/* Floating */}
          <WhatsappFloat />
          
      </Router>
    </AuthProvider>
  );
}

export default App;

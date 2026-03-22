import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import siteLogo from '../assets/icons/zonzoclogo3-bg.png';

const Footer = () => {
  const navigate = useNavigate();



  const servicesLinks = [
    { label: 'AI Web Application Development', path: '/ai-web-application-development' },
    { label: 'AI Software Development', path: '/ai-software-development' },
    { label: 'Full-Stack Web Development', path: '/full-stack-web-development' },
    { label: 'AI-Powered Website Design', path: '/ai-website-design-development' },
    { label: 'AI Automation & GPT Integration', path: '/ai-software-development' },
    { label: 'SEO & AI Search Optimization', path: '/seo-ai-search-optimization' },
    { label: 'E-commerce Development', path: '/ecommerce-development-optimization' }
  ];

  const knowledgebaseLinks = [
    { label: 'Websites That Generate Leads', path: '/ai-web-application-development' },
    { label: 'AI Chatbots & Virtual Assistants', path: '/ai-software-development' },
    { label: 'Business Process Automation', path: '/ai-software-development' },
    { label: 'E-commerce Growth Optimization', path: '/ecommerce-development-optimization' },
    { label: 'Search Visibility & Traffic Growth', path: '/seo-services' },
    { label: 'Website Speed & Performance Fixes', path: '/website-maintenance-performance-security' }
  ];

  const companyLinks = [
    { label: 'Website Growth Guides', path: '/google-search---console' },
    { label: 'AI for Business', path: '/ai-seo' },
    { label: 'Technical SEO Knowledgebase', path: '/seo-services' },
    { label: 'Case Studies & Results', path: '/case-studies' },
    { label: 'AI SEO & Answer Engine Optimization', path: '/ai-seo' }
  ];

  const exploreLinks = [
    { label: 'About ZonzocTech', path: '/about' },
    { label: 'How We Work', path: '/about' },
    { label: 'Careers', path: '/contact-us' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-conditions' }
  ];

  return (
    <footer className="footer">

      <div className="footer-main">
        <div className="footer-container">

          {/* Branding */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={siteLogo} alt="ZonzocTech Logo" className="logo-text-img" />
            </div>

            <div className="footer-contact-box">
              <h4 className="contact-heading">
                Ready to speak with a marketing expert? Give us a ring
              </h4>

              <a
                href="https://wa.me/94740309534?text=Hi%20ZonzocTech%20Team,%20I%20would%20like%20to%20discuss%20a%20project."
                className="phone-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
                +94 74 030 9534
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="footer-column">
            <h4 className="footer-column-title">Core Services</h4>
            <ul className="footer-links">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Solutions by Need</h4>
            <ul className="footer-links">
              {knowledgebaseLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Insights & Resources</h4>
            <ul className="footer-links">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="line">
        <hr />
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
<<<<<<< HEAD
            Zonzoctech © 2020–2025
=======
            Zonzoctech© 2026
>>>>>>> 3ea4a8c (Updated UI sections and menus)
          </p>

          <div className="social-icons">
            <a href="https://twitter.com/yourhandle" className="social-icon">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://twitter.com/yourhandle" className="social-icon">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

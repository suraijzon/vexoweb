import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/WebsiteMaintenance.css';
import Breadcrumb from '../components/Breadcrumb';

const WebsiteMaintenance = () => {
  const whyMatters = [
    "Lose visitors and leads",
    "Damage trust and credibility",
    "Become a security risk",
    "Negatively impact SEO and rankings",
    "Cost revenue through downtime"
  ];

  const whoNeeds = [
    "Business websites and corporate sites",
    "E-commerce stores",
    "SaaS and web applications",
    "High-traffic websites",
    "Companies relying on online leads"
  ];

  const problems = [
    { icon: "🐌", text: "Slow page load times" },
    { icon: "⚠️", text: "Website downtime" },
    { icon: "🔓", text: "Security vulnerabilities & malware" },
    { icon: "📦", text: "Outdated plugins and software" },
    { icon: "🔧", text: "Broken features or forms" },
    { icon: "📉", text: "Performance drops after updates" }
  ];

  const services = [
    "Website Speed & Performance Optimization",
    "Security Monitoring & Threat Prevention",
    "Core, Plugin & System Updates",
    "Uptime Monitoring & Error Fixes",
    "Backup & Recovery Management",
    "SSL & Secure Configuration",
    "Performance Monitoring & Reporting",
    "Technical SEO Health Checks"
  ];

  const comparison = [
    { reactive: "Fix after damage", proactive: "Prevent issues early" },
    { reactive: "Unplanned downtime", proactive: "Consistent uptime" },
    { reactive: "Higher costs", proactive: "Predictable maintenance" },
    { reactive: "SEO impact", proactive: "SEO stability" }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Website Health Audit",
      description: "We assess performance, security, and stability."
    },
    {
      number: "2",
      title: "Optimization & Protection",
      description: "We implement speed improvements and security hardening."
    },
    {
      number: "3",
      title: "Monitoring & Updates",
      description: "We continuously monitor uptime, threats, and performance."
    },
    {
      number: "4",
      title: "Fixes & Improvements",
      description: "We resolve issues and apply improvements proactively."
    },
    {
      number: "5",
      title: "Reporting & Support",
      description: "You receive regular reports and support."
    }
  ];

  const tools = [
    "Performance monitoring tools",
    "Security scanning & firewalls",
    "Backup & recovery systems",
    "Uptime & error monitoring",
    "Technical SEO diagnostics"
  ];

  const whyChoose = [
    "Proactive, not reactive support",
    "Security-first approach",
    "Performance-focused optimization",
    "Transparent reporting",
    "Long-term reliability mindset"
  ];

  const faqs = [
    {
      question: "How often should website maintenance be done?",
      answer: "Maintenance should be ongoing, with regular updates and monitoring."
    },
    {
      question: "Do you support different platforms?",
      answer: "Yes. We maintain custom websites, CMS-based sites, e-commerce stores, and web apps."
    },
    {
      question: "Is security monitoring included?",
      answer: "Yes. We continuously monitor and protect against threats."
    },
    {
      question: "Do you offer emergency support?",
      answer: "Yes. Emergency fixes and rapid response are available."
    }
  ];

  return (
    <div className="wm__wrapper">
      <Navbar />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="wm__hero">
        <div className="wm__hero_pattern"></div>
        <div className="wm__hero_container">
          <div className="wm__hero_badge">
            <span className="wm__badge_icon">🛡️</span>
            Website Performance, Security & Maintenance
          </div>
          <h1 className="wm__hero_title">
            Website Performance, Security & Maintenance That Keeps Your Business Online, Fast & Protected
          </h1>
          <p className="wm__hero_text">
            We provide website performance, security, and maintenance services that ensure your website 
            stays fast, secure, and reliable at all times. From speed optimization to proactive security 
            and ongoing updates, we protect your digital presence so you can focus on growing your business.
          </p>
          <a href="#contact" className="wm__hero_btn">
             Get a Free Website Health Check
          </a>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="wm__why_section">
        <div className="wm__container">
          <h2 className="wm__heading2">Why Website Performance, Security & Maintenance Matter</h2>
          <p className="wm__intro">A slow, outdated, or vulnerable website can:</p>
          <div className="wm__why_grid">
            {whyMatters.map((item, index) => (
              <div key={index} className="wm__why_card">
                <span className="wm__why_icon">✗</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="wm__why_footer">
            Regular maintenance is not optional — it's essential.
          </div>
        </div>
      </section>

      {/* Who Needs */}
      <section className="wm__audience_section">
        <div className="wm__container">
          <h2 className="wm__heading2">Who Needs Website Maintenance & Security?</h2>
          <p className="wm__subtitle">This service is ideal for:</p>
          <div className="wm__audience_list">
            {whoNeeds.map((item, index) => (
              <div key={index} className="wm__audience_item">
                <span className="wm__audience_check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="wm__audience_footer">
            If your website is important to your business, it needs ongoing care.
          </p>
        </div>
      </section>

      {/* Problems */}
      <section className="wm__problems_section">
        <div className="wm__container">
          <h2 className="wm__heading3">Problems We Prevent & Fix</h2>
          <div className="wm__problems_grid">
            {problems.map((problem, index) => (
              <div key={index} className="wm__problem_card">
                <div className="wm__problem_icon">{problem.icon}</div>
                <p className="wm__problem_text">{problem.text}</p>
              </div>
            ))}
          </div>
          <p className="wm__problems_note">
            We prevent problems before they impact your business.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="wm__services_section">
        <div className="wm__container">
          <h2 className="wm__heading2">Our Website Performance, Security & Maintenance Services</h2>
          <p className="wm__subtitle">
            We offer comprehensive website performance, security, and maintenance solutions, including:
          </p>
          <div className="wm__services_grid">
            {services.map((service, index) => (
              <div key={index} className="wm__service_item">
                <div className="wm__service_number">{String(index + 1).padStart(2, '0')}</div>
                <span>{service}</span>
              </div>
            ))}
          </div>
          <p className="wm__services_footer">
            Your website stays fast, secure, and stable.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="wm__comparison_section">
        <div className="wm__container">
          <h2 className="wm__heading">Performance & Security vs Reactive Fixes</h2>
          <div className="wm__comparison_wrapper">
            <div className="wm__comparison_col wm__col_reactive">
              <h3>Reactive Fixes</h3>
              {comparison.map((item, index) => (
                <div key={index} className="wm__comparison_row">{item.reactive}</div>
              ))}
            </div>
            <div className="wm__comparison_arrow">→</div>
            <div className="wm__comparison_col wm__col_proactive">
              <h3>Proactive Maintenance</h3>
              {comparison.map((item, index) => (
                <div key={index} className="wm__comparison_row">{item.proactive}</div>
              ))}
            </div>
          </div>
          <p className="wm__comparison_note">
            Prevention always costs less than recovery.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="wm__process_section">
        <div className="wm__container">
          <h2 className="wm__heading2">Our Maintenance Process</h2>
          <div className="wm__process_grid">
            {processSteps.map((step, index) => (
              <div key={index} className="wm__process_card">
                <div className="wm__process_badge">{step.number}</div>
                <h3 className="wm__process_title">{step.title}</h3>
                <p className="wm__process_desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="wm__tools_section">
        <div className="wm__container">
          <h2 className="wm__heading2">Technologies & Tools We Use</h2>
          <div className="wm__tools_grid">
            {tools.map((tool, index) => (
              <div key={index} className="wm__tool_card">{tool}</div>
            ))}
          </div>
          <p className="wm__tools_note">
            (Tools depend on your platform and requirements.)
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="wm__why_choose_section">
        <div className="wm__container">
          <h2 className="wm__heading2">Why Choose ZonzocTech for Website Maintenance?</h2>
          <div className="wm__choose_list">
            {whyChoose.map((reason, index) => (
              <div key={index} className="wm__choose_item">
                <span className="wm__choose_icon">★</span>
                <span>{reason}</span>
              </div>
            ))}
          </div>
          <p className="wm__choose_footer">
            We keep your website running smoothly, securely, and efficiently.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="wm__faq_section">
        <div className="wm__container">
          <h2 className="wm__heading2">Frequently Asked Questions</h2>
          <div className="wm__faq_list">
            {faqs.map((faq, index) => (
              <div key={index} className="wm__faq_item">
                <h4 className="wm__faq_question">{faq.question}</h4>
                <p className="wm__faq_answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wm__cta_section">
        <div className="wm__container">
          <h2 className="wm__cta_title">Keep Your Website Fast, Secure & Reliable</h2>
          <p className="wm__cta_text">
            If your website is live, it needs continuous performance and security care.
          </p>
          <a href="#contact" className="wm__cta_btn">
             Get a Free Website Health Check
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteMaintenance;
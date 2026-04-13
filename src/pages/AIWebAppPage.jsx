import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AIWebAppPage.css';
import Breadcrumb from "../components/Breadcrumb";

const AIWebAppDev = () => {
  const targetAudience = [
    "A business looking to automate manual processes",
    "A startup building an AI-powered SaaS product",
    "An e-commerce brand needing intelligent dashboards or tools",
    "A company wanting custom AI features integrated into web apps",
    "An agency or enterprise needing scalable AI solutions"
  ];

  const problems = [
    {
      icon: "⏱️",
      title: "Manual workflows slowing your business down"
    },
    {
      icon: "🔗",
      title: "Disconnected systems and data silos"
    },
    {
      icon: "📉",
      title: "Poor decision-making due to lack of insights"
    },
    {
      icon: "🤖",
      title: "No AI-powered personalization or automation"
    },
    {
      icon: "💸",
      title: "Scalable web apps that are expensive or unstable"
    }
  ];

  const solutions = [
    "Custom AI Web Apps & Dashboards",
    "AI SaaS Platform Development",
    "GPT & LLM-Powered Applications",
    "AI-Based Recommendation Systems",
    "Predictive Analytics & Reporting Tools",
    "AI Chatbots & Intelligent Assistants",
    "Internal Business Automation Tools",
    "API & Third-Party AI Integrations"
  ];

  const differentiators = [
    "Built for real business use — not demos",
    "Scalable architecture ready for growth",
    "Clean UI with strong UX principles",
    "Secure data handling and access control",
    "Optimized for performance and reliability",
    "AI features aligned with ROI, not hype"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Strategy",
      description: "We understand your business goals, users, and workflows to define the right AI use cases."
    },
    {
      step: "2",
      title: "Solution Architecture",
      description: "We design the application structure, AI models, data flow, and integrations."
    },
    {
      step: "3",
      title: "Design & Development",
      description: "We build the frontend, backend, and AI components using modern full-stack technologies."
    },
    {
      step: "4",
      title: "Testing & Optimization",
      description: "We test for performance, security, scalability, and real-world usage."
    },
    {
      step: "5",
      title: "Launch & Support",
      description: "We deploy the application and provide ongoing support, optimization, and enhancements."
    }
  ];

  const technologies = [
    "Modern frontend frameworks (React, Next.js, etc.)",
    "Scalable backend architectures",
    "AI & GPT integrations",
    "Secure APIs & cloud services",
    "Database & analytics systems"
  ];

  const whyChoose = [
    "AI-first development approach",
    "Strong full-stack engineering expertise",
    "Focus on automation, efficiency, and growth",
    "Transparent communication & delivery",
    "Long-term partnership mindset"
  ];

  const faqs = [
    {
      question: "What is AI web application development?",
      answer: "AI web application development involves building web-based applications that use artificial intelligence to automate processes, analyze data, and enhance user experiences."
    },
    {
      question: "What types of AI web applications do you build?",
      answer: "We build custom AI dashboards, SaaS platforms, automation tools, AI-powered internal systems, and customer-facing web apps."
    },
    {
      question: "Can you integrate AI into an existing web application?",
      answer: "Yes. We can enhance existing apps with AI features such as automation, analytics, chatbots, and recommendations."
    },
    {
      question: "Are your AI web apps scalable?",
      answer: "Absolutely. All our applications are built with scalability, security, and performance in mind."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes. We offer maintenance, performance optimization, and feature enhancements after launch."
    }
  ];

  return (
    <div className="aiwa__wrapper">
      <Navbar />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="aiwa__hero">
        <div className="aiwa__hero_bg">
          <div className="aiwa__hero_shape aiwa__shape_1"></div>
          <div className="aiwa__hero_shape aiwa__shape_2"></div>
          <div className="aiwa__hero_shape aiwa__shape_3"></div>
        </div>
        <div className="aiwa__hero_container">
          <div className="aiwa__hero_content">
            <span className="aiwa__hero_badge">AI Web Application Development</span>
            <h1 className="aiwa__hero_title">
              Build Intelligent Web Applications That Automate, Scale, and Drive Growth
            </h1>
            <p className="aiwa__hero_description">
              We design and develop custom AI-powered web applications that help businesses automate 
              operations, make smarter decisions, and create better user experiences. From AI dashboards 
              to SaaS platforms and internal tools, we turn ideas into secure, scalable, production-ready 
              applications.
            </p>
            <a href="#contact" className="aiwa__hero_btn">
               Get a Free AI Web App Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="aiwa__audience_section">
        <div className="aiwa__container">
          <h2 className="aiwa__heading">Who This Service Is For</h2>
          <p className="aiwa__intro_text">This service is ideal if you are:</p>
          <div className="aiwa__audience_cards">
            {targetAudience.map((item, index) => (
              <div key={index} className="aiwa__audience_card">
                <div className="aiwa__audience_number">{index + 1}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="aiwa__audience_footer">
            If off-the-shelf tools don't fit your needs, custom AI web apps are the answer.
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="aiwa__problems_section">
        <div className="aiwa__container">
          <h2 className="aiwa__heading2">Problems We Solve with AI Web Applications</h2>
          <div className="aiwa__problems_grid">
            {problems.map((problem, index) => (
              <div key={index} className="aiwa__problem_box">
                <div className="aiwa__problem_icon">{problem.icon}</div>
                <h3 className="aiwa__problem_title">{problem.title}</h3>
              </div>
            ))}
          </div>
          <p className="aiwa__problems_tagline">
            We build applications that replace inefficiency with automation and intelligence.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="aiwa__solutions_section">
        <div className="aiwa__container">
          <h2 className="aiwa__heading3">Custom AI Web Application Development Solutions</h2>
          <p className="aiwa__subtitle">
            We develop AI-powered web applications tailored to your business goals, including:
          </p>
          <div className="aiwa__solutions_wrapper">
            {solutions.map((solution, index) => (
              <div key={index} className="aiwa__solution_tag">
                {solution}
              </div>
            ))}
          </div>
          <p className="aiwa__solutions_note">
            Every application is designed to be secure, scalable, and user-friendly.
          </p>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="aiwa__diff_section">
        <div className="aiwa__container">
          <h2 className="aiwa__heading">What Makes Our AI Web Applications Different</h2>
          <div className="aiwa__diff_grid">
            {differentiators.map((item, index) => (
              <div key={index} className="aiwa__diff_card">
                <div className="aiwa__diff_check">✔</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="aiwa__diff_statement">
            We don't add AI for buzzwords — we add AI where it creates measurable value.
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="aiwa__process_section">
        <div className="aiwa__container">
          <h2 className="aiwa__heading3">Our Development Process</h2>
          <div className="aiwa__process_container">
            {processSteps.map((item, index) => (
              <div key={index} className="aiwa__process_card">
                <div className="aiwa__process_header">
                  <span className="aiwa__process_step">{item.step}</span>
                  <h3 className="aiwa__process_title">{item.title}</h3>
                </div>
                <p className="aiwa__process_desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="aiwa__tech_section">
        <div className="aiwa__container">
          <h2 className="aiwa__heading3">Technologies We Use (Flexible & Scalable)</h2>
          <div className="aiwa__tech_list">
            {technologies.map((tech, index) => (
              <div key={index} className="aiwa__tech_item">
                <div className="aiwa__tech_bullet"></div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
          <p className="aiwa__tech_note">
            (We choose the tech stack based on your project — not trends.)
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="aiwa__why_section">
        <div className="aiwa__container">
          <h2 className="aiwa__heading3">Why Choose ZonzocTech for AI Web App Development</h2>
          <div className="aiwa__why_boxes">
            {whyChoose.map((reason, index) => (
              <div key={index} className="aiwa__why_box">
                <div className="aiwa__why_icon">★</div>
                <p>{reason}</p>
              </div>
            ))}
          </div>
          <div className="aiwa__why_footer">
            We don't just build apps — we build intelligent systems that grow with your business.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="aiwa__faq_section">
        <div className="aiwa__container">
          <h2 className="aiwa__heading3">Frequently Asked Questions</h2>
          <div className="aiwa__faq_accordion">
            {faqs.map((faq, index) => (
              <div key={index} className="aiwa__faq_item">
                <h4 className="aiwa__faq_question">{faq.question}</h4>
                <p className="aiwa__faq_answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="aiwa__cta_section">
        <div className="aiwa__container">
          <div className="aiwa__cta_content">
            <h2 className="aiwa__cta_title">Ready to Build Your AI Web Application?</h2>
            <p className="aiwa__cta_text">
              If you're planning to build an AI-powered web application or want to explore how AI 
              can improve your current system, let's talk.
            </p>
            <a href="#contact" className="aiwa__cta_button">
               Get a Free AI Web Application Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWebAppDev;
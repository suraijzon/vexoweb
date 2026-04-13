import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AIWebsiteDesign.css';
import Breadcrumb from "../components/Breadcrumb";

const AIWebsiteDesign = () => {
  const targetAudience = [
    "Businesses with outdated or underperforming websites",
    "E-commerce brands seeking higher conversions",
    "Service providers needing better lead generation",
    "Startups launching a growth-focused website",
    "Companies wanting AI features without building full web apps"
  ];

  const problems = [
    { icon: "📉", text: "Low conversion rates" },
    { icon: "⚡", text: "High bounce rates" },
    { icon: "😞", text: "Poor user experience" },
    { icon: "🐌", text: "Slow page speeds" },
    { icon: "🤖", text: "No personalization or automation" },
    { icon: "📋", text: "Weak lead capture" }
  ];

  const services = [
    "Custom AI-Powered Website Design",
    "Conversion-Focused UX/UI Design",
    "AI Chatbots & Smart Forms",
    "Personalized Content & User Journeys",
    "AI-Based Lead Capture & Routing",
    "SEO & AI Search Optimization",
    "Website Speed & Performance Optimization",
    "Ongoing Website Maintenance & Support"
  ];

  const comparisonData = [
    { traditional: "Static content", ai: "Personalized experiences" },
    { traditional: "Manual updates", ai: "Automated optimization" },
    { traditional: "Basic forms", ai: "Intelligent lead capture" },
    { traditional: "One-size-fits-all", ai: "Adaptive user journeys" }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Strategy & Discovery",
      description: "We understand your business goals, audience, and conversion objectives."
    },
    {
      step: "2",
      title: "Design & UX Planning",
      description: "We design intuitive layouts focused on engagement and clarity."
    },
    {
      step: "3",
      title: "AI & Development",
      description: "We implement AI features, automation, and performance optimizations."
    },
    {
      step: "4",
      title: "Testing & Optimization",
      description: "We test speed, UX, SEO, and real-world behavior."
    },
    {
      step: "5",
      title: "Launch & Growth Support",
      description: "We launch, monitor, and continuously improve your website."
    }
  ];

  const technologies = [
    "Modern frontend frameworks & CMS platforms",
    "AI chat & automation tools",
    "SEO & analytics integrations",
    "Performance optimization tools",
    "Secure hosting & deployment systems"
  ];

  const whyChoose = [
    "AI-first website strategy",
    "Conversion-focused design approach",
    "Strong SEO & performance expertise",
    "Clean, modern UI/UX",
    "Ongoing optimization mindset"
  ];

  const faqs = [
    {
      question: "What makes an AI website different?",
      answer: "AI websites adapt to user behavior, automate interactions, and optimize conversions in real time."
    },
    {
      question: "Can you add AI features to my existing website?",
      answer: "Yes. We can enhance your current website with AI chatbots, personalization, and automation."
    },
    {
      question: "Are AI websites SEO-friendly?",
      answer: "Absolutely. Our AI websites are built with SEO and AI search optimization in mind."
    },
    {
      question: "Do you offer maintenance?",
      answer: "Yes. We provide ongoing optimization, updates, and support."
    }
  ];

  return (
    <div className="aiwd__wrapper">
      <Navbar />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="aiwd__hero">
        <div className="aiwd__hero_container">
          <div className="aiwd__hero_content">
            <div className="aiwd__hero_tag">AI Website Design & Development</div>
            <h1 className="aiwd__hero_heading">
              AI-Powered Website Design & Development That Converts Visitors into Customers
            </h1>
            <p className="aiwd__hero_description">
              We provide AI website design and development services that combine modern design, 
              intelligent automation, and performance optimization to help businesses generate more 
              leads, improve engagement, and grow faster. Our websites are not just visually 
              appealing — they are built to work intelligently and convert consistently.
            </p>
            <a href="#contact" className="aiwd__hero_btn">
              Get a Free AI Website Growth Audit
            </a>
          </div>
          <div className="aiwd__hero_visual">
            <div className="aiwd__hero_card">🎨</div>
            <div className="aiwd__hero_card">🤖</div>
            <div className="aiwd__hero_card">📈</div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="aiwd__what_section">
        <div className="aiwd__container">
          <h2 className="aiwd__title">What Is AI Website Design & Development?</h2>
          <p className="aiwd__text">
            AI website design and development involves creating websites that use artificial 
            intelligence to personalize user experiences, automate interactions, and optimize 
            performance. Unlike traditional websites, AI-powered sites adapt to visitor behavior 
            and continuously improve results.
          </p>
          <div className="aiwd__tagline">This is where design meets intelligence.</div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="aiwd__audience_section">
        <div className="aiwd__container">
          <h2 className="aiwd__title2">Who Is This Service For?</h2>
          <p className="aiwd__subtitle">This service is ideal for:</p>
          <div className="aiwd__audience_grid">
            {targetAudience.map((item, index) => (
              <div key={index} className="aiwd__audience_card">
                <div className="aiwd__audience_icon">✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="aiwd__closing_text">
            If your website isn't generating results, AI-powered design can change that.
          </p>
        </div>
      </section>

      {/* Problems Section */}
      <section className="aiwd__problems_section">
        <div className="aiwd__container">
          <h2 className="aiwd__title">Problems We Solve with AI-Powered Websites</h2>
          <div className="aiwd__problems_grid">
            {problems.map((problem, index) => (
              <div key={index} className="aiwd__problem_item">
                <span className="aiwd__problem_icon">{problem.icon}</span>
                <span className="aiwd__problem_text">{problem.text}</span>
              </div>
            ))}
          </div>
          <p className="aiwd__problems_footer">
            We design websites that guide users, capture leads, and optimize themselves.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="aiwd__services_section">
        <div className="aiwd__container">
          <h2 className="aiwd__title2">Our AI Website Design & Development Services</h2>
          <p className="aiwd__subtitle">
            We offer end-to-end AI website design and development solutions, including:
          </p>
          <div className="aiwd__services_list">
            {services.map((service, index) => (
              <div key={index} className="aiwd__service_item">
                <div className="aiwd__service_bullet"></div>
                <span>{service}</span>
              </div>
            ))}
          </div>
          <p className="aiwd__services_note">
            Every website is built with growth, scalability, and ease of use in mind.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="aiwd__comparison_section">
        <div className="aiwd__container">
          <h2 className="aiwd__title2">AI Websites vs Traditional Websites</h2>
          <div className="aiwd__comparison_grid">
            <div className="aiwd__comparison_column aiwd__comparison_traditional">
              <h3>Traditional Websites</h3>
              {comparisonData.map((item, index) => (
                <div key={index} className="aiwd__comparison_item">
                  {item.traditional}
                </div>
              ))}
            </div>
            <div className="aiwd__comparison_divider">VS</div>
            <div className="aiwd__comparison_column aiwd__comparison_ai">
              <h3>AI-Powered Websites</h3>
              {comparisonData.map((item, index) => (
                <div key={index} className="aiwd__comparison_item">
                  {item.ai}
                </div>
              ))}
            </div>
          </div>
          <p className="aiwd__comparison_footer">
            This is why modern businesses are moving toward AI website development.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="aiwd__process_section">
        <div className="aiwd__container">
          <h2 className="aiwd__title2">Our AI Website Development Process</h2>
          <div className="aiwd__process_grid">
            {processSteps.map((item, index) => (
              <div key={index} className="aiwd__process_card">
                <div className="aiwd__process_number">{item.step}</div>
                <h3 className="aiwd__process_title">{item.title}</h3>
                <p className="aiwd__process_desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="aiwd__tech_section">
        <div className="aiwd__container">
          <h2 className="aiwd__title2">Technologies & Tools We Use</h2>
          <div className="aiwd__tech_list">
            {technologies.map((tech, index) => (
              <div key={index} className="aiwd__tech_item">
                <span className="aiwd__tech_dot"></span>
                {tech}
              </div>
            ))}
          </div>
          <p className="aiwd__tech_note">
            (Tools are selected based on business needs, not hype.)
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="aiwd__why_section">
        <div className="aiwd__container">
          <h2 className="aiwd__title">
            Why Choose ZonzocTech for AI Website Design & Development?
          </h2>
          <div className="aiwd__why_grid">
            {whyChoose.map((reason, index) => (
              <div key={index} className="aiwd__why_item">
                <div className="aiwd__why_check">✓</div>
                <span>{reason}</span>
              </div>
            ))}
          </div>
          <div className="aiwd__why_statement">
            We don't just design websites — we design growth engines.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="aiwd__faq_section">
        <div className="aiwd__container">
          <h2 className="aiwd__title">Frequently Asked Questions</h2>
          <div className="aiwd__faq_container">
            {faqs.map((faq, index) => (
              <div key={index} className="aiwd__faq_item">
                <h3 className="aiwd__faq_question">{faq.question}</h3>
                <p className="aiwd__faq_answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="aiwd__final_cta">
        <div className="aiwd__container">
          <h2 className="aiwd__cta_heading">Ready to Build a Website That Works Smarter?</h2>
          <p className="aiwd__cta_text">
            If you want a website that looks great and actively helps your business grow, let's talk.
          </p>
          <a href="#contact" className="aiwd__cta_button">
             Get a Free AI Website Growth Audit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWebsiteDesign;
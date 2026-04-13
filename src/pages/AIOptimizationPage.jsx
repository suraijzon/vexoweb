import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AIOptimizationPage.css';
import Breadcrumb from "../components/Breadcrumb";

const AISearchOptimization = () => {
  const focusAreas = [
    "Structured understanding",
    "Clear topical authority",
    "Entity recognition",
    "Answer-ready content"
  ];

  const targetAudience = [
    "Businesses experiencing declining organic visibility",
    "Brands affected by AI Overviews or zero-click searches",
    "Companies relying on organic leads",
    "Websites publishing expert or service-based content",
    "Businesses wanting future-proof search visibility"
  ];

  const problems = [
    "Reduced clicks due to AI answers",
    "Content not appearing in AI summaries",
    "Poor topical authority signals",
    "Weak entity recognition",
    "Traditional SEO strategies losing effectiveness"
  ];

  const services = [
    {
      title: "Generative Engine Optimization (GEO)",
      icon: "🔮"
    },
    {
      title: "Entity-Based SEO & Knowledge Graph Optimization",
      icon: "🧠"
    },
    {
      title: "AI-Friendly Content Structuring",
      icon: "📊"
    },
    {
      title: "Topical Authority Development",
      icon: "🎯"
    },
    {
      title: "Schema & Structured Data Optimization",
      icon: "🏗️"
    },
    {
      title: "Search Intent & Answer Mapping",
      icon: "🗺️"
    },
    {
      title: "Technical SEO for AI Crawling",
      icon: "⚙️"
    },
    {
      title: "Voice & Conversational Search Optimization",
      icon: "🎤"
    }
  ];

  const comparisonData = [
    { traditional: "Keyword-focused", ai: "Entity & intent-focused" },
    { traditional: "Ranking pages", ai: "Being cited in AI answers" },
    { traditional: "Click-based", ai: "Visibility-based" },
    { traditional: "Manual optimization", ai: "Structured intelligence" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "AI Search Audit",
      description: "We analyze how your site appears in AI-generated answers and search features.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Content & Entity Mapping",
      description: "We align your content with clear entities, topics, and search intent.",
      icon: "🗺️"
    },
    {
      number: "03",
      title: "Technical & Schema Optimization",
      description: "We implement structured data and technical fixes for AI readability.",
      icon: "🔧"
    },
    {
      number: "04",
      title: "Content Optimization for Answers",
      description: "We optimize content for concise, authoritative responses.",
      icon: "✍️"
    },
    {
      number: "05",
      title: "Monitoring & Continuous Improvement",
      description: "We track AI visibility and adapt strategies as search evolves.",
      icon: "📈"
    }
  ];

  const tools = [
    "Structured data & schema",
    "Search intent modeling",
    "Content clustering & entity mapping",
    "Technical SEO audits",
    "AI visibility monitoring"
  ];

  const whyChoose = [
    "Early-mover expertise in AI-driven search",
    "Strong foundation in technical SEO",
    "Business-focused visibility strategy",
    "Clear reporting & measurable impact",
    "Future-proof optimization approach"
  ];

  const faqs = [
    {
      question: "Is AI search optimization the same as SEO?",
      answer: "No. AI search optimization extends SEO by optimizing for how AI systems understand, summarize, and recommend content."
    },
    {
      question: "Will AI search replace traditional SEO?",
      answer: "Not completely — but it is changing how visibility works. Both should work together."
    },
    {
      question: "Can existing websites be optimized for AI search?",
      answer: "Yes. We optimize existing sites with content, structure, and technical improvements."
    },
    {
      question: "How do you measure success?",
      answer: "We track AI visibility, brand mentions, featured answers, and organic performance."
    }
  ];

  return (
    <div className="aiso__wrapper">
      <Navbar />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="aiso__hero">
        <div className="aiso__hero_background">
          <div className="aiso__hero_circle aiso__circle_1"></div>
          <div className="aiso__hero_circle aiso__circle_2"></div>
          <div className="aiso__hero_circle aiso__circle_3"></div>
        </div>
        <div className="aiso__hero_container">
          <span className="aiso__hero_label">AI Search Optimization</span>
          <h1 className="aiso__hero_title">
            AI Search Optimization That Helps Your Brand Appear in Google, AI Answers & Voice Search
          </h1>
          <p className="aiso__hero_text">
            We provide AI search optimization services that help businesses stay visible in a world 
            where search is no longer limited to blue links. Our strategies optimize your website for 
            Google Search, AI Overviews, generative engines, voice search, and answer-based platforms.
          </p>
          <a href="#contact" className="aiso__hero_cta">
            Get a Free AI Search Visibility Audit
          </a>
        </div>
      </section>

      {/* What Is Section */}
      <section className="aiso__what_section">
        <div className="aiso__container">
          <h2 className="aiso__heading">What Is AI Search Optimization?</h2>
          <p className="aiso__description">
            AI search optimization is the process of optimizing websites so they are understood, 
            trusted, and surfaced by AI-powered search systems. This includes Google's AI-driven 
            results, answer engines, and conversational search platforms.
          </p>
          <div className="aiso__focus_wrapper">
            <p className="aiso__focus_intro">Unlike traditional SEO, AI search optimization focuses on:</p>
            <div className="aiso__focus_grid">
              {focusAreas.map((area, index) => (
                <div key={index} className="aiso__focus_item">
                  <div className="aiso__focus_dot"></div>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Section */}
      <section className="aiso__audience_section">
        <div className="aiso__container">
          <h2 className="aiso__heading2">Who Needs AI Search Optimization?</h2>
          <p className="aiso__subtitle">This service is ideal for:</p>
          <div className="aiso__audience_list">
            {targetAudience.map((item, index) => (
              <div key={index} className="aiso__audience_item">
                <span className="aiso__audience_check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="aiso__audience_callout">
            If search traffic is changing for your business, AI search optimization is no longer optional.
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="aiso__problems_section">
        <div className="aiso__container">
          <h2 className="aiso__heading2">Problems We Solve with AI Search Optimization</h2>
          <div className="aiso__problems_wrapper">
            {problems.map((problem, index) => (
              <div key={index} className="aiso__problem_card">
                <div className="aiso__problem_icon">⚠️</div>
                <p>{problem}</p>
              </div>
            ))}
          </div>
          <p className="aiso__problems_solution">
            We align your content and site structure with how AI understands information.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="aiso__services_section">
        <div className="aiso__container">
          <h2 className="aiso__heading3">Our AI Search Optimization Services</h2>
          <p className="aiso__subtitle2">
            We deliver end-to-end AI search optimization solutions, including:
          </p>
          <div className="aiso__services_grid">
            {services.map((service, index) => (
              <div key={index} className="aiso__service_box">
                <div className="aiso__service_icon">{service.icon}</div>
                <h3 className="aiso__service_title">{service.title}</h3>
              </div>
            ))}
          </div>
          <p className="aiso__services_footer">
            This ensures your brand is discoverable beyond traditional search results.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="aiso__comparison_section">
        <div className="aiso__container">
          <h2 className="aiso__heading">AI Search Optimization vs Traditional SEO</h2>
          <div className="aiso__comparison_table">
            <div className="aiso__comparison_header">
              <div className="aiso__comparison_col">Traditional SEO</div>
              <div className="aiso__comparison_col">AI Search Optimization</div>
            </div>
            {comparisonData.map((row, index) => (
              <div key={index} className="aiso__comparison_row">
                <div className="aiso__comparison_cell">{row.traditional}</div>
                <div className="aiso__comparison_cell aiso__comparison_highlight">{row.ai}</div>
              </div>
            ))}
          </div>
          <p className="aiso__comparison_note">
            Both are important — but AI search optimization prepares you for what's next.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="aiso__process_section">
        <div className="aiso__container">
          <h2 className="aiso__heading2">Our AI Search Optimization Process</h2>
          <div className="aiso__process_flow">
            {processSteps.map((step, index) => (
              <div key={index} className="aiso__process_item">
                <div className="aiso__process_icon_wrapper">
                  <span className="aiso__process_icon">{step.icon}</span>
                  <span className="aiso__process_number">{step.number}</span>
                </div>
                <div className="aiso__process_content">
                  <h3 className="aiso__process_title">{step.title}</h3>
                  <p className="aiso__process_desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="aiso__tools_section">
        <div className="aiso__container">
          <h2 className="aiso__heading">Tools & Techniques We Use</h2>
          <div className="aiso__tools_grid">
            {tools.map((tool, index) => (
              <div key={index} className="aiso__tool_card">{tool}</div>
            ))}
          </div>
          <p className="aiso__tools_note">
            (Tools are chosen based on strategy — not automation alone.)
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="aiso__why_section">
        <div className="aiso__container">
          <h2 className="aiso__heading2">Why Choose ZonzocTech for AI Search Optimization?</h2>
          <div className="aiso__why_container">
            {whyChoose.map((reason, index) => (
              <div key={index} className="aiso__why_card">
                <div className="aiso__why_marker"></div>
                <p>{reason}</p>
              </div>
            ))}
          </div>
          <div className="aiso__why_statement">
            We help your brand remain visible even as search changes.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="aiso__faq_section">
        <div className="aiso__container">
          <h2 className="aiso__heading">Frequently Asked Questions</h2>
          <div className="aiso__faq_list">
            {faqs.map((faq, index) => (
              <div key={index} className="aiso__faq_box">
                <h4 className="aiso__faq_q">{faq.question}</h4>
                <p className="aiso__faq_a">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="aiso__cta_section">
        <div className="aiso__container">
          <div className="aiso__cta_box">
            <h2 className="aiso__cta_title">Ready to Optimize for the Future of Search?</h2>
            <p className="aiso__cta_desc">
              If your business depends on search visibility, now is the time to prepare for 
              AI-driven discovery.
            </p>
            <a href="#contact" className="aiso__cta_btn">
              Get a Free AI Search Visibility Audit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISearchOptimization;
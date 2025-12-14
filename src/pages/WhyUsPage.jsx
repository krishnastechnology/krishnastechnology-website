import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaUsers, FaTimes, FaEnvelope, FaRocket, FaLock, FaWrench, FaGlobe, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../App.css';

function WhyUsPage() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <FaStar />,
      title: "5+ Years Experienced Developers",
      description: "All our developers have proven expertise in their respective technologies, with a minimum of 5 years of professional experience."
    },
    {
      icon: <FaUsers />,
      title: "Flexible Monthly Contracts",
      description: "Scale your team up or down based on project requirements without long-term commitments or complicated agreements."
    },
    {
      icon: <FaTimes />,
      title: "No Long-Term Lock-In",
      description: "Freedom to adjust your engagement without penalties or complicated exit processes. Month-to-month flexibility."
    },
    {
      icon: <FaEnvelope />,
      title: "Direct Communication",
      description: "Work directly with your developers through your preferred communication channels without intermediaries or communication barriers."
    },
    {
      icon: <FaRocket />,
      title: "Fast Onboarding",
      description: "Get productive developers within days, not weeks, with minimal recruitment overhead and immediate project integration."
    },
    {
      icon: <FaLock />,
      title: "Confidentiality Assured",
      description: "We maintain strict confidentiality for all client projects and intellectual property with comprehensive NDAs."
    },
    {
      icon: <FaWrench />,
      title: "Technical Excellence",
      description: "Our developers follow industry best practices, clean code principles, and maintain high-quality standards."
    },
    {
      icon: <FaGlobe />,
      title: "Time Zone Friendly",
      description: "Our developers can align with your working hours for seamless collaboration and real-time communication when needed."
    }
  ];

  // Auto-rotate benefits
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <>
      {/* Header */}
      <header>
        <div className="container navbar">
          <Link to="/" className="logo">Krishna's Technology</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/work">How We Work</Link></li>
            <li><Link to="/why">Why Us</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </header>

      {/* Why Choose Us Section - Full Page Version */}
      <section className="why-choose-us-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Why Choose Us</h1>
            <p className="section-description">
              Differentiators that make us the preferred partner for technology teams.
            </p>
          </div>
          
          <div className="reasons-grid">
            {benefits.map((benefit, index) => (
              <div 
                className={`reason-card ${activeBenefit === index ? 'active' : ''}`}
                key={index}
                onClick={() => setActiveBenefit(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="reason-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Benefit */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Benefit</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <div className="reason-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="reason-icon">{benefits[activeBenefit].icon}</div>
                <h3>{benefits[activeBenefit].title}</h3>
                <p>{benefits[activeBenefit].description}</p>
              </div>
              
              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <button 
                  className="btn btn-outline" 
                  onClick={() => setActiveBenefit((activeBenefit - 1 + benefits.length) % benefits.length)}
                  style={{ marginRight: '10px' }}
                >
                  Previous
                </button>
                <button 
                  className="btn" 
                  onClick={() => setActiveBenefit((activeBenefit + 1) % benefits.length)}
                >
                  Next
                </button>
              </div>
            </div>
            
            <div className="about-image">
              {benefits[activeBenefit].title}
            </div>
          </div>
        </div>
      </section>

      {/* Client Value */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>The Value We Deliver</h2>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3>90%</h3>
              <p>Reduction in recruitment time</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years average developer experience</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client retention rate</p>
            </div>
            <div className="stat-item">
              <h3>24h</h3>
              <p>Average response time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <Link to="/" className="footer-logo">Krishna's Technology</Link>
              <p>
                Providing senior software developers on contract for startups and companies.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com/company/krishnastechnology" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/krishnastechnology" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="https://instagram.com/krishnastechnology" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/krishnastechnology" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-links">
                <li><Link to="/services#ror">Ruby on Rails Development</Link></li>
                <li><Link to="/services#mern">MERN Stack Development</Link></li>
                <li><Link to="/services#fullstack">Full-Stack Engineering</Link></li>
                <li><Link to="/services#devops">DevOps & Cloud Support</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3 className="footer-heading">Contact</h3>
              <ul className="footer-links">
                <li>contact@krishnastechnology.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Krishna's Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default WhyUsPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaUserFriends, FaBolt, FaCalendarAlt, FaChartLine, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../App.css';

function HowWeWorkPage() {
  const [activeStep, setActiveStep] = useState(1);
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

  const steps = [
    {
      id: 1,
      title: "Understand Requirement",
      description: "We discuss your project needs, timeline, and technical requirements in detail to ensure we find the perfect match for your team.",
      icon: <FaComments />
    },
    {
      id: 2,
      title: "Share Senior Developer Profiles",
      description: "We provide profiles of pre-vetted developers who match your specific requirements, including technical skills, experience, and availability.",
      icon: <FaUserFriends />
    },
    {
      id: 3,
      title: "Interview & Selection",
      description: "You interview candidates directly to ensure technical and cultural fit. We coordinate schedules and provide all necessary information.",
      icon: <FaComments />
    },
    {
      id: 4,
      title: "Quick Onboarding",
      description: "Selected developers start within days, equipped with project context, access credentials, and integrated into your communication tools.",
      icon: <FaBolt />
    },
    {
      id: 5,
      title: "Monthly Delivery & Support",
      description: "Ongoing development with regular updates, milestone tracking, and long-term support for your evolving project needs.",
      icon: <FaChartLine />
    }
  ];

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

      {/* How We Work Section - Full Page Version */}
      <section className="how-we-work-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">How We Work</h1>
            <p className="section-description">
              Our streamlined process ensures you get the right developers quickly and efficiently.
            </p>
          </div>
          
          <div className="steps-container">
            {steps.map((step) => (
              <div 
                className={`step ${activeStep === step.id ? 'active' : ''}`} 
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="step-number">{step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Step View */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Detailed Process</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div className="step-number" style={{ 
                  width: '60px', 
                  height: '60px', 
                  fontSize: '1.5rem',
                  margin: '0 auto 20px'
                }}>
                  {steps.find(step => step.id === activeStep)?.icon}
                </div>
              </div>
              <h3>{steps.find(step => step.id === activeStep)?.title}</h3>
              <p>{steps.find(step => step.id === activeStep)?.description}</p>
              
              <div style={{ marginTop: '20px' }}>
                <p>
                  {activeStep > 1 && (
                    <button 
                      className="btn btn-outline" 
                      onClick={() => setActiveStep(activeStep - 1)}
                      style={{ marginRight: '10px' }}
                    >
                      Previous Step
                    </button>
                  )}
                  {activeStep < steps.length && (
                    <button 
                      className="btn" 
                      onClick={() => setActiveStep(activeStep + 1)}
                    >
                      Next Step
                    </button>
                  )}
                </p>
              </div>
            </div>
            
            <div className="about-image">
              {steps.find(step => step.id === activeStep)?.title}
            </div>
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="why-choose-us-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Our Process Works</h2>
          </div>
          
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <FaBolt />
              </div>
              <h3>Speed</h3>
              <p>We eliminate lengthy recruitment processes and get productive developers to you in days, not weeks.</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <FaUserFriends />
              </div>
              <h3>Vetting</h3>
              <p>Our rigorous technical assessment ensures only qualified, experienced developers join your team.</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <FaChartLine />
              </div>
              <h3>Flexibility</h3>
              <p>Adjust your team size monthly based on project demands without long-term commitments or penalties.</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <FaComments />
              </div>
              <h3>Direct Access</h3>
              <p>Work directly with your developers through your preferred communication channels without intermediaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ready to Augment Your Team?</h2>
            <p className="section-description">
              Connect with our team to discuss your developer requirements.
            </p>
            <Link to="/contact" className="btn">Get Started Today</Link>
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

export default HowWeWorkPage;
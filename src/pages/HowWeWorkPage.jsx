import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaUserFriends, FaBolt, FaChartLine, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaArrowRight, FaBars } from 'react-icons/fa';
import '../App.css';
import logo from '../assets/logo.svg';
import MobileMenu from '../components/MobileMenu';

function HowWeWorkPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const steps = [
    {
      id: 1,
      title: "Understand Requirement",
      description: "We discuss your project needs, timeline, and technical requirements in detail to ensure we find the perfect match for your team.",
      icon: <FaComments />,
      color: "#3B82F6",
      visual: "📝"
    },
    {
      id: 2,
      title: "Share Senior Developer Profiles",
      description: "We provide profiles of pre-vetted developers who match your specific requirements, including technical skills, experience, and availability.",
      icon: <FaUserFriends />,
      color: "#10B981",
      visual: "👤"
    },
    {
      id: 3,
      title: "Interview & Selection",
      description: "You interview candidates directly to ensure technical and cultural fit. We coordinate schedules and provide all necessary information.",
      icon: <FaComments />,
      color: "#8B5CF6",
      visual: "✅"
    },
    {
      id: 4,
      title: "Quick Onboarding",
      description: "Selected developers start within days, equipped with project context, access credentials, and integrated into your communication tools.",
      icon: <FaBolt />,
      color: "#F59E0B",
      visual: "⚡"
    },
    {
      id: 5,
      title: "Monthly Delivery & Support",
      description: "Ongoing development with regular updates, milestone tracking, and long-term support for your evolving project needs.",
      icon: <FaChartLine />,
      color: "#EF4444",
      visual: "📈"
    }
  ];

  // Auto-rotate steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <>
      {/* Header with Logo */}
      <header>
        <div className="container navbar">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '10px'
          }}>
            <img src={logo} alt="Krishna Technology Logo" style={{ width: '40px', height: '40px' }} />
            <Link to="/" className="logo">Krishna Technology</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/work" className="active">How We Work</Link></li>
            <li><Link to="/why">Why Us</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <FaBars />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Hero Section with Logo */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Krishna Technology Logo */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <img src={logo} alt="Krishna Technology Logo" style={{ width: '80px', height: '80px' }} />
            </div>
            <h1>Our Process</h1>
            <p className="hero-subtitle">
              Simple, transparent, and effective approach to building your dream team
            </p>
          </div>
        </div>
      </section>

      {/* Visual Process Flow with Transparency Effects */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Deliver Excellence</h2>
            <p className="section-description">
              A seamless journey from requirement gathering to ongoing support
            </p>
          </div>
          
          {/* Main Visual Display with Glassmorphism Effect */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '50px'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '850px',
              height: '500px',
              backgroundColor: 'rgba(17, 24, 39, 0.7)', // Semi-transparent dark background
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)' // Glass effect
            }}>
              {/* Decorative Elements */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                left: '-50px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                zIndex: 0
              }}></div>
              
              <div style={{
                position: 'absolute',
                bottom: '-80px',
                right: '-60px',
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                zIndex: 0
              }}></div>
              
              {/* Large Visual Representation */}
              <div style={{
                fontSize: '10rem',
                marginBottom: '20px',
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
                position: 'relative',
                zIndex: 1,
                animation: 'pulse 2s infinite'
              }}>
                {steps.find(step => step.id === activeStep)?.visual}
              </div>
              
              {/* Step Icon */}
              <div className="step-number" style={{ 
                width: '120px', 
                height: '120px', 
                fontSize: '3.5rem',
                margin: '0 auto 25px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: steps.find(step => step.id === activeStep)?.color,
                borderRadius: '20px',
                border: `1px solid ${steps.find(step => step.id === activeStep)?.color}`,
                position: 'relative',
                zIndex: 1
              }}>
                {steps.find(step => step.id === activeStep)?.icon}
              </div>
              
              <h2 style={{ 
                color: steps.find(step => step.id === activeStep)?.color,
                textAlign: 'center',
                marginBottom: '20px',
                fontSize: '2.2rem',
                position: 'relative',
                zIndex: 1
              }}>
                {steps.find(step => step.id === activeStep)?.title}
              </h2>
              
              <p style={{ 
                textAlign: 'center',
                fontSize: '1.3rem',
                maxWidth: '700px',
                margin: '0 auto 40px',
                color: 'rgba(229, 231, 235, 0.9)',
                position: 'relative',
                zIndex: 1
              }}>
                {steps.find(step => step.id === activeStep)?.description}
              </p>
              
              {/* Progress Indicators */}
              <div style={{
                display: 'flex',
                gap: '10px',
                position: 'relative',
                zIndex: 1
              }}>
                {steps.map((step) => (
                  <div 
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: activeStep === step.id ? step.color : 'rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Navigation Controls with Modern Styling */}
            <div style={{ 
              display: 'flex', 
              gap: '25px', 
              marginTop: '40px'
            }}>
              <button 
                className="btn btn-outline" 
                onClick={() => setActiveStep(activeStep > 1 ? activeStep - 1 : steps.length)}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  fontSize: '1.1rem',
                  backgroundColor: 'rgba(17, 24, 39, 0.5)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(5px)'
                }}
              >
                <FaArrowRight style={{ transform: 'rotate(180deg)' }} /> Previous
              </button>
              
              <button 
                className="btn" 
                onClick={() => setActiveStep(activeStep < steps.length ? activeStep + 1 : 1)}
                style={{ 
                  backgroundColor: steps.find(step => step.id === activeStep)?.color,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  fontSize: '1.1rem'
                }}
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Visualization with Transparency */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Complete Journey</h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '25px',
            margin: '0 auto',
            maxWidth: '1300px'
          }}>
            {steps.map((step) => (
              <div 
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                style={{
                  padding: '30px 20px',
                  borderRadius: '16px',
                  border: activeStep === step.id ? `2px solid ${step.color}` : '2px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: activeStep === step.id ? 'rgba(59, 130, 246, 0.1)' : 'rgba(17, 24, 39, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: activeStep === step.id ? '0 10px 25px rgba(0, 0, 0, 0.2)' : '0 5px 15px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(5px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = activeStep === step.id ? '0 10px 25px rgba(0, 0, 0, 0.2)' : '0 5px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Hover effect */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '4px',
                  backgroundColor: step.color,
                  transform: activeStep === step.id ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.3s ease',
                  transformOrigin: 'left'
                }}></div>
                
                <div style={{
                  fontSize: '3.5rem',
                  marginBottom: '20px',
                  opacity: activeStep === step.id ? 1 : 0.8,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}>
                  {step.visual}
                </div>
                
                <div className="step-number" style={{ 
                  width: '60px', 
                  height: '60px', 
                  fontSize: '1.5rem',
                  margin: '0 auto 20px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  color: step.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  border: `1px solid ${step.color}`
                }}>
                  {step.icon}
                </div>
                
                <h3 style={{ 
                  margin: '0 0 15px 0',
                  fontSize: '1.2rem',
                  color: activeStep === step.id ? step.color : 'rgba(255, 255, 255, 0.9)',
                  fontWeight: activeStep === step.id ? '600' : '500'
                }}>
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Benefits Visualization with Glass Effect */}
      <section className="why-choose-us-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Our Process Delivers Results</h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            margin: '0 auto',
            maxWidth: '1300px'
          }}>
            <div className="reason-card" style={{ 
              display: 'flex', 
              flexDirection: 'row',
              alignItems: 'center',
              padding: '30px',
              backgroundColor: 'rgba(17, 24, 39, 0.5)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="reason-icon" style={{ 
                minWidth: '70px',
                height: '70px',
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '25px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '12px',
                border: '1px solid #3B82F6'
              }}>
                ⚡
              </div>
              <div>
                <h3>Speed</h3>
                <p>We eliminate lengthy recruitment processes and get productive developers to you in days, not weeks.</p>
              </div>
            </div>
            
            <div className="reason-card" style={{ 
              display: 'flex', 
              flexDirection: 'row',
              alignItems: 'center',
              padding: '30px',
              backgroundColor: 'rgba(17, 24, 39, 0.5)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="reason-icon" style={{ 
                minWidth: '70px',
                height: '70px',
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '25px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '12px',
                border: '1px solid #3B82F6'
              }}>
                ✅
              </div>
              <div>
                <h3>Vetting</h3>
                <p>Our rigorous technical assessment ensures only qualified, experienced developers join your team.</p>
              </div>
            </div>
            
            <div className="reason-card" style={{ 
              display: 'flex', 
              flexDirection: 'row',
              alignItems: 'center',
              padding: '30px',
              backgroundColor: 'rgba(17, 24, 39, 0.5)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="reason-icon" style={{ 
                minWidth: '70px',
                height: '70px',
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '25px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '12px',
                border: '1px solid #3B82F6'
              }}>
                📈
              </div>
              <div>
                <h3>Flexibility</h3>
                <p>Adjust your team size monthly based on project demands without long-term commitments or penalties.</p>
              </div>
            </div>
            
            <div className="reason-card" style={{ 
              display: 'flex', 
              flexDirection: 'row',
              alignItems: 'center',
              padding: '30px',
              backgroundColor: 'rgba(17, 24, 39, 0.5)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="reason-icon" style={{ 
                minWidth: '70px',
                height: '70px',
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '25px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '12px',
                border: '1px solid #3B82F6'
              }}>
                💬
              </div>
              <div>
                <h3>Direct Access</h3>
                <p>Work directly with your developers through your preferred communication channels without intermediaries.</p>
              </div>
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
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '10px',
                marginBottom: '15px'
              }}>
                <img src={logo} alt="Krishna Technology Logo" style={{ width: '40px', height: '40px' }} />
                <Link to="/" className="footer-logo">Krishna Technology</Link>
              </div>
              <p>
                Providing senior software developers on contract for startups and companies.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/krishna%E2%80%99s-technology/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/krishnastechnology" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/krishnatechnology001/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaInstagram />
                </a>
                <a href="https://x.com/krishnasTech001" target="_blank" rel="noopener noreferrer" className="social-link">
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
            <div className="footer-contact">
              <h3 className="footer-heading">Contact</h3>
              <ul className="footer-links">
                <li>krishnatechnology001@gmail.com</li>
              </ul>
            </div>

          </div>
          <div className="copyright">
            <p>&copy; 2025 Krishna Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Add CSS for animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}

export default HowWeWorkPage;
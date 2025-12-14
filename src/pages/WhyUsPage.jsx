import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaUsers, FaTimes, FaEnvelope, FaRocket, FaLock, FaWrench, FaGlobe, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa';
import '../App.css';
import logo from '../assets/logo.svg'; // Import the detailed logo

function WhyUsPage() {
  const [activeBenefit, setActiveBenefit] = useState(0);

  const benefits = [
    {
      icon: <FaStar />,
      title: "5+ Years Experienced Developers",
      description: "All our developers have proven expertise in their respective technologies, with a minimum of 5 years of professional experience.",
      color: "#FBBF24",
      visual: "⭐"
    },
    {
      icon: <FaUsers />,
      title: "Flexible Monthly Contracts",
      description: "Scale your team up or down based on project requirements without long-term commitments or complicated agreements.",
      color: "#3B82F6",
      visual: "👥"
    },
    {
      icon: <FaTimes />,
      title: "No Long-Term Lock-In",
      description: "Freedom to adjust your engagement without penalties or complicated exit processes. Month-to-month flexibility.",
      color: "#EF4444",
      visual: "❌"
    },
    {
      icon: <FaEnvelope />,
      title: "Direct Communication",
      description: "Work directly with your developers through your preferred communication channels without intermediaries or communication barriers.",
      color: "#10B981",
      visual: "✉️"
    },
    {
      icon: <FaRocket />,
      title: "Fast Onboarding",
      description: "Get productive developers within days, not weeks, with minimal recruitment overhead and immediate project integration.",
      color: "#8B5CF6",
      visual: "🚀"
    },
    {
      icon: <FaLock />,
      title: "Confidentiality Assured",
      description: "We maintain strict confidentiality for all client projects and intellectual property with comprehensive NDAs.",
      color: "#6B7280",
      visual: "🔒"
    },
    {
      icon: <FaWrench />,
      title: "Technical Excellence",
      description: "Our developers follow industry best practices, clean code principles, and maintain high-quality standards.",
      color: "#F59E0B",
      visual: "🔧"
    },
    {
      icon: <FaGlobe />,
      title: "Time Zone Friendly",
      description: "Our developers can align with your working hours for seamless collaboration and real-time communication when needed.",
      color: "#EC4899",
      visual: "🌐"
    }
  ];

  // Auto-rotate benefits
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [benefits.length]);

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
            <img src={logo} alt="Krishna's Technology Logo" style={{ width: '40px', height: '40px' }} />
            <Link to="/" className="logo">Krishna's Technology</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/work">How We Work</Link></li>
            <li><Link to="/why" className="active">Why Us</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </header>

      {/* Hero Section with Logo */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Krishna's Technology Logo */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <img src={logo} alt="Krishna's Technology Logo" style={{ width: '80px', height: '80px' }} />
            </div>
            <h1>Why Choose Us</h1>
            <p className="hero-subtitle">
              Distinctive advantages that make us your ideal technology partner
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefit Visualization with Transparency Effects */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Key Differentiators</h2>
            <p className="section-description">
              What sets us apart from traditional development agencies and freelance platforms
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
                {benefits[activeBenefit].visual}
              </div>
              
              {/* Benefit Icon */}
              <div className="reason-icon" style={{ 
                width: '120px', 
                height: '120px', 
                fontSize: '3.5rem',
                margin: '0 auto 25px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: benefits[activeBenefit].color,
                borderRadius: '20px',
                border: `1px solid ${benefits[activeBenefit].color}`,
                position: 'relative',
                zIndex: 1
              }}>
                {benefits[activeBenefit].icon}
              </div>
              
              <h2 style={{ 
                color: benefits[activeBenefit].color,
                textAlign: 'center',
                marginBottom: '20px',
                fontSize: '2.2rem',
                position: 'relative',
                zIndex: 1
              }}>
                {benefits[activeBenefit].title}
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
                {benefits[activeBenefit].description}
              </p>
              
              {/* Progress Indicators */}
              <div style={{
                display: 'flex',
                gap: '10px',
                position: 'relative',
                zIndex: 1
              }}>
                {benefits.map((_, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveBenefit(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: activeBenefit === index ? benefits[index].color : 'rgba(255, 255, 255, 0.2)',
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
                onClick={() => setActiveBenefit(activeBenefit > 0 ? activeBenefit - 1 : benefits.length - 1)}
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
                onClick={() => setActiveBenefit((activeBenefit + 1) % benefits.length)}
                style={{ 
                  backgroundColor: benefits[activeBenefit].color,
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

      {/* Interactive Benefits Grid with Transparency */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All Our Advantages</h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '25px',
            margin: '0 auto',
            maxWidth: '1300px'
          }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                onClick={() => setActiveBenefit(index)}
                style={{
                  padding: '30px 20px',
                  borderRadius: '16px',
                  border: activeBenefit === index ? `2px solid ${benefit.color}` : '2px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: activeBenefit === index ? 'rgba(59, 130, 246, 0.1)' : 'rgba(17, 24, 39, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: activeBenefit === index ? '0 10px 25px rgba(0, 0, 0, 0.2)' : '0 5px 15px rgba(0, 0, 0, 0.1)',
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
                  e.currentTarget.style.boxShadow = activeBenefit === index ? '0 10px 25px rgba(0, 0, 0, 0.2)' : '0 5px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Hover effect */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '4px',
                  backgroundColor: benefit.color,
                  transform: activeBenefit === index ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.3s ease',
                  transformOrigin: 'left'
                }}></div>
                
                <div style={{
                  fontSize: '3.5rem',
                  marginBottom: '20px',
                  opacity: activeBenefit === index ? 1 : 0.8,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}>
                  {benefit.visual}
                </div>
                
                <div className="reason-icon" style={{ 
                  width: '60px', 
                  height: '60px', 
                  fontSize: '1.5rem',
                  margin: '0 auto 20px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  color: benefit.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  border: `1px solid ${benefit.color}`
                }}>
                  {benefit.icon}
                </div>
                
                <h3 style={{ 
                  margin: '0 0 15px 0',
                  fontSize: '1.2rem',
                  color: activeBenefit === index ? benefit.color : 'rgba(255, 255, 255, 0.9)',
                  fontWeight: activeBenefit === index ? '600' : '500'
                }}>
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Value Visualization with Glass Effect */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>The Value We Deliver</h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            margin: '0 auto',
            maxWidth: '1300px'
          }}>
            <div className="stat-item" style={{ 
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
              <div style={{ 
                fontSize: '3.5rem',
                marginRight: '25px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }}>
                ⏱️
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>90%</h3>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>Reduction in recruitment time</p>
              </div>
            </div>
            
            <div className="stat-item" style={{ 
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
              <div style={{ 
                fontSize: '3.5rem',
                marginRight: '25px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }}>
                👨‍💻
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>5+</h3>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>Years average developer experience</p>
              </div>
            </div>
            
            <div className="stat-item" style={{ 
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
              <div style={{ 
                fontSize: '3.5rem',
                marginRight: '25px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }}>
                ❤️
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>100%</h3>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>Client retention rate</p>
              </div>
            </div>
            
            <div className="stat-item" style={{ 
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
              <div style={{ 
                fontSize: '3.5rem',
                marginRight: '25px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }}>
                🕐
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>24h</h3>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>Average response time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ready to Experience the Difference?</h2>
            <p className="section-description">
              Connect with our team to discuss how we can enhance your development capabilities.
            </p>
            <Link to="/contact" className="btn">Talk to Our Experts</Link>
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
                <img src={logo} alt="Krishna's Technology Logo" style={{ width: '40px', height: '40px' }} />
                <Link to="/" className="footer-logo">Krishna's Technology</Link>
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
            <p>&copy; 2025 Krishna's Technology. All rights reserved.</p>
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

export default WhyUsPage;
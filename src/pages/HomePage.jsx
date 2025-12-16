import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaUsers, FaCode, FaCloud, FaCheck, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaLaptopCode, FaMobileAlt, FaDatabase, FaJava, FaBars } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import '../App.css';
import logo from '../assets/logo.svg';
import MobileMenu from '../components/MobileMenu';

const HomePage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredReason, setHoveredReason] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const services = [
    {
      id: 1,
      icon: <SiRubyonrails style={{ fontSize: '2rem', color: '#CC0000' }} />,
      title: "Ruby on Rails Development",
      description: "Custom web applications built with Ruby on Rails for optimal performance and scalability."
    },
    {
      id: 2,
      icon: <FaCloud style={{ fontSize: '2rem', color: '#FF9900' }} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies for your business."
    },
    {
      id: 3,
      icon: <FaUsers style={{ fontSize: '2rem', color: '#3498DB' }} />,
      title: "Team Augmentation",
      description: "Flexible hiring solutions to scale your development team on demand."
    }
  ];

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Discovery",
      description: "We analyze your requirements and define project scope together."
    },
    {
      id: 2,
      number: "02",
      title: "Planning",
      description: "Detailed roadmap with timelines and milestones for transparency."
    },
    {
      id: 3,
      number: "03",
      title: "Execution",
      description: "Agile development with regular updates and feedback loops."
    },
    {
      id: 4,
      number: "04",
      title: "Delivery",
      description: "Final product delivery with documentation and support."
    }
  ];

  const reasons = [
    {
      id: 1,
      icon: <FaCheck style={{ fontSize: '2rem', color: '#2ECC71' }} />,
      title: "Quality Assured",
      description: "Rigorous testing and quality checks for every deliverable."
    },
    {
      id: 2,
      icon: <FaRocket style={{ fontSize: '2rem', color: '#61DAFB' }} />,
      title: "Fast Delivery",
      description: "Agile methodologies ensure timely project completion."
    },
    {
      id: 3,
      icon: <FaUsers style={{ fontSize: '2rem', color: '#3498DB' }} />,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience."
    }
  ];

  // New team work cards data
  const teamWorkItems = [
    {
      id: 1,
      icon: <FaLaptopCode style={{ fontSize: '2rem', color: '#61DAFB' }} />,
      title: "Frontend Development",
      description: "Creating responsive interfaces with React, Vue, and modern JavaScript frameworks."
    },
    {
      id: 2,
      icon: <FaDatabase style={{ fontSize: '2rem', color: '#3498DB' }} />,
      title: "Backend Systems",
      description: "Building robust server-side solutions with Node.js, Python, and cloud services."
    },
    {
      id: 3,
      icon: <FaMobileAlt style={{ fontSize: '2rem', color: '#9B59B6' }} />,
      title: "Mobile Applications",
      description: "Developing cross-platform mobile apps with React Native and Flutter."
    }
  ];

  return (
    <div className="home-page">
      {/* Header */}
      <header>
        <nav className="navbar">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '10px'
          }}>
            <img src={logo} alt="Krishna Technology Logo" style={{ width: '40px', height: '40px' }} />
            <Link to="/" className="logo">Krishna Technology</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/work">How We Work</Link></li>
            <li><Link to="/why">Why Us</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <FaBars />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Transform Your Business with Krishna Technology</h1>
            <p className="hero-subtitle">
              We build reliable software solutions that drive growth and innovation for businesses worldwide.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">Our Services</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
            
            <div className="tech-stack">
              <span className="tech-item">Ruby on Rails</span>
              <span className="tech-item">Python</span>
              <span className="tech-item">Java</span>
              <span className="tech-item">React</span>
              <span className="tech-item">Angular</span>
              <span className="tech-item">Vue.js</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-item">MongoDB</span>
              <span className="tech-item">AWS</span>
              <span className="tech-item">Docker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`service-card ${hoveredService === service.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Work</h2>
            <p className="section-description">
              Our proven methodology ensures successful project delivery every time
            </p>
          </div>
          
          <div className="steps-container">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`step ${hoveredStep === step.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-description">
              Distinct advantages that set us apart from the competition
            </p>
          </div>
          
          <div className="reasons-grid">
            {reasons.map((reason) => (
              <div 
                key={reason.id}
                className={`reason-card ${hoveredReason === reason.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredReason(reason.id)}
                onMouseLeave={() => setHoveredReason(null)}
              >
                <div className="reason-icon">
                  {reason.icon}
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Work Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team Capabilities</h2>
            <p className="section-description">
              Diverse skill sets across multiple technology domains
            </p>
          </div>
          
          <div className="reasons-grid">
            {teamWorkItems.map((item) => (
              <div key={item.id} className="reason-card">
                <div className="reason-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ready to Transform Your Business?</h2>
            <p className="section-description">
              Connect with our experts to discuss your technology requirements.
            </p>
            <Link to="/contact" className="btn">Schedule a Consultation</Link>
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
                Building reliable technology solutions for businesses worldwide with a focus on quality and innovation.
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
              <h3 className="footer-heading">Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3 className="footer-heading">Contact Us</h3>
              <ul>
                <li>Email: krishnatechnology001@gmail.com</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; 2025 Krishna Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
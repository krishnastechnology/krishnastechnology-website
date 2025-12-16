import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaRocket, FaUsers, FaCloud, FaServer, FaDatabase, FaMobile, FaDesktop, FaAws, FaDocker, FaJenkins, FaJava, FaPython, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaBars } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import '../App.css';
import logo from '../assets/logo.svg';
import MobileMenu from '../components/MobileMenu';

function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

  const toggleServiceDetails = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <>
      {/* Header */}
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
            <li><Link to="/services" className="active">Services</Link></li>
            <li><Link to="/work">How We Work</Link></li>
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

      {/* Services Section - Full Page Version */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">What We Do</h1>
            <p className="section-description">
              Business-focused technology services designed to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card" id="ror">
              <div className="service-icon">
                <SiRubyonrails style={{ fontSize: '2rem', color: '#CC0000' }} />
              </div>
              <h3>Ruby on Rails Development</h3>
              <p>
                Accelerate your product with expert Ruby on Rails developers skilled in building fast, secure, and scalable applications for growing businesses.
              </p>
              <button 
                className="btn btn-outline" 
                onClick={() => toggleServiceDetails('ror')}
                style={{ marginTop: '15px' }}
              >
                {expandedService === 'ror' ? 'Show Less' : 'Learn More'}
              </button>
              {expandedService === 'ror' && (
                <ul className="service-features" style={{ marginTop: '15px' }}>
                  <li>Fast & reliable backend development</li>
                  <li>Scalable architecture for growth</li>
                  <li>Optimized performance for heavy traffic</li>
                  <li>Enterprise-level security standards</li>
                  <li>Robust testing with TDD</li>
                </ul>
              )}
            </div>
            
            <div className="service-card" id="mern">
              <div className="service-icon">
                <FaRocket style={{ fontSize: '2rem', color: '#61DAFB' }} />
              </div>
              <h3>MERN Stack Development</h3>
              <p>
                End-to-end JavaScript development with React and Node.js — delivering fast, scalable, and modern web applications with real-time functionality.
              </p>
              <button 
                className="btn btn-outline" 
                onClick={() => toggleServiceDetails('mern')}
                style={{ marginTop: '15px' }}
              >
                {expandedService === 'mern' ? 'Show Less' : 'Learn More'}
              </button>
              {expandedService === 'mern' && (
                <ul className="service-features" style={{ marginTop: '15px' }}>
                  <li>Interactive and dynamic React.js frontends</li>
                  <li>High-performance Node.js backend architecture</li>
                  <li>MongoDB-based scalable data models</li>
                  <li>Real-time features powered by WebSockets</li>
                  <li>PWA development for mobile-like experiences</li>
                </ul>
              )}
            </div>
            
            <div className="service-card" id="java">
              <div className="service-icon">
                <FaJava style={{ fontSize: '2rem', color: '#ED8B00' }} />
              </div>
              <h3>Java Enterprise Development</h3>
              <p>
                Robust and scalable enterprise solutions with Java technologies including Spring Boot, Hibernate, and Microservices architecture for large-scale applications.
              </p>
              <button 
                className="btn btn-outline" 
                onClick={() => toggleServiceDetails('java')}
                style={{ marginTop: '15px' }}
              >
                {expandedService === 'java' ? 'Show Less' : 'Learn More'}
              </button>
              {expandedService === 'java' && (
                <ul className="service-features" style={{ marginTop: '15px' }}>
                  <li>Spring Boot & Spring Framework expertise</li>
                  <li>Microservices architecture design</li>
                  <li>Hibernate & JPA for ORM solutions</li>
                  <li>RESTful API development</li>
                  <li>Enterprise integration patterns</li>
                </ul>
              )}
            </div>
            
            <div className="service-card" id="python">
              <div className="service-icon">
                <FaPython style={{ fontSize: '2rem', color: '#3776AB' }} />
              </div>
              <h3>Python Development</h3>
              <p>
                Data-driven applications and AI-powered solutions with Python frameworks including Django, Flask, and FastAPI for versatile backend development.
              </p>
              <button 
                className="btn btn-outline" 
                onClick={() => toggleServiceDetails('python')}
                style={{ marginTop: '15px' }}
              >
                {expandedService === 'python' ? 'Show Less' : 'Learn More'}
              </button>
              {expandedService === 'python' && (
                <ul className="service-features" style={{ marginTop: '15px' }}>
                  <li>Django & Flask web application development</li>
                  <li>Data science & machine learning integration</li>
                  <li>RESTful APIs with FastAPI</li>
                  <li>Database integration with SQLAlchemy</li>
                  <li>Automation & scripting solutions</li>
                </ul>
              )}
            </div>
            
            <div className="service-card" id="fullstack">
              <div className="service-icon">
                <FaUsers style={{ fontSize: '2rem', color: '#3498DB' }} />
              </div>
              <h3>Full-Stack Engineering</h3>
              <p>
                Full-stack development covering modern frontend frameworks and robust backend systems for fully production-ready products.
              </p>
              <button 
                className="btn btn-outline" 
                onClick={() => toggleServiceDetails('fullstack')}
                style={{ marginTop: '15px' }}
              >
                {expandedService === 'fullstack' ? 'Show Less' : 'Learn More'}
              </button>
              {expandedService === 'fullstack' && (
                <ul className="service-features" style={{ marginTop: '15px' }}>
                  <li>Cross-platform development</li>
                  <li>Database design and optimization</li>
                  <li>Cloud deployment strategies</li>
                  <li>CI/CD pipeline setup</li>
                  <li>Performance monitoring</li>
                </ul>
              )}
            </div>
            
            <div className="service-card" id="devops">
              <div className="service-icon">
                <FaCloud style={{ fontSize: '2rem', color: '#FF9900' }} />
              </div>
              <h3>DevOps & Cloud Support</h3>
              <p>
                Streamline your development workflow with our DevOps expertise in cloud infrastructure, 
                containerization, and continuous integration.
              </p>
              <button 
                className="btn btn-outline" 
                onClick={() => toggleServiceDetails('devops')}
                style={{ marginTop: '15px' }}
              >
                {expandedService === 'devops' ? 'Show Less' : 'Learn More'}
              </button>
              {expandedService === 'devops' && (
                <ul className="service-features" style={{ marginTop: '15px' }}>
                  <li>AWS/GCP/Azure cloud solutions</li>
                  <li>Docker containerization</li>
                  <li>Kubernetes orchestration</li>
                  <li>CI/CD pipeline automation</li>
                  <li>Infrastructure as Code (IaC)</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>Industries We Serve</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>Startups</h3>
              <p>Early-stage companies building MVPs</p>
            </div>
            <div className="stat-item">
              <h3>SaaS Products</h3>
              <p>Software-as-a-Service platforms</p>
            </div>
            <div className="stat-item">
              <h3>US-based IT Vendors</h3>
              <p>American companies needing augmentation</p>
            </div>
            <div className="stat-item">
              <h3>Remote Teams</h3>
              <p>Distributed development teams</p>
            </div>
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
                <li><Link to="/services#java">Java Enterprise Development</Link></li>
                <li><Link to="/services#python">Python Development</Link></li>
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
    </>
  );
}

export default ServicesPage;
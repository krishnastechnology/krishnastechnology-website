import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaRocket, FaUsers, FaCloud, FaServer, FaDatabase, FaMobile, FaDesktop, FaAws, FaDocker, FaJenkins, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../App.css';

function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);
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

  const toggleServiceDetails = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

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
                <FaCode />
              </div>
              <h3>Ruby on Rails Development</h3>
              <p>
                Build secure, scalable web applications with our senior Ruby on Rails developers 
                specializing in API development and microservices architecture.
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
                  <li>API-first development approach</li>
                  <li>Microservices architecture</li>
                  <li>Performance optimization</li>
                  <li>Security best practices</li>
                  <li>Test-driven development</li>
                </ul>
              )}
            </div>
            
            <div className="service-card" id="mern">
              <div className="service-icon">
                <FaRocket />
              </div>
              <h3>MERN Stack Development</h3>
              <p>
                Full-stack JavaScript solutions with React frontend and Node.js backend for 
                modern web applications with real-time capabilities.
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
                  <li>React.js frontend development</li>
                  <li>Node.js backend services</li>
                  <li>MongoDB database design</li>
                  <li>Real-time features with Socket.io</li>
                  <li>Progressive Web Apps (PWA)</li>
                </ul>
              )}
            </div>
            
            <div className="service-card" id="fullstack">
              <div className="service-icon">
                <FaUsers />
              </div>
              <h3>Full-Stack Engineering</h3>
              <p>
                End-to-end product development covering both frontend and backend technologies 
                for complete, production-ready solutions.
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
                <FaCloud />
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
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-description">
              Connect with our experts to discuss your project requirements.
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

export default ServicesPage;
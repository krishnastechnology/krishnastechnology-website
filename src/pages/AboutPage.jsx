import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaLightbulb, FaChartLine, FaRocket, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../App.css';

const AboutPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamValues = [
    {
      id: 1,
      icon: <FaUsers />,
      title: "Collaborative Approach",
      description: "We believe in working closely with our clients to understand their unique challenges and goals."
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      title: "Innovation First",
      description: "Our team stays ahead of industry trends to deliver cutting-edge solutions."
    },
    {
      id: 3,
      icon: <FaChartLine />,
      title: "Results Oriented",
      description: "We focus on measurable outcomes that drive business growth and success."
    },
    {
      id: 4,
      icon: <FaRocket />,
      title: "Agile Delivery",
      description: "Our iterative approach ensures rapid development and continuous improvement."
    }
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <header>
        <nav className="navbar">
          <Link to="/" className="logo">Krishna's Technology</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/how-we-work">How We Work</Link></li>
            <li><Link to="/why-us">Why Us</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>About Krishna's Technology</h1>
            <p className="hero-subtitle">
              Building trust through transparent partnerships and exceptional technical expertise
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to bridge the gap between innovative technology and practical business solutions, 
                Krishna's Technology has grown into a trusted partner for businesses seeking digital transformation.
              </p>
              <p>
                Our journey began with a small team of passionate developers who believed in delivering quality 
                solutions without the overhead of traditional agencies. Today, we continue to uphold those values 
                while scaling our expertise to serve clients globally.
              </p>
              <p>
                We differentiate ourselves by focusing on genuine partnerships rather than transactional relationships. 
                Our team brings real experience and technical depth to every project.
              </p>
              
              <div className="cta-buttons" style={{ marginTop: '30px' }}>
                <Link to="/team" className="btn">Meet Our Team</Link>
                <Link to="/contact" className="btn btn-outline" style={{ marginLeft: '15px' }}>Get in Touch</Link>
              </div>
            </div>
            
            {/* Replaced about-image div with dark-themed service cards */}
            <div className="services-preview">
              <div className="section-header" style={{ textAlign: 'left', margin: '0 0 30px 0', padding: '0' }}>
                <h2 style={{ fontSize: '1.8rem' }}>Our Expertise</h2>
                <p className="section-description" style={{ textAlign: 'left', margin: '10px 0 0 0' }}>
                  Core competencies that drive client success
                </p>
              </div>
              
              <div className="services-grid" style={{ gap: '20px' }}>
                <div className="service-card">
                  <div className="service-icon">
                    <FaUsers />
                  </div>
                  <h3>Full Stack Development</h3>
                  <p>End-to-end development solutions using modern frameworks and technologies.</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">
                    <FaLightbulb />
                  </div>
                  <h3>Cloud Architecture</h3>
                  <p>Scalable and secure cloud solutions tailored to your business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="why-choose-us-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">
              Principles that guide our work and relationships
            </p>
          </div>
          
          <div className="reasons-grid">
            {teamValues.map((value) => (
              <div 
                key={value.id}
                className={`reason-card ${hoveredCard === value.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredCard(value.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="reason-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section with Dark Theme */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              Comprehensive technology solutions tailored to your business needs and goals
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaUsers />
              </div>
              <h3>Web Development</h3>
              <p>Custom web applications built with modern technologies for optimal performance.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaLightbulb />
              </div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure and deployment strategies for your business.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaChartLine />
              </div>
              <h3>DevOps</h3>
              <p>Streamlined deployment and infrastructure automation for scalable applications.</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/services" className="btn">View All Services</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ background: '#2563eb', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>Ready to Start Your Project?</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 30px', color: '#bfdbfe' }}>
            Let's discuss how our expertise can help you achieve your business goals
          </p>
          <Link to="/contact" className="btn" style={{ background: 'white', color: '#2563eb', fontWeight: '600' }}>
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <Link to="/" className="footer-logo">Krishna's Technology</Link>
              <p>Building reliable technology solutions for businesses worldwide with a focus on quality and innovation.</p>
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
                <li>Email: contact@krishnastechnology.com</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; 2025 Krishna's Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
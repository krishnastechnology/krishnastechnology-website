import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaUsers, FaCode, FaCloud, FaCheck, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import '../App.css';

const HomePage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [hoveredReason, setHoveredReason] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance."
    },
    {
      id: 2,
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies for your business."
    },
    {
      id: 3,
      icon: <FaUsers />,
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
      icon: <FaCheck />,
      title: "Quality Assured",
      description: "Rigorous testing and quality checks for every deliverable."
    },
    {
      id: 2,
      icon: <FaRocket />,
      title: "Fast Delivery",
      description: "Agile methodologies ensure timely project completion."
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience."
    }
  ];

  // New team work cards data
  const teamWorkItems = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description: "Creating responsive interfaces with React, Vue, and modern JavaScript frameworks."
    },
    {
      id: 2,
      icon: <FaDatabase />,
      title: "Backend Systems",
      description: "Building robust server-side solutions with Node.js, Python, and cloud services."
    },
    {
      id: 3,
      icon: <FaMobileAlt />,
      title: "Mobile Applications",
      description: "Developing cross-platform mobile apps with React Native and Flutter."
    }
  ];

  return (
    <div className="home-page">
      {/* Header */}
      <header>
        <nav className="navbar">
          <Link to="/" className="logo">Krishna's Technology</Link>
          <ul className="nav-links">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
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
            <h1>Transform Your Business with Technology</h1>
            <p className="hero-subtitle">
              We build reliable software solutions that drive growth and innovation for businesses worldwide.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">Our Services</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
            
            <div className="tech-stack">
              <span className="tech-item">React</span>
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
              Transparent process ensuring quality and timely delivery
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

      {/* Collaborative Team Culture Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Collaborative Team Culture</h2>
              <p>
                Our success is built on a foundation of collaboration, innovation, and shared expertise. 
                We foster an environment where diverse skills and perspectives come together to solve 
                complex challenges and deliver exceptional results.
              </p>
              <p>
                Through regular knowledge sharing sessions, pair programming, and cross-functional 
                collaboration, our team continuously grows and adapts to emerging technologies 
                while maintaining the highest standards of quality and professionalism.
              </p>
              <div className="cta-buttons" style={{ marginTop: '30px' }}>
                <Link to="/team" className="btn">Meet Our Team</Link>
              </div>
            </div>
            
            <div className="about-image" style={{ 
              background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white'
            }}>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <FaUsers style={{ fontSize: '3rem', marginBottom: '15px' }} />
                <h3 style={{ color: 'white', marginBottom: '10px' }}>Team Collaboration</h3>
                <p style={{ color: '#bfdbfe', maxWidth: '300px', margin: '0 auto' }}>
                  Our team works together seamlessly to deliver outstanding results for every project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team At Work Section (Dark Themed) */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team At Work</h2>
            <p className="section-description">
              Discover how our experts contribute to project success
            </p>
          </div>
          
          <div className="services-grid">
            {teamWorkItems.map((item) => (
              <div 
                key={item.id}
                className={`service-card ${hoveredService === item.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredService(item.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="service-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
              What sets us apart from the competition
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

      {/* CTA Section */}
      <section className="cta-section" style={{ background: '#2563eb', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>Ready to Transform Your Business?</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 30px', color: '#bfdbfe' }}>
            Let's discuss how our services can help you achieve your goals
          </p>
          <Link to="/contact" className="btn" style={{ background: 'white', color: '#2563eb', fontWeight: '600' }}>
            Get Started Today
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

export default HomePage;
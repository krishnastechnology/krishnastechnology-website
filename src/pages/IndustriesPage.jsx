import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaChartLine, FaSync, FaTools, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../App.css';

function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
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

  const industries = [
    {
      id: 1,
      name: "Startups",
      description: "Early-stage companies building MVPs and scaling rapidly",
      challenges: [
        "Need to build MVP quickly",
        "Limited technical resources",
        "Require scalable architecture from day one",
        "Need mentorship and guidance"
      ]
    },
    {
      id: 2,
      name: "SaaS Products",
      description: "Software-as-a-Service platforms requiring ongoing development",
      challenges: [
        "Continuous feature development",
        "Performance optimization at scale",
        "Multi-tenant architecture",
        "Regular security updates"
      ]
    },
    {
      id: 3,
      name: "US-based IT Vendors",
      description: "American companies needing technical team augmentation",
      challenges: [
        "Time zone coordination",
        "Cultural alignment",
        "Quality assurance",
        "Communication efficiency"
      ]
    },
    {
      id: 4,
      name: "Remote Teams",
      description: "Distributed development teams requiring additional expertise",
      challenges: [
        "Collaboration tools integration",
        "Knowledge sharing",
        "Code review processes",
        "Team cohesion"
      ]
    }
  ];

  const useCases = [
    {
      icon: <FaLightbulb />,
      title: "MVP Development",
      description: "Build minimum viable products quickly to validate market demand"
    },
    {
      icon: <FaChartLine />,
      title: "Product Scaling",
      description: "Scale existing applications to handle increased user load"
    },
    {
      icon: <FaSync />,
      title: "Technology Migration",
      description: "Migrate legacy systems to modern, scalable architectures"
    },
    {
      icon: <FaTools />,
      title: "Team Augmentation",
      description: "Add specialized expertise to existing development teams"
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
            <li><Link to="/industries" className="active">Industries</Link></li>
            <li><Link to="/work">How We Work</Link></li>
            <li><Link to="/why">Why Us</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </header>

      {/* Industries Section - Full Page Version */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title" style={{ color: 'white' }}>Industries We Serve</h1>
            <p className="section-description" style={{ color: '#bfdbfe', fontSize: '1.2rem' }}>
              Specialized expertise across multiple sectors to meet diverse business needs.
            </p>
          </div>
          
          <div className="stats-grid">
            {industries.map((industry) => (
              <div 
                className={`stat-item ${selectedIndustry === industry.id ? 'active' : ''}`}
                key={industry.id}
                onClick={() => setSelectedIndustry(selectedIndustry === industry.id ? null : industry.id)}
                style={{ cursor: 'pointer' }}
              >
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
                {selectedIndustry === industry.id && (
                  <div style={{ marginTop: '15px' }}>
                    <h4 style={{ color: 'white' }}>Common Challenges:</h4>
                    <ul style={{ textAlign: 'left', color: '#bfdbfe' }}>
                      {industry.challenges.map((challenge, index) => (
                        <li key={index} style={{ marginBottom: '5px' }}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common Use Cases</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                We help businesses across various industries solve specific technical challenges 
                with our senior developer expertise.
              </p>
              
              <div className="reasons-grid">
                {useCases.map((useCase, index) => (
                  <div className="reason-card" key={index}>
                    <div className="reason-icon">{useCase.icon}</div>
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="about-image">
              Industry Solutions
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="why-choose-us-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Benefits Across Industries</h2>
          </div>
          
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">
                <FaChartLine />
              </div>
              <h3>Speed to Market</h3>
              <p>Accelerate development timelines with experienced developers</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <FaLightbulb />
              </div>
              <h3>Cost Efficiency</h3>
              <p>Reduce hiring costs while accessing top-tier talent</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <FaTools />
              </div>
              <h3>Technical Expertise</h3>
              <p>Access specialized skills without permanent hiring</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">
                <FaSync />
              </div>
              <h3>Flexible Engagement</h3>
              <p>Scale team size based on project demands</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ready to Discuss Your Project?</h2>
            <p className="section-description">
              Connect with our industry experts to explore how we can help your business.
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
    </>
  );
}

export default IndustriesPage;
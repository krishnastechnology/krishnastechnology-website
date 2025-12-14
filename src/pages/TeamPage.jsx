import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaRocket, FaUsers, FaCloud, FaChartLine, FaComments, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../App.css';

function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filter, setFilter] = useState('all');
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

  const teamMembers = [
    {
      id: 1,
      icon: <FaCode />,
      name: "Tech Lead - Backend",
      experience: "4+ years experience in Ruby on Rails and distributed systems architecture",
      specialization: "Specializes in API development, microservices, and database optimization",
      skills: ["Ruby on Rails", "PostgreSQL", "Redis", "AWS"]
    },
    {
      id: 2,
      icon: <FaRocket />,
      name: "Senior MERN Developer",
      experience: "5+ years experience in full-stack JavaScript development",
      specialization: "Expertise in React, Node.js, MongoDB, and real-time applications",
      skills: ["React", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      id: 3,
      icon: <FaUsers />,
      name: "Full-Stack Engineer",
      experience: "6+ years experience in cross-platform development",
      specialization: "Proficient in multiple frontend and backend technologies",
      skills: ["Vue.js", "Express", "MySQL", "Firebase"]
    },
    {
      id: 4,
      icon: <FaCloud />,
      name: "DevOps Specialist",
      experience: "5+ years experience in cloud infrastructure and CI/CD pipelines",
      specialization: "AWS certified with expertise in Docker and Kubernetes",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      id: 5,
      icon: <FaChartLine />,
      name: "Project Manager",
      experience: "6+ years experience in agile project delivery",
      specialization: "Certified Scrum Master with expertise in remote team coordination",
      skills: ["Agile", "Scrum", "Jira", "Confluence"]
    },
    {
      id: 6,
      icon: <FaComments />,
      name: "Operations & Vendor Management",
      experience: "7+ years experience in client relations and vendor management",
      specialization: "Ensures smooth communication and project delivery",
      skills: ["Client Relations", "Vendor Management", "Communication", "Negotiation"]
    }
  ];

  const filteredMembers = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.skills.some(skill => skill.toLowerCase().includes(filter)));

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

      {/* Team Section - Full Page Version */}
      <section className="our-team-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Our Team</h1>
            <p className="section-description">
              Experienced professionals dedicated to delivering exceptional technical solutions.
            </p>
            
            {/* Filter Options */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', flexWrap: 'wrap' }}>
              <button 
                className={`btn ${filter === 'all' ? 'btn-outline' : ''}`}
                onClick={() => setFilter('all')}
                style={{ margin: '5px' }}
              >
                All Members
              </button>
              <button 
                className={`btn ${filter === 'react' ? 'btn-outline' : ''}`}
                onClick={() => setFilter('react')}
                style={{ margin: '5px' }}
              >
                React Developers
              </button>
              <button 
                className={`btn ${filter === 'rails' ? 'btn-outline' : ''}`}
                onClick={() => setFilter('rails')}
                style={{ margin: '5px' }}
              >
                Ruby on Rails
              </button>
              <button 
                className={`btn ${filter === 'devops' ? 'btn-outline' : ''}`}
                onClick={() => setFilter('devops')}
                style={{ margin: '5px' }}
              >
                DevOps
              </button>
            </div>
          </div>
          
          <div className="team-grid">
            {filteredMembers.map((member) => (
              <div 
                className={`team-member ${selectedMember === member.id ? 'active' : ''}`}
                key={member.id}
                onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="team-placeholder">{member.icon}</div>
                <h3>{member.name}</h3>
                <p>{member.experience}</p>
                <p>{member.specialization}</p>
                {selectedMember === member.id && (
                  <div style={{ marginTop: '15px' }}>
                    <h4>Skills:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                      {member.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          style={{ 
                            background: '#dbeafe', 
                            color: '#2563eb', 
                            padding: '4px 10px', 
                            borderRadius: '15px', 
                            fontSize: '0.8rem'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Approach to Team Building</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                We believe in building long-term relationships with both our clients and developers. 
                Our team members are carefully selected not just for their technical skills but also 
                for their ability to work collaboratively in distributed environments.
              </p>
              
              <p>
                All our developers:
              </p>
              
              <ul className="service-features">
                <li>Have a minimum of 5 years professional experience</li>
                <li>Are thoroughly vetted through technical assessments</li>
                <li>Possess strong communication skills in English</li>
                <li>Can align with your working hours for real-time collaboration</li>
                <li>Follow industry best practices and coding standards</li>
              </ul>
              
              <div style={{ marginTop: '30px' }}>
                <Link to="/contact" className="btn">Connect With Our Team</Link>
              </div>
            </div>
            
            <div className="about-image">
              Collaborative Team Culture
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

export default TeamPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaRocket, FaUsers, FaCloud, FaChartLine, FaComments, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaJava, FaPython } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import '../App.css';
import logo from '../assets/logo.svg'; // Import the detailed logo

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
      icon: <SiRubyonrails style={{ fontSize: '2rem', color: '#CC0000' }} />,
      name: "Ruby on Rails Specialist",
      experience: "6+ years experience in Ruby on Rails and distributed systems architecture",
      specialization: "Specializes in API development, microservices, and database optimization",
      skills: ["Ruby on Rails", "PostgreSQL", "Redis", "AWS", "Sidekiq"]
    },
    {
      id: 2,
      icon: <FaRocket style={{ fontSize: '2rem', color: '#61DAFB' }} />,
      name: "Senior MERN Developer",
      experience: "5+ years experience in full-stack JavaScript development",
      specialization: "Expertise in React, Node.js, MongoDB, and real-time applications",
      skills: ["React", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      id: 3,
      icon: <FaUsers style={{ fontSize: '2rem', color: '#3498DB' }} />,
      name: "Full-Stack Engineer",
      experience: "6+ years experience in cross-platform development",
      specialization: "Proficient in multiple frontend and backend technologies",
      skills: ["Vue.js", "Express", "MySQL", "Firebase"]
    },
    {
      id: 4,
      icon: <FaCloud style={{ fontSize: '2rem', color: '#FF9900' }} />,
      name: "DevOps Specialist",
      experience: "5+ years experience in cloud infrastructure and CI/CD pipelines",
      specialization: "AWS certified with expertise in Docker and Kubernetes",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      id: 5,
      icon: <FaChartLine style={{ fontSize: '2rem', color: '#2ECC71' }} />,
      name: "Project Manager",
      experience: "6+ years experience in agile project delivery",
      specialization: "Certified Scrum Master with expertise in remote team coordination",
      skills: ["Agile", "Scrum", "Jira", "Confluence"]
    },
    {
      id: 6,
      icon: <FaComments style={{ fontSize: '2rem', color: '#9B59B6' }} />,
      name: "Operations & Vendor Management",
      experience: "7+ years experience in client relations and vendor management",
      specialization: "Ensures smooth communication and project delivery",
      skills: ["Client Relations", "Vendor Management", "Communication", "Negotiation"]
    },
    {
      id: 7,
      icon: <FaJava style={{ fontSize: '2rem', color: '#ED8B00' }} />,
      name: "Senior Java Developer",
      experience: "6+ years experience in enterprise Java development",
      specialization: "Expertise in Spring Boot, Hibernate, and Microservices architecture",
      skills: ["Java", "Spring Boot", "Hibernate", "Microservices", "Maven"]
    },
    {
      id: 8,
      icon: <FaPython style={{ fontSize: '2rem', color: '#3776AB' }} />,
      name: "Python & Data Science Specialist",
      experience: "5+ years experience in Python development and data analytics",
      specialization: "Machine Learning, Django, Flask, and data visualization",
      skills: ["Python", "Django", "Flask", "Pandas", "NumPy", "Scikit-learn"]
    }
  ];

  const filteredMembers = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => {
        if (filter === 'react') {
          return member.skills.some(skill => skill.toLowerCase().includes('react'));
        } else if (filter === 'rails') {
          return member.skills.some(skill => skill.toLowerCase().includes('rails'));
        } else if (filter === 'java') {
          return member.skills.some(skill => skill.toLowerCase().includes('java'));
        } else if (filter === 'python') {
          return member.skills.some(skill => skill.toLowerCase().includes('python'));
        } else if (filter === 'devops') {
          return member.skills.some(skill => 
            skill.toLowerCase().includes('aws') || 
            skill.toLowerCase().includes('docker') || 
            skill.toLowerCase().includes('kubernetes') ||
            skill.toLowerCase().includes('jenkins')
          );
        }
        return false;
      });

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
            <img src={logo} alt="Krishna's Technology Logo" style={{ width: '40px', height: '40px' }} />
            <Link to="/" className="logo">Krishna's Technology</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/work">How We Work</Link></li>
            <li><Link to="/why">Why Us</Link></li>
            <li><Link to="/team" className="active">Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
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
                className={`btn ${filter === 'java' ? 'btn-outline' : ''}`}
                onClick={() => setFilter('java')}
                style={{ margin: '5px' }}
              >
                Java Developers
              </button>
              <button 
                className={`btn ${filter === 'python' ? 'btn-outline' : ''}`}
                onClick={() => setFilter('python')}
                style={{ margin: '5px' }}
              >
                Python Developers
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
            
            <div className="about-image" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '15px',
              marginTop: '20px'
            }}>
              <div style={{ 
                gridColumn: 'span 2', 
                textAlign: 'center', 
                fontWeight: 'bold', 
                marginBottom: '15px',
                fontSize: '1.2rem'
              }}>
                Collaborative Team Culture
              </div>
              <div style={{ 
                height: '200px', 
                backgroundColor: '#3b82f6', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                Team Collaboration
              </div>
              <div style={{ 
                height: '200px', 
                backgroundColor: '#8b5cf6', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                Remote Work
              </div>
              <div style={{ 
                height: '200px', 
                backgroundColor: '#10b981', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                Knowledge Sharing
              </div>
              <div style={{ 
                height: '200px', 
                backgroundColor: '#f59e0b', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                Continuous Learning
              </div>
            </div>
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
    </>
  );
}

export default TeamPage;
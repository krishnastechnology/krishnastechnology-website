import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaGraduationCap, FaMedal, FaHandsHelping, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import '../App.css';
import logo from '../assets/logo.svg'; // Import the detailed logo

const CareerPage = () => {
  const [activeJob, setActiveJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    resume: null,
    coverLetter: '',
    jobId: '',
    jobTitle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Ruby on Rails Developer",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      icon: <SiRubyonrails style={{ fontSize: '2rem', color: '#CC0000' }} />,
      description: "Join our team to work on challenging projects with startups and enterprises. You'll be responsible for designing and implementing robust backend systems.",
      responsibilities: [
        "Design and implement scalable backend systems",
        "Collaborate with frontend developers and DevOps teams",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and mentor junior developers",
        "Optimize application performance and troubleshoot issues"
      ],
      requirements: [
        "5+ years of experience with Ruby on Rails",
        "Strong understanding of PostgreSQL and database design",
        "Experience with RESTful APIs and microservices",
        "Knowledge of testing frameworks (RSpec, Minitest)",
        "Familiarity with cloud platforms (AWS/GCP)"
      ]
    },
    {
      id: 2,
      title: "Full Stack JavaScript Developer",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      icon: <FaBriefcase style={{ fontSize: '2rem', color: '#3498DB' }} />,
      description: "Work on diverse projects using modern JavaScript frameworks. You'll be involved in both frontend and backend development.",
      responsibilities: [
        "Develop responsive frontend interfaces using React/Vue",
        "Build RESTful APIs with Node.js/Express",
        "Collaborate with UX/UI designers to implement design specifications",
        "Write unit tests and participate in code reviews",
        "Optimize applications for maximum speed and scalability"
      ],
      requirements: [
        "4+ years of experience with JavaScript/TypeScript",
        "Proficiency in React or Vue.js",
        "Experience with Node.js and Express",
        "Knowledge of MongoDB or PostgreSQL",
        "Understanding of modern build tools and workflows"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      icon: <FaHandsHelping style={{ fontSize: '2rem', color: '#9B59B6' }} />,
      description: "Help us maintain and improve our cloud infrastructure. You'll work with cutting-edge technologies to ensure reliability and scalability.",
      responsibilities: [
        "Manage cloud infrastructure on AWS/GCP",
        "Implement CI/CD pipelines",
        "Monitor system performance and troubleshoot issues",
        "Automate deployment processes",
        "Ensure security and compliance standards"
      ],
      requirements: [
        "5+ years of experience with AWS or GCP",
        "Proficiency in Docker and Kubernetes",
        "Experience with CI/CD tools (Jenkins, GitHub Actions)",
        "Knowledge of Infrastructure as Code (Terraform)",
        "Understanding of monitoring and logging tools"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaBriefcase />,
      title: "Flexible Work",
      description: "Work remotely from anywhere with flexible hours that suit your lifestyle."
    },
    {
      icon: <FaGraduationCap />,
      title: "Learning Budget",
      description: "$2000 annually for courses, conferences, and professional development."
    },
    {
      icon: <FaMedal />,
      title: "Growth Opportunities",
      description: "Regular performance reviews and clear pathways for advancement."
    },
    {
      icon: <FaHandsHelping />,
      title: "Supportive Culture",
      description: "Collaborative environment with mentorship and peer learning programs."
    }
  ];

  // Handle application form input changes
  const handleApplicationChange = (e) => {
    const { id, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { id } = e.target;
    const file = e.target.files[0];
    setApplicationData(prev => ({
      ...prev,
      [id]: file
    }));
  };

  // Handle job application submission
  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Application submitted:', applicationData);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Show success popup
    setShowSuccessPopup(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setApplicationData({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        resume: null,
        coverLetter: '',
        jobId: '',
        jobTitle: ''
      });
      setSubmitSuccess(false);
      setShowApplicationForm(false);
      setSelectedJob(null);
      setShowSuccessPopup(false);
    }, 3000);
  };

  // Open application form for a specific job
  const openApplicationForm = (job) => {
    setSelectedJob(job);
    setApplicationData(prev => ({
      ...prev,
      jobId: job.id,
      jobTitle: job.title
    }));
    setShowApplicationForm(true);
    setActiveJob(null);
  };

  // Close application form
  const closeApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    setSubmitSuccess(false);
  };

  return (
    <div className="career-page">
      {/* Success Popup Notification */}
      {showSuccessPopup && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#10b981',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          animation: 'slideInRight 0.3s ease-out'
        }}>
          <div style={{ 
            width: '30px', 
            height: '30px', 
            backgroundColor: 'white', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginRight: '12px'
          }}>
            <span style={{ color: '#10b981', fontSize: '18px', fontWeight: 'bold' }}>✓</span>
          </div>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '4px' }}>Application Submitted!</div>
            <div style={{ fontSize: '14px', opacity: '0.9' }}>We'll contact you soon.</div>
          </div>
        </div>
      )}

      {/* Header */}
      <header>
        <nav className="navbar">
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
            <li><Link to="/work">How We Work</Link></li>
            <li><Link to="/why">Why Us</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/careers" className="active">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            <button 
              onClick={closeApplicationForm}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f1f5f9'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              ×
            </button>
            
            <div style={{ padding: '30px' }}>
              <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: '#dbeafe', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}>
                  <FaBriefcase style={{ color: '#3b82f6', fontSize: '24px' }} />
                </div>
                <h2 style={{ marginBottom: '10px', color: '#1e293b' }}>Apply for {selectedJob?.title || 'Position'}</h2>
                <p style={{ color: '#64748b' }}>Fill in your details and upload your resume</p>
              </div>
              
              {submitSuccess ? (
                <div style={{ 
                  backgroundColor: '#dcfce7', 
                  color: '#10b981', 
                  padding: '25px', 
                  borderRadius: '12px', 
                  textAlign: 'center',
                  marginBottom: '20px',
                  border: '1px solid #bbf7d0'
                }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: '#10b981', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 15px'
                  }}>
                    <span style={{ color: 'white', fontSize: '24px' }}>✓</span>
                  </div>
                  <h3 style={{ marginBottom: '10px', color: '#10b981' }}>Application Submitted Successfully!</h3>
                  <p>We'll review your application and contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit}>
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Enter your full name" 
                      value={applicationData.name}
                      onChange={handleApplicationChange}
                      required 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '16px',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Enter your email" 
                      value={applicationData.email}
                      onChange={handleApplicationChange}
                      required 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '16px',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      value={applicationData.phone}
                      onChange={handleApplicationChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '16px',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="linkedin" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>LinkedIn Profile</label>
                    <input 
                      type="url" 
                      id="linkedin" 
                      placeholder="https://linkedin.com/in/yourprofile" 
                      value={applicationData.linkedin}
                      onChange={handleApplicationChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '16px',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="github" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>GitHub Profile</label>
                    <input 
                      type="url" 
                      id="github" 
                      placeholder="https://github.com/yourusername" 
                      value={applicationData.github}
                      onChange={handleApplicationChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '16px',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="resume" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>Resume/CV *</label>
                    <input 
                      type="file" 
                      id="resume" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '16px',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        boxSizing: 'border-box',
                        backgroundColor: '#f8fafc'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                    <small style={{ color: '#94a3b8', fontSize: '14px' }}>Upload your resume in PDF or Word format</small>
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '25px' }}>
                    <label htmlFor="coverLetter" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>Cover Letter</label>
                    <textarea 
                      id="coverLetter" 
                      placeholder="Tell us why you're interested in this position and what makes you a great fit" 
                      value={applicationData.coverLetter}
                      onChange={handleApplicationChange}
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '16px',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        boxSizing: 'border-box',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    ></textarea>
                  </div>
                  
                  <input 
                    type="hidden" 
                    id="jobId" 
                    value={applicationData.jobId}
                  />
                  
                  <input 
                    type="hidden" 
                    id="jobTitle" 
                    value={applicationData.jobTitle}
                  />
                  
                  <button 
                    type="submit" 
                    className="btn" 
                    disabled={isSubmitting}
                    style={{ 
                      width: '100%', 
                      padding: '14px', 
                      fontSize: '16px', 
                      fontWeight: '600',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: isSubmitting ? '#93c5fd' : '#3b82f6',
                      color: 'white',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseOver={!isSubmitting ? (e) => e.target.style.backgroundColor = '#2563eb' : undefined}
                    onMouseOut={!isSubmitting ? (e) => e.target.style.backgroundColor = '#3b82f6' : undefined}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Build Your Career With Us</h1>
            <p className="hero-subtitle">
              Join a team of passionate developers working with innovative startups and forward-thinking enterprises
            </p>
            <div className="tech-stack">
              <span className="tech-item">Ruby on Rails</span>
              <span className="tech-item">React</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-item">AWS</span>
              <span className="tech-item">DevOps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Join Krishna's Technology</h2>
            <p className="section-description">
              We offer more than just a job – we provide an environment where you can grow professionally while making a real impact.
            </p>
          </div>
          
          <div className="reasons-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="reason-card">
                <div className="reason-icon">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Current Openings</h2>
            <p className="section-description">
              Explore opportunities to join our team of talented developers and engineers
            </p>
          </div>
          
          <div className="services-grid">
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                className={`service-card ${activeJob === job.id ? 'active' : ''}`}
                onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-icon">
                  {job.icon}
                </div>
                <h3>{job.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{job.location}</span>
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{job.type}</span>
                </div>
                <p>{job.description}</p>
                
                {activeJob === job.id && (
                  <div style={{ marginTop: '20px', borderTop: '1px solid #1e293b', paddingTop: '20px' }}>
                    <h4 style={{ marginBottom: '10px' }}>Responsibilities:</h4>
                    <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} style={{ marginBottom: '8px' }}>{resp}</li>
                      ))}
                    </ul>
                    
                    <h4 style={{ marginBottom: '10px' }}>Requirements:</h4>
                    <ul style={{ paddingLeft: '20px' }}>
                      {job.requirements.map((req, idx) => (
                        <li key={idx} style={{ marginBottom: '8px' }}>{req}</li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openApplicationForm(job);
                      }}
                      className="btn" 
                      style={{ marginTop: '20px' }}
                    >
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Company Section */}
      <section className="why-choose-us-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Life at Krishna's Technology</h2>
            <p className="section-description">
              We foster a culture of collaboration, innovation, and continuous learning
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                At Krishna's Technology, we believe that happy developers create exceptional products. 
                Our remote-first culture allows team members to work from anywhere while staying connected 
                through regular virtual meetups and annual retreats.
              </p>
              <p>
                We invest in our team's growth through educational stipends, conference attendance, 
                and dedicated learning time. Our collaborative environment encourages knowledge sharing 
                and peer mentoring across all experience levels.
              </p>
              <p>
                We value diversity and inclusion, creating an environment where everyone can contribute 
                their unique perspectives to solve complex technical challenges for our clients.
              </p>
            </div>
            
            <div className="about-image" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              minHeight: '300px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💻🌍</div>
                <h3>Remote Work Culture</h3>
                <p style={{ marginTop: '10px' }}>
                  Collaborate with talented developers worldwide in our supportive community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>Ready to Join Our Team?</h2>
            <p style={{ color: '#bfdbfe', fontSize: '1.2rem' }}>
              Send us your resume and let's discuss how you can contribute to our mission
            </p>
            <button 
              onClick={() => {
                setSelectedJob(null);
                setApplicationData(prev => ({
                  ...prev,
                  jobId: '',
                  jobTitle: 'General Application'
                }));
                setShowApplicationForm(true);
              }}
              className="btn" 
              style={{ 
                backgroundColor: 'white', 
                color: '#2563eb', 
                marginTop: '20px',
                fontWeight: '600'
              }}
            >
              Apply for Position
            </button>
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
                Building the future with talented developers and innovative technology solutions.
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
    </div>
  );
};

export default CareerPage;
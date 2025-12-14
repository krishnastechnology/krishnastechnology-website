import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaClock, FaBuilding, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../App.css';
import logo from '../assets/logo.svg'; // Import the detailed logo

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirements: '',
    developers: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('form');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Show success popup
    setShowSuccessPopup(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        requirements: '',
        developers: ''
      });
      setSubmitSuccess(false);
      setShowSuccessPopup(false);
    }, 3000);
  };

  return (
    <>
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
            <div style={{ fontWeight: '600', marginBottom: '4px' }}>Message Sent!</div>
            <div style={{ fontSize: '14px', opacity: '0.9' }}>We'll contact you soon.</div>
          </div>
        </div>
      )}

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
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </header>

      {/* Tab Navigation */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
              <button 
                className={`btn ${activeTab === 'form' ? 'btn-outline' : ''}`}
                onClick={() => setActiveTab('form')}
                style={{ marginRight: '10px' }}
              >
                Contact Form
              </button>
              <button 
                className={`btn ${activeTab === 'info' ? 'btn-outline' : ''}`}
                onClick={() => setActiveTab('info')}
              >
                Contact Info
              </button>
            </div>
          </div>
          
          {activeTab === 'form' ? (
            <div className="contact-container">
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p>
                  Ready to augment your team with senior developers? Reach out to us through any of the following channels.
                </p>
                
                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-text">
                      <h3>Email</h3>
                      <p>krishnatechnology001@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-detail">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-text">
                      <h3>WhatsApp</h3>
                      <p>+91 XXXXXXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="contact-detail">
                    <div className="contact-icon">
                      <FaClock />
                    </div>
                    <div className="contact-text">
                      <h3>Response Time</h3>
                      <p>Within 2 hours during business hours</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '30px' }}>
                  <h3>Our Process</h3>
                  <p>
                    Send us your requirements and we'll connect you with suitable developers within 24 hours.
                  </p>
                </div>
              </div>
              
              <div className="contact-form">
                <h2>Send Us a Message</h2>
                {submitSuccess ? (
                  <div style={{ 
                    backgroundColor: '#dcfce7', 
                    color: '#10b981', 
                    padding: '20px', 
                    borderRadius: '8px', 
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}>
                    <h3>Message Sent Successfully!</h3>
                    <p>We'll contact you within 2 hours during business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter your name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter your email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        placeholder="Enter your company name" 
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="requirements">Project Requirements</label>
                      <textarea 
                        id="requirements" 
                        placeholder="Tell us about your project requirements, timeline, and technical needs" 
                        value={formData.requirements}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="developers">Number of Developers Needed</label>
                      <select 
                        id="developers" 
                        value={formData.developers}
                        onChange={handleInputChange}
                      >
                        <option value="">Select number</option>
                        <option value="1">1 Developer</option>
                        <option value="2">2 Developers</option>
                        <option value="3">3 Developers</option>
                        <option value="4+">4+ Developers</option>
                      </select>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn" 
                      disabled={isSubmitting}
                      style={{ width: '100%' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          ) : (
            <div className="contact-container">
              <div className="contact-info">
                <h2>Get In Touch</h2>
                <p>
                  We're here to help you find the right developers for your project. 
                  Reach out through any of our channels.
                </p>
                
                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-text">
                      <h3>Email Us</h3>
                      <p>krishnatechnology001@gmail.com</p>
                      <p>For general inquiries and project discussions</p>
                    </div>
                  </div>
                  
                  <div className="contact-detail">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-text">
                      <h3>WhatsApp</h3>
                      <p>+91 XXXXXXXXXX</p>
                      <p>For urgent matters and quick responses</p>
                    </div>
                  </div>
                  
                  <div className="contact-detail">
                    <div className="contact-icon">
                      <FaClock />
                    </div>
                    <div className="contact-text">
                      <h3>Business Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-form">
                <h2>Office Location</h2>
                <div style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                  padding: '30px',
                  borderRadius: '12px',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <div className="contact-icon" style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaBuilding />
                  </div>
                  <h3 style={{ 
                    fontSize: '1.8rem',
                    marginBottom: '15px',
                    fontWeight: '600'
                  }}>Our Office</h3>
                  <div style={{ 
                    fontSize: '1.1rem',
                    lineHeight: '1.6'
                  }}>
                    <p style={{ margin: '5px 0' }}><strong>Krishna's Technology Pvt. Ltd.</strong></p>
                    <p style={{ margin: '5px 0' }}>123 Business Park, Tech Street</p>
                    <p style={{ margin: '5px 0' }}>Bangalore, Karnataka 560001</p>
                    <p style={{ margin: '5px 0' }}>India</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>Ready to Get Started?</h2>
            <p style={{ color: '#bfdbfe', fontSize: '1.2rem' }}>
              Connect with our experts to discuss your project requirements.
            </p>
            <Link to="/contact" className="btn" style={{ backgroundColor: 'white', color: '#2563eb', marginTop: '20px' }}>Talk to Our Experts</Link>
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

export default ContactPage;
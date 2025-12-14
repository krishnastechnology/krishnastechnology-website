import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaClock, FaBuilding, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../App.css';

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
    }, 3000);
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
                      <p>contact@krishnastechnology.com</p>
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
                      <p>contact@krishnastechnology.com</p>
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
                  backgroundColor: '#f1f5f9',
                  padding: '20px',
                  borderRadius: '8px',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <div className="contact-icon" style={{ fontSize: '2rem', marginBottom: '15px' }}>
                    <FaBuilding />
                  </div>
                  <h3>Our Office</h3>
                  <p>Krishna's Technology Pvt. Ltd.</p>
                  <p>123 Business Park, Tech Street</p>
                  <p>Bangalore, Karnataka 560001</p>
                  <p>India</p>
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

export default ContactPage;
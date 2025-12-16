import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="mobile-menu-header">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '10px'
          }}>
            <img src={logo} alt="Krishna Technology Logo" style={{ width: '40px', height: '40px' }} />
            <Link to="/" className="logo" onClick={onClose}>Krishna Technology</Link>
          </div>
          <button className="mobile-menu-close" onClick={onClose}>
            <FaTimes size={24} />
          </button>
        </div>
        
        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={onClose}>Home</Link></li>
          <li><Link to="/about" onClick={onClose}>About</Link></li>
          <li><Link to="/services" onClick={onClose}>Services</Link></li>
          <li><Link to="/work" onClick={onClose}>How We Work</Link></li>
          <li><Link to="/why" onClick={onClose}>Why Us</Link></li>
          <li><Link to="/team" onClick={onClose}>Team</Link></li>
          <li><Link to="/careers" onClick={onClose}>Careers</Link></li>
          <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
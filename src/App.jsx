import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import WhyUsPage from './pages/WhyUsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import IndustriesPage from './pages/IndustriesPage'; // Added Industries page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<HowWeWorkPage />} />
          <Route path="/why" element={<WhyUsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/industries" element={<IndustriesPage />} /> {/* Added Industries route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
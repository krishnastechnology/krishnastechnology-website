import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    "5+ years experienced developers",
    "Flexible monthly contracts",
    "No long-term lock-in",
    "Fast onboarding",
    "Direct communication"
  ];

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2>Why Choose Us</h2>
        <ul className="reasons-list">
          {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
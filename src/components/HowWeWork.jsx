import React from 'react';

const HowWeWork = () => {
  const steps = [
    "Requirement Discussion",
    "Share Developer Profiles",
    "Client Interview",
    "Quick Onboarding",
    "Monthly Billing"
  ];

  return (
    <section className="how-we-work-section">
      <div className="container">
        <h2>How We Work</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-text">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
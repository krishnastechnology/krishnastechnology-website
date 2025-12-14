import React from 'react';

const Services = () => {
  const servicesData = [
    {
      title: "Ruby on Rails Development",
      details: [
        "Senior ROR Developers (5+ yrs)",
        "API, Microservices, Background jobs"
      ]
    },
    {
      title: "MERN Stack Development",
      details: [
        "React, Node, MongoDB",
        "Full-stack engineers"
      ]
    },
    {
      title: "Full Stack Developers",
      details: [
        "End-to-end product development"
      ]
    },
    {
      title: "DevOps Support",
      details: [
        "AWS, Docker, CI/CD"
      ]
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <ul>
                {service.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
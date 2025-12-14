import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      role: "Tech Lead",
      experience: "4+ years (Backend / ROR)"
    },
    {
      role: "Senior MERN Developer"
    },
    {
      role: "Operations & Vendor Management"
    }
  ];

  return (
    <section className="our-team-section">
      <div className="container">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <h3>{member.role}</h3>
              {member.experience && <p>{member.experience}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
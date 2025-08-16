import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import "./Team.css";

const teamMembers = [
  {
    name: "Mr Pradip Vaidya",
    position: "Managing Director",
    img: " https://png.pngtree.com/background/20230403/original/pngtree-side-profile-of-old-man-vector-picture-image_2278848.jpg", // Replace with your image URL
    message: "By reducing carbon emissions, We ensure cleaner air, better health, longer and safer future for all.",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
 
  {
    name: "Sarah Johnson",
    position: "Director",
    img: "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg", // Replace with your image URL
    message: "We believe in empowering people and creating impactful solutions.",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2 className="team-title">Our Leadership</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-img-wrapper">
                <img src={member.img} alt={member.name} className="team-img" />
                <div className="team-overlay">
                  <a href={member.facebook} target="_blank" rel="noreferrer">
                    <Facebook />
                  </a>
                  <a href={member.instagram} target="_blank" rel="noreferrer">
                    <Instagram />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin />
                  </a>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-message">"{member.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

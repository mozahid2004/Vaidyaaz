import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import "./Team.css";
import MadamImg from "../assets/Images/Madam.jpg"
import VaidyaIImg from "../assets/Images/Vaidya.jpg"

const teamMembers = [
  {
    name: "Mr Pradip Vaidya",
    position: "Managing Director",
    img: VaidyaIImg,
    message: "By reducing carbon emissions, We ensure cleaner air, better health, longer and safer future for all.",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Ashwini Wahane",
    position: "Director",
    img: MadamImg,
    message: "We believe in empowering people and creating impactful solutions.",
    facebook: "#",
    instagram: "https://www.instagram.com/fempreneur_01/",
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

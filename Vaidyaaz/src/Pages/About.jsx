import React from 'react';
import VisionMission from './VisionMission.jsx';
import './About.css'; // we'll write CSS here
import Team from './Team.jsx';

function About() {
  return (
    <>
      {/* Top Banner */}
      <section className="about-banner">
        <div className="about-banner-content">
          <h1>#About Us</h1>
        </div>
      </section>

      {/* About Company */}
      <section className="about-company">
        <div className="container">
          <h2>About Viadyazz</h2>
          <p>
            Viadyazz is a forward-thinking technology company dedicated to delivering 
            innovative, high-quality digital solutions. Since its inception, Viadyazz 
            has been committed to transforming ideas into reality through cutting-edge 
            web development, creative design, and strategic digital marketing.
          </p>
          <p>
            Our journey began with a vision to bridge the gap between businesses and 
            technology, helping organizations of all sizes thrive in the digital 
            landscape. Today, we are proud to serve a diverse clientele with 
            customized, scalable, and results-driven solutions.
          </p>
        </div>

        <div className="container">
          <h2>Our Story - Medical Representative To Managing Director</h2>
          <p>A Man born in Vidarbha & brought up in Mumbai started his career in the Marketing field as Marketing Representative & now after his consistent Research & Development of Energy Saving coatings for industries, he is The Managing Director of two companies: Espee Coatings Pvt Ltd & Vaidyaaz Corporation Pvt Ltd. With the help of these "ENCON Coatings", industries have saved their crores and crores of rupees every year.</p>
        </div>
      </section>
       <hr  />
      {/* Vision & Mission Section */}
      <VisionMission />
      <hr/>
      <Team/>
    </>
  );
}

export default About;

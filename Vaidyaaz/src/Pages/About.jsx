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
          <h2>About Viadyaaz</h2>
          <p>
          Vaidyaaz Corporation Pvt. Ltd. is a pioneering company dedicated to energy-saving industrial coatings. Since its inception, Vaidyaaz has been committed to sustainability, innovation, and cost-efficiency, providing industries with advanced coating solutions that not only protect equipment but also deliver significant energy savings.
          </p>
          <p>
          With years of research and development, Vaidyaaz has introduced its flagship product line – ENCON Coatings – a breakthrough in industrial coating technology. These coatings are designed to reduce heat loss, improve efficiency, and cut down energy costs, enabling industries to save crores of rupees every year while contributing to a cleaner and greener environment.
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

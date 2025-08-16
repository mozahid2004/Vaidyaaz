import React from "react";
import { FaBullseye, FaLightbulb, FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";
import "./VisionMission.css";

const data = [
  {
    title: "MISSION",
    icon: <FaBullseye />,
    color: "#FF5722",
    description:
      "We are focusing on enhancement of Productivity and Quality along with Reduction in Carbon Emissions for our Nation and the World by 2050, to be the first choice of Petroleum & Petrochemical industries for Saving Energy and Preserving the Environment.",
  },
  {
    title: "VISION",
    icon: <FaLightbulb />,
    color: "#00BCD4",
    description:
      "Our Vision is to be a World-class Energy & Fuel Saving Company known for Reducing Carbon Emission with our Innovative Technology services across Domestic & International Markets.",
  },
  {
    title: "VALUES",
    icon: <FaBalanceScale />,
    color: "#FFC107",
    description:
      "We are committed to delivering innovative and sustainable solutions that enhance productivity, ensure the highest quality, and minimize carbon emissions. We prioritize environmental stewardship, energy efficiency, and long-term value for our clients, employees, and society, striving to be a trusted partner in shaping a greener and more sustainable future.",
  },
];

const MissionVisionValues = () => {
  return (
    <section className="mv-section">
      <div className="mv-container">
        {data.map((item, index) => (
          <motion.div
            className="mv-row"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mv-left" style={{ backgroundColor: item.color }}>
              <span className="mv-left-title">{item.title}</span>
            </div>
            <div className="mv-right">
              <div className="mv-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              {/* <h3>{item.title}</h3> */}
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionValues;

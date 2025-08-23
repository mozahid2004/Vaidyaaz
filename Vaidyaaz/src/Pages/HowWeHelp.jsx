import React from "react";
import { useNavigate } from "react-router-dom";
import "./HowWeHelp.css";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Furnace from "../assets/Images/Furnace.jpg";
import Oven from "../assets/Images/Oven.jpg";
import RadiantTube from "../assets/Images/Radiant Tubes.jpg";
import Boiler from "../assets/Images/Boiler.jpg";

const coatings = [
  {
    title: "Vaidyaaz ENCON Coating for Furnace",
    description:
      "Our advanced furnace coating significantly improves heat transfer, reduces energy usage, and protects surfaces from wear and tear — making your operations more sustainable and cost-efficient.",
    points: [
      "Increases heat transfer efficiency",
      "Reduces fuel consumption by up to 10–15%",
      "Lowers carbon emissions significantly",
      "Extends furnace life by preventing surface damage",
    ],
    link: "/products",
    image: Furnace,
    label: "FURNACE",
  },
  {
    title: "Vaidyaaz ENCON Coating for Radiant Tubes",
    description:
      "Specially formulated to enhance radiant heat absorption and protect against scaling, our coating keeps your radiant tubes performing at peak efficiency for longer periods.",
    points: [
      "Enhances radiant heat absorption",
      "Prevents oxidation and scaling",
      "Reduces maintenance frequency",
      "Improves operational reliability",
    ],
    link: "/products",
    image: RadiantTube,
    label: "RADIANT TUBES",
  },
  {
    title: "Vaidyaaz ENCON Coating for Boiler",
    description:
      "Improve boiler performance and reduce environmental impact with our coating, designed to minimize heat loss and extend service life while lowering operational costs.",
    points: [
      "Minimizes heat loss in boiler walls",
      "Cuts fuel costs through higher efficiency",
      "Reduces greenhouse gas emissions",
      "Prolongs boiler service life",
    ],
    link: "/products",
    image: Boiler,
    label: "BOILER",
  },
  {
    title: "Vaidyaaz ENCON Coating for Oven",
    description:
      "Our oven coating ensures consistent heating quality while reducing downtime and protecting against high-temperature damage — perfect for improving production reliability.",
    points: [
      "Optimizes heating process",
      "Prevents thermal degradation of surfaces",
      "Reduces operational downtime",
      "Improves product quality consistency",
    ],
    link: "/products",
    image: Oven,
    label: "OVEN",
  },
];

const HowWeHelp = () => {
  const navigate = useNavigate();

  return (
    <section className="how-we-help">
      <div className="container">
        {/* Heading */}
        <h2>How We Help ??</h2>

        {/* Intro */}
        <motion.p
          className="intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          At <strong>Vaidyaaz</strong>, our ENCON Coating solutions help save
          fuel, lower emissions, and extend equipment life — combining
          environmental responsibility with cost savings.
        </motion.p>

        {/* Coating Rows */}
        {coatings.map((item, index) => (
          <div
            key={index}
            className={`coating-row ${index % 2 === 1 ? "reverse" : ""}`}
          >
            {/* Text block with scroll animation */}
            <motion.div
              className="text"
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3>{item.title}</h3>
              <p className="desc">{item.description}</p>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>
                    <CheckCircle2 className="point-icon" /> {point}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate(item.link)}>
                View Product <ArrowRight className="BtnArrow" />
              </button>
            </motion.div>

            {/* Image block with scroll + hover effect */}
            <motion.div
              className="image-placeholder"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} className="coating-image" />
                <div className="overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            </motion.div>


          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeHelp;

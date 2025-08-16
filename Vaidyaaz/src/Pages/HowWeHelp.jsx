import React from "react";
import { useNavigate } from "react-router-dom";
import "./HowWeHelp.css";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    image:
      "https://encon.co.in/wp-content/uploads/2025/06/Oxy-Fuel-Refractory-Protection-to-Reduce-Furnace-Wear-600x400.jpg",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Industrial_furnace.jpg/1200px-Industrial_furnace.jpg",
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNUD9i6QDyO0au1pj1hnwv6uzN6VEwiPCMg&s",
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
    image:
      "https://images.unsplash.com/photo-1613970351372-9804e380bd09?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const HowWeHelp = () => {
  const navigate = useNavigate();

  return (
    <section className="how-we-help">
      <div className="container">
        <h2>How We Help ??</h2>
        <p className="intro">
          At <strong>Vaidyaaz</strong>, our ENCON Coating solutions help save
          fuel, lower emissions, and extend equipment life — combining
          environmental responsibility with cost savings.
        </p>

        {coatings.map((item, index) => (
          <div
            key={index}
            className={`coating-row ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="text">
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
            </div>
            <div className="image-placeholder">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeHelp;

import React, { useState } from "react";
import "./Product.css";

const productData = [
  {
    id: 1,
    title: "Vaidyaaz ENCON Coating for Furnace",
    heading: "Furnace ENCON Coating",
    description: `The ENCON coating improves furnace efficiency by increasing thermal emissivity and decreasing thermal conductivity, which in turn reduces carbon emissions and fuel consumption. Specifically, the coating's high emissivity (above 0.89) enhances heat radiation from the furnace, while the reduced thermal conductivity (10-15% decrease) minimizes heat loss through the furnace walls. This leads to more efficient heat utilization within the furnace, resulting in lower fuel requirements and consequently, reduced carbon emissions. 
Here's a more detailed explanation:
Thermal Emissivity:
Emissivity is a measure of how well a surface radiates heat. A higher emissivity means the surface emits more heat as thermal radiation. The ENCON coating's high emissivity (above 0.89) means it efficiently radiates heat back into the furnace, keeping more heat inside and reducing the need for external heat input. 
Thermal Conductivity:
Thermal conductivity is a measure of how well a material conducts heat. A lower thermal conductivity means the material is a better insulator, reducing heat transfer through it. The ENCON coating's reduced thermal conductivity (10-15% decrease) means less heat is lost through the furnace walls, further improving efficiency. 
Reduced Carbon Emissions:
By improving the efficiency of the furnace, the ENCON coating reduces the amount of fuel required to maintain the desired temperature. This, in turn, leads to a reduction in carbon dioxide (CO2) emissions, a major contributor to climate change. 
Fuel Savings:
The reduced fuel consumption directly translates into cost savings for the furnace operator. 
Application in Furnaces:
The ENCON coating is particularly effective in furnaces where heat transfer is a critical factor, such as in steel plants, forging units, and aluminum melting and heat treatment facilities, according to Encon Thermal Engineers. 
ENCON's ESCO Model:
Encon Thermal Engineers also offers an Energy Service Company (ESCO) model, where they finance and implement these energy-saving technologies, allowing industries to reduce fuel consumption and carbon emissions without upfront capital investment. `,
    images: [
      { label: "Furnace Uncoated", src: "https://media.istockphoto.com/id/1255605108/photo/large-bowl-of-molten-metal-at-a-steel-mill-steel-production.jpg?s=612x612&w=0&k=20&c=xYbIB_QzntBdRaRq3DtRdFsj-BDGy2_glZVn0fA6oIA=" },
      { label: "Cross section of Uncoated Refractory surface of Furnaces", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTI1yXHB2OLOPRlJUQWcPZ9-nz_jgwyfuI4g&s" },
      { label: "Furnace Coated", src: "https://images.pexels.com/photos/3361230/pexels-photo-3361230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
      { label: "Cross section of Coated Refractory surface of Furnace", src: "https://path/to/furnace-structure-illustration.jpg" }
    ],
    videos: [
      { label: "Furnace Coating Process", src: "https://static.vecteezy.com/system/resources/previews/057/471/043/mp4/a-fire-is-burning-in-a-furnace-video.mp4" }
    ]
  },
  {
    id: 2,
    title: "Vaidyaaz ENCON Coating for Radiant Tubes",
    heading: "Radiant Tube ENCON Coating",
    description: `Our coating for radiant tubes increases heat transfer efficiency and enhances tube life.`,
    images: [
      { label: "Radiant Tube Before", src: "/images/radiant-before.jpg" },
      { label: "Radiant Tube After", src: "/images/radiant-after.jpg" }
    ],
    videos: [
      { label: "Radiant Tube Coating Demo", src: "/videos/radiant-demo.mp4" }
    ]
  },
  {
    id: 3,
    title: "Vaidyaaz ENCON Coating for Boiler",
    heading: "Boiler ENCON Coating",
    description: `Specialized coating for boilers to improve efficiency and reduce fuel consumption.`,
    images: [
      { label: "Boiler Before", src: "/images/boiler-before.jpg" },
      { label: "Boiler After", src: "/images/boiler-after.jpg" }
    ],
    videos: [
      { label: "Boiler Coating Overview", src: "/videos/boiler-coating.mp4" }
    ]
  },
  {
    id: 4,
    title: "Vaidyaaz ENCON Coating for Oven",
    heading: "Oven ENCON Coating",
    description: `Our coating for ovens enhances heating uniformity and reduces operating costs.`,
    images: [
      { label: "Oven Before", src: "/images/oven-before.jpg" },
      { label: "Oven After", src: "/images/oven-after.jpg" }
    ],
    videos: [
      { label: "Oven Coating Process", src: "/videos/oven-process.mp4" }
    ]
  }
];

const Product = () => {
  const [selected, setSelected] = useState(productData[0]);

  return (
    <div className="product-page">
      {/* Left Menu */}
      <div className="product-menu">
        {productData.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${selected.id === item.id ? "active" : ""}`}
            onClick={() => setSelected(item)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* Right Content */}
      <div className="product-content">
        <h2>{selected.heading}</h2>
        <p>{selected.description}</p>

        <div className="media-section">
          {selected.images.map((img, index) => (
            <div key={index} className="media-item">
              <h4>{img.label}</h4>
              <img src={img.src} alt={img.label} />
            </div>
          ))}

          {selected.videos.map((vid, index) => (
            <div key={index} className="media-item">
              <h4>{vid.label}</h4>
              <video  src={vid.src} controls />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

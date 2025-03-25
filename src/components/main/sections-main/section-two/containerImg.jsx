import React from "react";
import homeInterior from "../../../../assets/interiorcasa.webp";
import modularKitchen from "../../../../assets/cocinamodular.jpg";
import modularForniture from "../../../../assets/forniture.jpg";
import modularDecoration from "../../../../assets/decoracion.webp";
import "./style-two.css";

const images = [
  { src: homeInterior, text: "Full Home Interiors" },
  { src: modularKitchen, text: "Modular Kitchen" },
  { src: modularForniture, text: "Modular Furniture" },
  { src: modularDecoration, text: "Furniture & Decor" },
];

const ContainerImg = ({inView}) => {
  return (
    <div className="div_container-images">
      {images.map((image, index) => (
    <div key={index} className={`div_cards-image ${inView ? "animar" : ""}`}>
    <img  src={image.src} alt={image.text} />
    <p>{image.text}</p>
    <div className="shadow"></div>
  </div>
      ))}
    </div>
  );
};



export default ContainerImg;


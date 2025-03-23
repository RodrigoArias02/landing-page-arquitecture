import React from "react";
import { useInView } from "react-intersection-observer";
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
const InViewImage = ({ src, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activa la animación una vez
    threshold: 0.3, // El 30% del contenedor debe estar visible para activar la animación
  });

  console.log(inView);
  return (
    <div
      ref={ref}
      className={`div_cards-image ${inView ? "animar" : ""}`}
    >
      <img src={src} alt={text} />
      <p>{text}</p>
      <div className="shadow"></div>
    </div>
  );
};

const ContainerImg = () => {
  return (
    <div className="div_container-images">
      {images.map((image, index) => (
        <InViewImage key={index} src={image.src} text={image.text} />
      ))}
    </div>
  );
};



export default ContainerImg;


import "./style-four.css";
import { useState, useEffect, useRef } from "react";
import image1 from "../../../../assets/galeria1.jpg";
import image2 from "../../../../assets/fondo.webp";
import image3 from "../../../../assets/galeria3.jpg";
import image4 from "../../../../assets/galeria4.jpg";
import image5 from "../../../../assets/galeria5.jpg";
import image6 from "../../../../assets/galeria6.jpg";

const FourSection = () => {
  const images = [
    { src: image1, alt: "Image 1", span: "" },
    { src: image2, alt: "Image 2", span: "wide" }, // Ocupa 2 columnas
    { src: image3, alt: "Image 3", span: "" },
    { src: image4, alt: "Image 4", span: "wide" }, // Ocupa 2 filas
    { src: image5, alt: "Image 5", span: "" },
    { src: image6, alt: "Image 6", span: "" },
  ];

  const [width, setWidth] = useState(0);
  const containerRef = useRef(null); //inicia en null

  useEffect(() => { //se ejecuta despues de que el componente se monta asi obtiene un valor del container
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    };

    // Esperar a que el componente se monte y luego actualizar el width ejecutando el updateWidth
    setTimeout(updateWidth, 0);

    window.addEventListener("resize", updateWidth); //ejecuta la funcion cada vez que cambia el tamaño de la ventana
    return () => window.removeEventListener("resize", updateWidth); //remueve el evento, sino cada vez que el componente se renderice se crearía un nuevo listener sin eliminar el anterior, lo que generaría un comportamiento no deseado y desperdicio de memoria.
  }, []);

  useEffect(() => {
    const figures = document.querySelectorAll(".gallery-item");
    figures.forEach((fig) => {
      fig.style.height = `${(width - 30) / 4}px`;
      if(fig.classList.contains("wide")){
        fig.style.width = `${((width - 30) / 4)*2}px`;
       
      }else{
        fig.style.width = `${(width - 30) / 4}px`;
      }
     
    });
  }, [width]);

  return (
    <section className="section-four">
      <header className="header-images">
      <article>
      <h2>Inspirations for Home Interior Designs</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro
          numquam vel autem...
        </p>
      </article>
      <a href="">View All &#10095; </a>
      </header>

      <div id="container" className="flex-images" ref={containerRef}>
        {images.map((img, index) => (
          <figure key={index} className={`gallery-item ${img.span}`}>
            <img src={img.src} alt={img.alt} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default FourSection;

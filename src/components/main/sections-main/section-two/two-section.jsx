import "./style-two.css";
import { useInView } from "react-intersection-observer";
import ContainerImg from "./containerImg.jsx";
import ContainerArticles from "./containerArticles.jsx";
import ContainerTexts from "./containerText.jsx";
const TwoSection = () => {
    // Hook de intersection observer
    const { ref, inView } = useInView({
      triggerOnce: true, // Solo activa la animación una vez
      threshold: 0.2, // El 20% del contenedor debe estar visible para activar la animación
    });
  return (
    <section id="twoSectionId" className="two-section"  ref={ref}>
      <ContainerArticles 
        inView={inView} />
      <ContainerImg inView={inView} />
      <ContainerTexts />
    </section>
  );
};

export default TwoSection;

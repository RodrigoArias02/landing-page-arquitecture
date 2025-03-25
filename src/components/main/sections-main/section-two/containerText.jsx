import { useInView } from "react-intersection-observer";
const ContainerTexts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activa la animación una vez
    threshold: 1, // El 80% del contenedor debe estar visible para activar la animación
  });
  console.log(inView);
  return (
    <article className="article_text" ref={ref}>
      {inView && (
        <>
          <header className="header_text animar-derecha"  >
            <span className="span_text">
              <h3>Categories</h3>
              <h4>Architecture Interior</h4>
            </span>
          </header>
          <section className="content_text animar-izquierda" >
            <p>
              La arquitectura de interiores es una disciplina que fusiona el
              diseño arquitectónico con la decoración para transformar los
              espacios en entornos funcionales, estéticos y armoniosos. Su
              propósito no es solo embellecer, sino también optimizar el uso del
              espacio, garantizando comodidad, eficiencia y una atmósfera que se
              adapte a las necesidades y preferencias de quienes lo habitan.
            </p>
            <p>
              Este campo abarca diversos aspectos fundamentales, como la
              distribución del espacio, asegurando una organización fluida y
              práctica; la iluminación, que influye en la percepción y el estado
              de ánimo dentro del ambiente; y la selección de materiales y
              texturas, que aportan personalidad y carácter a cada diseño.
              Además, integra elementos decorativos y mobiliario con criterios
              ergonómicos y estéticos, equilibrando la funcionalidad con el
              atractivo visual.
            </p>
          </section>
        </>
      )}
    </article>
  );
};

export default ContainerTexts;

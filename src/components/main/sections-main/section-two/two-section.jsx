import "./style-two.css";
import homeInterior from "../../../../assets/interiorcasa.webp";
import modularKitchen from "../../../../assets/cocinamodular.jpg";
import modularForniture from "../../../../assets/forniture.jpg";
import modularDecoration from "../../../../assets/decoracion.webp";
const TwoSection = () => {
  return (
    <section id="twoSectionId" className="two-section">
      <div className="div_container-articles">
        <article>
          <h3>5k</h3>
          <p>Completed proyects</p>
        </article>
        <article>
          <h3>20</h3>
          <p>Years of works</p>
        </article>
        <article>
          <h3>9k</h3>
          <p>Satisfied clients</p>
        </article>
        <article>
          <h3>99%</h3>
          <p>Happy rate</p>
        </article>
      </div>
      <div className="div_container-images">
        <div className="div_cards-image">
          <img src={homeInterior} alt="" />
          <p>Full Home Interiors</p>
          <div className="shadow"></div>
        </div>
        <div className="div_cards-image">
          <img src={modularKitchen} alt="" />
          <p>Modular Kitchen</p>
          <div className="shadow"></div>
        </div>
        <div className="div_cards-image">
          <img src={modularForniture} alt="" />
          <p>Modular Furniture</p>
          <div className="shadow"></div>
        </div>
        <div className="div_cards-image">
          <img src={modularDecoration} alt="" />
          <p>Furniture & decor</p>
          <div className="shadow"></div>
        </div>
      </div>
      <article className="article_text">
        <header className="header_text">
            <span className="span_text">          
                <h3>Categories</h3>
            <h4>Architecture Interior</h4>
            </span>

        </header>
        <section className="content_text">
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
            texturas, que aportan personalidad y carácter a cada diseño. Además,
            integra elementos decorativos y mobiliario con criterios ergonómicos
            y estéticos, equilibrando la funcionalidad con el atractivo visual.
          </p>
        </section>
      </article>
    </section>
  );
};

export default TwoSection;

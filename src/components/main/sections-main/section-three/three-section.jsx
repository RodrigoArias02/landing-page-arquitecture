import "./style-three.css";
import threeD from "../../../../assets/icons/3d.png";
import proyect from "../../../../assets/icons/proyect.png";
import premier from "../../../../assets/icons/premier.png";
import timer from "../../../../assets/icons/time.png";
import money from "../../../../assets/icons/money.png";
const ThreeSection = () => {
  return (
    <section className="section-three">
      <h2>Why choose us</h2>
      <div className="features">
        <article className="article-feature">
          <div className="img-container">
            <img src={threeD} alt="3D Model" />
          </div>
          <p>3D Visualization </p>
        </article>
        <article className="article-feature">
          <div className="img-container">
            <img src={proyect} alt="Project Development" />
          </div>
          <p>Project Managenment</p>
        </article>
        <article className="article-feature">
          <div className="img-container">
            <img src={premier} alt="Premier Quality" />
          </div>
          <p>Upto 10 years warranty</p>
        </article>
        <article className="article-feature">
          <div className="img-container">
            <img src={timer} alt="Efficiency" />
          </div>
          <p>On time completion</p>
        </article>
        <article className="article-feature">
          <div className="img-container">
            <img src={money} alt="Cost-effective" />
          </div>
          <p>Easy EMI options</p>
        </article>
      </div>
    </section>
  );
};

export default ThreeSection;

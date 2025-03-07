import "./style-footer.css";
import telefono from '../../assets/icons/telefono.png';
import ubicacion from '../../assets/icons/ubicacion.png';

const Footer = () => {
  return (
<footer className="footer">
  <section className="footer-section">
    <ul className="ul-footer">
      <li><a href="#">Home</a></li>
      <li><a href="#twoSectionId">Service</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <address className="address">
        <h6>ModernNest</h6>
      <div className="address-item">
        <img src={ubicacion} alt="Icono ubicación" />
        <p>Buenos Aires, Av Ferrates</p>
      </div>
      <div className="address-item">
        <img src={telefono} alt="Icono teléfono" />
        <p><a href="tel:+549223556678">+54 9 223 556678</a></p>
      </div>
    </address>
  </section>
  <p className="copy">&copy; 2021 - All rights reserved</p>
</footer>

  );
};

export default Footer;

import "./style-header.css";
import menu from '../../assets/icons/menu.png'
import {useRef, useEffect} from "react";
const Header = () => {
 
  const btnMenuRef = useRef(null);

  useEffect(() => {
    const btnMenu = btnMenuRef.current; // Guardamos la referencia en una variable
    const menuItems = document.querySelector(".header-nav");

    if (btnMenu && menuItems) {
      const toggleMenu = () => {
        menuItems.classList.toggle("show");
        console.log("show");
      };

      btnMenu.addEventListener("click", toggleMenu);

      // Cleanup function para eliminar el eventListener cuando el componente se desmonta
      return () => {
        btnMenu.removeEventListener("click", toggleMenu);
      };
    }
  }, []);
  
  return (
    <header className="header">
        <h1>ModernNest</h1>
      <nav className="header-nav">
        <ul className="nav-ul_list">
          <li><a href="#">Homer</a></li>
          <li><a href="#twoSectionId">Service</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <button className="btn-menu" ref={btnMenuRef}  id="btn"><img src={menu} alt="" /></button>
    </header>
  );
};

export default Header;

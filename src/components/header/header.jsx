import "./style-header.css";
const Header = () => {
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
    </header>
  );
};

export default Header;

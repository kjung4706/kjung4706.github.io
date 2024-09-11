import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/kLogo.png" alt="Logo" className="logo-image" />
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          &#9776;
        </button>
      </header>
      <nav className={`side-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

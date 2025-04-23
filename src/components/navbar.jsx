import { FaLinkedinIn, FaTwitter, FaBars } from 'react-icons/fa6';
import { SiInstagram } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-navbar">
      <Link to="/">
        <img
          src="/logo-horizontale/Logo-secondaire-bleumarine.png"
          alt="logo-code-et-pixel"
          id="logo"
        />
      </Link>

      {/* Burger Icon */}
      <div className="burger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Menu classique */}
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <nav className="test">
          <ul className="list-nav">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/galerie">Galerie</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="reseaux-sociaux">
            <a
              href="https://www.linkedin.com/company/codeetpixel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/codeetpixel/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

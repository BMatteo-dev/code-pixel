import '../styles/footer.css';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiInstagram } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div>
          <img src="/logo-vertical/Logo-principale-bleumarine.png" id="logo-footer"></img>
        </div>
        <div className="info-footer">
          <Link to="/mentions-légales">
            <p>Mentions légales</p>
          </Link>
          <Link to="/conditions-generales-de-vente">
            <p>Conditions générales de ventes</p>
          </Link>
          <Link to="/politique-de-confidentialite">
            <p>Politique de confidentialité</p>
          </Link>
        </div>
        <div className="nav-footer">
          <Link to="/">
            <p>Accueil</p>
          </Link>
          <Link to="/services">
            <p>Services</p>
          </Link>
          <Link to="/galerie">
            <p>Gallerie</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div className="social-media">
          <h3 className="title-footer">reseaux sociaux</h3>
          <div className="reseaux-sociaux icone">
            <a
              href="https://www.linkedin.com/company/codeetpixel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.linkedin.com/in/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram />
            </a>
            <a
              href="https://www.instagram.com/codeetpixel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

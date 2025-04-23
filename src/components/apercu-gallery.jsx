import ProjetCard from '../features/projet-card';
import '../styles/gallery.css';
import { Link } from 'react-router-dom';

export default function ApercuGallery() {
  return (
    <>
      <div className="main-apercu-gallery">
        <h1 className="title-aprecu-gallery">Ils nous ont fait confiance..</h1>
        <div className="flex-mode">
          <div className="card-top">
            <Link to="/varonia">
              <ProjetCard
                titleProject="Varonia systems"
                image="/gallerie/varonia-projet.webp"
                textAlt="mur-de-brique-avec-logo-varonia-system"
                imageSize="clamp(220px, 30vw, 400px)"
                imageHeight="450px"
                description="Marketing d'acquisition & Réseaux sociaux"
              />
            </Link>
          </div>
          <div className="card-bottom">
            <Link to="/kathy-coiffure">
              <ProjetCard
                titleProject="Kathy coiffure"
                image="/gallerie/kathy-enseigne.webp"
                textAlt="immeuble-avec-enseigne-logo-kathy"
                imageSize="clamp(200px, 25vw, 380px)"
                imageHeight="450px"
                description="Identité visuelle | Site Web | Réseaux sociaux"
              />
            </Link>
          </div>
          <div className="card-top">
            <Link to="/confidence">
              <ProjetCard
                titleProject="La confidence"
                image="/gallerie/confidence-projet.webp"
                textAlt="vitrine-de-restaurant-avec-logo-confidence"
                imageSize="clamp(220px, 30vw, 400px)"
                imageHeight="450px"
                description="identité visuelle & print"
              />
            </Link>
          </div>
        </div>
        <div>
          <Link to="/galerie">
            <button className="button-gallery">En voir plus</button>
          </Link>
        </div>
      </div>
    </>
  );
}

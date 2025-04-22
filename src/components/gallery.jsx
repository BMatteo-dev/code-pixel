import '../styles/gallery.css';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const images = [
    {
      src: '/gallerie/kathy-enseigne.webp',
      titleProject: 'Kathy coiffure',
      description: 'Identité visuelle | Site Web | Réseaux sociaux',
      link: '/kathy-coiffure',
    },
    {
      src: '/gallerie/varonia-projet.webp',
      titleProject: 'Varonia Systeme',
      description: 'Marketing d’acquisition & Réseaux sociaux',
      link: '/varonia',
    },
    {
      src: '/gallerie/confidence-projet.webp',
      titleProject: 'Le Confidence',
      description: 'Identité visuelle & Print',
      link: '/confidence',
    },
    {
      src: '/gallerie/crescer.webp',
      titleProject: 'Crescere',
      description: 'Identité visuelle | Print | Réseaux sociaux',
      link: '/crescere',
    },
    {
      src: '/gallerie/cafe-nova.webp',
      titleProject: 'Cafe Nova',
      description: 'Identité visuelle',
      link: '/cafe-nova',
    },
    {
      src: '/gallerie/MB.webp',
      titleProject: 'MB',
      description: 'Identité visuelle',
      link: '/mb',
    },
  ];
  return (
    <>
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {images.map((src, index) => (
              <div className="gallery-item" key={index}>
                <Link to={src.link}>
                  <img src={src.src} alt={`gallery image ${index + 1}`} className="gallery-image" />
                  <h3 className="description-project">{src.titleProject}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

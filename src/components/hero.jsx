import '../styles/navbar.css';

export default function Hero() {
  return (
    <div className="principal-hero">
      <video autoPlay loop muted className="video-bg">
        <source src="/hero-movie.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
      <div className="image-hero-mobile"></div>
      <div className="main-hero">
        <div className="title-hero">
          <h1 className="contour-text">Créer</h1>
          <h1 className="contour-text">bâtir</h1>
          <h1 className="contour-text">Acquérir</h1>
        </div>
        <div className="logo-hero">
          <div>
            <img src="/logo-vertical/Logo-principale-beige.png" alt="logo-code-et-pixel" />
          </div>
        </div>
      </div>
    </div>
  );
}

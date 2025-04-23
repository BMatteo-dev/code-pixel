import '../styles/kathy-coiffure.css';

export default function KathyCoiffure() {
  return (
    <>
      <h2 className="title-h1">Kathy Coiffure</h2>
      <p className="paragraphe-kathy">
        Le Salon Kathy Coiffure nous a confié la refonte complète de son image de marque : nouvelle
        identité visuelle, création d’un site internet moderne et mise en place d’une stratégie
        social media sur mesure. De la direction artistique à la gestion quotidienne des réseaux,
        nous avons accompagné le salon dans sa transformation digitale.
      </p>
      <h2 className="title-h2">Refonte Identité Visuelle</h2>
      <div className="main-kathy-coiffure">
        <img className="img1" src="/kathy/lettre-kathy.webp"></img>
        <img className="img2" src="/kathy/etiquette.webp"></img>
        <img className="img3" src="/gallerie/kathy-enseigne.webp"></img>
        <img className="img4" src="/kathy/sachet-cadeaux.webp"></img>
        <img className="img5" src="/kathy/kathy.webp"></img>
        <img className="img6" src="/kathy/logo-vitre.webp"></img>
      </div>
      <h2 className="title-h2">Stratégie Social Media et Community Management</h2>
      <div>
        <div className="mockup-smartphone-kathy">
          <div>
            <img
              src="/kathy/mockup-smartphone.webp"
              alt="mockup-reseaux-sociaux-smarthpone"
              className="mockup-kathy"
            />
          </div>
          <p className="paragraphe-kathy">
            Pour Kathy Coiffure, nous avons conçu une stratégie social media en cohérence avec sa
            nouvelle identité : ligne éditoriale, création de contenus, animation de communauté et
            planification des publication.
          </p>
          <p className="paragraphe-kathy">
            Nous avons conçu une stratégie social media en cohérence avec sa nouvelle identité :
            ligne éditoriale, création de contenus, animation de communauté et planification des
            publications.
          </p>
        </div>
      </div>
      <div className="main-kathy-coiffure-2">
        <div>
          <img
            src="/kathy/Presentation.webp"
            id="presentation"
            alt="Mockup d'un rapport de performance marketing digital pour un salon de coiffure avec statistiques Instagram et TikTok – Reporting Mars 2025 par Katiff Coiffure"
          />
        </div>
        <div>
          <img
            src="/kathy/mochup-unique.webp"
            alt="mochup-iphone-resultat-camapagne-media-sociaux"
            id="smartphone-kathy"
          />
        </div>
      </div>
    </>
  );
}

import ImageText from '../features/image-text';
import TitreEtImage from '../features/titre-et-image';
import '../styles/varonia.css';

export default function Varonia() {
  return (
    <>
      <h2 className="title-h1">Varonia Systems</h2>
      <ImageText
        source="/varonia/Casque VR blanc.webp"
        text="Varonia Systems est une entreprise française innovante, fondée en 2017 et basée à Tours. Spécialisée dans le développement de solutions de réalité virtuelle, 
        elle se distingue particulièrement dans le domaine du 'free roaming', permettant aux utilisateurs de se déplacer librement dans des espaces de 40 à 2000 m².
         L'entreprise concentre ses activités sur trois pôles : la recherche et développement, la création de jeux vidéo, et l'assistance, maintenance et formation."
        alt="image-de-casque-vr"
      />
      <TitreEtImage
        title="stratégie social media & community management"
        image="/varonia/Feed insta.webp"
        alt="image-presentation-mockup-smartphone"
      />
      <div className="linkedIn">
        <div className="linkedin-content">
          <div className="linkedin-logo">
            <img src="/varonia/LinkedIn_icon.svg.webp" alt="logo-linkedin" id="logo-linkedin" />
          </div>
          <div className="content-linkedin">
            <p>Résultats suite a notre premiere publication B2B sur Linkedin</p>
            <p>@Sofins 2025 @Ministrere des armées</p>
          </div>
        </div>
        <div className="resultat-linkedin">
          <img src="/varonia/google-ads-campagne-1.webp" />
          <img src="/varonia/google-ads-campagne-2.webp" />
          <img src="/varonia/google-ads-campagne-3.webp" />
        </div>
      </div>
      <h2 className="title-h2">Acquisition traffic campagnes google ads</h2>
      <div className="main-googleads-varonia">
        <div className="first-column">
          <div className="mockup-smartphone">
            <img src="/varonia/google-ads-campagne-34webp.webp" alt="exemple-google-ads-campagne" />
            <img src="/varonia/landing-page-exemple.webp" alt="exemple-reservation-site" />
            <img
              src="/varonia/google-ads-exemple.webp"
              alt="exemple-ads-sponsorisé-avec-image-google"
            />
          </div>
          <div className="first-column-paragraphe">
            <p>
              Les campagnes Google Ads sont de véritables accélérateurs de visibilité et de
              performance. Avec la Search, on capte une intention claire : vos prospects vous
              cherchent, on les aide à vous trouver. <br />
              Avec Performance Max, on active tout l’écosystème Google pour aller plus loin, toucher
              de nouvelles audiences et générer des actions concrètes. Une stratégie puissante,
              pilotée par la donnée et l’automatisation, pour attirer les bons clients, au bon
              moment, sur le bon canal.
            </p>
          </div>
        </div>
        <div className="second-column">
          <p>Campagnes Search et Performance Max</p>
          <img src="/varonia/mockup-jeu-varonia.webp" alt="exemple-ads-google-et-youtube" />
        </div>
      </div>
      <h2 className="title-h2">BANNIERE WEB & SUPPORT PRINT</h2>
      <div className="last-content-varonia">
        <img src="/varonia/varonia-affiche.webp" alt="image-affiche-scanner-qr-code" />
        <img
          id="varonia-mockup-laptop"
          src="/varonia/varonia-mockup-laptop.webp"
          alt="mockup-varonia-laptop"
        />
      </div>
    </>
  );
}

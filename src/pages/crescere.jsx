import '../styles/crescer.css';
import ImageText from '../features/image-text';
import TitreEtImage from '../features/titre-et-image';

export default function Crescere() {
  return (
    <>
      <h2 className="title-h1">Crescere</h2>
      <ImageText
        source="/crescere/carte-de-visite.webp"
        text=" Anne-Marie est formatrice en prévention des risques liés aux addictions en milieu
            professionnel. Elle intervient également sur les thématiques SSCT (Santé, Sécurité et
            Conditions de Travail) et RPS (Risques Psychosociaux). En tant que coach orientée
            solution et analyste des pratiques professionnelles, elle accompagne les entreprises
            dans l'amélioration de leurs dynamiques internes."
        alt="carte-de-visite-avec-logo-crescer"
      />
      <TitreEtImage
        title="Création d'une identité visuelle"
        image="/crescere/mockup-global.webp"
        alt="image-presentation-identité-visuelle-catalogue-carnet-carte-de-visite"
      />
      <div className="crea-identite">
        <div class="bloc-contenu">
          <h2>
            Print
            <br />
            création d'un catalogue de formation
            <br />& une plaquette de prix
          </h2>
          <img
            className="mockup-crescere"
            src="/crescere/catalogue-paysage.webp"
            alt="desing-catalogue-crescere"
          />
          <img
            id="catalogue-mockup"
            src="/crescere/catalogue.webp"
            alt="mockup-catalogue-crescere"
          />
        </div>
      </div>
      <div className="crea-identite last-content">
        <div class="bloc-contenu">
          <h2>stratégie social media & community management</h2>
          <img
            className="mockup-crescere"
            src="/crescere/crescere-mockup.webp"
            alt="mockup-reseaux-sociaux-crescere-exemple-catalogue"
          />
        </div>
      </div>
      <div className="description-crescere">
        <p className="paragraphe-crescere-font">
          Accompagnement stratégique pour la présence en ligne d'Anne-Marie. Nous avons créé un
          compte Instagram pour Anne-Marie, visant à partager son expertise en prévention des
          risques professionnels et en coaching orienté solution. Grâce à une stratégie social media
          sur-mesure, nous mettons en avant ses interventions, ses conseils pratiques, et son rôle
          de formatrice et coach, tout en créant du contenu dynamique et engageant.
        </p>
        <p id="last-block" className="paragraphe-crescere-font">
          Parallèlement, nous optimisons son profil LinkedIn afin de renforcer sa présence B2B, en
          diffusant des contenus ciblés pour les entreprises. Cette démarche permettra à Anne-Marie
          de toucher une audience professionnelle, d’accroître sa visibilité dans le domaine de la
          prévention des risques et de la santé au travail, et d'engager des collaborations
          fructueuses avec des acteurs du monde de l'entreprise.
        </p>
      </div>
      <div className="crea-identite">
        <img
          className="mockup-crescere last-img"
          src="public/crescere/crescere-banniere-linkedin.webp"
          alt="banniere-linkedin-exemple"
        />
      </div>
    </>
  );
}

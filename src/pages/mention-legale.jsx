import '../styles/content-footer.css';

export default function MentionLegale() {
  return (
    <div className="main-mention-legale">
      <h1 className="title-h2">Mentions légales</h1>

      <div>
        <h2 className="subtitle-mention-legale">1/ Editeur du site</h2>
        <div className="content-mention-legale">
          <p>Le site Code & Pixel est édité par : Matteo Bontemps et Alicia Palmeira</p>
          <p>Forme juridique : Auto-entrepreneur </p>
          <p>Adresse email : contact.codeetpixel@gmail.com</p>
          <p>Responsable de publication : Alicia Palmeira / Matteo Bontemps</p>
        </div>
      </div>
      <div>
        <h2 className="subtitle-mention-legale">2/ Hébergeur</h2>
        <div className="content-mention-legale">
          <p>Le site est hébergé par : [Nom de l’hébergeur, ex. : Hostinger, OVH, etc.]</p>
          <p>Raison sociale : [Nom complet de la société d’hébergement]</p>
          <p>Adresse : [Adresse de l’hébergeur]</p>
          <p> Téléphone : [Numéro de téléphone de l’hébergeur] Site web : [https://…]</p>
        </div>
      </div>
      <div>
        <h2 className="subtitle-mention-legale">3/ Activité</h2>
        <ul className="list-mention-legale">
          <li>
            <p>Création de sites web vitrine, e-commerce et sur-mesure</p>
          </li>
          <li>
            <p>Développement de fonctionnalités web personnalisées</p>
          </li>
          <li>
            <p>Community management (gestion de réseaux sociaux)</p>
          </li>
          <li>
            <p>Design graphique (identité visuelle, UI/UX)</p>
          </li>
          <li>
            <p>Référencement naturel (SEO)</p>
          </li>
          <li>
            <p>Publicité en ligne (Google Ads, Meta Ads)</p>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="subtitle-mention-legale">4/ Propriété intelectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques,
          structure, code, etc.) sont protégés par le droit d’auteur. Toute reproduction, diffusion
          ou exploitation sans autorisation écrite préalable est strictement interdite.
        </p>
      </div>
      <div>
        <h2 className="subtitle-mention-legale">5/ Données personelles</h2>
        <p>
          Les données collectées via les formulaires de contact ou les cookies sont exclusivement
          destinées à Code & Pixel dans le but de répondre aux demandes des utilisateurs ou
          d’améliorer l’expérience de navigation. Conformément à la loi “Informatique et Libertés”
          et au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos
          données. Pour toute demande : [Ton email de contact]
        </p>
      </div>
      <div>
        <h2 className="subtitle-mention-legale">6/ Cookies</h2>
        <p>
          Le site peut utiliser des cookies afin d’améliorer l’expérience utilisateur, mesurer
          l’audience, et proposer des contenus adaptés. Vous pouvez gérer vos préférences de cookies
          via votre navigateur.
        </p>
      </div>
    </div>
  );
}

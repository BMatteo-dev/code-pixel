import '../styles/services.css';
import ALaCarte from '../features/a-la-carte';
import ContentALaCarte from '../features/content-a-la-carte';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <>
      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-header">
            <h2 className="pricing-title">Nos packages</h2>
            <p className="pricing-description">
              There are many variations of passages of Lorem Ipsum available but the majority have
              suffered alteration in some form.
            </p>
          </div>

          <div className="pricing-cards">
            {/* Personal Plan */}
            <div className="pricing-card first">
              <span className="pricing-plan">Elan</span>
              <p className="a-partir-de">à partir de </p>
              <h2 className="pricing-price text-focus-in">2000€</h2>
              <div className="pricing-text"></div>
              <div className="pricing-features">
                <p>Design UI/UX sur-mesure pour un site moderne et efficace</p>
                <p> Site vitrine de 1 à 3 pages (responsive & optimisé mobile)</p>
                <p> Référencement naturel de base (SEO) pour être visible sur Google</p>
                <p>Accompagnement personnalisé pendant 3 mois : conseils, suivi, évolutions</p>
              </div>
              <a href="#" className="pricing-button outline">
                Selectionner
              </a>
              <p className="description-pricing">
                Idéal pour les entrepreneurs qui lancent leur activité ou ont besoin d’une présence
                web claire et impactante.
              </p>
            </div>
            {/* Business Plan */}
            <div className="pricing-card middle">
              <span className="pricing-plan">Essor</span>
              <p className="a-partir-de">à partir de </p>
              <h2 className="pricing-price text-focus-in">4000€</h2>
              <div className="pricing-text"></div>
              <div className="pricing-features">
                <p>Création ou refonte de votre identité visuelle (logo, carte de visite, etc.)</p>
                <p> Design UI/UX de qualité pour une expérience utilisateur optimale</p>
                <p> Site web de 1 à 7 pages (adapté à votre contenu et vos objectifs)</p>
                <p>SEO avancé : optimisation de contenu, structure, performance</p>
                <p> Maintenance + modifications incluses pendant 6 mois (forfait d’heures)</p>
                <p> Stratégie réseaux sociaux + création et diffusion de posts pendant 1 mois</p>
              </div>
              <a href="#" className="pricing-button outline">
                Selectionner
              </a>
              <p className="description-pricing">
                Parfait pour les entreprises en développement qui souhaitent structurer leur
                communication digitale et affirmer leur image.
              </p>
            </div>

            {/* Professional Plan */}
            <div className="pricing-card last">
              <span className="pricing-plan">Prémium</span>
              <p className="a-partir-de">à partir de </p>
              <h2 className="pricing-price text-focus-in">6000€</h2>
              <div className="pricing-text"></div>
              <div className="pricing-features">
                <p>Refonte com é visuelle (branding 360°)</p>
                <p> Design UI/UX poussé et 100 % personnalisé</p>
                <p>
                  Site web sur mesure (pages illimitées selon votre besoin, fonctionnalités
                  avancées)
                </p>
                <p> Maintenance + modifications incluses pendant 12 mois (forfait d’heures)</p>
                <p> Stratégie réseaux sociaux + publication pendant 3 mois</p>
                <p>
                  {' '}
                  Marketing d’acquisition : gestion de campagnes Google Ads & Meta Ads sur 1 mois
                  (budget publicitaire non inclus)
                </p>
                <p> Reporting de performance mensuel</p>
              </div>
              <a href="#" className="pricing-button outline">
                Selectionner
              </a>
              <p className="description-pricing">
                Le choix des marques ambitieuses qui veulent booster leur visibilité et leurs
                conversions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="general-carte">
        <ALaCarte
          title="Graphisme"
          source="/pictogrammes/Graphisme-Orange.png"
          alt="logo-graphisme"
          subtitle=""
          contenus={[
            <ContentALaCarte
              subtitle="Identité visuelle"
              items={[
                'Logo',
                'Charte graphique',
                'Carte de visite',
                'Carte de fidélité',
                'Signature mail',
                'Papier en-tête',
                'Moodboard & univers visuel',
              ]}
            />,
            <ContentALaCarte
              subtitle="Support Web "
              items={[
                'Bannière site web',
                'Mockup produit / interface',
                'Contenu pour réseaux sociaux',
                ' publicité digitale',
                'Template newsletter',
                'email marketing',
              ]}
            />,
            <ContentALaCarte
              subtitle="Support Print "
              items={[
                'Affiches',
                'Flyers',
                'Brochures / dépliants',
                'Catalogue produits',
                'Sticker / étiquette produit',
                'Invitation papier',
              ]}
            />,
          ]}
        />
        <ALaCarte
          title="Developpement web"
          source="/pictogrammes/DevWeb-Orange.png"
          alt="logo-developpement web"
          contenus={[
            <ContentALaCarte
              subtitle="Support Web "
              items={[
                'Bannière site web',
                'Mockup produit / interface',
                'Contenu pour réseaux sociaux',
                ' publicité digitale',
                'Template newsletter',
                'email marketing',
              ]}
            />,
          ]}
        />
        <ALaCarte
          title="socila media & acquisition"
          source="/pictogrammes/Aqui-Orange.png"
          alt="logo-graphisme"
          contenus={[
            <ContentALaCarte
              subtitle="Support Web "
              items={[
                'Bannière site web',
                'Mockup produit / interface',
                'Contenu pour réseaux sociaux',
                ' publicité digitale',
                'Template newsletter',
                'email marketing',
              ]}
            />,
            <ContentALaCarte
              subtitle="Support Web "
              items={[
                'Bannière site web',
                'Mockup produit / interface',
                'Contenu pour réseaux sociaux',
                ' publicité digitale',
                'Template newsletter',
                'email marketing',
              ]}
            />,
            <ContentALaCarte
              subtitle="Support Web "
              items={[
                'Bannière site web',
                'Mockup produit / interface',
                'Contenu pour réseaux sociaux',
                ' publicité digitale',
                'Template newsletter',
                'email marketing',
              ]}
            />,
          ]}
        />
      </div>
      <div className="end-container">
        <h4 className="end-carte">
          Prêt à donner vie à votre projet digital ? Discutons ensemble de vos ambitions !
        </h4>
        <Link to="/contact">
          <button className="button-end">Contactez-nous</button>
        </Link>
      </div>
    </>
  );
}
{
  /* a la carte */
}
{
  /* <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-header">
            <h2 className="pricing-title">À la carte</h2>
            <p className="pricing-description">
              There are many variations of passages of Lorem Ipsum available but the majority have
              suffered alteration in some form.
            </p>
          </div>

          <div className="pricing-cards">
            Personal Plan
            <div className="pricing-card">
              <span className="pricing-plan">Graphisme</span>
              <div className="pricing-text"></div>
              <div className="pricing-features">
                <span className="categorie-pricing">Identité visuelle</span>
                <p>Logo</p>
                <p> Charte graphique</p>
                <p> Carte de visite</p>
                <p>Carte de fidélité</p>
                <p>Signature mail</p>
                <p>Papier en-tête</p>
                <p>Moodboard & univers visuel</p>
                <span className="categorie-pricing">Support Print</span>
                <p>Affiches</p>
                <p> Flyers</p>
                <p> Brochures / dépliants</p>
                <p>Catalogue produits / services</p>
                <p>Sticker / étiquette produit</p>
                <p>Invitation papier</p>
                <p>Goodies</p>
                <span className="categorie-pricing">Support Web</span>
                <p>Bannière site web</p>
                <p> Mockup produit / interface</p>
                <p> Contenu pour réseaux sociaux et publicité digital </p>
                <p>Template newsletter / email marketing</p>
              </div>
              <a href="#" className="pricing-button outline">
                Selectionner
              </a>
            </div>
            Business Plan
            <div className="pricing-card">
              <span className="pricing-plan">Développemet web</span>
              <div className="pricing-text"></div>
              <div className="pricing-features">
                <p>Création ou refonte de votre identité visuelle (logo, carte de visite, etc.)</p>
                <p> Design UI/UX de qualité pour une expérience utilisateur optimale</p>
                <p> Site web de 1 à 7 pages (adapté à votre contenu et vos objectifs)</p>
                <p>SEO avancé : optimisation de contenu, structure, performance</p>
                <p> Maintenance + modifications incluses pendant 6 mois (forfait d’heures)</p>
                <p> Stratégie réseaux sociaux + création et diffusion de posts pendant 1 mois</p>
              </div>
              <a href="#" className="pricing-button outline">
                Selectionner
              </a>
            </div>

            Professional Plan
            <div className="pricing-card">
              <span className="pricing-plan">SOCIAL MEDIA & AQUISITION</span>
              <div className="pricing-text"></div>
              <div className="pricing-features">
                <p>Stratégie social Média</p>
                <p>Community management (contrat mensuel)</p>
                <p>Création de contenu média (visuel, shooting)</p>
                <p>Maintenance + modifications incluses pendant 12 mois (forfait d’heures)</p>
                <p>Stratégie réseaux sociaux + publication pendant 3 mois</p>
                <span className="categorie-pricing">Meta Ads</span>
                <p>Stratégie publicitaire sur-mesure</p>
                <p>Création & gestion complète des campagnes</p>
                <p>Suivi & optimisation continue</p>
                <p>
                  Marketing d’acquisition : gestion de campagnes Google Ads & Meta Ads sur 1 mois
                  (budget publicitaire non inclus)
                </p>
                <p> Reporting de performance mensuel</p>
                <span className="categorie-pricing">Google Ads</span>
                <p>Création de la campagne</p>
                <p>Optimisation des annonces</p>
                <p>Suivi des performances & ajustements réguliers</p>
              </div>
              <a href="#" className="pricing-button outline">
                Selectionner
              </a>
            </div>
          </div>
        </div>
      </section> */
}

import '../styles/expertise.css';

const services = [
  {
    icon: '/pictogrammes/Graphisme-Orange.png',
    title: 'Design',
    description:
      'Nous créons des designs élégants et fonctionnels, pensés pour capter l’attention et renforcer votre image de marque. Chaque pixel compte : notre équipe allie sens du détail et créativité pour concevoir des interfaces qui marient esthétisme et efficacité.',
  },
  {
    icon: '/pictogrammes/DevWeb-Orange.png',
    title: 'Developpement web',
    description:
      'Nous développons des sites et applications web performants, évolutifs et sur mesure. Chez Code & Pixel, chaque ligne de code est pensée pour offrir une expérience fluide, rapide et sécurisée, quel que soit le support.',
  },
  {
    icon: '/pictogrammes/Aqui-Orange.png',
    title: 'Acquisition',
    description:
      'Nous mettons en place des campagnes Google Ads ciblées et rentables pour booster votre visibilité et attirer les bons clients. De la stratégie à l’optimisation, nous pilotons vos campagnes avec rigueur pour maximiser votre retour sur investissement.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="title">Notre expertise</h2>
          <p className="description">
            Nous combinons créativité et performance pour concevoir des expériences numériques
            uniques. Du design graphique à l’intégration web, en passant par le développement sur
            mesure, nous offrons des solutions pensées pour vos utilisateurs, et optimisées pour vos
            objectifs. Notre approche ? Allier pixel perfect et code intelligent pour donner vie à
            vos idées avec style et précision.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">
                <img className="picto" src={service.icon} />
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

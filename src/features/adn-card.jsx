import '../styles/adn.css';

export default function AdnCard({ source, description, title }) {
  return (
    <>
      <div>
        <div className="main-card-adn">
          <img className="picto-adn" src={source} />
          <h3 className="title-adn">{title}</h3>
          <p className="descr-adn">{description}</p>
        </div>
      </div>
    </>
  );
}

import '../styles/services.css';

export default function Banniere({ titleBanniere, paragrapheBanniere, paragrapheDescription }) {
  return (
    <div>
      <div className="border-text">
        <div className="container-title">
          <h1 className="title-banniere">{titleBanniere}</h1>
          <p className="paragraphe-banniere">{paragrapheBanniere}</p>
        </div>
        <div className="container-contenu">
          <p>{paragrapheDescription}</p>
        </div>
      </div>
    </div>
  );
}

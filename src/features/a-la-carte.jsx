import '../styles/services.css';

export default function ALaCarte({ title, source, alt, contenus }) {
  return (
    <>
      <div className="main-a-la-carte">
        <div className="left-carte">
          <img className="pictogramme-a-la-carte" src={source} alt={alt}></img>
          <h2 className="title-carte">{title}</h2>
        </div>
        <div className="border-carte">{contenus}</div>
      </div>
    </>
  );
}

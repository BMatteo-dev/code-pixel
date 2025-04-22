export default function ImageText({ source, text, alt }) {
  return (
    <div>
      <div className="presentation">
        <div>
          <img id="carte-de-visite" src={source} alt={alt} />
        </div>
        <div className="paragraphe-crescere">
          <p className="paragraphe-crescere-font">{text}</p>
        </div>
      </div>
    </div>
  );
}

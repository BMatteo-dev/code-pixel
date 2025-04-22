export default function TitreEtImage({ title, image, alt }) {
  return (
    <>
      <div className="crea-identite">
        <div class="bloc-contenu">
          <h2>{title}</h2>
          <img className="mockup-crescere" src={image} alt={alt} />
        </div>
      </div>
    </>
  );
}

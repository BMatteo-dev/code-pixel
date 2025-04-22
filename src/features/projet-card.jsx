import '../styles/gallery.css';

export default function ProjetCard({
  titleProject,
  image,
  description,
  imageSize,
  textAlt,
  imageHeight,
}) {
  return (
    <div className="hvr-grow-shadow gallery-projet">
      <h2 className="title-project">{titleProject}</h2>
      <img
        className="img-gallery-card"
        src={image}
        alt={textAlt}
        style={{ width: imageSize, height: imageHeight }}
      />
      <h3 className="description-project">{description}</h3>
      <div className="border-bottom"></div>
    </div>
  );
}

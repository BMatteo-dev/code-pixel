import '../styles/services.css';

export default function ContentALaCarte({ subtitle, items }) {
  return (
    <div className="main-contente-alacarte">
      <div className="title-wrapper">
        <h3 className="title-card-content">{subtitle}</h3>
      </div>
      {items.map((item, index) => (
        <p className="item-carte" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
}

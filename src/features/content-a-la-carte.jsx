import '../styles/services.css';

export default function ContentALaCarte({ subtitle, items }) {
  return (
    <div className="main-contente-alacarte">
      <h3>{subtitle}</h3>
      {items.map((item, index) => (
        <p className="item-carte" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
}

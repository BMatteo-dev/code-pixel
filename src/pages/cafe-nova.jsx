import '../styles/cafe-nova.css';
import '../styles/confidence.css';

export default function CafeNova() {
  return (
    <>
      <h2 className="title-h1">Café nova</h2>
      <p className="paragraphe-kathy">
        Un coffee shop moderne et chaleureux, avec ce petit je-ne-sais-quoi qui fait qu’on s’y sent
        tout de suite comme à la maison.Pour l’identité visuelle de Café Nova, nous avons misé sur
        la douceur, la simplicité et une déclinaison malicieuse : un petit logo façon bonhomme
        moustachu qui vous dit « venez prendre un café à la maison ».Des tons cozy, une typographie
        accueillante, une ambiance graphique qui reflète l’esprit du lieu : accueillant, stylé, sans
        chichi.Café Nova, c’est l’art de faire les choses sérieusement, sans jamais se prendre trop
        au sérieux.
      </p>
      <h2 className="title-h2">Création identité visuelle</h2>
      <div className="gallery-cafe-nova">
        <img
          className="img-1"
          src="public/cafe-nova/identité_visuelle_cafe_nova.webp"
          alt="Identité visuelle et packaging du Café Nova avec grains de café"
        ></img>
        <img
          className="img-2"
          src="/cafe-nova/devanture_cafe_nova.webp"
          alt="Devanture avec enseigne Café Nova imprimée sur store blanc"
        ></img>
        <img
          className="img-3"
          src="public/cafe-nova/packaging_cafe_nova.jpeg"
          alt="Sac à emporter blanc Café Nova posé sur un comptoir en marbre"
        ></img>
        <img
          className="img-4"
          src="/cafe-nova/dessous_de_verre_cafe_nova.webp"
          alt="Dessous de verre ronds Café Nova posés près d'un café crème"
        ></img>
      </div>
      <h2 className="title-h2">Création print</h2>
      <div className="print-gallery-confidence">
        <img
          src="/cafe-nova/carte_de_fidelite_cafe_nova.webp"
          alt="Carte de fidélité Café Nova avec logo et design sur fond beige"
        />
        <img
          src="/cafe-nova/packaging_gobelet_cafe_nova.webp"
          alt="Gobelets de café à emporter Café Nova avec logos variés"
        />
      </div>
      <div className="print-gallery-cafe-nova-title">
        <h3 className="title-h3">Carte de fidelité</h3>
        <h3 className="title-h3">Gobelet en carton à emporter</h3>
      </div>
    </>
  );
}

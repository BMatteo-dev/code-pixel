import '../styles/confidence.css';

export default function Confidence() {
  return (
    <>
      <h2 className="title-h1">Le confidence</h2>
      <p className="paragraphe-kathy">
        Un nom qui dit déjà tout. Pour ce restaurant à l’âme de bistrot et au goût du détail, j’ai
        eu la mission de repenser toute l’identité visuelle.Palette chaleureuse, typographies
        élégantes, ambiance feutrée : chaque choix graphique a été guidé par l’idée de créer une
        atmosphère où l’on se sent bien, accueilli… en confiance. Une refonte qui ne trahit pas
        l’existant, mais le révèle avec justesse. Comme une confidence qu’on murmure à l’oreille, et
        qui reste.
      </p>

      <h2 className="title-h2">Refonte Identité Visuelle</h2>
      <div className="gallery-confidence">
        <img
          className="img-1"
          src="/confidence/dessous-de-verre.webp"
          alt="dessous-de-verre-restaurant"
        ></img>
        <img
          className="img-2"
          src="/confidence/enseigne-confidence.webp"
          alt="devanture-restaurant-vitre"
        ></img>
        <img
          className="img-3"
          src="/confidence/enseigne-confidence.webp"
          alt="enseigne-au-mur-restaurant"
        ></img>
        <img
          className="img-4"
          src="/confidence/serviette-de-table.webp"
          alt="serviette-blanche-restaurant"
        ></img>
      </div>
      <h2 className="title-h2">Création print</h2>
      <div className="print-gallery-confidence">
        <img
          src="/confidence/carte-de-visite-confidence.webp"
          alt="carte-de-visite-bleu-foncé-restaurant-confidence"
        />
        <img src="/confidence/menu-restaurant.webp" alt="menu-restaurant-sur-table-avec-verre" />
        <img
          src="/confidence/affiche-st-amour.webp"
          alt="affiche-restaurant-dans-une-piece-avec-des-carreaux-vert"
        />
      </div>
      <div className="print-gallery-confidence-title">
        <h3 className="title-h3">Carte de visite</h3>
        <h3 className="title-h3">Carte des boissons</h3>
        <h3 className="title-h3">Affiche nouveau vin</h3>
      </div>
    </>
  );
}

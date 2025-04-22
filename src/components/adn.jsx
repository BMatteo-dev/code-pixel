import AdnCard from '../features/adn-card';
import '../styles/adn.css';

export default function Adn() {
  return (
    <>
      <div className="main-adn">
        <AdnCard
          source="/pictogrammes/Picto_CL_FIRST.png"
          title="Le client first"
          description="C’est pas un slogan. C’est notre réflexe.
Mettre le client au centre, ce n’est pas une méthode, c’est notre manière de travailler. On prend le temps de comprendre vos besoins, vos contraintes, vos ambitions. Chaque idée, chaque action, chaque visuel a un seul objectif : créer de la valeur pour vous. On avance ensemble, sur-mesure, avec exigence et bon sens."
        />
        <AdnCard
          source="/pictogrammes/Picto_AMELIORATION.png"
          title="L'amélioration continue"
          description="On ne cherche pas à être parfaits, on cherche à être meilleurs chaque jour. Chaque retour, chaque expérience, chaque défi est une opportunité d’ajuster, d’optimiser, de faire évoluer notre manière de faire.  Parce que ce qui marche aujourd’hui peut toujours mieux marcher demain.  Et parce que grandir, c’est rester curieux et exigeant.."
        />
        <AdnCard
          source="/pictogrammes/Picto_ROI.png"
          title="Le retour sur investissement"
          description="Chaque action que l’on mène doit avoir un impact. On ne fait rien pour faire joli : tout est pensé pour générer du résultat. Visibilité, engagement, conversion : on suit ce qui compte vraiment pour vous. Parce qu’un bon accompagnement, c’est celui qui fait avancer vos objectifs, concrètement et durablement."
        />
      </div>
      <div className="adn-banner-container">
        <div className="adn-banner-track">
          <img src="/pictogrammes/notreadn.webp" alt="Notre ADN" />
          <img src="/pictogrammes/notreadn.webp" alt="Notre ADN" />
          <img src="/pictogrammes/notreadn.webp" alt="Notre ADN" />
          <img src="/pictogrammes/notreadn.webp" alt="Notre ADN" />
        </div>
      </div>
    </>
  );
}

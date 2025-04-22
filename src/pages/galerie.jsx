import Banniere from '../components/banniere';
import Gallery from '../components/gallery';

export default function Galerie() {
  return (
    <div>
      <Banniere
        imageUrl="/banniere-gallerie.jpeg"
        titleBanniere="Nos réalisations"
        paragrapheBanniere="sur mesure pensées pour chaque client"
        paragrapheDescription="Chaque projet est une collaboration unique.
        Voici un aperçu de ce que nous avons créé aux côtés de nos clients : des identités fortes, des interfaces soignées et des résultats concrets."
      />
      <Gallery />
    </div>
  );
}

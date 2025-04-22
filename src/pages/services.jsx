import Banniere from '../components/banniere';
import Pricing from '../components/pricing';

export default function Services() {
  return (
    <div>
      <Banniere
        imageUrl="/banniere-service.jpeg"
        titleBanniere="Nos services"
        paragrapheBanniere="packs clés en main ou 100% sur mesure"
        paragrapheDescription="Que vous soyez en phase de lancement, en pleine évolution ou en quête de performance digitale, 
        nos solutions s’adaptent à votre projet, vos objectifs et votre budget."
      />
      <Pricing />
    </div>
  );
}

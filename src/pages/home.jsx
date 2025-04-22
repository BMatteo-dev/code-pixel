import Hero from '../components/hero';
import ApercuGallery from '../components/apercu-gallery';
import Equipe from '../components/equipe';
import ServicesSection from '../components/expertise';
import Adn from '../components/adn';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <ApercuGallery />
      <Adn />
      <Equipe />
    </div>
  );
}

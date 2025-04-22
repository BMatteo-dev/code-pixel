import './styles/index.css';
import Home from './pages/home';
import Services from './pages/services';
import Galerie from './pages/galerie';
import Navbar from './components/navbar';
import KathyCoiffure from './pages/kathy-coiffure';
import ContactPage from './pages/contact';
import Crescere from './pages/crescere';
import Varonia from './pages/varonia';
import Confidence from './pages/confidence';
import CafeNova from './pages/cafe-nova';
import Mb from './pages/mb';
import MentionLegale from './pages/mention-legale';
import PolitiqueConfidentialite from './pages/politique-confidentialite';
import Cgv from './pages/Cgv';
import ScrollToTop from './features/scroll-top';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/kathy-coiffure" element={<KathyCoiffure />} />
          <Route path="/crescere" element={<Crescere />} />
          <Route path="/varonia" element={<Varonia />} />
          <Route path="/confidence" element={<Confidence />} />
          <Route path="/cafe-nova" element={<CafeNova />} />
          <Route path="/mb" element={<Mb />} />
          <Route path="/mentions-légales" element={<MentionLegale />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/conditions-generales-de-vente" element={<Cgv />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

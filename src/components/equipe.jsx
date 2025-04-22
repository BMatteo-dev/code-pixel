import { FaArrowRightLong } from 'react-icons/fa6';
import '../styles/equipe.css';
import { Link } from 'react-router-dom';

export default function Equipe() {
  const teamMembers = [
    {
      name: 'Alicia palmeira',
      role: 'Design & Acquisition',
      image: '/alicia-palmeira.webp',
    },
    {
      name: 'Matteo Bontemps',
      role: 'Web Developer',
      image: '/matteo-bontemps.webp',
    },
  ];
  return (
    <section className="team-section">
      <div className="container">
        {/* <div className="section-header">
          <h2 className="title-equipe">Une petite équipe, une grande vision</h2>
          <p className="description-equipe">
            Chez Code & Pixel, nous sommes deux passionnés unis par la même ambition : créer des
            expériences digitales puissantes et élégantes. Agiles, réactifs et complémentaires, nous
            mettons notre expertise au service de vos projets avec un accompagnement humain, précis
            et créatif.
          </p>
        </div> */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="card-content">
                <h3 className="name">{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            </div>
          ))}
          <div className="contact-main">
            <h2 className="title-equipe">Une petite équipe, une grande vision</h2>
            <p className="description-equipe">
              Chez Code & Pixel, nous sommes deux passionnés unis par la même ambition : créer des
              expériences digitales puissantes et élégantes. Agiles, réactifs et complémentaires,
              nous mettons notre expertise au service de vos projets avec un accompagnement humain,
              précis et créatif.
            </p>
            <Link to="/contact">
              <p className="contact-equipe">Nous contacter</p>
              <FaArrowRightLong id="arrow-contact" className="heartbeat" />
            </Link>
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
}

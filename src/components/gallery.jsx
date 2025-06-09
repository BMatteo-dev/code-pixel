import '../styles/gallery.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Gallery() {
  const [projects, setProjects] = useState([]);
  async function GetProject() {
    try {
      const response = await fetch('http://localhost:3000/api/project');
      const data = await response.json();
      console.log(data);
      setProjects(data);
    } catch {
      console.log('get projet failure !');
    }
  }

  useEffect(() => {
    GetProject();
  }, []);
  return (
    <>
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {projects.map((proj, index) => (
              <div className="gallery-item" key={index}>
                <Link to={proj.link}>
                  <img
                    src={`/backend/images/${proj.image}`}
                    alt={`gallery image ${index + 1}`}
                    className="gallery-image"
                  />
                  <h3 className="description-project">{proj.titre}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

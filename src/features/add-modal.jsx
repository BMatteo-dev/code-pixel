import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/admin.css';
import { useState, useEffect } from 'react';
import { MdCancel } from 'react-icons/md';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalAdmin({ open, handleClose, action }) {
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [liens, setLiens] = useState('');
  const [contenu, setContenu] = useState('');
  const token = localStorage.getItem('token');
  const [projects, setProjects] = useState([]);

  async function DeleteProject(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/project/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Projet supprimé avec succès:', data);
        setProjects((prev) => prev.filter((p) => p._id !== id));
        alert('Projet supprimer avec succés');
        
      } else {
        console.error('Erreur suppression:', data.message || data.error || 'Erreur inconnue');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  }

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

  async function ajouterNouveauProjet(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('titre', title);
    formData.append('image', picture);
    formData.append('link', liens);
    formData.append('content', contenu);

    try {
      const response = await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        console.log('Projet Ajouter avec succés');
        alert('Projet ajouter avec succés');
      } else {
        console.log("impossible d'ajouter le projet");
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      alert('Erreur serveur');
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {action === 'ajouter' && (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
              Ajouter un projet
            </Typography>

            <form action="#" method="post" encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="titre">Titre </label>
                <input
                  type="text"
                  id="titre"
                  name="titre"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setPicture(e.target.files[0])}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="link">Lien </label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  onChange={(e) => setLiens(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Contenu </label>
                <textarea
                  id="content"
                  name="content"
                  rows="5"
                  onChange={(e) => setContenu(e.target.value)}
                  required
                ></textarea>
              </div>
              <button id="envoyer-projet" type="submit" onClick={ajouterNouveauProjet}>
                Envoyer
              </button>
            </form>
          </>
        )}

        {action === 'supprimer' && (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
              Supprimer un projet
            </Typography>
            {}
            <section className="gallery-section">
              <div className="gallery-container">
                <div className="gallery-grid">
                  {projects.map((proj, index) => (
                    <div className="gallery-item" key={index}>
                      <MdCancel className="delete-image" onClick={() => DeleteProject(proj._id)} />
                      <img
                        src={`/backend/images/${proj.image}`}
                        alt={`gallery image ${index + 1}`}
                        className="gallery-delete"
                      />
                      <h3 className="description-project">{proj.titre}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </Box>
    </Modal>
  );
}

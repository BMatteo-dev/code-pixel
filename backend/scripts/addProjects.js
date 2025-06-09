require('dotenv').config();
const mongoose = require('mongoose');
const Projects = require('../models/projects');
const fs = require('fs');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('✅ Connexion réussie pour ajout projet');

    const imageBase64 = fs.readFileSync(
      '/Users/matteobontemps/Desktop/Code & Pixel/code-et-pixel/public/gallerie/kathy-enseigne.webp',
      { encoding: 'base64' }
    );

    const projects = [
      {
        titre: 'kathy coiffure',
        image: imageBase64,
        link: '/kathy-coiffure',
        content: 'Salon de coiffure moderne et élégant.', // ⚡ obligatoire selon ton modèle
      },
    ];

    try {
      await Projects.insertMany(projects); // 💥 insertion réelle ici
      console.log('🌱 Projet ajouté avec succès !');
    } catch (err) {
      console.error("Erreur lors de l'insertion du projet :", err);
    } finally {
      mongoose.connection.close(); // 🛑 ferme la connexion proprement
    }
  })
  .catch((err) => {
    console.error('Erreur ajout projet :', err);
  });

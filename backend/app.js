require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const loginUser = require('./routes/user');
const addProject = require('./routes/projects');

app.use(cors());
// Limite taille de fichier (anti DDoS léger)
app.use(express.json({ limit: '1mb' }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => {
    console.error('Erreur de connexion MongoDB :', err);
  });

// Sécurité : headers globaux
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff'); // évite l’analyse des fichiers par le navigateur
  res.setHeader('X-Frame-Options', 'DENY'); // empêche les iframes
  next();
});

// Gestion des erreurs (dont JSON trop lourd)
app.use((err, req, res, next) => {
  if (err.type === 'entity.too.large') {
    res.status(413).json({ error: 'La taille de la requête dépasse 1 Mo.' });
  } else {
    res.status(500).json({ error: 'Une erreur interne est survenue.' });
  }
  next();
});

// Réponse JSON
// app.use((req, res) => {
//   res.json({ message: 'Votre requête est reçue 🎉' });
// });
app.use('/api', loginUser, addProject);

module.exports = app;

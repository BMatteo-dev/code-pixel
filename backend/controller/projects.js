const Projects = require('../models/projects');
const fs = require('fs');
const path = require('path');

// Créer un projet
exports.createProjects = (req, res) => {
  const imageUrl = req.file.filename;

  const project = new Projects({
    titre: req.body.titre,
    image: imageUrl,
    link: req.body.link,
    content: req.body.content,
  });

  project
    .save()
    .then(() => res.status(201).json({ message: 'Projet ajouté avec succès' }))
    .catch((error) => res.status(400).json({ error }));
};

// Obtenir tous les projets
exports.getAllProjects = (req, res) => {
  Projects.find()
    .then((projects) => res.status(200).json(projects))
    .catch((error) => res.status(400).json({ error }));
};

// Supprimer un projet
exports.deleteProjects = async (req, res) => {
  try {
    console.log('req.params.id:', req.params.id);

    const project = await Projects.findOne({ _id: req.params.id });

    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }

    const imagePath = path.join(__dirname, '../images', project.image);
    try {
      await fs.unlink(imagePath);
    } catch (fileError) {
      console.warn('⚠️ Erreur lors de la suppression de l’image :', fileError.message);
    }

    await Projects.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: 'Projet supprimé avec succès' });
  } catch (error) {
    console.error('❌ Erreur suppression projet :', error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

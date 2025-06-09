const multer = require('multer');

const MIME_TYPES = {
  'image/jpeg': 'jpg',
  'image/jpe': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname
      .split(' ')
      .join('_') // remplacer les espaces
      .normalize('NFD') // séparer les lettres accentuées
      .replace(/[\u0300-\u036f]/g, '') // supprimer les accents
      .replace(/\.[^/.]+$/, '')
      .replace(/[^a-zA-Z0-9._-]/g, '');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + '.' + extension);
  },
});

module.exports = multer({ storage }).single('image');

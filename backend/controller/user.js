const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        return res.status(401).json({ message: 'Paire identifiant/mot de passe incorrect' });
      } else {
        if (req.body.password === process.env.ADMIN_PASSWORD) {
          console.log('login réussi');
          return res.status(200).json({
            token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' }),
          });
        } else {
          return res.status(401).json({ message: 'Paire identifiant/mot de passe incorrect' });
        }
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

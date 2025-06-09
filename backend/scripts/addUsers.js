require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('✅ Connecté à MongoDB');

    const newUser = new User({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    });

    await newUser.save();
    console.log('✅ Utilisateur ajouté avec succès !');

    mongoose.disconnect();
  })
  .catch((error) => {
    console.error('Erreur MongoDB :', error);
  });

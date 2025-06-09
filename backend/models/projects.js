const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
  titre: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
  link: { type: String, required: true, unique: true },
  content: { type: String },
});

module.exports = mongoose.model('project', projectsSchema);

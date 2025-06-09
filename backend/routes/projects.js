const express = require('express');
const router = express.Router();
const Project = require('../controller/projects');
const multer = require('../middlewares/multer-config');
const auth = require('../middlewares/auth');

router.post('/project', auth, multer, Project.createProjects);
router.get('/project', Project.getAllProjects);
router.delete('/project/:id', Project.deleteProjects);

module.exports = router;

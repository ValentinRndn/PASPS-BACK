const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const blogController = require('../controllers/blogControlleur');

// Configuration de Multer pour stocker les images dans le dossier public
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Conserve le nom original du fichier
    }
});

const upload = multer({ storage: storage });

router.get('/getBlogById/:id', blogController.getBlogById);
router.get('/getAllBlogs', blogController.getAllBlogs);
router.get('/getLastBlog', blogController.getLastBlog);
router.post('/createBlog', blogController.createBlog);
// router.put('/updateBlog/:id', blogController.updateBlog);
// router.delete('/deleteBlog/:id', blogController.deleteBlog);

module.exports = router;
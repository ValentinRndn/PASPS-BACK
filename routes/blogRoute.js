const express = require('express');

const router = express.Router();
const blogController = require('../controllers/blogControlleur');

router.get('/getBlogById/:id', blogController.getBlogById);
router.get('/getAllBlogs', blogController.getAllBlogs);
router.get('/getLastBlog', blogController.getLastBlog);
// router.post('/createBlog', blogController.createBlog);
// router.put('/updateBlog/:id', blogController.updateBlog);
// router.delete('/deleteBlog/:id', blogController.deleteBlog);

module.exports = router;
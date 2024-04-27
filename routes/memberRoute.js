const express = require('express');

const router = express.Router();
const membresController = require('../controllers/memberController');

// router.get('/getBlogById/:id', blogController.getBlogById);
router.get('/getAllMembers', membresController.getAllMembers);
router.post('/createMember', membresController.createMember);
// router.put('/updateBlog/:id', blogController.updateBlog);
// router.delete('/deleteBlog/:id', blogController.deleteBlog);

module.exports = router;
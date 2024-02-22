const express = require('express');

const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

router.post('/auth', utilisateurController.authenfication);
router.get('/getUserById/:id', utilisateurController.getUserById);
router.get('/getAllUsers', utilisateurController.getAllUsers);
router.post('/createUser', utilisateurController.createUser);
router.put('/updateUser/:id', utilisateurController.updateUser);
router.delete('/deleteUser/:id', utilisateurController.deleteUser);

module.exports = router;

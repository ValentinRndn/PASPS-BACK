const express = require('express');

const router = express.Router();
const structureController = require('../controllers/structureController');

router.get('/getStructureById/:id', structureController.getStructureById);
router.get('/getAllStructures', structureController.getAllStructures);
router.post('/createStructure', structureController.createStructure);
router.put('/updateStructure/:id', structureController.updateStructure);
router.delete('/deleteStructure/:id', structureController.deleteStructure);

module.exports = router;
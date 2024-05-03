const express = require('express');

const router = express.Router();
const statistiqueController = require('../controllers/statistiqueController');

// router.post('/createStatistique', statistiqueController.createStatistique);
router.get('/getAllStatistiques', statistiqueController.getAllStatistiques);
router.put('/updateStatistique/:id', statistiqueController.updateStatistique);

module.exports = router;


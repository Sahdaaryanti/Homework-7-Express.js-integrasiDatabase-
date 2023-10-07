// routes/actorRoutes.js
const express = require('express');
const actorController = require('../controller/actor');

const router = express.Router();

// Handler untuk mendapatkan semua data pada tabel actor
router.get('/actors', actorController.getAllActors);

module.exports = router;

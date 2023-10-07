const express = require('express');
const filmController = require('../controller/film');

const router = express.Router();

// Handler untuk mendapatkan semua data pada tabel film
router.get('/films', filmController.getAllFilms);

// Handler untuk mendapatkan data pada tabel film berdasarkan ID
router.get('/films/:id', filmController.getFilmById);

module.exports = router;

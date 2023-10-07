const express = require('express');
const categoryController = require('../controller/category');

const router = express.Router();

// Handler untuk mendapatkan semua data pada tabel kategori
router.get('/categories', categoryController.getAllCategories);

// Handler untuk mendapatkan data pada tabel film berdasarkan id kategori
router.get('/films/category/:categoryId', categoryController.getFilmsByCategory);

module.exports = router;

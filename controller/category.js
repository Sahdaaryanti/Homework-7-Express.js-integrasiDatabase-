const Category = require('../models/category');

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.getAllCategories();
      res.json(categories);
    } catch (error) {
      console.error('Error Saat Memanggil Seluruh Category:', error);
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },

  getFilmsByCategory: async (req, res) => {
    const categoryId = req.params.categoryId;

    try {
      const films = await Category.getFilmsByCategory(categoryId);

      if (!films) {
        res.status(404).json({ error: 'Category tidak ditemukan!' });
        return;
      }

      res.json(films);
    } catch (error) {
      console.error(`Error Saat Memanggil Actor berdasarkan category ID ${categoryId}:`, error);
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },
};

module.exports = categoryController;

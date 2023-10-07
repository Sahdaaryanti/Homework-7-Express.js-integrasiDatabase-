const Film = require('../models/film');

const filmController = {
  getAllFilms: async (req, res) => {
    try {
      const films = await Film.getAllFilms();
      res.json(films);
    } catch (error) {
      console.error('Error Saat Memanggil Seluruh Film:', error);
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },

  getFilmById: async (req, res) => {
    const filmId = req.params.id;

    try {
      const film = await Film.getFilmById(filmId);

      if (!film) {
        res.status(404).json({ error: 'Film tidak ditemukan' });
        return;
      }

      res.json(film);
    } catch (error) {
      console.error(`Error Saat Memanggil Film berdasarkan ID ${filmId}:`, error);
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },
};

module.exports = filmController;
